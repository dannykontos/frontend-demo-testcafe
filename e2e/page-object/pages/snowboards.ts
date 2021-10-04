import { Selector, t } from 'testcafe'

class Snowboards {
	btnArrayOfProducts: Selector

	constructor() {
		this.btnArrayOfProducts = Selector('.product-image-picture')
	}

	async selectCustomProduct(t, index) {
		await t.click(this.btnArrayOfProducts.nth(index))
	}
}
export default new Snowboards()
