// פוטר (סרגל תחתון)
"use client";
import React from 'react';
import Link from 'next/link';
import { Heart, Phone, Mail, Instagram, MessageCircle } from 'lucide-react';

const footerArticles = [
    { name: "הנקה ללא כאב", href: "/articles/painless-breastfeeding" },
    { name: "שינה היקשרותית", href: "/articles/attachment-sleep" },
    { name: "סימני רעב ועייפות", href: "/articles/hunger-vs-tired" },
    { name: "גודש ודלקות", href: "/articles/breast-engorgement" },
    { name: "מיתוסים בהנקה", href: "/articles/breastfeeding-myths" },
    { name: "גמילה מהנקה", href: "/articles/weaning-with-love" },
];

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16 px-6 border-t border-slate-800" dir="rtl">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* עמודה 1: לוגו ותיאור */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-white">
                        <Heart className="text-purple-400" size={24} fill="currentColor" />
                        <span className="text-2xl font-bold">שרה לוין</span>
                    </div>
                    <p className="text-sm leading-relaxed opacity-80">
                        ייעוץ הנקה וליווי אישי בגישה היקשרותית.
                        מלווה אותך במסע האימהות מהרגע הראשון,
                        בכל מה שקשור להנקה, שינה והתפתחות.
                    </p>
                </div>

                {/* עמודה 2: מאמרים מובילים */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">מרכז המידע</h4>
                    <ul className="space-y-3 text-sm">
                        {footerArticles.map((article) => (
                            <li key={article.href}>
                                <Link href={article.href} className="hover:text-purple-400 transition-colors">
                                    {article.name}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/articles" className="text-purple-400 font-bold hover:underline">
                                לכל המאמרים...
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* עמודה 3: ניווט מהיר */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">ניווט מהיר</h4>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/" className="hover:text-purple-400 transition-colors">דף הבית</Link></li>
                        <li><Link href="/about" className="hover:text-purple-400 transition-colors">אודות שרה</Link></li>
                        <li><Link href="/contact" className="hover:text-purple-400 transition-colors">יצירת קשר</Link></li>
                        <li><Link href="/legal/privacy" className="hover:text-purple-400 transition-colors">מדיניות פרטיות</Link></li>
                        <li><Link href="/legal/terms" className="hover:text-purple-400 transition-colors">תנאי שימוש ופרטיות</Link></li>
                        <li><Link href="/legal/accessibility" className="hover:text-purple-400 transition-colors">הצהרת נגישות</Link></li>
                    </ul>
                </div>

                {/* עמודה 4: צור קשר */}
                <div>
                    <h4 className="text-white font-bold mb-6 text-lg">דברי איתי</h4>
                    <div className="space-y-4">
                        <a href="tel:0587633059" className="flex items-center gap-3 hover:text-white transition-colors">
                            <Phone size={18} className="text-purple-400" />
                            <span>058-7633059</span>
                        </a>
                        <a href="mailto:sara@levin.com" className="flex items-center gap-3 hover:text-white transition-colors">
                            <Mail size={18} className="text-purple-400" />
                            <span>sara@example.com</span>
                        </a>
                        <div className="flex gap-4 pt-4">
                            <a href="https://wa.me/972587633059" className="p-2 bg-slate-800 rounded-full hover:bg-green-600 transition-all">
                                <MessageCircle size={20} />
                            </a>
                            <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs opacity-50">
                <p>© {new Date().getFullYear()} שרה לוין - כל הזכויות שמורות. עוצב באהבה לאימהות.</p>
            </div>
        </footer>
    );
}