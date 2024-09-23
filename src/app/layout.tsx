import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "./header";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Christ Abessolo's portfolio",
  description: "Christ Abessolo, engineering student",
  openGraph: {
    title: "Christ Abessolog's portfolio",
    description: "Christ Abessolo, engineering student",
    url: "https://christrova.com",
    siteName: "Christ Abessolog's blog",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rova",
    creator: "@rova",
  },
  metadataBase: new URL("https://christrova.com"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <body className="max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
