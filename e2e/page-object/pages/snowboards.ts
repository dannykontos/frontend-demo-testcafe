import { Selector, t } from 'testcafe'

class Snowboards {
	btnArrayProducts: Selector

	constructor() {
		this.btnArrayProducts = Selector('.product-image-picture')
	}
}

export default new Snowboards()
