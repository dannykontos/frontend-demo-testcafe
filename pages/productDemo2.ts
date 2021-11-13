import { ui5, ui5Action } from "ui5-testcafe-selector-utils";

class ProductDemo {

  readonly masterPage = {
    searchfield: ui5().id("homeView--searchField"),
    //productList: ui5().id("homeView--productList"),
    productCatList: ui5().id("homeView--categoryList"),
    listEntry(productId: string) {
      return ui5().listItem().context("ProductId", productId);
    },
  };

  readonly detailPage = {
    addToCartButton: ui5().button().bindingPath('text', 'i18n>addToCartShort').parentId('product'),
    //navtoCartButton: ui5().element('sap.m.ToggleButton').property('icon', 'sap-icon://cart').parentId('product')
}

  async addToShoppingCart(productDescr: string, productId: string) {
    await ui5Action
      .expect(this.masterPage.productCatList)
      .tableLength()
      .greater(0, "Initially the product-list must be filled");
    await ui5Action
      .typeText(this.masterPage.searchfield, "Flat Basic", { replace: true })
      .click(this.masterPage.listEntry("HT-1036"))
      .click(this.detailPage.addToCartButton);
  }
}

export default new ProductDemo();
