import { Selector, t } from 'testcafe'

class Home {

	btnStayOnThisSite: Selector
	inputSearchbox: Selector

	constructor() {
		this.btnStayOnThisSite = Selector('.stay-on-this-site')
		this.inputSearchbox = Selector('#search')
	}

    async searchCustomText(t, categoryName) {
		await t
		.click(this.inputSearchbox)
		.typeText(this.inputSearchbox, categoryName)
		.pressKey('Enter')
	}
}

export default new Home()
