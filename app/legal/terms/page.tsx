// דף תנאי שימוש ודיסקליימר משפטי
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Scale, AlertTriangle, FileText, Copyright, ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6" dir="rtl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white shadow-sm border border-slate-200 rounded-[2.5rem] overflow-hidden"
      >
        {/* Header Section */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 text-center text-white relative">
          <div className="inline-block p-4 bg-white/10 rounded-2xl mb-4 text-purple-300">
            <Scale size={40} />
          </div>
          <h1 className="text-4xl font-bold mb-4">תנאי שימוש ודיסקליימר</h1>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            הסדרים המשפטיים והצהרת האחריות של האתר. חשוב לנו שהכל יהיה ברור ושקוף מהרגע הראשון.
          </p>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          
          {/* Medical Disclaimer - Most Important */}
          <section className="bg-amber-50 border-r-8 border-amber-400 p-8 rounded-3xl shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-amber-800">
              <AlertTriangle size={28} />
              <h2 className="text-2xl font-bold font-heebo">חשוב לקרוא: הצהרה רפואית</h2>
            </div>
            <p className="text-amber-900 leading-relaxed text-lg">
              התוכן המופיע באתר זה, לרבות המאמרים, הטיפים והמידע המקצועי, נועד למטרות העשרה ומידע בלבד. 
              <span className="block mt-2 font-bold underline">
                מידע זה אינו מהווה תחליף לייעוץ רפואי מקצועי, אבחנה או טיפול.
              </span> 
              תמיד יש להיוועץ ברופא ילדים או באיש מקצוע מוסמך בכל שאלה רפואית לגבי בריאותך או בריאות תינוקך.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            
            {/* 1. שימוש באתר */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-purple-600 font-bold">
                <FileText size={20} />
                <h3>1. שימוש באתר</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                השימוש באתר שרה לוין מוצע לך כשהוא מותנה בקבלת התנאים וההתראות הכלולים במסמך זה. הגלישה באתר מהווה הסכמה לתנאים אלו.
              </p>
            </div>

            {/* 2. קניין רוחני */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-purple-600 font-bold">
                <Copyright size={20} />
                <h3>2. קניין רוחני</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                כל הזכויות בתכנים המפורסמים באתר (מאמרים, תמונות, עיצוב) שייכות לשרה לוין. אין להעתיק, לשכפל או להפיץ את התכנים ללא אישור מראש בכתב.
              </p>
            </div>

            {/* 3. מדיניות פרטיות */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-purple-600 font-bold">
                <ShieldCheck size={20} />
                <h3>3. מדיניות פרטיות</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                אנו מכבדים את פרטיותך. המידע שתמסרי בטופס "צור קשר" ישמש אך ורק לצורך מתן השירות המבוקש. למידע מורחב עברי לכתובת 
                <Link href="/legal/privacy" className="text-purple-600 underline mr-1 font-medium">מדיניות הפרטיות</Link>.
              </p>
            </div>

          </div>

          <hr className="border-slate-100" />

          {/* Bottom Link */}
          <div className="flex justify-between items-center bg-slate-50 p-6 rounded-2xl">
            <span className="text-slate-500 text-sm">יש לך שאלות לגבי התנאים?</span>
            <Link 
              href="/contact" 
              className="flex items-center gap-2 text-purple-700 font-bold hover:gap-3 transition-all"
            >
              צרי קשר כאן
              <ChevronRight size={18} className="rotate-180" />
            </Link>
          </div>

          <p className="text-center text-xs text-slate-400 italic">
            התנאים עודכנו לאחרונה ב-2024. שרה לוין שומרת לעצמה את הזכות לעדכן את תנאי השימוש מעת לעת.
          </p>
        </div>
      </motion.div>
    </div>
  );
}