const cards = [];
const products = [
  {
    id: "123423423",
    title: "mars",
    price: 60,
  },
  {
    id: "2",
    title: "mars",
    price: 80,
  },
  {
    id: "3",
    title: "kinder",
    price: 120,
  },
];
const api = {
  products,
  cards,
};

declare module NodeJS {
  interface Process {
    api;
  }
}

process.api = api;
