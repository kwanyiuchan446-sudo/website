import type { Metadata } from "next"
import "./globals.css"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Yue Woh Hop Kee 裕和合記",
  description: "A long-standing dried seafood and provisions shop in Sheung Wan, preserving the flavours and merchant heritage of Hong Kong.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        
        {/* Weglot 翻譯小工具 */}
        <script src="https://cdn.weglot.com/weglot.min.js" defer></script>
        <script
          id="weglot-init"
          defer
          dangerouslySetInnerHTML={{
            __html: `
              Weglot.initialize({
                api_key: 'wg_c452a7c6d045ead268447c23a4b3008d0'
              });
            `
          }}
        />
      </head>
      <body>
        {/* 1. 把 children 直接放外面，讓頁面正常渲染 */}
        {children}
        
        {/* 2. 恢復你們原本不帶 children 的 ScrollReveal 組件 */}
        <ScrollReveal />
      </body>
    </html>
  )
}
