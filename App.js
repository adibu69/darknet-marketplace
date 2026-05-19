/* ============================================================
   DARKNET MARKETPLACE — app.js
   CSE 0613124: Web Application Design — Spring 2026 — UITS
   ============================================================ */

'use strict';

// ============================================================
// DATA
// ============================================================

const CATALOG = [
  // FRUITS
  { id: 1,  cat: 'food',    name: 'Mango — Himsagar Grade-A',         desc: 'Fresh Rajshahi Himsagar mangoes. Sweet, ripe, hand-picked. Delivered in secured crate. 1kg pack.',   price: '৳ 180', badges: ['fresh','escrow'],      seller: 'MANGO_KING',    rating: '4.9/5',  stock: 50,  hash: 'a3f7c9e1d5b2' },
  { id: 2,  cat: 'food',    name: 'Banana — Sagar Bunch × 12',        desc: 'Green-ripe Sagar bananas. Naturally ripened. 12-piece bunch. Ships within 24h of order.',            price: '৳ 60', badges: ['fresh'],               seller: 'FRUITS_BD',     rating: '4.6/5',  stock: 80,  hash: 'b8d2a4f0e6c3' },
  { id: 3,  cat: 'food',    name: 'Jackfruit — Whole (3–4 kg)',        desc: 'Giant ripe jackfruit sourced from Gazipur farms. Sweet golden flesh. Wrapped in vacuum seal.',        price: '৳ 250', badges: ['fresh','hot'],         seller: 'KATHA_VENDOR',  rating: '4.7/5',  stock: 20,  hash: 'c1e5b9a7d0f4' },
  { id: 4,  cat: 'food',    name: 'Apple — Imported Fuji (6 pcs)',    desc: 'Premium Fuji apples. Crispy, sweet-tart. Cold-chain shipped. 6-piece gift box.',                    price: '৳ 320', badges: ['escrow'],              seller: 'APPLE_IMPORTS', rating: '4.5/5',  stock: 35,  hash: 'd4f8c2b6e1a5' },
  // DRINKS
  { id: 5,  cat: 'drink',   name: 'Water Bottle — 1.5L Mineral',      desc: 'Sealed 1.5L mineral water bottle. pH balanced. BPA-free packaging. Bulk discount available.',       price: '৳ 25', badges: ['escrow'],              seller: 'H2O_SUPPLY',    rating: '4.3/5',  stock: 500, hash: 'e7a1d3f5c9b0' },
  { id: 6,  cat: 'drink',   name: 'Juice Pack — Mango 200ml',         desc: 'Chilled mango juice carton. No preservatives. 200ml Tetra Pak. Minimum order: 6 packs.',            price: '৳ 40', badges: ['fresh','hot'],         seller: 'JUICE_GANG',    rating: '4.8/5',  stock: 200, hash: 'f0c6b8e2a4d7' },
  { id: 7,  cat: 'drink',   name: 'Tang Sachet — Orange × 10',        desc: 'Instant Tang orange flavour sachets. 10-pack bundle. Just add cold water. Great for bulk orders.',   price: '৳ 90', badges: ['escrow'],              seller: 'DRY_GOODS_X',   rating: '4.2/5',  stock: 150, hash: 'a8e0f2c4b6d1' },
  // SNACKS
  { id: 8,  cat: 'food',    name: 'Chips — Masala Crunchy (150g)',    desc: 'Spicy masala flavoured potato chips. 150g resealable pack. Addictive crunch guaranteed.',           price: '৳ 55', badges: ['hot'],                 seller: 'CRUNCH_DEALER', rating: '4.4/5',  stock: 300, hash: 'b2d4a6e8c0f5' },
  { id: 9,  cat: 'food',    name: 'Noodles — Instant (5-pack)',        desc: 'Five packs of instant noodles. Chicken masala flavor. 2-min cook time. Late-night essential.',      price: '৳ 70', badges: ['escrow'],              seller: 'NOODLE_HUT',    rating: '4.6/5',  stock: 400, hash: 'c9f1b3d5a7e2' },
  { id: 10, cat: 'food',    name: 'Biscuits — Glucose (400g tin)',    desc: 'Classic glucose biscuit tin. 400g. Crisp, lightly sweet. Airtight sealed for freshness.',            price: '৳ 85', badges: ['escrow'],              seller: 'BISCO_CACHE',   rating: '4.1/5',  stock: 120, hash: 'd6a8c0f2b4e9' },
  { id: 11, cat: 'food',    name: 'Chocolate — Dark 70% (3 bars)',    desc: 'Premium dark chocolate bars, 70% cocoa. Smooth bitter finish. 3-bar pack, imported.',              price: '৳ 210', badges: ['hot','escrow'],        seller: 'CHOCO_VAULT',   rating: '4.9/5',  stock: 60,  hash: 'e3b5d7a9c1f6' },
  { id: 12, cat: 'food',    name: 'Cake — Chocolate Sponge (500g)',   desc: 'Moist chocolate sponge cake. 500g. Freshly baked, same-day delivery in Dhaka. Boxed.',             price: '৳ 350', badges: ['fresh','hot'],         seller: 'BAKER_SHADOW',  rating: '4.7/5',  stock: 15,  hash: 'f4c6e8b0d2a7' },
  // DAIRY & PROTEIN
  { id: 13, cat: 'food',    name: 'Egg — Farm Fresh (12 pcs)',        desc: 'Dozen free-range farm eggs. Brown shell, deep-yellow yolk. Collected within 48h of shipping.',      price: '৳ 130', badges: ['fresh','escrow'],      seller: 'FARM_DROP',     rating: '4.8/5',  stock: 200, hash: 'a0d2f4b6c8e3' },
  { id: 14, cat: 'drink',   name: 'Milk — Full Cream 1L Pouch',       desc: 'Full-cream pasteurised milk. 1L sealed pouch. Cold-chain delivered. High protein, no additives.',   price: '৳ 75', badges: ['fresh'],               seller: 'DAIRY_ANON',    rating: '4.5/5',  stock: 100, hash: 'b6e8d0a2c4f9' },
  // MEAT & FISH
  { id: 15, cat: 'food',    name: 'Chicken — Whole Broiler (1.2 kg)', desc: 'Fresh whole broiler chicken. 1.2kg avg. Slaughtered same day. Vacuum-packed, chilled delivery.',   price: '৳ 220', badges: ['fresh','escrow'],      seller: 'MEAT_VAULT',    rating: '4.6/5',  stock: 40,  hash: 'c2f0b4d6e8a1' },
  { id: 16, cat: 'food',    name: 'Fish — Tuna Steak (500g)',         desc: 'Sliced tuna steak. 500g fresh-water catch. Frozen on-board. Rich in omega-3.',                     price: '৳ 380', badges: ['fresh','escrow'],      seller: 'DEEP_CATCH',    rating: '4.4/5',  stock: 25,  hash: 'd8a2c6f0b4e5' },
  { id: 17, cat: 'food',    name: 'Goat Meat — Bone-in (1 kg)',       desc: 'Premium goat curry cut. 1kg. Freshly sourced, halal certified. Ideal for Eid or special meals.',    price: '৳ 750', badges: ['fresh','hot'],         seller: 'GOAT_GUILD',    rating: '4.7/5',  stock: 10,  hash: 'e4c8a0f6b2d3' },
  { id: 18, cat: 'food',    name: 'Cow Beef — Minced (500g)',         desc: 'Lean minced beef. 500g. Halal slaughter. Sealed in cryovac. Shipped frozen.',                      price: '৳ 420', badges: ['fresh','escrow'],      seller: 'BEEF_BROKER',   rating: '4.5/5',  stock: 30,  hash: 'f0d4b8e2c6a7' },
  // COOKING
  { id: 19, cat: 'grocery', name: 'Cooking Oil — Soya 1L Bottle',     desc: 'Pure soyabean cooking oil. 1-litre sealed bottle. Zero trans-fat. Bulk orders available.',          price: '৳ 160', badges: ['escrow'],              seller: 'OIL_SUPPLY_X',  rating: '4.3/5',  stock: 200, hash: 'a1b3c5d7e9f0' },
  { id: 20, cat: 'grocery', name: 'A4 Paper — 80gsm Ream (500 sheets)',desc: 'Standard A4 office paper. 80gsm. 500 sheets per ream. Bright white. Compatible with all printers.', price: '৳ 380', badges: ['escrow'],              seller: 'PAPER_CACHE',   rating: '4.4/5',  stock: 80,  hash: 'b2c4d6e8f0a1' },
  // FURNITURE
  { id: 21, cat: 'furniture',name: 'Chair — Plastic Stackable',        desc: 'Durable white plastic stackable chair. Holds up to 120kg. Indoor/outdoor use. Set of 4 available.', price: '৳ 650', badges: ['escrow'],              seller: 'FURNI_GHOST',   rating: '4.2/5',  stock: 25,  hash: 'c3d5e7f9a0b1' },
  { id: 22, cat: 'furniture',name: 'Table — Wooden Study Desk',        desc: 'Solid wood study table. 120×60cm surface. 2 drawers. Flat-pack delivery. Assembly guide included.', price: '৳ 3,200', badges: ['escrow','hot'],        seller: 'WOOD_WRAITH',   rating: '4.6/5',  stock: 8,   hash: 'd4e6f8a0b2c3' },
  { id: 23, cat: 'furniture',name: 'Bedsheet — King Size Cotton',      desc: 'Pure cotton king-size bedsheet set. 1 flat sheet + 2 pillowcases. 200TC. Multiple colors.',        price: '৳ 850', badges: ['escrow'],              seller: 'LINEN_VAULT',   rating: '4.5/5',  stock: 40,  hash: 'e5f7a9b1c3d4' },
  { id: 24, cat: 'furniture',name: 'Wall Mat — Foam Padded 60×90',    desc: 'Non-slip foam wall/floor mat. 60×90cm. Anti-fatigue, waterproof surface. Gym or kitchen use.',      price: '৳ 420', badges: ['escrow'],              seller: 'MAT_DEALER',    rating: '4.3/5',  stock: 50,  hash: 'f6a8b0c2d4e5' },
  { id: 25, cat: 'furniture',name: 'Tree Wood — Teak Log (1ft piece)', desc: 'Seasoned teak wood block. 1 cubic foot. Ideal for DIY furniture, carving. Air-dried 2 years.',     price: '৳ 1,200', badges: ['escrow'],              seller: 'TIMBER_ANON',   rating: '4.1/5',  stock: 15,  hash: 'a7b9c1d3e5f6' },
  // STATIONERY
  { id: 26, cat: 'stationary',name: 'Pen — Ballpoint 0.7mm (10-pack)', desc: 'Smooth blue ballpoint pens. 0.7mm tip. 10-pack blister. Long-lasting ink. Office standard.',       price: '৳ 60', badges: ['escrow'],              seller: 'INK_SUPPLY',    rating: '4.4/5',  stock: 500, hash: 'b8c0d2e4f6a7' },
  { id: 27, cat: 'stationary',name: 'Eraser — White Dust-free (5 pcs)',desc: 'Premium dust-free white eraser. Leaves no smear. Pack of 5. Student / office grade.',              price: '৳ 35', badges: [],                      seller: 'STATIO_HUB',    rating: '4.2/5',  stock: 300, hash: 'c9d1e3f5a7b8' },
  { id: 28, cat: 'stationary',name: 'Stapler — Heavy Duty (+ 1000 pins)',desc: 'Metal-body heavy duty stapler. Includes 1000 staple pins. Binds up to 30 sheets.',              price: '৳ 180', badges: ['escrow'],              seller: 'OFFICE_CACHE',  rating: '4.5/5',  stock: 60,  hash: 'd0e2f4a6b8c9' },
  // ELECTRONICS
  { id: 29, cat: 'electronics',name: 'Keyboard — Mechanical TKL',     desc: 'Tenkeyless mechanical keyboard. Blue switches. RGB backlit. USB-C detachable cable.',               price: '৳ 1,850', badges: ['escrow','hot'],        seller: 'KEY_DEALER',    rating: '4.8/5',  stock: 20,  hash: 'e1f3a5b7c9d0' },
  { id: 30, cat: 'electronics',name: 'Mouse — Wireless Gaming 1600DPI',desc: 'Wireless optical gaming mouse. 1600 DPI. 7 buttons. 30h battery. Silent click mode.',             price: '৳ 1,200', badges: ['escrow'],              seller: 'INPUT_GHOST',   rating: '4.6/5',  stock: 30,  hash: 'f2a4b6c8d0e1' },
  { id: 31, cat: 'electronics',name: 'Lamp — LED Desk (USB-powered)',  desc: 'Compact USB LED desk lamp. 3 brightness levels. 360° flexible neck. Eye-care warm light.',         price: '৳ 550', badges: ['escrow'],              seller: 'LUMEN_SUPPLY',  rating: '4.4/5',  stock: 45,  hash: 'a3b5c7d9e1f2' },
  // PERSONAL CARE
  { id: 32, cat: 'personal',  name: 'Perfume — Woody Oud 50ml EDP',   desc: 'Imported Oud & woody note EDP. 50ml spray bottle. Long-lasting 8–10h projection. Unisex.',          price: '৳ 1,400', badges: ['hot','escrow'],        seller: 'SCENT_VAULT',   rating: '4.9/5',  stock: 18,  hash: 'b4c6d8e0f2a3' },
  // CLOTHING
  { id: 33, cat: 'personal',  name: 'Clothes — Cotton T-Shirt (3 pcs)',desc: 'Plain cotton unisex T-shirts. S/M/L/XL available. 3-piece pack. Breathable 180 GSM fabric.',      price: '৳ 480', badges: ['escrow'],              seller: 'CLOTH_GHOST',   rating: '4.3/5',  stock: 55,  hash: 'c5d7e9f1a3b4' },
  // ROPE
  { id: 34, cat: 'hardware',  name: 'Rope — Nylon 10mm × 20m',        desc: 'Heavy-duty nylon rope. 10mm diameter, 20m length. UV resistant. Load capacity 500kg.',              price: '৳ 320', badges: ['escrow'],              seller: 'ROPE_TRADER',   rating: '4.2/5',  stock: 70,  hash: 'd6e8f0a2b4c5' },

  // ========== NEW ITEMS ==========
  // MORE FOOD
  { id: 35, cat: 'food',    name: 'Rice — Premium Miniket (5kg)',     desc: 'Premium Miniket rice from Dinajpur. Aged 12 months. Non-sticky, aromatic. 5kg vacuum pack.',        price: '৳ 340', badges: ['fresh','escrow'],      seller: 'RICE_KING',     rating: '4.8/5',  stock: 100, hash: 'e8a0c2d4f6b8' },
  { id: 36, cat: 'food',    name: 'Dal — Masoor Whole (1kg)',       desc: 'Premium Canadian masoor dal. Cleaned and sorted. 1kg pack. High protein, quick cooking.',          price: '৳ 140', badges: ['escrow'],              seller: 'DAL_MASTER',    rating: '4.5/5',  stock: 80,  hash: 'f0b2d4e6a8c0' },
  { id: 37, cat: 'food',    name: 'Onion — Local Fresh (1kg)',      desc: 'Farm-fresh local onions. No preservatives. 1kg net. Direct from Faridpur farmers.',                price: '৳ 55', badges: ['fresh'],               seller: 'VEG_DROP',      rating: '4.3/5',  stock: 150, hash: 'a2c4e6f8b0d2' },
  { id: 38, cat: 'food',    name: 'Potato — Fresh Local (1kg)',     desc: 'Fresh local potatoes. Washed and sorted. 1kg pack. Ideal for curry or fries.',                      price: '৳ 45', badges: ['fresh'],               seller: 'VEG_DROP',      rating: '4.4/5',  stock: 200, hash: 'b4d6f8a0c2e4' },
  { id: 39, cat: 'food',    name: 'Green Chili — 250g Pack',        desc: 'Fresh spicy green chilies. 250g pack. Farm-to-door within 12 hours of harvest.',                   price: '৳ 35', badges: ['fresh'],               seller: 'SPICE_ROUTE',   rating: '4.6/5',  stock: 120, hash: 'c6e8a0b2d4f6' },
  { id: 40, cat: 'food',    name: 'Mustard Oil — Pure 500ml',       desc: 'Cold-pressed pure mustard oil. 500ml glass bottle. Traditional Bangladeshi cooking essential.',      price: '৳ 190', badges: ['escrow'],              seller: 'OIL_SUPPLY_X',  rating: '4.7/5',  stock: 60,  hash: 'd8f0a2c4e6b8' },
  { id: 41, cat: 'food',    name: 'Chanachur — Spicy Mix (200g)',   desc: 'Crispy chanachur mix. Spicy and tangy. 200g resealable pack. Perfect tea-time snack.',              price: '৳ 65', badges: ['hot'],                 seller: 'SNACK_CART',    rating: '4.5/5',  stock: 250, hash: 'e0a2c4d6f8b0' },
  { id: 42, cat: 'food',    name: 'Singara — Frozen (12 pcs)',      desc: 'Traditional frozen singara. 12 pieces. Crispy shell, spicy potato filling. Fry and serve.',        price: '৳ 120', badges: ['escrow'],              seller: 'FROZEN_BITE',   rating: '4.4/5',  stock: 90,  hash: 'f2b4d6e8a0c2' },
  { id: 43, cat: 'food',    name: 'Paratha — Frozen (10 pcs)',      desc: 'Layered frozen paratha. 10 pieces. Ready to cook. Flaky, buttery taste. Breakfast essential.',     price: '৳ 110', badges: ['escrow'],              seller: 'FROZEN_BITE',   rating: '4.6/5',  stock: 100, hash: 'a4c6e8f0b2d4' },
  { id: 44, cat: 'food',    name: 'Dates — Ajwa Premium (500g)',    desc: 'Premium Ajwa dates from Saudi Arabia. 500g box. Naturally sweet. Ramadan special.',                 price: '৳ 450', badges: ['hot','escrow'],        seller: 'DRY_FRUIT_HUB', rating: '4.9/5',  stock: 40,  hash: 'b6d8f0a2c4e6' },
  { id: 45, cat: 'food',    name: 'Honey — Pure Sundarbans (250ml)',desc: 'Pure Sundarbans forest honey. 250ml glass jar. Unprocessed, raw. Medicinal grade.',                price: '৳ 380', badges: ['fresh','escrow'],      seller: 'HONEY_BEE',     rating: '4.8/5',  stock: 30,  hash: 'c8e0a2b4d6f8' },
  { id: 46, cat: 'food',    name: 'Butter — Salted 200g',           desc: 'Creamy salted butter. 200g pack. Perfect for baking and breakfast. Cold-chain delivery.',         price: '৳ 165', badges: ['fresh'],               seller: 'DAIRY_ANON',    rating: '4.5/5',  stock: 70,  hash: 'd0f2b4c6e8a0' },
  { id: 47, cat: 'food',    name: 'Cheese Slice — 10 pcs Pack',     desc: 'Processed cheese slices. 10 pieces. Great for sandwiches and burgers. Sealed pack.',                price: '৳ 220', badges: ['escrow'],              seller: 'DAIRY_ANON',    rating: '4.3/5',  stock: 55,  hash: 'e2f4c6d8a0b2' },
  { id: 48, cat: 'food',    name: 'Yogurt — Sweet 500g',            desc: 'Creamy sweet yogurt (doi). 500g clay pot. Traditional recipe. Probiotic rich.',                    price: '৳ 95', badges: ['fresh'],               seller: 'FARM_DROP',     rating: '4.7/5',  stock: 45,  hash: 'f4c6d8e0a2b4' },
  { id: 49, cat: 'food',    name: 'Vermicelli — Shemai (200g)',    desc: 'Fine roasted vermicelli for shemai. 200g pack. Eid dessert essential. Premium quality.',            price: '৳ 55', badges: ['escrow'],              seller: 'SWEET_DEALER',  rating: '4.4/5',  stock: 150, hash: 'a6c8e0f2b4d6' },

  // MORE DRINKS
  { id: 50, cat: 'drink',   name: 'Coca-Cola — 1.25L Bottle',       desc: 'Classic Coca-Cola. 1.25L bottle. Chilled delivery. Perfect for parties and gatherings.',           price: '৳ 85', badges: ['escrow'],              seller: 'DRINK_DEALER',  rating: '4.5/5',  stock: 200, hash: 'b8d0f2a4c6e8' },
  { id: 51, cat: 'drink',   name: 'Sprite — 600ml Bottle',          desc: 'Refreshing lemon-lime Sprite. 600ml. Crisp and clean taste. Chilled on delivery.',                   price: '৳ 40', badges: ['escrow'],              seller: 'DRINK_DEALER',  rating: '4.4/5',  stock: 180, hash: 'c0e2f4a6b8d0' },
  { id: 52, cat: 'drink',   name: 'Pran Frooto — Mango 250ml',      desc: 'Pran Frooto mango juice drink. 250ml tetra pack. Rich mango flavor. Kids favorite.',               price: '৳ 30', badges: ['hot'],                 seller: 'JUICE_GANG',    rating: '4.6/5',  stock: 300, hash: 'd2f4a6b8c0e2' },
  { id: 53, cat: 'drink',   name: 'Sting — Energy Drink 250ml',     desc: 'Sting energy drink. 250ml can. Instant energy boost. Strawberry flavor. Power-packed.',             price: '৳ 35', badges: ['hot'],                 seller: 'ENERGY_X',      rating: '4.3/5',  stock: 250, hash: 'e4f6a8b0d2f4' },
  { id: 54, cat: 'drink',   name: 'Green Tea — Pure (50 bags)',     desc: 'Premium green tea bags. 50 count. Antioxidant rich. Slimming and refreshing. Imported leaves.',     price: '৳ 180', badges: ['escrow'],              seller: 'TEA_HOUSE',     rating: '4.7/5',  stock: 80,  hash: 'f6a8b0c2e4f6' },
  { id: 55, cat: 'drink',   name: 'Coffee — Nescafe Classic 50g',   desc: 'Nescafe Classic instant coffee. 50g glass jar. Rich aroma. Perfect start to your day.',             price: '৳ 220', badges: ['escrow'],              seller: 'CAFE_SUPPLY',   rating: '4.5/5',  stock: 60,  hash: 'a8b0c2d4e6f8' },

  // MORE GROCERY / HOUSEHOLD
  { id: 56, cat: 'grocery', name: 'Salt — Pure iodized (1kg)',      desc: 'Pure iodized table salt. 1kg pack. Essential mineral fortified. Fine grain, easy dissolve.',         price: '৳ 35', badges: [],                      seller: 'DAILY_NEED',    rating: '4.2/5',  stock: 400, hash: 'b0c2d4e6f8a0' },
  { id: 57, cat: 'grocery', name: 'Sugar — Premium (1kg)',          desc: 'Premium refined white sugar. 1kg pack. Crystal clear. Perfect for tea, coffee, baking.',            price: '৳ 95', badges: ['escrow'],              seller: 'DAILY_NEED',    rating: '4.4/5',  stock: 300, hash: 'c2d4e6f8a0b2' },
  { id: 58, cat: 'grocery', name: 'Atta — Whole Wheat (2kg)',       desc: 'Whole wheat atta flour. 2kg pack. Stone-ground. High fiber. Perfect for roti and paratha.',        price: '৳ 145', badges: ['escrow'],              seller: 'FLOUR_MILL',    rating: '4.5/5',  stock: 150, hash: 'd4e6f8a0b2c4' },
  { id: 59, cat: 'grocery', name: 'Dish Soap — Lemon 500ml',        desc: 'Lemon fresh dish washing liquid. 500ml. Tough on grease, gentle on hands. Concentrated formula.',   price: '৳ 85', badges: [],                      seller: 'CLEAN_HUB',     rating: '4.3/5',  stock: 200, hash: 'e6f8a0b2c4d6' },
  { id: 60, cat: 'grocery', name: 'Laundry Detergent — 1kg',        desc: 'Power laundry detergent powder. 1kg pack. Deep cleaning. Removes tough stains. Fresh fragrance.',   price: '৳ 130', badges: ['escrow'],              seller: 'CLEAN_HUB',     rating: '4.4/5',  stock: 180, hash: 'f8a0b2c4d6e8' },
  { id: 61, cat: 'grocery', name: 'Toothpaste — Colgate 100g',      desc: 'Colgate strong teeth toothpaste. 100g tube. Cavity protection. Fresh mint flavor. Family pack.',   price: '৳ 75', badges: [],                      seller: 'PERSONAL_MART', rating: '4.5/5',  stock: 250, hash: 'a0b2c4d6e8f0' },
  { id: 62, cat: 'grocery', name: 'Soap — Lifebuoy Total 4 pcs',    desc: 'Lifebuoy Total 10 soap. 4-piece pack. Germ protection. Active silver formula. Family value pack.', price: '৳ 140', badges: ['escrow'],              seller: 'PERSONAL_MART', rating: '4.6/5',  stock: 200, hash: 'b2c4d6e8f0a2' },
  { id: 63, cat: 'grocery', name: 'Shampoo — Clear Men 180ml',      desc: 'Clear Men anti-dandruff shampoo. 180ml. Cooling menthol. Strong scalp defense. Imported formula.',price: '৳ 280', badges: ['escrow'],              seller: 'PERSONAL_MART', rating: '4.4/5',  stock: 90,  hash: 'c4d6e8f0a2b4' },
  { id: 64, cat: 'grocery', name: 'Tissue Box — 200 pulls',         desc: 'Soft facial tissue box. 200 pulls. 2-ply. Dermatologically tested. Gentle on skin.',               price: '৳ 65', badges: [],                      seller: 'CLEAN_HUB',     rating: '4.3/5',  stock: 300, hash: 'd6e8f0a2b4c6' },
  { id: 65, cat: 'grocery', name: 'Mosquito Coil — 10 pcs',         desc: 'Mosquito repellent coil. 10 pieces. 8-hour protection. Sandalwood fragrance. Monsoon essential.',   price: '৳ 45', badges: ['hot'],                 seller: 'HOME_GUARD',    rating: '4.2/5',  stock: 400, hash: 'e8f0a2b4c6d8' },
  { id: 66, cat: 'grocery', name: 'Handwash — Lifebuoy 200ml',      desc: 'Lifebuoy handwash liquid. 200ml pump bottle. 99.9% germ kill. Mild on hands. Refillable.',          price: '৳ 95', badges: [],                      seller: 'PERSONAL_MART', rating: '4.5/5',  stock: 150, hash: 'f0a2b4c6d8e0' },

  // MORE FURNITURE / HOUSEHOLD
  { id: 67, cat: 'furniture',name: 'Pillow — Soft Fiber',           desc: 'Soft fiber-filled pillow. Standard size. Hypoallergenic. Washable cover. Hotel comfort at home.',    price: '৳ 280', badges: ['escrow'],              seller: 'FURNI_GHOST',   rating: '4.4/5',  stock: 60,  hash: 'a2b4c6d8e0f2' },
  { id: 68, cat: 'furniture',name: 'Blanket — Winter Double',       desc: 'Warm winter blanket. Double size. Fleece material. Lightweight yet cozy. Machine washable.',         price: '৳ 650', badges: ['escrow'],              seller: 'LINEN_VAULT',   rating: '4.5/5',  stock: 35,  hash: 'b4c6d8e0f2a4' },
  { id: 69, cat: 'furniture',name: 'Mosquito Net — King Size',      desc: 'Fine mesh mosquito net. King size bed. Easy install. Foldable storage. Chemical-free protection.',   price: '৳ 320', badges: ['escrow'],              seller: 'HOME_GUARD',    rating: '4.3/5',  stock: 45,  hash: 'c6d8e0f2a4b6' },
  { id: 70, cat: 'furniture',name: 'Wall Clock — Analog 12"',       desc: 'Classic analog wall clock. 12-inch. Silent sweep movement. Modern design. Battery included.',     price: '৳ 450', badges: [],                      seller: 'FURNI_GHOST',   rating: '4.2/5',  stock: 25,  hash: 'd8e0f2a4b6c8' },
  { id: 71, cat: 'furniture',name: 'Water Jug — 2L Plastic',       desc: 'Durable 2-litre water jug. BPA-free plastic. Leak-proof lid. Fridge-friendly shape. Easy pour.',    price: '৳ 120', badges: [],                      seller: 'HOME_GUARD',    rating: '4.1/5',  stock: 80,  hash: 'e0f2a4b6c8d0' },
  { id: 72, cat: 'furniture',name: 'Umbrella — Auto Open',         desc: 'Automatic open umbrella. Wind-resistant frame. 42-inch canopy. Compact fold. Monsoon ready.',        price: '৳ 380', badges: ['escrow'],              seller: 'RAIN_SHIELD',   rating: '4.4/5',  stock: 50,  hash: 'f2a4b6c8d0e2' },
  { id: 73, cat: 'furniture',name: 'Slipper Rack — 4-tier Metal',  desc: 'Metal slipper/shoe rack. 4-tier. Holds 8 pairs. Rust-resistant. Space-saving vertical design.',      price: '৳ 520', badges: ['escrow'],              seller: 'FURNI_GHOST',   rating: '4.3/5',  stock: 30,  hash: 'a4b6c8d0e2f4' },

  // MORE ELECTRONICS
  { id: 74, cat: 'electronics',name: 'Earphones — Wired Bass',     desc: 'In-ear wired earphones. Deep bass. 3.5mm jack. Tangle-free cable. Built-in mic. Noise isolating.',price: '৳ 280', badges: ['hot'],                 seller: 'TECH_HAVEN',    rating: '4.4/5',  stock: 100, hash: 'b6c8d0e2f4a6' },
  { id: 75, cat: 'electronics',name: 'Power Bank — 10000mAh',      desc: 'Portable power bank. 10000mAh capacity. Dual USB output. LED indicator. Fast charging supported.',   price: '৳ 850', badges: ['escrow','hot'],        seller: 'TECH_HAVEN',    rating: '4.6/5',  stock: 60,  hash: 'c8d0e2f4a6b8' },
  { id: 76, cat: 'electronics',name: 'Charger — Fast 33W Adapter',  desc: '33W fast charging adapter. USB-C port. Surge protection. Compatible with most smartphones.',        price: '৳ 450', badges: ['escrow'],              seller: 'TECH_HAVEN',    rating: '4.5/5',  stock: 70,  hash: 'd0e2f4a6b8c0' },
  { id: 77, cat: 'electronics',name: 'USB Cable — Type-C 1m',      desc: 'Braided USB-C cable. 1 meter. Fast data transfer. Reinforced connectors. 3A current support.',       price: '৳ 180', badges: [],                      seller: 'TECH_HAVEN',    rating: '4.3/5',  stock: 150, hash: 'e2f4a6b8c0d2' },
  { id: 78, cat: 'electronics',name: 'LED Bulb — 9W 4 pcs Pack',   desc: 'Energy-saving LED bulbs. 9W each. 4-piece pack. Cool white. 2-year lifespan. Low power consumption.',price: '৳ 320', badges: ['escrow'],              seller: 'LUMEN_SUPPLY',  rating: '4.4/5',  stock: 80,  hash: 'f4a6b8c0d2e4' },
  { id: 79, cat: 'electronics',name: 'Extension Cord — 4-socket',  desc: '4-socket extension cord. 3-meter cable. Surge protector. Individual switches. Fire-resistant.',     price: '৳ 380', badges: ['escrow'],              seller: 'TECH_HAVEN',    rating: '4.5/5',  stock: 55,  hash: 'a6b8c0d2e4f6' },
  { id: 80, cat: 'electronics',name: 'Bluetooth Speaker — Mini',   desc: 'Portable mini Bluetooth speaker. 5W output. 6h battery. TF card support. Built-in mic. Compact.',  price: '৳ 550', badges: ['hot'],                 seller: 'SOUND_WAVE',    rating: '4.4/5',  stock: 40,  hash: 'b8c0d2e4f6a8' },
  { id: 81, cat: 'electronics',name: 'Phone Case — Shockproof',    desc: 'Shockproof phone case. TPU + PC dual layer. Drop tested. Precise cutouts. Matte finish.',           price: '৳ 220', badges: [],                      seller: 'TECH_HAVEN',    rating: '4.2/5',  stock: 120, hash: 'c0d2e4f6a8b0' },
  { id: 82, cat: 'electronics',name: 'Screen Guard — Tempered Glass',desc: '9H tempered glass screen protector. Anti-fingerprint. Bubble-free install. Edge-to-edge coverage.',price: '৳ 150', badges: [],                      seller: 'TECH_HAVEN',    rating: '4.3/5',  stock: 200, hash: 'd2e4f6a8b0c2' },
  { id: 83, cat: 'electronics',name: 'Smart Watch — Fitness Band',   desc: 'Fitness band smart watch. Heart rate monitor. Step counter. Sleep tracking. 7-day battery. Water-resistant.',price: '৳ 1,250', badges: ['escrow','hot'],        seller: 'WEARABLE_X',    rating: '4.5/5',  stock: 25,  hash: 'e4f6a8b0c2d4' },

  // MORE STATIONERY
  { id: 84, cat: 'stationary',name: 'Notebook — 200 pages A4',      desc: 'Hardcover notebook. 200 ruled pages. A4 size. 80gsm paper. Ribbon bookmark. Perfect for notes.',  price: '৳ 120', badges: ['escrow'],              seller: 'STATIO_HUB',    rating: '4.5/5',  stock: 100, hash: 'f6a8b0c2d4e6' },
  { id: 85, cat: 'stationary',name: 'Calculator — Scientific',      desc: 'Scientific calculator. 2-line display. 240 functions. Dual power. Exam approved. Hard case included.',price: '৳ 480', badges: ['escrow'],              seller: 'STATIO_HUB',    rating: '4.6/5',  stock: 40,  hash: 'a8b0c2d4e6f8' },
  { id: 86, cat: 'stationary',name: 'Highlighter — 5 Colors',     desc: 'Neon highlighter marker set. 5 vibrant colors. Chisel tip. Quick dry. Long-lasting ink.',           price: '৳ 85', badges: [],                      seller: 'INK_SUPPLY',    rating: '4.4/5',  stock: 150, hash: 'b0c2d4e6f8a0' },
  { id: 87, cat: 'stationary',name: 'Geometry Box — Mathematical',  desc: 'Complete geometry box. Compass, divider, protractor, set squares, ruler. Metal instruments. Durable.',price: '৳ 160', badges: ['escrow'],              seller: 'STATIO_HUB',    rating: '4.3/5',  stock: 80,  hash: 'c2d4e6f8a0b2' },
  { id: 88, cat: 'stationary',name: 'Pencil — HB 12 pcs',         desc: 'Premium HB graphite pencils. 12 pieces. Break-resistant lead. Easy sharpen. Eraser tip.',          price: '৳ 95', badges: [],                      seller: 'INK_SUPPLY',    rating: '4.5/5',  stock: 200, hash: 'd4e6f8a0b2c4' },
  { id: 89, cat: 'stationary',name: 'Color Pencil — 12 Shades',   desc: 'Vibrant color pencil set. 12 shades. Smooth color laydown. Break-resistant. Pre-sharpened.',        price: '৳ 140', badges: [],                      seller: 'INK_SUPPLY',    rating: '4.4/5',  stock: 120, hash: 'e6f8a0b2c4d6' },
  { id: 90, cat: 'stationary',name: 'File Folder — 5 pcs A4',     desc: 'A4 file folder set. 5 pieces. Assorted colors. Document protection. Snap button closure.',         price: '৳ 110', badges: [],                      seller: 'OFFICE_CACHE',  rating: '4.2/5',  stock: 100, hash: 'f8a0b2c4d6e8' },

  // MORE PERSONAL CARE
  { id: 91, cat: 'personal',  name: 'Deodorant — Axe 150ml',        desc: 'Axe body spray deodorant. 150ml. 48h protection. Bold fragrance. Long-lasting freshness.',          price: '৳ 320', badges: ['hot'],                 seller: 'SCENT_VAULT',   rating: '4.5/5',  stock: 70,  hash: 'a0b2c4d6e8f0' },
  { id: 92, cat: 'personal',  name: 'Hair Oil — Parachute 100ml',   desc: 'Parachute pure coconut hair oil. 100ml. 100% natural. Deep nourishment. Strong roots. Non-sticky.',  price: '৳ 75', badges: [],                      seller: 'PERSONAL_MART', rating: '4.6/5',  stock: 150, hash: 'b2c4d6e8f0a2' },
  { id: 93, cat: 'personal',  name: 'Face Mask — Disposable 50 pcs',desc: '3-ply disposable face masks. 50 pieces. Breathable. Ear-loop comfort. Daily protection essential.',price: '৳ 180', badges: ['escrow'],              seller: 'PERSONAL_MART', rating: '4.4/5',  stock: 200, hash: 'c4d6e8f0a2b4' },
  { id: 94, cat: 'personal',  name: 'Sunscreen — SPF50 50ml',       desc: 'SPF50 sunscreen lotion. 50ml. Broad spectrum. Water-resistant. Non-greasy. UVA/UVB protection.',   price: '৳ 380', badges: ['escrow'],              seller: 'PERSONAL_MART', rating: '4.5/5',  stock: 40,  hash: 'd6e8f0a2b4c6' },
  { id: 95, cat: 'personal',  name: 'Beard Trimmer — Cordless',     desc: 'Cordless beard trimmer. Stainless steel blades. 90min runtime. 4 length settings. USB charging.',    price: '৳ 850', badges: ['escrow'],              seller: 'GROOM_KIT',     rating: '4.3/5',  stock: 30,  hash: 'e8f0a2b4c6d8' },
  { id: 96, cat: 'personal',  name: 'Hair Dryer — 1200W',           desc: 'Compact hair dryer. 1200W. 2 heat settings. Cool shot button. Foldable handle. Travel friendly.',  price: '৳ 650', badges: ['escrow'],              seller: 'GROOM_KIT',     rating: '4.4/5',  stock: 25,  hash: 'f0a2b4c6d8e0' },
  { id: 97, cat: 'personal',  name: 'Cotton Buds — 200 pcs',        desc: 'Pure cotton buds. 200 pieces. Double-tipped. Plastic stick. Hygienic pack. Multipurpose use.',      price: '৳ 55', badges: [],                      seller: 'PERSONAL_MART', rating: '4.3/5',  stock: 300, hash: 'a2b4c6d8e0f2' },

  // MORE HARDWARE
  { id: 98, cat: 'hardware',  name: 'Screwdriver Set — 6 pcs',      desc: 'Precision screwdriver set. 6 pieces. Phillips and flathead. Magnetic tips. Comfort grip handles.',  price: '৳ 220', badges: [],                      seller: 'TOOL_BOX',      rating: '4.4/5',  stock: 60,  hash: 'b4c6d8e0f2a4' },
  { id: 99, cat: 'hardware',  name: 'Measuring Tape — 5m',          desc: 'Steel measuring tape. 5 meters. Lock mechanism. Belt clip. Clear markings. Construction grade.',     price: '৳ 180', badges: [],                      seller: 'TOOL_BOX',      rating: '4.3/5',  stock: 80,  hash: 'c6d8e0f2a4b6' },
  { id: 100, cat: 'hardware', name: 'Duct Tape — 2" 10m Roll',      desc: 'Heavy-duty duct tape. 2-inch width, 10m length. Waterproof. Strong adhesion. Multipurpose repair.', price: '৳ 95', badges: [],                      seller: 'TOOL_BOX',      rating: '4.2/5',  stock: 100, hash: 'd8e0f2a4b6c8' },
  { id: 101, cat: 'hardware', name: 'Padlock — 50mm Heavy',        desc: 'Heavy-duty brass padlock. 50mm body. Hardened shackle. 3 keys included. Weather-resistant.',        price: '৳ 280', badges: ['escrow'],              seller: 'LOCK_MASTER',   rating: '4.5/5',  stock: 50,  hash: 'e0f2a4b6c8d0' },
  { id: 102, cat: 'hardware', name: 'Safety Goggles — Clear',       desc: 'Clear safety goggles. Anti-fog. Impact resistant. Adjustable strap. Lab and workshop essential.',  price: '৳ 150', badges: [],                      seller: 'TOOL_BOX',      rating: '4.3/5',  stock: 70,  hash: 'f2a4b6c8d0e2' },
  { id: 103, cat: 'hardware', name: 'Work Gloves — Rubber Pair',   desc: 'Heavy-duty rubber work gloves. 1 pair. Anti-slip grip. Chemical resistant. Durable construction.',  price: '৳ 120', badges: [],                      seller: 'TOOL_BOX',      rating: '4.1/5',  stock: 90,  hash: 'a4b6c8d0e2f4' },
  { id: 104, cat: 'hardware', name: 'Tool Box — 14" Plastic',     desc: 'Portable plastic tool box. 14-inch. Multiple compartments. Lockable latch. Shoulder strap.',       price: '৳ 450', badges: ['escrow'],              seller: 'TOOL_BOX',      rating: '4.4/5',  stock: 35,  hash: 'b6c8d0e2f4a6' },
  { id: 105, cat: 'hardware', name: 'Ladder — 5-step Aluminum',    desc: 'Foldable aluminum ladder. 5 steps. Anti-slip feet. 150kg capacity. Lightweight yet sturdy.',        price: '৳ 1,850', badges: ['escrow'],              seller: 'FURNI_GHOST',   rating: '4.5/5',  stock: 12,  hash: 'c8d0e2f4a6b8' },
  { id: 106, cat: 'hardware', name: 'Garden Shears — 8" Pruning',  desc: 'Pruning garden shears. 8-inch. Carbon steel blade. Spring action. Safety lock. Ergonomic grip.',   price: '৳ 320', badges: [],                      seller: 'GARDEN_PRO',    rating: '4.3/5',  stock: 40,  hash: 'd0e2f4a6b8c0' },

  // CLOTHING (NEW CATEGORY)
  { id: 107, cat: 'clothing',  name: 'Lungi — Cotton Check',         desc: 'Traditional cotton lungi. Check pattern. Soft, breathable. 2.2m length. Machine washable.',         price: '৳ 180', badges: ['escrow'],              seller: 'CLOTH_GHOST',   rating: '4.4/5',  stock: 80,  hash: 'e2f4a6b8c0d2' },
  { id: 108, cat: 'clothing',  name: 'Panjabi — Cotton Long',        desc: 'Elegant cotton panjabi. Long sleeve. Embroidered collar. Eid special. Multiple sizes available.',   price: '৳ 850', badges: ['hot','escrow'],        seller: 'CLOTH_GHOST',   rating: '4.6/5',  stock: 40,  hash: 'f4a6b8c0d2e4' },
  { id: 109, cat: 'clothing',  name: 'T-Shirt — Polo 2 pcs',        desc: 'Cotton polo T-shirts. 2-piece pack. Collar with buttons. Breathable pique fabric. S-XXL sizes.',    price: '৳ 550', badges: ['escrow'],              seller: 'CLOTH_GHOST',   rating: '4.3/5',  stock: 60,  hash: 'a6b8c0d2e4f6' },
  { id: 110, cat: 'clothing',  name: 'Shirt — Formal White',        desc: 'Premium formal white shirt. Cotton blend. Wrinkle resistant. Perfect for office and interviews.',   price: '৳ 650', badges: ['escrow'],              seller: 'CLOTH_GHOST',   rating: '4.5/5',  stock: 45,  hash: 'b8c0d2e4f6a8' },
  { id: 111, cat: 'clothing',  name: 'Jeans — Slim Fit',            desc: 'Slim fit denim jeans. Stretchable fabric. 5-pocket design. Dark wash. Durable stitching.',          price: '৳ 1,200', badges: ['escrow'],              seller: 'CLOTH_GHOST',   rating: '4.4/5',  stock: 35,  hash: 'c0d2e4f6a8b0' },
  { id: 112, cat: 'clothing',  name: 'Socks — Cotton 6 pairs',      desc: 'Pure cotton socks. 6 pairs pack. Cushioned sole. Anti-bacterial. Assorted colors. One size fits.', price: '৳ 280', badges: [],                      seller: 'CLOTH_GHOST',   rating: '4.5/5',  stock: 100, hash: 'd2e4f6a8b0c2' },
  { id: 113, cat: 'clothing',  name: 'Sneakers — Canvas White',     desc: 'Classic canvas sneakers. White. Rubber sole. Lace-up. Comfortable for daily wear. Unisex.',       price: '৳ 950', badges: ['hot'],                 seller: 'SHOE_VAULT',    rating: '4.6/5',  stock: 30,  hash: 'e4f6a8b0c2d4' },
  { id: 114, cat: 'clothing',  name: 'Sandals — Leather Brown',     desc: 'Genuine leather sandals. Brown. Hand-stitched. Cushioned footbed. Durable sole. Traditional.',   price: '৳ 580', badges: ['escrow'],              seller: 'SHOE_VAULT',    rating: '4.4/5',  stock: 40,  hash: 'f6a8b0c2d4e6' },
  { id: 115, cat: 'clothing',  name: 'Flip-Flops — Rubber',         desc: 'Comfortable rubber flip-flops. Lightweight. Anti-slip sole. Water-resistant. Beach and daily use.', price: '৳ 120', badges: [],                      seller: 'SHOE_VAULT',    rating: '4.2/5',  stock: 150, hash: 'a8b0c2d4e6f8' },
  { id: 116, cat: 'clothing',  name: 'Cap — Baseball Black',        desc: 'Classic baseball cap. Black. Adjustable strap. Embroidered logo. UV protection. Unisex style.',    price: '৳ 220', badges: [],                      seller: 'CLOTH_GHOST',   rating: '4.3/5',  stock: 70,  hash: 'b0c2d4e6f8a0' },
  { id: 117, cat: 'clothing',  name: 'Shawl — Woolen Winter',       desc: 'Warm woolen shawl. Winter essential. Soft, non-itchy. Traditional design. 2m x 1m. Unisex.',       price: '৳ 450', badges: ['escrow'],              seller: 'CLOTH_GHOST',   rating: '4.5/5',  stock: 50,  hash: 'c2d4e6f8a0b2' },
  { id: 118, cat: 'clothing',  name: 'Jacket — Denim Blue',         desc: 'Stylish denim jacket. Blue wash. Button closure. Multiple pockets. Regular fit. All-season wear.', price: '৳ 1,450', badges: ['hot','escrow'],        seller: 'CLOTH_GHOST',   rating: '4.6/5',  stock: 25,  hash: 'd4e6f8a0b2c4' },
  { id: 119, cat: 'clothing',  name: 'Raincoat — Poncho Style',     desc: 'Waterproof rain poncho. Hooded. Lightweight PVC. Full coverage. Packable into small pouch.',       price: '৳ 280', badges: [],                      seller: 'RAIN_SHIELD',   rating: '4.3/5',  stock: 60,  hash: 'e6f8a0b2c4d6' },
  { id: 120, cat: 'clothing',  name: 'Belt — Leather Black',        desc: 'Genuine leather belt. Black. Auto-lock buckle. 1.3m length. Trim to fit. Classic formal style.',   price: '৳ 320', badges: ['escrow'],              seller: 'CLOTH_GHOST',   rating: '4.4/5',  stock: 55,  hash: 'f8a0b2c4d6e8' },
  { id: 121, cat: 'clothing',  name: 'Wallet — Leather Brown',      desc: 'Genuine leather wallet. Brown. Bifold. 6 card slots. 2 cash compartments. RFID blocking.',        price: '৳ 380', badges: ['escrow'],              seller: 'CLOTH_GHOST',   rating: '4.5/5',  stock: 45,  hash: 'a0b2c4d6e8f0' },
  { id: 122, cat: 'clothing',  name: 'Sunglasses — UV400',          desc: 'Polarized sunglasses. UV400 protection. Metal frame. Anti-glare. Classic aviator style. Case inc.',price: '৳ 480', badges: [],                      seller: 'CLOTH_GHOST',   rating: '4.4/5',  stock: 50,  hash: 'b2c4d6e8f0a2' },
  { id: 123, cat: 'clothing',  name: 'Watch — Analog Classic',      desc: 'Classic analog wrist watch. Stainless steel strap. Water resistant. Date display. Gift boxed.',    price: '৳ 680', badges: ['escrow'],              seller: 'CLOTH_GHOST',   rating: '4.5/5',  stock: 35,  hash: 'c4d6e8f0a2b4' },
  { id: 124, cat: 'clothing',  name: 'Bag — Backpack Laptop',       desc: 'Laptop backpack. Fits 15.6". Multiple compartments. Padded straps. Water resistant. USB charging port.',price: '৳ 1,100', badges: ['escrow','hot'],        seller: 'BAG_DEALER',    rating: '4.6/5',  stock: 30,  hash: 'd6e8f0a2b4c6' },
  { id: 125, cat: 'clothing',  name: 'School Bag — Primary',        desc: 'Colorful primary school bag. Lightweight. Ergonomic back. Reflective strips. Water bottle pocket.', price: '৳ 450', badges: [],                      seller: 'BAG_DEALER',    rating: '4.3/5',  stock: 60,  hash: 'e8f0a2b4c6d8' },
];

const MESSAGES = [
  {
    id: 1,
    from: 'GH0ST_VENDOR',
    subject: 'RE: your order #44821',
    time: '14:22',
    unread: true,
    burned: false,
    body: `-----BEGIN PGP MESSAGE-----

DECRYPTING... ████████████████ 100%

From: GH0ST_VENDOR
To: [YOU]
Subject: RE: your order #44821

Your package has been dispatched via dead-drop protocol.
Access credentials sent via secondary channel.

Hash verification:
  SHA256: a3f7c9e1d5b2...8f4a

Destroy this message after reading.
No trace. No name. No problem.

-----END PGP MESSAGE-----`
  },
  {
    id: 2,
    from: 'CRYPTWAVE',
    subject: 'Payment confirmation — receipt',
    time: '11:05',
    unread: true,
    burned: false,
    body: `-----BEGIN PGP MESSAGE-----

DECRYPTING... ████████████████ 100%

From: CRYPTWAVE
To: [YOU]

Your payment of ৳ 2,180 has been successfully processed
through bKash merchant gateway.

Transaction ID: 9X7K2M4P8Q...
Payment method: bKash
Trace confidence: <0.1%

Burn this receipt.

-----END PGP MESSAGE-----`
  },
  {
    id: 3,
    from: 'SYSTEM',
    subject: '⚠ New login from unknown node',
    time: '03:41',
    unread: true,
    burned: false,
    body: `-----BEGIN SYSTEM NOTICE-----

SECURITY ALERT

A login was attempted on your account
from an unrecognized Tor exit node.

Node fingerprint: [REDACTED]
Time: 03:41 UTC
Status: BLOCKED

Rotate your PGP key immediately.
Enable 2FA on all sessions.

This message will self-destruct.

-----END SYSTEM NOTICE-----`
  },
];

const TRANSACTIONS = [
  { type: 'out', label: 'Purchase #44821 — GH0ST_VENDOR',       amt: '-৳ 440', hash: 'a3f7...e1d5', time: '2h ago' },
  { type: 'in',  label: 'Refund — CRYPTWAVE',                   amt: '+৳ 2,180', hash: 'b8d2...f0e6', time: '6h ago' },
  { type: 'out', label: 'Escrow lock — ZERO_LABS order',        amt: '-৳ 1,200', hash: 'c1e5...a7d0', time: '1d ago' },
  { type: 'in',  label: 'Deposit from bank account',            amt: '+৳ 750', hash: 'd4f8...b6e1', time: '2d ago' },
  { type: 'out', label: 'Server hosting renewal — ONIONHOST_PRO',  amt: '-৳ 310', hash: 'e7a1...c9b0', time: '3d ago' },
];

const TICKER_ITEMS = [
  '[ NEW ARRIVAL: Premium Himsagar Mango — Season Peak ]',
  '[ HOT DEAL: Mechanical Keyboard — Limited Stock: 20 units ]',
  '[ FRESH STOCK: Farm Eggs — Collected This Morning ]',
  '[ VENDOR ALERT: MEAT_VAULT — Goat Meat Back In Stock ]',
  '[ FLASH SALE: Tuna Steak 500g — 15% OFF Today Only ]',
  '[ NEW: Oud Perfume EDP — Imported, Only 18 Left ]',
  '[ PRICE DROP: A4 Paper Ream — Now ৳ 380 ]',
  '[ BESTSELLER: Instant Noodles 5-Pack — 400 in Stock ]',
  '[ FRESH BATCH: Chocolate Cake — Same-Day Dhaka Delivery ]',
  '[ TOP VENDOR: CHOCO_VAULT — 4.9★ Rating ]',
  '[ NEW: Rice Miniket 5kg — Direct from Dinajpur Farmers ]',
  '[ ARRIVAL: Power Bank 10000mAh — Flash Sale ৳ 850 ]',
  '[ RESTOCK: Cotton Panjabi — Eid Collection Available ]',
  '[ DEAL: LED Bulb 4-Pack — Energy Saver Bundle ৳ 320 ]',
  '[ FRESH: Sundarbans Honey — Limited Harvest Batch ]',
];

const ASCII_LOGO = `
  ██████╗  █████╗ ██████╗ ██╗  ██╗███╗   ██╗███████╗████████╗
  ██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝████╗  ██║██╔════╝╚══██╔══╝
  ██║  ██║███████║██████╔╝█████╔╝ ██╔██╗ ██║█████╗     ██║   
  ██║  ██║██╔══██║██╔══██╗██╔═██╗ ██║╚██╗██║██╔══╝     ██║   
  ██████╔╝██║  ██║██║  ██║██║  ██╗██║ ╚████║███████╗   ██║   
  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   

  ░░░░░░░░░ FICTIONAL PROJECT — NOT A REAL MARKETPLACE ░░░░░░░
  ░░░░░░░  CSE 0613124 // UITS // WEB APP DESIGN LAB  ░░░░░░░░
`;

// ============================================================
// BOOT SEQUENCE
// ============================================================

const BOOT_LINES = [
  'BIOS v3.1.4 // TOR OPERATING SYSTEM LOADED',
  'Initializing encrypted memory blocks...',
  'Loading anonymization layers [1/7]...',
  'Loading anonymization layers [2/7]...',
  'Loading anonymization layers [3/7]...',
  'Loading anonymization layers [4/7]...',
  'Loading anonymization layers [5/7]...',
  'Loading anonymization layers [6/7]...',
  'Loading anonymization layers [7/7]... ✓',
  'Connecting to TOR network...',
  'Node handshake: 94.142.X.X → 185.220.X.X → [REDACTED]',
  'IP masked: 0.0.0.0 ✓',
  'DNS leak prevention: ACTIVE ✓',
  'WebRTC leak prevention: ACTIVE ✓',
  'Checking PGP keys... ✓',
  'Mounting encrypted volume... ✓',
  'DARKNET MARKETPLACE v2.1.7',
  'All systems nominal. Welcome back.',
  '',
  '> LOADING CATALOG...',
];

function runBoot() {
  const bootText   = document.getElementById('boot-text');
  const bootFill   = document.getElementById('boot-fill');
  const bootScreen = document.getElementById('boot-screen');
  const mainSite   = document.getElementById('main-site');
  const bootAscii  = document.getElementById('boot-ascii');
  const bootPct    = document.getElementById('boot-pct');

  bootAscii.textContent = ASCII_LOGO;

  let lineIdx = 0;
  let charIdx = 0;
  let currentText = '';
  let skipped = false;

  function finishBoot() {
    if (skipped) return;
    skipped = true;
    bootScreen.style.opacity = '0';
    bootScreen.style.transition = 'opacity 0.4s';
    setTimeout(() => {
      bootScreen.classList.add('hidden');
      mainSite.classList.remove('hidden');
    }, 400);
  }

  document.addEventListener('keydown', finishBoot, { once: true });
  document.addEventListener('click', finishBoot, { once: true });

  function typeLine() {
    if (skipped) return;
    if (lineIdx >= BOOT_LINES.length) {
      bootFill.style.width = '100%';
      bootPct.textContent = '100%';
      setTimeout(finishBoot, 600);
      return;
    }

    const line = BOOT_LINES[lineIdx];
    const progress = Math.round(((lineIdx + 1) / BOOT_LINES.length) * 100);
    bootFill.style.width = progress + '%';
    bootPct.textContent = progress + '%';

    if (charIdx < line.length) {
      currentText += line[charIdx];
      bootText.textContent = currentText;
      charIdx++;
      setTimeout(typeLine, 18);
    } else {
      currentText += '\n';
      bootText.textContent = currentText;
      lineIdx++;
      charIdx = 0;
      setTimeout(typeLine, line === '' ? 80 : 120);
    }
  }

  typeLine();
}

// ============================================================
// CLOCK
// ============================================================

function updateClock() {
  const now = new Date();
  const str = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
  document.getElementById('clock').textContent = str;
}

setInterval(updateClock, 1000);
updateClock();

// ============================================================
// TICKER
// ============================================================

function initTicker() {
  const track = document.getElementById('ticker-track');
  const text = TICKER_ITEMS.join('  ░░░  ') + '  ░░░  ';
  track.textContent = text + text;
}

// ============================================================
// NAVIGATION
// ============================================================

function initNav() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const page = link.dataset.page;
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      document.querySelectorAll('.page').forEach(p => {
        p.classList.toggle('hidden', p.id !== 'page-' + page);
        p.classList.toggle('active', p.id === 'page-' + page);
      });
      if (page === 'cart') renderCart();
    });
  });
}

// ============================================================
// CATALOG
// ============================================================

let currentCat    = 'all';
let currentSearch = '';
let currentSort   = 'default';

function getPriceNumber(priceStr) {
  const match = priceStr.replace(/,/g, '').match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

function renderCatalog() {
  const container = document.getElementById('catalog');
  let items = [...CATALOG];

  if (currentCat !== 'all') {
    items = items.filter(i => i.cat === currentCat);
  }

  if (currentSearch.trim()) {
    const q = currentSearch.toLowerCase();
    items = items.filter(i =>
      i.name.toLowerCase().includes(q) ||
      i.desc.toLowerCase().includes(q) ||
      i.cat.toLowerCase().includes(q)
    );
  }

  if (currentSort !== 'default') {
    const sortFn = {
      'price-asc':  (a, b) => getPriceNumber(a.price) - getPriceNumber(b.price),
      'price-desc': (a, b) => getPriceNumber(b.price) - getPriceNumber(a.price),
      'rating':     (a, b) => parseFloat(b.rating) - parseFloat(a.rating),
      'stock':      (a, b) => a.stock - b.stock,
      'name':       (a, b) => a.name.localeCompare(b.name)
    };
    if (sortFn[currentSort]) items.sort(sortFn[currentSort]);
  }

  document.getElementById('item-count').textContent = items.length;

  container.innerHTML = '';

  if (items.length === 0) {
    container.innerHTML = '<div style="padding:2rem;color:var(--text-dim);font-size:0.8rem;">NO RESULTS FOUND.</div>';
    return;
  }

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.dataset.id = item.id;

    const badgesHTML = item.badges.map(b =>
      `<span class="badge-item ${b}">${b.toUpperCase()}</span>`
    ).join('');

    card.innerHTML = `
      <div class="item-cat ${item.cat}">[${item.cat.toUpperCase()}]</div>
      <div class="item-name">${item.name}</div>
      <div class="item-badges">${badgesHTML}</div>
      <div class="item-desc">${item.desc}</div>
      <div class="item-footer">
        <div class="item-price">${item.price}</div>
        <div class="item-meta">⭐ ${item.rating}<br/>STOCK: ${item.stock}</div>
      </div>
      <div class="item-encrypted">sha:${item.hash}</div>
    `;

    card.addEventListener('click', () => openItemModal(item));
    container.appendChild(card);
  });
}

function initCatalog() {
  renderCatalog();

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCat = btn.dataset.cat;
      renderCatalog();
    });
  });

  document.getElementById('search-btn').addEventListener('click', () => {
    currentSearch = document.getElementById('search-input').value;
    renderCatalog();
  });

  document.getElementById('search-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      currentSearch = e.target.value;
      renderCatalog();
    }
  });

  document.getElementById('clear-search-btn').addEventListener('click', () => {
    document.getElementById('search-input').value = '';
    currentSearch = '';
    renderCatalog();
  });

  document.getElementById('sort-select').addEventListener('change', e => {
    currentSort = e.target.value;
    renderCatalog();
  });
}

// ============================================================
// CART
// ============================================================

let cart = [];
let deliveryLocation = { address: '', city: 'Dhaka', phone: '' };
let selectedPaymentMethod = 'bKash';

function addToCart(item) {
  const existing = cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartBadge();
  renderCart();
  notify(`✓ Added ${item.name} to cart`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  renderCart();
  updateCartBadge();
}

function clearCart() {
  cart = [];
  renderCart();
  updateCartBadge();
  notify('🗑 Cart cleared');
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count-badge');
  const total = cart.reduce((sum, c) => sum + c.qty, 0);
  if (total > 0) {
    badge.textContent = total;
    badge.classList.remove('hidden');
  } else {
    badge.classList.add('hidden');
  }
  document.getElementById('cart-item-count').textContent = total;
}

function renderCart() {
  const list = document.getElementById('cart-list');
  const summary = document.getElementById('summary-rows');
  if (cart.length === 0) {
    list.innerHTML = '<p class="muted" style="padding:1rem;font-size:0.85rem;">Cart is empty. Go to Market to add items.</p>';
    summary.innerHTML = '';
    document.getElementById('cart-total').textContent = '৳ 0';
    return;
  }

  let total = 0;
  list.innerHTML = '';
  summary.innerHTML = '';

  cart.forEach(item => {
    const priceNum = getPriceNumber(item.price);
    const itemTotal = priceNum * item.qty;
    total += itemTotal;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">${item.price} × ${item.qty}</div>
      </div>
      <div class="cart-item-actions">
        <span class="cart-item-total">৳ ${itemTotal.toLocaleString('en-IN')}</span>
        <button class="btn-danger cart-remove-btn" data-id="${item.id}">[ ✕ ]</button>
      </div>
    `;
    list.appendChild(div);

    const row = document.createElement('div');
    row.className = 'summary-row';
    row.innerHTML = `<span>${item.name} × ${item.qty}</span><span>৳ ${itemTotal.toLocaleString('en-IN')}</span>`;
    summary.appendChild(row);
  });

  document.getElementById('cart-total').textContent = '৳ ' + total.toLocaleString('en-IN');

  document.querySelectorAll('.cart-remove-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      removeFromCart(parseInt(btn.dataset.id));
    });
  });
}

function initCart() {
  document.getElementById('clear-cart-btn').addEventListener('click', () => {
    showConfirm('Clear all items from cart?', clearCart);
  });

  document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) { notify('⚠ Cart is empty', true); return; }
    openPaymentModal();
  });
}


// ============================================================
// PAYMENT & DELIVERY MODAL
// ============================================================

function openPaymentModal() {
  const modal = document.getElementById('payment-modal');
  const body = document.getElementById('payment-modal-body');
  const total = cart.reduce((s, c) => s + getPriceNumber(c.price) * c.qty, 0);

  body.innerHTML = `
    <div class="payment-modal-inner">
      <div class="payment-step-title">// SELECT PAYMENT METHOD</div>
      <div class="payment-methods-grid">
        <div class="payment-method-card ${selectedPaymentMethod === 'bKash' ? 'selected' : ''}" data-method="bKash">
          <div class="pay-method-icon">📱</div>
          <div class="pay-method-name">bKash</div>
          <div class="pay-method-desc">Mobile banking</div>
        </div>
        <div class="payment-method-card ${selectedPaymentMethod === 'Nagad' ? 'selected' : ''}" data-method="Nagad">
          <div class="pay-method-icon">💳</div>
          <div class="pay-method-name">Nagad</div>
          <div class="pay-method-desc">Mobile banking</div>
        </div>
        <div class="payment-method-card ${selectedPaymentMethod === 'Rocket' ? 'selected' : ''}" data-method="Rocket">
          <div class="pay-method-icon">🚀</div>
          <div class="pay-method-name">Rocket</div>
          <div class="pay-method-desc">DBBL mobile</div>
        </div>
        <div class="payment-method-card ${selectedPaymentMethod === 'Bank' ? 'selected' : ''}" data-method="Bank">
          <div class="pay-method-icon">🏦</div>
          <div class="pay-method-name">Bank Transfer</div>
          <div class="pay-method-desc">Direct deposit</div>
        </div>
        <div class="payment-method-card ${selectedPaymentMethod === 'COD' ? 'selected' : ''}" data-method="COD">
          <div class="pay-method-icon">💵</div>
          <div class="pay-method-name">Cash on Delivery</div>
          <div class="pay-method-desc">Pay at doorstep</div>
        </div>
      </div>

      <div class="payment-step-title" style="margin-top:1.5rem;">// DELIVERY LOCATION</div>
      <div class="delivery-form">
        <label class="form-label">FULL ADDRESS</label>
        <input type="text" class="terminal-input" id="deliv-address" placeholder="House #, Road #, Area..." value="${deliveryLocation.address}"/>
        <label class="form-label">CITY</label>
        <select class="terminal-select" id="deliv-city">
          <option value="Dhaka" ${deliveryLocation.city === 'Dhaka' ? 'selected' : ''}>Dhaka</option>
          <option value="Chittagong" ${deliveryLocation.city === 'Chittagong' ? 'selected' : ''}>Chittagong</option>
          <option value="Sylhet" ${deliveryLocation.city === 'Sylhet' ? 'selected' : ''}>Sylhet</option>
          <option value="Rajshahi" ${deliveryLocation.city === 'Rajshahi' ? 'selected' : ''}>Rajshahi</option>
          <option value="Khulna" ${deliveryLocation.city === 'Khulna' ? 'selected' : ''}>Khulna</option>
          <option value="Barisal" ${deliveryLocation.city === 'Barisal' ? 'selected' : ''}>Barisal</option>
          <option value="Rangpur" ${deliveryLocation.city === 'Rangpur' ? 'selected' : ''}>Rangpur</option>
          <option value="Mymensingh" ${deliveryLocation.city === 'Mymensingh' ? 'selected' : ''}>Mymensingh</option>
        </select>
        <label class="form-label">CONTACT PHONE</label>
        <input type="text" class="terminal-input" id="deliv-phone" placeholder="01XXXXXXXXX" value="${deliveryLocation.phone}"/>
      </div>

      <div class="payment-total-bar">
        <span>TOTAL</span>
        <span class="amber" style="font-family:var(--font-vt);font-size:1.5rem;">৳ ${total.toLocaleString('en-IN')}</span>
      </div>

      <div style="display:flex;gap:0.75rem;">
        <button class="btn-send" id="pay-confirm-btn" style="flex:1;">[ CONFIRM & PAY ]</button>
        <button class="btn-danger" id="pay-cancel-btn" style="width:auto;">[ CANCEL ]</button>
      </div>
    </div>
  `;

  // Payment method selection
  document.querySelectorAll('.payment-method-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.payment-method-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedPaymentMethod = card.dataset.method;
    });
  });

  // Confirm payment
  document.getElementById('pay-confirm-btn').addEventListener('click', () => {
    const addr = document.getElementById('deliv-address').value.trim();
    const city = document.getElementById('deliv-city').value;
    const phone = document.getElementById('deliv-phone').value.trim();

    if (!addr) { notify('⚠ Enter delivery address', true); return; }
    if (!phone || phone.length < 11) { notify('⚠ Enter valid phone number', true); return; }

    deliveryLocation = { address: addr, city: city, phone: phone };
    closeModal('payment-modal');
    showOrderConfirmation(total, selectedPaymentMethod);
  });

  // Cancel
  document.getElementById('pay-cancel-btn').addEventListener('click', () => {
    closeModal('payment-modal');
  });

  modal.classList.remove('hidden');
}

function showOrderConfirmation(total, method) {
  const modal = document.getElementById('confirm-modal');
  const body = document.getElementById('confirm-body');
  const orderId = 'ORD-' + Math.random().toString(36).substr(2, 8).toUpperCase();

  body.innerHTML = `
    <div style="text-align:center;padding:1rem 0;">
      <div style="font-size:3rem;margin-bottom:0.5rem;">✓</div>
      <div style="font-size:1.1rem;color:var(--green);font-family:var(--font-vt);margin-bottom:0.5rem;">ORDER CONFIRMED</div>
      <div style="font-size:0.75rem;color:var(--text-dim);margin-bottom:1.5rem;">Order ID: <span style="color:var(--amber)">${orderId}</span></div>

      <div style="background:var(--bg3);padding:1rem;margin-bottom:1rem;text-align:left;">
        <div style="font-size:0.7rem;color:var(--green);margin-bottom:0.5rem;">// ORDER DETAILS</div>
        <div style="font-size:0.75rem;color:var(--text);line-height:1.8;">
          <div style="display:flex;justify-content:space-between;"><span>Payment Method:</span><span style="color:var(--amber)">${method}</span></div>
          <div style="display:flex;justify-content:space-between;"><span>Total Amount:</span><span style="color:var(--amber)">৳ ${total.toLocaleString('en-IN')}</span></div>
          <div style="display:flex;justify-content:space-between;"><span>Items:</span><span>${cart.reduce((s,c)=>s+c.qty,0)}</span></div>
        </div>
      </div>

      <div style="background:var(--bg3);padding:1rem;margin-bottom:1rem;text-align:left;">
        <div style="font-size:0.7rem;color:var(--green);margin-bottom:0.5rem;">// DELIVERY INFO</div>
        <div style="font-size:0.75rem;color:var(--text);line-height:1.8;">
          <div><span style="color:var(--text-dim)">Address:</span> ${deliveryLocation.address}</div>
          <div><span style="color:var(--text-dim)">City:</span> ${deliveryLocation.city}</div>
          <div><span style="color:var(--text-dim)">Phone:</span> ${deliveryLocation.phone}</div>
          <div style="margin-top:0.5rem;padding-top:0.5rem;border-top:1px solid var(--border);">
            <span style="color:var(--green)">📦 Estimated Delivery: 1-3 Business Days</span>
          </div>
          <div style="font-size:0.65rem;color:var(--text-dim);margin-top:0.25rem;">
            Our delivery partner will contact you before dispatch.
          </div>
        </div>
      </div>

      <div style="font-size:0.7rem;color:var(--text-dim);margin-bottom:1rem;">
        A confirmation SMS has been sent to ${deliveryLocation.phone}
      </div>

      <button class="btn-send" id="order-done-btn" style="width:auto;padding:0.5rem 2rem;">[ DONE ]</button>
    </div>
  `;

  document.getElementById('order-done-btn').addEventListener('click', () => {
    closeModal('confirm-modal');
    notify('✓ Order placed successfully! Track in Messages.');
    clearCart();
    // Add order confirmation message to inbox
    const newMsg = {
      id: msgs.length + 1,
      from: 'SYSTEM',
      subject: `✓ Order Confirmed — ${orderId}`,
      time: new Date().toTimeString().slice(0,5),
      unread: true,
      burned: false,
      body: `-----BEGIN ORDER CONFIRMATION-----

ORDER ID: ${orderId}
STATUS: CONFIRMED ✓

Payment: ${method} — ৳ ${total.toLocaleString('en-IN')}
Delivery: ${deliveryLocation.address}, ${deliveryLocation.city}
Phone: ${deliveryLocation.phone}

ESTIMATED DELIVERY: 1-3 Business Days

Our delivery partner will contact you
before dispatch at ${deliveryLocation.phone}.

Track your order in real-time.
Thank you for shopping with us.

-----END ORDER CONFIRMATION-----`
    };
    msgs.unshift(newMsg);
    renderInbox();
    document.getElementById('unread-badge').textContent = msgs.filter(m => m.unread).length;
  });

  // Hide the default confirm buttons since we have our own
  document.getElementById('confirm-yes').style.display = 'none';
  document.getElementById('confirm-no').style.display = 'none';

  modal.classList.remove('hidden');
}

// ============================================================
// ITEM MODAL
// ============================================================

function openItemModal(item) {
  const modal    = document.getElementById('item-modal');
  const title    = document.getElementById('modal-title');
  const body     = document.getElementById('modal-body');

  title.textContent = `// ${item.name}`;

  const badgesHTML = item.badges.map(b =>
    `<span class="badge-item ${b}">${b.toUpperCase()}</span>`
  ).join(' ');

  body.innerHTML = `
    <div class="modal-body-inner">
      <div style="margin-bottom:0.75rem;">${badgesHTML}</div>
      <div class="modal-detail-row"><span class="modal-detail-label">CATEGORY</span><span class="modal-detail-val">${item.cat.toUpperCase()}</span></div>
      <div class="modal-detail-row"><span class="modal-detail-label">SELLER</span><span class="modal-detail-val" style="color:var(--green)">${item.seller}</span></div>
      <div class="modal-detail-row"><span class="modal-detail-label">RATING</span><span class="modal-detail-val">⭐ ${item.rating}</span></div>
      <div class="modal-detail-row"><span class="modal-detail-label">STOCK LEFT</span><span class="modal-detail-val">${item.stock}</span></div>
      <div class="modal-detail-row"><span class="modal-detail-label">SHA256</span><span class="modal-detail-val" style="font-size:0.7rem;color:var(--text-dim)">${item.hash}...verified</span></div>
      <div style="margin-top:0.75rem;padding:0.75rem;background:var(--bg3);font-size:0.75rem;color:var(--text-dim);line-height:1.7;">${item.desc}</div>
    </div>
    <div class="modal-buy-bar">
      <div class="modal-price">${item.price}</div>
      <div style="display:flex;gap:0.5rem;">
        <button class="btn-send" style="width:auto;padding:0.5rem 1rem;" id="modal-buy-btn">[ ADD TO CART ]</button>
        <button class="btn-term" id="modal-msg-btn">[ MSG VENDOR ]</button>
      </div>
    </div>
  `;

  document.getElementById('modal-buy-btn').addEventListener('click', () => {
    addToCart(item);
    closeModal('item-modal');
  });

  document.getElementById('modal-msg-btn').addEventListener('click', () => {
    closeModal('item-modal');
    document.getElementById('compose-to').value = item.seller;
    document.getElementById('compose-subject').value = `RE: ${item.name}`;
    document.querySelector('.nav-link[data-page="messages"]').click();
    notify('ℹ Compose opened — vendor pre-filled');
  });

  modal.classList.remove('hidden');
}

document.getElementById('modal-close-btn').addEventListener('click', () => closeModal('item-modal'));
document.getElementById('item-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('item-modal')) closeModal('item-modal');
});

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
  // Restore confirm modal buttons if they were hidden
  if (id === 'confirm-modal') {
    const yesBtn = document.getElementById('confirm-yes');
    const noBtn = document.getElementById('confirm-no');
    if (yesBtn) yesBtn.style.display = '';
    if (noBtn) noBtn.style.display = '';
  }
}

// ============================================================
// MESSAGES
// ============================================================

let selectedMsgId = null;
let msgs = MESSAGES.map(m => ({ ...m }));

function renderInbox() {
  const list = document.getElementById('inbox-list');
  list.innerHTML = '';
  msgs.forEach(m => {
    const item = document.createElement('div');
    item.className = 'inbox-item' +
      (m.unread ? ' unread' : '') +
      (m.burned ? ' burned' : '') +
      (selectedMsgId === m.id ? ' selected' : '');
    item.innerHTML = `<div class="inbox-from">${m.from}</div><div class="inbox-subj">${m.subject}</div>`;
    item.addEventListener('click', () => openMessage(m.id));
    list.appendChild(item);
  });
}

function openMessage(id) {
  selectedMsgId = id;
  const msg = msgs.find(m => m.id === id);
  if (!msg || msg.burned) return;

  const body    = document.getElementById('msg-body');
  const subject = document.getElementById('msg-subject');
  const actions = document.getElementById('msg-actions');

  subject.textContent = msg.subject;
  msg.unread = false;
  renderInbox();

  // Decryption animation
  body.className = 'msg-body decrypting';
  let fake = '';
  const chars = '█▓░01ABCDEFabcdef!@#$%^&*';
  let step = 0;
  const totalSteps = 18;

  const interval = setInterval(() => {
    fake = Array.from({ length: 80 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    body.textContent = `DECRYPTING MESSAGE...\n${fake}\n${fake.substring(0, 40)}`;
    step++;
    if (step >= totalSteps) {
      clearInterval(interval);
      body.className = 'msg-body';
      body.textContent = msg.body;
      actions.classList.remove('hidden');
    }
  }, 60);
}

function initMessages() {
  renderInbox();

  document.getElementById('burn-btn').addEventListener('click', () => {
    const msg = msgs.find(m => m.id === selectedMsgId);
    if (!msg) return;
    showConfirm(
      '🔥 Permanently destroy this message? This cannot be undone.',
      () => {
        msg.burned = true;
        document.getElementById('msg-body').textContent = '[ MESSAGE BURNED — DESTROYED ]';
        document.getElementById('msg-subject').textContent = '[DESTROYED]';
        document.getElementById('msg-actions').classList.add('hidden');
        renderInbox();
        notify('🔥 Message burned and destroyed');
      }
    );
  });

  document.getElementById('reply-btn').addEventListener('click', () => {
    const msg = msgs.find(m => m.id === selectedMsgId);
    if (!msg) return;
    document.getElementById('compose-to').value = msg.from;
    document.getElementById('compose-subject').value = 'RE: ' + msg.subject;
    document.getElementById('compose-body').focus();
    notify('ℹ Reply pre-filled');
  });

  document.getElementById('send-msg-btn').addEventListener('click', () => {
    const to      = document.getElementById('compose-to').value.trim();
    const subject = document.getElementById('compose-subject').value.trim();
    const body    = document.getElementById('compose-body').value.trim();
    if (!to || !body) { notify('⚠ Fill recipient and body', true); return; }

    notify(`✓ Encrypted message sent to ${to}`);
    document.getElementById('compose-to').value = '';
    document.getElementById('compose-subject').value = '';
    document.getElementById('compose-body').value = '';
  });
}

// ============================================================
// WALLET
// ============================================================

function initWallet() {
  const list = document.getElementById('tx-list');
  TRANSACTIONS.forEach(tx => {
    const row = document.createElement('div');
    row.className = `tx-row ${tx.type}`;
    row.innerHTML = `
      <div>
        <div style="font-size:0.75rem;color:var(--text)">${tx.label}</div>
        <div class="tx-hash">${tx.hash}</div>
      </div>
      <div style="text-align:right">
        <div class="tx-amt">${tx.amt}</div>
        <div class="tx-time">${tx.time}</div>
      </div>
    `;
    list.appendChild(row);
  });

  initWalletTabs();
  initSparklines();
  initQR();

  document.getElementById('copy-addr-btn').addEventListener('click', () => {
    const addr = document.getElementById('receive-addr').textContent;
    navigator.clipboard.writeText(addr)
      .then(() => notify('✓ Number copied to clipboard'))
      .catch(() => notify('⚠ Copy failed', true));
  });

  document.getElementById('send-tx-btn').addEventListener('click', () => {
    const method = document.getElementById('send-method').value;
    const addr = document.getElementById('send-addr').value.trim();
    const amt  = document.getElementById('send-amt').value.trim();
    if (!addr || !amt) { notify('⚠ Fill recipient and amount', true); return; }
    if (parseFloat(amt) <= 0) { notify('⚠ Invalid amount', true); return; }

    showConfirm(
      `Send <span style="color:var(--amber)">৳ ${amt}</span> via <span style="color:var(--green)">${method}</span> to<br/><span style="color:var(--green);font-size:0.72rem;">${addr}</span>?<br/><br/><span style="color:var(--text-dim);font-size:0.72rem;">Payment is irreversible.</span>`,
      () => {
        notify(`✓ Payment of ৳ ${amt} sent via ${method}`);
        document.getElementById('send-addr').value = '';
        document.getElementById('send-amt').value = '';
      }
    );
  });
}

function initWalletTabs() {
  document.querySelectorAll('.wtab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.wtab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.wtab;
      document.querySelectorAll('.wtab-panel').forEach(p => {
        p.classList.toggle('hidden', p.id !== 'wtab-' + target);
      });
    });
  });
}

function initSparklines() {
  ['bdt', 'bkash', 'nagad'].forEach(coin => {
    const container = document.getElementById(coin + '-spark');
    if (!container) return;
    const points = Array.from({ length: 20 }, () => Math.random() * 30 + 10);
    const max = Math.max(...points);
    const min = Math.min(...points);
    const range = max - min || 1;

    let svg = `<svg width="100%" height="40" viewBox="0 0 100 40" preserveAspectRatio="none">`;
    svg += `<polyline points="${points.map((p, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 40 - ((p - min) / range) * 35 - 2.5;
      return `${x},${y}`;
    }).join(' ')}" fill="none" stroke="var(--green)" stroke-width="1.5" opacity="0.6"/>`;
    svg += `</svg>`;
    container.innerHTML = svg;
  });
}

function initQR() {
  const grid = document.getElementById('qr-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const size = 25;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const cell = document.createElement('div');
      cell.className = 'qr-cell';
      const isFinder = (x < 7 && y < 7) || (x > size - 8 && y < 7) || (x < 7 && y > size - 8);
      if (isFinder) {
        const inBorder = (x === 0 || x === 6 || y === 0 || y === 6) ||
                         (x > size - 8 && (x === size - 7 || x === size - 1 || y === 0 || y === 6)) ||
                         (y > size - 8 && (y === size - 7 || y === size - 1 || x === 0 || x === 6));
        const inCenter = (x >= 2 && x <= 4 && y >= 2 && y <= 4) ||
                         (x > size - 8 && x >= size - 5 && x <= size - 3 && y >= 2 && y <= 4) ||
                         (y > size - 8 && y >= size - 5 && y <= size - 3 && x >= 2 && x <= 4);
        if (inBorder || inCenter) cell.classList.add('on');
      } else {
        if (Math.random() > 0.5) cell.classList.add('on');
      }
      grid.appendChild(cell);
    }
  }
}

// ============================================================
// ABOUT
// ============================================================

function initAbout() {
  document.getElementById('ascii-block').textContent = ASCII_LOGO;
}

// ============================================================
// CONFIRM MODAL
// ============================================================

let confirmCallback = null;

function showConfirm(message, cb) {
  document.getElementById('confirm-body').innerHTML = `<p style="font-size:0.78rem;color:var(--text);line-height:1.8;">${message}</p>`;
  confirmCallback = cb;
  document.getElementById('confirm-modal').classList.remove('hidden');
}

document.getElementById('confirm-yes').addEventListener('click', () => {
  document.getElementById('confirm-modal').classList.add('hidden');
  if (confirmCallback) confirmCallback();
  confirmCallback = null;
});

document.getElementById('confirm-no').addEventListener('click', () => {
  document.getElementById('confirm-modal').classList.add('hidden');
  confirmCallback = null;
});

// ============================================================
// NOTIFICATION
// ============================================================

let notifTimer = null;

function notify(msg, isError = false) {
  const el = document.getElementById('notification');
  el.textContent = msg;
  el.className = 'notification' + (isError ? ' error' : '');
  el.classList.remove('hidden');
  if (notifTimer) clearTimeout(notifTimer);
  notifTimer = setTimeout(() => el.classList.add('hidden'), 3500);
}

// ============================================================
// ANON % FLICKER
// ============================================================

function flickerAnon() {
  const el = document.getElementById('anon-pct');
  const base = 94;
  setInterval(() => {
    const jitter = Math.floor(Math.random() * 3) - 1;
    el.textContent = (base + jitter) + '%';
  }, 4000);
}

// ============================================================
// MATRIX RAIN
// ============================================================

function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const cols = Math.floor(width / 14);
  const drops = Array(cols).fill(1);
  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

  let enabled = true;

  function draw() {
    if (!enabled) return;
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#00ff41';
    ctx.font = '14px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * 14, drops[i] * 14);
      if (drops[i] * 14 > height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }

  draw();

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  document.getElementById('theme-toggle').addEventListener('click', () => {
    enabled = !enabled;
    if (!enabled) {
      ctx.clearRect(0, 0, width, height);
      document.getElementById('theme-toggle').textContent = '[ MATRIX: OFF ]';
    } else {
      draw();
      document.getElementById('theme-toggle').textContent = '[ MATRIX: ON ]';
    }
  });
}

// ============================================================
// FILTER COUNTS
// ============================================================

function updateFilterCounts() {
  const cats = ['all', 'food', 'drink', 'grocery', 'furniture', 'electronics', 'stationary', 'personal', 'hardware', 'clothing'];
  const counts = {};
  cats.forEach(c => {
    counts[c] = c === 'all' ? CATALOG.length : CATALOG.filter(i => i.cat === c).length;
  });
  cats.forEach(c => {
    const el = document.getElementById('fc-' + c);
    if (el) el.textContent = counts[c];
  });
}

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  runBoot();

  const observer = new MutationObserver(() => {
    if (!document.getElementById('main-site').classList.contains('hidden')) {
      observer.disconnect();
      initTicker();
      initNav();
      initCatalog();
      initCart();
      initMessages();
      initWallet();
      initAbout();
      initMatrix();
      updateFilterCounts();
      flickerAnon();
    }
  });

  observer.observe(document.getElementById('main-site'), { attributes: true, attributeFilter: ['class'] });

  if (!document.getElementById('main-site').classList.contains('hidden')) {
    initTicker();
    initNav();
    initCatalog();
    initCart();
    initMessages();
    initWallet();
    initAbout();
    initMatrix();
    updateFilterCounts();
    flickerAnon();
  }
});
