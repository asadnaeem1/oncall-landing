import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OnCall by Voir Labs — An AI Inside Sales Agent for Real Estate Teams",
  description:
    "An AI ISA that calls every new lead in under 60 seconds, qualifies them on a real phone call, and books the appointment on your agent's calendar. Built for Follow Up Boss teams. Done for you.",
};

// Sets data-theme before first paint so the toggle's stored preference
// (or the OS preference) applies without a flash of the wrong theme.
const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('oncall-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
