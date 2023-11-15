import Article from '@/components/article';
import Header from '@/components/header';
import SocialMedias from '@/components/socialmedias';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const AllPosts = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <>
      <Header />
      <Article className="margin-top-20vh" title={t("posts.title1")} text={t("posts.text1")} theme={t("posts.category1")} date={t("posts.date1")}/>
      <Article title={t("posts.title2")} text={t("posts.text2")} theme={t("posts.category2")} date={t("posts.date2")}/>
      <Article title={t("posts.title3")} text={t("posts.text3")} theme={t("posts.category3")} date={t("posts.date3")}/>
      <SocialMedias />
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

export default AllPosts;