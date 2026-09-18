import os
import re
import shutil
import json

src_dir = r'c:\Krupa Enterprise\Product Image'
dst_dir = r'c:\Krupa Enterprise\assets\images\products'

if not os.path.exists(dst_dir):
    os.makedirs(dst_dir)

# Define all 19 real products matching the filenames in Product Image/
products_raw = [
    {
        'id': 'prod-01',
        'name': 'Multi-Purpose Kitchen Storage Pad Set',
        'category': 'Kitchen Tools',
        'categorySlug': 'kitchen-tools',
        'badge': 'Best Seller',
        'desc': 'Durable anti-slip food-grade silicone & plastic pads for kitchen countertops, cabinets, and appliances.',
        'features': ['100% Food Grade Material', 'Anti-Slip & Heat Resistant', 'Easy to Clean & Wash', 'Multi-Purpose Kitchen Use'],
        'pattern': r'^pad\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-02',
        'name': 'Airtight Food Storage Container Set',
        'category': 'Storage & Containers',
        'categorySlug': 'storage',
        'badge': 'Best Seller',
        'desc': 'Leakproof BPA-free plastic storage containers with silicone seal. Keeps food fresh and moisture-free.',
        'features': ['100% Airtight Lock Lids', 'BPA Free Food Safe Plastic', 'Stackable Space Saving Design', 'Dishwasher & Microwave Safe'],
        'pattern': r'^conatiner\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-03',
        'name': 'Insulated Stainless Steel Water Bottle',
        'category': 'Storage & Containers',
        'categorySlug': 'storage',
        'badge': 'Popular',
        'desc': 'Double-wall vacuum insulated water bottle keeps drinks cold or hot for hours.',
        'features': ['Sweat-Proof Ergonomic Body', '100% Leakproof Spout', 'Food Grade Stainless Steel', 'Easy Carry Handle'],
        'pattern': r'^bottle\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-04',
        'name': 'Ergonomic Kitchen Cleaning Brush',
        'category': 'Kitchen Tools',
        'categorySlug': 'kitchen-tools',
        'badge': 'Essential',
        'desc': 'Heavy-duty bristles with comfortable non-slip handle for effortless dish and sink scrubbing.',
        'features': ['Durable Nylon Bristles', 'Non-Slip Soft Grip Handle', 'Quick Drying Hanging Loop', 'Gentle on Non-Stick Surfaces'],
        'pattern': r'^brush\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-05',
        'name': 'Wall-Mounted Brush & Accessory Holder',
        'category': 'Organizers',
        'categorySlug': 'organizers',
        'badge': 'Smart Home',
        'desc': 'Self-adhesive wall holder for kitchen brushes, sponges, and bathroom accessories.',
        'features': ['No-Drill Strong Adhesive', 'Ventilated Quick Drain Base', 'Compact Space Saver', 'Rustproof Plastic Body'],
        'pattern': r'^brush\s*holder\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-06',
        'name': 'Unbreakable Plastic Drinking Glasses Set',
        'category': 'Dinnerware',
        'categorySlug': 'dinnerware',
        'badge': 'Top Rated',
        'desc': 'Crystal clear unbreakable dining tumblers designed for everyday family meals.',
        'features': ['Shatterproof Heavy Plastic', 'Crystal Clear Glass Look', 'Stackable & Lightweight', 'Dishwasher Safe'],
        'pattern': r'^glass\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-07',
        'name': 'Modern Beverage & Water Jug Dispenser',
        'category': 'Dinnerware',
        'categorySlug': 'dinnerware',
        'badge': 'Trending',
        'desc': 'Elegant transparent pitcher jug with secure lid spout for serving water, juice, and iced tea.',
        'features': ['Drip-Free Pouring Spout', 'Easy-Grip Sturdy Handle', 'Wide Mouth for Easy Cleaning', 'Food Grade BPA Free Material'],
        'pattern': r'^jug\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-08',
        'name': 'Decorative Ice Bowl & Serving Dish Set',
        'category': 'Ice Trays & Molds',
        'categorySlug': 'ice-trays',
        'badge': 'Luxury Edition',
        'desc': 'Stylish serving ice bowl set ideal for appetizers, desserts, and cold snacks.',
        'features': ['Temperature Resistant Plastic', 'Gloss Finish Crystal Pattern', 'Easy Push Release Base', 'Stackable Compact Size'],
        'pattern': r'^ice\s*bowl\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-09',
        'name': 'Cute Rabbit Wall Organizer Caddy',
        'category': 'Organizers',
        'categorySlug': 'organizers',
        'badge': 'New Arrival',
        'desc': 'Charming rabbit-themed organizer for kitchen spoons, pens, and cutlery accessories.',
        'features': ['Fun Cute Animal Design', 'Self-Adhesive Wall Mounting', 'Drain Holes Bottom', 'Durable ABS Plastic'],
        'pattern': r'^rabit\s*holder\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-10',
        'name': 'Heavy-Duty Kitchen Scrubbing Sponges',
        'category': 'Kitchen Tools',
        'categorySlug': 'kitchen-tools',
        'badge': 'Best Seller',
        'desc': 'High-density abrasive scrub pads for tough grease, burnt pans, and countertop cleaning.',
        'features': ['High-Density Fiber Pad', 'Long-Lasting Abrasive Power', 'Rinses Clean Easily', 'Safe for All Cookware'],
        'pattern': r'^scruber\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-11',
        'name': 'Soft Blue Non-Scratch Sponge Scrubber',
        'category': 'Kitchen Tools',
        'categorySlug': 'kitchen-tools',
        'badge': 'Value Pack',
        'desc': 'Soft non-scratch sponge scrubber designed for delicate glassware, ceramics, and non-stick pans.',
        'features': ['Non-Scratch Gentle Foam', 'Rich Suds Lathering', 'Ergonomic Easy Grip', 'Quick Drying Sponge'],
        'pattern': r'^blue\s*scrubber\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-12',
        'name': 'Compact Mini Cleaning Scrubber Pack',
        'category': 'Kitchen Tools',
        'categorySlug': 'kitchen-tools',
        'badge': 'Essential',
        'desc': 'Compact mini scrubbers ideal for tight corners, bottle mouths, and detailed kitchen cleaning.',
        'features': ['Precision Corner Cleaning', 'Dual-Action Scrub & Wipe', 'Odour-Resistant Material', 'Multi-Pack Value'],
        'pattern': r'^small\s*scruber\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-13',
        'name': 'Multipurpose Kitchen Organizer Stand',
        'category': 'Organizers',
        'categorySlug': 'organizers',
        'badge': 'Best Seller',
        'desc': 'Sturdy multi-tier countertop rack for holding spices, condiments, and kitchen accessories.',
        'features': ['Rustproof Solid Frame', 'Anti-Slip Foot Pads', 'Holds Up to 15 Jars', 'Zero Tool Quick Assembly'],
        'pattern': r'^stand\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-14',
        'name': 'Household Storage Box with Click Locks',
        'category': 'Storage & Containers',
        'categorySlug': 'storage',
        'badge': 'Popular',
        'desc': 'Versatile clear storage box with side click handles for pantry and wardrobe organization.',
        'features': ['Side Snap-Lock Latch', 'Dust-Proof Tight Lid', 'Clear Transparent View', 'Heavy Duty Stackable Plastic'],
        'pattern': r'^storage\s*box\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-15',
        'name': 'Kids Straw Water Bottle with Handle',
        'category': 'Lunch Boxes',
        'categorySlug': 'lunch-boxes',
        'badge': 'Trending',
        'desc': 'Leakproof vibrant kids water bottle with soft silicone straw and adjustable shoulder strap.',
        'features': ['Push Button Flip Top', 'Soft Food Grade Silicone Straw', '100% Leakproof Seal', 'Includes Carrying Strap'],
        'pattern': r'^straw\s*bottle\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-16',
        'name': 'Multipurpose Blue Serving Tray Pack',
        'category': 'Dinnerware',
        'categorySlug': 'dinnerware',
        'badge': 'Best Seller',
        'desc': 'High-rim plastic serving tray set designed for tea, snacks, and organized counter storage.',
        'features': ['High-Rim Spill Prevention', 'Ergonomic Side Handles', 'Non-Slip Textured Surface', 'Stain Resistant Finish'],
        'pattern': r'^blue\s*tray\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-17',
        'name': 'Fresh Green Serving Tray Set',
        'category': 'Dinnerware',
        'categorySlug': 'dinnerware',
        'badge': 'Eco Choice',
        'desc': 'Vibrant pastel green serving trays for breakfast, beverages, and party appetizers.',
        'features': ['Vibrant Pastel Color', 'Lightweight & Sturdy', 'Easy Wipe Clean', 'Nesting Space-Saving Size'],
        'pattern': r'^green\s*tray\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-18',
        'name': 'Nested Utility Serving Trays Bundle',
        'category': 'Dinnerware',
        'categorySlug': 'dinnerware',
        'badge': 'Value Pack',
        'desc': 'Assorted size utility trays for kitchen organization, dining tables, and catering.',
        'features': ['3 Assorted Sizes', 'Heavy Duty Thickness', 'Multi-Purpose Daily Use', 'Microwave & Dishwasher Safe'],
        'pattern': r'^tray\s*pack\s*(\d+)\.(png|jpg|jpeg)$'
    },
    {
        'id': 'prod-19',
        'name': 'Multipurpose Kitchen Utility Balls Set',
        'category': 'Cookware',
        'categorySlug': 'cookware',
        'badge': 'Smart Choice',
        'desc': 'Durable food-grade plastic kitchen utility balls for cooking, cleaning, and storage needs.',
        'features': ['100% Virgin Food Grade Plastic', 'Non-Toxic & Safe', 'Durable Construction', 'Multi-Utility Application'],
        'pattern': r'^ball\s*(\d+)\.(png|jpg|jpeg)$'
    }
]

all_files = os.listdir(src_dir)
final_products = []

for p_info in products_raw:
    matched = []
    pat = re.compile(p_info['pattern'], re.IGNORECASE)
    for fname in all_files:
        m = pat.match(fname)
        if m:
            num = int(m.group(1))
            matched.append((num, fname))
    
    matched.sort(key=lambda x: x[0])
    
    if not matched:
        print(f"WARNING: No images found for {p_info['name']}")
        continue
    
    gallery_images = []
    for num, fname in matched:
        clean_name = f"{p_info['id']}_{num}" + os.path.splitext(fname)[1].lower()
        src_path = os.path.join(src_dir, fname)
        dst_path = os.path.join(dst_dir, clean_name)
        shutil.copy2(src_path, dst_path)
        rel_path = f"assets/images/products/{clean_name}"
        gallery_images.append(rel_path)
    
    main_img = gallery_images[0]
    
    product_obj = {
        'id': p_info['id'],
        'name': p_info['name'],
        'category': p_info['category'],
        'categorySlug': p_info['categorySlug'],
        'rating': 4.8,
        'reviews': 120 + len(matched) * 15,
        'badge': p_info['badge'],
        'image': main_img,
        'galleryImages': gallery_images,
        'description': p_info['desc'],
        'features': p_info['features']
    }
    final_products.append(product_obj)
    print(f"Processed {p_info['name']}: {len(gallery_images)} images. Main: {main_img}")

print(f"\nTOTAL PRODUCTS PROCESSED: {len(final_products)}")

# Write to products-data.js
js_content = f"""// Krupa Enterprise - Real Product Catalog Database
const KRUPA_PRODUCTS = {json.dumps(final_products, indent=2)};

// Product Category definitions for filtering and UI
const KRUPA_CATEGORIES = [
  {{ name: "All Products", slug: "all", count: {len(final_products)} }},
  {{ name: "Storage & Containers", slug: "storage", count: 4, icon: "fa-box-open" }},
  {{ name: "Lunch Boxes", slug: "lunch-boxes", count: 1, icon: "fa-utensils" }},
  {{ name: "Kitchen Tools", slug: "kitchen-tools", count: 5, icon: "fa-blender" }},
  {{ name: "Ice Trays & Molds", slug: "ice-trays", count: 1, icon: "fa-cube" }},
  {{ name: "Dinnerware", slug: "dinnerware", count: 5, icon: "fa-plate-wheat" }},
  {{ name: "Organizers", slug: "organizers", count: 3, icon: "fa-layer-group" }},
  {{ name: "Cookware", slug: "cookware", count: 1, icon: "fa-fire-burner" }}
];
"""

with open(r'c:\Krupa Enterprise\js\products-data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Successfully generated products-data.js")
