import { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const BASE_URL = 'https://www.hampshireroofcare.co.uk';
const SITE_NAME = 'Hampshire Roof Care';
const DEFAULT_TITLE = 'Roofing Services in Hampshire | Hampshire Roof Care';
const DEFAULT_DESCRIPTION = 'Roof repairs, replacements and leadwork across Southampton, Winchester, the New Forest and Chandler’s Ford. Contact Hampshire Roof Care for a free survey.';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'local_business';
  article?: { publishedTime?: string; modifiedTime?: string; author?: string };
  noindex?: boolean;
}
export interface HeadData {
  title: string;
  canonical: string;
  tags: Array<{ key: string; value: string; property?: boolean }>;
}
// A fresh collector is supplied for each static render; browser navigation uses the same data.
export const SEOContext = createContext<((head: HeadData) => void) | null>(null);

const SEO: React.FC<SEOProps> = ({ title, description = DEFAULT_DESCRIPTION, canonical,
  ogImage = '/og-image.jpg', ogType = 'website', article, noindex = false }) => {
  const { pathname } = useLocation();
  const collect = useContext(SEOContext);
  const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
  const url = new URL(canonical || pathname, BASE_URL).href;
  const image = new URL(ogImage, BASE_URL).href;
  const head: HeadData = {
    title: fullTitle, canonical: url,
    tags: [
      { key: 'description', value: description },
      { key: 'robots', value: noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' },
      ...Object.entries({
        'og:title': fullTitle, 'og:description': description, 'og:url': url,
        'og:type': ogType === 'local_business' ? 'business.business' : ogType,
        'og:site_name': SITE_NAME, 'og:locale': 'en_GB', 'og:image': image,
        ...(ogType === 'article' && article?.publishedTime ? { 'article:published_time': article.publishedTime } : {}),
        ...(ogType === 'article' && article?.modifiedTime ? { 'article:modified_time': article.modifiedTime } : {}),
        ...(ogType === 'article' && article?.author ? { 'article:author': article.author } : {}),
      }).map(([key, value]) => ({ key, value, property: true })),
      ...Object.entries({ 'twitter:card': 'summary_large_image', 'twitter:title': fullTitle,
        'twitter:description': description, 'twitter:image': image, 'twitter:url': url,
      }).map(([key, value]) => ({ key, value })),
    ],
  };
  if (collect) collect(head);
  const signature = JSON.stringify(head);
  useEffect(() => {
    const data: HeadData = JSON.parse(signature);
    document.title = data.title;
    document.head.querySelectorAll('[data-seo]').forEach(tag => tag.remove());
    const link = document.createElement('link');
    link.rel = 'canonical'; link.href = data.canonical; link.dataset.seo = '';
    document.head.appendChild(link);
    for (const tag of data.tags) {
      const meta = document.createElement('meta');
      meta.setAttribute(tag.property ? 'property' : 'name', tag.key);
      meta.content = tag.value; meta.dataset.seo = '';
      document.head.appendChild(meta);
    }
  }, [signature]);
  return null;
};
export default SEO;

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
    '@id': `${BASE_URL}/#organization`,
    name,
    description,
    telephone: `+44${telephone.replace(/^0/, '')}`,
    email,
    url,
    image,
    priceRange,
    areaServed: areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    address: {
      '@type': 'PostalAddress',
      ...address,
    },

  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
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
      '@id': `${BASE_URL}/#organization`,
      name: provider,
      url: BASE_URL,
    },
    areaServed: areaServed.map((area) => ({
      '@type': 'Place',
      name: area,
    })),
    ...(image && { image: image.startsWith('http') ? image : `${BASE_URL}${image}` }),
    ...(url && { url: `${BASE_URL}${url}` }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
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
  datePublished,
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
};
