import "./api";
import { ProductLoadAdapter } from "./adapters/product/ProductLoad";
import { CartAddAdapter } from "./adapters/card/CartAddAdapter";
import { ProductLoadCommand } from "./domain/product/ProductLoadCommand";
import { CartLoadAdapter } from "./adapters/card/CartLoadAdapter";
import { CartDeleteAdapter } from "./adapters/card/CartDeleteAdapter";
import { ProductLoadService } from "./domain/product/ProductLoadService";
import { CartLoadService } from "./domain/cart/servicies/CartLoadService";
import { CartAddService } from "./domain/cart/servicies/CartAddService";
import { CartDeleteService } from "./domain/cart/servicies/CartDeleteService";
import { CartListingEnitity } from "./domain/cart/entities/CartListingEnitity";

const productLoadAdapter = new ProductLoadAdapter();
const productService = new ProductLoadService(productLoadAdapter);

const cardAddAdapter = new CartAddAdapter();
const cardAddService = new CartAddService(cardAddAdapter);
const cardDeleteAdapter = new CartDeleteAdapter();
const cardDeleteService = new CartDeleteService(cardDeleteAdapter);

const cardLoadAdapter = new CartLoadAdapter();
const cardLoadService = new CartLoadService(cardLoadAdapter);

const command = new ProductLoadCommand(["2", "3"], "ru", "novosibirsk");
const productsListing = productService.load(command);
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
