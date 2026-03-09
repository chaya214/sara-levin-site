// מדיניות פרטיות
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, Database, Cookie, UserCheck } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6" dir="rtl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl mx-auto bg-white shadow-sm border border-slate-200 rounded-[2.5rem] overflow-hidden"
      >
        {/* Header Section */}
        <div className="bg-slate-900 p-12 text-center text-white">
          <div className="inline-block p-4 bg-purple-500/20 rounded-full mb-4 text-purple-400">
            <ShieldCheck size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-4">מדיניות פרטיות</h1>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            הפרטיות שלך ושל תינוקך חשובה לי. כאן תוכלי לקרוא בשקיפות מלאה איך אני שומרת על המידע שלך.
          </p>
        </div>

        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 gap-12 text-right">
            
            {/* Section: הכללים שלנו */}
            <section className="relative pr-8 border-r-2 border-purple-100">
              <div className="absolute -right-3 top-0 bg-white p-1">
                <Lock className="text-purple-600" size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 font-heebo">כללי</h2>
              <p className="text-slate-600 leading-relaxed">
                מדיניות זו מתארת כיצד שרה לוין אוספת ומשתמשת במידע הנמסר על ידך באתר. אני מחויבת להגן על המידע האישי שלך בהתאם לסטנדרטים המקצועיים הגבוהים ביותר.
              </p>
            </section>

            {/* Section: איזה מידע נאסף */}
            <section className="relative pr-8 border-r-2 border-purple-100">
              <div className="absolute -right-3 top-0 bg-white p-1">
                <Database className="text-purple-600" size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 font-heebo">איזה מידע נאסף?</h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-slate-600 mb-4">
                  אנו אוספים מידע אישי רק כאשר את בוחרת למסור אותו בטופס "צור קשר" או בתיאום ייעוץ פרטני. המידע כולל בדרך כלל:
                </p>
                <div className="flex flex-wrap gap-3">
                  {["שם מלא", "מספר טלפון", "כתובת מייל"].map((item) => (
                    <span key={item} className="bg-white px-4 py-2 rounded-full text-sm font-bold text-purple-700 shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Section: השימוש במידע */}
            <section className="relative pr-8 border-r-2 border-purple-100">
              <div className="absolute -right-3 top-0 bg-white p-1">
                <Eye className="text-purple-600" size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 font-heebo">השימוש במידע</h2>
              <p className="text-slate-600 leading-relaxed">
                המידע נשמר אך ורק לצורך חזרה אלייך למתן המענה המקצועי שביקשת. 
                <span className="text-purple-700 font-bold block mt-2 underline decoration-purple-200">
                  המידע אינו מועבר, נמכר או מושכר לצדדים שלישיים לצרכי שיווק או פרסום.
                </span>
              </p>
            </section>

            {/* Section: Cookies */}
            <section className="relative pr-8 border-r-2 border-purple-100">
              <div className="absolute -right-3 top-0 bg-white p-1">
                <Cookie className="text-purple-600" size={20} />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 font-heebo">שימוש ב-Cookies</h2>
              <p className="text-slate-600 leading-relaxed">
                האתר עשוי להשתמש בעוגיות (Cookies) לצורך ניתוח סטטיסטי אנונימי של תנועת הגולשים. זה עוזר לי להבין אילו מאמרים אתן הכי אוהבות לקרוא ולשפר את האתר עבורכן.
              </p>
            </section>

            {/* Section: זכויותייך */}
            <section className="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="text-purple-400" size={28} />
                <h2 className="text-2xl font-bold font-heebo">הזכויות שלך</h2>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                את רשאית בכל עת לבקש לעיין במידע שנשמר אצלנו אודותייך, לבקש לתקן אותו או למחוק אותו לצמיתות מהמערכת.
              </p>
              <div className="flex items-center gap-2 text-purple-400 font-bold">
                <span>לביצוע פעולה זו, שלחי מייל לכתובת:</span>
                <a href="mailto:sara@levin.com" className="hover:underline">sara@levin.com</a>
              </div>
            </section>

          </div>
          
          <p className="mt-12 text-center text-xs text-slate-400">
            עודכן לאחרונה: מרץ 2024 | שרה לוין - ייעוץ הנקה ושינה
          </p>
        </div>
      </motion.div>
    </div>
  );
}