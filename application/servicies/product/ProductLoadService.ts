import { ProductLoadQuery } from "../../../domain/product/ProductLoadQuery";
import { ProductLoadCommand } from "../../../domain/product/ProductLoadCommand";
import { ProductLoadAdapter } from "../../adapters/product/ProductLoad";
import { ProductId } from "../../../domain/product/ProductEntity";

export class ProductLoadService implements ProductLoadQuery {
  productLoadPort = new ProductLoadAdapter();

  localization() {
    // @ts-ignore mock
    global.navigator = {
      language: "en-EN",
    };
    const userLang = navigator.language;
    switch (userLang) {
      case "ru-RU":
        return "ru";
      case "en-EN":
        return "en";
      default:
        return "ru";
    }
  }

  load(ids: ProductId[]) {
    const command = new ProductLoadCommand(ids, this.localization());
    return this.productLoadPort.load(command);
  }
}
