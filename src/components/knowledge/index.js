const Knowledge = () => {
  return (
    <section className="knowledge">
      <h2 className="knowledge-title">What I use on my works</h2>
      <p>
        Disclaimer: Against most of the developers that I have seen, I don't aim
        to study a lot of different languages and frameworks just to have a big
        'hard skills' section on my resume that I supose to know. My goals is to
        keep a few technologies and master than.
      </p>
      <div className="knowledge-items">
        <div className="knowledge-column">
          <h3 className="column-name">Estruture</h3>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            className="knowledge-item"
          >
            <img src="icons/html.png" alt="" />
            <p className="item-name knowledge-margin-b">Html</p>
          </a>
          <h3 className="column-name">Tests</h3>
          <a
            href="https://docs.cypress.io/guides/overview/why-cypress"
            target="_blank"
            className="knowledge-item"
          >
            <img className="scale08" src="icons/cypress.png" alt="" />
            <p className="item-name">Cypress</p>
          </a>
        </div>
        <div className="knowledge-column">
          <h3 className="column-name">Design</h3>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            className="knowledge-item"
          >
            <img src="icons/css.png" alt="" />
            <p className="item-name">Css</p>
          </a>
          <a
            href="https://sass-lang.com/documentation/"
            target="_blank"
            className="knowledge-item"
          >
            <img src="icons/sass.png" alt="" />
            <p className="item-name">Sass</p>
          </a>
          <a
            href="https://lesscss.org/"
            target="_blank"
            className="knowledge-item"
          >
            <img src="icons/less.png" alt="" />
            <p className="item-name">Less</p>
          </a>
        </div>
        <div className="knowledge-column">
          <h3 className="column-name">Behavior</h3>
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
            <img src="icons/react.png" alt="" />
            <p className="item-name">React.js</p>
          </a>
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            className="knowledge-item"
          >
            <img src="icons/next.png" alt="" />
            <p className="item-name">Next.js</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
