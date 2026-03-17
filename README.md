# أموالي — Amwali 💰
تطبيق إدارة المالية الشخصية — ملف HTML واحد + Supabase

## 🚀 Build

```bash
# تشغيل كل الخطوات دفعة
python3 build.py

# أو بـ npm
npm run build
```

## 📁 هيكل الملفات

```
amwali/
├── build.py          ← Build pipeline موحّد
├── split.py          ← يفصل HTML إلى CSS + JS + هيكل
├── cleanup_css.py    ← يحوّل inline styles إلى classes
├── patch.py          ← إصلاحات أمان XSS
├── merge.py          ← يدمج كل شيء في index.html
├── package.json      ← npm scripts
├── index.html        ← الملف النهائي (output)
├── temp_index.html   ← هيكل HTML (مؤقت)
├── temp_style.css    ← CSS (مؤقت)
└── temp_app.js       ← JavaScript (مؤقت)
```

## 🔧 خطوات البناء

| الخطوة | الملف | الوظيفة |
|--------|-------|---------|
| 1 | split.py | يفصل الملف لـ 3 أجزاء |
| 2 | cleanup_css.py | يحوّل inline styles لـ classes |
| 3 | patch.py | يضيف `esc()` لحماية XSS |
| 4 | merge.py | يدمج كل شيء في index.html |

## ⚠️ أمان

- `SUPABASE_KEY` (anon) مكشوف — مقبول للـ frontend
- `service_role key` للأدمن فقط — لا يُستخدم خارج admin functions
- `esc()` تحمي كل user input من XSS

## 🌐 Deploy

```bash
# بعد build — ارفع index.html على GitHub
# Vercel يحدّث تلقائياً عند كل push
```
