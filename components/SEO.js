import Head from 'next/head'

export default function SEO() {
  const siteMetadata = {
    title: 'Satyajit Mule - Frontend Developer',
    description: 'Frontend Developer with 3+ years of experience in React.js, specializing in building scalable, responsive web applications',
    author: 'Satyajit Mule',
    siteUrl: 'https://your-domain.com',
    image: '/profile.jpg',
    keywords: 'Frontend Developer, React.js, JavaScript, Web Developer, Pune, Maharashtra',
  }

  return (
    <Head>
      <title>{siteMetadata.title}</title>
      <meta name="description" content={siteMetadata.description} />
      <meta name="keywords" content={siteMetadata.keywords} />
      <meta name="author" content={siteMetadata.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.description} />
      <meta property="og:image" content={siteMetadata.image} />
      <meta property="og:url" content={siteMetadata.siteUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteMetadata.title} />
      <meta name="twitter:description" content={siteMetadata.description} />
      <meta name="twitter:image" content={siteMetadata.image} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Satyajit Mule',
            jobTitle: 'Frontend Developer',
            url: siteMetadata.siteUrl,
            email: 'mulesatyajit1505@gmail.com',
            telephone: '+919763188944',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Pune',
              addressRegion: 'Maharashtra',
              postalCode: '411027',
              addressCountry: 'IN'
            }
          })
        }}
      />
    </Head>
  )
}