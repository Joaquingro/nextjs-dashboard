import './ui/global.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <footer >
        Hecho con :heart: por Joachis
      </footer>
    </html>
  );
}
