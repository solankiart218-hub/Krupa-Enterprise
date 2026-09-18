// Krupa Enterprise - Product Catalog Database
const KRUPA_PRODUCTS = [
  {
    id: "prod-01",
    name: "Airtight Storage Containers (Set of 4)",
    category: "Storage & Containers",
    categorySlug: "storage",
    price: 399,
    originalPrice: 650,
    rating: 4.9,
    reviews: 142,
    badge: "Best Seller",
    image: "assets/images/storage_containers.jpg",
    galleryImages: [
      "assets/images/storage_containers.jpg",
      "assets/images/box_image.png",
      "assets/images/bulk_products.jpg",
      "assets/images/kitchen_baskets.jpg"
    ],
    description: "Premium BPA-free food storage containers with silicone airtight seal. Keeps grains, cereals, pulses, and snacks fresh and moisture-free.",
    features: ["100% Airtight & Leak-Proof", "BPA Free Food Grade Plastic", "Stackable Space-Saving Design", "Dishwasher Safe"]
  },
  {
    id: "prod-02",
    name: "Multi-Compartment Lunch Box",
    category: "Lunch Boxes",
    categorySlug: "lunch-boxes",
    price: 299,
    originalPrice: 499,
    rating: 4.8,
    reviews: 215,
    badge: "Best Seller",
    image: "assets/images/lunch_box.jpg",
    galleryImages: [
      "assets/images/lunch_box.jpg",
      "assets/images/everyday_lifestyle.jpg",
      "assets/images/box_image.png",
      "assets/images/bulk_products.jpg"
    ],
    description: "Modern Bento-style leakproof lunch box with smart separate food sections. Ideal for office, school, and picnic carrying.",
    features: ["4 Spill-Proof Compartments", "Microwave & Dishwasher Safe", "Includes Cutlery Set", "Durable Click-Lock Lids"]
  },
  {
    id: "prod-03",
    name: "Kitchen Cooking Utensils Set",
    category: "Kitchen Tools",
    categorySlug: "kitchen-tools",
    price: 320,
    originalPrice: 550,
    rating: 4.7,
    reviews: 98,
    badge: "Top Rated",
    image: "assets/images/cooking_utensils.jpg",
    galleryImages: [
      "assets/images/cooking_utensils.jpg",
      "assets/images/everyday_lifestyle.jpg",
      "assets/images/kitchen_baskets.jpg",
      "assets/images/colander_strainer.jpg"
    ],
    description: "Heat-resistant silicone kitchen utensil set with ergonomic wooden handles. Safe for non-stick cookware.",
    features: ["Heat Resistant up to 230°C", "Non-Scratch Silicone Heads", "Natural Beechwood Handles", "Includes Countertop Holder"]
  },
  {
    id: "prod-04",
    name: "Silicone Ice Cube Tray with Lid",
    category: "Ice Trays & Molds",
    categorySlug: "ice-trays",
    price: 129,
    originalPrice: 249,
    rating: 4.9,
    reviews: 310,
    badge: "Best Seller",
    image: "assets/images/ice_cube_tray.jpg",
    galleryImages: [
      "assets/images/ice_cube_tray.jpg",
      "assets/images/box_image.png",
      "assets/images/kitchen_aesthetic.jpg",
      "assets/images/everyday_lifestyle.jpg"
    ],
    description: "Flexible food-grade silicone ice tray with odor-preventing spill-proof lid. Easy push-up pop-out cube release.",
    features: ["Easy Push Cube Release", "Spill-Proof Stackable Cover", "Odor Free Silicone", "Great for Coffee & Baby Food"]
  },
  {
    id: "prod-05",
    name: "Premium Dinnerware Set (12 Pcs)",
    category: "Dinnerware",
    categorySlug: "dinnerware",
    price: 899,
    originalPrice: 1450,
    rating: 4.9,
    reviews: 86,
    badge: "Luxury Edition",
    image: "assets/images/dinnerware_set.jpg",
    galleryImages: [
      "assets/images/dinnerware_set.jpg",
      "assets/images/serving_trays.jpg",
      "assets/images/kitchen_aesthetic.jpg",
      "assets/images/bulk_products.jpg"
    ],
    description: "Elegant lightweight, shatter-proof dinner plates and soup bowls with subtle gold rim accents for fine dining everyday.",
    features: ["Chip & Shatter Resistant", "Gloss Finish Porcelain Look", "Lightweight & Sturdy", "Microwave Safe"]
  },
  {
    id: "prod-06",
    name: "Kitchen Organizer Countertop Rack",
    category: "Organizers",
    categorySlug: "organizers",
    price: 349,
    originalPrice: 599,
    rating: 4.8,
    reviews: 178,
    badge: "Best Seller",
    image: "assets/images/organizer_rack.jpg",
    galleryImages: [
      "assets/images/organizer_rack.jpg",
      "assets/images/kitchen_baskets.jpg",
      "assets/images/kitchen_aesthetic.jpg",
      "assets/images/box_image.png"
    ],
    description: "2-Tier modern countertop seasoning and condiment rack with anti-slip rubber pads and solid wooden shelf panels.",
    features: ["Rust-Proof Powder Coating", "Natural Wood Shelf Inlays", "Holds up to 20 Spice Jars", "No-Tool Assembly"]
  },
  {
    id: "prod-07",
    name: "Stainless Steel Mixing Bowls Set",
    category: "Cookware",
    categorySlug: "cookware",
    price: 249,
    originalPrice: 429,
    rating: 4.7,
    reviews: 134,
    badge: "Best Seller",
    image: "assets/images/mixing_bowls.jpg",
    galleryImages: [
      "assets/images/mixing_bowls.jpg",
      "assets/images/colander_strainer.jpg",
      "assets/images/box_image.png",
      "assets/images/everyday_lifestyle.jpg"
    ],
    description: "Deep nesting mixing bowls with measurement markings inside, non-slip silicone bases, and fitted airtight lids.",
    features: ["Food Grade Stainless Steel", "Non-Slip Silicone Bottom", "Nesting Space-Saving Size", "Measurement Markings"]
  },
  {
    id: "prod-08",
    name: "Artisan Wooden Cutting Boards",
    category: "Kitchen Tools",
    categorySlug: "kitchen-tools",
    price: 449,
    originalPrice: 799,
    rating: 4.8,
    reviews: 112,
    badge: "Eco Choice",
    image: "assets/images/cutting_boards.jpg",
    galleryImages: [
      "assets/images/cutting_boards.jpg",
      "assets/images/kitchen_aesthetic.jpg",
      "assets/images/everyday_lifestyle.jpg",
      "assets/images/box_image.png"
    ],
    description: "Natural organic acacia & bamboo chopping board with juice groove and easy-grip ergonomic handle.",
    features: ["Knife-Friendly Smooth Finish", "Deep Juice Groove Border", "Anti-Microbial Wood", "Easy Wash & Hang"]
  },
  {
    id: "prod-09",
    name: "Insulated Water Bottles & Flasks",
    category: "Storage & Containers",
    categorySlug: "storage",
    price: 399,
    originalPrice: 699,
    rating: 4.9,
    reviews: 260,
    badge: "Popular",
    image: "assets/images/water_bottles.jpg",
    galleryImages: [
      "assets/images/water_bottles.jpg",
      "assets/images/everyday_lifestyle.jpg",
      "assets/images/box_image.png",
      "assets/images/kitchen_aesthetic.jpg"
    ],
    description: "Double-wall vacuum insulated stainless steel water bottle keeps beverages cold for 24h and hot for 12h.",
    features: ["24h Cold / 12h Hot", "Sweat-Proof Exterior", "100% Leakproof Spout", "Food Grade 304 Steel"]
  },
  {
    id: "prod-10",
    name: "Stainless Colanders & Strainers",
    category: "Kitchen Tools",
    categorySlug: "kitchen-tools",
    price: 279,
    originalPrice: 450,
    rating: 4.6,
    reviews: 74,
    badge: "Essential",
    image: "assets/images/colander_strainer.jpg",
    galleryImages: [
      "assets/images/colander_strainer.jpg",
      "assets/images/mixing_bowls.jpg",
      "assets/images/box_image.png",
      "assets/images/everyday_lifestyle.jpg"
    ],
    description: "Micro-perforated colander basket with stable pedestal base for effortless pasta draining and vegetable washing.",
    features: ["Micro-Perforated Fast Drain", "Sturdy Pedestal Base", "Comfort Grip Handles", "Rust Resistant Finish"]
  },
  {
    id: "prod-11",
    name: "Glass Oil & Vinegar Dispensers",
    category: "Storage & Containers",
    categorySlug: "storage",
    price: 299,
    originalPrice: 520,
    rating: 4.8,
    reviews: 189,
    badge: "Trending",
    image: "assets/images/oil_dispenser.jpg",
    galleryImages: [
      "assets/images/oil_dispenser.jpg",
      "assets/images/kitchen_aesthetic.jpg",
      "assets/images/box_image.png",
      "assets/images/everyday_lifestyle.jpg"
    ],
    description: "Non-drip olive oil dispenser bottles with stainless steel auto-closing flip cap and measurement scale.",
    features: ["Precision Drip-Free Pouring", "Clear Borosilicate Glass", "Dust-Proof Flip Cap", "Easy One-Hand Pour"]
  },
  {
    id: "prod-12",
    name: "Sink & Kitchen Cleaning Accessories",
    category: "Organizers",
    categorySlug: "organizers",
    price: 199,
    originalPrice: 349,
    rating: 4.7,
    reviews: 88,
    badge: "Smart Home",
    image: "assets/images/cleaning_accessories.jpg",
    galleryImages: [
      "assets/images/cleaning_accessories.jpg",
      "assets/images/box_image.png",
      "assets/images/kitchen_aesthetic.jpg",
      "assets/images/everyday_lifestyle.jpg"
    ],
    description: "Compact sink caddy sponge holder with soap dispenser pump and ventilating drain tray for spotless counters.",
    features: ["Integrated Soap Pump", "Quick Draining Base", "Compact Space Saver", "Heavy Duty Scrub Brush"]
  },
  {
    id: "prod-13",
    name: "Modern Acrylic Serving Trays",
    category: "Dinnerware",
    categorySlug: "dinnerware",
    price: 349,
    originalPrice: 599,
    rating: 4.6,
    reviews: 95,
    badge: "Stylish",
    image: "assets/images/serving_trays.jpg",
    galleryImages: [
      "assets/images/serving_trays.jpg",
      "assets/images/dinnerware_set.jpg",
      "assets/images/kitchen_aesthetic.jpg",
      "assets/images/box_image.png"
    ],
    description: "High-rim crystal clear serving tray with polished cutout handles. Perfect for morning tea and party appetizers.",
    features: ["Spill Containment High Rim", "Ergonomic Cutout Grips", "Shatterproof Acrylic", "Modern Clean Look"]
  },
  {
    id: "prod-14",
    name: "Quick Vegetable Chopper (Multi-Blade)",
    category: "Kitchen Tools",
    categorySlug: "kitchen-tools",
    price: 369,
    originalPrice: 699,
    rating: 4.9,
    reviews: 340,
    badge: "Must Have",
    image: "assets/images/vegetable_chopper.jpg",
    galleryImages: [
      "assets/images/vegetable_chopper.jpg",
      "assets/images/box_image.png",
      "assets/images/everyday_lifestyle.jpg",
      "assets/images/kitchen_baskets.jpg"
    ],
    description: "Powerful hand-press multi-blade chopper with container. Dices onions, tomatoes, herbs, and nuts in seconds without tears.",
    features: ["Ultra-Sharp Stainless Blades", "Non-Slip Suction Base", "One-Press Easy Operation", "Large 1000ml Container"]
  },
  {
    id: "prod-15",
    name: "Perforated Kitchen Organizer Baskets",
    category: "Organizers",
    categorySlug: "organizers",
    price: 219,
    originalPrice: 380,
    rating: 4.8,
    reviews: 145,
    badge: "Value Pack",
    image: "assets/images/kitchen_baskets.jpg",
    galleryImages: [
      "assets/images/kitchen_baskets.jpg",
      "assets/images/storage_containers.jpg",
      "assets/images/box_image.png",
      "assets/images/everyday_lifestyle.jpg"
    ],
    description: "Breathable ventilated plastic storage bins with handles. Ideal for pantry organization, refrigerator, and vegetables.",
    features: ["Air Ventilation Holes", "Sturdy Side Carry Handles", "Moisture Resistant", "Multi-Utility Size"]
  },
  {
    id: "prod-16",
    name: "Custom & Bulk Storage Tubs",
    category: "Custom Products",
    categorySlug: "custom",
    price: 499,
    originalPrice: 850,
    rating: 4.9,
    reviews: 62,
    badge: "Commercial Grade",
    image: "assets/images/bulk_products.jpg",
    galleryImages: [
      "assets/images/bulk_products.jpg",
      "assets/images/box_image.png",
      "assets/images/factory_manufacturing.jpg",
      "assets/images/showroom_office.jpg"
    ],
    description: "Industrial grade heavy-duty nesting storage containers available for custom branding, catering, and bulk orders.",
    features: ["Heavy Duty Polypropylene", "Custom Logo Printing Option", "Airtight Lock Rim", "Bulk Discount Ready"]
  }
];

// Product Category definitions for filtering and UI
const KRUPA_CATEGORIES = [
  { name: "All Products", slug: "all", count: 16 },
  { name: "Storage & Containers", slug: "storage", count: 4, icon: "fa-box-open" },
  { name: "Lunch Boxes", slug: "lunch-boxes", count: 2, icon: "fa-utensils" },
  { name: "Kitchen Tools", slug: "kitchen-tools", count: 4, icon: "fa-blender" },
  { name: "Ice Trays & Molds", slug: "ice-trays", count: 1, icon: "fa-cube" },
  { name: "Dinnerware", slug: "dinnerware", count: 2, icon: "fa-plate-wheat" },
  { name: "Organizers", slug: "organizers", count: 3, icon: "fa-layer-group" },
  { name: "Cookware", slug: "cookware", count: 1, icon: "fa-fire-burner" },
  { name: "Custom Products", slug: "custom", count: 1, icon: "fa-industry" }
];
