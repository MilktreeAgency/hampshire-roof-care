import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'local_business';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
  noindex?: boolean;
}

const DEFAULT_TITLE = 'Hampshire Roof Care | Expert Roofing Services in Hampshire';
const DEFAULT_DESCRIPTION = 'Professional roof repairs, replacements, and maintenance across Hampshire. Free site surveys, honest advice, and quality workmanship. Serving Southampton, Winchester, New Forest, and surrounding areas.';
const DEFAULT_IMAGE = '/og-image.jpg';
const SITE_NAME = 'Hampshire Roof Care';
const BASE_URL = 'https://hampshireroofcare.co.uk';

/**
 * SEO Component - Updates document head with meta tags for search engines and social sharing
 * 
 * Uses direct DOM manipulation for compatibility with HashRouter SPAs
 * For optimal SEO, consider migrating to BrowserRouter with server-side rendering
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  article,
  noindex = false,
}) => {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const metaDescription = description || DEFAULT_DESCRIPTION;
  const ogImageUrl = ogImage || DEFAULT_IMAGE;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to update or create link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Basic meta tags
    setMetaTag('description', metaDescription);
    
    // Robots
    if (noindex) {
      setMetaTag('robots', 'noindex, nofollow');
    } else {
      setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Open Graph tags
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', metaDescription, true);
    setMetaTag('og:type', ogType === 'local_business' ? 'business.business' : ogType, true);
    setMetaTag('og:site_name', SITE_NAME, true);
    setMetaTag('og:image', ogImageUrl.startsWith('http') ? ogImageUrl : `${BASE_URL}${ogImageUrl}`, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:locale', 'en_GB', true);
    
    if (canonicalUrl) {
      setMetaTag('og:url', canonicalUrl, true);
      setLinkTag('canonical', canonicalUrl);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', metaDescription);
    setMetaTag('twitter:image', ogImageUrl.startsWith('http') ? ogImageUrl : `${BASE_URL}${ogImageUrl}`);

    // Article-specific meta tags
    if (ogType === 'article' && article) {
      if (article.publishedTime) {
        setMetaTag('article:published_time', article.publishedTime, true);
      }
      if (article.modifiedTime) {
        setMetaTag('article:modified_time', article.modifiedTime, true);
      }
      if (article.author) {
        setMetaTag('article:author', article.author, true);
      }
    }

    // Geo tags for local SEO
    setMetaTag('geo.region', 'GB-HAM');
    setMetaTag('geo.placename', 'Hampshire');

  }, [fullTitle, metaDescription, canonicalUrl, ogImageUrl, ogType, article, noindex]);

  return null; // This component only manages head tags, renders nothing
};

export default SEO;

/**
 * JSON-LD Schema Helper Components
 */

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  telephone?: string;
  email?: string;
  url?: string;
  image?: string;
  priceRange?: string;
  areaServed?: string[];
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({
  name = 'Hampshire Roof Care Company',
  description = DEFAULT_DESCRIPTION,
  telephone = '07538284300',
  email = 'info.hampshireroofcare@gmail.com',
  url = BASE_URL,
  image = `${BASE_URL}/og-image.jpg`,
  priceRange = '££',
  areaServed = ['Southampton', 'Winchester', 'New Forest', "Chandler's Ford", 'Eastleigh', 'Hampshire'],
  address = {
    addressLocality: 'Southampton',
    addressRegion: 'Hampshire',
    addressCountry: 'GB',
  },
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    name,
    description,
    telephone: `+44${telephone.replace(/^0/, '')}`,
    email,
    url,
    image,
    priceRange,
    areaServed: areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.9097,
      longitude: -1.4044,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    sameAs: [],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '100',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface ServiceSchemaProps {
  name: string;
  description: string;
  image?: string;
  url?: string;
  provider?: string;
  areaServed?: string[];
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  image,
  url,
  provider = 'Hampshire Roof Care Company',
  areaServed = ['Southampton', 'Winchester', 'New Forest', "Chandler's Ford", 'Hampshire'],
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'RoofingContractor',
      name: provider,
      url: BASE_URL,
    },
    areaServed: areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    ...(image && { image: image.startsWith('http') ? image : `${BASE_URL}${image}` }),
    ...(url && { url: `${BASE_URL}${url}` }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>;
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string;
  url?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  image,
  url,
  datePublished = '2024-01-01',
  dateModified,
  author = 'Hampshire Roof Care',
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: image ? (image.startsWith('http') ? image : `${BASE_URL}${image}`) : `${BASE_URL}/og-image.jpg`,
    url: url ? `${BASE_URL}${url}` : undefined,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hampshire Roof Care Company',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo-dark.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

interface BreadcrumbSchemaProps {
  items: Array<{ name: string; url: string }>;
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
