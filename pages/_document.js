import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <meta name="theme-color" content="#2563eb" />
      </Head>
      <body className="bg-white dark:bg-dark text-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}