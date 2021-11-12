import { Selector, t } from 'testcafe'

class Cart {

    readonly detailPage = {
        addToCartButton: Selector('.item-x-button'),
        navtoCartButton: Selector('.item-x-button')
    }

	btnArrayDeleteItem: Selector

	constructor() {
		this.btnArrayDeleteItem = Selector('.item-x-button')
	}

	async deleteCustomProduct(t, index) {
		await t.click(this.btnArrayDeleteItem.nth(index))
	}
}

export default new Cart()
