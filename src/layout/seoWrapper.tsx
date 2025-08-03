import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  imageUrl: string;
  pageUrl: string;
}

export default function SEOWrapper({
  title,
  description,
  imageUrl,
  pageUrl,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={pageUrl} />
      <link
        rel="alternate"
        media="only screen and (max-width: 640px)"
        href={pageUrl}
      />
      <meta name="theme-color" content="#A91210" />
    </Helmet>
  );
}
