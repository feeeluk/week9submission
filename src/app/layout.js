import { Inter, Anton, Antonio } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: '--anton'})
const antonio = Antonio({ subsets: ["latin"], weight: "100" })

export const metadata = {
  title: "Week 9 Submission",
  description: "Use of auth in Next.js",
  openGraph: {
    title: "Week 9 Submission",
    description: "Use of auth in Next.js",
    type: "website",
    url: "https://week9submission-ji9cmt1l5-phils-projects-7ace37df.vercel.app/",
    image: ["https://week9submission-ji9cmt1l5-phils-projects-7ace37df.vercel.app/images/TVshows.png"], // add an appropriate image to your public folder
  },
};

export default function RootLayout({ children }) {

  
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${antonio.className} ${anton.variable}`}>
          <NavBar />
          {children}
          <Footer />
          </body>
      </html>
    </ClerkProvider>
  );
}
