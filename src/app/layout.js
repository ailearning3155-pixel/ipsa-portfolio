import './globals.css';

export const metadata = {
  title: 'Cinematic Portfolio',
  description: 'Interactive cinematic 3D portfolio experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
