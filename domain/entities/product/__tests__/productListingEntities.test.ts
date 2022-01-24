import { productListingMock } from "../../../../mocks/productListingMock";

describe("Testing ProductListingEntities", () => {
  test("get namesCardsLog", () => {
    console.log(productListingMock.namesCardsLog);
    expect(
      productListingMock.namesCardsLog === "snikers mars kinder"
    ).toBeTruthy();
  });
});
