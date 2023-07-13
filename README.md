<h3 align="center"><strong>Generate random stuff with a huge database.</strong></h3>
<center><strong>Powered by <a href="https://waifu.it/" target="_blank">Waifu.it</a></strong></center>
<br>

Need support? _[Click here](https://discord.gg/yyW389c)_

### First make sure you have a [Waifu.it](https://waifu.it/) API Token. Join _[this](https://discord.gg/yyW389c)_ discord server to get one.

## Installation:

### NPM

```bash
$ npm install waifu.it
```

### YARN

```bash
$ yarn add waifu.it
```                                                                                                                                                                                

## Usage:

```javascript
const Client = require("waifu.it");
const api = new Client("YOUR TOKEN");

api.getFact().then((res) => console.log(res));

// Returns with:
{
  id: 5,
  fact: 'TEZUKA Osamu is the most famous manga artist in Japan.',
}
```


## Functions

| **Functions** | **Description**              |
| :-----------: | ---------------------------- |
|    getFact    | Generate random anime facts. |
|    getWaifu   | Generate random anime waifu. |
|    getQuote   | Generate anime quote.        |



