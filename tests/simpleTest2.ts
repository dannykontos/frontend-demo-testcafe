import { t } from "testcafe";
import { ui5, ui5Fixture, ui5Test } from "ui5-testcafe-selector-utils";
import productDemo from "../pages/productDemo2";

ui5Fixture("Shop-App", "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/index.html?sap-ui-theme=sap_fiori_3");

ui5Test('Create and Order Shopping-Cart', async u => {
    //add HT-1035 to shopping-cart
    await productDemo.addToShoppingCart("Flat Basic", "HT-1035");
})