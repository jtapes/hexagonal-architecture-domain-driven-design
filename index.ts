import "./api";
import { ProductLoadCommand } from "./domain/product/ProductLoadCommand";
import { ProductLoadService } from "./servicies/product/ProductLoadService";
import { CartLoadService } from "./servicies/cart/CartLoadService";
import { CartAddService } from "./servicies/cart/CartAddService";
import { CartDeleteService } from "./servicies/cart/CartDeleteService";
import { CartListingEnitity } from "./domain/cart/entities/CartListingEnitity";

const productLoadService = new ProductLoadService();

const cardAddService = new CartAddService();
const cardDeleteService = new CartDeleteService();

const cardLoadService = new CartLoadService();

const command = new ProductLoadCommand(["2", "3"], "ru", "novosibirsk");
const productsListing = productLoadService.load(command);
console.log(productsListing.value);

// cards
let cards = cardLoadService.load();
console.log(cards);

// add products cards
console.log("add", cardAddService.add(["1", "2"]));
cards = cardLoadService.load();
console.log(cards.value);
if (cards.value instanceof CartListingEnitity) {
  console.log(cards.value.totalProductsPrice);
  console.log(cards.value.namesCardsLog);
}

// delete products cards
console.log("delete", cardDeleteService.delete(["1"]));
cards = cardLoadService.load();
console.log(cards);
