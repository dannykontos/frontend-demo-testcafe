import { Selector, t } from 'testcafe'

class Cart {
	btnArrayDeleteItem: Selector

	constructor() {
		this.btnArrayDeleteItem = Selector('.item-x-button')
	}
}

export default new Cart()
