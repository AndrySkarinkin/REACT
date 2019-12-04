import React from "react";
import "./OurCoffee.sass";
import Header from "../../components/header/header";
import AboutUs from "../../components/about-us/AboutUs";
import Footer from "../../components/footer/footer";
import img from "../../img/coffee_girl.jpg";

const OurCoffee = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Header />
            </div>
          </div>
          <h1 className="title-big">Our Coffee</h1>
        </div>
      </div>
      <AboutUs
        title="About our beans"
        img={img}
        text={[
          "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.",
          <br></br>,
          "Afraid at highly months do things on at. Situation recommend objection do intention so questions. <",
          "As greatly removed calling pleased improve an. Last ask him cold feel met",
          <p></p>,
          "spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face."
        ]}
      />
      <Footer />
    </div>
  );
};

export default OurCoffee;
