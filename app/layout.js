export const metadata = {
  title: 'Hello World - React',
  description: 'A simple Hello World React application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
