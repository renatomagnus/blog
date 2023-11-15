import { useTranslation } from 'next-i18next'

const Knowledge = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <section className="knowledge">
      <h2 className="knowledge-title">{t("knowledge.title")}</h2>
      <p>
        {t("knowledge.text")}
      </p>
      <div className="knowledge-items">
        <div className="knowledge-column">
          <h3 className="column-name">{t("knowledge.subtitle1")}</h3>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            className="knowledge-item"
          >
            <img src="/icons/html.png" alt="" />
            <p className="item-name knowledge-margin-b">Html</p>
          </a>
          <h3 className="column-name">{t("knowledge.subtitle2")}</h3>
          <a
            href="https://docs.cypress.io/guides/overview/why-cypress"
            target="_blank"
            className="knowledge-item"
          >
            <img className="scale08" src="/icons/cypress.png" alt="" />
            <p className="item-name">Cypress</p>
          </a>
        </div>
        <div className="knowledge-column">
          <h3 className="column-name">{t("knowledge.subtitle3")}</h3>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            className="knowledge-item"
          >
            <img src="/icons/css.png" alt="" />
            <p className="item-name">Css</p>
          </a>
          <a
            href="https://sass-lang.com/documentation/"
            target="_blank"
            className="knowledge-item"
          >
            <img src="/icons/sass.png" alt="" />
            <p className="item-name">Sass</p>
          </a>
          <a
            href="https://lesscss.org/"
            target="_blank"
            className="knowledge-item"
          >
            <img src="/icons/less.png" alt="" />
            <p className="item-name">Less</p>
          </a>
        </div>
        <div className="knowledge-column">
          <h3 className="column-name">{t("knowledge.subtitle4")}</h3>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            className="knowledge-item"
          >
            <img className="scale08" src="/icons/javascript.png" alt="" />
            <p className="item-name">JavaScript</p>
          </a>
          <a
            href="https://react.dev/blog/2023/03/16/introducing-react-dev"
            target="_blank"
            className="knowledge-item"
          >
            <img className="scale08" src="/icons/react.png" alt="" />
            <p className="item-name">React.js</p>
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            className="knowledge-item"
          >
            <img src="/icons/next.png" alt="" />
            <p className="item-name">Next.js</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
