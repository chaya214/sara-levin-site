// רכיב ניווט
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'דף הבית', href: '/' },
    { name: 'אודות', href: '/about' },
    { name: 'מאמרים', href: '/articles' },
    { name: 'צור קשר', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
{/* לוגו */}
<Link href="/" className="flex items-center gap-3 group">
  {/* הלוגו עצמו */}
  <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
    <img 
      src="/logo.png" 
      alt="שרה לוין" 
      className="h-12 w-auto object-contain" 
    />
  </div>

  {/* טקסט המותג */}
  <div className="flex flex-col">
    <span className="text-xl font-extrabold text-purple-900 leading-none font-heebo">שרה לוין</span>
    <span className="text-xs text-slate-500 font-medium tracking-tighter mt-1">הנקה • שינה • היקשרות</span>
  </div>
</Link>

          {/* תפריט דסקטופ */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-slate-600 font-medium hover:text-purple-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link 
              href="https://wa.me/972587633059" 
              className="bg-purple-600 text-white px-6 py-2.5 rounded-full font-bold hover:bg-purple-700 transition-all shadow-md hover:shadow-purple-200"
            >
              דברי איתי
            </Link>
          </div>

          {/* כפתור המבורגר למובייל */}
          <button 
            className="md:hidden text-purple-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* תפריט מובייל נפתח */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-purple-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-800 hover:text-purple-600"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="https://wa.me/972587633059"
                className="bg-green-500 text-white text-center py-4 rounded-2xl font-bold mt-2"
              >
                ווטסאפ מהיר
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}