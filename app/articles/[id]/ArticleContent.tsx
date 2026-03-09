// הגדרות העיצוב
"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import { articles } from '@/lib/articles-data';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ArticleContent() {
  const params = useParams();
  const id = params?.id as string;
  
  const article = articles[id as keyof typeof articles];

  if (!article) {
    return <div className="text-center py-20 font-heebo">המאמר לא נמצא...</div>;
  }

  return (
    <article className="min-h-screen bg-white py-16 px-6 text-right font-heebo" dir="rtl">
      <div className="max-w-3xl mx-auto">
        <Link href="/articles" className="inline-flex items-center gap-2 text-purple-600 mb-8 font-bold hover:gap-4 transition-all">
          <ArrowRight size={20} /> חזרה לכל המאמרים
        </Link>

        <header className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-bold inline-block mb-4"
          >
            {article.category}
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{article.title}</h1>
          <div className="flex items-center gap-2 text-slate-500">
            <Clock size={16} /> <span>זמן קריאה: {article.readTime}</span>
          </div>
        </header>

        <div 
          className="prose prose-lg max-w-none text-slate-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />

        <footer className="mt-16 bg-purple-900 rounded-3xl p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">רוצה להתייעץ אישית?</h3>
          <p className="mb-8 opacity-90">אני כאן כדי לעזור לך ליישם את הכלים האלו בבית שלך.</p>
          <a href="https://wa.me/972587633059" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full inline-flex items-center gap-3 transition-all">
            <MessageCircle size={24} /> דברי איתי בוואטסאפ
          </a>
        </footer>
      </div>
    </article>
  );
}