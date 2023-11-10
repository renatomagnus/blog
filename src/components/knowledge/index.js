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
          <div className="knowledge-item">
            <img src="icons/html.png" alt="" />
            <p className="item-name">Html</p>
          </div>
        </div>
        <div className="knowledge-column">
          <h3 className="column-name">Design</h3>
          <div className="knowledge-item">
            <img src="icons/css.png" alt="" />
            <p className="item-name">Css</p>
          </div>
          <div className="knowledge-item">
            <img src="icons/sass.png" alt="" />
            <p className="item-name">Sass</p>
          </div>
          <div className="knowledge-item">
            <img src="icons/less.png" alt="" />
            <p className="item-name">Less</p>
          </div>
        </div>
        <div className="knowledge-column">
          <h3 className="column-name">Behavior</h3>
          <div className="knowledge-item">
            <img className="scale08" src="/icons/javascript.png" alt="" />
            <p className="item-name">JavaScript</p>
          </div>
          <div className="knowledge-item">
            <img src="icons/react.png" alt="" />
            <p className="item-name">React.js</p>
          </div>
          <div className="knowledge-item">
            <img src="icons/next.png" alt="" />
            <p className="item-name">Next.js</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
