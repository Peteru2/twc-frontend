import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "event";
  publishedTime?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = "True Worshippers Church (TWC)";
const DEFAULT_IMAGE = "https://twcglobal.org/og-default.jpg"; 
const SITE_URL = "https://twcglobal.org/";

export const Seo = ({
  title,
  description,
  image = DEFAULT_IMAGE,
  url,
  type = "website",
  publishedTime,
  jsonLd,
}: SeoProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = url ? `${SITE_URL}${url}` : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};