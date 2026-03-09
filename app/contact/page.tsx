// דף יצירת קשר
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        {/* כותרת הדף */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-purple-900 mb-4">אני כאן בשבילך</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            אל תישארי עם השאלות לבד. צרי קשר בכל דרך שנוחה לך, ואחזור אלייך בהקדם האפשרי.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* צד ימין: פרטי התקשרות מהירים */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <a href="https://wa.me/972587633059" className="group bg-green-50 p-6 rounded-2xl border border-green-100 transition-all hover:shadow-md text-right">
                <MessageCircle className="text-green-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-bold text-slate-800 text-lg">וואטסאפ</h3>
                <p className="text-slate-600">הדרך המהירה ביותר לקבל מענה</p>
              </a>

              <a href="tel:0587633059" className="group bg-purple-50 p-6 rounded-2xl border border-purple-100 transition-all hover:shadow-md text-right">
                <Phone className="text-purple-600 mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-bold text-slate-800 text-lg">טלפון</h3>
                <p className="text-slate-600">זמינה לשיחה אישית</p>
              </a>
            </div>

            <div className="space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-4 text-right">
                <div className="bg-white p-3 rounded-full shadow-sm text-purple-600"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-slate-800">אזור פעילות</h4>
                  <p className="text-slate-600">ביקור בית בבית שמש והסביבה / ייעוץ בזום לכל הארץ</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-right">
                <div className="bg-white p-3 rounded-full shadow-sm text-purple-600"><Clock size={24} /></div>
                <div>
                  <h4 className="font-bold text-slate-800">שעות זמינות</h4>
                  <p className="text-slate-600">א'-ה' 09:00-20:00 | ימי ו' וערבי חג 09:00-12:00</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-right">
                <div className="bg-white p-3 rounded-full shadow-sm text-purple-600"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold text-slate-800">דואר אלקטרוני</h4>
                  <p className="text-slate-600">office@sarahlevin.co.il</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* צד שמאל: טופס יצירת קשר */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-purple-50"
          >
            <h2 className="text-2xl font-bold text-purple-900 mb-8 text-right">שלחי לי הודעה</h2>
            <form className="space-y-5 text-right">
              <div>
                <label className="block text-slate-700 font-medium mb-2">שם מלא</label>
                <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition-all" placeholder="איך קוראים לך?" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">טלפון</label>
                  <input type="tel" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition-all" placeholder="05X-XXXXXXX" />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">נושא הפנייה</label>
                  <select className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition-all">
                    <option>ייעוץ הנקה</option>
                    <option>ייעוץ שינה היקשרותי</option>
                    <option>ליווי הריון</option>
                    <option>אחר</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-medium mb-2">איך אני יכולה לעזור?</label>
                <textarea rows={4} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-400 outline-none transition-all" placeholder="ספרי לי קצת על הקושי או השאלה שלך..."></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-purple-600 text-white font-bold py-4 rounded-xl text-lg shadow-lg flex items-center justify-center gap-3 hover:bg-purple-700 transition-colors"
              >
                <Send size={20} />
                שליחת הודעה
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}