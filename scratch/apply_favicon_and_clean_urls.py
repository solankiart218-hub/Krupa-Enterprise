import re
import os

files_to_update = ['index.html', 'gallery.html', 'about.html', 'contact.html']

favicon_tags = """  <!-- Favicon -->
  <link rel="icon" type="image/png" href="Favicon.png">
  <link rel="shortcut icon" type="image/png" href="Favicon.png">
  <link rel="apple-touch-icon" href="Favicon.png">
"""

for fname in files_to_update:
    fpath = os.path.join(r'c:\Krupa Enterprise', fname)
    if not os.path.exists(fpath):
        continue
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Inject Favicon if not present
    if 'rel="icon"' not in content and 'rel="shortcut icon"' not in content:
        content = content.replace('</head>', f'{favicon_tags}</head>')

    # Replace hrefs with clean URLs
    # index.html -> /
    content = content.replace('href="index.html"', 'href="/"')
    # gallery.html -> gallery
    content = content.replace('href="gallery.html"', 'href="gallery"')
    # about.html -> about
    content = content.replace('href="about.html"', 'href="about"')
    # contact.html -> contact
    content = content.replace('href="contact.html"', 'href="contact"')

    with open(fpath, 'w', encoding='utf-8') as f:
        f.write(content)

print("HTML files updated with favicon and clean URLs.")
