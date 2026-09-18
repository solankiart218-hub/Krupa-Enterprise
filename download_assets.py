import urllib.request
import os

images = {
    'storage_containers.jpg': 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?w=600&auto=format&fit=crop&q=80',
    'cooking_utensils.jpg': 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?w=600&auto=format&fit=crop&q=80',
    'dinnerware_set.jpg': 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&auto=format&fit=crop&q=80',
    'mixing_bowls.jpg': 'https://images.unsplash.com/photo-1590794056494-068e895514f7?w=600&auto=format&fit=crop&q=80',
    'cutting_boards.jpg': 'https://images.unsplash.com/photo-1594998893017-36147cbcae05?w=600&auto=format&fit=crop&q=80',
    'water_bottles.jpg': 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80',
    'colander_strainer.jpg': 'https://images.unsplash.com/photo-1590794056242-b0beeb5dbe6b?w=600&auto=format&fit=crop&q=80',
    'oil_dispenser.jpg': 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&auto=format&fit=crop&q=80',
    'cleaning_accessories.jpg': 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&auto=format&fit=crop&q=80',
    'serving_trays.jpg': 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&auto=format&fit=crop&q=80',
    'vegetable_chopper.jpg': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80',
    'kitchen_baskets.jpg': 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80',
    'bulk_products.jpg': 'https://images.unsplash.com/photo-1594756201792-7fcfbb0c6499?w=600&auto=format&fit=crop&q=80',
    'avatar_priya.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    'avatar_rahul.jpg': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    'avatar_neha.jpg': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    'everyday_lifestyle.jpg': 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop&q=80',
    'kitchen_aesthetic.jpg': 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&auto=format&fit=crop&q=80'
}

dest_dir = r'c:\Krupa Enterprise\assets\images'
os.makedirs(dest_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for fname, url in images.items():
    out_path = os.path.join(dest_dir, fname)
    if not os.path.exists(out_path):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as resp, open(out_path, 'wb') as f:
                f.write(resp.read())
            print(f'Successfully downloaded {fname}')
        except Exception as e:
            print(f'Failed {fname}: {e}')
