import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-geist-mono",
  weight: ["400","500","700"],
  // 仅使用受支持的子集，移除不在类型定义中的值
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "修修 Xiuqi Li — CS-PhD & 艺术创作者",
  description:
    "作品展示、研究介绍、文集与联系合作。教育类游戏 / UI·UX / AIGC / 平面设计",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Plausible Analytics（请替换为你的域名） */}
        <script
          defer
          data-domain="example.com"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className={`${inter.variable} ${notoSansSC.variable} antialiased`}>
        <a href="#content" className="sr-skiplink">跳转到内容</a>
        <header className="bg-salt-white nav-glass sticky top-0 z-50">
          <nav className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="text-deep-sea font-semibold">Xiu</a>
              <a href="/about" aria-label="Profile">
                <Image
                  src="/profile.jpg"
                  alt="Profile avatar"
                  width={36}
                  height={36}
                  className="rounded-full object-cover avatar-glow"
                  priority
                />
              </a>
            </div>
            <div className="flex gap-4 text-deep-sea">
              <a href="/work" className="hover:text-shell-pink">Work</a>
              <a href="/research" className="hover:text-shell-pink">Research</a>
              <a href="/writing" className="hover:text-shell-pink">Writing</a>
              <a href="/about" className="hover:text-shell-pink">About</a>
              <a href="/contact" className="hover:text-shell-pink">Contact</a>
            </div>
          </nav>
          <div className="divider" />
        </header>
        <main id="content" className="mx-auto max-w-5xl px-4 py-8">
          {children}
        </main>
        <footer className="mx-auto max-w-5xl px-4 py-8 text-neutral-gray">
          <div className="divider mb-4" />
          <p>© {new Date().getFullYear()} 修修 Xiuqi Li · RSS · GitHub · LinkedIn</p>
        </footer>
      </body>
    </html>
  );
}
