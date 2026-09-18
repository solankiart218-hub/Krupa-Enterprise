// Krupa Enterprise - Real Product Catalog Database
const KRUPA_PRODUCTS = [
  {
    "id": "prod-01",
    "name": "Multi-Purpose Kitchen Storage Pad Set",
    "category": "Kitchen Tools",
    "categorySlug": "kitchen-tools",
    "rating": 4.8,
    "reviews": 195,
    "badge": "Best Seller",
    "image": "assets/images/products/prod-01_1.png",
    "galleryImages": [
      "assets/images/products/prod-01_1.png",
      "assets/images/products/prod-01_2.png",
      "assets/images/products/prod-01_3.png",
      "assets/images/products/prod-01_4.png",
      "assets/images/products/prod-01_5.png"
    ],
    "description": "Durable anti-slip food-grade silicone & plastic pads for kitchen countertops, cabinets, and appliances.",
    "features": [
      "100% Food Grade Material",
      "Anti-Slip & Heat Resistant",
      "Easy to Clean & Wash",
      "Multi-Purpose Kitchen Use"
    ]
  },
  {
    "id": "prod-02",
    "name": "Airtight Food Storage Container Set",
    "category": "Storage & Containers",
    "categorySlug": "storage",
    "rating": 4.8,
    "reviews": 180,
    "badge": "Best Seller",
    "image": "assets/images/products/prod-02_1.png",
    "galleryImages": [
      "assets/images/products/prod-02_1.png",
      "assets/images/products/prod-02_2.png",
      "assets/images/products/prod-02_3.png",
      "assets/images/products/prod-02_4.png"
    ],
    "description": "Leakproof BPA-free plastic storage containers with silicone seal. Keeps food fresh and moisture-free.",
    "features": [
      "100% Airtight Lock Lids",
      "BPA Free Food Safe Plastic",
      "Stackable Space Saving Design",
      "Dishwasher & Microwave Safe"
    ]
  },
  {
    "id": "prod-03",
    "name": "Insulated Stainless Steel Water Bottle",
    "category": "Storage & Containers",
    "categorySlug": "storage",
    "rating": 4.8,
    "reviews": 195,
    "badge": "Popular",
    "image": "assets/images/products/prod-03_1.png",
    "galleryImages": [
      "assets/images/products/prod-03_1.png",
      "assets/images/products/prod-03_2.png",
      "assets/images/products/prod-03_3.png",
      "assets/images/products/prod-03_4.png",
      "assets/images/products/prod-03_5.png"
    ],
    "description": "Double-wall vacuum insulated water bottle keeps drinks cold or hot for hours.",
    "features": [
      "Sweat-Proof Ergonomic Body",
      "100% Leakproof Spout",
      "Food Grade Stainless Steel",
      "Easy Carry Handle"
    ]
  },
  {
    "id": "prod-04",
    "name": "Ergonomic Kitchen Cleaning Brush",
    "category": "Kitchen Tools",
    "categorySlug": "kitchen-tools",
    "rating": 4.8,
    "reviews": 180,
    "badge": "Essential",
    "image": "assets/images/products/prod-04_1.png",
    "galleryImages": [
      "assets/images/products/prod-04_1.png",
      "assets/images/products/prod-04_2.png",
      "assets/images/products/prod-04_3.png",
      "assets/images/products/prod-04_4.png"
    ],
    "description": "Heavy-duty bristles with comfortable non-slip handle for effortless dish and sink scrubbing.",
    "features": [
      "Durable Nylon Bristles",
      "Non-Slip Soft Grip Handle",
      "Quick Drying Hanging Loop",
      "Gentle on Non-Stick Surfaces"
    ]
  },
  {
    "id": "prod-05",
    "name": "Wall-Mounted Brush & Accessory Holder",
    "category": "Organizers",
    "categorySlug": "organizers",
    "rating": 4.8,
    "reviews": 180,
    "badge": "Smart Home",
    "image": "assets/images/products/prod-05_1.jpg",
    "galleryImages": [
      "assets/images/products/prod-05_1.jpg",
      "assets/images/products/prod-05_2.png",
      "assets/images/products/prod-05_3.png",
      "assets/images/products/prod-05_4.png"
    ],
    "description": "Self-adhesive wall holder for kitchen brushes, sponges, and bathroom accessories.",
    "features": [
      "No-Drill Strong Adhesive",
      "Ventilated Quick Drain Base",
      "Compact Space Saver",
      "Rustproof Plastic Body"
    ]
  },
  {
    "id": "prod-06",
    "name": "Unbreakable Plastic Drinking Glasses Set",
    "category": "Dinnerware",
    "categorySlug": "dinnerware",
    "rating": 4.8,
    "reviews": 195,
    "badge": "Top Rated",
    "image": "assets/images/products/prod-06_1.png",
    "galleryImages": [
      "assets/images/products/prod-06_1.png",
      "assets/images/products/prod-06_2.png",
      "assets/images/products/prod-06_3.png",
      "assets/images/products/prod-06_4.png",
      "assets/images/products/prod-06_5.png"
    ],
    "description": "Crystal clear unbreakable dining tumblers designed for everyday family meals.",
    "features": [
      "Shatterproof Heavy Plastic",
      "Crystal Clear Glass Look",
      "Stackable & Lightweight",
      "Dishwasher Safe"
    ]
  },
  {
    "id": "prod-07",
    "name": "Modern Beverage & Water Jug Dispenser",
    "category": "Dinnerware",
    "categorySlug": "dinnerware",
    "rating": 4.8,
    "reviews": 180,
    "badge": "Trending",
    "image": "assets/images/products/prod-07_1.png",
    "galleryImages": [
      "assets/images/products/prod-07_1.png",
      "assets/images/products/prod-07_2.png",
      "assets/images/products/prod-07_3.png",
      "assets/images/products/prod-07_4.png"
    ],
    "description": "Elegant transparent pitcher jug with secure lid spout for serving water, juice, and iced tea.",
    "features": [
      "Drip-Free Pouring Spout",
      "Easy-Grip Sturdy Handle",
      "Wide Mouth for Easy Cleaning",
      "Food Grade BPA Free Material"
    ]
  },
  {
    "id": "prod-08",
    "name": "Decorative Ice Bowl & Serving Dish Set",
    "category": "Ice Trays & Molds",
    "categorySlug": "ice-trays",
    "rating": 4.8,
    "reviews": 180,
    "badge": "Luxury Edition",
    "image": "assets/images/products/prod-08_1.png",
    "galleryImages": [
      "assets/images/products/prod-08_1.png",
      "assets/images/products/prod-08_2.png",
      "assets/images/products/prod-08_3.png",
      "assets/images/products/prod-08_4.png"
    ],
    "description": "Stylish serving ice bowl set ideal for appetizers, desserts, and cold snacks.",
    "features": [
      "Temperature Resistant Plastic",
      "Gloss Finish Crystal Pattern",
      "Easy Push Release Base",
      "Stackable Compact Size"
    ]
  },
  {
    "id": "prod-09",
    "name": "Cute Rabbit Wall Organizer Caddy",
    "category": "Organizers",
    "categorySlug": "organizers",
    "rating": 4.8,
    "reviews": 180,
    "badge": "New Arrival",
    "image": "assets/images/products/prod-09_1.png",
    "galleryImages": [
      "assets/images/products/prod-09_1.png",
      "assets/images/products/prod-09_2.png",
      "assets/images/products/prod-09_3.png",
      "assets/images/products/prod-09_4.png"
    ],
    "description": "Charming rabbit-themed organizer for kitchen spoons, pens, and cutlery accessories.",
    "features": [
      "Fun Cute Animal Design",
      "Self-Adhesive Wall Mounting",
      "Drain Holes Bottom",
      "Durable ABS Plastic"
    ]
  },
  {
    "id": "prod-10",
    "name": "Heavy-Duty Kitchen Scrubbing Sponges",
    "category": "Kitchen Tools",
    "categorySlug": "kitchen-tools",
    "rating": 4.8,
    "reviews": 225,
    "badge": "Best Seller",
    "image": "assets/images/products/prod-10_1.png",
    "galleryImages": [
      "assets/images/products/prod-10_1.png",
      "assets/images/products/prod-10_2.png",
      "assets/images/products/prod-10_3.png",
      "assets/images/products/prod-10_4.png",
      "assets/images/products/prod-10_5.png",
      "assets/images/products/prod-10_6.png",
      "assets/images/products/prod-10_7.png"
    ],
    "description": "High-density abrasive scrub pads for tough grease, burnt pans, and countertop cleaning.",
    "features": [
      "High-Density Fiber Pad",
      "Long-Lasting Abrasive Power",
      "Rinses Clean Easily",
      "Safe for All Cookware"
    ]
  },
  {
    "id": "prod-11",
    "name": "Soft Blue Non-Scratch Sponge Scrubber",
    "category": "Kitchen Tools",
    "categorySlug": "kitchen-tools",
    "rating": 4.8,
    "reviews": 165,
    "badge": "Value Pack",
    "image": "assets/images/products/prod-11_1.png",
    "galleryImages": [
      "assets/images/products/prod-11_1.png",
      "assets/images/products/prod-11_2.png",
      "assets/images/products/prod-11_3.png"
    ],
    "description": "Soft non-scratch sponge scrubber designed for delicate glassware, ceramics, and non-stick pans.",
    "features": [
      "Non-Scratch Gentle Foam",
      "Rich Suds Lathering",
      "Ergonomic Easy Grip",
      "Quick Drying Sponge"
    ]
  },
  {
    "id": "prod-12",
    "name": "Compact Mini Cleaning Scrubber Pack",
    "category": "Kitchen Tools",
    "categorySlug": "kitchen-tools",
    "rating": 4.8,
    "reviews": 180,
    "badge": "Essential",
    "image": "assets/images/products/prod-12_1.png",
    "galleryImages": [
      "assets/images/products/prod-12_1.png",
      "assets/images/products/prod-12_2.png",
      "assets/images/products/prod-12_3.png",
      "assets/images/products/prod-12_4.png"
    ],
    "description": "Compact mini scrubbers ideal for tight corners, bottle mouths, and detailed kitchen cleaning.",
    "features": [
      "Precision Corner Cleaning",
      "Dual-Action Scrub & Wipe",
      "Odour-Resistant Material",
      "Multi-Pack Value"
    ]
  },
  {
    "id": "prod-13",
    "name": "Multipurpose Kitchen Organizer Stand",
    "category": "Organizers",
    "categorySlug": "organizers",
    "rating": 4.8,
    "reviews": 180,
    "badge": "Best Seller",
    "image": "assets/images/products/prod-13_1.jpg",
    "galleryImages": [
      "assets/images/products/prod-13_1.jpg",
      "assets/images/products/prod-13_2.png",
      "assets/images/products/prod-13_3.png",
      "assets/images/products/prod-13_4.png"
    ],
    "description": "Sturdy multi-tier countertop rack for holding spices, condiments, and kitchen accessories.",
    "features": [
      "Rustproof Solid Frame",
      "Anti-Slip Foot Pads",
      "Holds Up to 15 Jars",
      "Zero Tool Quick Assembly"
    ]
  },
  {
    "id": "prod-14",
    "name": "Household Storage Box with Click Locks",
    "category": "Storage & Containers",
    "categorySlug": "storage",
    "rating": 4.8,
    "reviews": 180,
    "badge": "Popular",
    "image": "assets/images/products/prod-14_1.jpg",
    "galleryImages": [
      "assets/images/products/prod-14_1.jpg",
      "assets/images/products/prod-14_2.png",
      "assets/images/products/prod-14_3.png",
      "assets/images/products/prod-14_4.png"
    ],
    "description": "Versatile clear storage box with side click handles for pantry and wardrobe organization.",
    "features": [
      "Side Snap-Lock Latch",
      "Dust-Proof Tight Lid",
      "Clear Transparent View",
      "Heavy Duty Stackable Plastic"
    ]
  },
  {
    "id": "prod-15",
    "name": "Kids Straw Water Bottle with Handle",
    "category": "Lunch Boxes",
    "categorySlug": "lunch-boxes",
    "rating": 4.8,
    "reviews": 165,
    "badge": "Trending",
    "image": "assets/images/products/prod-15_1.jpg",
    "galleryImages": [
      "assets/images/products/prod-15_1.jpg",
      "assets/images/products/prod-15_2.jpg",
      "assets/images/products/prod-15_3.jpg"
    ],
    "description": "Leakproof vibrant kids water bottle with soft silicone straw and adjustable shoulder strap.",
    "features": [
      "Push Button Flip Top",
      "Soft Food Grade Silicone Straw",
      "100% Leakproof Seal",
      "Includes Carrying Strap"
    ]
  },
  {
    "id": "prod-16",
    "name": "Multipurpose Blue Serving Tray Pack",
    "category": "Dinnerware",
    "categorySlug": "dinnerware",
    "rating": 4.8,
    "reviews": 210,
    "badge": "Best Seller",
    "image": "assets/images/products/prod-16_1.png",
    "galleryImages": [
      "assets/images/products/prod-16_1.png",
      "assets/images/products/prod-16_2.png",
      "assets/images/products/prod-16_3.png",
      "assets/images/products/prod-16_4.png",
      "assets/images/products/prod-16_5.png",
      "assets/images/products/prod-16_6.png"
    ],
    "description": "High-rim plastic serving tray set designed for tea, snacks, and organized counter storage.",
    "features": [
      "High-Rim Spill Prevention",
      "Ergonomic Side Handles",
      "Non-Slip Textured Surface",
      "Stain Resistant Finish"
    ]
  },
  {
    "id": "prod-17",
    "name": "Fresh Green Serving Tray Set",
    "category": "Dinnerware",
    "categorySlug": "dinnerware",
    "rating": 4.8,
    "reviews": 180,
    "badge": "Eco Choice",
    "image": "assets/images/products/prod-17_1.png",
    "galleryImages": [
      "assets/images/products/prod-17_1.png",
      "assets/images/products/prod-17_2.png",
      "assets/images/products/prod-17_3.png",
      "assets/images/products/prod-17_4.png"
    ],
    "description": "Vibrant pastel green serving trays for breakfast, beverages, and party appetizers.",
    "features": [
      "Vibrant Pastel Color",
      "Lightweight & Sturdy",
      "Easy Wipe Clean",
      "Nesting Space-Saving Size"
    ]
  },
  {
    "id": "prod-18",
    "name": "Nested Utility Serving Trays Bundle",
    "category": "Dinnerware",
    "categorySlug": "dinnerware",
    "rating": 4.8,
    "reviews": 195,
    "badge": "Value Pack",
    "image": "assets/images/products/prod-18_1.png",
    "galleryImages": [
      "assets/images/products/prod-18_1.png",
      "assets/images/products/prod-18_2.png",
      "assets/images/products/prod-18_3.png",
      "assets/images/products/prod-18_4.png",
      "assets/images/products/prod-18_5.png"
    ],
    "description": "Assorted size utility trays for kitchen organization, dining tables, and catering.",
    "features": [
      "3 Assorted Sizes",
      "Heavy Duty Thickness",
      "Multi-Purpose Daily Use",
      "Microwave & Dishwasher Safe"
    ]
  },
  {
    "id": "prod-19",
    "name": "Multipurpose Kitchen Utility Balls Set",
    "category": "Cookware",
    "categorySlug": "cookware",
    "rating": 4.8,
    "reviews": 180,
    "badge": "Smart Choice",
    "image": "assets/images/products/prod-19_1.png",
    "galleryImages": [
      "assets/images/products/prod-19_1.png",
      "assets/images/products/prod-19_2.png",
      "assets/images/products/prod-19_3.png",
      "assets/images/products/prod-19_4.png"
    ],
    "description": "Durable food-grade plastic kitchen utility balls for cooking, cleaning, and storage needs.",
    "features": [
      "100% Virgin Food Grade Plastic",
      "Non-Toxic & Safe",
      "Durable Construction",
      "Multi-Utility Application"
    ]
  }
];

// Product Category definitions for filtering and UI
const KRUPA_CATEGORIES = [
  { name: "All Products", slug: "all", count: 19 },
  { name: "Storage & Containers", slug: "storage", count: 4, icon: "fa-box-open" },
  { name: "Lunch Boxes", slug: "lunch-boxes", count: 1, icon: "fa-utensils" },
  { name: "Kitchen Tools", slug: "kitchen-tools", count: 5, icon: "fa-blender" },
  { name: "Ice Trays & Molds", slug: "ice-trays", count: 1, icon: "fa-cube" },
  { name: "Dinnerware", slug: "dinnerware", count: 5, icon: "fa-plate-wheat" },
  { name: "Organizers", slug: "organizers", count: 3, icon: "fa-layer-group" },
  { name: "Cookware", slug: "cookware", count: 1, icon: "fa-fire-burner" }
];
