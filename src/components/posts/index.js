const Posts = () => {
  return (
    <div className="posts-container">
      <div className="posts-content">
        <div className="cat-articles">
          <p>Escrevo artigos para parecer inteligente</p>
        </div>
        <div className="posts-items">
          <a
            href="/posts/how-to-study-and-consume-programming-contents"
            className="post-item learning-border"
          >
            <h2>How To Study and Consume Programming Contents</h2>
            <p>
              We are learning or lying to ourselves? Stop of just watch content
              and became a better programmer. A reflection about practice and
              procrastination with tech content for jr developers.
            </p>
            <div className="post-footer">
              <p id="learning-color">Learning</p>
              <p className="post-date">11/14/23</p>
            </div>
          </a>
          <a href="#" className="post-item">
            <h2>Título</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              assumenda, quaerat accusantium fuga consectetur voluptatibus aut
              itaque delectus minus sapiente eum qui nam, possimus nesciunt?
              Voluptas ipsa dolores commodi quod?
            </p>
            <div className="post-footer">
              <p className="css-color">CSS</p>
              <p className="post-date">11/12/23</p>
            </div>
          </a>
          <a href="#" className="post-item">
            <h2>Título</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              assumenda, quaerat accusantium fuga consectetur voluptatibus aut
              itaque delectus minus sapiente eum qui nam, possimus nesciunt?
              Voluptas ipsa dolores commodi quod?
            </p>
            <div className="post-footer">
              <p className="post-theme">CSS</p>
              <p className="post-date">11/12/23</p>
            </div>
          </a>
          <a href="#" className="post-item">
            <h2>Título</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              assumenda, quaerat accusantium fuga consectetur voluptatibus aut
              itaque delectus minus sapiente eum qui nam, possimus nesciunt?
              Voluptas ipsa dolores commodi quod?
            </p>
            <div className="post-footer">
              <p className="post-theme">CSS</p>
              <p className="post-date">11/12/23</p>
            </div>
          </a>
          <a href="#" className="post-item">
            <h2>Título</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              assumenda, quaerat accusantium fuga consectetur voluptatibus aut
              itaque delectus minus sapiente eum qui nam, possimus nesciunt?
              Voluptas ipsa dolores commodi quod?
            </p>
            <div className="post-footer">
              <p className="post-theme">CSS</p>
              <p className="post-date">11/12/23</p>
            </div>
          </a>
        </div>
        <div className="cat-articles">
          <p>Espero que tenha funcionado</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
