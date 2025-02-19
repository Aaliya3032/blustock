import "./globals.css";


export const metadata = {
  title: "Blustock Consultants",
  description: "A stock market academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=''
      >
        {children}
      </body>
    </html>
  );
}
