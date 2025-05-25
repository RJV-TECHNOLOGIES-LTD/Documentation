export const meta = {
  metadataBase: new URL('https://pinexio.vercel.app'),
  title: 'RJV TECHNOLOGIES LTD - Documentation',
  description:
    'documentation for RJV TECHNOLOGIES LTD',
  authors: [{ name: 'Ricardo Jorge do Vale' }],
  keywords: [
    'RJV TECHNOLOGIES LTD',
    'documentation',
    'computer science',
    'AI',
    'Physics',
    'Mathematics',
  ],
  publisher: 'Ricardo Jorge do Vale',
  creator: 'Ricardo Jorge do Vale',
  openGraph: {
    type: 'website',
    title: 'RJV TECHNOLOGIES LTD - Documentation',
    description:
      'documentation for RJV TECHNOLOGIES LTD',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'documentation for RJV TECHNOLOGIES LTD',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image', // Type of Twitter card
    title: 'RJV TECHNOLOGIES LTD - Documentation', // Twitter card title
    description:
      'documentation for RJV TECHNOLOGIES LTD', // Twitter card description
    images: ['/og_image.png'], // Image used in the Twitter card
    creator: '@rjvtechnologies', // Twitter handle of the content creator (optional)
  },
  // SEO Enhancements
  alternates: {
    canonical: 'documentation-rho-two.vercel.app', // Set the canonical URL
  },
  robots: 'index, follow', // Allows search engines to index and follow links
  // Optional: Hreflang for multilingual content (if applicable)
  hreflang: {
    en: 'documentation-rho-two.vercel.app', // English version URL
    // Add more hreflang if you have other languages (example: Spanish)
    // "es": "documentation-rho-two.vercel.app/es",
  },
};
