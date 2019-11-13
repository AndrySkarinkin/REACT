import React, { Component } from "react";
import GotService from "../../services/gotServices";
import Spinner from "../spinner/spinner";
import "./charDetails.css";
export default class CharDetails extends Component {
  gotService = new GotService();
  state = {
    char: null,
    loading: true
  };
  componentWillMount() {
    console.log("will mount");
  }
  componentDidMount() {
    this.updateChar();
  }
  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
      console.log("update");
    }
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  updateChar() {
    const { charId } = this.props;
    const { loading } = this.state;
    if (!charId) {
      return;
    }
    this.gotService.getCharacter(charId).then(char => {
      this.setState({ char, loading: false });
    });
  }
  render() {
    if (this.state.loading === true) {
      return <Spinner />;
    }
    if (this.state.updateState) {
      return <Spinner />;
    }
    if (!this.state.char) {
      return <span className="select-error">Please select a character</span>;
    }

    const { name, gender, born, died, culture } = this.state.char;
    return (
      <div className="char-details rounded">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Born</span>
            <span>{born}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Died</span>
            <span>{died}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span className="term">Culture</span>
            <span>{culture}</span>
          </li>
        </ul>
      </div>
    );
  }
}
