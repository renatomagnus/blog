import Header from '@/components/header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Portfolio = () => {
  const { t, i18n } = useTranslation('common');

  return (
    <>
      <Header />
      <main id="portfolio">
        <div className="portfolio-content">
          <p>
            {t("portfolio.text")}
          </p>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Portfolio;
