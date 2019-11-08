import { Component } from "react";

export default class GotService extends Component {
  constructor(props) {
    super(props);
    this._apiBase = "https://www.anapioficeandfire.com/api";
  }
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could no fetch ${url} status: ${res.status}`);
    }
    return await res.json();
  }

  getAllCharacters() {
    return this.getResource("/characters");
  }
  getAllBooks() {
    return this.getResource("/books");
  }
  getAllHouses() {
    return this.getResource("/houses");
  }
}

const got = new GotService();

got.getAllCharacters().then(result => {
  console.log("Characters is:");
  console.log(result);
});
got.getAllBooks().then(result => {
  console.log("Books is:");
  console.log(result);
});
got.getAllHouses().then(result => {
  console.log("Houses is:");
  console.log(result);
});
