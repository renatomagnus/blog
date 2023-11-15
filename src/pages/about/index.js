import AboutMe from '@/components/aboutme';
import Family from '@/components/family';
import Header from '@/components/header';
import Knowledge from '@/components/knowledge';
import SocialMedias from '@/components/socialmedias';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const About = () => {
  const { t, i18n } = useTranslation('common')
  return (
    <>
      <Header />
      <AboutMe />
      <Knowledge />
      <Family />
      <SocialMedias />
    </>
  );
};

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default About;
