import "./globals.css";
export const metadata = {
  title: "Hero Test",
  description: "Test technique Hero Section",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
