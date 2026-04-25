import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '오늘의 길',
  description: '오늘의 날씨와 환경에 맞는 최적의 산책 코스를 추천해드립니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
