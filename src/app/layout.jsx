import "./globals.css"

export const metadata = {
  title: "Authentication UI",
  description: "Modern dark-themed authentication screens",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
