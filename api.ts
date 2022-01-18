import { ProductEntities } from "./domain/entities/product/productEntities";
const cards = [];
const products = [
  {
    id: "1",
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
  products: products as any,
  cards: cards as any,
};
global.api = api;
