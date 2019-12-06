export default class Service {
  _apiBase = "http://localhost:3000/";
  async getItems(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could no fetch ${url} received ${res.status}`);
    }
    return await res.json();
  }
}
