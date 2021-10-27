//@ts-nocheck

// NPM packages
import { Link } from "react-router-dom";

// Project files
import heroImage from "assets/home/hero-image.png";
import articles from "assets/home/articles.json";

const Articles = articles.map((item) => {
  const imgPath = require("assets/home/" + item.imageURL);
  return (
    <article key={item.imageURL}>
      <img src={imgPath.default} alt="kid" className="article-image" />

      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </article>
  );
});

export default function Landing() {
  return (
    <div className="page-landing">
      <section id="hero">
        <div className="grid">
          <img src={heroImage} alt="" />

          <div className="content">
            <div className="title">
              <strong>
                The Secret to <span>Parenting</span>
                <br />
                Babies to Understand
              </strong>
              <br />

              <small>
                We understand the hardships of traditional Parenting counseling,
                and offer a better choice. At Bliss we are determined to show
                you the quick & easy way to a loving relationship.
              </small>
            </div>
            <div className="flexbox"></div>

            <div className="buttons">
              <Link className="btn btn-main btn-signup" to="/signup">
                <h4>sign up</h4>
              </Link>
              <Link className="btn btn-ghost btn-login" to="/login">
                <h4>login</h4>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="articles">
        <div className="article-masonry">{Articles}</div>
      </section>
    </div>
  );
}
