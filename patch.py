import re

with open('temp_app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# ══ 1. إضافة دالة esc() للحماية من XSS ══
esc_func = "function esc(s){if(!s)return'';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\"/g,'&quot;').replace(/'/g,'&#039;');}\n"
if 'function esc(s)' not in text:
    text = text.replace("function iqd(n)", esc_func + "function iqd(n)")

# ══ 2. تطبيق esc() على كل user inputs ══
reps = [
    (r'\$\{tx\.name\}',      r'${esc(tx.name)}'),
    (r'\$\{tx\.category\}',  r'${esc(tx.category)}'),
    (r'\$\{tx\.note\}',      r'${esc(tx.note)}'),
    (r'\$\{g\.name\}',       r'${esc(g.name)}'),
    (r'\$\{d\.person\}',     r'${esc(d.person)}'),
    (r'\$\{d\.type\}',       r'${esc(d.type)}'),
    (r'\$\{d\.note\}',       r'${esc(d.note)}'),
    (r'\$\{b\.category\}',   r'${esc(b.category)}'),
    (r'\$\{b\.name\}',       r'${esc(b.name)}'),
    (r'\$\{s\.name\}',       r'${esc(s.name)}'),
    (r'\$\{s\.cat\}',        r'${esc(s.cat)}'),
    (r'\$\{r\.name\}',       r'${esc(r.name)}'),
    (r'\$\{r\.cat\}',        r'${esc(r.cat)}'),
    (r'\$\{cat\}',           r'${esc(cat)}'),
    (r'\$\{name\}',          r'${esc(name)}'),
    (r'\$\{initial\}',       r'${esc(initial)}'),
]
for p, r_str in reps:
    text = re.sub(p, r_str, text)
text = text.replace("${p.note?' · '+p.note:''}", "${p.note?' · '+esc(p.note):''}")

# ══ 3. إزالة saveSupabaseConfig الفارغة ══
text = re.sub(r'function saveSupabaseConfig\(\)\{\s*//[^\n]*\s*\}', '', text)

# ══ 4. إزالة النسخة الأولى من saveState (البسيطة) وإبقاء الثانية (الموحّدة) ══
# النسخة الأولى: saveState بدون timestamp وبدون sync
simple_save = re.compile(
    r'/\* حفظ البيانات — يُستدعى بعد كل تغيير \*/\s*'
    r'function saveState\(\)\{\s*'
    r'try\{\s*'
    r'localStorage\.setItem\(STORE_KEY[^}]+\}\s*'
    r'\} catch\(e\)\{[^}]+\}\s*'
    r'\}',
    re.DOTALL
)
if simple_save.search(text):
    text = simple_save.sub('/* saveState — انظر النسخة الموحّدة أدناه */', text, count=1)
    print("  🔧 دمج saveState المكررة")

# ══ 5. إزالة _origSaveState لأنها لم تعد ضرورية ══
text = re.sub(r'const _origSaveState = saveState;\s*', '', text)
# إزالة استدعاء _origSaveState() من داخل saveState الجديدة إن وُجد
text = re.sub(r'\s*_origSaveState\(\);\s*', '\n', text)

with open('temp_app.js', 'w', encoding='utf-8') as f:
    f.write(text)

print("Patching complete.")

# ══ 6. حذف النسخة الأولى من saveState بالنص الحرفي ══
with open('temp_app.js', 'r', encoding='utf-8') as f:
    text2 = f.read()

old_save = '''/* حفظ البيانات — يُستدعى بعد كل تغيير */
function saveState(){
  try{
    localStorage.setItem(STORE_KEY, JSON.stringify({txList,goals,debts,budgets,subs,bills,recurring}));
    // تحديث شريط الحفظ
    showSaveIndicator();
  } catch(e){ console.warn('فشل الحفظ',e) }
}'''

if old_save in text2:
    text2 = text2.replace(old_save, '/* saveState — النسخة الموحّدة موجودة أدناه */', 1)
    print("  🔧 حذف saveState المكررة الأولى")
    with open('temp_app.js', 'w', encoding='utf-8') as f:
        f.write(text2)
