import { useTranslation } from 'next-i18next'

const Header = () => {
  const { t, i18n } = useTranslation('common')

  return(
    <header>
    <nav>
      <ul>
        <li className="underlined"><a href={`/${i18n.languages?.[0]}`}>{t("header.articles")}</a></li>
        <li className="underlined"><a href={`/${i18n.languages?.[0]}/about`}>{t("header.about")}</a></li>
        <li className="underlined scratch"><a href={`/${i18n.languages?.[0]}/portfolio`}>{t("header.portfolio")}</a></li>
      </ul>
    </nav>
  </header>
  )
}

export default Header