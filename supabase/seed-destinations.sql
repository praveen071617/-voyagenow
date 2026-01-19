-- TripSearch Destination Seed Data
-- 200+ destinations with accurate visa, cost, and travel information for Indian travelers

-- Insert airports first (major Indian airports as departure points)
INSERT INTO airports (code, name, city, country, country_code, flag, is_major) VALUES
('BOM', 'Chhatrapati Shivaji Maharaj International', 'Mumbai', 'India', 'IN', '🇮🇳', true),
('DEL', 'Indira Gandhi International', 'Delhi', 'India', 'IN', '🇮🇳', true),
('BLR', 'Kempegowda International', 'Bangalore', 'India', 'IN', '🇮🇳', true),
('MAA', 'Chennai International', 'Chennai', 'India', 'IN', '🇮🇳', true),
('HYD', 'Rajiv Gandhi International', 'Hyderabad', 'India', 'IN', '🇮🇳', true),
('CCU', 'Netaji Subhas Chandra Bose International', 'Kolkata', 'India', 'IN', '🇮🇳', true),
('COK', 'Cochin International', 'Kochi', 'India', 'IN', '🇮🇳', true),
('AMD', 'Sardar Vallabhbhai Patel International', 'Ahmedabad', 'India', 'IN', '🇮🇳', true),
('PNQ', 'Pune Airport', 'Pune', 'India', 'IN', '🇮🇳', true),
('GOI', 'Goa International', 'Goa', 'India', 'IN', '🇮🇳', true)
ON CONFLICT (code) DO NOTHING;

-- ============================================
-- SOUTHEAST ASIA
-- ============================================

-- Thailand
INSERT INTO destinations (slug, name, country, country_code, continent, flag, airport_code, image_url, tagline, hotel_budget, hotel_mid, hotel_luxury, daily_cost_low, daily_cost_high, activities_cost_low, activities_cost_high, visa_required, visa_type, visa_cost, visa_duration, visa_notes, best_time, currency_name, currency_code, language, timezone, popular, featured) VALUES
('bangkok', 'Bangkok', 'Thailand', 'TH', 'Asia', '🇹🇭', 'BKK', 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&q=80', 'The city that never sleeps', 800, 2500, 6000, 1200, 2500, 2000, 6000, false, 'Visa exemption', 0, '60 days', 'Indian passport holders get 60 days visa-free', 'November - February', 'Thai Baht', 'THB', 'Thai', 'UTC+7', true, true),
('phuket', 'Phuket', 'Thailand', 'TH', 'Asia', '🇹🇭', 'HKT', 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80', 'Pearl of the Andaman', 1000, 3000, 8000, 1500, 3000, 3000, 10000, false, 'Visa exemption', 0, '60 days', 'Indian passport holders get 60 days visa-free', 'November - April', 'Thai Baht', 'THB', 'Thai', 'UTC+7', true, true),
('chiang-mai', 'Chiang Mai', 'Thailand', 'TH', 'Asia', '🇹🇭', 'CNX', 'https://images.unsplash.com/photo-1598935898639-81586f7d2129?w=800&q=80', 'The Rose of the North', 600, 1500, 4000, 1000, 2000, 2000, 5000, false, 'Visa exemption', 0, '60 days', 'Indian passport holders get 60 days visa-free', 'November - February', 'Thai Baht', 'THB', 'Thai', 'UTC+7', true, false),
('krabi', 'Krabi', 'Thailand', 'TH', 'Asia', '🇹🇭', 'KBV', 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80', 'Limestone cliffs and emerald waters', 900, 2500, 7000, 1200, 2500, 2500, 8000, false, 'Visa exemption', 0, '60 days', 'Indian passport holders get 60 days visa-free', 'November - April', 'Thai Baht', 'THB', 'Thai', 'UTC+7', true, false),
('pattaya', 'Pattaya', 'Thailand', 'TH', 'Asia', '🇹🇭', 'BKK', 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800&q=80', 'Beach resort city', 700, 2000, 5000, 1000, 2000, 2000, 5000, false, 'Visa exemption', 0, '60 days', 'Indian passport holders get 60 days visa-free', 'November - February', 'Thai Baht', 'THB', 'Thai', 'UTC+7', false, false),
('koh-samui', 'Koh Samui', 'Thailand', 'TH', 'Asia', '🇹🇭', 'USM', 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=800&q=80', 'Tropical island paradise', 1200, 3500, 10000, 1500, 3000, 3000, 8000, false, 'Visa exemption', 0, '60 days', 'Indian passport holders get 60 days visa-free', 'December - April', 'Thai Baht', 'THB', 'Thai', 'UTC+7', true, false),

-- Vietnam
('hoi-an', 'Hoi An', 'Vietnam', 'VN', 'Asia', '🇻🇳', 'DAD', 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80', 'Ancient town of lanterns', 800, 1800, 4500, 1200, 2500, 2000, 6000, false, 'Free on arrival', 0, '45 days', 'Indian passport holders get 45 days visa-free', 'February - April', 'Vietnamese Dong', 'VND', 'Vietnamese', 'UTC+7', true, true),
('hanoi', 'Hanoi', 'Vietnam', 'VN', 'Asia', '🇻🇳', 'HAN', 'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=800&q=80', 'Where tradition meets chaos', 700, 1500, 4000, 1000, 2500, 2000, 6000, false, 'Free on arrival', 0, '45 days', 'Indian passport holders get 45 days visa-free', 'October - December', 'Vietnamese Dong', 'VND', 'Vietnamese', 'UTC+7', true, false),
('ho-chi-minh', 'Ho Chi Minh City', 'Vietnam', 'VN', 'Asia', '🇻🇳', 'SGN', 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80', 'The bustling heart of Vietnam', 800, 1800, 5000, 1200, 2800, 2000, 6000, false, 'Free on arrival', 0, '45 days', 'Indian passport holders get 45 days visa-free', 'December - April', 'Vietnamese Dong', 'VND', 'Vietnamese', 'UTC+7', true, false),
('da-nang', 'Da Nang', 'Vietnam', 'VN', 'Asia', '🇻🇳', 'DAD', 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80', 'The coastal gem of Central Vietnam', 1000, 2000, 5000, 1500, 3000, 3000, 8000, false, 'Free on arrival', 0, '45 days', 'Indian passport holders get 45 days visa-free', 'February - May', 'Vietnamese Dong', 'VND', 'Vietnamese', 'UTC+7', true, false),
('nha-trang', 'Nha Trang', 'Vietnam', 'VN', 'Asia', '🇻🇳', 'CXR', 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80', 'Beach resort paradise', 900, 2000, 5000, 1200, 2500, 2500, 6000, false, 'Free on arrival', 0, '45 days', 'Indian passport holders get 45 days visa-free', 'February - September', 'Vietnamese Dong', 'VND', 'Vietnamese', 'UTC+7', false, false),
('phu-quoc', 'Phu Quoc', 'Vietnam', 'VN', 'Asia', '🇻🇳', 'PQC', 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=800&q=80', 'Island gem of Vietnam', 1000, 2500, 6000, 1500, 3000, 3000, 7000, false, 'Free on arrival', 0, '45 days', 'Indian passport holders get 45 days visa-free', 'November - March', 'Vietnamese Dong', 'VND', 'Vietnamese', 'UTC+7', false, false),
('sapa', 'Sapa', 'Vietnam', 'VN', 'Asia', '🇻🇳', 'HAN', 'https://images.unsplash.com/photo-1570366583862-f91883984fde?w=800&q=80', 'Mountain retreat with rice terraces', 600, 1500, 3500, 1000, 2000, 1500, 4000, false, 'Free on arrival', 0, '45 days', 'Indian passport holders get 45 days visa-free', 'March - May, September - November', 'Vietnamese Dong', 'VND', 'Vietnamese', 'UTC+7', false, false),

-- Indonesia
('bali', 'Bali', 'Indonesia', 'ID', 'Asia', '🇮🇩', 'DPS', 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', 'Island of the Gods', 1200, 3000, 8000, 1500, 3500, 3000, 10000, false, 'Visa on arrival', 500, '30 days', 'VOA fee ~$35, extendable once', 'April - October', 'Indonesian Rupiah', 'IDR', 'Indonesian', 'UTC+8', true, true),
('jakarta', 'Jakarta', 'Indonesia', 'ID', 'Asia', '🇮🇩', 'CGK', 'https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=800&q=80', 'The Big Durian', 1500, 3500, 8000, 2000, 4000, 2500, 7000, false, 'Visa on arrival', 500, '30 days', 'VOA fee ~$35, extendable once', 'June - September', 'Indonesian Rupiah', 'IDR', 'Indonesian', 'UTC+7', false, false),
('yogyakarta', 'Yogyakarta', 'Indonesia', 'ID', 'Asia', '🇮🇩', 'JOG', 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?w=800&q=80', 'Cultural heart of Java', 600, 1500, 4000, 1000, 2000, 1500, 4000, false, 'Visa on arrival', 500, '30 days', 'VOA fee ~$35, extendable once', 'May - October', 'Indonesian Rupiah', 'IDR', 'Indonesian', 'UTC+7', false, false),
('lombok', 'Lombok', 'Indonesia', 'ID', 'Asia', '🇮🇩', 'LOP', 'https://images.unsplash.com/photo-1570789210967-2cac24e65a35?w=800&q=80', 'Bali untouched neighbor', 1000, 2500, 6000, 1200, 2500, 2500, 6000, false, 'Visa on arrival', 500, '30 days', 'VOA fee ~$35, extendable once', 'May - October', 'Indonesian Rupiah', 'IDR', 'Indonesian', 'UTC+8', false, false),

-- Malaysia
('kuala-lumpur', 'Kuala Lumpur', 'Malaysia', 'MY', 'Asia', '🇲🇾', 'KUL', 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80', 'A melting pot of cultures', 1500, 3500, 8000, 1500, 3000, 2000, 6000, false, 'Visa-free', 0, '30 days', 'Indian passport holders get visa-free entry', 'March - October', 'Malaysian Ringgit', 'MYR', 'Malay, English', 'UTC+8', true, true),
('langkawi', 'Langkawi', 'Malaysia', 'MY', 'Asia', '🇲🇾', 'LGK', 'https://images.unsplash.com/photo-1609946860441-a51ffcf22208?w=800&q=80', 'Jewel of Kedah', 1200, 3000, 8000, 1200, 2500, 2000, 5000, false, 'Visa-free', 0, '30 days', 'Indian passport holders get visa-free entry', 'November - April', 'Malaysian Ringgit', 'MYR', 'Malay, English', 'UTC+8', true, false),
('penang', 'Penang', 'Malaysia', 'MY', 'Asia', '🇲🇾', 'PEN', 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80', 'Pearl of the Orient', 1000, 2500, 6000, 1200, 2500, 1500, 4000, false, 'Visa-free', 0, '30 days', 'Indian passport holders get visa-free entry', 'December - March', 'Malaysian Ringgit', 'MYR', 'Malay, English', 'UTC+8', false, false),
('cameron-highlands', 'Cameron Highlands', 'Malaysia', 'MY', 'Asia', '🇲🇾', 'KUL', 'https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=800&q=80', 'Hill station retreat', 800, 2000, 5000, 1000, 2000, 1500, 3500, false, 'Visa-free', 0, '30 days', 'Indian passport holders get visa-free entry', 'Year-round', 'Malaysian Ringgit', 'MYR', 'Malay, English', 'UTC+8', false, false),
('kota-kinabalu', 'Kota Kinabalu', 'Malaysia', 'MY', 'Asia', '🇲🇾', 'BKI', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80', 'Gateway to Mount Kinabalu', 1000, 2500, 6000, 1200, 2500, 2500, 6000, false, 'Visa-free', 0, '30 days', 'Indian passport holders get visa-free entry', 'March - September', 'Malaysian Ringgit', 'MYR', 'Malay, English', 'UTC+8', false, false),

-- Singapore
('singapore', 'Singapore', 'Singapore', 'SG', 'Asia', '🇸🇬', 'SIN', 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80', 'The Garden City', 4000, 8000, 18000, 3000, 5000, 4000, 12000, false, 'Visa-free', 0, '30 days', 'Indian passport holders get visa-free entry', 'February - April', 'Singapore Dollar', 'SGD', 'English, Mandarin, Malay, Tamil', 'UTC+8', true, true),

-- Philippines
('manila', 'Manila', 'Philippines', 'PH', 'Asia', '🇵🇭', 'MNL', 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&q=80', 'Pearl of the Orient', 1200, 3000, 7000, 1500, 3000, 2000, 6000, false, 'Visa-free', 0, '30 days', 'Indian passport holders get 30 days visa-free', 'December - May', 'Philippine Peso', 'PHP', 'Filipino, English', 'UTC+8', false, false),
('palawan', 'Palawan', 'Philippines', 'PH', 'Asia', '🇵🇭', 'PPS', 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&q=80', 'The Last Frontier', 1500, 4000, 12000, 2000, 4000, 3000, 8000, false, 'Visa-free', 0, '30 days', 'Indian passport holders get 30 days visa-free', 'December - May', 'Philippine Peso', 'PHP', 'Filipino, English', 'UTC+8', true, true),
('cebu', 'Cebu', 'Philippines', 'PH', 'Asia', '🇵🇭', 'CEB', 'https://images.unsplash.com/photo-1573455494060-c5595004fb6c?w=800&q=80', 'Queen City of the South', 1000, 2500, 6000, 1500, 3000, 2000, 5000, false, 'Visa-free', 0, '30 days', 'Indian passport holders get 30 days visa-free', 'January - May', 'Philippine Peso', 'PHP', 'Filipino, English', 'UTC+8', false, false),
('boracay', 'Boracay', 'Philippines', 'PH', 'Asia', '🇵🇭', 'KLO', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80', 'White beach paradise', 1500, 4000, 10000, 2000, 4000, 3000, 8000, false, 'Visa-free', 0, '30 days', 'Indian passport holders get 30 days visa-free', 'November - May', 'Philippine Peso', 'PHP', 'Filipino, English', 'UTC+8', true, false),
('siargao', 'Siargao', 'Philippines', 'PH', 'Asia', '🇵🇭', 'IAO', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', 'Surfing capital of Philippines', 1200, 3000, 7000, 1500, 3000, 2500, 6000, false, 'Visa-free', 0, '30 days', 'Indian passport holders get 30 days visa-free', 'September - November', 'Philippine Peso', 'PHP', 'Filipino, English', 'UTC+8', false, false),

-- Cambodia
('siem-reap', 'Siem Reap', 'Cambodia', 'KH', 'Asia', '🇰🇭', 'REP', 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&q=80', 'Gateway to Angkor Wat', 600, 1500, 4000, 1000, 2000, 2000, 5000, true, 'e-Visa / VOA', 2500, '30 days', 'e-Visa recommended, VOA also available', 'November - February', 'US Dollar', 'USD', 'Khmer, English', 'UTC+7', true, true),
('phnom-penh', 'Phnom Penh', 'Cambodia', 'KH', 'Asia', '🇰🇭', 'PNH', 'https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=800&q=80', 'Pearl of Asia', 700, 1800, 4500, 1200, 2500, 1500, 4000, true, 'e-Visa / VOA', 2500, '30 days', 'e-Visa recommended, VOA also available', 'November - April', 'US Dollar', 'USD', 'Khmer, English', 'UTC+7', false, false),
('sihanoukville', 'Sihanoukville', 'Cambodia', 'KH', 'Asia', '🇰🇭', 'KOS', 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80', 'Beach town gateway', 800, 2000, 5000, 1000, 2500, 2000, 5000, true, 'e-Visa / VOA', 2500, '30 days', 'e-Visa recommended, VOA also available', 'November - May', 'US Dollar', 'USD', 'Khmer, English', 'UTC+7', false, false),

-- Laos
('luang-prabang', 'Luang Prabang', 'Laos', 'LA', 'Asia', '🇱🇦', 'LPQ', 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80', 'UNESCO Heritage Town', 600, 1500, 4000, 1000, 2000, 1500, 4000, true, 'e-Visa / VOA', 3000, '30 days', 'e-Visa available, VOA at airport', 'November - March', 'Lao Kip', 'LAK', 'Lao', 'UTC+7', false, false),
('vientiane', 'Vientiane', 'Laos', 'LA', 'Asia', '🇱🇦', 'VTE', 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80', 'Sleepy capital on Mekong', 500, 1200, 3500, 800, 1800, 1200, 3000, true, 'e-Visa / VOA', 3000, '30 days', 'e-Visa available, VOA at airport', 'November - February', 'Lao Kip', 'LAK', 'Lao', 'UTC+7', false, false),

-- Myanmar
('yangon', 'Yangon', 'Myanmar', 'MM', 'Asia', '🇲🇲', 'RGN', 'https://images.unsplash.com/photo-1527549993586-dff825b37782?w=800&q=80', 'City of golden pagodas', 700, 1800, 4500, 1000, 2500, 1500, 4000, true, 'e-Visa', 4000, '28 days', 'e-Visa required, apply online', 'November - February', 'Myanmar Kyat', 'MMK', 'Burmese', 'UTC+6:30', false, false),
('bagan', 'Bagan', 'Myanmar', 'MM', 'Asia', '🇲🇲', 'NYU', 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', 'Ancient city of temples', 600, 1500, 4000, 800, 2000, 1500, 4000, true, 'e-Visa', 4000, '28 days', 'e-Visa required, apply online', 'October - March', 'Myanmar Kyat', 'MMK', 'Burmese', 'UTC+6:30', true, false),

-- ============================================
-- EAST ASIA
-- ============================================

-- Japan
('tokyo', 'Tokyo', 'Japan', 'JP', 'Asia', '🇯🇵', 'NRT', 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80', 'Where tradition meets the future', 4000, 8000, 20000, 4000, 8000, 5000, 15000, true, 'Tourist Visa', 400, '15-90 days', 'Apply at Japanese embassy/consulate', 'March - May, October - November', 'Japanese Yen', 'JPY', 'Japanese', 'UTC+9', true, true),
('osaka', 'Osaka', 'Japan', 'JP', 'Asia', '🇯🇵', 'KIX', 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80', 'Japan''s kitchen', 3500, 7000, 18000, 3500, 7000, 4000, 12000, true, 'Tourist Visa', 400, '15-90 days', 'Apply at Japanese embassy/consulate', 'March - May, October - November', 'Japanese Yen', 'JPY', 'Japanese', 'UTC+9', true, false),
('kyoto', 'Kyoto', 'Japan', 'JP', 'Asia', '🇯🇵', 'KIX', 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80', 'City of temples and geishas', 4000, 8000, 20000, 4000, 8000, 4000, 12000, true, 'Tourist Visa', 400, '15-90 days', 'Apply at Japanese embassy/consulate', 'March - May, October - November', 'Japanese Yen', 'JPY', 'Japanese', 'UTC+9', true, true),
('hiroshima', 'Hiroshima', 'Japan', 'JP', 'Asia', '🇯🇵', 'HIJ', 'https://images.unsplash.com/photo-1569939220404-f5e3b0ba83f4?w=800&q=80', 'City of peace', 3000, 6000, 15000, 3000, 6000, 3000, 8000, true, 'Tourist Visa', 400, '15-90 days', 'Apply at Japanese embassy/consulate', 'March - May, October - November', 'Japanese Yen', 'JPY', 'Japanese', 'UTC+9', false, false),
('nara', 'Nara', 'Japan', 'JP', 'Asia', '🇯🇵', 'KIX', 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80', 'Ancient capital with friendly deer', 3500, 7000, 16000, 3500, 7000, 3000, 8000, true, 'Tourist Visa', 400, '15-90 days', 'Apply at Japanese embassy/consulate', 'March - May, October - November', 'Japanese Yen', 'JPY', 'Japanese', 'UTC+9', false, false),
('fukuoka', 'Fukuoka', 'Japan', 'JP', 'Asia', '🇯🇵', 'FUK', 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80', 'Ramen capital of Japan', 3000, 6000, 15000, 3000, 6000, 3000, 8000, true, 'Tourist Visa', 400, '15-90 days', 'Apply at Japanese embassy/consulate', 'March - May, September - November', 'Japanese Yen', 'JPY', 'Japanese', 'UTC+9', false, false),
('hokkaido', 'Hokkaido', 'Japan', 'JP', 'Asia', '🇯🇵', 'CTS', 'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800&q=80', 'Winter wonderland', 4000, 8000, 20000, 4000, 8000, 5000, 15000, true, 'Tourist Visa', 400, '15-90 days', 'Apply at Japanese embassy/consulate', 'December - March, July - August', 'Japanese Yen', 'JPY', 'Japanese', 'UTC+9', false, false),
('okinawa', 'Okinawa', 'Japan', 'JP', 'Asia', '🇯🇵', 'OKA', 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?w=800&q=80', 'Tropical paradise of Japan', 3500, 7000, 18000, 3500, 7000, 4000, 10000, true, 'Tourist Visa', 400, '15-90 days', 'Apply at Japanese embassy/consulate', 'April - June, September - November', 'Japanese Yen', 'JPY', 'Japanese', 'UTC+9', false, false),

-- South Korea
('seoul', 'Seoul', 'South Korea', 'KR', 'Asia', '🇰🇷', 'ICN', 'https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80', 'Dynamic K-culture capital', 3000, 6000, 15000, 3000, 6000, 3000, 10000, true, 'Tourist Visa', 3500, '30-90 days', 'Apply at Korean embassy/consulate', 'March - May, September - November', 'Korean Won', 'KRW', 'Korean', 'UTC+9', true, true),
('busan', 'Busan', 'South Korea', 'KR', 'Asia', '🇰🇷', 'PUS', 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80', 'Beach city vibes', 2500, 5000, 12000, 2500, 5000, 2500, 8000, true, 'Tourist Visa', 3500, '30-90 days', 'Apply at Korean embassy/consulate', 'March - May, September - November', 'Korean Won', 'KRW', 'Korean', 'UTC+9', true, false),
('jeju', 'Jeju Island', 'South Korea', 'KR', 'Asia', '🇰🇷', 'CJU', 'https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e?w=800&q=80', 'Island of natural wonders', 3000, 6000, 15000, 3000, 6000, 3000, 9000, true, 'Tourist Visa', 3500, '30-90 days', 'Apply at Korean embassy/consulate', 'April - June, September - October', 'Korean Won', 'KRW', 'Korean', 'UTC+9', true, false),

-- Taiwan
('taipei', 'Taipei', 'Taiwan', 'TW', 'Asia', '🇹🇼', 'TPE', 'https://images.unsplash.com/photo-1470004914212-05527e49370b?w=800&q=80', 'Traditional meets modern', 2500, 5000, 12000, 2500, 5000, 3000, 8000, false, 'Visa-free*', 0, '14 days', 'Free for Indians with valid US/UK/Schengen visa', 'March - May, September - November', 'Taiwan Dollar', 'TWD', 'Mandarin', 'UTC+8', true, false),
('kaohsiung', 'Kaohsiung', 'Taiwan', 'TW', 'Asia', '🇹🇼', 'KHH', 'https://images.unsplash.com/photo-1570789210967-2cac24e65a35?w=800&q=80', 'Harbor city of Taiwan', 2000, 4000, 10000, 2000, 4000, 2500, 7000, false, 'Visa-free*', 0, '14 days', 'Free for Indians with valid US/UK/Schengen visa', 'March - May, October - December', 'Taiwan Dollar', 'TWD', 'Mandarin', 'UTC+8', false, false),

-- Hong Kong & Macau
('hong-kong', 'Hong Kong', 'Hong Kong', 'HK', 'Asia', '🇭🇰', 'HKG', 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80', 'Where East meets West', 4000, 8000, 18000, 3000, 6000, 3000, 10000, false, 'Visa-free', 0, '14 days', 'Indian passport holders get 14 days visa-free', 'October - December', 'Hong Kong Dollar', 'HKD', 'Cantonese, English', 'UTC+8', true, true),
('macau', 'Macau', 'Macau', 'MO', 'Asia', '🇲🇴', 'MFM', 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&q=80', 'Vegas of the East', 4000, 8000, 20000, 3500, 7000, 3000, 10000, true, 'e-Visa', 2000, '30 days', 'Apply online for e-Visa', 'October - December', 'Macau Pataca', 'MOP', 'Cantonese, Portuguese', 'UTC+8', false, false),

-- China
('beijing', 'Beijing', 'China', 'CN', 'Asia', '🇨🇳', 'PEK', 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80', 'Imperial capital', 2500, 5000, 12000, 2500, 5000, 3000, 8000, true, 'Tourist Visa', 5000, '30-60 days', 'Apply at Chinese embassy/consulate', 'April - May, September - October', 'Chinese Yuan', 'CNY', 'Mandarin', 'UTC+8', true, false),
('shanghai', 'Shanghai', 'China', 'CN', 'Asia', '🇨🇳', 'PVG', 'https://images.unsplash.com/photo-1537531383496-f4749b02f233?w=800&q=80', 'The Paris of the East', 3000, 6000, 15000, 3000, 6000, 3000, 9000, true, 'Tourist Visa', 5000, '30-60 days', 'Apply at Chinese embassy/consulate', 'March - May, September - November', 'Chinese Yuan', 'CNY', 'Mandarin', 'UTC+8', true, false),
('guangzhou', 'Guangzhou', 'China', 'CN', 'Asia', '🇨🇳', 'CAN', 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&q=80', 'Gateway to Southern China', 2000, 4500, 10000, 2000, 4000, 2500, 7000, true, 'Tourist Visa', 5000, '30-60 days', 'Apply at Chinese embassy/consulate', 'October - March', 'Chinese Yuan', 'CNY', 'Cantonese, Mandarin', 'UTC+8', false, false),
('xian', 'Xi''an', 'China', 'CN', 'Asia', '🇨🇳', 'XIY', 'https://images.unsplash.com/photo-1529551739587-e242c564f727?w=800&q=80', 'Home of Terracotta Warriors', 1800, 4000, 9000, 1800, 4000, 2500, 6000, true, 'Tourist Visa', 5000, '30-60 days', 'Apply at Chinese embassy/consulate', 'March - May, September - November', 'Chinese Yuan', 'CNY', 'Mandarin', 'UTC+8', false, false),
('chengdu', 'Chengdu', 'China', 'CN', 'Asia', '🇨🇳', 'CTU', 'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=800&q=80', 'Land of pandas', 1800, 4000, 9000, 1800, 4000, 2000, 6000, true, 'Tourist Visa', 5000, '30-60 days', 'Apply at Chinese embassy/consulate', 'March - June, September - November', 'Chinese Yuan', 'CNY', 'Mandarin', 'UTC+8', false, false),

-- ============================================
-- MIDDLE EAST
-- ============================================

-- UAE
('dubai', 'Dubai', 'UAE', 'AE', 'Asia', '🇦🇪', 'DXB', 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80', 'Where luxury meets adventure', 3000, 6000, 15000, 3000, 6000, 5000, 15000, true, 'Tourist Visa', 5500, '30 days', 'Online application, processed in 3-4 days', 'November - March', 'UAE Dirham', 'AED', 'Arabic, English', 'UTC+4', true, true),
('abu-dhabi', 'Abu Dhabi', 'UAE', 'AE', 'Asia', '🇦🇪', 'AUH', 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80', 'The capital of culture and luxury', 3500, 7000, 18000, 3500, 7000, 4000, 12000, true, 'Tourist Visa', 5500, '30 days', 'Same UAE visa works for Dubai and Abu Dhabi', 'November - March', 'UAE Dirham', 'AED', 'Arabic, English', 'UTC+4', true, false),

-- Saudi Arabia
('riyadh', 'Riyadh', 'Saudi Arabia', 'SA', 'Asia', '🇸🇦', 'RUH', 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80', 'Modern kingdom capital', 4000, 8000, 20000, 3500, 7000, 4000, 12000, true, 'e-Visa', 8500, '90 days', 'e-Visa available for tourism', 'November - March', 'Saudi Riyal', 'SAR', 'Arabic', 'UTC+3', false, false),
('jeddah', 'Jeddah', 'Saudi Arabia', 'SA', 'Asia', '🇸🇦', 'JED', 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80', 'Gateway to Mecca', 3500, 7000, 18000, 3000, 6000, 3500, 10000, true, 'e-Visa', 8500, '90 days', 'e-Visa available for tourism', 'October - April', 'Saudi Riyal', 'SAR', 'Arabic', 'UTC+3', false, false),

-- Qatar
('doha', 'Doha', 'Qatar', 'QA', 'Asia', '🇶🇦', 'DOH', 'https://images.unsplash.com/photo-1557411732-1797a9171fcf?w=800&q=80', 'Pearl of the Gulf', 4000, 8000, 20000, 4000, 8000, 5000, 15000, true, 'Visa on arrival', 0, '30 days', 'Free visa on arrival for Indians', 'November - April', 'Qatari Riyal', 'QAR', 'Arabic, English', 'UTC+3', true, false),

-- Oman
('muscat', 'Muscat', 'Oman', 'OM', 'Asia', '🇴🇲', 'MCT', 'https://images.unsplash.com/photo-1597811191510-09d6ca79a5b7?w=800&q=80', 'Gem of Arabia', 3000, 6000, 15000, 2500, 5000, 3000, 8000, true, 'e-Visa', 1500, '30 days', 'e-Visa available online', 'October - April', 'Omani Rial', 'OMR', 'Arabic', 'UTC+4', false, false),

-- Bahrain
('manama', 'Manama', 'Bahrain', 'BH', 'Asia', '🇧🇭', 'BAH', 'https://images.unsplash.com/photo-1548111087-cf79e819dfb4?w=800&q=80', 'Island kingdom', 3500, 7000, 16000, 3000, 6000, 3500, 10000, true, 'e-Visa', 2500, '14 days', 'e-Visa available, extendable', 'November - March', 'Bahraini Dinar', 'BHD', 'Arabic', 'UTC+3', false, false),

-- Jordan
('amman', 'Amman', 'Jordan', 'JO', 'Asia', '🇯🇴', 'AMM', 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?w=800&q=80', 'Ancient meets modern', 2500, 5000, 12000, 2500, 5000, 3000, 8000, true, 'Visa on arrival', 3500, '30 days', 'VOA available, Jordan Pass recommended', 'March - May, September - November', 'Jordanian Dinar', 'JOD', 'Arabic', 'UTC+3', false, false),
('petra', 'Petra', 'Jordan', 'JO', 'Asia', '🇯🇴', 'AMM', 'https://images.unsplash.com/photo-1553913861-c2eb68a6a2f3?w=800&q=80', 'Rose-red city', 2000, 4500, 10000, 2000, 4000, 4000, 8000, true, 'Visa on arrival', 3500, '30 days', 'VOA available, Jordan Pass recommended', 'March - May, September - November', 'Jordanian Dinar', 'JOD', 'Arabic', 'UTC+3', true, true),

-- Israel
('tel-aviv', 'Tel Aviv', 'Israel', 'IL', 'Asia', '🇮🇱', 'TLV', 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&q=80', 'The city that never sleeps', 5000, 10000, 25000, 5000, 10000, 5000, 15000, true, 'Tourist Visa', 5000, '90 days', 'Apply at Israeli embassy', 'April - October', 'Israeli Shekel', 'ILS', 'Hebrew, Arabic', 'UTC+2', false, false),
('jerusalem', 'Jerusalem', 'Israel', 'IL', 'Asia', '🇮🇱', 'TLV', 'https://images.unsplash.com/photo-1554302780-60a3b96de7e0?w=800&q=80', 'Holy city', 4500, 9000, 22000, 4500, 9000, 4000, 12000, true, 'Tourist Visa', 5000, '90 days', 'Apply at Israeli embassy', 'March - May, September - November', 'Israeli Shekel', 'ILS', 'Hebrew, Arabic', 'UTC+2', true, false),

-- Turkey
('istanbul', 'Istanbul', 'Turkey', 'TR', 'Asia/Europe', '🇹🇷', 'IST', 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&q=80', 'Where two continents meet', 2000, 4500, 12000, 2500, 5000, 3000, 8000, true, 'e-Visa', 4000, '90 days', 'e-Visa available online', 'April - May, September - November', 'Turkish Lira', 'TRY', 'Turkish', 'UTC+3', true, true),
('cappadocia', 'Cappadocia', 'Turkey', 'TR', 'Asia', '🇹🇷', 'ASR', 'https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=800&q=80', 'Land of fairy chimneys', 2500, 5000, 12000, 2000, 4000, 4000, 10000, true, 'e-Visa', 4000, '90 days', 'e-Visa available online', 'April - June, September - November', 'Turkish Lira', 'TRY', 'Turkish', 'UTC+3', true, true),
('antalya', 'Antalya', 'Turkey', 'TR', 'Asia', '🇹🇷', 'AYT', 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80', 'Turkish Riviera', 2000, 4000, 10000, 2000, 4000, 2500, 7000, true, 'e-Visa', 4000, '90 days', 'e-Visa available online', 'April - October', 'Turkish Lira', 'TRY', 'Turkish', 'UTC+3', false, false),

-- ============================================
-- SOUTH ASIA
-- ============================================

-- Maldives
('maldives', 'Maldives', 'Maldives', 'MV', 'Asia', '🇲🇻', 'MLE', 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', 'Paradise on Earth', 5000, 15000, 50000, 3000, 8000, 5000, 20000, false, 'Visa on arrival', 0, '30 days', 'Free visa on arrival for all nationalities', 'November - April', 'Maldivian Rufiyaa', 'MVR', 'Dhivehi, English', 'UTC+5', true, true),

-- Sri Lanka
('colombo', 'Colombo', 'Sri Lanka', 'LK', 'Asia', '🇱🇰', 'CMB', 'https://images.unsplash.com/photo-1586076585229-a4a7ffb9c8b5?w=800&q=80', 'The gateway to Sri Lanka', 1000, 2500, 6000, 1200, 2500, 2000, 5000, true, 'ETA', 2000, '30 days', 'Apply online before travel', 'December - March', 'Sri Lankan Rupee', 'LKR', 'Sinhala, Tamil, English', 'UTC+5:30', true, false),
('kandy', 'Kandy', 'Sri Lanka', 'LK', 'Asia', '🇱🇰', 'CMB', 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80', 'Hill capital', 800, 2000, 5000, 1000, 2000, 1500, 4000, true, 'ETA', 2000, '30 days', 'Apply online before travel', 'January - April', 'Sri Lankan Rupee', 'LKR', 'Sinhala, Tamil, English', 'UTC+5:30', false, false),
('galle', 'Galle', 'Sri Lanka', 'LK', 'Asia', '🇱🇰', 'CMB', 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80', 'Colonial charm', 1200, 3000, 7000, 1200, 2500, 2000, 5000, true, 'ETA', 2000, '30 days', 'Apply online before travel', 'December - April', 'Sri Lankan Rupee', 'LKR', 'Sinhala, Tamil, English', 'UTC+5:30', false, false),
('ella', 'Ella', 'Sri Lanka', 'LK', 'Asia', '🇱🇰', 'CMB', 'https://images.unsplash.com/photo-1575385151164-30e1f7e8cfab?w=800&q=80', 'Mountain paradise', 600, 1500, 4000, 800, 1800, 1500, 3500, true, 'ETA', 2000, '30 days', 'Apply online before travel', 'January - March', 'Sri Lankan Rupee', 'LKR', 'Sinhala, Tamil, English', 'UTC+5:30', true, false),
('sigiriya', 'Sigiriya', 'Sri Lanka', 'LK', 'Asia', '🇱🇰', 'CMB', 'https://images.unsplash.com/photo-1586076585229-a4a7ffb9c8b5?w=800&q=80', 'Lion Rock fortress', 700, 1800, 4500, 1000, 2000, 2500, 5000, true, 'ETA', 2000, '30 days', 'Apply online before travel', 'January - April', 'Sri Lankan Rupee', 'LKR', 'Sinhala, Tamil, English', 'UTC+5:30', true, false),

-- Nepal
('kathmandu', 'Kathmandu', 'Nepal', 'NP', 'Asia', '🇳🇵', 'KTM', 'https://images.unsplash.com/photo-1558799401-1dcba79834c2?w=800&q=80', 'City of temples', 800, 2000, 5000, 1000, 2500, 2000, 6000, false, 'Visa-free', 0, 'Unlimited', 'Indian citizens do not need visa for Nepal', 'October - December, March - April', 'Nepalese Rupee', 'NPR', 'Nepali, English', 'UTC+5:45', true, true),
('pokhara', 'Pokhara', 'Nepal', 'NP', 'Asia', '🇳🇵', 'PKR', 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80', 'Gateway to Himalayas', 700, 1800, 4500, 800, 2000, 2000, 5000, false, 'Visa-free', 0, 'Unlimited', 'Indian citizens do not need visa for Nepal', 'October - November, March - April', 'Nepalese Rupee', 'NPR', 'Nepali, English', 'UTC+5:45', true, false),
('everest-base-camp', 'Everest Base Camp', 'Nepal', 'NP', 'Asia', '🇳🇵', 'LUA', 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=800&q=80', 'Roof of the world', 1500, 3000, 6000, 2000, 4000, 10000, 25000, false, 'Visa-free', 0, 'Unlimited', 'Trekking permit required', 'March - May, September - November', 'Nepalese Rupee', 'NPR', 'Nepali, English', 'UTC+5:45', true, false),

-- Bhutan
('paro', 'Paro', 'Bhutan', 'BT', 'Asia', '🇧🇹', 'PBH', 'https://images.unsplash.com/photo-1553856622-d1b352e24a82?w=800&q=80', 'Land of the Thunder Dragon', 3000, 6000, 15000, 3000, 6000, 3000, 8000, true, 'Permit', 8500, 'As per itinerary', 'SDF $100/day for SAARC nationals (was $200)', 'March - May, September - November', 'Ngultrum', 'BTN', 'Dzongkha, English', 'UTC+6', true, true),
('thimphu', 'Thimphu', 'Bhutan', 'BT', 'Asia', '🇧🇹', 'PBH', 'https://images.unsplash.com/photo-1553856622-d1b352e24a82?w=800&q=80', 'Capital without traffic lights', 3000, 6000, 15000, 3000, 6000, 2500, 7000, true, 'Permit', 8500, 'As per itinerary', 'SDF $100/day for SAARC nationals (was $200)', 'March - May, September - November', 'Ngultrum', 'BTN', 'Dzongkha, English', 'UTC+6', false, false),
('punakha', 'Punakha', 'Bhutan', 'BT', 'Asia', '🇧🇹', 'PBH', 'https://images.unsplash.com/photo-1553856622-d1b352e24a82?w=800&q=80', 'Valley of fertility', 2800, 5500, 14000, 2800, 5500, 2500, 6000, true, 'Permit', 8500, 'As per itinerary', 'SDF $100/day for SAARC nationals (was $200)', 'March - May, October - November', 'Ngultrum', 'BTN', 'Dzongkha, English', 'UTC+6', false, false),

-- Bangladesh
('dhaka', 'Dhaka', 'Bangladesh', 'BD', 'Asia', '🇧🇩', 'DAC', 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80', 'City of rickshaws', 1000, 2500, 6000, 1000, 2500, 1500, 4000, true, 'Visa on arrival', 3500, '30 days', 'VOA available for Indians', 'November - February', 'Bangladeshi Taka', 'BDT', 'Bengali', 'UTC+6', false, false),
('coxs-bazar', 'Cox''s Bazar', 'Bangladesh', 'BD', 'Asia', '🇧🇩', 'CXB', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', 'World''s longest beach', 800, 2000, 5000, 800, 2000, 1500, 4000, true, 'Visa on arrival', 3500, '30 days', 'VOA available for Indians', 'November - March', 'Bangladeshi Taka', 'BDT', 'Bengali', 'UTC+6', false, false),

-- ============================================
-- EUROPE
-- ============================================

-- UK
('london', 'London', 'United Kingdom', 'GB', 'Europe', '🇬🇧', 'LHR', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80', 'The city of history and culture', 8000, 15000, 35000, 5000, 10000, 5000, 15000, true, 'Standard Visitor Visa', 10000, '6 months', 'Apply online, biometrics required', 'April - September', 'British Pound', 'GBP', 'English', 'UTC+0/+1', true, true),
('edinburgh', 'Edinburgh', 'United Kingdom', 'GB', 'Europe', '🇬🇧', 'EDI', 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=800&q=80', 'Athens of the North', 6000, 12000, 28000, 4500, 9000, 4000, 12000, true, 'Standard Visitor Visa', 10000, '6 months', 'Same UK visa covers Scotland', 'May - September', 'British Pound', 'GBP', 'English', 'UTC+0/+1', false, false),

-- France
('paris', 'Paris', 'France', 'FR', 'Europe', '🇫🇷', 'CDG', 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', 'City of Love', 7000, 14000, 30000, 5000, 10000, 5000, 15000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS, multi-entry possible', 'April - June, September - November', 'Euro', 'EUR', 'French', 'UTC+1/+2', true, true),
('nice', 'Nice', 'France', 'FR', 'Europe', '🇫🇷', 'NCE', 'https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=800&q=80', 'Queen of the French Riviera', 6000, 12000, 28000, 4500, 9000, 4000, 12000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS, multi-entry possible', 'June - September', 'Euro', 'EUR', 'French', 'UTC+1/+2', false, false),

-- Italy
('rome', 'Rome', 'Italy', 'IT', 'Europe', '🇮🇹', 'FCO', 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80', 'The Eternal City', 6000, 12000, 28000, 4500, 9000, 4000, 12000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'April - June, September - October', 'Euro', 'EUR', 'Italian', 'UTC+1/+2', true, true),
('venice', 'Venice', 'Italy', 'IT', 'Europe', '🇮🇹', 'VCE', 'https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=800&q=80', 'City of Canals', 7000, 14000, 32000, 5000, 10000, 4000, 12000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'April - June, September - November', 'Euro', 'EUR', 'Italian', 'UTC+1/+2', true, false),
('florence', 'Florence', 'Italy', 'IT', 'Europe', '🇮🇹', 'FLR', 'https://images.unsplash.com/photo-1543429258-ea9a4d9a98e4?w=800&q=80', 'Cradle of the Renaissance', 5500, 11000, 26000, 4000, 8000, 4000, 10000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'April - June, September - October', 'Euro', 'EUR', 'Italian', 'UTC+1/+2', true, false),
('milan', 'Milan', 'Italy', 'IT', 'Europe', '🇮🇹', 'MXP', 'https://images.unsplash.com/photo-1520440229-6469625ff3e3?w=800&q=80', 'Fashion capital of the world', 6000, 12000, 30000, 4500, 9000, 4000, 12000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'April - June, September - November', 'Euro', 'EUR', 'Italian', 'UTC+1/+2', false, false),
('amalfi-coast', 'Amalfi Coast', 'Italy', 'IT', 'Europe', '🇮🇹', 'NAP', 'https://images.unsplash.com/photo-1548484352-ea579e5233a8?w=800&q=80', 'Stunning coastal beauty', 8000, 16000, 40000, 5000, 10000, 4000, 12000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'May - September', 'Euro', 'EUR', 'Italian', 'UTC+1/+2', true, false),

-- Spain
('barcelona', 'Barcelona', 'Spain', 'ES', 'Europe', '🇪🇸', 'BCN', 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80', 'Gaudi''s masterpiece city', 5500, 11000, 26000, 4000, 8000, 4000, 12000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'May - June, September - October', 'Euro', 'EUR', 'Spanish, Catalan', 'UTC+1/+2', true, true),
('madrid', 'Madrid', 'Spain', 'ES', 'Europe', '🇪🇸', 'MAD', 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80', 'Heart of Spain', 5000, 10000, 24000, 3500, 7000, 3500, 10000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'March - May, September - November', 'Euro', 'EUR', 'Spanish', 'UTC+1/+2', false, false),
('seville', 'Seville', 'Spain', 'ES', 'Europe', '🇪🇸', 'SVQ', 'https://images.unsplash.com/photo-1558370781-d6196949e317?w=800&q=80', 'Soul of Andalusia', 4500, 9000, 22000, 3500, 7000, 3000, 8000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'March - May, September - November', 'Euro', 'EUR', 'Spanish', 'UTC+1/+2', false, false),
('ibiza', 'Ibiza', 'Spain', 'ES', 'Europe', '🇪🇸', 'IBZ', 'https://images.unsplash.com/photo-1534190239940-9ba8944ea261?w=800&q=80', 'Party island paradise', 7000, 14000, 35000, 5000, 10000, 5000, 15000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'June - September', 'Euro', 'EUR', 'Spanish', 'UTC+1/+2', false, false),

-- Germany
('berlin', 'Berlin', 'Germany', 'DE', 'Europe', '🇩🇪', 'BER', 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800&q=80', 'City of history and art', 5000, 10000, 24000, 4000, 8000, 3500, 10000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'May - September', 'Euro', 'EUR', 'German', 'UTC+1/+2', true, false),
('munich', 'Munich', 'Germany', 'DE', 'Europe', '🇩🇪', 'MUC', 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&q=80', 'Bavaria''s jewel', 5500, 11000, 26000, 4500, 9000, 4000, 12000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'May - October', 'Euro', 'EUR', 'German', 'UTC+1/+2', false, false),

-- Netherlands
('amsterdam', 'Amsterdam', 'Netherlands', 'NL', 'Europe', '🇳🇱', 'AMS', 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80', 'Venice of the North', 6000, 12000, 28000, 4500, 9000, 4000, 12000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'April - September', 'Euro', 'EUR', 'Dutch, English', 'UTC+1/+2', true, true),

-- Switzerland
('zurich', 'Zurich', 'Switzerland', 'CH', 'Europe', '🇨🇭', 'ZRH', 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=800&q=80', 'Financial capital of Switzerland', 10000, 20000, 50000, 8000, 15000, 6000, 18000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'June - September, December - March', 'Swiss Franc', 'CHF', 'German, French, Italian', 'UTC+1/+2', true, false),
('interlaken', 'Interlaken', 'Switzerland', 'CH', 'Europe', '🇨🇭', 'ZRH', 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80', 'Adventure capital of Switzerland', 8000, 16000, 40000, 6000, 12000, 8000, 20000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'June - September, December - March', 'Swiss Franc', 'CHF', 'German', 'UTC+1/+2', true, true),
('geneva', 'Geneva', 'Switzerland', 'CH', 'Europe', '🇨🇭', 'GVA', 'https://images.unsplash.com/photo-1573108724029-4c46571d6490?w=800&q=80', 'International city', 9000, 18000, 45000, 7000, 14000, 5000, 15000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'June - September', 'Swiss Franc', 'CHF', 'French', 'UTC+1/+2', false, false),

-- Austria
('vienna', 'Vienna', 'Austria', 'AT', 'Europe', '🇦🇹', 'VIE', 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80', 'City of music', 5000, 10000, 25000, 4000, 8000, 4000, 12000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'April - October', 'Euro', 'EUR', 'German', 'UTC+1/+2', true, false),
('salzburg', 'Salzburg', 'Austria', 'AT', 'Europe', '🇦🇹', 'SZG', 'https://images.unsplash.com/photo-1592652426689-4f854d8c9b7c?w=800&q=80', 'Mozart''s birthplace', 5500, 11000, 26000, 4500, 9000, 4000, 10000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'April - October, December', 'Euro', 'EUR', 'German', 'UTC+1/+2', false, false),

-- Czech Republic
('prague', 'Prague', 'Czech Republic', 'CZ', 'Europe', '🇨🇿', 'PRG', 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80', 'City of a Hundred Spires', 3500, 7000, 18000, 3000, 6000, 3000, 8000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'April - May, September - October', 'Czech Koruna', 'CZK', 'Czech', 'UTC+1/+2', true, true),

-- Hungary
('budapest', 'Budapest', 'Hungary', 'HU', 'Europe', '🇭🇺', 'BUD', 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80', 'Pearl of the Danube', 3000, 6000, 15000, 2500, 5000, 2500, 7000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'March - May, September - November', 'Hungarian Forint', 'HUF', 'Hungarian', 'UTC+1/+2', true, false),

-- Poland
('krakow', 'Krakow', 'Poland', 'PL', 'Europe', '🇵🇱', 'KRK', 'https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=800&q=80', 'Cultural capital of Poland', 2500, 5000, 12000, 2000, 4000, 2000, 6000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'May - September', 'Polish Zloty', 'PLN', 'Polish', 'UTC+1/+2', false, false),

-- Portugal
('lisbon', 'Lisbon', 'Portugal', 'PT', 'Europe', '🇵🇹', 'LIS', 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80', 'City of seven hills', 4500, 9000, 22000, 3500, 7000, 3000, 9000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'March - May, September - October', 'Euro', 'EUR', 'Portuguese', 'UTC+0/+1', true, false),
('porto', 'Porto', 'Portugal', 'PT', 'Europe', '🇵🇹', 'OPO', 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80', 'City of port wine', 4000, 8000, 20000, 3000, 6000, 2500, 8000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'May - September', 'Euro', 'EUR', 'Portuguese', 'UTC+0/+1', false, false),

-- Greece
('athens', 'Athens', 'Greece', 'GR', 'Europe', '🇬🇷', 'ATH', 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80', 'Cradle of civilization', 4000, 8000, 20000, 3500, 7000, 3000, 9000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'April - June, September - October', 'Euro', 'EUR', 'Greek', 'UTC+2/+3', true, false),
('santorini', 'Santorini', 'Greece', 'GR', 'Europe', '🇬🇷', 'JTR', 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80', 'Iconic white and blue', 6000, 12000, 30000, 4500, 9000, 4000, 12000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'May - October', 'Euro', 'EUR', 'Greek', 'UTC+2/+3', true, true),
('mykonos', 'Mykonos', 'Greece', 'GR', 'Europe', '🇬🇷', 'JMK', 'https://images.unsplash.com/photo-1601581875039-e899893d520c?w=800&q=80', 'Party island of the Cyclades', 7000, 14000, 35000, 5000, 10000, 5000, 15000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'June - September', 'Euro', 'EUR', 'Greek', 'UTC+2/+3', false, false),

-- Croatia
('dubrovnik', 'Dubrovnik', 'Croatia', 'HR', 'Europe', '🇭🇷', 'DBV', 'https://images.unsplash.com/photo-1555990538-1e6c89e04e9e?w=800&q=80', 'Pearl of the Adriatic', 5000, 10000, 25000, 4000, 8000, 3500, 10000, true, 'Schengen Visa', 6500, '90 days', 'Croatia joined Schengen in 2023', 'May - September', 'Euro', 'EUR', 'Croatian', 'UTC+1/+2', true, true),

-- Iceland
('reykjavik', 'Reykjavik', 'Iceland', 'IS', 'Europe', '🇮🇸', 'KEF', 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&q=80', 'Land of fire and ice', 10000, 20000, 50000, 8000, 15000, 10000, 30000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'June - August, December - February', 'Icelandic Krona', 'ISK', 'Icelandic, English', 'UTC+0', true, true),

-- Norway
('oslo', 'Oslo', 'Norway', 'NO', 'Europe', '🇳🇴', 'OSL', 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80', 'Gateway to the fjords', 8000, 16000, 40000, 6000, 12000, 5000, 15000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'May - September', 'Norwegian Krone', 'NOK', 'Norwegian', 'UTC+1/+2', false, false),
('bergen', 'Bergen', 'Norway', 'NO', 'Europe', '🇳🇴', 'BGO', 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80', 'Gateway to the fjords', 7500, 15000, 38000, 5500, 11000, 6000, 18000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'May - September', 'Norwegian Krone', 'NOK', 'Norwegian', 'UTC+1/+2', true, false),
('tromso', 'Tromso', 'Norway', 'NO', 'Europe', '🇳🇴', 'TOS', 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80', 'Arctic capital', 8000, 16000, 40000, 6000, 12000, 8000, 20000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'November - March, June - August', 'Norwegian Krone', 'NOK', 'Norwegian', 'UTC+1/+2', true, false),

-- Finland
('helsinki', 'Helsinki', 'Finland', 'FI', 'Europe', '🇫🇮', 'HEL', 'https://images.unsplash.com/photo-1559582930-89d40a4acbf7?w=800&q=80', 'Design capital of the world', 6000, 12000, 30000, 5000, 10000, 4000, 12000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'May - September, December - March', 'Euro', 'EUR', 'Finnish, Swedish', 'UTC+2/+3', false, false),
('rovaniemi', 'Rovaniemi', 'Finland', 'FI', 'Europe', '🇫🇮', 'RVN', 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80', 'Home of Santa Claus', 7000, 14000, 35000, 6000, 12000, 6000, 18000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'December - March, June - August', 'Euro', 'EUR', 'Finnish', 'UTC+2/+3', true, false),

-- Sweden
('stockholm', 'Stockholm', 'Sweden', 'SE', 'Europe', '🇸🇪', 'ARN', 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80', 'Venice of the North', 6000, 12000, 30000, 5000, 10000, 4000, 12000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'May - September', 'Swedish Krona', 'SEK', 'Swedish', 'UTC+1/+2', false, false),

-- Denmark
('copenhagen', 'Copenhagen', 'Denmark', 'DK', 'Europe', '🇩🇰', 'CPH', 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80', 'Happiest city in the world', 6500, 13000, 32000, 5000, 10000, 4000, 12000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'May - September', 'Danish Krone', 'DKK', 'Danish', 'UTC+1/+2', false, false),

-- Belgium
('brussels', 'Brussels', 'Belgium', 'BE', 'Europe', '🇧🇪', 'BRU', 'https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?w=800&q=80', 'Heart of Europe', 5000, 10000, 25000, 4000, 8000, 3500, 10000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'April - October', 'Euro', 'EUR', 'Dutch, French, German', 'UTC+1/+2', false, false),
('bruges', 'Bruges', 'Belgium', 'BE', 'Europe', '🇧🇪', 'BRU', 'https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?w=800&q=80', 'Medieval fairy tale', 5500, 11000, 27000, 4500, 9000, 3500, 9000, true, 'Schengen Visa', 6500, '90 days', 'Apply at VFS', 'April - October', 'Euro', 'EUR', 'Dutch', 'UTC+1/+2', false, false),

-- Ireland
('dublin', 'Dublin', 'Ireland', 'IE', 'Europe', '🇮🇪', 'DUB', 'https://images.unsplash.com/photo-1549918864-48ac978761a4?w=800&q=80', 'City of literature', 6000, 12000, 28000, 5000, 10000, 4000, 12000, true, 'Irish Visa', 5000, '90 days', 'Separate from Schengen, apply at Irish embassy', 'May - September', 'Euro', 'EUR', 'English, Irish', 'UTC+0/+1', false, false),

-- Russia
('moscow', 'Moscow', 'Russia', 'RU', 'Europe', '🇷🇺', 'SVO', 'https://images.unsplash.com/photo-1520106212299-d99c443e4568?w=800&q=80', 'Capital of the tsars', 4000, 8000, 20000, 3500, 7000, 3000, 9000, true, 'Tourist Visa', 8000, '30 days', 'Apply at Russian embassy, invitation letter needed', 'May - September', 'Russian Ruble', 'RUB', 'Russian', 'UTC+3', false, false),
('st-petersburg', 'St. Petersburg', 'Russia', 'RU', 'Europe', '🇷🇺', 'LED', 'https://images.unsplash.com/photo-1556610961-2fecc5927173?w=800&q=80', 'Window to Europe', 3500, 7000, 18000, 3000, 6000, 3000, 8000, true, 'Tourist Visa', 8000, '30 days', 'Apply at Russian embassy, invitation letter needed', 'May - September', 'Russian Ruble', 'RUB', 'Russian', 'UTC+3', true, false),

-- ============================================
-- AFRICA
-- ============================================

-- Egypt
('cairo', 'Cairo', 'Egypt', 'EG', 'Africa', '🇪🇬', 'CAI', 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80', 'City of a thousand minarets', 2000, 4000, 10000, 2000, 4000, 3000, 8000, true, 'e-Visa', 2500, '30 days', 'e-Visa available online', 'October - April', 'Egyptian Pound', 'EGP', 'Arabic', 'UTC+2', true, true),
('luxor', 'Luxor', 'Egypt', 'EG', 'Africa', '🇪🇬', 'LXR', 'https://images.unsplash.com/photo-1553913861-c2eb68a6a2f3?w=800&q=80', 'World''s greatest open-air museum', 1800, 3500, 9000, 1800, 3500, 3000, 8000, true, 'e-Visa', 2500, '30 days', 'e-Visa available online', 'October - April', 'Egyptian Pound', 'EGP', 'Arabic', 'UTC+2', true, false),
('hurghada', 'Hurghada', 'Egypt', 'EG', 'Africa', '🇪🇬', 'HRG', 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80', 'Red Sea resort paradise', 2500, 5000, 12000, 2000, 4000, 3000, 8000, true, 'e-Visa', 2500, '30 days', 'e-Visa available online', 'March - May, September - November', 'Egyptian Pound', 'EGP', 'Arabic', 'UTC+2', false, false),

-- Morocco
('marrakech', 'Marrakech', 'Morocco', 'MA', 'Africa', '🇲🇦', 'RAK', 'https://images.unsplash.com/photo-1517821362941-f7f753200fef?w=800&q=80', 'Red city of Morocco', 2000, 4000, 10000, 2000, 4000, 2500, 7000, true, 'e-Visa', 2000, '90 days', 'e-Visa available for Indians', 'March - May, September - November', 'Moroccan Dirham', 'MAD', 'Arabic, French', 'UTC+0/+1', true, true),
('fes', 'Fes', 'Morocco', 'MA', 'Africa', '🇲🇦', 'FEZ', 'https://images.unsplash.com/photo-1517821362941-f7f753200fef?w=800&q=80', 'Cultural capital of Morocco', 1800, 3500, 8000, 1800, 3500, 2000, 5000, true, 'e-Visa', 2000, '90 days', 'e-Visa available for Indians', 'March - May, September - November', 'Moroccan Dirham', 'MAD', 'Arabic, French', 'UTC+0/+1', false, false),
('casablanca', 'Casablanca', 'Morocco', 'MA', 'Africa', '🇲🇦', 'CMN', 'https://images.unsplash.com/photo-1517821362941-f7f753200fef?w=800&q=80', 'Morocco''s economic heart', 2200, 4500, 11000, 2200, 4500, 2500, 6000, true, 'e-Visa', 2000, '90 days', 'e-Visa available for Indians', 'March - May, September - November', 'Moroccan Dirham', 'MAD', 'Arabic, French', 'UTC+0/+1', false, false),

-- South Africa
('cape-town', 'Cape Town', 'South Africa', 'ZA', 'Africa', '🇿🇦', 'CPT', 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80', 'Mother City', 3000, 6000, 15000, 3000, 6000, 3500, 10000, true, 'e-Visa', 0, '90 days', 'Indians eligible for e-Visa', 'October - April', 'South African Rand', 'ZAR', 'English, Afrikaans', 'UTC+2', true, true),
('johannesburg', 'Johannesburg', 'South Africa', 'ZA', 'Africa', '🇿🇦', 'JNB', 'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=800&q=80', 'City of Gold', 2500, 5000, 12000, 2500, 5000, 3000, 8000, true, 'e-Visa', 0, '90 days', 'Indians eligible for e-Visa', 'October - April', 'South African Rand', 'ZAR', 'English', 'UTC+2', false, false),

-- Kenya
('nairobi', 'Nairobi', 'Kenya', 'KE', 'Africa', '🇰🇪', 'NBO', 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=800&q=80', 'Safari capital', 3000, 6000, 15000, 3000, 6000, 5000, 15000, true, 'e-Visa', 4500, '90 days', 'e-Visa required, apply online', 'June - October, January - February', 'Kenyan Shilling', 'KES', 'English, Swahili', 'UTC+3', true, false),
('masai-mara', 'Masai Mara', 'Kenya', 'KE', 'Africa', '🇰🇪', 'NBO', 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80', 'Great Migration destination', 5000, 12000, 35000, 4000, 10000, 15000, 40000, true, 'e-Visa', 4500, '90 days', 'e-Visa required', 'July - October', 'Kenyan Shilling', 'KES', 'English, Swahili', 'UTC+3', true, true),

-- Tanzania
('zanzibar', 'Zanzibar', 'Tanzania', 'TZ', 'Africa', '🇹🇿', 'ZNZ', 'https://images.unsplash.com/photo-1586276393635-5e72763c61d1?w=800&q=80', 'Spice island paradise', 3000, 6000, 15000, 2500, 5000, 3000, 8000, true, 'Visa on arrival', 4500, '90 days', 'VOA available for Indians', 'June - October, December - February', 'Tanzanian Shilling', 'TZS', 'Swahili, English', 'UTC+3', true, false),
('serengeti', 'Serengeti', 'Tanzania', 'TZ', 'Africa', '🇹🇿', 'JRO', 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80', 'Endless plains of wildlife', 5000, 12000, 35000, 4000, 10000, 15000, 40000, true, 'Visa on arrival', 4500, '90 days', 'VOA available for Indians', 'June - October', 'Tanzanian Shilling', 'TZS', 'Swahili, English', 'UTC+3', true, false),

-- Mauritius
('mauritius', 'Mauritius', 'Mauritius', 'MU', 'Africa', '🇲🇺', 'MRU', 'https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800&q=80', 'Paradise island in Indian Ocean', 4000, 8000, 20000, 3500, 7000, 4000, 12000, false, 'Visa-free', 0, '60 days', 'Indian passport holders get 60 days visa-free', 'May - December', 'Mauritian Rupee', 'MUR', 'English, French', 'UTC+4', true, true),

-- Seychelles
('seychelles', 'Seychelles', 'Seychelles', 'SC', 'Africa', '🇸🇨', 'SEZ', 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=800&q=80', 'Granite island paradise', 6000, 15000, 40000, 5000, 12000, 5000, 15000, false, 'Visa-free', 0, '30 days', 'Indian passport holders get visa-free entry', 'April - May, October - November', 'Seychellois Rupee', 'SCR', 'English, French, Creole', 'UTC+4', true, true),

-- ============================================
-- AMERICAS
-- ============================================

-- USA
('new-york', 'New York', 'USA', 'US', 'North America', '🇺🇸', 'JFK', 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80', 'The city that never sleeps', 10000, 20000, 50000, 8000, 15000, 8000, 25000, true, 'B1/B2 Visa', 14000, '10 years', 'Interview required at US embassy', 'April - June, September - November', 'US Dollar', 'USD', 'English', 'UTC-5/-4', true, true),
('los-angeles', 'Los Angeles', 'USA', 'US', 'North America', '🇺🇸', 'LAX', 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80', 'City of Angels', 8000, 16000, 40000, 6000, 12000, 6000, 18000, true, 'B1/B2 Visa', 14000, '10 years', 'Interview required at US embassy', 'Year-round', 'US Dollar', 'USD', 'English', 'UTC-8/-7', true, false),
('san-francisco', 'San Francisco', 'USA', 'US', 'North America', '🇺🇸', 'SFO', 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80', 'Golden Gate city', 9000, 18000, 45000, 7000, 14000, 6000, 18000, true, 'B1/B2 Visa', 14000, '10 years', 'Interview required at US embassy', 'September - November', 'US Dollar', 'USD', 'English', 'UTC-8/-7', true, false),
('miami', 'Miami', 'USA', 'US', 'North America', '🇺🇸', 'MIA', 'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?w=800&q=80', 'Magic City', 7000, 14000, 35000, 5000, 10000, 5000, 15000, true, 'B1/B2 Visa', 14000, '10 years', 'Interview required at US embassy', 'December - April', 'US Dollar', 'USD', 'English, Spanish', 'UTC-5/-4', false, false),
('las-vegas', 'Las Vegas', 'USA', 'US', 'North America', '🇺🇸', 'LAS', 'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800&q=80', 'Entertainment capital of the world', 6000, 12000, 30000, 5000, 12000, 6000, 20000, true, 'B1/B2 Visa', 14000, '10 years', 'Interview required at US embassy', 'March - May, September - November', 'US Dollar', 'USD', 'English', 'UTC-8/-7', true, false),
('hawaii', 'Hawaii', 'USA', 'US', 'North America', '🇺🇸', 'HNL', 'https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=800&q=80', 'Aloha paradise', 10000, 20000, 50000, 8000, 15000, 8000, 25000, true, 'B1/B2 Visa', 14000, '10 years', 'Interview required at US embassy', 'April - October', 'US Dollar', 'USD', 'English, Hawaiian', 'UTC-10', true, false),

-- Canada
('toronto', 'Toronto', 'Canada', 'CA', 'North America', '🇨🇦', 'YYZ', 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=800&q=80', 'The Six', 7000, 14000, 35000, 5000, 10000, 5000, 15000, true, 'eTA/Visitor Visa', 8500, 'Up to 6 months', 'Apply at VFS, eTA for air travel', 'May - October', 'Canadian Dollar', 'CAD', 'English, French', 'UTC-5/-4', false, false),
('vancouver', 'Vancouver', 'Canada', 'CA', 'North America', '🇨🇦', 'YVR', 'https://images.unsplash.com/photo-1559511260-66a68e7c5b4f?w=800&q=80', 'Most livable city', 7000, 14000, 35000, 5000, 10000, 5000, 15000, true, 'eTA/Visitor Visa', 8500, 'Up to 6 months', 'Apply at VFS, eTA for air travel', 'May - October', 'Canadian Dollar', 'CAD', 'English', 'UTC-8/-7', false, false),
('banff', 'Banff', 'Canada', 'CA', 'North America', '🇨🇦', 'YYC', 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80', 'Rocky Mountain paradise', 8000, 16000, 40000, 6000, 12000, 6000, 18000, true, 'eTA/Visitor Visa', 8500, 'Up to 6 months', 'Apply at VFS, eTA for air travel', 'June - September, December - March', 'Canadian Dollar', 'CAD', 'English', 'UTC-7/-6', true, true),
('niagara-falls', 'Niagara Falls', 'Canada', 'CA', 'North America', '🇨🇦', 'YYZ', 'https://images.unsplash.com/photo-1489447068241-b3490214e879?w=800&q=80', 'Wonder of the natural world', 6000, 12000, 30000, 5000, 10000, 4000, 12000, true, 'eTA/Visitor Visa', 8500, 'Up to 6 months', 'Apply at VFS, eTA for air travel', 'June - September', 'Canadian Dollar', 'CAD', 'English', 'UTC-5/-4', true, false),

-- Mexico
('cancun', 'Cancun', 'Mexico', 'MX', 'North America', '🇲🇽', 'CUN', 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&q=80', 'Caribbean paradise', 4000, 8000, 20000, 3500, 7000, 4000, 12000, true, 'e-Visa', 3500, '180 days', 'Electronic authorization required', 'December - April', 'Mexican Peso', 'MXN', 'Spanish', 'UTC-5', true, true),
('mexico-city', 'Mexico City', 'Mexico', 'MX', 'North America', '🇲🇽', 'MEX', 'https://images.unsplash.com/photo-1518659526054-190340b32735?w=800&q=80', 'Cultural capital of the Americas', 3000, 6000, 15000, 2500, 5000, 3000, 8000, true, 'e-Visa', 3500, '180 days', 'Electronic authorization required', 'March - May', 'Mexican Peso', 'MXN', 'Spanish', 'UTC-6/-5', false, false),

-- Brazil
('rio-de-janeiro', 'Rio de Janeiro', 'Brazil', 'BR', 'South America', '🇧🇷', 'GIG', 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80', 'Marvelous City', 4000, 8000, 20000, 3500, 7000, 4000, 12000, true, 'e-Visa', 4000, '90 days', 'e-Visa available online', 'December - March', 'Brazilian Real', 'BRL', 'Portuguese', 'UTC-3', true, true),
('sao-paulo', 'Sao Paulo', 'Brazil', 'BR', 'South America', '🇧🇷', 'GRU', 'https://images.unsplash.com/photo-1554168210-5e23a7c85d4a?w=800&q=80', 'Financial capital of South America', 4000, 8000, 20000, 4000, 8000, 4000, 12000, true, 'e-Visa', 4000, '90 days', 'e-Visa available online', 'March - May, August - October', 'Brazilian Real', 'BRL', 'Portuguese', 'UTC-3', false, false),

-- Argentina
('buenos-aires', 'Buenos Aires', 'Argentina', 'AR', 'South America', '🇦🇷', 'EZE', 'https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=800&q=80', 'Paris of South America', 3000, 6000, 15000, 3000, 6000, 3000, 9000, true, 'e-Visa', 1500, '90 days', 'Indians eligible for e-Visa', 'March - May, September - November', 'Argentine Peso', 'ARS', 'Spanish', 'UTC-3', true, false),

-- Peru
('lima', 'Lima', 'Peru', 'PE', 'South America', '🇵🇪', 'LIM', 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?w=800&q=80', 'Gastronomic capital of South America', 2500, 5000, 12000, 2500, 5000, 2500, 7000, true, 'Visa required', 3000, '90 days', 'Apply at Peruvian embassy', 'December - April', 'Peruvian Sol', 'PEN', 'Spanish', 'UTC-5', false, false),
('cusco', 'Cusco', 'Peru', 'PE', 'South America', '🇵🇪', 'CUZ', 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80', 'Gateway to Machu Picchu', 2000, 4000, 10000, 2000, 4000, 4000, 12000, true, 'Visa required', 3000, '90 days', 'Apply at Peruvian embassy', 'April - October', 'Peruvian Sol', 'PEN', 'Spanish, Quechua', 'UTC-5', true, true),
('machu-picchu', 'Machu Picchu', 'Peru', 'PE', 'South America', '🇵🇪', 'CUZ', 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80', 'Lost city of the Incas', 2500, 5000, 12000, 2500, 5000, 6000, 15000, true, 'Visa required', 3000, '90 days', 'Apply at Peruvian embassy', 'April - October', 'Peruvian Sol', 'PEN', 'Spanish, Quechua', 'UTC-5', true, true),

-- Colombia
('bogota', 'Bogota', 'Colombia', 'CO', 'South America', '🇨🇴', 'BOG', 'https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=800&q=80', 'Athens of South America', 2500, 5000, 12000, 2000, 4000, 2500, 7000, true, 'e-Visa', 0, '90 days', 'Indians eligible for e-Visa', 'December - March, July - August', 'Colombian Peso', 'COP', 'Spanish', 'UTC-5', false, false),
('cartagena', 'Cartagena', 'Colombia', 'CO', 'South America', '🇨🇴', 'CTG', 'https://images.unsplash.com/photo-1583531172073-f3a8921c2f4e?w=800&q=80', 'Jewel of the Caribbean', 3000, 6000, 15000, 2500, 5000, 3000, 8000, true, 'e-Visa', 0, '90 days', 'Indians eligible for e-Visa', 'December - April', 'Colombian Peso', 'COP', 'Spanish', 'UTC-5', true, false),

-- Chile
('santiago', 'Santiago', 'Chile', 'CL', 'South America', '🇨🇱', 'SCL', 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80', 'City between mountains', 3500, 7000, 18000, 3500, 7000, 3500, 10000, true, 'Visa required', 5000, '90 days', 'Apply at Chilean consulate', 'September - November, March - May', 'Chilean Peso', 'CLP', 'Spanish', 'UTC-4/-3', false, false),
('patagonia', 'Patagonia', 'Chile', 'CL', 'South America', '🇨🇱', 'PUQ', 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?w=800&q=80', 'End of the world', 6000, 12000, 30000, 5000, 10000, 8000, 25000, true, 'Visa required', 5000, '90 days', 'Apply at Chilean consulate', 'November - March', 'Chilean Peso', 'CLP', 'Spanish', 'UTC-4/-3', true, true),

-- ============================================
-- OCEANIA
-- ============================================

-- Australia
('sydney', 'Sydney', 'Australia', 'AU', 'Oceania', '🇦🇺', 'SYD', 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80', 'Harbour City', 6000, 12000, 30000, 5000, 10000, 5000, 15000, true, 'Tourist Visa (subclass 600)', 12000, 'Up to 12 months', 'Apply online, processing 15-30 days', 'September - November, March - May', 'Australian Dollar', 'AUD', 'English', 'UTC+10/+11', true, true),
('melbourne', 'Melbourne', 'Australia', 'AU', 'Oceania', '🇦🇺', 'MEL', 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=800&q=80', 'Cultural capital of Australia', 5500, 11000, 28000, 4500, 9000, 4500, 14000, true, 'Tourist Visa (subclass 600)', 12000, 'Up to 12 months', 'Apply online, processing 15-30 days', 'March - May, September - November', 'Australian Dollar', 'AUD', 'English', 'UTC+10/+11', true, false),
('gold-coast', 'Gold Coast', 'Australia', 'AU', 'Oceania', '🇦🇺', 'OOL', 'https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?w=800&q=80', 'Surfers paradise', 5000, 10000, 25000, 4000, 8000, 5000, 15000, true, 'Tourist Visa (subclass 600)', 12000, 'Up to 12 months', 'Apply online, processing 15-30 days', 'April - September', 'Australian Dollar', 'AUD', 'English', 'UTC+10', false, false),
('great-barrier-reef', 'Great Barrier Reef', 'Australia', 'AU', 'Oceania', '🇦🇺', 'CNS', 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80', 'World''s largest coral reef', 6000, 12000, 30000, 5000, 10000, 8000, 25000, true, 'Tourist Visa (subclass 600)', 12000, 'Up to 12 months', 'Apply online, processing 15-30 days', 'June - October', 'Australian Dollar', 'AUD', 'English', 'UTC+10', true, true),

-- New Zealand
('auckland', 'Auckland', 'New Zealand', 'NZ', 'Oceania', '🇳🇿', 'AKL', 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80', 'City of Sails', 5500, 11000, 28000, 4500, 9000, 4000, 12000, true, 'NZeTA', 2000, 'Up to 9 months', 'NZeTA required, apply online', 'December - February', 'New Zealand Dollar', 'NZD', 'English, Maori', 'UTC+12/+13', true, false),
('queenstown', 'Queenstown', 'New Zealand', 'NZ', 'Oceania', '🇳🇿', 'ZQN', 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80', 'Adventure capital of the world', 6000, 12000, 30000, 5000, 10000, 8000, 25000, true, 'NZeTA', 2000, 'Up to 9 months', 'NZeTA required, apply online', 'December - February, June - August', 'New Zealand Dollar', 'NZD', 'English', 'UTC+12/+13', true, true),
('rotorua', 'Rotorua', 'New Zealand', 'NZ', 'Oceania', '🇳🇿', 'ROT', 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80', 'Geothermal wonderland', 5000, 10000, 25000, 4000, 8000, 5000, 15000, true, 'NZeTA', 2000, 'Up to 9 months', 'NZeTA required, apply online', 'Year-round', 'New Zealand Dollar', 'NZD', 'English, Maori', 'UTC+12/+13', false, false),
('milford-sound', 'Milford Sound', 'New Zealand', 'NZ', 'Oceania', '🇳🇿', 'ZQN', 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80', 'Eighth wonder of the world', 5500, 11000, 28000, 4500, 9000, 6000, 18000, true, 'NZeTA', 2000, 'Up to 9 months', 'NZeTA required, apply online', 'December - February', 'New Zealand Dollar', 'NZD', 'English', 'UTC+12/+13', true, false),

-- Fiji
('fiji', 'Fiji', 'Fiji', 'FJ', 'Oceania', '🇫🇯', 'NAN', 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?w=800&q=80', 'South Pacific paradise', 5000, 10000, 25000, 4000, 8000, 4000, 12000, false, 'Visa-free', 0, '4 months', 'Indian passport holders get visa-free entry', 'May - October', 'Fijian Dollar', 'FJD', 'English, Fijian', 'UTC+12', true, false);

-- Note: Flight routes should be populated separately based on the destinations and airports created above
-- Example flight route insert (run after destinations are created):
-- INSERT INTO flight_routes (origin_code, destination_id, price_low, price_high, airlines, direct_available)
-- SELECT 'BOM', id, 10000, 16000, ARRAY['AI', 'TG', '6E'], true
-- FROM destinations WHERE slug = 'bangkok';
