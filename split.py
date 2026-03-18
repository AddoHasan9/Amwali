import re, sys, os

def split_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    style_match = re.search(r'<style>(.*?)</style>', content, re.DOTALL)
    if style_match:
        with open('temp_style.css', 'w', encoding='utf-8') as f:
            f.write(style_match.group(1).strip())

    script_matches = list(re.finditer(r'<script>(.*?)</script>', content, re.DOTALL))
    if script_matches:
        main_script = script_matches[-1].group(1).strip()
        with open('temp_app.js', 'w', encoding='utf-8') as f:
            f.write(main_script)

    html_skeleton = re.sub(r'<style>.*?</style>', '<style>\n/* CSS_PLACEHOLDER */\n</style>', content, flags=re.DOTALL)
    last_script_content = script_matches[-1].group(1)
    html_skeleton = html_skeleton.replace(last_script_content, '\n// JS_PLACEHOLDER\n')

    with open('temp_index.html', 'w', encoding='utf-8') as f:
        f.write(html_skeleton)

if __name__ == '__main__':
    SKIP = {'temp_index.html', 'index.html'}

    if len(sys.argv) > 1:
        source = sys.argv[1]
    else:
        candidates = sorted([
            f for f in os.listdir('.')
            if f.endswith('.html') and f not in SKIP
        ])
        # إذا ما في ملف مصدر منفصل — استخدم index.html مباشرة
        source = candidates[0] if candidates else 'index.html'

    if not os.path.exists(source):
        print(f"❌ الملف غير موجود: {source}")
        sys.exit(1)

    split_html(source)
    print(f"Extraction complete. ({source})")
