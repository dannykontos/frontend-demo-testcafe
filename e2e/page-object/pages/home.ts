import { Selector, t } from 'testcafe'
import Header from '../components/header'

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

	async stayOnPageOk(t) {
		await t
			.expect(Header.btnBurton.innerText)
			.eql(Header.txtButtonLabel)
			.click(this.btnStayOnThisSite)
	}
}

export default new Home()
