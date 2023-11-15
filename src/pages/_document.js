import { Html, Head, Main, NextScript } from 'next/document'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Document() {
  const { t, i18n } = useTranslation('common')
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
