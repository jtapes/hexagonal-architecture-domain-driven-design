import "./api";
import { ProductLoadCommand } from "./domain/product/ProductLoadCommand";
import { ProductLoadService } from "./application/servicies/product/ProductLoadService";
import { CartLoadService } from "./application/servicies/cart/CartLoadService";
import { CartAddService } from "./application/servicies/cart/CartAddService";
import { CartDeleteService } from "./application/servicies/cart/CartDeleteService";
import { CartListEntity } from "./domain/cart/entities/CartListEntity";

const productLoadService = new ProductLoadService();

const cardAddService = new CartAddService();
const cardDeleteService = new CartDeleteService();

const cardLoadService = new CartLoadService();

const productsListing = productLoadService.load(["2", "3"]);
console.log(productsListing.value);

// cards
let cards = cardLoadService.load();
console.log(cards);

// add products cards
console.log("add", cardAddService.add(["1", "2"]));
cards = cardLoadService.load();
console.log(cards.value);
if (cards.value instanceof CartListEntity) {
  console.log(cards.value.totalProductsPrice);
  console.log(cards.value.namesLog);
}

// delete products cards
console.log("delete", cardDeleteService.delete(["1"]));
cards = cardLoadService.load();
console.log(cards);
