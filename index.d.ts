import EventEmitter from "eventemitter3";

declare module './package.json' {
  interface PackageJson {
    baseurl: string;
  }

  const packageJson: PackageJson;
  export = packageJson;
}

declare class Client extends EventEmitter {
  constructor(auth?: string);

  getFact(): Promise<Fact>;
  getWaifu(): Promise<Waifu>;
  getQuote(): Promise<Quote>;
}

interface Fact {
  id: number;
  fact: string;
}

interface Waifu {
  _id: number;
  images: string[];
  names: {
    en: string;
    jp: string;
    alt: string | null;
  };
  from: {
    name: string;
    type: string;
  };
  statistics: {
    fav: number;
    love: number;
    hate: number;
    upvote: number;
    downvote: number;
  };
}

interface Quote {
  id: number;
  quote: string;
  anime: string;
  author: string
}


export = Client;
