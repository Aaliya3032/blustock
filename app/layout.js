import Header from "@/components/Header";
import "./globals.css";
import  {Theme}  from "./theme/page";

export const metadata = {
  title: "Blustock Consultants",
  description: "A stock market academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="text-primary dark:text-white w-full"
      >
      <Theme>
        <Header/>
        {children}
        </Theme>
      </body>
    </html>
  );
}
