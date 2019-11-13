import { Component } from "react";

export default class GotService extends Component {
  constructor(props) {
    super(props);
    this._apiBase = "https://www.anapioficeandfire.com/api";
    this.getResource = this.getResource.bind(this);
  }
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could no fetch ${url} status: ${res.status}`);
    }
    return await res.json();
  }
  async getCharacter(id) {
    const character = await this.getResource(`/characters/${id}`);
    return this._transformCharacters(character);
  }
  _transformCharacters(char) {
    const index = char.url.length - 2;
    return {
      name: char.name,
      gender: char.gender,
      born: char.born,
      died: char.died,
      culture: char.culture,
      id: char.url.slice(index)
    };
  }
  async getAllCharacters() {
    const res = await this.getResource("/characters?page=2&pageSize=10");
    return res.map(this._transformCharacters);
  }
  getAllBooks() {
    return this.getResource("/books");
  }
  _transformBooks(book) {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publiser: book.publiser,
      released: book.released
    };
  }
  getAllHouses() {
    return this.getResource("/houses");
  }
  _transformHouses(house) {
    return {
      name: house.name,
      region: house.region,
      words: house.words,
      titles: house.titles,
      overload: house.overload,
      ancestralWeapons: house.ancestralWeapons
    };
  }
}
