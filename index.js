const EventEmitter = require("events");
const fetch = require("phin");
const { baseurl } = require("./package.json");

class Client extends EventEmitter {
  /**
   * Represents the main client class.
   * @param {string} [auth] - The authorization token.
   */
  constructor(auth) {
    super();
    this._auth = auth;
  }

  /**
   * Retrieves a fact from the API.
   * @returns {Promise<Fact>} - A promise that resolves to a fact object.
   * @throws {TypeError} - If the authorization token is missing.
   */
  async getFact() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/fact`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    const response = await fetch(requestOptions);
    if (response.statusCode !== 200) {
      switch (response.statusCode) {
        case 404:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Could not find any fact",
          };
        case 502:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Server down",
          };
        default:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Unknown error",
          };
      }
    }

    return {
      id: response.body._id,
      fact: response.body.fact,
    };
  }

  /**
   * Retrieves a waifu from the API.
   * @returns {Promise<Waifu>} - A promise that resolves to a waifu object.
   * @throws {TypeError} - If the authorization token is missing.
   */
  async getWaifu() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/waifu`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    const response = await fetch(requestOptions);
    if (response.statusCode !== 200) {
      switch (response.statusCode) {
        case 404:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Could not find any waifu",
          };
        case 502:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Server down",
          };
        default:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Unknown error",
          };
      }
    }

    return response.body;
  }

  /**
   * Retrieves a quote from the API.
   * @returns {Promise<Waifu>} - A promise that resolves to a quote object.
   * @throws {TypeError} - If the authorization token is missing.
   */
  async getQuote() {
    if (!this._auth) {
      throw new TypeError("Missing authorization token");
    }

    const requestOptions = {
      url: `${baseurl}/quote`,
      headers: {
        Authorization: this._auth,
        "Content-Type": "application/json",
      },
      parse: "json",
    };

    const response = await fetch(requestOptions);
    if (response.statusCode !== 200) {
      switch (response.statusCode) {
        case 404:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Could not find any quote",
          };
        case 502:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Server down",
          };
        default:
          return {
            statusCode: response.statusCode,
            body: response.body,
            error: "Unknown error",
          };
      }
    }

    return {
      id: response.body._id,
      quote: response.body.quote,
      anime: response.body.anime,
      author: response.body.author,
    };
  }
}

module.exports = Client;

/**
 * @typedef {object} Fact - Represents a fact object.
 * @property {number} id - The fact ID.
 * @property {string} fact - The fact itself.
 * @typedef {object} Quote - Represents a fact object.
 * @property {number} id - The fact ID.
 * @property {string} quote - The fact itself.
 * @property {string} anime - The anime from where the character is from.
 * @property {string} author - The author of the quote.
 */
