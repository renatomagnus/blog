import '@/styles/globals.css'
import { appWithTranslation, useTranslation } from 'next-i18next'

const App = ({ Component, pageProps }) => {
  const { t, i18n } = useTranslation('common')
  return <div className={i18n.language}>
    <Component {...pageProps} />
    </div>
}
export default appWithTranslation(App)