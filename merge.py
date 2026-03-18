import os

with open('temp_index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('temp_style.css', 'r', encoding='utf-8') as f:
    css = f.read()

with open('temp_app.js', 'r', encoding='utf-8') as f:
    js = f.read()

warning = "\n// ⚠️ SECURITY WARNING: The use of a service_role key here exposes the database to full administrative access.\n"
js = js.replace("const SUPABASE_URL", warning + "const SUPABASE_URL")

html = html.replace('/* CSS_PLACEHOLDER */', css)
html = html.replace('// JS_PLACEHOLDER', js)

# حفظ في مجلد public/ لـ Vercel
os.makedirs('public', exist_ok=True)
with open('public/index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# حفظ نسخة محلية أيضاً
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Merge complete: public/index.html generated")
