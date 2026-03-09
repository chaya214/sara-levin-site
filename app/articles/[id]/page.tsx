//דף מאמר בודד
import { articles } from '@/lib/articles-data';
import ArticleContent from './ArticleContent';
import { notFound } from 'next/navigation';

// הפונקציה ש-Cloudflare צריך כדי לדעת אילו דפים לייצר מראש
export async function generateStaticParams() {
  // בגלל ש-articles הוא אובייקט ולא מערך, אנחנו מוציאים את המפתחות שלו
  return Object.keys(articles).map((id) => ({
    id: id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  
  // בדיקה אם המאמר קיים
  if (!articles[id as keyof typeof articles]) {
    notFound();
  }

  // החזרת רכיב הלקוח עם העיצוב שלך
  return <ArticleContent />;
}