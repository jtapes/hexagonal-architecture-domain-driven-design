import { productListingMock } from "../../../mocks/ProductListingMock";

describe("Testing ProductListingEnitity", () => {
  test("get namesCardsLog", () => {
    console.log(productListingMock.namesCardsLog);
    expect(
      productListingMock.namesCardsLog === "snikers mars kinder"
    ).toBeTruthy();
  });
});
