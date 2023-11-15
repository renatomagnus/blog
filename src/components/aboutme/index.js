import { useTranslation } from 'next-i18next'

const AboutMe = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <section className="about-container">
      <p className="bg-about uppercase">{t("about.background")}</p>
      <div className="about-content">
        <p className="about-text">
        {t("about.text")}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
