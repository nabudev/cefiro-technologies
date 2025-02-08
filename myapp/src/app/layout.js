import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Empresa de Software | Cefiro Technologies",
  description: "Cefiro Technologies ofrece soluciones web a medida, desarrollo de landing pages, sistemas de gestión empresarial y comercial, y soporte y mantenimiento de sistemas.",
  icons: {
    icon: '/app/favicon.ico',
  },
  keywords: "landing pages, soluciones web a medida, desarrollo web, sistemas de gestión empresarial, soporte y mantenimiento de sistemas, soluciones comerciales",
  author: "Cefiro Technologies",
  openGraph: {
    title: "Cefiro Technologies",
    description: "Ofrecemos desarrollo de landing pages, soluciones web a medida, sistemas de gestión empresarial y/o comercial, y soporte y mantenimiento de sistemas.",
    image: "/myapp/public/img/cefiro.webp", // Ruta de la imagen que deseas mostrar en redes sociales
    url: "cefiro-technologies.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cefiro Technologies",
    description: "Ofrecemos desarrollo de landing pages, soluciones web a medida, sistemas de gestión empresarial y/o comercial, y soporte y mantenimiento de sistemas.",
    image: "/myapp/public/img/cefiro.webp", // Ruta de la imagen para Twitter
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
