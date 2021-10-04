import { Selector, t } from 'testcafe'

class Cart {
	btnArrayDeleteItem: Selector

	constructor() {
		this.btnArrayDeleteItem = Selector('.item-x-button')
	}

	async deleteCustomProduct(t, index) {
		await t.click(this.btnArrayDeleteItem.nth(index))
	}
}

export default new Cart()
