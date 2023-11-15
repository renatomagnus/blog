import { useTranslation } from 'next-i18next'

const Family = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <section className="family">
      <div className="family-text">
        <h2>{t("family.title")}</h2>
        <p>{t("family.text1")}</p>
        <p>{t("family.text2")}</p>
        <p>{t("family.text3")}</p>
      </div>
      <div className="family-images">
        <div className="family-image">
        <img src="/family/nos.jpeg" alt="" />
        </div>
        <div className="family-image">
        <img src="/family/gatas.jpeg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Family;
