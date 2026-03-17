import codecs

mapping = {
    'style="font-size:15px;font-weight:800;color:var(--text)"': 'class="scr-title"',
    'style="padding:12px 16px 8px;display:flex;align-items:center;justify-content:space-between"': 'class="scr-header"',
    'style="padding:14px 16px 8px;display:flex;align-items:center;justify-content:space-between"': 'class="scr-header-alt"',
    'style="font-size:10px;color:var(--text3)"': 'class="text-muted"',
    'style="font-size:13px;font-weight:700;color:var(--text)"': 'class="text-subtitle"',
    'style="font-size:11px;color:var(--text2);margin-top:2px"': 'class="text-sub2"',
    'style="padding:0 16px"': 'class="px-16"',
    'style="height:20px"': 'class="h-20"',
}

css_append = """
/* ════════════════════════════════
   UTILITIES
════════════════════════════════ */
.scr-title { font-size:15px; font-weight:800; color:var(--text); }
.scr-header { padding:12px 16px 8px; display:flex; align-items:center; justify-content:space-between; }
.scr-header-alt { padding:14px 16px 8px; display:flex; align-items:center; justify-content:space-between; }
.text-muted { font-size:10px; color:var(--text3); }
.text-subtitle { font-size:13px; font-weight:700; color:var(--text); }
.text-sub2 { font-size:11px; color:var(--text2); margin-top:2px; }
.px-16 { padding:0 16px; }
.h-20 { height:20px; }
"""

def patch_file(fpath):
    with codecs.open(fpath, 'r', 'utf-8') as f:
        text = f.read()
    for old, new in mapping.items():
        text = text.replace(old, new)
    with codecs.open(fpath, 'w', 'utf-8') as f:
        f.write(text)

patch_file('temp_app.js')
patch_file('temp_index.html')

with codecs.open('temp_style.css', 'a', 'utf-8') as f:
    f.write(css_append)

print("CSS Cleanup done.")
