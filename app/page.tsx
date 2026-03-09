import React from 'react';
import { Phone, MessageCircle, Heart, CheckCircle, HelpCircle } from 'lucide-react';

export default function LandingPage() {
  const primaryColor = "#a382b3"; // סגול מתוך כרטיס הביקור

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans leading-relaxed" dir="rtl">
      
      {/* 1. Header & Hero - הבטחת הניצחון */}
      <header className="relative bg-white pt-16 pb-24 px-6 border-b border-purple-100 overflow-hidden">
        {/* אלמנט עיצובי שמזכיר את הלוגו ברקע */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-purple-50 rounded-full opacity-50 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full border-4 border-purple-200 p-2 bg-white shadow-sm overflow-hidden">
              {/* מקום ללוגו מהכרטיס ביקור */}
              <div className="w-full h-full bg-purple-100 rounded-full flex items-center justify-center text-purple-400">
                <Heart size={40} fill="currentColor" />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-purple-900 mb-6 leading-tight">
            תפסיקי להיאבק, תתחילי להתחבר: <br className="hidden md:block" />
            <span className="text-purple-600">הדרך שלך להנקה נינוחה, שינה רצופה וביטחון מלא באימהות שלך.</span>
          </h1>

          {/* 2. תת-כותרת: הדיוק */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            ליווי עוטף ומקצועי לאימהות בגישה רגישה ומותאמת אישית. המקום שבו הידע המקצועי פוגש את הלב שלך, כדי שכל רגע עם הבייבי יהיה בדיוק כמו שחלמת.
          </p>

          {/* הנעה לפעולה ראשונה */}
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all transform hover:scale-105 flex items-center gap-3 mx-auto">
            <Phone size={24} />
            לשיחת ייעוץ ראשונית שתעשה לך סדר – לחצי כאן
          </button>
        </div>
      </header>

      {/* 3. הצפת הכאב: הזדהות עמוקה */}
      <section className="py-20 px-6 bg-purple-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800">
            בואי נדבר רגע על מה שקורה באמת ב-3 לפנות בוקר...
          </h2>
          <div className="space-y-6">
            {[
              "האם את מוצאת את עצמך מסתכלת על התינוק שלך ומרגישה דקירה של אשמה כי 'זה אמור להיות קל יותר'?",
              "האם הכאב הפיזי בהנקה גורם לך לחשוש מהפעם הבאה שהוא יתעורר?",
              "האם את מוצפת בעצות סותרות מכל כיוון ומרגישה שהקול הפנימי שלך פשוט הלך לאיבוד בתוך העייפות?"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-purple-400 mt-1 shrink-0"><Heart size={20} fill="currentColor" /></div>
                <p className="text-lg text-slate-700">{text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-xl font-medium text-purple-800 italic">
            האמת היא? את לא לבד. וזה לא חייב להיות ככה.
          </p>
        </div>
      </section>

      {/* 4. הפתרון: השינוי המיוחל */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-8">השינוי מתחיל כאן</h2>
          <div className="bg-white border-2 border-purple-100 p-8 md:p-12 rounded-3xl shadow-xl">
            <p className="text-xl md:text-2xl text-slate-700 mb-6 font-medium">
              דמייני את עצמך יושבת בכורסה, הגוף משוחרר, התינוק מתחבר בקלות ויונק ברוגע. את נושמת עמוק, ויודעת בדיוק מה הוא צריך.
            </p>
            <p className="text-lg text-slate-600 mb-10">
              תשתחררי מהצורך "לשרוד" את היום. בייעוץ שלנו, נהפוך את הקושי ללמידה משותפת. את תקבלי כלים פרקטיים לקרוא את הסימנים שלו, לפתור כאבים פיזיים ולהחזיר את השלווה הביתה.
            </p>
            
            {/* הנעה לפעולה שנייה */}
            <a href="https://wa.me/972587633059" target="_blank" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-md transition-all">
              <MessageCircle size={24} />
              שלחי לי הודעה בוואטסאפ – אני כאן בשבילך
            </a>
          </div>
        </div>
      </section>

      {/* 5. צורת העבודה: בסיס של אמון */}
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
              <div key={i} className="flex gap-4">
                <div className="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold">{i+1}</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{item.t}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. הוכחה חברתית */}
      <section className="py-20 px-6 bg-purple-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl italic leading-relaxed mb-8">
            "הגעתי לשרה אחרי שבוע של בכי (שלי ושלו). תוך שעה היא זיהתה את הבעיה והפכה את ההנקה מרגע כואב לרגע של קסם. היא הצילה לי את חופשת הלידה."
          </p>
          <div className="font-bold text-purple-200">— תהילה, מודיעין עילית</div>
        </div>
      </section>

      {/* 7. הרווח שלך vs ההשקעה */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border-r-4 border-green-400">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">הרווח שלך</h3>
            <ul className="space-y-3 text-slate-600">
              <li>• שפיות ושקט נפשי</li>
              <li>• זמן שינה יקר</li>
              <li>• חיבור רגשי עמוק עם התינוק</li>
              <li>• מניעת דלקות וכאבים מיותרים</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border-r-4 border-purple-400">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">ההשקעה שלך</h3>
            <p className="text-slate-600">
              פגישה ממוקדת שהיא השקעה בבריאות שלך ושל התינוק שלך לטווח ארוך. כלי עבודה שישמשו אותך לכל אורך הדרך.
            </p>
          </div>
        </div>
      </section>

      {/* 8. שאלות ותשובות */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">שאלות שחשוב לשאול</h2>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><HelpCircle className="text-purple-500" size={20}/> "אולי זה יעבור לבד?"</h4>
              <p className="text-slate-600">קשיים בהנקה בדרך כלל לא נפתרים מעצמם אלא מחמירים. טיפול מוקדם חוסך סבל רב ומאפשר הצלחה בהמשך.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><HelpCircle className="text-purple-500" size={20}/> "זה יקר לי..."</h4>
              <p className="text-slate-600">כמה שווה לך לילה של שינה או יום בלי כאבים? הייעוץ חוסך קנייה מיותרת של תמ"לים, בקבוקים ואביזרים שלא באמת פותרים את הבעיה.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. סגירה וטופס סופי */}
      <footer className="py-20 px-6 bg-white border-t border-purple-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">בואי נהפוך את האימהות שלך לחוויה של ביטחון ושמחה</h2>
          <p className="text-lg text-slate-600 mb-10">אל תחכי לעוד לילה של חוסר אונים. השאירי פרטים ואחזור אלייך בהקדם (כי אני יודעת שכל דקה חשובה לך):</p>
          
          <form className="space-y-4 text-right">
            <input type="text" placeholder="שם מלא" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none" />
            <input type="tel" placeholder="מספר טלפון" className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none" />
            <textarea placeholder="מה הקושי העיקרי כרגע?" rows={3} className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none"></textarea>
            
            {/* הנעה לפעולה שלישית ואחרונה */}
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-5 rounded-xl text-xl shadow-lg shadow-purple-200 transition-all mt-4">
              לחצי כאן לתיאום פגישה דחופה
            </button>
          </form>

          <div className="mt-16 text-slate-400 text-sm">
            שרה לוין - יועצת הנקה | אחות ליווי הריון | 058-76-33-059
          </div>
        </div>
      </footer>
    </div>
  );
}