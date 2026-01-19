import Script from 'next/script';

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  contactPoint?: {
    telephone?: string;
    email?: string;
    contactType?: string;
  };
}

export function OrganizationSchema({
  name = 'Crias na Floresta',
  url = 'https://criasnaFloresta.pt',
  logo = 'https://criasnaFloresta.pt/images/crias-na-floresta-logo.png',
  description = 'Forest School em Portugal dedicado à educação na natureza para crianças dos 6 meses aos 4 anos.',
  address = {
    addressLocality: 'Caxias',
    addressRegion: 'Oeiras',
    addressCountry: 'PT',
  },
  contactPoint = {
    email: 'criasnafloresta@gmail.com',
    contactType: 'customer service',
  },
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name,
    url,
    logo,
    description,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      ...contactPoint,
    },
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  url?: string;
  telephone?: string;
  priceRange?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
}

export function LocalBusinessSchema({
  name = 'Crias na Floresta',
  description = 'Forest School oferecendo sessões regulares na natureza para crianças dos 6 meses aos 4 anos em Caxias, Oeiras.',
  url = 'https://criasnaFloresta.pt',
  priceRange = '€€',
  address = {
    addressLocality: 'Caxias',
    addressRegion: 'Oeiras',
    addressCountry: 'PT',
  },
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': url,
    name,
    description,
    url,
    priceRange,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebsiteSchemaProps {
  name?: string;
  url?: string;
  description?: string;
}

export function WebsiteSchema({
  name = 'Crias na Floresta',
  url = 'https://criasnaFloresta.pt',
  description = 'Forest School em Portugal dedicado à educação na natureza para crianças.',
}: WebsiteSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description,
    inLanguage: 'pt-PT',
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
