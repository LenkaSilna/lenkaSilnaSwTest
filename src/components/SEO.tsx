import Head from 'next/head';
import { useLanguage } from '../context/LanguageContext';
import { LocalizationLanguages } from '../types/enums';
import seoData from '../seo.json';

interface SEOProps {
  page: keyof typeof seoData;
}

const SEO: React.FC<SEOProps> = ({ page }) => {
  const { lang } = useLanguage();
  const seo = seoData[page][lang as LocalizationLanguages];

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDescription} />
      <meta property="og:image" content={seo.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.twitterTitle} />
      <meta name="twitter:description" content={seo.twitterDescription} />
      <meta name="twitter:image" content={seo.twitterImage} />
    </Head>
  );
};

export default SEO;