import React, { Component } from "react";
import "./OurCoffee.sass";
import Header from "../../components/header/header";
import AboutUs from "../../components/about-us/AboutUs";
import FilterPanel from "../../components/filter-panel/FilterPanel";
import SearchPanel from "../../components/search-panel/SearchPanel";
import CoffeShop from "../../components/coffee-shop/CoffeShop";
import Footer from "../../components/footer/footer";
import Error from "../../components/error/Error";
import img from "../../img/coffee_girl.jpg";

class OurCoffe extends Component {
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

        <div className="serching-panel">
          <SearchPanel />
          <FilterPanel />
        </div>
        <CoffeShop
          background={null}
          urlTitle={"coffee"}
          pageTitle="our-coffee/"
        />
        <Footer />
      </div>
    );
  }
}

export default OurCoffe;
