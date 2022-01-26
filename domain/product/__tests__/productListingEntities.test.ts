import { ProductListingMock } from "../../../application/mocks/ProductListingMock";

describe("Testing ProductListEntity", () => {
  test("get namesLog", () => {
    console.log(ProductListingMock.namesLog);
    expect(ProductListingMock.namesLog === "snickers mars kinder").toBeTruthy();
  });
});
