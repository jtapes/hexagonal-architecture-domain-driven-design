import "./api";
import { ProductLoadAdapter } from "./adapters/product/ProductLoad";
import { CardAddAdapter } from "./adapters/card/CardAddAdapter";
import { LoadProductCommand } from "./domain/commands/product/LoadProductCommand";
import { CardLoadAdapter } from "./adapters/card/CardLoadAdapter";
import { CardDeleteAdapter } from "./adapters/card/CardDeleteAdapter";
import { ProductLoadService } from "./servicies/product/ProductLoadService";
import { CardLoadService } from "./servicies/card/CardLoadService";
import { CardAddService } from "./servicies/card/CardAddService";
import { CardDeleteService } from "./servicies/card/CardDeleteService";
import { CardListingEntities } from "./domain/entities/card/CardListingEntities";

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
console.log(productsListing.value);

// cards
let cards = cardLoadService.load();
console.log(cards);

// add products cards
console.log("add", cardAddService.add(["1", "2"]));
cards = cardLoadService.load();
console.log(cards.value);
if (cards.value instanceof CardListingEntities) {
  console.log(cards.value.totalProductsPrice);
  console.log(cards.value.namesCardsLog);
}

// delete products cards
console.log("delete", cardDeleteService.delete(["1"]));
cards = cardLoadService.load();
console.log(cards);
