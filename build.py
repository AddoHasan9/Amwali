#!/usr/bin/env python3
"""
أموالي — Build Pipeline
يشغّل كل خطوات التنظيف والتحسين دفعة وحدة
الاستخدام: python3 build.py [source_file.html]
"""

import os, sys, time, subprocess, re

def run_step(script, label, args=[]):
    print(f"\n{label}...")
    result = subprocess.run([sys.executable, script] + args, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"  ❌ فشل:\n{result.stderr.strip()}")
        return False
    print(f"  ✅ {result.stdout.strip()}")
    return True

def find_source():
    # أولاً: argument من command line
    if len(sys.argv) > 1:
        return sys.argv[1]
    # ثانياً: ابحث في المجلد
    skip = {'temp_index.html', 'index.html'}
    candidates = sorted([f for f in os.listdir('.') if f.endswith('.html') and f not in skip])
    return candidates[0] if candidates else None

def main():
    start = time.time()
    print("=" * 52)
    print("  🏗️  أموالي — Build Pipeline v2")
    print("=" * 52)

    source = find_source()
    if not source or not os.path.exists(source):
        print("❌ لم يتم إيجاد ملف HTML مصدر!")
        print("   الاستخدام: python3 build.py index.html")
        sys.exit(1)

    print(f"\n  📄 المصدر: {source}")
    print(f"  🎯 الهدف: index.html")

    steps = [
        ("split.py",       "📦 تقسيم الملف (HTML + CSS + JS)", [source]),
        ("cleanup_css.py", "🧹 تنظيف inline styles",            []),
        ("patch.py",       "🔒 إصلاحات الأمان (XSS)",           []),
        ("merge.py",       "🔗 دمج الملفات النهائي",             []),
    ]

    for script, label, args in steps:
        if not run_step(script, label, args):
            print("\n❌ Build فشل — راجع الأخطاء أعلاه")
            sys.exit(1)

    elapsed = time.time() - start
    size    = os.path.getsize('index.html') / 1024

    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    funcs = content.count('function ')
    esc   = content.count('esc(')
    cls   = (content.count('class="scr-') +
             content.count('class="text-') +
             content.count('class="px-') +
             content.count('class="h-'))

    print("\n" + "=" * 52)
    print(f"  ✅ Build ناجح في {elapsed:.1f}s")
    print(f"  📄 index.html — {size:.1f} KB")
    print(f"  📊 {funcs} دالة | {esc} حماية XSS | {cls} CSS class")
    print("=" * 52)

if __name__ == '__main__':
    main()
