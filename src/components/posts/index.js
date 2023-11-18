import { useTranslation } from 'next-i18next'

const Posts = () => {
  const { t, i18n } = useTranslation('common')

  return (
    <div className="posts-container">
      <div className="posts-content">
        <div className="cat-articles">
          <p>{t("posts.phrase")}</p>
        </div>
        <div className="posts-items">
          <a
            href={`/${i18n.languages?.[0]}/posts/how-to-study-and-consume-programming-contents`}
            className="post-item learning-border"
          >
            <h2>{t("posts.title1")}</h2>
            <p>
            {t("posts.text1")}
            </p>
            <div className="post-footer">
              <p id="learning-color">{t("posts.category1")}</p>
              <p className="post-date">{t("posts.date1")}</p>
            </div>
          </a>
          <a
            href={`/${i18n.languages?.[0]}/posts/dont-use-css`}
            className="post-item css-border"
          >
            <h2>{t("posts.title2")}</h2>
            <p>
            {t("posts.text2")}
            </p>
            <div className="post-footer">
              <p id="css-color">{t("posts.category2")}</p>
              <p className="post-date">{t("posts.date2")}</p>
            </div>
          </a>
          <a
            href="/posts/how-to-study-and-consume-programming-contents"
            className="post-item learning-border"
          >
            <h2>{t("posts.title1")}</h2>
            <p>
            {t("posts.text1")}
            </p>
            <div className="post-footer">
              <p id="learning-color">{t("posts.category1")}</p>
              <p className="post-date">{t("posts.date1")}</p>
            </div>
          </a>
          <a
            href="/posts/how-to-study-and-consume-programming-contents"
            className="post-item learning-border"
          >
            <h2>{t("posts.title1")}</h2>
            <p>
            {t("posts.text1")}
            </p>
            <div className="post-footer">
              <p id="learning-color">{t("posts.category1")}</p>
              <p className="post-date">{t("posts.date1")}</p>
            </div>
          </a>
          <a
            href="/posts/how-to-study-and-consume-programming-contents"
            className="post-item learning-border"
          >
            <h2>{t("posts.title1")}</h2>
            <p>
            {t("posts.text1")}
            </p>
            <div className="post-footer">
              <p id="learning-color">{t("posts.category1")}</p>
              <p className="post-date">{t("posts.date1")}</p>
            </div>
          </a>
          <a
            href="/posts/how-to-study-and-consume-programming-contents"
            className="post-item learning-border"
          >
            <h2>{t("posts.title1")}</h2>
            <p>
            {t("posts.text1")}
            </p>
            <div className="post-footer">
              <p id="learning-color">{t("posts.category1")}</p>
              <p className="post-date">{t("posts.date1")}</p>
            </div>
          </a>
          <a
            href="/posts/how-to-study-and-consume-programming-contents"
            className="post-item learning-border"
          >
            <h2>{t("posts.title1")}</h2>
            <p>
            {t("posts.text1")}
            </p>
            <div className="post-footer">
              <p id="learning-color">{t("posts.category1")}</p>
              <p className="post-date">{t("posts.date1")}</p>
            </div>
          </a>
          <a
            href="/posts/how-to-study-and-consume-programming-contents"
            className="post-item learning-border"
          >
            <h2>{t("posts.title1")}</h2>
            <p>
            {t("posts.text1")}
            </p>
            <div className="post-footer">
              <p id="learning-color">{t("posts.category1")}</p>
              <p className="post-date">{t("posts.date1")}</p>
            </div>
          </a>
          <a
            href="/posts/how-to-study-and-consume-programming-contents"
            className="post-item learning-border"
          >
            <h2>{t("posts.title1")}</h2>
            <p>
            {t("posts.text1")}
            </p>
            <div className="post-footer">
              <p id="learning-color">{t("posts.category1")}</p>
              <p className="post-date">{t("posts.date1")}</p>
            </div>
          </a>
          <a
            href="/posts/how-to-study-and-consume-programming-contents"
            className="post-item learning-border"
          >
            <h2>{t("posts.title1")}</h2>
            <p>
            {t("posts.text1")}
            </p>
            <div className="post-footer">
              <p id="learning-color">{t("posts.category1")}</p>
              <p className="post-date">{t("posts.date1")}</p>
            </div>
          </a>
        </div>
        <div className="cat-articles">
          <p>{t("posts.phrase2")}</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
