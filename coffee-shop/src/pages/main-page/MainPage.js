import React, { Component } from "react";
import Header from "../../components/header/header";
import MainScreen from "../../components/main-screen/main-screen";
import AboutUs from "../../components/about-us/AboutUs";
import Footer from "../../components/footer/footer";
import CoffeShop from "../../components/coffee-shop/CoffeShop.js";
import Error from "../../components/error/Error";
import "../main-page/MainPage.sass";
import mainBg from "../../img/paper.jpg";

class MainPage extends Component {
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
        <div className="preview">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <Header />
              </div>
            </div>
            <MainScreen />
          </div>
        </div>

        <AboutUs
          title="About us"
          img={null}
          text={[
            "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at.Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
            <br></br>,
            "Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend sonrepair day ladies now."
          ]}
        />
        <CoffeShop
          background={mainBg}
          urlTitle={"bestsellers"}
          sectionTitle={"Our best"}
        />

        <Footer />
      </div>
    );
  }
}

export default MainPage;
