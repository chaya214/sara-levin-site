// דף אודות
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Star, ShieldCheck, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6" dir="rtl">
      <div className="max-w-5xl mx-auto">
        
        {/* כותרת עליונה */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4 text-right md:text-center">נעים מאוד, אני שרה לוין</h1>
          <div className="h-1.5 w-24 bg-purple-400 rounded-full mx-auto md:mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 items-start text-right">
          
          {/* צד שמאל - כרטיסי מומחיות (מופיע ראשון במובייל) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-5 space-y-6"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border-r-8 border-purple-400">
              <h3 className="text-xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                <Award className="text-purple-600" /> המעטפת המקצועית שלי
              </h3>
              <ul className="space-y-5">
                {[
                  { t: "אחות ליווי הריון", d: "ניסיון קליני עשיר במערכות הבריאות." },
                  { t: "יועצת הנקה מוסמכת", d: "פתרון בעיות מורכבות וליווי בשלבי הביסוס." },
                  { t: "יועצת שינה היקשרותית", d: "גישה רגישה המקדמת שינה מתוך ביטחון וקרבה." },
                  { t: "מומחית להיקשרות (Bonding)", d: "בניית קשר עמוק ובריא בין האם לתינוק." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <ShieldCheck className="text-green-500 shrink-0 mt-1" size={18} />
                    <div>
                      <span className="font-bold block text-slate-800">{item.t}</span>
                      <span className="text-sm text-slate-500 leading-tight">{item.d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-purple-900 text-white p-8 rounded-3xl shadow-lg relative overflow-hidden">
               <div className="absolute top-0 left-0 opacity-10 p-4"><Heart size={80} /></div>
               <p className="text-lg italic relative z-10 leading-relaxed">
                 "החזון שלי הוא להפוך את ה-'הישרדות' של חופשת הלידה לחוויה של גילוי, רוגע וחיבור אמיתי."
               </p>
            </div>
          </motion.div>

          {/* צד ימין - סיפור אישי ותוכן */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-7 space-y-8 text-lg text-slate-700 leading-relaxed"
          >
            <section>
              <h2 className="text-2xl font-bold text-purple-800 mb-4">השילוב בין רפואה ללב</h2>
              <p>
                בתור אחות מוסמכת, תמיד האמנתי שהידע המקצועי הוא הבסיס. אבל כשראיתי אימהות מתמודדות עם קשיים בהנקה או בלילות ללא שינה, הבנתי שהן לא צריכות רק הוראות הפעלה – הן צריכות שמישהו יראה אותן.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-purple-800 mb-4 italic">למה דווקא שינה היקשרותית?</h2>
              <p>
                אני מאמינה ששינה היא לא "מלחמה" ושלבכי הוא לא כלי למידה. בייעוץ השינה שלי, אנחנו לא "מאלפים" את התינוק לישון. אנחנו בונים מערכת יחסים בטוחה. כשהתינוק מרגיש בטוח בקרבה שלך, השינה מגיעה ממקום טבעי ונינוח יותר.
              </p>
            </section>

            <section className="bg-white p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                <Users size={20} className="text-purple-500"/> איתך בכל צעד
              </h3>
              <p className="text-base">
                בין אם זה ליווי עוד מתקופת ההיריון כהכנה להורות, פתרון כאבים פיזיים בהנקה, או יצירת סדר יום שמאפשר לך לנשום – אני כאן כדי לתת לך את הכלים המדויקים ביותר עבורך ועבור הבייבי שלך.
              </p>
            </section>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="pt-6"
            >
              <button className="w-full md:w-auto bg-purple-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-md hover:bg-purple-700 transition-all">
                בואי נדבר – אני כאן בשבילך
              </button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}