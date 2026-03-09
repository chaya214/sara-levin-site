// דף המאמרים
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, ChevronLeft, BookOpen } from 'lucide-react';

const allArticles = [
  { 
    id: "painless-breastfeeding", 
    title: "הנקה ללא כאב: המדריך לתפיסה נכונה", 
    excerpt: "אם זה כואב, משהו לא מדויק. בואי נלמד איך להפוך את ההנקה לרגע של חיבור במקום רגע של סבל.",
    category: "הנקה",
    readTime: "5 דק'"
  },
  { 
    id: "attachment-sleep", 
    title: "שינה היקשרותית: איך להרדים בלי דמעות", 
    excerpt: "שינה היא לא אילוף. גלו איך לבנות ביטחון עצמי אצל התינוק שיוביל ללילות רגועים יותר.",
    category: "שינה",
    readTime: "7 דק'"
  },
  { 
    id: "hunger-vs-tired", 
    title: "סימני רעב מול עייפות: ללמוד את השפה שלו", 
    excerpt: "הוא בוכה? בואי נבין מה הוא מנסה להגיד לך לפני שהבכי הופך לצרוח.",
    category: "התפתחות",
    readTime: "4 דק'"
  },
  { 
    id: "breast-engorgement", 
    title: "גודש ודלקות בשד: מניעה וטיפול SOS", 
    excerpt: "זיהוי מוקדם של גודש יכול לחסוך כאב רב. מדריך מעשי לטיפול ביתי יעיל.",
    category: "הנקה",
    readTime: "6 דק'"
  },
  { 
    id: "breastfeeding-myths", 
    title: "מיתוסים בהנקה: מה נכון ומה לא?", 
    excerpt: "בירה שחורה באמת עוזרת? ומה עם שדיים רכים? עושים סדר בבלגן.",
    category: "הנקה",
    readTime: "5 דק'"
  },
  { 
    id: "routine-at-3-months", 
    title: "סדר יום בגיל 3 חודשים", 
    excerpt: "איך לבנות שלד של יום שמעניק ביטחון לתינוק ושפיות לאמא.",
    category: "שינה",
    readTime: "6 דק'"
  },
  { 
    id: "pumping-and-storage", 
    title: "המדריך לשואבת: אחסון וניהול חלב", 
    excerpt: "כל מה שצריך לדעת על שאיבה אפקטיבית ושמירה על 'הזהב הלבן'.",
    category: "הנקה",
    readTime: "6 דק'"
  },
  { 
    id: "growth-spurts", 
    title: "קפיצות גדילה: למה הוא לא מפסיק לינוק?", 
    excerpt: "אל תילחצי, הוא פשוט 'מבצע הזמנה'. כך תשרדו את ימי המרתון.",
    category: "הנקה",
    readTime: "4 דק'"
  },
  { 
    id: "breastfeeding-diet", 
    title: "תזונת האם המניקה: מה מותר לאכול?", 
    excerpt: "האם חומוס באמת עושה גזים? מדריך משחרר לאמא הרעבה.",
    category: "הנקה",
    readTime: "5 דק'"
  },
  { 
    id: "starting-solids", 
    title: "המעבר למוצקים בגישה קשובה", 
    excerpt: "איך מתחילים לאכול בלי מאבקים ובלי לחץ. הנאה מסביב לשולחן.",
    category: "התפתחות",
    readTime: "6 דק'"
  },
  { 
    id: "weaning-with-love", 
    title: "להפסיק להניק באהבה: גמילה קשובה", 
    excerpt: "איך נפרדים מההנקה בצורה הדרגתית ששומרת על הקשר והלב.",
    category: "הנקה",
    readTime: "7 דק'"
  }
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 bg-purple-100 rounded-2xl text-purple-600 mb-4">
            <BookOpen size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4 text-right md:text-center">מרכז המידע של שרה</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-right md:text-center">
            כל מה שאת צריכה לדעת על הנקה, שינה וגידול תינוקות בגישה רגישה, מקצועית והיקשרותית.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allArticles.map((article, i) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/articles/${article.id}`} className="group block h-full">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-purple-50 flex flex-col h-full transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  
                  <div className="p-8 flex-grow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="bg-purple-100 text-purple-600 text-xs font-bold px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Clock size={14} />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-3 text-right leading-tight group-hover:text-purple-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm mb-6 text-right line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 text-center font-bold text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all flex items-center justify-center gap-2 border-t border-purple-50">
                    לקריאת המאמר המלא
                    <ChevronLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}