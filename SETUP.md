# TripSearch Setup Guide

## Overview
TripSearch uses a hybrid data architecture:
- **Supabase** - PostgreSQL database for storing 200+ destinations with accurate visa, cost, and travel info
- **Amadeus API** - Real-time flight and hotel pricing (optional)
- **Static Data** - Fallback data that works without any configuration

## Quick Start (Static Data Only)
The app works immediately with static data for 27 destinations. No configuration needed.

```bash
npm install
npm run dev
```

## Full Setup (Supabase + Amadeus)

### 1. Supabase Setup

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to **SQL Editor** and run the schema:
   ```
   supabase/schema.sql
   ```
4. Then seed the destinations:
   ```
   supabase/seed-destinations.sql
   ```
5. Get your credentials from **Settings > API**:
   - Project URL
   - `anon` public key
   - `service_role` secret key

6. Create `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```

### 2. Amadeus API Setup (Optional - for live prices)

1. Create a free account at [developers.amadeus.com](https://developers.amadeus.com)
2. Create an app to get API credentials
3. Add to `.env.local`:
   ```env
   AMADEUS_CLIENT_ID=your-client-id
   AMADEUS_CLIENT_SECRET=your-client-secret
   AMADEUS_ENV=test
   ```

Note: Free tier includes 2,000 transactions/month. Use `test` environment for development.

### 3. Run the App

```bash
npm run dev
```

## Database Schema

### Tables

| Table | Description |
|-------|-------------|
| `destinations` | 200+ destinations with costs, visa info, best times |
| `airports` | Major Indian departure airports |
| `flight_routes` | Price estimates for origin-destination pairs |
| `activities` | Popular activities for each destination |
| `esim_plans` | eSIM data plans with affiliate links |

### Data Flow

1. User selects departure city and budget
2. App queries Supabase for matching destinations
3. If Amadeus is configured, fetches live flight prices
4. Falls back to estimated prices from `flight_routes` table

## API Routes

| Endpoint | Description |
|----------|-------------|
| `GET /api/destinations` | List all destinations |
| `GET /api/destinations?budget=X&origin=DEL&days=7` | Filter by budget |
| `GET /api/destinations/[slug]` | Single destination details |
| `GET /api/flights?origin=DEL&destination=BKK&departureDate=2025-03-15` | Live flight prices |
| `GET /api/hotels?cityCode=BKK&checkIn=2025-03-15&checkOut=2025-03-20` | Live hotel prices |
| `GET /api/airports` | List of airports |

## Destinations Included

The seed file includes 200+ destinations organized by region:

- **Southeast Asia**: Thailand, Vietnam, Indonesia, Malaysia, Singapore, Philippines, Cambodia
- **East Asia**: Japan, South Korea, Taiwan, Hong Kong, China
- **South Asia**: Sri Lanka, Nepal, Bhutan, Maldives
- **Middle East**: UAE, Qatar, Oman, Bahrain, Jordan, Israel
- **Europe**: UK, France, Italy, Spain, Germany, Netherlands, Greece, Switzerland, Portugal
- **Americas**: USA, Canada, Mexico, Brazil, Argentina, Peru, Costa Rica
- **Africa**: South Africa, Kenya, Morocco, Egypt, Tanzania, Mauritius
- **Oceania**: Australia, New Zealand, Fiji

## Visa Information

All visa information is specific to **Indian passport holders** and includes:
- Visa-free countries (Thailand, Malaysia, Singapore, etc.)
- Visa on arrival (Indonesia, Maldives, etc.)
- e-Visa countries (Sri Lanka, Cambodia, etc.)
- Embassy visa required (Japan, South Korea, Europe, etc.)

## Adding More Destinations

To add new destinations, insert into the `destinations` table:

```sql
INSERT INTO destinations (
  slug, name, country, country_code, continent, flag, airport_code,
  image_url, tagline, description,
  hotel_budget, hotel_mid, hotel_luxury,
  daily_cost_low, daily_cost_high,
  activities_cost_low, activities_cost_high,
  visa_required, visa_type, visa_cost, visa_duration, visa_notes,
  best_time, currency_name, currency_code, language, timezone,
  popular, featured
) VALUES (
  'new-city', 'New City', 'Country', 'XX', 'Continent', '🏳️', 'XXX',
  'https://images.unsplash.com/photo-xxx', 'City tagline', 'Description',
  2000, 5000, 12000,
  1500, 3000,
  2000, 6000,
  false, 'Visa-free', 0, '30 days', 'Notes',
  'October - March', 'Currency', 'CUR', 'Language', 'UTC+X',
  false, false
);
```

## Support

For issues or feature requests, visit the GitHub repository.
