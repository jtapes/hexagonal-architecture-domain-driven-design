import "./api";
import { ProductLoadAdapter } from "./adapters/product/ProductLoad";
import { CardAddAdapter } from "./adapters/card/CardAddAdapter";
import { LoadProductCommand } from "./domain/commands/product/LoadProductCommand";
import { CardLoadAdapter } from "./adapters/card/CardLoadAdapter";
import { CardDeleteAdapter } from "./adapters/card/CardDeleteAdapter";
import { ProductLoadService } from "./domain/servicies/product/ProductLoadService";
import { CardLoadService } from "./domain/servicies/card/CardLoadService";
import { CardAddService } from "./domain/servicies/card/CardAddService";
import { CardDeleteService } from "./domain/servicies/card/CardDeleteService";

const productLoadAdapter = new ProductLoadAdapter();
const productService = new ProductLoadService(productLoadAdapter);

const cardAddAdapter = new CardAddAdapter();
const cardAddService = new CardAddService(cardAddAdapter);
const cardDeleteAdapter = new CardDeleteAdapter();
const cardDeleteService = new CardDeleteService(cardDeleteAdapter);

const cardLoadAdapter = new CardLoadAdapter();
const cardLoadService = new CardLoadService(cardLoadAdapter);

const command = new LoadProductCommand(["2", "3"], "ru", "novosibirsk");
const productsListing = productService.load(command);
console.log(productsListing);

// cards
let cards = cardLoadService.load();
console.log(cards);

// add products cards
console.log("add", cardAddService.add(["1", "2"]));
cards = cardLoadService.load();
console.log(cards);
console.log(cards.totalProductsPrice);
console.log(cards.namesCardsLog);

// delete products cards
console.log("delete", cardDeleteService.delete(["1"]));
cards = cardLoadService.load();
console.log(cards);
