"use client";

import React from 'react';
import { Phone, MessageCircle, Heart, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const primaryColor = "#a382b3";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans leading-relaxed overflow-hidden" dir="rtl">
      
      {/* 1. Header & Hero */}
      <header className="relative bg-white pt-16 pb-24 px-6 border-b border-purple-100">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-50 rounded-full opacity-50 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.5, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <div className="w-24 h-24 rounded-full border-4 border-purple-200 p-2 bg-white shadow-sm overflow-hidden">
              <div className="w-full h-full bg-purple-100 rounded-full flex items-center justify-center text-purple-400">
                <Heart size={40} fill="currentColor" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-purple-900 mb-6 leading-tight"
          >
            עבור נטפרי: <br className="hidden md:block" />
            <span className="text-purple-600">הדרך שלך להנקה נינוחה, שינה רצופה וביטחון מלא באימהות שלך.</span>
          </motion.h1>
 {/* עבור נטפרי תפסיקי להיאבק, תתחילי להתחבר: */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto"
          >
            ליווי עוטף ומקצועי לאימהות בגישה רגישה ומותאמת אישית. המקום שבו הידע המקצועי פוגש את הלב שלך, כדי שכל רגע עם הבייבי יהיה בדיוק כמו שחלמת.
          </motion.p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg flex items-center gap-3 mx-auto"
          >
            <Phone size={24} />
            לשיחת ייעוץ ראשונית שתעשה לך סדר – לחצי כאן
          </motion.button>
        </div>
      </header>

      {/* 3. הצפת הכאב: אנימציות נכנסות מהצדדים */}
      <section className="py-20 px-6 bg-purple-50">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800"
          >
            בואי נדבר רגע על מה שקורה באמת ב-3 לפנות בוקר...
          </motion.h2>
          
          <div className="space-y-6 overflow-hidden p-4">
            {[
              "האם את מוצאת את עצמך מסתכלת על התינוק שלך ומרגישה דקירה של אשמה כי 'זה אמור להיות קל יותר'?",
              "האם הכאב הפיזי בהנקה גורם לך לחשוש מהפעם הבאה שהוא יתעורר?",
              "האם את מוצפת בעצות סותרות מכל כיוון ומרגישה שהקול הפנימי שלך פשוט הלך לאיבוד בתוך העייפות?"
            ].map((text, i) => (
              <motion.div 
                key={i}
                // הלוגיקה שמכניסה משמאל או מימין לסירוגין
                initial={{ opacity: 0, x: i % 2 === 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2, type: "spring", bounce: 0.3 }}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm"
              >
                <div className="text-purple-400 mt-1 shrink-0"><Heart size={20} fill="currentColor" /></div>
                <p className="text-lg text-slate-700">{text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-center mt-10 text-xl font-medium text-purple-800 italic"
          >
            האמת היא? את לא לבד. וזה לא חייב להיות ככה.
          </motion.p>
        </div>
      </section>

      {/* 4. הפתרון */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-purple-900 mb-8"
          >
            השינוי מתחיל כאן
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white border-2 border-purple-100 p-8 md:p-12 rounded-3xl shadow-xl"
          >
            <p className="text-xl md:text-2xl text-slate-700 mb-6 font-medium">
              דמייני את עצמך יושבת בכורסה, הגוף משוחרר, התינוק מתחבר בקלות ויונק ברוגע. את נושמת עמוק, ויודעת בדיוק מה הוא צריך.
            </p>
            <p className="text-lg text-slate-600 mb-10">
              תשתחררי מהצורך "לשרוד" את היום. בייעוץ שלנו, נהפוך את הקושי ללמידה משותפת. תקבלי כלים פרקטיים לקרוא את הסימנים שלו, לפתור כאבים פיזיים ולהחזיר את השלווה הביתה.
            </p>
            
            {/* כפתור וואטסאפ "נושם" */}
            <motion.a 
              href="https://wa.me/972587633059" 
              target="_blank" 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-md transition-colors"
            >
              <MessageCircle size={24} />
              שלחי לי הודעה בוואטסאפ – אני כאן בשבילך
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* 5. צורת העבודה */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">איך זה עובד? בלי תהליכים מורכבים</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { t: "אבחון מהיר", d: "שיחה קצרה להבנת האתגר (הנקה, שינה, או סדר יום)." },
              { t: "מפגש עומק (בית/זום)", d: "ליווי מעשי שבו אני רואה אתכם, מתקנת תנוחות ומדייקת את החיבור." },
              { t: "צ'ק-ליסט אישי", d: "את מקבלת סיכום ברור של מה עושים עכשיו, בלי לנחש." },
              { t: "גב לכל שאלה", d: "אני מלווה אותך בהודעות בשבועיים שאחרי, כדי לוודא שאת בדרך הנכונה." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4"
              >
                <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold">{i+1}</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{item.t}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. שאלות ותשובות מורחב עם אנימציית פתיחה מדורגת */}
      <section className="py-20 px-6 bg-purple-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">שאלות שאימהות שואלות אותי כל יום</h2>
          <div className="space-y-6">
            {[
              { q: "אולי זה יעבור לבד?", a: "קשיים בהנקה בדרך כלל לא נפתרים מעצמם אלא מחמירים. טיפול מוקדם חוסך סבל רב ומאפשר הצלחה בהמשך." },
              { q: "התינוק שלי כבר בן חודשיים, זה מאוחר מדי לייעוץ?", a: "ממש לא. בעיות הנקה ושינה יכולות לצוץ בכל שלב. תמיד אפשר לשפר תפיסה, לטפל בכאב ולייצר סדר יום חדש שמתאים לגיל שלו." },
              { q: "האם אפשר לעשות את הייעוץ בזום או שחייבים פרונטלי?", a: "אפשר גם וגם. בזום אפשר לראות תנוחות ולתת דגשים מצוינים, אבל במקרים של כאב פיזי חזק מאוד, אני ממליצה על מפגש פיזי כדי שאוכל לעזור ממש עם הידיים." },
              { q: "איך אני יודעת שיש לי מספיק חלב?", a: "זו השאלה הכי נפוצה! בפגישה שלנו נלמד בדיוק את הסימנים האובייקטיביים שירגיעו אותך ויעזרו לך לסמוך על הגוף שלך." },
              // { q: "זה יקר לי...", a: "כמה שווה לך לילה של שינה או יום בלי כאבים? הייעוץ חוסך פעמים רבות קנייה מיותרת של תמ"לים, משאבות יקרות ואביזרים שלא באמת פותרים את הבעיה." }
            ].map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100 text-right"
              >
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-purple-900">
                  <HelpCircle className="text-purple-500 shrink-0" size={24}/> 
                  {faq.q}
                </h4>
                <p className="text-slate-600 pr-8 leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. סגירה וטופס סופי */}
      <footer className="py-20 px-6 bg-white border-t border-purple-100">
        <div className="max-w-xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-purple-900 mb-6"
          >
            בואי נהפוך את האימהות שלך לחוויה של ביטחון ושמחה
          </motion.h2>
          <p className="text-lg text-slate-600 mb-10">אל תחכי לעוד לילה של חוסר אונים. השאירי פרטים ואחזור אלייך בהקדם (כי אני יודעת שכל דקה חשובה לך):</p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <input 
              type="text" 
              placeholder="שם מלא" 
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none text-right" 
            />
            <input 
              type="tel" 
              placeholder="מספר טלפון" 
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none text-right" 
            />
            <textarea 
              placeholder="מה הקושי העיקרי כרגע?" 
              rows={3} 
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none text-right"
            ></textarea>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-5 rounded-xl text-xl shadow-lg shadow-purple-200 transition-colors mt-4"
            >
              לחצי כאן לתיאום פגישה דחופה
            </motion.button>
          </motion.div>

          <div className="mt-16 text-slate-400 text-sm">
            שרה לוין - יועצת הנקה | אחות ליווי הריון | 058-76-33-059
          </div>
        </div>
      </footer>
    </div>
  );
}