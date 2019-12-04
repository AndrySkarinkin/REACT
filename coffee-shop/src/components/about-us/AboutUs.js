import React from "react";
import aboutLogo from "../../logo/Beans_logo_dark.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./AboutUs.sass";

/* let key = 0;

function incKey(key) {
  return ++key;
} */

const Item = ({ text }) => {
  return <div>{text}</div>;
};

const TwoItem = ({ img, alt }) => {
  return (
    <div className="col-lg-4 offset-2 ">
      <img className="shop__girl" src={img} alt={alt}></img>
    </div>
  );
};

const AboutUs = ({ title, img, text }) => {
  const alt = img ? title : null;
  const content = img ? <TwoItem img={img} alt={alt} /> : null;
  const clas = img ? "col-lg-4" : "col-lg-6 position";
  const classLine = img ? "line" : "empty";
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          {content}
          <div className={clas}>
            <div className="title">{title}</div>
            <img className="beanslogo" src={aboutLogo} alt="Beans logo"></img>
            <div className="shop-text">
              {text.map((el, num) => {
                return (
                  <div key={num}>
                    <Item text={el} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={classLine}></div>
      </div>
    </section>
  );
};

export default AboutUs;
