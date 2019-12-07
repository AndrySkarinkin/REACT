import React, { Component } from "react";
import "./pleasure.sass";
import Header from "../../components/header/header";
import AboutUs from "../../components/about-us/AboutUs";
import CoffeShop from "../../components/coffee-shop/CoffeShop";
import Footer from "../../components/footer/footer";
import Error from "../../components/error/Error";
import img from "../../img/cup.png";

class Pleasure extends Component {
  state = { error: false };

  componentDidCatch() {
    this.setState({ error: true });
  }
  render() {
    if (this.state.error) {
      return <Error />;
    }
    return (
      <div>
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Header />
              </div>
            </div>
            <h1 className="title-big">For your pleasure</h1>
          </div>
        </div>
        <AboutUs
          title="About our goods"
          img={img}
          text={[
            "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.",
            <br></br>,
            "Afraid at highly months do things on at. Situation recommend objection do intention so questions.",
            "As greatly removed calling pleased improve an. Last ask him cold feel",
            "met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face."
          ]}
        />
        <CoffeShop background={null} urlTitle={"coffee"} />
        <Footer />
      </div>
    );
  }
}

export default Pleasure;
