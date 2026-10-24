// src/data/mockData.js

export const INITIAL_BANNERS = [
  {
    id: 'b1',
    title: 'Supermarket Big Wholesale & Retail Sale!',
    subtitle: 'Unbeatable discounts on fresh produce, groceries & everyday staples across all Bicol branches.',
    category: 'Supermarket',
    imageUrl: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1200',
    tag: 'LIMITED TIME DEAL',
    active: true
  },
  {
    id: 'b2',
    title: 'Back-to-School Fashion Fest',
    subtitle: 'Get up to 50% OFF on footwear, apparel, and school supplies at LCC Department Stores.',
    category: 'Department Store',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200',
    tag: 'SEASONAL OFFERS',
    active: true
  },
  {
    id: 'b3',
    title: 'Grand Activity Center Expo 2026',
    subtitle: 'Join us at LCC Mall Legazpi for the biggest Bicolano Artisan Fair & Business Summit.',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200',
    tag: 'UPCOMING EVENT',
    active: true
  }
];

export const OFFICIAL_LEASING_CONTACTS = [
  {
    id: 'group1',
    groupName: 'Group 1 Branches',
    branchesList: ['Ligao', 'Tabaco', 'Daraga', 'Legazpi', 'Masbate', 'Sorsogon'],
    phone: '0991 600 3491',
    email: 'leasing1.pm@lccgroup.com',
    color: 'bg-blue-600'
  },
  {
    id: 'group2',
    groupName: 'Group 2 Branches',
    branchesList: ['Polangui', 'Nabua', 'Iriga', 'Goa', 'Naga', 'Quezon'],
    phone: '0908 876 5812',
    email: 'leasing2.pm@lccgroup.com',
    color: 'bg-amber-500'
  }
];

export const INITIAL_STORES = [
  // Major Malls (Leasing Available)
  {
    id: 's1', name: 'LCC Mall Legazpi', type: 'LCC Mall', province: 'Albay', city: 'Legazpi City', address: 'Quezon Avenue / Imelda Roces Ave, Legazpi City, Albay', contact: '(052) 480-1234', hours: '8:00 AM - 8:00 PM', status: 'Open Now', featured: true, coordinates: { lat: 13.1391, lng: 123.7438 }, group: 'Group 1', leasingEmail: 'leasing1.pm@lccgroup.com', leasingPhone: '0991 600 3491', isMajorMall: true,
    leasingUnits: [
      { id: 'u-101', unitCode: 'L1-102B', floor: 'Ground Floor', locationDetail: 'Near Main Entrance & Supermarket Exit', sizeSqM: 48, type: 'Retail / Service Space', rateEstimate: '₱850 / sq.m', status: 'Available Now', suitableFor: 'Cafes, Boutique, Optical Shop, Telecom', images: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800'], description: 'Prime high-footfall retail space located along the primary pedestrian hallway right next to the LCC Supermarket main entrance.' },
      { id: 'u-102', unitCode: 'L2-205', floor: '2nd Floor', locationDetail: 'Adjacent to LCC Department Store & Escalators', sizeSqM: 110, type: 'Anchor Retail Store', rateEstimate: '₱700 / sq.m', status: 'Available Now', suitableFor: 'Fashion Apparel, Electronics, Bookstore, Specialty Store', images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'], description: 'Spacious rectangular commercial footprint with high ceilings, ready for customized interior layout.' }
    ]
  },
  {
    id: 's2', name: 'LCC Mall Daraga', type: 'LCC Mall', province: 'Albay', city: 'Daraga', address: 'Corner Rizal & Regidor St., Daraga, Albay', contact: '(052) 820-3311', hours: '8:00 AM - 8:00 PM', status: 'Open Now', featured: true, coordinates: { lat: 13.1488, lng: 123.7122 }, group: 'Group 1', leasingEmail: 'leasing1.pm@lccgroup.com', leasingPhone: '0991 600 3491', isMajorMall: true,
    leasingUnits: [
      { id: 'u-201', unitCode: 'DAR-GF04', floor: 'Ground Floor', locationDetail: 'Main Atrium Arcade', sizeSqM: 55, type: 'Retail Store Space', rateEstimate: '₱750 / sq.m', status: 'Available Now', suitableFor: 'Milk Tea, Bakery, Mobile Accessories', images: ['https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800'], description: 'Excellent storefront visibility near the central entrance.' }
    ]
  },
  {
    id: 's3', name: 'LCC Mall Tabaco', type: 'LCC Mall', province: 'Albay', city: 'Tabaco City', address: 'Ziga Avenue, Tabaco City, Albay', contact: '(052) 487-5678', hours: '8:00 AM - 8:00 PM', status: 'Open Now', featured: true, coordinates: { lat: 13.3582, lng: 123.7311 }, group: 'Group 1', leasingEmail: 'leasing1.pm@lccgroup.com', leasingPhone: '0991 600 3491', isMajorMall: true,
    leasingUnits: [
      { id: 'u-301', unitCode: 'TAB-2F10', floor: '2nd Floor', locationDetail: 'Near Department Store Cashiers', sizeSqM: 70, type: 'Retail / Service Space', rateEstimate: '₱720 / sq.m', status: 'Available Now', suitableFor: 'Apparel, Footwear, Services', images: ['https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800'], description: 'High customer traffic area.' }
    ]
  },
  {
    id: 's4', name: 'LCC Mall Ligao', type: 'LCC Mall', province: 'Albay', city: 'Ligao City', address: 'Brgy. Bagumbayan, Ligao City, Albay', contact: '(052) 485-1122', hours: '8:00 AM - 8:00 PM', status: 'Open Now', featured: true, coordinates: { lat: 13.2551, lng: 123.5361 }, group: 'Group 1', leasingEmail: 'leasing1.pm@lccgroup.com', leasingPhone: '0991 600 3491', isMajorMall: true,
    leasingUnits: [
      { id: 'u-401', unitCode: 'LIG-GF02', floor: 'Ground Floor', locationDetail: 'Supermarket Exit Hallway', sizeSqM: 40, type: 'Kiosk / Retail Stall', rateEstimate: '₱800 / sq.m', status: 'Available Now', suitableFor: 'Snacks, Bakeries, Payment Kiosks', images: ['https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'], description: 'Prime stall right by the exit.' }
    ]
  },
  {
    id: 's5', name: 'LCC Mall Polangui', type: 'LCC Mall', province: 'Albay', city: 'Polangui', address: 'Ubaliw St., Polangui, Albay', contact: '(052) 486-2233', hours: '8:00 AM - 8:00 PM', status: 'Open Now', featured: true, coordinates: { lat: 13.2954, lng: 123.4751 }, group: 'Group 2', leasingEmail: 'leasing2.pm@lccgroup.com', leasingPhone: '0908 876 5812', isMajorMall: true,
    leasingUnits: [
      { id: 'u-501', unitCode: 'POL-1F05', floor: '1st Floor', locationDetail: 'Main Concourse', sizeSqM: 60, type: 'Retail Store Space', rateEstimate: '₱700 / sq.m', status: 'Available Now', suitableFor: 'Electronics, Clothing, Accessories', images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'], description: 'Spacious retail unit in Polangui mall.' }
    ]
  },
  {
    id: 's6', name: 'LCC Mall Sorsogon', type: 'LCC Mall', province: 'Sorsogon', city: 'Sorsogon City', address: 'Magsaysay St., Sorsogon City, Sorsogon', contact: '(056) 421-4455', hours: '8:30 AM - 8:00 PM', status: 'Open Now', featured: true, coordinates: { lat: 12.9742, lng: 124.0058 }, group: 'Group 1', leasingEmail: 'leasing1.pm@lccgroup.com', leasingPhone: '0991 600 3491', isMajorMall: true,
    leasingUnits: [
      { id: 'u-601', unitCode: 'SOR-1F12', floor: 'Ground Floor', locationDetail: 'Al Fresco Dining Strip', sizeSqM: 85, type: 'F&B Restaurant Space', rateEstimate: '₱800 / sq.m', status: 'Available Now', suitableFor: 'Resto Cafe, Fast Casual Dining, Milk Tea Lounge', images: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800'], description: 'Prime ground level restaurant space equipped with grease trap hookups.' }
    ]
  },
  {
    id: 's6-b', name: 'LCC Mall Naga', type: 'LCC Mall', province: 'Camarines Sur', city: 'Naga City', address: 'Panganiban Drive, Naga City, Camarines Sur', contact: '(054) 472-1100', hours: '8:00 AM - 8:00 PM', status: 'Open Now', featured: true, coordinates: { lat: 13.6218, lng: 123.1948 }, group: 'Group 2', leasingEmail: 'leasing2.pm@lccgroup.com', leasingPhone: '0908 876 5812', isMajorMall: true,
    leasingUnits: [
      { id: 'u-naga1', unitCode: 'NAGA-GF10', floor: 'Ground Floor', locationDetail: 'Main Concourse Atrium', sizeSqM: 95, type: 'Anchor Retail Space', rateEstimate: '₱900 / sq.m', status: 'Available Now', suitableFor: 'Fashion Flagship, Electronics, Dining', images: ['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800'], description: 'High visibility premier retail slot in Naga City.' }
    ]
  },
  {
    id: 's6-c', name: 'LCC Mall Iriga', type: 'LCC Mall', province: 'Camarines Sur', city: 'Iriga City', address: 'National Highway, Iriga City, Camarines Sur', contact: '(054) 299-2233', hours: '8:00 AM - 7:30 PM', status: 'Open Now', featured: true, coordinates: { lat: 13.4150, lng: 123.4150 }, group: 'Group 2', leasingEmail: 'leasing2.pm@lccgroup.com', leasingPhone: '0908 876 5812', isMajorMall: true,
    leasingUnits: [
      { id: 'u-iriga1', unitCode: 'IRIGA-2F02', floor: '2nd Floor', locationDetail: 'Department Store Corridor', sizeSqM: 50, type: 'Retail / Service', rateEstimate: '₱680 / sq.m', status: 'Available Now', suitableFor: 'Apparel, Optical, Mobile', images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800'], description: 'Accessible second floor commercial slot.' }
    ]
  },
  {
    id: 's6-d', name: 'LCC Mall Masbate', type: 'LCC Mall', province: 'Masbate', city: 'Masbate City', address: 'Quezon St., Masbate City, Masbate', contact: '(056) 333-1234', hours: '8:00 AM - 8:00 PM', status: 'Open Now', featured: true, coordinates: { lat: 12.3650, lng: 123.6120 }, group: 'Group 1', leasingEmail: 'leasing1.pm@lccgroup.com', leasingPhone: '0991 600 3491', isMajorMall: true,
    leasingUnits: [
      { id: 'u-masbate1', unitCode: 'MAS-GF01', floor: 'Ground Floor', locationDetail: 'Supermarket Entrance Arcade', sizeSqM: 60, type: 'Retail Stall', rateEstimate: '₱750 / sq.m', status: 'Available Now', suitableFor: 'Food Kiosk, Bakery, Services', images: ['https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'], description: 'High foot traffic kiosk spot.' }
    ]
  },
  { id: 's7', name: 'LCC Supermarket – Liberty City Center', type: 'Supermarket', province: 'Albay', city: 'Legazpi City', address: 'Liberty City Center, Quezon Ave, Legazpi', contact: '(052) 480-1111', hours: '8:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's8', name: 'LCC Supermarket – Rizal', type: 'Supermarket', province: 'Albay', city: 'Legazpi City', address: 'cor. Magallanes & Mercado Sts, Oro Site', contact: '(052) 480-2222', hours: '8:00 AM - 7:30 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's9', name: 'LCC Expressmart – Albay', type: 'Express', province: 'Albay', city: 'Legazpi City', address: 'Patio De Legazpi Bldg, Rizal St', contact: '(052) 480-3333', hours: '7:00 AM - 9:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's10', name: 'LCC Supermarket – Legazpi Peñaranda', type: 'Supermarket', province: 'Albay', city: 'Legazpi City', address: 'Peñaranda St, Legazpi City', contact: '(052) 480-4444', hours: '8:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's11', name: 'LCC Expressmart – Washington', type: 'Express', province: 'Albay', city: 'Legazpi City', address: 'F. Aquende Drive, Washington', contact: '(052) 480-5555', hours: '7:00 AM - 9:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's12', name: 'LCC Expressmart – Rawis', type: 'Express', province: 'Albay', city: 'Legazpi City', address: 'National Road Purok 2, Rawis', contact: '(052) 480-6666', hours: '7:00 AM - 9:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's13', name: 'LCC Expressmart – Sagpon', type: 'Express', province: 'Albay', city: 'Legazpi City', address: 'Rizal St, Sagpon, Albay District', contact: '(052) 480-7777', hours: '7:00 AM - 9:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's14', name: 'LCC Expressmart – Camalig', type: 'Express', province: 'Albay', city: 'Camalig', address: 'Justino Nuyda Ave, Poblacion', contact: '(052) 484-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's15', name: 'LCC Expressmart – Tabaco Tagas', type: 'Express', province: 'Albay', city: 'Tabaco City', address: 'Ziga Ave, Tagas, Tabaco City', contact: '(052) 487-1111', hours: '7:00 AM - 8:30 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's16', name: 'LCC Expressmart – Polangui', type: 'Express', province: 'Albay', city: 'Polangui', address: 'Basud, Polangui, Albay', contact: '(052) 486-3333', hours: '7:00 AM - 8:30 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's17', name: 'LCC Expressmart – Donsol', type: 'Express', province: 'Sorsogon', city: 'Donsol', address: 'Clemente St, Barangay Central', contact: '(056) 422-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's18', name: 'LCC Supermarket – Sorsogon East', type: 'Supermarket', province: 'Sorsogon', city: 'Sorsogon City', address: 'Rizal St, Sorsogon City', contact: '(056) 421-1122', hours: '8:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's19', name: 'LCC Expressmart – Gubat', type: 'Express', province: 'Sorsogon', city: 'Gubat', address: 'Poblacion Gubat, Sorsogon', contact: '(056) 351-2000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's20', name: 'LCC Expressmart – Bulan', type: 'Express', province: 'Sorsogon', city: 'Bulan', address: 'Zone 4, Bulan, Sorsogon', contact: '(056) 355-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's21', name: 'LCC Supermarket – Naga City Center', type: 'Supermarket', province: 'Camarines Sur', city: 'Naga City', address: 'Elias Angeles St, Naga City', contact: '(054) 473-1000', hours: '8:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's22', name: 'LCC Expressmart – Naga Centro', type: 'Express', province: 'Camarines Sur', city: 'Naga City', address: 'Gen. Luna St, Naga City', contact: '(054) 473-2000', hours: '7:00 AM - 9:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's23', name: 'LCC Expressmart – Pili', type: 'Express', province: 'Camarines Sur', city: 'Pili', address: 'San Juan, Pili, Camarines Sur', contact: '(054) 477-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's24', name: 'LCC Expressmart – Nabua', type: 'Express', province: 'Camarines Sur', city: 'Nabua', address: 'San Francisco, Nabua', contact: '(054) 288-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's25', name: 'LCC Expressmart – Baao', type: 'Express', province: 'Camarines Sur', city: 'Baao', address: 'San Jose, Baao', contact: '(054) 266-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's26', name: 'LCC Expressmart – Goa', type: 'Express', province: 'Camarines Sur', city: 'Goa', address: 'Maymatan, Goa, Camarines Sur', contact: '(054) 453-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's27', name: 'LCC Department Store – Legazpi Main', type: 'Department Store', province: 'Albay', city: 'Legazpi City', address: 'Quezon Ave, Legazpi City', contact: '(052) 480-9999', hours: '9:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's28', name: 'LCC Department Store – Tabaco', type: 'Department Store', province: 'Albay', city: 'Tabaco City', address: 'Ziga Ave, Tabaco City', contact: '(052) 487-2222', hours: '9:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's29', name: 'LCC Home Center – Legazpi', type: 'Home Center', province: 'Albay', city: 'Legazpi City', address: 'Imelda Roces Ave, Legazpi', contact: '(052) 480-8888', hours: '9:00 AM - 7:30 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's30', name: 'LCC Expressmart – Guinobatan', type: 'Express', province: 'Albay', city: 'Guinobatan', address: 'Poblacion Guinobatan', contact: '(052) 484-2000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's31', name: 'LCC Expressmart – Malilipot', type: 'Express', province: 'Albay', city: 'Malilipot', address: 'San Francisco, Malilipot', contact: '(052) 487-3333', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's32', name: 'LCC Expressmart – Tiwi', type: 'Express', province: 'Albay', city: 'Tiwi', address: 'Libtong, Tiwi, Albay', contact: '(052) 488-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's33', name: 'LCC Expressmart – Jovellar', type: 'Express', province: 'Albay', city: 'Jovellar', address: 'Mercado St, Jovellar', contact: '(052) 485-2000', hours: '7:00 AM - 7:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's34', name: 'LCC Expressmart – Manito', type: 'Express', province: 'Albay', city: 'Manito', address: 'Poblacion Manito', contact: '(052) 481-1000', hours: '7:00 AM - 7:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's35', name: 'LCC Expressmart – Oas', type: 'Express', province: 'Albay', city: 'Oas', address: 'Calzada, Oas, Albay', contact: '(052) 486-4444', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's36', name: 'LCC Expressmart – Libon', type: 'Express', province: 'Albay', city: 'Libon', address: 'Zone 1, Libon, Albay', contact: '(052) 486-5555', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's37', name: 'LCC Expressmart – Castilla', type: 'Express', province: 'Sorsogon', city: 'Castilla', address: 'Poblacion Castilla', contact: '(056) 423-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's38', name: 'LCC Expressmart – Pilar', type: 'Express', province: 'Sorsogon', city: 'Pilar', address: 'Centro Pilar, Sorsogon', contact: '(056) 424-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's39', name: 'LCC Expressmart – Matnog', type: 'Express', province: 'Sorsogon', city: 'Matnog', address: 'Barangay Mantaong, Matnog', contact: '(056) 425-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's40', name: 'LCC Expressmart – Irosin', type: 'Express', province: 'Sorsogon', city: 'Irosin', address: 'San Julian, Irosin', contact: '(056) 426-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's41', name: 'LCC Expressmart – Casiguran', type: 'Express', province: 'Sorsogon', city: 'Casiguran', address: 'Central Casiguran', contact: '(056) 427-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's42', name: 'LCC Expressmart – San Jose', type: 'Express', province: 'Camarines Sur', city: 'San Jose', address: 'Poblacion San Jose', contact: '(054) 454-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's43', name: 'LCC Expressmart – Tigaon', type: 'Express', province: 'Camarines Sur', city: 'Tigaon', address: 'Casuray, Tigaon', contact: '(054) 455-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's44', name: 'LCC Expressmart – Sagnay', type: 'Express', province: 'Camarines Sur', city: 'Sagnay', address: 'Patrocinio, Sagnay', contact: '(054) 456-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's45', name: 'LCC Expressmart – Daet Centro', type: 'Express', province: 'Camarines Norte', city: 'Daet', address: 'Vinzons Ave, Daet', contact: '(054) 721-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's46', name: 'LCC Supermarket – San Jose', type: 'Supermarket', province: 'Antique', city: 'San Jose de Buenavista', address: 'T. Fornier St, San Jose', contact: '(036) 540-1000', hours: '8:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's47', name: 'LCC Expressmart – Pandan', type: 'Express', province: 'Antique', city: 'Pandan', address: 'Poblacion Pandan', contact: '(036) 275-1000', hours: '7:00 AM - 7:30 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's48', name: 'LCC Expressmart – Virac', type: 'Express', province: 'Catanduanes', city: 'Virac', address: 'San Juan, Virac', contact: '(052) 811-1000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's49', name: 'LCC Expressmart – Masbate Port', type: 'Express', province: 'Masbate', city: 'Masbate City', address: 'Port Area, Masbate City', contact: '(056) 333-5555', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] },
  { id: 's50', name: 'LCC Expressmart – Daet Dogongan', type: 'Express', province: 'Camarines Norte', city: 'Daet', address: 'Dogongan, Daet', contact: '(054) 721-2000', hours: '7:00 AM - 8:00 PM', status: 'Open Now', isMajorMall: false, leasingUnits: [] }
];

export const INITIAL_EVENT_BOOKINGS = [
  { id: 'ev-101', branch: 'LCC Mall Legazpi Activity Center', eventType: 'Corporate Expo', clientName: 'Bicol Tech Summit 2026', contactPerson: 'Maria Santos', email: 'maria@bicoltech.ph', phone: '0917 123 4567', eventDate: '2026-11-15', attendees: '300-500 pax', status: 'Approved', createdAt: '2026-10-18' }
];

export const INITIAL_LEASING_TICKETS = [
  { id: 'ls-501', businessName: 'Cafe Bicolano Specialty Coffee', type: 'F&B Service', preferredBranch: 'LCC Mall Legazpi', targetUnitCode: 'L1-102B', targetSpaceSqM: '48 sq.m', repName: 'Arvin Imperial', email: 'arvin@cafebicolano.ph', phone: '0919 555 1212', status: 'Under Review', region: 'Group 1 (Albay/Sorsogon)', createdAt: '2026-10-19', conceptDetail: 'Premium local coffee beans and artisan pastries.', experienceLevel: 'Startup Concept', budgetRange: '₱30k - ₱50k' }
];