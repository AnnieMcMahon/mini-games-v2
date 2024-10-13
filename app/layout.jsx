import "./styles.css";
import Navbar from "./Navbar";

export const metadata = {
  title: "Mini-Games"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
