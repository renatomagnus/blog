import Header from '@/components/header';
import SocialMedias from '@/components/socialmedias';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const DontUseCss = () => {
  const { t, i18n } = useTranslation('dont-use-css','common');

  return (
    <>
      <Header />
      <article className="article">
        <h1 className="article-title">
          {t("article.title")}
        </h1>
        <p className="article-paragraph">
        {t("article.text1")}
        </p>
        <p className="article-paragraph">
        <span className="italic">{t("article.text2")}</span>{t("article.text2-1")}
        </p>
        <p className="article-paragraph">
        {t("article.text3")}
        </p>
        <p className="article-paragraph">
        {t("article.text4")}
        </p>
        <p className="article-paragraph">
        {t("article.text5")}
        </p>
        <p className="article-emphasis">
        {t("article.emphasis")}
        </p>
        <p className="article-paragraph">
        {t("article.text6")}
        </p>
        <p className="article-paragraph">
        {t("article.text7")}
        </p>
        <p className="article-paragraph">
        {t("article.text8")}
        </p>
      </article>
      <p className="article-footer">{t("article.footer")}</p>

      <SocialMedias />
    </>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['dont-use-css', 'common'])),
    },
  };
}

export default DontUseCss;
