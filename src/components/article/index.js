const Article = ({ title, text, theme, date, className }) => {
  return (
    <section className={`articles underlined-articles ${className ? className : ''}`}>
      <div className="article-items">
        <h2 className="article-title">{title}</h2>
        <p className="article-text">{text}</p>
        <div className="article-footer">
          <p className="article-theme">{theme}</p>
          <p className="article-date">{date}</p>
        </div>
      </div>
    </section>
  );
};

export default Article;