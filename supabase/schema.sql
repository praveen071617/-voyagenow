-- TripSearch Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Destinations table
CREATE TABLE destinations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL,
  country_code VARCHAR(2) NOT NULL,
  continent VARCHAR(50) NOT NULL,
  flag VARCHAR(10) NOT NULL,
  airport_code VARCHAR(3) NOT NULL,
  image_url TEXT NOT NULL,
  tagline VARCHAR(255) NOT NULL,
  description TEXT,

  -- Costs (in INR)
  hotel_budget INTEGER NOT NULL DEFAULT 1000,
  hotel_mid INTEGER NOT NULL DEFAULT 3000,
  hotel_luxury INTEGER NOT NULL DEFAULT 8000,
  daily_cost_low INTEGER NOT NULL DEFAULT 1500,
  daily_cost_high INTEGER NOT NULL DEFAULT 3000,
  activities_cost_low INTEGER NOT NULL DEFAULT 2000,
  activities_cost_high INTEGER NOT NULL DEFAULT 6000,

  -- Visa
  visa_required BOOLEAN NOT NULL DEFAULT false,
  visa_type VARCHAR(100) NOT NULL DEFAULT 'Visa-free',
  visa_cost INTEGER NOT NULL DEFAULT 0,
  visa_duration VARCHAR(50) NOT NULL DEFAULT '30 days',
  visa_notes TEXT,

  -- Info
  best_time VARCHAR(100) NOT NULL,
  currency_name VARCHAR(50) NOT NULL,
  currency_code VARCHAR(3) NOT NULL,
  language VARCHAR(100) NOT NULL,
  timezone VARCHAR(20) NOT NULL,

  -- eSIM
  esim_provider VARCHAR(50) DEFAULT 'Airalo',
  esim_affiliate_link TEXT,

  -- Metadata
  popular BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Airports table
CREATE TABLE airports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code VARCHAR(3) UNIQUE NOT NULL,
  name VARCHAR(200) NOT NULL,
  city VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL,
  country_code VARCHAR(2) NOT NULL,
  flag VARCHAR(10) NOT NULL,
  latitude DECIMAL(10, 7),
  longitude DECIMAL(10, 7),
  is_major BOOLEAN DEFAULT false
);

-- Flight routes (price estimates from origin to destination)
CREATE TABLE flight_routes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  origin_code VARCHAR(3) NOT NULL REFERENCES airports(code),
  destination_id UUID NOT NULL REFERENCES destinations(id) ON DELETE CASCADE,
  price_low INTEGER NOT NULL,
  price_high INTEGER NOT NULL,
  flight_duration VARCHAR(20),
  airlines TEXT[] DEFAULT '{}',
  direct_available BOOLEAN DEFAULT false,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(origin_code, destination_id)
);

-- Activities for each destination
CREATE TABLE activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  destination_id UUID NOT NULL REFERENCES destinations(id) ON DELETE CASCADE,
  name VARCHAR(200) NOT NULL,
  description TEXT,
  price INTEGER NOT NULL DEFAULT 0,
  duration VARCHAR(50) NOT NULL,
  category VARCHAR(50) DEFAULT 'sightseeing',
  image_url TEXT,
  affiliate_link TEXT,
  popular BOOLEAN DEFAULT false
);

-- eSIM plans for each destination
CREATE TABLE esim_plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  destination_id UUID NOT NULL REFERENCES destinations(id) ON DELETE CASCADE,
  data_amount VARCHAR(20) NOT NULL,
  validity VARCHAR(20) NOT NULL,
  price INTEGER NOT NULL,
  recommended BOOLEAN DEFAULT false
);

-- Create indexes for performance
CREATE INDEX idx_destinations_slug ON destinations(slug);
CREATE INDEX idx_destinations_country ON destinations(country);
CREATE INDEX idx_destinations_continent ON destinations(continent);
CREATE INDEX idx_destinations_popular ON destinations(popular) WHERE popular = true;
CREATE INDEX idx_flight_routes_origin ON flight_routes(origin_code);
CREATE INDEX idx_flight_routes_destination ON flight_routes(destination_id);
CREATE INDEX idx_activities_destination ON activities(destination_id);
CREATE INDEX idx_esim_plans_destination ON esim_plans(destination_id);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_destinations_updated_at
  BEFORE UPDATE ON destinations
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_flight_routes_updated_at
  BEFORE UPDATE ON flight_routes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS)
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE airports ENABLE ROW LEVEL SECURITY;
ALTER TABLE flight_routes ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE esim_plans ENABLE ROW LEVEL SECURITY;

-- Public read access for all tables
CREATE POLICY "Public read access" ON destinations FOR SELECT USING (true);
CREATE POLICY "Public read access" ON airports FOR SELECT USING (true);
CREATE POLICY "Public read access" ON flight_routes FOR SELECT USING (true);
CREATE POLICY "Public read access" ON activities FOR SELECT USING (true);
CREATE POLICY "Public read access" ON esim_plans FOR SELECT USING (true);

-- Service role can do everything (for admin operations)
CREATE POLICY "Service role full access" ON destinations FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access" ON airports FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access" ON flight_routes FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access" ON activities FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access" ON esim_plans FOR ALL USING (auth.role() = 'service_role');
