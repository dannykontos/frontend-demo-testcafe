import { Selector, t } from 'testcafe'

class ProductDetails {
	btnAddToCart: Selector
	btnContinueShopingInModal: Selector

	constructor() {
		this.btnAddToCart = Selector('.add-to-cart-btn').withAttribute(
			'title',
			'Add to Cart'
		)
		this.btnContinueShopingInModal = Selector('.btn-secondary')
	}
	async addProductToCart(t) {
		await t
			.click(this.btnAddToCart.nth(1))
			.click(this.btnContinueShopingInModal)
	}
}

export default new ProductDetails()
