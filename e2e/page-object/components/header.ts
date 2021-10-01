import { Selector, t } from 'testcafe'

class Header {
	btnBurton: Selector
	txtButtonLabel: string
	txtCartCount: Selector

	constructor() {
		this.btnBurton = Selector('.brtn-link-wrap')
		this.txtButtonLabel = 'BURTON'
		this.txtCartCount = Selector('.js-amount')
	}
}
export default new Header()
