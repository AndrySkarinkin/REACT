import React, { Component } from "react";
import "./CoffeeShop.sass";
import CoffeeItem from "../coffee-item/CoffeeItem";
import Spinner from "../spinner/spinner";
import Error from "../../components/error/Error";
import WithService from "../../hoc/hoc";
import { connect } from "react-redux";
import { dataLoaded, dataRequsted, dataError } from "../../actions/actions";

class CoffeeShop extends Component {
  componentDidMount() {
    this.props.dataRequsted();
    const { Service, urlTitle } = this.props;
    Service.getItems(urlTitle)
      .then(res => this.props.dataLoaded(res))
      .catch(() => this.props.dataError());
  }

  render() {
    const {
      data,
      loading,
      error,
      background,
      sectionTitle,
      urlTitle,
      pageTitle
    } = this.props;
    if (error) {
      return <Error />;
    }
    if (loading) {
      return <Spinner />;
    }

    return (
      <div
        style={{
          background: `url(${background}) center center/cover no-repeat`
        }}
        className="list-wrap"
      >
        <h1 className="main-title">{sectionTitle}</h1>
        <div className="list">
          {data.map((item, num) => (
            <CoffeeItem
              key={num}
              item={item}
              link={urlTitle}
              pageTitle={pageTitle}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading,
    error: state.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dataLoaded: newData => {
      dispatch(dataLoaded(newData));
    },
    dataRequsted: () => dispatch(dataRequsted()),
    dataError: () => dispatch(dataError())
  };
};
export default WithService()(
  connect(mapStateToProps, mapDispatchToProps)(CoffeeShop)
);
