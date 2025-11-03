import './globals.css';

export const metadata = {
  title: 'UMKM Lokal',
  description: 'Temukan UMKM di sekitarmu!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}