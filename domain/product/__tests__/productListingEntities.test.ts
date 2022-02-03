import { ProductListingMock } from "../../../application/mocks/ProductListingMock";

describe("Testing ProductListEntity", () => {
  test("get namesLog", () => {
    expect(ProductListingMock.namesLog === "snickers mars kinder").toBeTruthy();
  });
});
