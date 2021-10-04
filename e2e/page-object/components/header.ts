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
	async checkCartValue(t, count) {
		await t.expect(this.txtCartCount.innerText).eql(String(count))
	}
}

export default new Header()
