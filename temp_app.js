/* ════════════════════════════════
   ICON MAPS
════════════════════════════════ */
const ICONS={
  'طعام':`<svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  'مواصلات':`<svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  'تسوق':`<svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  'فواتير':`<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  'صحة':`<svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  'ترفيه':`<svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>`,
  'تعليم':`<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  'راتب':`<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  'استثمار':`<svg viewBox="0 0 24 24"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  'سلفة':`<svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  'فري لانس':`<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  'أخرى':`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  'ترفيه-s':`<svg viewBox="0 0 24 24"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
  'برمجيات':`<svg viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  'كهرباء':`<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  'ماء':`<svg viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  'إنترنت':`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  'هاتف':`<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  'إيجار':`<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  'لياقة':`<svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M6 8H5a4 4 0 0 0 0 8h1"/><line x1="6" y1="12" x2="18" y2="12"/></svg>`,
};
const CAT_COLOR={
  'طعام':'ic-orange','مواصلات':'ic-blue','تسوق':'ic-purple','فواتير':'ic-amber',
  'صحة':'ic-teal','ترفيه':'ic-rose','تعليم':'ic-sky','راتب':'ic-green',
  'استثمار':'ic-blue','سلفة':'ic-amber','فري لانس':'ic-purple','أخرى':'ic-slate',
};
const GOAL_ICONS=[
  {key:'home',label:'منزل',icon:`<svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,color:'ic-blue'},
  {key:'car',label:'سيارة',icon:`<svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,color:'ic-teal'},
  {key:'travel',label:'رحلة',icon:`<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,color:'ic-sky'},
  {key:'emergency',label:'طوارئ',icon:`<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,color:'ic-red'},
  {key:'business',label:'تجارة',icon:`<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,color:'ic-amber'},
  {key:'education',label:'تعليم',icon:`<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,color:'ic-purple'},
  {key:'wedding',label:'زواج',icon:`<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,color:'ic-rose'},
  {key:'other',label:'أخرى',icon:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,color:'ic-slate'},
];

/* ════════════════════════════════
   STATE
════════════════════════════════ */
let curTab='home', curType='expense', curDebtDir='lend', curDebtType='دين';
let expFilter='الكل', incFilter='الكل';
let balHidden=false, installOn=false;
let goalCurrency='IQD', txCurrency='IQD';
let selectedGoalIcon='home';
/* ════════════════════════════════
   STORAGE — المفتاح الموحّد
════════════════════════════════ */
const STORE_KEY = 'dananir_data_v1';
const SETTINGS_KEY = 'dananir_settings_v1';

/* البيانات الافتراضية للمستخدم الجديد */
function defaultData(){
  return {
    recurring:[],
    txList:[
      {id:1,type:'income',amount:2000000,name:'راتب شهر مارس',category:'راتب',currency:'IQD',date:'2026-03-16',note:'',kbStatus:'pending'},
      {id:2,type:'expense',amount:50000,name:'فاتورة كهرباء',category:'فواتير',currency:'IQD',date:'2026-03-15',note:'',kbStatus:'review'},
      {id:3,type:'expense',amount:35000,name:'غداء مطعم',category:'طعام',currency:'IQD',date:'2026-03-14',note:'',kbStatus:'pending'},
      {id:4,type:'expense',amount:120000,name:'تسوق ملابس',category:'تسوق',currency:'IQD',date:'2026-03-13',note:'',kbStatus:'done'},
    ],
    goals:[
      {id:1,icon:'home',name:'شراء شقة',target:50000000,current:12000000,currency:'IQD',date:'2028-01-01'},
      {id:2,icon:'car',name:'سيارة جديدة',target:25000000,current:8000000,currency:'IQD',date:'2027-06-01'},
    ],
    debts:[
      {id:1,dir:'borrow',type:'دين',amount:500000,paidAmount:150000,person:'أبو عمر',due:'2026-06-30',installOn:false,paid:false,note:'دين شخصي',payments:[{id:101,amount:150000,date:'2026-03-01',note:'دفعة أولى'}]},
      {id:2,dir:'lend',type:'سلفة',amount:250000,paidAmount:0,person:'خالد',due:'2026-04-15',installOn:false,paid:false,note:'',payments:[]},
    ],
    budgets:[
      {id:1,category:'طعام',limit:200000},
      {id:2,category:'مواصلات',limit:100000},
      {id:3,category:'تسوق',limit:300000},
      {id:4,category:'فواتير',limit:150000},
    ],
    subs:[
      {id:1,name:'Netflix',amount:25000,freq:'monthly',cat:'ترفيه',nextDate:'2026-04-01'},
      {id:2,name:'Spotify',amount:12000,freq:'monthly',cat:'ترفيه',nextDate:'2026-04-05'},
      {id:3,name:'Adobe Creative',amount:50000,freq:'monthly',cat:'برمجيات',nextDate:'2026-04-10'},
    ],
    bills:[
      {id:1,name:'كهرباء',amount:45000,due:'2026-03-25',cat:'كهرباء',status:'pending'},
      {id:2,name:'إنترنت',amount:30000,due:'2026-03-30',cat:'إنترنت',status:'pending'},
      {id:3,name:'فاتورة ماء',amount:15000,due:'2026-03-10',cat:'ماء',status:'overdue'},
      {id:4,name:'إيجار مكتب',amount:500000,due:'2026-03-01',cat:'إيجار',status:'paid'},
    ],
  };
}

/* تحميل البيانات */
function loadData(){
  try{
    const raw=localStorage.getItem(STORE_KEY);
    if(raw){
      const d=JSON.parse(raw);
      recurring = d.recurring || [];
      txList   = d.txList   || defaultData().txList;
      goals    = d.goals    || defaultData().goals;
      debts    = d.debts    || defaultData().debts;
      budgets  = d.budgets  || defaultData().budgets;
      subs     = d.subs     || defaultData().subs;
      bills    = d.bills    || defaultData().bills;
    } else {
      const def=defaultData();
      recurring=def.recurring||[];
      txList=def.txList; goals=def.goals; debts=def.debts;
      budgets=def.budgets; subs=def.subs; bills=def.bills;
    }
  } catch(e){
    console.warn('خطأ في تحميل البيانات، يُستخدم الافتراضي',e);
    const def=defaultData();
    txList=def.txList; goals=def.goals; debts=def.debts;
    budgets=def.budgets; subs=def.subs; bills=def.bills;
  }
}

/* حفظ البيانات — يُستدعى بعد كل تغيير */
function saveState(){
  try{
    localStorage.setItem(STORE_KEY, JSON.stringify({txList,goals,debts,budgets,subs,bills,recurring}));
    // تحديث شريط الحفظ
    showSaveIndicator();
  } catch(e){ console.warn('فشل الحفظ',e) }
}

/* حفظ الإعدادات منفصلة */
function loadSettings(){
  try{
    const raw=localStorage.getItem(SETTINGS_KEY);
    if(raw){
      const s=JSON.parse(raw);
      if(s.exchangeRate) exchangeRate=s.exchangeRate;
      if(s.theme) applyThemeDirect(s.theme);
    }
  } catch(e){}
}
function saveSettings(){
  const theme=document.documentElement.classList.contains('dark')?'dark':'light';
  try{ localStorage.setItem(SETTINGS_KEY,JSON.stringify({exchangeRate,theme})) }catch(e){}
}

/* مؤشر الحفظ التلقائي */
let saveTimer;
function showSaveIndicator(){
  const el=document.getElementById('saveIndicator');
  if(!el)return;
  el.classList.add('visible');
  clearTimeout(saveTimer);
  saveTimer=setTimeout(()=>el.classList.remove('visible'),2000);
}

/* تصدير واستيراد النسخة الاحتياطية */
function exportBackup(){
  const data={txList,goals,debts,budgets,subs,bills,exchangeRate,exportedAt:new Date().toISOString()};
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='amwali-backup-'+new Date().toISOString().slice(0,10)+'.json';
  a.click();
  URL.revokeObjectURL(a.href);
  showToast('✅ تم تصدير النسخة الاحتياطية','success');
}
function importBackup(){
  const inp=document.createElement('input');
  inp.type='file'; inp.accept='.json';
  inp.onchange=e=>{
    const file=e.target.files[0]; if(!file)return;
    const reader=new FileReader();
    reader.onload=ev=>{
      try{
        const d=JSON.parse(ev.target.result);
        if(!d.txList)throw new Error('ملف غير صالح');
        txList=d.txList||[]; goals=d.goals||[]; debts=d.debts||[];
        budgets=d.budgets||[]; subs=d.subs||[]; bills=d.bills||[];
        if(d.exchangeRate) exchangeRate=d.exchangeRate;
        saveState(); saveSettings();
        const r={home:renderHome,expenses:renderExpenses,income:renderIncome,kanban:renderKanban,goals:renderGoals,debts:renderDebts,subscriptions:renderSubs,bills:renderBills,analytics:renderAnalytics,budget:renderBudget};
        if(r[curTab])r[curTab]();
        showToast('✅ تم استيراد البيانات بنجاح','success');
      } catch(err){ showToast('❌ الملف غير صالح','error') }
    };
    reader.readAsText(file);
  };
  inp.click();
}
function clearAllData(){
  if(!confirm('⚠️ هل أنت متأكد؟ سيتم حذف جميع البيانات نهائياً!'))return;
  localStorage.removeItem(STORE_KEY);
  const def=defaultData();
  txList=def.txList; goals=def.goals; debts=def.debts;
  budgets=def.budgets; subs=def.subs; bills=def.bills;
  saveState();
  const r={home:renderHome,expenses:renderExpenses,income:renderIncome,kanban:renderKanban,goals:renderGoals,debts:renderDebts,subscriptions:renderSubs,bills:renderBills,analytics:renderAnalytics,budget:renderBudget};
  if(r[curTab])r[curTab]();
  showToast('تم مسح جميع البيانات','info');
}

/* متغيرات الحالة — تُملأ من loadData() */
let exchangeRate=1310;
let recurring=[];
let lineChart=null, barChart2=null;
let dragId=null, touchDragEl=null, touchClone=null, touchId=null;

/* ════════════════════════════════
   UTILS
════════════════════════════════ */
function esc(s){if(!s)return'';return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');}
function iqd(n){return Math.round(n).toLocaleString('en-US')}
function fmtMoney(n,cur){return cur==='USD'?'$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2}):iqd(n)+' د.ع'}
const months=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
function fmtDate(d){if(!d)return'';const dt=new Date(d);return `${dt.getDate()} ${months[dt.getMonth()]} ${dt.getFullYear()}`}
function daysLeft(d){if(!d)return 0;const diff=new Date(d)-new Date();const r=Math.ceil(diff/86400000);return isNaN(r)?0:r}
function totalOf(type){return txList.filter(t=>t.type===type).reduce((s,t)=>s+(t.currency==='USD'?t.amount*exchangeRate:t.amount),0)}
function addRipple(e){const btn=e.currentTarget,r=document.createElement('span');r.className='ripple';const rc=btn.getBoundingClientRect(),sz=Math.max(rc.width,rc.height);r.style.cssText=`width:${sz}px;height:${sz}px;left:${e.clientX-rc.left-sz/2}px;top:${e.clientY-rc.top-sz/2}px`;btn.appendChild(r);setTimeout(()=>r.remove(),600)}

/* ════════════════════════════════
   TABS
════════════════════════════════ */
const TAB_TITLES={home:'أموالي',admin:'لوحة الإدارة',expenses:'سجل المصاريف',income:'سجل الدخل',kanban:'لوحة المتابعة',goals:'الأهداف',debts:'الديون',subscriptions:'الاشتراكات',bills:'الفواتير',analytics:'التحليل المالي',settings:'الإعدادات',budget:'الميزانية الشهرية',savings:'حاسبة الادخار',recurring:'المصاريف المتكررة',compare:'مقارنة الأشهر'};
const FAB_MAP={expenses:'fabExp',income:'fabInc',goals:'fabGoal',debts:'fabDebt',subscriptions:'fabSub',bills:'fabBill',budget:'fabBudget',recurring:'fabRecur'};
function switchTab(t){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('screen-'+t).classList.add('active');
  const nb=document.getElementById('nav-'+t);if(nb)nb.classList.add('active');
  document.getElementById('hdrTitle').innerHTML=t==='home'?'<span class="accent">أموالي</span>':TAB_TITLES[t]||'أموالي';
  Object.values(FAB_MAP).forEach(id=>{const el=document.getElementById(id);if(el)el.classList.add('hidden')});
  if(FAB_MAP[t]){const fe=document.getElementById(FAB_MAP[t]);if(fe)fe.classList.remove('hidden');}
  curTab=t;document.getElementById('scrollWrap').scrollTop=0;
  const renders={home:renderHome,expenses:renderExpenses,income:renderIncome,kanban:renderKanban,goals:renderGoals,debts:renderDebts,subscriptions:renderSubs,bills:renderBills,analytics:renderAnalytics,budget:renderBudget,admin:loadAdminData,savings:renderSavings,recurring:renderRecurring,compare:renderCompare};
  if(renders[t])renders[t]();
}

/* ════════════════════════════════
   HOME
════════════════════════════════ */
function renderHome(){
  const inc=totalOf('income'),exp=totalOf('expense'),net=inc-exp;
  document.getElementById('homeBalNum').textContent=iqd(net);
  document.getElementById('homeInc').textContent=iqd(inc);
  document.getElementById('homeExp').textContent=iqd(exp);
  document.getElementById('homeTx').textContent=txList.length;
  // نسبة الادخار
  const savRate=inc>0?Math.round(((inc-exp)/inc)*100):0;
  const badge=document.getElementById('bcChangeBadge');
  if(badge){
    badge.innerHTML=`<svg viewBox="0 0 24 24" style="width:9px;height:9px;stroke:currentColor;fill:none;stroke-width:3"><polyline points="${savRate>=0?'23 6 13.5 15.5 8.5 10.5 1 18':'23 18 13.5 8.5 8.5 13.5 1 6'}"/></svg> ${Math.abs(savRate)}%`;
    badge.style.background=savRate>=0?'rgba(34,197,94,.15)':'rgba(244,63,94,.15)';
    badge.style.borderColor=savRate>=0?'rgba(34,197,94,.25)':'rgba(244,63,94,.25)';
    badge.style.color=savRate>=0?'#4ade80':'#fb7185';
  }
  const achN=Math.min(txList.length,10);
  document.getElementById('achFill').style.width=(achN/10*100)+'%';
  document.getElementById('achNum').textContent=achN+'/10';
  const recent=[...txList].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,5);
  document.getElementById('recentList').innerHTML=recent.length?recent.map(txCardHTML).join(''):emptyHTML('لا توجد عمليات');
  // تحديث الإشعارات
  setTimeout(buildNotifications, 200);
}

/* ════════════════════════════════
   TX CARD
════════════════════════════════ */
function txCardHTML(tx){
  const isI=tx.type==='income';
  const ccls=CAT_COLOR[tx.category]||'ic-slate';
  const icon=ICONS[tx.category]||ICONS['أخرى'];
  const amt=tx.currency==='USD'?fmtMoney(tx.amount,'USD'):iqd(tx.amount)+' د.ع';
  return `<div class="tx-card"><div class="tx-icon ${ccls}">${icon}</div><div class="tx-info"><div class="tx-name">${esc(tx.name)}</div><div class="tx-meta">${esc(tx.category)}${tx.currency==='USD'?' · دولار':''}</div></div><div class="tx-right"><div class="tx-amt ${isI?'inc':'exp'}">${isI?'+':'-'}<span class="num">${amt}</span></div><div class="tx-dt">${tx.date?fmtDate(tx.date):''}</div></div><button class="del-btn" onclick="delTx(${tx.id})"><svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button></div>`;
}
function emptyHTML(msg){return `<div class="empty-state"><div class="empty-box"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><div class="empty-title">${msg}</div><div class="empty-sub">اضغط + لإضافة سجل جديد</div></div>`}

/* ════════════════════════════════
   EXPENSES / INCOME
════════════════════════════════ */
function renderExpenses(){
  let list=txList.filter(t=>t.type==='expense');
  const total=list.reduce((s,t)=>s+(t.currency==='USD'?t.amount*exchangeRate:t.amount),0);
  document.getElementById('totalExpAmt').textContent=iqd(total)+' د.ع';
  document.getElementById('expSubLbl').textContent=list.length+' مصروف هذا الشهر';
  if(expFilter!=='الكل')list=list.filter(t=>t.category===expFilter);
  document.getElementById('expenseList').innerHTML=list.length?list.sort((a,b)=>new Date(b.date)-new Date(a.date)).map(txCardHTML).join(''):emptyHTML('لا توجد مصاريف');
}
function renderIncome(){
  let list=txList.filter(t=>t.type==='income');
  const total=list.reduce((s,t)=>s+(t.currency==='USD'?t.amount*exchangeRate:t.amount),0);
  document.getElementById('totalIncAmt').textContent=iqd(total)+' د.ع';
  document.getElementById('incSubLbl').textContent=list.length+' عملية هذا الشهر';
  if(incFilter!=='الكل')list=list.filter(t=>t.category===incFilter);
  document.getElementById('incomeList').innerHTML=list.length?list.sort((a,b)=>new Date(b.date)-new Date(a.date)).map(txCardHTML).join(''):emptyHTML('لا توجد إيرادات');
}
function filterExp(cat,el){expFilter=cat;el.closest('.cat-scroll').querySelectorAll('.cat-chip').forEach(c=>c.classList.remove('active'));el.classList.add('active');renderExpenses()}
function filterInc(cat,el){incFilter=cat;el.closest('.cat-scroll').querySelectorAll('.cat-chip').forEach(c=>c.classList.remove('active'));el.classList.add('active');renderIncome()}
function setV(el){el.closest('.view-toggle').querySelectorAll('.vt').forEach(b=>b.classList.remove('active'));el.classList.add('active')}
function delTx(id){txList=txList.filter(t=>t.id!==id);saveState();showToast('تم الحذف','info');const r={home:renderHome,expenses:renderExpenses,income:renderIncome,kanban:renderKanban,analytics:renderAnalytics};if(r[curTab])r[curTab]()}

/* ════════════════════════════════
   KANBAN
════════════════════════════════ */
function kbCardHTML(tx){
  const isI=tx.type==='income';
  const ccls=CAT_COLOR[tx.category]||'ic-slate';
  const icon=ICONS[tx.category]||ICONS['أخرى'];
  const amt=tx.currency==='USD'?fmtMoney(tx.amount,'USD'):iqd(tx.amount)+' د.ع';
  return `<div class="kb-card" draggable="true" id="kc-${tx.id}" ondragstart="onDragStart(event,${tx.id})" ondragend="onDragEnd()"><div class="kb-dots"><span></span><span></span><span></span><span></span><span></span><span></span></div><div class="kb-ico-row"><div class="kb-cat-ico ${ccls}">${icon}</div><div class="kb-name">${esc(tx.name)}</div></div><div class="kb-amount ${isI?'inc':'exp'}">${isI?'+':'-'}<span class="num">${amt}</span></div><div class="kb-footer"><div class="kb-cat">${esc(tx.category)}</div><div class="kb-date">${tx.date?fmtDate(tx.date).slice(0,6):''}</div></div></div>`;
}
function renderKanban(){
  const p=txList.filter(t=>t.kbStatus==='pending'),r=txList.filter(t=>t.kbStatus==='review'),d=txList.filter(t=>t.kbStatus==='done');
  document.getElementById('col-pending').innerHTML=p.map(kbCardHTML).join('');
  document.getElementById('col-review').innerHTML=r.map(kbCardHTML).join('');
  document.getElementById('col-done').innerHTML=d.map(kbCardHTML).join('');
  document.getElementById('pendCnt').textContent=p.length;document.getElementById('revCnt').textContent=r.length;document.getElementById('doneCnt').textContent=d.length;
  document.getElementById('kbP').textContent=p.length;document.getElementById('kbR').textContent=r.length;document.getElementById('kbD').textContent=d.length;
}
function onDragStart(e,id){dragId=id;e.dataTransfer.effectAllowed='move';setTimeout(()=>document.getElementById('kc-'+id)?.classList.add('dragging'),0)}
function onDragEnd(){if(dragId)document.getElementById('kc-'+dragId)?.classList.remove('dragging');document.querySelectorAll('.drop-zone').forEach(z=>z.classList.remove('drag-over'));dragId=null}
function onDragOver(e){e.preventDefault();e.currentTarget.classList.add('drag-over')}
function onDragLeave(e){e.currentTarget.classList.remove('drag-over')}
function onDrop(e,status){e.preventDefault();e.currentTarget.classList.remove('drag-over');if(dragId!==null){const tx=txList.find(t=>t.id===dragId);if(tx&&tx.kbStatus!==status){tx.kbStatus=status;saveState();const lbl={'pending':'معلّق','review':'مراجعة','done':'مكتمل'};showToast('نُقل إلى "'+lbl[status]+'"','success')}dragId=null;renderKanban()}}
// touch
document.addEventListener('touchstart',e=>{const card=e.target.closest('.kb-card');if(!card)return;const id=parseInt(card.id.replace('kc-',''));touchId=id;touchDragEl=card;const rc=card.getBoundingClientRect();touchClone=card.cloneNode(true);touchClone.style.cssText=`position:fixed;top:${rc.top}px;left:${rc.left}px;width:${rc.width}px;opacity:.8;pointer-events:none;z-index:999;transform:scale(1.03);transition:none`;document.body.appendChild(touchClone);card.style.opacity='.3'},{passive:true});
document.addEventListener('touchmove',e=>{if(!touchClone)return;const t=e.touches[0];touchClone.style.top=(t.clientY-38)+'px';touchClone.style.left=(t.clientX-55)+'px'},{passive:true});
document.addEventListener('touchend',e=>{if(!touchClone||touchId===null)return;const t=e.changedTouches[0];touchClone.remove();if(touchDragEl)touchDragEl.style.opacity='';touchClone=null;const el=document.elementFromPoint(t.clientX,t.clientY);const zone=el?.closest('.drop-zone');if(zone){const colId=zone.id.replace('col-','');const tx=txList.find(t=>t.id===touchId);if(tx&&tx.kbStatus!==colId){tx.kbStatus=colId;saveState();const lbl={'pending':'معلّق','review':'مراجعة','done':'مكتمل'};showToast('نُقل إلى "'+lbl[colId]+'"','success');renderKanban()}}touchId=null;touchDragEl=null});

/* ════════════════════════════════
   GOALS
════════════════════════════════ */
function renderGoals(){
  const el=document.getElementById('goalsList');
  if(!goals.length){el.innerHTML=emptyHTML('لا توجد أهداف');return}
  el.innerHTML=goals.map(g=>{
    const pct=Math.min(100,Math.round((g.current/g.target)*100));
    const gi=GOAL_ICONS.find(x=>x.key===g.icon)||GOAL_ICONS[0];
    const dl=daysLeft(g.date);
    const clr=pct>=100?'var(--green)':pct>50?'var(--teal)':'var(--amber)';
    const bg=pct>=100?'linear-gradient(90deg,var(--green2),var(--green))':pct>50?'linear-gradient(90deg,var(--teal3),var(--teal))':'linear-gradient(90deg,#b45309,var(--amber))';
    return `<div class="goal-card"><div class="goal-hdr"><div class="goal-icon-box ${gi.color}">${gi.icon}</div><div class="goal-info"><div class="goal-name">${esc(g.name)}</div><div class="goal-sub">${fmtDate(g.date)}${dl>0?' · '+dl+' يوم متبقٍ':' · انتهى الوقت'}</div></div><div class="goal-amts"><div class="goal-current">${fmtMoney(g.current,g.currency)}</div><div class="goal-target">من ${fmtMoney(g.target,g.currency)}</div></div></div><div class="goal-progress-bar"><div class="goal-progress-fill" style="width:${pct}%;background:${bg}"></div></div><div class="goal-footer"><span class="goal-pct" style="color:${clr}">${pct}%</span><span>${fmtMoney(g.target-g.current,g.currency)} متبقٍ</span><button onclick="delGoal(${g.id})" style="background:none;border:none;color:var(--text3);cursor:pointer;font-size:11px;font-family:inherit;transition:var(--tr)" onmouseover="this.style.color='var(--red)'" onmouseout="this.style.color='var(--text3)'">حذف</button></div></div>`;
  }).join('');
}
function delGoal(id){goals=goals.filter(g=>g.id!==id);saveState();renderGoals();showToast('تم حذف الهدف','info')}

/* ════════════════════════════════
   DEBTS
════════════════════════════════ */
let activeDebtId = null;

function renderDebts(){
  const active=debts.filter(d=>!d.paid&&d.dir==='borrow');
  const paid=debts.filter(d=>d.paid);
  const lend=debts.filter(d=>!d.paid&&d.dir==='lend');
  document.getElementById('activeDebtTotal').textContent=iqd(active.reduce((s,d)=>s+Math.max(0,d.amount-(d.paidAmount||0)),0))+' د.ع';
  document.getElementById('paidDebtTotal').textContent=iqd(paid.reduce((s,d)=>s+d.amount,0))+' د.ع';
  document.getElementById('lendDebtTotal').textContent=iqd(lend.reduce((s,d)=>s+Math.max(0,d.amount-(d.paidAmount||0)),0))+' د.ع';
  const el=document.getElementById('debtList');
  if(!debts.length){el.innerHTML=emptyHTML('لا توجد ديون مسجلة');return}
  el.innerHTML=debts.map(d=>{
    const isLend=d.dir==='lend';
    const dl=daysLeft(d.due);
    const paid_amt=d.paidAmount||0;
    const remaining=Math.max(0,d.amount-paid_amt);
    const pct=d.amount>0?Math.min(100,Math.round((paid_amt/d.amount)*100)):0;
    const fullyPaid=d.paid||remaining===0;
    const statusTxt=fullyPaid?'مسدد بالكامل':pct>0?'مسدد جزئياً':isLend?'دين لي':'نشط';
    const statusCls=fullyPaid?'db-paid':pct>0?'db-partial':isLend?'db-lend':'db-active';
    const iconCls=fullyPaid?'ic-green':pct>0?'ic-amber':isLend?'ic-blue':'ic-red';
    const amtClr=fullyPaid?'var(--green)':pct>0?'var(--amber)':isLend?'var(--blue)':'var(--red)';
    const barClr=fullyPaid?'linear-gradient(90deg,var(--green2),var(--green))':pct>0?'linear-gradient(90deg,var(--amber),var(--teal))':'linear-gradient(90deg,var(--red),var(--amber))';
    return `<div class="debt-card" onclick="openDebtDetail(${d.id})">
      <div class="debt-card-top">
        <div class="debt-icon ${iconCls}">${ICONS['سلفة']}</div>
        <div class="debt-info">
          <div class="debt-name">${esc(d.person)}</div>
          <div class="debt-meta"><span class="debt-badge ${statusCls}">${statusTxt}</span><span class="debt-type-tag">${esc(d.type)}</span></div>
        </div>
      </div>
      <div class="debt-amount-row">
        <div>
          <div class="debt-amt num" style="color:${amtClr}">${iqd(fullyPaid?d.amount:remaining)} د.ع</div>
          ${!fullyPaid&&paid_amt>0?`<div class="debt-remaining">مسدّد: ${iqd(paid_amt)} د.ع</div>`:''}
        </div>
        <div class="debt-due">${dl<0?'<span style="color:var(--red)">متأخر '+Math.abs(dl)+' يوم</span>':dl+' يوم متبقٍ'}<br>${fmtDate(d.due)}</div>
      </div>
      <div class="debt-progress-bar"><div class="debt-progress-fill" style="width:${Math.max(4,pct)}%;background:${barClr}"></div></div>
      <div class="debt-card-footer">
        <div class="debt-paid-label">${pct}% مسدد • ${(d.payments||[]).length} دفعة</div>
        <div class="debt-open-arrow"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></div>
      </div>
    </div>`;
  }).join('');
}

function openDebtDetail(id){
  activeDebtId=id;
  const d=debts.find(x=>x.id===id);
  if(!d)return;
  const isLend=d.dir==='lend';
  const paid_amt=d.paidAmount||0;
  const remaining=Math.max(0,d.amount-paid_amt);
  const pct=d.amount>0?Math.min(100,Math.round((paid_amt/d.amount)*100)):0;
  const barClr=pct>=100?'linear-gradient(90deg,var(--green2),var(--green))':pct>0?'linear-gradient(90deg,var(--amber),var(--teal))':'linear-gradient(90deg,var(--red),var(--amber))';
  document.getElementById('ddTitle').textContent=d.person;
  document.getElementById('ddPct').textContent=pct+'%';
  document.getElementById('ddProgressFill').style.width=Math.max(4,pct)+'%';
  document.getElementById('ddProgressFill').style.background=barClr;
  document.getElementById('ddProgressLbls').textContent=iqd(d.amount)+' د.ع';
  document.getElementById('ddDetails').innerHTML=`
    <div class="detail-section-title">تفاصيل الدين</div>
    <div class="detail-row"><span class="detail-key">النوع</span><span class="detail-val">${esc(d.type)}</span></div>
    <div class="detail-row"><span class="detail-key">${isLend?'المدين':'الدائن'}</span><span class="detail-val">${esc(d.person)}</span></div>
    <div class="detail-row"><span class="detail-key">الاتجاه</span><span class="detail-val">${isLend?'دين لي ←':'دين عليّ →'}</span></div>
    <div class="detail-row"><span class="detail-key">المبلغ الكلي</span><span class="detail-val num">${iqd(d.amount)} د.ع</span></div>
    <div class="detail-row"><span class="detail-key">المبلغ المسدَّد</span><span class="detail-val num" style="color:var(--green)">${iqd(paid_amt)} د.ع</span></div>
    <div class="detail-row"><span class="detail-key">المبلغ المتبقي</span><span class="detail-val num" style="color:${remaining===0?'var(--green)':'var(--red)'}">${iqd(remaining)} د.ع</span></div>
    <div class="detail-row"><span class="detail-key">تاريخ الاستحقاق</span><span class="detail-val">${fmtDate(d.due)}</span></div>
    ${d.note?`<div class="detail-row"><span class="detail-key">ملاحظة</span><span class="detail-val" style="font-size:12px;max-width:55%;text-align:left">${esc(d.note)}</span></div>`:''}
  `;
  // payment section: hide if fully paid
  const paySection=document.getElementById('ddPaySection');
  paySection.style.display=(remaining<=0)?'none':'block';
  document.getElementById('partialDate').value=new Date().toISOString().split('T')[0];
  document.getElementById('partialAmt').value='';
  // history
  const ph=d.payments||[];
  document.getElementById('ddHistoryList').innerHTML=ph.length?ph.map(p=>`
    <div class="payment-history-item">
      <div class="phi-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
      <div class="phi-info"><div class="phi-amt num">${iqd(p.amount)} د.ع</div><div class="phi-date">${fmtDate(p.date)}${p.note?' · '+esc(p.note):''}</div></div>
      <button class="phi-del" onclick="removePayment(${id},${p.id});event.stopPropagation()"><svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>
    </div>`).join(''):`<div style="text-align:center;color:var(--text3);font-size:12.5px;padding:14px 0">لا توجد دفعات مسجلة بعد</div>`;
  document.getElementById('debtDetailModal').classList.add('open');
}

function addPartialPayment(){
  const d=debts.find(x=>x.id===activeDebtId);
  if(!d)return;
  const amt=parseFloat(document.getElementById('partialAmt').value);
  const date=document.getElementById('partialDate').value;
  if(!amt||amt<=0){showToast('❌ أدخل مبلغاً صحيحاً','error');return}
  const remaining=Math.max(0,d.amount-(d.paidAmount||0));
  if(amt>remaining){showToast('❌ المبلغ أكبر من المتبقي','error');return}
  if(!d.payments)d.payments=[];
  const payId=Date.now();
  d.payments.push({id:payId,amount:amt,date,note:''});
  d.paidAmount=(d.paidAmount||0)+amt;
  if(d.paidAmount>=d.amount)d.paid=true;

  // إذا دين عليك (borrow) — اطرح من الرصيد تلقائياً كمصروف
  if(d.dir==='borrow'){
    txList.unshift({
      id:payId+1,
      type:'expense',
      amount:amt,
      name:'سداد '+(d.type||'دين')+' — '+d.person,
      category:'سلفة',
      currency:'IQD',
      date:date,
      note:'خصم تلقائي من سداد الدين',
      kbStatus:'done',
      autoDebt:true // علامة لنميزها
    });
  }

  saveState();
  showToast('✅ تم تسجيل الدفعة وخصم '+iqd(amt)+' د.ع من رصيدك','success');
  openDebtDetail(activeDebtId);
  renderDebts();
  if(curTab==='home')renderHome();
  if(curTab==='expenses')renderExpenses();
}

function removePayment(debtId,payId){
  const d=debts.find(x=>x.id===debtId);
  if(!d||!d.payments)return;
  const p=d.payments.find(x=>x.id===payId);
  if(!p)return;
  d.paidAmount=Math.max(0,(d.paidAmount||0)-p.amount);
  d.payments=d.payments.filter(x=>x.id!==payId);
  if(d.paidAmount<d.amount)d.paid=false;

  // إذا دين عليك — أرجع المبلغ للرصيد (احذف العملية التلقائية)
  if(d.dir==='borrow'){
    txList=txList.filter(t=>!(t.autoDebt&&t.amount===p.amount&&t.date===p.date));
  }

  saveState();
  showToast('تم حذف الدفعة وإرجاع المبلغ للرصيد','info');
  openDebtDetail(debtId);
  renderDebts();
  if(curTab==='home')renderHome();
}

function openEditDebtModal(){
  const d=debts.find(x=>x.id===activeDebtId);
  if(!d)return;
  document.getElementById('editDebtAmt').value=d.amount;
  document.getElementById('editDebtPerson').value=d.person;
  document.getElementById('editDebtDue').value=d.due;
  document.getElementById('editDebtNote').value=d.note||'';
  document.getElementById('editDebtPersonLbl').textContent=d.dir==='lend'?'اسم المدين':'اسم الدائن';
  document.getElementById('editDebtModal').classList.add('open');
}

function saveEditDebt(){
  const d=debts.find(x=>x.id===activeDebtId);
  if(!d)return;
  const amt=parseFloat(document.getElementById('editDebtAmt').value);
  const person=document.getElementById('editDebtPerson').value.trim();
  if(!amt||amt<=0){showToast('❌ أدخل مبلغاً صحيحاً','error');return}
  if(!person){showToast('❌ أدخل الاسم','error');return}
  d.amount=amt;d.person=person;
  d.due=document.getElementById('editDebtDue').value;
  d.note=document.getElementById('editDebtNote').value;
  d.paid=(d.paidAmount||0)>=d.amount;
  saveState();
  closeMod('editDebtModal');
  showToast('✅ تم حفظ التعديل','success');
  openDebtDetail(activeDebtId);
  renderDebts();
}

function confirmDeleteDebt(){
  if(confirm('هل تريد حذف هذا الدين؟')){
    debts=debts.filter(d=>d.id!==activeDebtId);
    saveState();
    closeMod('debtDetailModal');
    renderDebts();
    showToast('تم الحذف','info');
  }
}

/* ════════════════════════════════
   BUDGET
════════════════════════════════ */
let editBudgetId=null;

function renderBudget(){
  const totalLimit=budgets.reduce((s,b)=>s+b.limit,0);
  const totalSpent=budgets.reduce((s,b)=>s+getBudgetSpent(b.category),0);
  const remain=Math.max(0,totalLimit-totalSpent);
  document.getElementById('budgetTotal').textContent=iqd(totalLimit)+' د.ع';
  document.getElementById('budgetSpent').textContent=iqd(totalSpent)+' د.ع';
  document.getElementById('budgetRemain').textContent=iqd(remain)+' د.ع';
  const el=document.getElementById('budgetList');
  if(!budgets.length){el.innerHTML=emptyHTML('لا توجد ميزانيات محددة');return}
  el.innerHTML=budgets.map(b=>{
    const spent=getBudgetSpent(b.category);
    const pct=b.limit>0?Math.min(100,Math.round((spent/b.limit)*100)):0;
    const over=spent>b.limit;
    const barClr=over?'linear-gradient(90deg,var(--red2),var(--red))':pct>75?'linear-gradient(90deg,var(--amber),#fb923c)':'linear-gradient(90deg,var(--teal3),var(--teal))';
    const spentClr=over?'var(--red)':pct>75?'var(--amber)':'var(--teal)';
    const catCls=CAT_COLOR[b.category]||'ic-slate';
    const icon=ICONS[b.category]||ICONS['أخرى'];
    return `<div class="budget-card">
      <div class="budget-card-top">
        <div class="budget-icon ${catCls}">${icon}</div>
        <div class="budget-info">
          <div class="budget-cat">${esc(b.category)}</div>
          <div class="budget-sub">${over?'<span style="color:var(--red);font-weight:700">تجاوزت الحد!</span>':'الحد: '+iqd(b.limit)+' د.ع'}</div>
        </div>
        <div class="budget-amts">
          <div class="budget-spent num" style="color:${spentClr}">${iqd(spent)} د.ع</div>
          <div class="budget-limit">من ${iqd(b.limit)} د.ع</div>
        </div>
      </div>
      <div class="budget-bar"><div class="budget-bar-fill" style="width:${Math.max(3,pct)}%;background:${barClr}"></div></div>
      <div class="budget-footer">
        <span class="budget-pct-lbl" style="color:${spentClr}">${pct}%${over?' (+'+iqd(spent-b.limit)+')'  :''}</span>
        <div style="display:flex;gap:6px">
          <button class="budget-edit-btn" onclick="openBudgetModal(${b.id})">تعديل الحد</button>
          <button class="budget-edit-btn" style="border-color:rgba(244,63,94,.3);color:var(--red)" onclick="delBudget(${b.id})">حذف</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function getBudgetSpent(category){
  return txList.filter(t=>t.type==='expense'&&t.category===category).reduce((s,t)=>s+(t.currency==='USD'?t.amount*exchangeRate:t.amount),0);
}

function openBudgetModal(id){
  editBudgetId=id;
  if(id){
    const b=budgets.find(x=>x.id===id);
    if(!b)return;
    document.getElementById('budgetModalTitle').textContent='تعديل ميزانية '+b.category;
    document.getElementById('budgetCat').value=b.category;
    document.getElementById('budgetLimit').value=b.limit;
    document.getElementById('budgetSaveBtn').textContent='حفظ التعديل';
  } else {
    document.getElementById('budgetModalTitle').textContent='ميزانية فئة جديدة';
    document.getElementById('budgetCat').value='طعام';
    document.getElementById('budgetLimit').value='';
    document.getElementById('budgetSaveBtn').textContent='حفظ الميزانية';
  }
  document.getElementById('budgetModal').classList.add('open');
}

function saveBudget(){
  const cat=document.getElementById('budgetCat').value;
  const limit=parseFloat(document.getElementById('budgetLimit').value);
  if(!limit||limit<=0){showToast('❌ أدخل حداً صحيحاً','error');return}
  if(editBudgetId){
    const b=budgets.find(x=>x.id===editBudgetId);
    if(b){b.category=cat;b.limit=limit;}
    saveState();
    showToast('✅ تم تحديث الميزانية','success');
  } else {
    if(budgets.find(b=>b.category===cat)){showToast('هذه الفئة موجودة مسبقاً','error');return}
    budgets.push({id:Date.now(),category:cat,limit});
    saveState();
    showToast('✅ تمت إضافة الميزانية','success');
  }
  closeMod('budgetModal');
  if(curTab==='budget')renderBudget();
}

function delBudget(id){budgets=budgets.filter(b=>b.id!==id);saveState();renderBudget();showToast('تم الحذف','info')}

/* ════════════════════════════════
   SUBSCRIPTIONS
════════════════════════════════ */
const freqLabel={'monthly':'شهري','yearly':'سنوي','weekly':'أسبوعي'};
function renderSubs(){
  const total=subs.reduce((s,x)=>s+(x.freq==='monthly'?x.amount:x.freq==='weekly'?x.amount*4:x.amount/12),0);
  document.getElementById('subTotalAmt').textContent=iqd(total)+' د.ع';
  const el=document.getElementById('subList');
  if(!subs.length){el.innerHTML=emptyHTML('لا توجد اشتراكات');return}
  const catIconMap={'ترفيه':ICONS['ترفيه'],'برمجيات':ICONS['برمجيات'],'تعليم':ICONS['تعليم'],'لياقة':ICONS['لياقة'],'أخرى':ICONS['أخرى']};
  el.innerHTML=subs.map(s=>`<div class="sub-card"><div class="sub-icon ic-purple">${catIconMap[s.cat]||ICONS['ترفيه']}</div><div class="sub-info"><div class="sub-name">${esc(s.name)}</div><div class="sub-freq">${esc(s.cat)} · ${freqLabel[s.freq]}</div></div><div class="sub-right"><div class="sub-amt num">${iqd(s.amount)} د.ع</div><div class="sub-next">التجديد: ${fmtDate(s.nextDate)}</div></div><button class="del-btn" onclick="delSub(${s.id})"><svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button></div>`).join('');
}
function delSub(id){subs=subs.filter(s=>s.id!==id);saveState();renderSubs();showToast('تم حذف الاشتراك','info')}

/* ════════════════════════════════
   BILLS
════════════════════════════════ */
function renderBills(){
  const pend=bills.filter(b=>b.status==='pending').reduce((s,b)=>s+b.amount,0);
  const paid=bills.filter(b=>b.status==='paid').reduce((s,b)=>s+b.amount,0);
  const over=bills.filter(b=>b.status==='overdue').reduce((s,b)=>s+b.amount,0);
  document.getElementById('billPendTotal').textContent=iqd(pend)+' د.ع';
  document.getElementById('billPaidTotal').textContent=iqd(paid)+' د.ع';
  document.getElementById('billOverTotal').textContent=iqd(over)+' د.ع';
  const el=document.getElementById('billList');
  if(!bills.length){el.innerHTML=emptyHTML('لا توجد فواتير');return}
  const catIconMap={'كهرباء':ICONS['كهرباء'],'ماء':ICONS['ماء'],'إنترنت':ICONS['إنترنت'],'هاتف':ICONS['هاتف'],'إيجار':ICONS['إيجار'],'أخرى':ICONS['أخرى']};
  const statusLabel={'pending':'مستحق','paid':'مدفوع','overdue':'متأخر'};
  const statusCls={'pending':'bill-pending','paid':'bill-paid','overdue':'bill-overdue'};
  const amtClr={'pending':'var(--amber)','paid':'var(--green)','overdue':'var(--red)'};
  const catClr={'كهرباء':'ic-amber','ماء':'ic-sky','إنترنت':'ic-teal','هاتف':'ic-blue','إيجار':'ic-purple','أخرى':'ic-slate'};
  el.innerHTML=bills.map(b=>`<div class="bill-card"><div class="bill-icon ${catClr[b.cat]||'ic-slate'}">${catIconMap[b.cat]||ICONS['أخرى']}</div><div class="bill-info"><div class="bill-name">${esc(b.name)}</div><div class="bill-due">الاستحقاق: ${fmtDate(b.due)}</div></div><div class="bill-right"><div class="bill-amt num" style="color:${amtClr[b.status]}">${iqd(b.amount)} د.ع</div><div class="bill-status ${statusCls[b.status]}">${statusLabel[b.status]}</div>${b.status!=='paid'?`<button class="pay-bill-btn" onclick="payBill(${b.id})">دفع</button>`:''}</div><button class="del-btn" onclick="delBill(${b.id})"><svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button></div>`).join('');
}
function payBill(id){const b=bills.find(x=>x.id===id);if(b){b.status='paid';saveState();showToast('✅ تم تسجيل الدفع!','success');renderBills()}}
function delBill(id){bills=bills.filter(b=>b.id!==id);saveState();renderBills();showToast('تم الحذف','info')}

/* ════════════════════════════════
   ANALYTICS
════════════════════════════════ */
function renderAnalytics(){
  const inc=totalOf('income'),exp=totalOf('expense');
  const sr=inc>0?Math.round(((inc-exp)/inc)*100):0;
  const health=Math.min(100,Math.max(0,sr+(exp===0?40:0)));
  document.getElementById('savRatePct').textContent=sr+'%';
  document.getElementById('healthPct').textContent=health+'%';
  const badge=document.getElementById('healthBadge');
  if(health>=80){badge.textContent='ممتاز ✓';badge.style.background='rgba(34,197,94,.22)';badge.style.color='var(--green)'}
  else if(health>=50){badge.textContent='جيد';badge.style.background='rgba(251,191,36,.22)';badge.style.color='var(--amber)'}
  else{badge.textContent='يحتاج تحسين';badge.style.background='rgba(244,63,94,.22)';badge.style.color='var(--red)'}
  document.getElementById('predAmt').innerHTML=`<span class="num">${iqd(exp*1.05)}</span> <span style="font-size:13px;font-weight:500;color:var(--text2)">د.ع</span>`;
  // بيانات حقيقية — آخر 6 أشهر
  const now=new Date();
  const mths=[]; const incD=[0,0,0,0,0,0]; const expD=[0,0,0,0,0,0];
  const mthNames=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  const monthMap = {};
  for(let i=5;i>=0;i--){
    const d=new Date(now.getFullYear(),now.getMonth()-i,1);
    mths.push(mthNames[d.getMonth()]);
    monthMap[`${d.getFullYear()}-${d.getMonth()}`] = 5-i;
  }
  
  txList.forEach(t => {
    if(!t.date) return;
    const d = new Date(t.date);
    const key = `${d.getFullYear()}-${d.getMonth()}`;
    const idx = monthMap[key];
    if(idx !== undefined) {
      const v = t.currency==='USD' ? t.amount*exchangeRate : t.amount;
      if(t.type==='income') incD[idx] += v;
      else if(t.type==='expense') expD[idx] += v;
    }
  });

  // Read actual computed color so Chart.js gets real hex, not CSS var string
  const isDark=document.documentElement.classList.contains('dark');
  const tickClr=isDark?'#7d94c0':'#4a5e8a';
  const gridClr=isDark?'rgba(99,155,255,.07)':'rgba(60,100,200,.08)';
  const opts={responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{x:{ticks:{color:tickClr,font:{family:'Tajawal',size:10}},grid:{color:gridClr}},y:{ticks:{color:tickClr,font:{family:'Tajawal',size:10},callback:v=>v>=1e6?(v/1e6).toFixed(1)+'م':v>=1000?(v/1000).toFixed(0)+'ك':v},grid:{color:gridClr}}}};
  
  const catT={};txList.filter(t=>t.type==='expense').forEach(t=>{const v=t.currency==='USD'?t.amount*exchangeRate:t.amount;catT[t.category]=(catT[t.category]||0)+v});
  const sorted=Object.entries(catT).sort((a,b)=>b[1]-a[1]);

  requestAnimationFrame(() => {
    if(lineChart)lineChart.destroy();
    lineChart=new Chart(document.getElementById('activityChart'),{type:'line',data:{labels:mths,datasets:[{label:'الدخل',data:incD,borderColor:'#22c55e',backgroundColor:'rgba(34,197,94,.07)',borderWidth:2.5,fill:true,tension:.4,pointBackgroundColor:'#22c55e',pointRadius:4,pointHoverRadius:6},{label:'المصاريف',data:expD,borderColor:'#f43f5e',backgroundColor:'rgba(244,63,94,.05)',borderWidth:2.5,fill:true,tension:.4,pointBackgroundColor:'#f43f5e',pointRadius:4,pointHoverRadius:6}]},options:{...opts,plugins:{legend:{labels:{color:tickClr,font:{family:'Tajawal',size:11}}}}}});
    
    if(barChart2)barChart2.destroy();
    if(sorted.length)barChart2=new Chart(document.getElementById('catChart'),{type:'bar',data:{labels:sorted.map(x=>x[0]),datasets:[{data:sorted.map(x=>x[1]),backgroundColor:['#fbbf24','#60a5fa','#f43f5e','#22c55e','#a78bfa','#38bdf8','#fb923c'],borderRadius:6,borderSkipped:false}]},options:{...opts,indexAxis:'y'}});
  });
  document.getElementById('insightsList').innerHTML=[
    {badge:'أداء ممتاز',bc:'rgba(34,197,94,.12)',btc:'var(--green)',bb:'rgba(34,197,94,.25)',text:'أنت تدخر أكثر من 30% من دخلك. هذا معدل رائع يبني ثروتك بسرعة.'},
    {badge:'نصيحة ذكية',bc:'rgba(96,165,250,.1)',btc:'var(--blue)',bb:'rgba(96,165,250,.22)',text:'احرص على بناء صندوق طوارئ قبل الاستثمار.'},
    {badge:'راقب التسوق',bc:'rgba(251,191,36,.1)',btc:'var(--amber)',bb:'rgba(251,191,36,.22)',text:'مصاريف التسوق مرتفعة نسبياً هذا الشهر.'},
  ].map(i=>`<div class="insight-card"><div class="ic-badge" style="background:${i.bc};color:${i.btc};border-color:${i.bb}"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>${i.badge}</div><div class="ic-text">${i.text}</div></div>`).join('');
}

/* ════════════════════════════════
   MODAL TX
════════════════════════════════ */
const expCats=['طعام','مواصلات','تسوق','فواتير','صحة','ترفيه','تعليم','سلفة','أخرى'];
const incCats=['راتب','استثمار','سلفة','فري لانس','أخرى'];
function openTxModal(type){
  curType=type||'expense';
  updateTxModal();
  document.getElementById('txDate').value=new Date().toISOString().split('T')[0];
  document.getElementById('txModal').classList.add('open');
  setTimeout(()=>document.getElementById('txAmt').focus(),360);
}
function updateTxModal(){
  const isE=curType==='expense';
  document.getElementById('txModalTitle').textContent=isE?'إضافة مصروف':'إضافة دخل';
  document.getElementById('tpExp').className='type-pill'+(isE?' t-exp':'');
  document.getElementById('tpInc').className='type-pill'+(!isE?' t-inc':'');
  document.getElementById('txSaveBtn').className='btn-save '+(isE?'exp':'inc');
  document.getElementById('txSaveBtn').textContent=isE?'حفظ المصروف':'حفظ الدخل';
  document.getElementById('txCatLabel').textContent=isE?'الفئة':'المصدر';
  const cats=isE?expCats:incCats;
  document.getElementById('txCat').innerHTML=cats.map(c=>`<option value="${c}">${c}</option>`).join('');
}
function switchTxType(t){curType=t;updateTxModal()}
function selectTxCurrency(cur,el){txCurrency=cur;el.closest('.chips-row').querySelectorAll('.chip-btn').forEach(b=>b.classList.remove('active'));el.classList.add('active');document.getElementById('txCurLabel').textContent=cur==='USD'?'$':'د.ع'}
function saveTx(){
  const amt=parseFloat(document.getElementById('txAmt').value);
  const name=document.getElementById('txName').value.trim();
  const cat=document.getElementById('txCat').value;
  const date=document.getElementById('txDate').value;
  const note=document.getElementById('txNote').value;
  if(!amt||amt<=0){showToast('❌ أدخل مبلغاً صحيحاً','error');return}
  if(!name){showToast('❌ أدخل وصفاً للعملية','error');return}
  txList.unshift({id:Date.now(),type:curType,amount:amt,name,category:cat,currency:txCurrency,date,note,kbStatus:'pending'});
  saveState();
  closeMod('txModal');
  ['txAmt','txName','txNote'].forEach(id=>document.getElementById(id).value='');
  txCurrency='IQD';document.getElementById('txCurLabel').textContent='د.ع';
  document.getElementById('txCurrencyChips').querySelectorAll('.chip-btn').forEach((b,i)=>{b.classList.toggle('active',i===0)});
  showToast('✅ تم حفظ '+(curType==='expense'?'المصروف':'الدخل'),'success');
  const r={home:renderHome,expenses:renderExpenses,income:renderIncome,kanban:renderKanban,analytics:renderAnalytics};if(r[curTab])r[curTab]();
}

/* ════════════════════════════════
   MODAL GOAL
════════════════════════════════ */
function openGoalModal(){
  buildGoalIconPicker();
  document.getElementById('goalDate').value='';
  document.getElementById('goalModal').classList.add('open');
}
function buildGoalIconPicker(){
  document.getElementById('goalIconPicker').innerHTML=GOAL_ICONS.map(g=>`<div class="icon-pick-btn ${g.key===selectedGoalIcon?'active':''}" onclick="selectGoalIcon('${g.key}',this)"><div class="ip-icon ${g.color}">${g.icon}</div><div class="ip-lbl">${g.label}</div></div>`).join('');
}
function selectGoalIcon(key,el){selectedGoalIcon=key;document.querySelectorAll('.icon-pick-btn').forEach(b=>b.classList.remove('active'));el.classList.add('active')}
function selectGoalCurrency(cur,el){goalCurrency=cur;el.closest('.chips-row').querySelectorAll('.chip-btn').forEach(b=>b.classList.remove('active'));el.classList.add('active');document.getElementById('goalCurLbl').textContent=cur==='USD'?'$':'د.ع';document.getElementById('goalCurLbl2').textContent=cur==='USD'?'$':'د.ع'}
function saveGoal(){
  const name=document.getElementById('goalName').value.trim();
  const target=parseFloat(document.getElementById('goalTarget').value);
  const current=parseFloat(document.getElementById('goalCurrent').value)||0;
  const date=document.getElementById('goalDate').value;
  if(!name){showToast('❌ أدخل عنوان الهدف','error');return}
  if(!target||target<=0){showToast('❌ أدخل المبلغ المستهدف','error');return}
  goals.push({id:Date.now(),icon:selectedGoalIcon,name,target,current,currency:goalCurrency,date});
  saveState();
  closeMod('goalModal');
  ['goalName','goalTarget','goalCurrent','goalDate'].forEach(id=>document.getElementById(id).value='');
  showToast('✅ تم حفظ الهدف','success');
  if(curTab==='goals')renderGoals();
}

/* ════════════════════════════════
   MODAL DEBT
════════════════════════════════ */
function openDebtModal(){
  document.getElementById('debtDue').value='';
  document.getElementById('debtModal').classList.add('open');
}
function switchDebtDir(dir){curDebtDir=dir;document.getElementById('dpLend').className='type-pill'+(dir==='lend'?' t-lend':'');document.getElementById('dpBorrow').className='type-pill'+(dir==='borrow'?' t-borrow':'');document.getElementById('debtPersonLabel').textContent=dir==='lend'?'اسم المدين':'اسم الدائن'}
function selectDebtType(t,el){curDebtType=t;el.closest('.chips-row').querySelectorAll('.chip-btn').forEach(b=>b.classList.remove('active'));el.classList.add('active')}
function toggleInstall(){installOn=!installOn;document.getElementById('tw-install').classList.toggle('on',installOn);document.getElementById('installSection').classList.toggle('show',installOn)}
function saveDebt(){
  const amt=parseFloat(document.getElementById('debtAmt').value);
  const person=document.getElementById('debtPerson').value.trim();
  const due=document.getElementById('debtDue').value;
  const note=document.getElementById('debtNote').value;
  if(!amt||amt<=0){showToast('❌ أدخل المبلغ','error');return}
  if(!person){showToast('❌ أدخل اسم الشخص','error');return}
  debts.push({id:Date.now(),dir:curDebtDir,type:curDebtType,amount:amt,paidAmount:0,payments:[],person,due,paid:false,note,installOn});
  saveState();
  closeMod('debtModal');
  ['debtAmt','debtPerson','debtNote','installCount','installAmt'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=''});
  installOn=false;document.getElementById('tw-install').classList.remove('on');document.getElementById('installSection').classList.remove('show');
  showToast('✅ تم حفظ الدين','success');
  if(curTab==='debts')renderDebts();
}

/* ════════════════════════════════
   MODAL SUB / BILL
════════════════════════════════ */
function openSubModal(){document.getElementById('subNextDate').value='';document.getElementById('subModal').classList.add('open')}
function saveSub(){
  const name=document.getElementById('subName').value.trim();
  const amt=parseFloat(document.getElementById('subAmt').value);
  const freq=document.getElementById('subFreq').value;
  const nextDate=document.getElementById('subNextDate').value;
  const cat=document.querySelector('#subCatChips .chip-btn.active')?.getAttribute('onclick')?.match(/'([^']+)'/g)?.[1]?.replace(/'/g,'')||'ترفيه';
  if(!name){showToast('❌ أدخل اسم الاشتراك','error');return}
  if(!amt||amt<=0){showToast('❌ أدخل المبلغ','error');return}
  subs.push({id:Date.now(),name,amount:amt,freq,cat,nextDate});
  saveState();
  closeMod('subModal');['subName','subAmt','subNextDate'].forEach(id=>document.getElementById(id).value='');
  showToast('✅ تم حفظ الاشتراك','success');if(curTab==='subscriptions')renderSubs();
}
function openBillModal(){document.getElementById('billDue').value='';document.getElementById('billModal').classList.add('open')}
function saveBill(){
  const name=document.getElementById('billName').value.trim();
  const amt=parseFloat(document.getElementById('billAmt').value);
  const due=document.getElementById('billDue').value;
  const cat=document.querySelector('#billCatChips .chip-btn.active')?.getAttribute('onclick')?.match(/'([^']+)'/g)?.[1]?.replace(/'/g,'')||'أخرى';
  if(!name){showToast('❌ أدخل اسم الفاتورة','error');return}
  if(!amt||amt<=0){showToast('❌ أدخل المبلغ','error');return}
  const now=new Date(),dueDate=new Date(due);
  const status=dueDate<now?'overdue':'pending';
  bills.push({id:Date.now(),name,amount:amt,due,cat,status});
  saveState();
  closeMod('billModal');['billName','billAmt','billDue'].forEach(id=>document.getElementById(id).value='');
  showToast('✅ تم حفظ الفاتورة','success');if(curTab==='bills')renderBills();
}

/* ════════════════════════════════
   CHIPS HELPER
════════════════════════════════ */
function selectChip(el,groupId,val){el.closest('.chips-row').querySelectorAll('.chip-btn').forEach(b=>b.classList.remove('active'));el.classList.add('active')}

/* ════════════════════════════════
   EXCHANGE RATE MODAL
════════════════════════════════ */
function openRateModal(){document.getElementById('rateInput').value=exchangeRate;document.getElementById('rateModal').classList.add('open')}
function saveRate(){const v=parseFloat(document.getElementById('rateInput').value);if(!v||v<=0){showToast('❌ أدخل سعراً صحيحاً','error');return}exchangeRate=v;document.getElementById('rateDisplay').textContent='1 USD = '+v.toLocaleString('ar-IQ')+' IQD';saveSettings();closeMod('rateModal');showToast('✅ سعر الصرف: '+v.toLocaleString('ar-IQ')+' IQD','success')}

/* ════════════════════════════════
   SETTINGS
════════════════════════════════ */
function setTheme(mode,el){
  document.querySelectorAll('.theme-opt').forEach(o=>o.classList.remove('active'));
  el.classList.add('active');
  const html=document.documentElement;
  html.classList.remove('dark','light');
  if(mode==='system'){const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;html.classList.add(prefersDark?'dark':'light')}
  else html.classList.add(mode);
  showToast('تم تغيير المظهر','info');
  saveSettings();
  updateThemeColor();
  // re-render charts with correct colors
  if(curTab==='analytics')renderAnalytics();
}
function toggleTw(el){el.classList.toggle('on')}
/* ══ نظام الإشعارات ══ */
let notifications = [];

function buildNotifications(){
  notifications = [];
  const today = new Date();
  // فواتير متأخرة
  bills.filter(b=>b.status==='overdue').forEach(b=>{
    notifications.push({type:'error',icon:'bill',title:'فاتورة متأخرة',msg:`${esc(b.name)} — ${iqd(b.amount)} د.ع`,date:b.due});
  });
  // فواتير تستحق خلال 3 أيام
  bills.filter(b=>b.status==='pending').forEach(b=>{
    const dl=daysLeft(b.due);
    if(dl>=0&&dl<=3) notifications.push({type:'warning',icon:'bill',title:'فاتورة قريبة',msg:`${esc(b.name)} — بعد ${dl} يوم`,date:b.due});
  });
  // ديون مستحقة
  debts.filter(d=>!d.paid&&d.dir==='borrow').forEach(d=>{
    const dl=daysLeft(d.due);
    if(dl<0) notifications.push({type:'error',icon:'debt',title:'دين متأخر',msg:`${esc(d.person)} — ${iqd(Math.max(0,d.amount-(d.paidAmount||0)))} د.ع`,date:d.due});
    else if(dl<=7) notifications.push({type:'warning',icon:'debt',title:'دين يستحق قريباً',msg:`${esc(d.person)} — بعد ${dl} يوم`,date:d.due});
  });
  // أهداف قريبة من الاكتمال
  goals.forEach(g=>{
    const pct=g.target>0?Math.round((g.current/g.target)*100):0;
    if(pct>=80&&pct<100) notifications.push({type:'success',icon:'goal',title:'هدف قريب من الاكتمال',msg:`${esc(g.name)} — ${pct}%`,date:g.date});
  });
  // ميزانيات تجاوزت الحد
  budgets.forEach(b=>{
    const spent=getBudgetSpent(b.category);
    if(spent>b.limit) notifications.push({type:'error',icon:'budget',title:'تجاوز الميزانية',msg:`${esc(b.category)} — زيادة ${iqd(spent-b.limit)} د.ع`,date:null});
  });
  // تحذيرات الميزانية الذكية
  checkBudgetAlerts().forEach(a=>{
    notifications.push({type:a.type,icon:'budget',title:a.type==='error'?'تجاوز الميزانية':'تحذير الميزانية',msg:a.msg,date:null});
  });
  // تحديث الـ dot
  const dot=document.getElementById('notifDot');
  if(dot) dot.style.display=notifications.length>0?'block':'none';
}

function onNotif(){
  buildNotifications();
  if(!notifications.length){showToast('لا توجد إشعارات جديدة 👌','info');return;}
  // عرض الإشعارات كـ modal
  showNotifPanel();
}

function showNotifPanel(){
  // إزالة قديم
  const old=document.getElementById('notifPanel');
  if(old)old.remove();
  const typeClr={error:'var(--red)',warning:'var(--amber)',success:'var(--green)',info:'var(--blue)'};
  const panel=document.createElement('div');
  panel.id='notifPanel';
  panel.style.cssText='position:fixed;top:0;left:0;right:0;bottom:0;z-index:300;display:flex;align-items:flex-start;justify-content:center;padding-top:70px;background:rgba(0,0,0,.5);backdrop-filter:blur(4px)';
  panel.innerHTML=`
    <div style="background:var(--bg2);border:1px solid var(--border2);border-radius:20px;padding:18px;width:calc(100% - 32px);max-width:400px;max-height:70vh;overflow-y:auto;animation:scaleIn .25s cubic-bezier(.4,0,.2,1)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <div class="scr-title">الإشعارات (${notifications.length})</div>
        <button onclick="document.getElementById('notifPanel').remove()" style="background:var(--card2);border:1px solid var(--border);border-radius:8px;color:var(--text2);width:28px;height:28px;cursor:pointer;display:flex;align-items:center;justify-content:center">
          <svg style="width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      ${notifications.map(n=>`
        <div style="display:flex;gap:10px;padding:11px 12px;background:var(--card);border:1px solid var(--border);border-right:3px solid ${typeClr[n.type]};border-radius:12px;margin-bottom:8px">
          <div style="flex:1">
            <div class="text-subtitle">${n.title}</div>
            <div style="font-size:12px;color:var(--text2);margin-top:2px">${n.msg}</div>
          </div>
          ${n.date?`<div style="font-size:10px;color:var(--text3);flex-shrink:0;margin-top:2px">${fmtDate(n.date)}</div>`:''}
        </div>
      `).join('')}
    </div>`;
  panel.addEventListener('click',e=>{if(e.target===panel)panel.remove()});
  document.body.appendChild(panel);
  document.getElementById('notifDot').style.display='none';
}
function toggleBalance(){balHidden=!balHidden;document.getElementById('homeBalance').classList.toggle('blurred',balHidden)}

/* ════════════════════════════════
   MODALS UTILS
════════════════════════════════ */
function closeMod(id){document.getElementById(id).classList.remove('open')}
document.querySelectorAll('.modal-overlay').forEach(mo=>mo.addEventListener('click',e=>{if(e.target===mo)mo.classList.remove('open')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal-overlay.open').forEach(m=>m.classList.remove('open'))});

/* ════════════════════════════════
   TOAST
════════════════════════════════ */
let toastT;
function showToast(msg,type='info'){const t=document.getElementById('toast');t.textContent=msg;t.className='toast '+type+' show';clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove('show'),3200)}

/* ════════════════════════════════
   ⚙️  SUPABASE CONFIG
   ← أضف بياناتك هنا (سطرين فقط)
════════════════════════════════ */

/*
  📋 SQL يجب تنفيذه في Supabase > SQL Editor:
  ─────────────────────────────────────────────
  create table if not exists user_data (
    id          uuid primary key default gen_random_uuid(),
    user_id     uuid references auth.users(id) on delete cascade not null unique,
    data        jsonb not null default '{}',
    updated_at  timestamptz default now()
  );
  alter table user_data enable row level security;
  create policy "users can manage own data" on user_data
    for all using (auth.uid() = user_id);

  📋 لتفعيل Google OAuth في Supabase:
  ─────────────────────────────────────────────
  Authentication > Providers > Google > Enable
  أضف Client ID و Secret من Google Cloud Console
  Site URL: رابط ملفك (مثلاً https://yourapp.vercel.app)
  Redirect URL: نفس الرابط
*/
const SUPABASE_URL = 'https://aonjbxyhhtqeizqnrovv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvbmpieHloaHRxZWl6cW5yb3Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3Mjg4NDQsImV4cCI6MjA4OTMwNDg0NH0.LeROKH6SE1MhTon-c0R1oNb7atYDaPD6pU-JevqqpFk';

/* ═══ لا تعدّل ما تحت هذا السطر ═══ */
const SB_CONFIG_KEY  = 'dananir_sb_config';
let sbClient = null;
let currentUser      = null;
let lastSyncAt       = null;
let syncInProgress   = false;

function getSBConfig(){
  // أولاً: البيانات المضمّنة في الكود
  if(SUPABASE_URL && SUPABASE_KEY) return {url:SUPABASE_URL, key:SUPABASE_KEY};
  // ثانياً: البيانات المحفوظة من شاشة الإعداد
  try{ return JSON.parse(localStorage.getItem(SB_CONFIG_KEY)||'null') }catch(e){return null}
}

function initSupabase(){
  const cfg = getSBConfig();
  if(!cfg || !cfg.url || !cfg.key) return false;
  try{
    sbClient = window.supabase.createClient(cfg.url, cfg.key, {
      auth:{ persistSession:true, autoRefreshToken:true }
    });
    return true;
  } catch(e){ console.warn('Supabase init failed',e); return false; }
}

/* ════════════════════════════════
   AUTH SCREEN LOGIC
════════════════════════════════ */
function showAuthScreen(){
  document.getElementById('authScreen').classList.remove('hidden');
}
function hideAuthScreen(){ document.getElementById('authScreen').classList.add('hidden') }



function switchAuthTab(tab){
  document.getElementById('tabLogin').classList.toggle('active',    tab==='login');
  document.getElementById('tabRegister').classList.toggle('active', tab==='register');
  document.getElementById('loginForm').style.display    = tab==='login'    ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab==='register' ? 'block' : 'none';
  clearAuthMsg();
}

/* ── helpers ── */
function showAuthError(msg){
  const e=document.getElementById('authError');
  e.textContent=msg; e.classList.add('show');
  document.getElementById('authSuccess').classList.remove('show');
}
function showAuthMsg(msg, type='success'){
  const key = type==='success' ? 'authSuccess' : 'authError';
  const opp = type==='success' ? 'authError'   : 'authSuccess';
  document.getElementById(key).textContent=msg;
  document.getElementById(key).classList.add('show');
  document.getElementById(opp).classList.remove('show');
}
function clearAuthMsg(){
  document.getElementById('authError').classList.remove('show');
  document.getElementById('authSuccess').classList.remove('show');
}
function setBtnLoading(id, loading, defaultText){
  const btn=document.getElementById(id);
  if(!btn)return;
  btn.disabled=loading;
  btn.textContent=loading ? '...' : defaultText;
}

/* ── Login ── */
async function doLogin(){
  if(!sbClient){ showAuthError('Supabase غير مهيأ — أضف بياناتك في الكود'); return; }
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value;
  if(!email){ showAuthError('أدخل البريد الإلكتروني'); return; }
  if(!pass)  { showAuthError('أدخل كلمة المرور'); return; }
  setBtnLoading('loginBtn', true, 'دخول ومزامنة');
  try{
    const {data, error} = await sbClient.auth.signInWithPassword({email, password:pass});
    if(error) throw error;
    currentUser = data.user;
    await onSignedIn(data.user, true);
  } catch(e){
    showAuthError(friendlyAuthError(e.message));
  } finally{
    setBtnLoading('loginBtn', false, 'دخول ومزامنة');
  }
}

/* ── Register ── */
async function doRegister(){
  if(!sbClient){ showAuthError('Supabase غير مهيأ'); return; }
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass  = document.getElementById('regPass').value;
  const pass2 = document.getElementById('regPass2').value;
  if(!name)           { showAuthError('أدخل اسمك'); return; }
  if(!email)          { showAuthError('أدخل البريد الإلكتروني'); return; }
  if(pass.length < 8) { showAuthError('كلمة المرور 8 أحرف على الأقل'); return; }
  if(pass !== pass2)  { showAuthError('كلمتا المرور غير متطابقتين'); return; }
  setBtnLoading('registerBtn', true, 'إنشاء الحساب');
  try{
    const {data, error} = await sbClient.auth.signUp({
      email, password:pass,
      options:{ data:{full_name: name} }
    });
    if(error) throw error;
    if(data.user && !data.session){
      showAuthMsg('✉️ تحقق من بريدك الإلكتروني لتفعيل الحساب، ثم سجّل دخولك', 'success');
      setTimeout(()=>switchAuthTab('login'), 3000);
    } else if(data.session){
      currentUser = data.user;
      await onSignedIn(data.user, false);
    }
  } catch(e){
    showAuthError(friendlyAuthError(e.message));
  } finally{
    setBtnLoading('registerBtn', false, 'إنشاء الحساب');
  }
}

/* ── Google OAuth ── */
async function doGoogleLogin(){
  if(!sbClient){ showAuthError('Supabase غير مهيأ'); return; }
  const btn = document.getElementById('googleBtn');
  if(btn){ btn.disabled=true; btn.style.opacity='.6'; }
  try{
    const {error} = await sbClient.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://amwali.vercel.app',
        queryParams: { access_type:'offline', prompt:'consent' }
      }
    });
    if(error) throw error;
    // المتصفح سيعمل redirect تلقائياً
  } catch(e){
    showAuthError(friendlyAuthError(e.message));
    if(btn){ btn.disabled=false; btn.style.opacity=''; }
  }
}

/* ── Forgot Password ── */
async function doForgotPassword(){
  if(!sbClient){ showAuthError('Supabase غير مهيأ'); return; }
  const email = document.getElementById('loginEmail').value.trim();
  if(!email){ showAuthError('أدخل بريدك الإلكتروني أولاً'); return; }
  try{
    const {error} = await sbClient.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://amwali.vercel.app'
    });
    if(error) throw error;
    showAuthMsg('✉️ تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك', 'success');
  } catch(e){
    showAuthError(friendlyAuthError(e.message));
  }
}

/* ── Skip / Logout ── */
function skipAuth(){
  hideAuthScreen();
  currentUser = null;
  updateHeaderUser(null);
  showToast('تعمل بدون مزامنة — بياناتك محفوظة محلياً', 'info');
}

async function doLogout(){
  if(sbClient) await sbClient.auth.signOut().catch(()=>{});
  currentUser = null;
  lastSyncAt  = null;
  updateHeaderUser(null);
  closeMod('profileModal');
  showToast('تم تسجيل الخروج', 'info');
}

/* ── Friendly error messages ── */
function friendlyAuthError(msg){
  if(!msg) return 'حدث خطأ غير متوقع';
  if(msg.includes('Invalid login credentials'))  return 'البريد أو كلمة المرور غير صحيحة';
  if(msg.includes('Email not confirmed'))        return 'يجب تأكيد البريد الإلكتروني أولاً';
  if(msg.includes('User already registered'))   return 'هذا البريد مسجّل مسبقاً';
  if(msg.includes('Password should be'))        return 'كلمة المرور قصيرة جداً';
  if(msg.includes('Unable to validate'))        return 'بيانات الاتصال غير صحيحة';
  if(msg.includes('Failed to fetch') ||
     msg.includes('NetworkError') ||
     msg.includes('fetch'))                     return 'لا يوجد اتصال بالإنترنت';
  if(msg.includes('Email rate limit'))          return 'انتظر قليلاً قبل المحاولة مجدداً';
  if(msg.includes('over_email_send_rate_limit'))return 'انتظر دقيقة قبل إرسال بريد آخر';
  return msg;
}

/* ════════════════════════════════
   CLOUD SYNC
════════════════════════════════ */
async function onSignedIn(user, pullData=true){
  currentUser = user;
  hideAuthScreen();
  updateHeaderUser(user);
  // أعد بناء layout الديسكتوب
  setTimeout(()=>{
    setupResponsive();
    updateDesktopPanel();
    // أضف زر الأدمن بعد ما تتحمل الصفحة
    setTimeout(checkAndShowAdminBtn, 300);
  }, 100);
  if(pullData){
    setCloudStatus('syncing','جاري المزامنة...');
    await syncFromCloud();
  } else {
    await syncToCloud();
  }
  setCloudStatus('synced','مزامن');
  updateDesktopPanel();
  // auto sync every 3 min
  setInterval(()=>{ if(currentUser)syncToCloud(); }, 3*60*1000);
}

async function syncToCloud(){
  if(!sbClient || !currentUser || syncInProgress) return;
  syncInProgress=true;
  setCloudStatus('syncing','جاري الحفظ...');
  try{
    const payload = {txList,goals,debts,budgets,subs,bills,recurring,exchangeRate};
    const {error} = await sbClient.from('user_data').upsert({
      user_id: currentUser.id,
      data: payload,
      updated_at: new Date().toISOString()
    }, {onConflict:'user_id'});
    if(error) throw error;
    lastSyncAt = new Date();
    setCloudStatus('synced','مزامن ✓');
  } catch(e){
    console.warn('Sync to cloud failed:',e.message);
    setCloudStatus('error','فشل الحفظ');
  } finally{ syncInProgress=false; }
}

async function syncFromCloud(){
  if(!sbClient || !currentUser) return;
  try{
    const {data,error} = await sbClient.from('user_data').select('data,updated_at').eq('user_id',currentUser.id).single();
    if(error && error.code !== 'PGRST116') throw error; // PGRST116 = not found
    if(data && data.data){
      const d = data.data;
      // قارن التواريخ — استخدم الأحدث
      const cloudTime = data.updated_at ? new Date(data.updated_at).getTime() : 0;
      const localRaw  = localStorage.getItem(STORE_KEY+'_ts');
      const localTime = localRaw ? parseInt(localRaw) : 0;
      if(cloudTime >= localTime){
        // السحابة أحدث — استخدمها
        txList   = d.txList   || [];
        goals    = d.goals    || [];
        debts    = d.debts    || [];
        budgets  = d.budgets  || [];
        subs     = d.subs     || [];
        bills    = d.bills    || [];
        recurring = d.recurring || [];
      if(d.exchangeRate) exchangeRate = d.exchangeRate;
        localStorage.setItem(STORE_KEY, JSON.stringify({txList,goals,debts,budgets,subs,bills,recurring}));
        localStorage.setItem(STORE_KEY+'_ts', cloudTime.toString());
      } else {
        // المحلي أحدث — ارفعه للسحابة
        console.log('Local data is newer, pushing to cloud');
        syncToCloud();
        return;
      }
      lastSyncAt = new Date(data.updated_at || Date.now());
      // re-render active screen
      const renders={home:renderHome,expenses:renderExpenses,income:renderIncome,kanban:renderKanban,goals:renderGoals,debts:renderDebts,subscriptions:renderSubs,bills:renderBills,analytics:renderAnalytics,budget:renderBudget,admin:loadAdminData};
      if(renders[curTab]) renders[curTab]();
      showToast('✅ تمت المزامنة من السحابة','success');
    } else {
      // New user — push local data to cloud
      await syncToCloud();
    }
  } catch(e){
    console.warn('Sync from cloud failed:',e.message);
    setCloudStatus('error','فشل التحميل');
  }
}

async function syncNow(){
  if(!currentUser){ showToast('سجّل دخولك أولاً','error'); return; }
  await syncToCloud();
  updateProfileModal();
}

/* ════════════════════════════════
   HEADER USER UI
════════════════════════════════ */
function updateHeaderUser(user){
  const area = document.getElementById('hdrUserArea');
  if(!area) return;
  if(user){
    const name = user.user_metadata?.full_name || user.email?.split('@')[0] || 'مستخدم';
    const initial = name.charAt(0).toUpperCase();
    area.innerHTML=`<div class="user-pill"><div class="user-avatar">${esc(initial)}</div><div class="user-pill-name">${esc(name)}</div></div>`;
  } else {
    area.innerHTML=`<div class="cloud-status offline" onclick="showAuthScreen()"><svg viewBox="0 0 24 24"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>دخول</div>`;
  }
}

function setCloudStatus(state, label){
  // Update header area cloud indicator if not logged in shown
  const pill = document.querySelector('.user-pill');
  if(!pill) return; // user pill handles it
  // Also update profile sync status
  const pss = document.getElementById('profileSyncStatus');
  if(pss){ pss.className='cloud-status '+state; pss.innerHTML=`<svg viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>${label}`; }
}

function openProfileModal(){
  if(!currentUser){ showAuthScreen(); return; }
  updateProfileModal();
  document.getElementById('profileModal').classList.add('open');
}

function updateProfileModal(){
  if(!currentUser) return;
  const name = currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'مستخدم';
  const initial = name.charAt(0).toUpperCase();
  document.getElementById('profileAvatarBig').textContent = initial;
  document.getElementById('profileName').textContent = name;
  document.getElementById('profileEmail').textContent = currentUser.email || '—';
  const created = currentUser.created_at ? new Date(currentUser.created_at).toLocaleDateString('ar-IQ') : '—';
  document.getElementById('profileJoined').textContent = 'عضو منذ: ' + created;
  const totalRec = txList.length + goals.length + debts.length + budgets.length + subs.length + bills.length;
  document.getElementById('profileRecordCount').textContent = totalRec + ' سجل إجمالي';
  const sz = (new Blob([JSON.stringify({txList,goals,debts,budgets,subs,bills})]).size / 1024).toFixed(1);
  document.getElementById('profileDataSize').textContent = sz + ' KB';
  const lastSync = document.getElementById('lastSyncTime');
  if(lastSync) lastSync.textContent = lastSyncAt ? 'آخر مزامنة: ' + lastSyncAt.toLocaleTimeString('ar-IQ') : 'لم تتم المزامنة بعد';
}

/* ══ saveState الموحّد ══ */
const _origSaveState = saveState;
function saveState(){
  // 1. حفظ محلي فوري
  try{
    localStorage.setItem(STORE_KEY, JSON.stringify({txList,goals,debts,budgets,subs,bills,recurring}));
    localStorage.setItem(STORE_KEY+'_ts', Date.now().toString());
    showSaveIndicator();
  } catch(e){ console.warn('Local save failed',e) }
  // 2. رفع للسحابة
  if(currentUser){
    // إعادة تعيين syncInProgress إذا كانت عالقة
    syncInProgress = false;
    syncToCloud();
  }
  // 3. تحديث الديسكتوب
  updateDesktopPanel();
}
let pwaPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault(); pwaPrompt=e;
  document.getElementById('pwaBanner').style.display='block';
});
function installPWA(){
  if(!pwaPrompt)return;
  pwaPrompt.prompt();
  pwaPrompt.userChoice.then(r=>{
    document.getElementById('pwaBanner').style.display='none';
    if(r.outcome==='accepted')showToast('✅ تم تثبيت التطبيق!','success');
    pwaPrompt=null;
  });
}

/* ════════════════════════════════
   APPLY THEME DIRECTLY
════════════════════════════════ */
function updateThemeColor(){
  const isDark = document.documentElement.classList.contains('dark');
  const meta = document.getElementById('themeColorMeta');
  if(meta) meta.setAttribute('content', isDark ? '#060d1f' : '#eef2fb');
  // auth screen background
  const auth = document.getElementById('authScreen');
  if(auth) auth.style.background = isDark ? '#060d1f' : '#eef2fb';
}

function applyThemeDirect(mode){
  const html=document.documentElement;
  html.classList.remove('dark','light');
  if(mode==='system'){
    html.classList.add(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  } else {
    html.classList.add(mode||'dark');
  }
  // sync theme buttons
  const isDark=html.classList.contains('dark');
  const dBtn=document.getElementById('thDark');
  const lBtn=document.getElementById('thLight');
  const sBtn=document.getElementById('thSystem');
  if(dBtn&&lBtn&&sBtn){
    [dBtn,lBtn,sBtn].forEach(b=>b.classList.remove('active'));
    if(mode==='system')sBtn.classList.add('active');
    else if(isDark)dBtn.classList.add('active');
    else lBtn.classList.add('active');
  }
  updateThemeColor();
}

/* ════════════════════════════════
   INIT
════════════════════════════════ */

/* ════════════════════════════════
   ADMIN PANEL
════════════════════════════════ */
const ADMIN_EMAIL = 'cclantos@gmail.com';
// service_role key — للأدمن فقط، لا يُستخدم إلا في loadAdminData
const _SR = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvbmpieHloaHRxZWl6cW5yb3Z2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MzcyODg0NCwiZXhwIjoyMDg5MzA0ODQ0fQ.pTtxXBVec39AOkgA2_xEFsJrW15w7wXQZkCZSD3E22Q';

function isAdmin(){
  return currentUser && currentUser.email === ADMIN_EMAIL;
}

function getAdminClient(){
  // إنشاء client مؤقت بـ service_role للأدمن فقط
  if(!isAdmin()) return null;
  try{
    return window.supabase.createClient(
      'https://aonjbxyhhtqeizqnrovv.supabase.co',
      _SR,
      { auth: { persistSession: false, autoRefreshToken: false } }
    );
  } catch(e){ return null; }
}

function checkAndShowAdminBtn(){
  const btn = document.getElementById('adminNavBtn');
  if(btn){
    btn.style.display = isAdmin() ? 'flex' : 'none';
  }
}

async function loadAdminData(){
  if(!isAdmin()){ showToast('غير مصرح لك بالدخول','error'); return; }

  document.getElementById('adminUserCount').textContent  = '...';
  document.getElementById('adminTxCount').textContent    = '...';
  document.getElementById('adminActiveCount').textContent = '...';
  document.getElementById('adminUsersList').innerHTML    = '<div style="text-align:center;padding:20px;color:var(--text2)">جاري التحميل...</div>';

  const adminClient = getAdminClient();
  if(!adminClient){ showToast('خطأ في تهيئة الأدمن','error'); return; }

  try{
    // جلب كل المستخدمين — يحتاج service_role
    const {data, error} = await adminClient.from('user_data').select('user_id, data, updated_at');
    if(error) throw error;

    const users = data || [];
    let totalTx = 0;
    const today = new Date().toDateString();
    let activeToday = 0;

    users.forEach(u => {
      const d = u.data || {};
      totalTx += (d.txList || []).length;
      if(u.updated_at && new Date(u.updated_at).toDateString() === today) activeToday++;
    });

    document.getElementById('adminUserCount').textContent  = users.length;
    document.getElementById('adminTxCount').textContent    = totalTx;
    document.getElementById('adminActiveCount').textContent = activeToday;

    // عرض قائمة المستخدمين
    const listEl = document.getElementById('adminUsersList');
    if(!users.length){
      listEl.innerHTML = '<div style="text-align:center;padding:20px;color:var(--text2)">لا يوجد مستخدمون بعد</div>';
      return;
    }

    listEl.innerHTML = users.map((u,i) => {
      const d = u.data || {};
      const txCount    = (d.txList  || []).length;
      const goalCount  = (d.goals   || []).length;
      const debtCount  = (d.debts   || []).length;
      const lastUpdate = u.updated_at ? new Date(u.updated_at).toLocaleDateString('ar-IQ') : '—';
      const shortId    = u.user_id ? u.user_id.slice(0,8)+'...' : '—';

      return `<div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:13px 14px;margin-bottom:9px;backdrop-filter:blur(8px)">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
          <div style="display:flex;align-items:center;gap:9px">
            <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--teal3),var(--teal));display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:800;color:#041420;flex-shrink:0">${i+1}</div>
            <div>
              <div style="font-size:12px;font-weight:700;color:var(--text);direction:ltr">${shortId}</div>
              <div style="font-size:10.5px;color:var(--text3);margin-top:1px">آخر نشاط: ${lastUpdate}</div>
            </div>
          </div>
          <button onclick="confirmDeleteUser('${u.user_id}')" style="background:rgba(244,63,94,.1);border:1px solid rgba(244,63,94,.25);border-radius:8px;color:var(--red);font-size:11px;font-weight:700;padding:5px 10px;cursor:pointer;font-family:inherit;transition:var(--tr)">حذف</button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7px">
          <div style="background:var(--card2);border-radius:9px;padding:8px;text-align:center">
            <div style="font-size:16px;font-weight:800;color:var(--teal)">${txCount}</div>
            <div class="text-muted">عملية</div>
          </div>
          <div style="background:var(--card2);border-radius:9px;padding:8px;text-align:center">
            <div style="font-size:16px;font-weight:800;color:var(--amber)">${goalCount}</div>
            <div class="text-muted">هدف</div>
          </div>
          <div style="background:var(--card2);border-radius:9px;padding:8px;text-align:center">
            <div style="font-size:16px;font-weight:800;color:var(--red)">${debtCount}</div>
            <div class="text-muted">دين</div>
          </div>
        </div>
      </div>`;
    }).join('');

  } catch(e){
    console.error('Admin load error:', e);
    showToast('خطأ في تحميل البيانات: ' + e.message, 'error');
    document.getElementById('adminUsersList').innerHTML = `<div style="text-align:center;padding:20px;color:var(--red)">خطأ: ${e.message}</div>`;
  }
}

async function confirmDeleteUser(userId){
  if(!isAdmin()) return;
  if(!confirm('⚠️ هل أنت متأكد من حذف هذا المستخدم وكل بياناته؟ هذا الإجراء لا يمكن التراجع عنه!')) return;
  const adminClient = getAdminClient();
  if(!adminClient){ showToast('خطأ في تهيئة الأدمن','error'); return; }
  try{
    const {error} = await adminClient.from('user_data').delete().eq('user_id', userId);
    if(error) throw error;
    showToast('✅ تم حذف المستخدم','success');
    loadAdminData();
  } catch(e){
    showToast('خطأ في الحذف: ' + e.message,'error');
  }
}



/* ════════════════════════════════
   DESKTOP RESPONSIVE LOGIC
════════════════════════════════ */
function isDesktop(){ return window.innerWidth >= 1024 }
function isTablet(){ return window.innerWidth >= 768 }

function setupResponsive(){
  const wrapper = document.getElementById('desktopWrapper');
  const panel   = document.getElementById('desktopPanel');
  const mainApp = document.getElementById('mainApp');
  if(!mainApp) return;

  // نقل الـ app داخل الـ wrapper إذا مو موجود فيه
  if(wrapper && mainApp.parentElement !== wrapper){
    wrapper.appendChild(mainApp);
  }

  if(isDesktop()){
    if(wrapper) wrapper.style.display = 'flex';
    if(panel)   panel.style.display   = 'flex';
    updateDesktopPanel();
  } else {
    if(wrapper) wrapper.style.display = 'block';
    if(panel)   panel.style.display   = 'none';
    // إعادة الـ app لوضعه الطبيعي
    mainApp.style.maxWidth    = '';
    mainApp.style.width       = '';
    mainApp.style.height      = '100dvh';
    mainApp.style.borderRadius = '';
    mainApp.style.border      = '';
    mainApp.style.boxShadow   = '';
    mainApp.style.margin      = '0 auto';
    mainApp.style.position    = '';
    mainApp.style.top         = '';
  }
}

function updateDesktopPanel(){
  if(!isDesktop()) return;
  const inc = totalOf('income'), exp = totalOf('expense'), net = inc - exp;
  const sr = inc > 0 ? Math.round(((inc-exp)/inc)*100) : 0;

  const el = (id) => document.getElementById(id);
  if(el('dpBalance')) el('dpBalance').textContent = iqd(net);
  if(el('dpInc'))     el('dpInc').textContent     = iqd(inc);
  if(el('dpExp'))     el('dpExp').textContent     = iqd(exp);
  if(el('dpSavRate')) el('dpSavRate').textContent = sr + '%';
  if(el('dpIncCount'))el('dpIncCount').textContent= txList.filter(t=>t.type==='income').length + ' عملية';
  if(el('dpExpCount'))el('dpExpCount').textContent= txList.filter(t=>t.type==='expense').length + ' مصروف';

  // التاريخ والترحيب
  const now = new Date();
  const hrs = now.getHours();
  const greeting = hrs<12?'صباح الخير 🌅':hrs<17?'مساء الخير ☀️':'مساء النور 🌙';
  const name = currentUser?.user_metadata?.full_name?.split(' ')[0] || '';
  if(el('dpWelcome')) el('dpWelcome').textContent = greeting + (name?' '+name:'') + ' 👋';
  if(el('dpDate')) el('dpDate').textContent = now.toLocaleDateString('ar-IQ',{weekday:'long',year:'numeric',month:'long',day:'numeric'});

  // آخر العمليات
  const recent = [...txList].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,5);
  const dpList = el('dpRecentTx');
  if(dpList){
    dpList.innerHTML = recent.length ? recent.map(tx => {
      const isI = tx.type==='income';
      const ccls = CAT_COLOR[tx.category]||'ic-slate';
      const icon = ICONS[tx.category]||ICONS['أخرى'];
      const amt = tx.currency==='USD'?fmtMoney(tx.amount,'USD'):iqd(tx.amount)+' د.ع';
      return `<div style="display:flex;align-items:center;gap:10px;padding:9px 10px;background:var(--card2);border:1px solid var(--border);border-radius:11px">
        <div class="tx-icon ${ccls}" style="flex-shrink:0">${icon}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(tx.name)}</div>
          <div style="font-size:11px;color:var(--text2)">${esc(tx.category)}</div>
        </div>
        <div style="text-align:left">
          <div style="font-size:13.5px;font-weight:800;font-family:var(--font-num);color:${isI?'var(--green)':'var(--red)'}">${isI?'+':'-'}${amt}</div>
          <div class="text-muted">${tx.date?fmtDate(tx.date).slice(0,8):''}</div>
        </div>
      </div>`;
    }).join('') : '<div style="text-align:center;color:var(--text3);font-size:12.5px;padding:20px 0">لا توجد عمليات بعد</div>';
  }
}

// استدعاء عند تغيير حجم الشاشة
window.addEventListener('resize', ()=>{
  setupResponsive();
  updateDesktopPanel();
});


/* ════════════════════════════════
   حاسبة الادخار
════════════════════════════════ */
function renderSavings(){
  // ملء قائمة الأهداف
  const sel = document.getElementById('savGoalSelect');
  if(sel){
    sel.innerHTML = '<option value="">— اختر هدفاً موجوداً —</option>' +
      goals.map(g=>`<option value="${g.id}">${esc(g.name)} — ${iqd(g.target)} د.ع</option>`).join('');
  }
  // ملء الدخل الشهري من آخر راتب
  const lastSalary = txList.filter(t=>t.type==='income'&&t.category==='راتب').sort((a,b)=>new Date(b.date)-new Date(a.date))[0];
  const incEl = document.getElementById('savIncome');
  if(incEl && lastSalary && !incEl.value) incEl.value = lastSalary.amount;
  calcSavings();
}

function onSavGoalChange(){
  const id = parseInt(document.getElementById('savGoalSelect').value);
  if(!id) return;
  const g = goals.find(x=>x.id===id);
  if(!g) return;
  document.getElementById('savTarget').value  = g.target;
  document.getElementById('savCurrent').value = g.current;
  document.getElementById('savDate').value    = g.date || '';
  calcSavings();
}

function calcSavings(){
  const target  = parseFloat(document.getElementById('savTarget')?.value)  || 0;
  const current = parseFloat(document.getElementById('savCurrent')?.value) || 0;
  const income  = parseFloat(document.getElementById('savIncome')?.value)  || 0;
  const dateStr = document.getElementById('savDate')?.value;

  const result  = document.getElementById('savCalcResult');
  const tips    = document.getElementById('savTips');
  if(!result) return;

  if(!target || !dateStr){ result.style.display='none'; if(tips)tips.style.display='none'; return; }

  const remaining = Math.max(0, target - current);
  const now       = new Date();
  const deadline  = new Date(dateStr);
  const months    = Math.max(1, Math.round((deadline - now) / (1000*60*60*24*30)));
  const monthly   = Math.ceil(remaining / months);
  const pct       = income > 0 ? Math.round((monthly / income) * 100) : 0;
  const progress  = target > 0 ? Math.round((current / target) * 100) : 0;

  document.getElementById('savMonthly').textContent   = iqd(monthly);
  document.getElementById('savMonths').textContent    = months;
  document.getElementById('savRemain').textContent    = iqd(remaining);
  document.getElementById('savProgressPct').textContent = progress + '%';
  document.getElementById('savProgressBar').style.width  = Math.min(100,progress) + '%';

  const pctEl = document.getElementById('savPct');
  if(pctEl){
    pctEl.textContent = pct + '%';
    pctEl.style.color = pct > 50 ? 'var(--red)' : pct > 30 ? 'var(--amber)' : 'var(--green)';
  }

  result.style.display = 'block';

  // نصائح ذكية
  if(tips){
    tips.style.display = 'block';
    let tipsList = '';
    if(pct > 50) tipsList += `<div>⚠️ تحتاج ${pct}% من دخلك — هذا مرتفع جداً، فكر في تمديد المدة</div>`;
    else if(pct > 30) tipsList += `<div>⚡ ${pct}% من دخلك — ممكن لكن يحتاج انضباط مالي</div>`;
    else tipsList += `<div>✅ ${pct}% من دخلك — نسبة ممتازة وقابلة للتحقيق</div>`;
    if(months <= 3) tipsList += `<div>📅 الوقت قصير — ركّز على تقليل المصاريف غير الضرورية</div>`;
    const mExp = txList.filter(t=>t.type==='expense').reduce((s,t)=>s+(t.currency==='USD'?t.amount*exchangeRate:t.amount),0);
    if(mExp > 0) tipsList += `<div>💡 مصاريفك هذا الشهر ${iqd(mExp)} د.ع — خفّض 20% منها = ${iqd(mExp*0.2)} د.ع إضافية للادخار</div>`;
    document.getElementById('savTipsList').innerHTML = tipsList;
  }
}

/* ════════════════════════════════
   المصاريف المتكررة
════════════════════════════════ */
function openRecurringModal(){
  document.getElementById('recurStart').value = new Date().toISOString().split('T')[0];
  document.getElementById('recurringModal').classList.add('open');
}

function saveRecurring(){
  const name  = document.getElementById('recurName').value.trim();
  const amt   = parseFloat(document.getElementById('recurAmt').value);
  const freq  = document.getElementById('recurFreq').value;
  const cat   = document.getElementById('recurCat').value;
  const day   = parseInt(document.getElementById('recurDay').value) || 1;
  const start = document.getElementById('recurStart').value;
  if(!name){showToast('❌ أدخل اسم المصروف','error');return}
  if(!amt||amt<=0){showToast('❌ أدخل المبلغ','error');return}
  recurring.push({id:Date.now(),name,amount:amt,freq,cat,day,start,active:true,lastApplied:null});
  saveState();
  closeMod('recurringModal');
  ['recurName','recurAmt','recurDay'].forEach(id=>{const el=document.getElementById(id);if(el)el.value=''});
  showToast('✅ تم حفظ المصروف المتكرر','success');
  renderRecurring();
  applyRecurring();
}

function renderRecurring(){
  const total = recurring.filter(r=>r.active).reduce((s,r)=>{
    return s + (r.freq==='monthly'?r.amount:r.freq==='weekly'?r.amount*4:r.amount/12);
  },0);
  const el = document.getElementById('recurTotal');
  if(el) el.textContent = iqd(total) + ' د.ع';

  const list = document.getElementById('recurList');
  if(!list) return;
  if(!recurring.length){ list.innerHTML = emptyHTML('لا توجد مصاريف متكررة'); return; }

  const freqLbl = {monthly:'شهري',weekly:'أسبوعي',yearly:'سنوي'};
  list.innerHTML = recurring.map(r=>`
    <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:13px 15px;margin-bottom:9px;display:flex;align-items:center;gap:11px;backdrop-filter:blur(8px)">
      <div class="tx-icon ${CAT_COLOR[r.cat]||'ic-slate'}">${ICONS[r.cat]||ICONS['أخرى']}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13.5px;font-weight:700;color:var(--text)">${esc(r.name)}</div>
        <div class="text-sub2">${esc(r.cat)} · ${freqLbl[r.freq]} · يوم ${r.day}</div>
      </div>
      <div style="text-align:left">
        <div style="font-size:14px;font-weight:800;color:var(--red);font-family:var(--font-num)">-${iqd(r.amount)} د.ع</div>
        <div style="display:flex;gap:5px;margin-top:5px;justify-content:flex-end">
          <div class="tw ${r.active?'on':''}" style="width:36px;height:20px" onclick="toggleRecurring(${r.id})"><div class="tw-knob" style="width:16px;height:16px;top:2px;right:2px"></div></div>
          <button onclick="deleteRecurring(${r.id})" style="background:rgba(244,63,94,.1);border:1px solid rgba(244,63,94,.2);border-radius:6px;color:var(--red);font-size:10px;padding:2px 7px;cursor:pointer;font-family:inherit">حذف</button>
        </div>
      </div>
    </div>
  `).join('');
}

function toggleRecurring(id){
  const r = recurring.find(x=>x.id===id);
  if(r){ r.active=!r.active; saveState(); renderRecurring(); }
}

function deleteRecurring(id){
  if(!confirm('حذف هذا المصروف المتكرر؟')) return;
  recurring = recurring.filter(x=>x.id!==id);
  saveState(); renderRecurring();
  showToast('تم الحذف','info');
}

// تطبيق المصاريف المتكررة تلقائياً
function applyRecurring(){
  const today = new Date();
  let applied = 0;
  recurring.filter(r=>r.active).forEach(r=>{
    const last = r.lastApplied ? new Date(r.lastApplied) : null;
    let shouldApply = false;
    if(r.freq==='monthly'){
      // إذا ما طُبّق هذا الشهر وهسه يوم التطبيق أو بعده
      if(!last || (last.getMonth()!==today.getMonth()||last.getFullYear()!==today.getFullYear())){
        if(today.getDate()>=r.day) shouldApply=true;
      }
    } else if(r.freq==='weekly'){
      if(!last || (today-last)>=(7*24*60*60*1000)) shouldApply=true;
    } else if(r.freq==='yearly'){
      if(!last || last.getFullYear()!==today.getFullYear()){
        if(today.getMonth()===new Date(r.start).getMonth()&&today.getDate()>=r.day) shouldApply=true;
      }
    }
    if(shouldApply){
      txList.unshift({
        id:Date.now()+Math.random(),
        type:'expense',
        amount:r.amount,
        name:r.name+' (تلقائي)',
        category:r.cat,
        currency:'IQD',
        date:today.toISOString().split('T')[0],
        note:'مصروف متكرر تلقائي',
        kbStatus:'done',
        autoRecur:true
      });
      r.lastApplied = today.toISOString().split('T')[0];
      applied++;
    }
  });
  if(applied>0){
    saveState();
    showToast(`✅ تم تطبيق ${applied} مصروف متكرر تلقائياً`,'success');
    if(curTab==='home') renderHome();
  }
}

/* ════════════════════════════════
   مقارنة الأشهر
════════════════════════════════ */
function renderCompare(){
  const m1 = document.getElementById('cmpMonth1')?.value;
  const m2 = document.getElementById('cmpMonth2')?.value;
  const el  = document.getElementById('compareContent');
  if(!el) return;

  // تعيين الشهرين الافتراضيين
  if(!m1 || !m2){
    const now = new Date();
    const prev = new Date(now.getFullYear(), now.getMonth()-1, 1);
    if(document.getElementById('cmpMonth1'))
      document.getElementById('cmpMonth1').value = prev.toISOString().slice(0,7);
    if(document.getElementById('cmpMonth2'))
      document.getElementById('cmpMonth2').value = now.toISOString().slice(0,7);
    return renderCompare();
  }

  function getMonthData(ym){
    const [y,m] = ym.split('-').map(Number);
    const inc = txList.filter(t=>t.type==='income'&&new Date(t.date).getFullYear()===y&&new Date(t.date).getMonth()===m-1).reduce((s,t)=>s+(t.currency==='USD'?t.amount*exchangeRate:t.amount),0);
    const exp = txList.filter(t=>t.type==='expense'&&new Date(t.date).getFullYear()===y&&new Date(t.date).getMonth()===m-1).reduce((s,t)=>s+(t.currency==='USD'?t.amount*exchangeRate:t.amount),0);
    const txs = txList.filter(t=>new Date(t.date).getFullYear()===y&&new Date(t.date).getMonth()===m-1);
    // توزيع الفئات
    const cats={};
    txList.filter(t=>t.type==='expense'&&new Date(t.date).getFullYear()===y&&new Date(t.date).getMonth()===m-1).forEach(t=>{
      const v=t.currency==='USD'?t.amount*exchangeRate:t.amount;
      cats[t.category]=(cats[t.category]||0)+v;
    });
    return {inc,exp,net:inc-exp,txCount:txs.length,cats};
  }

  const d1 = getMonthData(m1);
  const d2 = getMonthData(m2);
  const mthNames=['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  const lbl1 = mthNames[parseInt(m1.split('-')[1])-1]+' '+m1.split('-')[0];
  const lbl2 = mthNames[parseInt(m2.split('-')[1])-1]+' '+m2.split('-')[0];

  function diffBadge(v1,v2,inverse=false){
    const diff = v2-v1;
    const pct  = v1>0?Math.round((diff/v1)*100):0;
    const good = inverse ? diff<0 : diff>0;
    const color= good?'var(--green)':'var(--red)';
    const sign = diff>0?'+':'';
    return `<span style="font-size:11px;font-weight:700;color:${color};background:${good?'rgba(34,197,94,.1)':'rgba(244,63,94,.1)'};border-radius:20px;padding:2px 8px;font-family:var(--font-num)">${sign}${pct}%</span>`;
  }

  // كل الفئات
  const allCats = [...new Set([...Object.keys(d1.cats),...Object.keys(d2.cats)])];

  el.innerHTML = `
    <!-- بطاقات المقارنة -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:13px">
      <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:13px;backdrop-filter:blur(8px)">
        <div style="font-size:11px;color:var(--text3);font-weight:700;margin-bottom:8px">${lbl1}</div>
        <div style="font-size:13px;font-weight:800;color:var(--green);font-family:var(--font-num)">${iqd(d1.inc)}</div>
        <div class="text-muted">دخل</div>
        <div style="font-size:13px;font-weight:800;color:var(--red);font-family:var(--font-num);margin-top:5px">${iqd(d1.exp)}</div>
        <div class="text-muted">مصاريف</div>
        <div style="font-size:14px;font-weight:900;color:${d1.net>=0?'var(--teal)':'var(--red)'};font-family:var(--font-num);margin-top:7px;padding-top:7px;border-top:1px solid var(--border)">${iqd(d1.net)}</div>
        <div class="text-muted">صافي</div>
      </div>
      <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:13px;backdrop-filter:blur(8px)">
        <div style="font-size:11px;color:var(--text3);font-weight:700;margin-bottom:8px">${lbl2}</div>
        <div style="font-size:13px;font-weight:800;color:var(--green);font-family:var(--font-num)">${iqd(d2.inc)}</div>
        <div class="text-muted">دخل</div>
        <div style="font-size:13px;font-weight:800;color:var(--red);font-family:var(--font-num);margin-top:5px">${iqd(d2.exp)}</div>
        <div class="text-muted">مصاريف</div>
        <div style="font-size:14px;font-weight:900;color:${d2.net>=0?'var(--teal)':'var(--red)'};font-family:var(--font-num);margin-top:7px;padding-top:7px;border-top:1px solid var(--border)">${iqd(d2.net)}</div>
        <div class="text-muted">صافي</div>
      </div>
    </div>

    <!-- الفرق -->
    <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:14px;margin-bottom:13px;backdrop-filter:blur(8px)">
      <div style="font-size:12px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:11px">الفرق</div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:13px;color:var(--text2)">الدخل</span>
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:13px;font-weight:800;font-family:var(--font-num);color:${d2.inc>=d1.inc?'var(--green)':'var(--red)'}">${d2.inc>=d1.inc?'+':''}${iqd(d2.inc-d1.inc)}</span>
          ${diffBadge(d1.inc,d2.inc)}
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border)">
        <span style="font-size:13px;color:var(--text2)">المصاريف</span>
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:13px;font-weight:800;font-family:var(--font-num);color:${d2.exp<=d1.exp?'var(--green)':'var(--red)'}">${d2.exp>=d1.exp?'+':''}${iqd(d2.exp-d1.exp)}</span>
          ${diffBadge(d1.exp,d2.exp,true)}
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0">
        <span style="font-size:13px;color:var(--text2)">الصافي</span>
        <span style="font-size:14px;font-weight:900;font-family:var(--font-num);color:${d2.net>=d1.net?'var(--green)':'var(--red)'}">${d2.net>=d1.net?'+':''}${iqd(d2.net-d1.net)}</span>
      </div>
    </div>

    <!-- توزيع الفئات -->
    ${allCats.length?`
    <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:14px;backdrop-filter:blur(8px)">
      <div style="font-size:12px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:11px">مقارنة الفئات</div>
      ${allCats.map(cat=>{
        const v1=d1.cats[cat]||0, v2=d2.cats[cat]||0;
        const max=Math.max(v1,v2,1);
        return `<div style="margin-bottom:10px">
          <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600;color:var(--text2);margin-bottom:4px">
            <span>${esc(cat)}</span>
            <span>${diffBadge(v1,v2,true)}</span>
          </div>
          <div style="display:flex;gap:4px;align-items:center">
            <div style="flex:1;height:6px;background:var(--g2);border-radius:3px;overflow:hidden">
              <div style="height:100%;background:var(--blue);opacity:.7;border-radius:3px;width:${Math.round(v1/max*100)}%;transition:width .8s"></div>
            </div>
            <span style="font-size:10px;color:var(--text3);width:70px;text-align:left;font-family:var(--font-num)">${iqd(v1)}</span>
          </div>
          <div style="display:flex;gap:4px;align-items:center;margin-top:3px">
            <div style="flex:1;height:6px;background:var(--g2);border-radius:3px;overflow:hidden">
              <div style="height:100%;background:var(--teal);border-radius:3px;width:${Math.round(v2/max*100)}%;transition:width .8s"></div>
            </div>
            <span style="font-size:10px;color:var(--text3);width:70px;text-align:left;font-family:var(--font-num)">${iqd(v2)}</span>
          </div>
        </div>`;
      }).join('')}
      <div style="display:flex;gap:13px;margin-top:8px">
        <div style="display:flex;align-items:center;gap:4px;font-size:11px;color:var(--text3)"><div style="width:10px;height:10px;border-radius:2px;background:var(--blue);opacity:.7"></div>${lbl1}</div>
        <div style="display:flex;align-items:center;gap:4px;font-size:11px;color:var(--text3)"><div style="width:10px;height:10px;border-radius:2px;background:var(--teal)"></div>${lbl2}</div>
      </div>
    </div>`:''}
  `;
}

/* ════════════════════════════════
   الميزانية الذكية — تحذير مبكر
════════════════════════════════ */
function checkBudgetAlerts(){
  const alerts = [];
  budgets.forEach(b=>{
    const spent = getBudgetSpent(b.category);
    const pct   = b.limit > 0 ? (spent/b.limit)*100 : 0;
    if(pct >= 80 && pct < 100){
      alerts.push({type:'warning', msg:`تنبيه: وصلت ${Math.round(pct)}% من ميزانية "${esc(b.category)}" — متبقي ${iqd(b.limit-spent)} د.ع`});
    } else if(pct >= 100){
      alerts.push({type:'error', msg:`تجاوزت ميزانية "${esc(b.category)}" بـ ${iqd(spent-b.limit)} د.ع`});
    }
  });
  return alerts;
}

/* ════════════════════════════════
   إشعارات Push
════════════════════════════════ */
async function requestPushPermission(){
  if(!('Notification' in window)){ showToast('متصفحك لا يدعم الإشعارات','error'); return; }
  if(Notification.permission === 'granted'){ showToast('الإشعارات مفعّلة بالفعل ✅','success'); return; }
  const result = await Notification.requestPermission();
  if(result === 'granted'){
    showToast('✅ تم تفعيل الإشعارات!','success');
    // إشعار ترحيبي
    new Notification('أموالي 💰', {
      body: 'سيصلك إشعار لما تقترب الفواتير والديون',
      icon: '/favicon.ico'
    });
    schedulePushNotifications();
  } else {
    showToast('تم رفض الإشعارات من المتصفح','error');
  }
}

function sendPushNotif(title, body){
  if(Notification.permission !== 'granted') return;
  new Notification(title, {body, icon:'/favicon.ico'});
}

function schedulePushNotifications(){
  if(Notification.permission !== 'granted') return;
  // فواتير قريبة
  bills.filter(b=>b.status!=='paid').forEach(b=>{
    const dl = daysLeft(b.due);
    if(dl === 1) sendPushNotif('فاتورة غداً! 📋', `${esc(b.name)} — ${iqd(b.amount)} د.ع`);
    else if(dl === 3) sendPushNotif('فاتورة بعد 3 أيام 📋', `${esc(b.name)} — ${iqd(b.amount)} د.ع`);
    else if(dl < 0) sendPushNotif('فاتورة متأخرة! ⚠️', `${esc(b.name)} — ${iqd(b.amount)} د.ع`);
  });
  // ديون قريبة
  debts.filter(d=>!d.paid&&d.dir==='borrow').forEach(d=>{
    const dl = daysLeft(d.due);
    if(dl === 1) sendPushNotif('دين يستحق غداً! 💸', `${esc(d.person)} — ${iqd(d.amount-(d.paidAmount||0))} د.ع`);
    else if(dl === 7) sendPushNotif('دين يستحق بعد أسبوع 💸', `${esc(d.person)} — ${iqd(d.amount-(d.paidAmount||0))} د.ع`);
  });
  // تحذيرات الميزانية
  checkBudgetAlerts().forEach(a=>{
    sendPushNotif(a.type==='error'?'تجاوز الميزانية! 🚨':'تحذير الميزانية ⚠️', a.msg);
  });
}


window.addEventListener('load',async ()=>{
  // 1. تحميل الإعدادات (الثيم + سعر الصرف)
  loadSettings();

  // 2. إذا ما في إعدادات محفوظة، اكتشف ثيم النظام
  if(!localStorage.getItem(SETTINGS_KEY)){
    const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyThemeDirect(prefersDark?'dark':'light');
  }

  // 3. تحميل بيانات المستخدم من localStorage
  loadData();

  // 4. رسم الشاشة الرئيسية فوراً (بيانات محلية)
  renderHome();
  setupResponsive();
  applyRecurring();
  setTimeout(schedulePushNotifications, 3000);

  // 5. تحديث عرض سعر الصرف في الإعدادات
  const rateEl=document.getElementById('rateDisplay');
  if(rateEl) rateEl.textContent='1 USD = '+exchangeRate.toLocaleString('ar-IQ')+' IQD';

  // 6. تهيئة Supabase وفحص الجلسة
  if(initSupabase()){
    try{
      const {data:{session}} = await sbClient.auth.getSession();
      if(session){
        currentUser = session.user;
        updateHeaderUser(session.user);
        setCloudStatus('syncing','...');
        // مزامنة في الخلفية بدون تأخير UI
        setTimeout(()=>syncFromCloud(), 1500);
      } else {
        updateHeaderUser(null);
        showAuthScreen();
      }
      // استمع لتغيير حالة المصادقة
      sbClient.auth.onAuthStateChange(async (event, session)=>{
        if(event==='SIGNED_IN' && session){
          currentUser=session.user;
          await onSignedIn(session.user, true);
        } else if(event==='SIGNED_OUT'){
          currentUser=null;
          updateHeaderUser(null);
        }
      });
    } catch(e){ console.warn('Session check failed',e); updateHeaderUser(null); }
  } else {
    // ما في Supabase مهيأ — اعرض شاشة الدخول
    updateHeaderUser(null);
    showAuthScreen();
  }

  // 7. إخفاء شاشة التحميل
  setTimeout(()=>{const l=document.getElementById('loader');if(l){l.style.opacity='0';l.style.pointerEvents='none';setTimeout(()=>l.style.display='none',400)}},800);
});