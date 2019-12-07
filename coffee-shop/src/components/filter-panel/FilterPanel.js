/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import "./FilterPanel.sass";
import WithService from "../../hoc/hoc";
import { filterItems, dataLoaded, dataRequsted } from "../../actions/actions";
import { connect } from "react-redux";

class FilterPanel extends Component {
  async getData() {
    this.props.dataRequsted();
    const { Service } = this.props;
    await Service.getItems("coffee")
      .then(res => this.props.dataLoaded(res))
      .catch(() => this.props.dataError());
  }

  addActiveClass(e) {
    e.currentTarget.childNodes.forEach(el => {
      if (el.classList.contains("filter-active")) {
        el.classList.remove("filter-active");
      }
    });
    e.target.classList.add("filter-active");
  }

  render() {
    return (
      <div className="filter-wrap">
        <div className="filter-title">Or filter</div>
        <div className="filter-check" onClick={e => this.addActiveClass(e)}>
          <div
            onClick={async () => {
              await this.getData();
              this.props.filter("Brazil");
            }}
            className="filter-check-item"
          >
            Brazil
          </div>
          <div
            onClick={async () => {
              await this.getData();
              this.props.filter("Kenya");
            }}
            className="filter-check-item"
          >
            Kenya
          </div>
          <div
            onClick={async () => {
              await this.getData();
              this.props.filter("Columbia");
            }}
            className="filter-check-item"
          >
            Columbia
          </div>
          <div onClick={() => this.getData()} className="filter-check-item">
            All
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dataLoaded: newData => {
      dispatch(dataLoaded(newData));
    },
    filter: items => dispatch(filterItems(items)),
    dataRequsted: () => dispatch(dataRequsted())
  };
};

export default WithService()(
  connect(mapStateToProps, mapDispatchToProps)(FilterPanel)
);
