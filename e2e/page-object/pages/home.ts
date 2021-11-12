import { Selector, t } from 'testcafe'
import Header from '../components/header'

class Home {
	readonly homePage = {
		btnStayOnThisSite: Selector('.stay-on-this-site'),
		inputSearchbox: Selector('#search'),
		async searchCustomText(categoryName: string) {
			await t
				.click(this.inputSearchbox)
				.typeText(this.inputSearchbox, categoryName)
				.pressKey('Enter')
		},
		async stayOnPageOk(t: { expect: (arg0: Promise<string>) => { (): any; new(): any; eql: { (arg0: string): { (): any; new(): any; click: { (arg0: any): any; new(): any } }; new(): any } } }) {
			await t
				.expect(Header.btnBurton.innerText)
				.eql(Header.txtButtonLabel)
				.click(this.btnStayOnThisSite)
		},
	}

	btnStayOnThisSite: Selector
	inputSearchbox: Selector

	constructor() {
		this.btnStayOnThisSite = Selector('.stay-on-this-site')
		this.inputSearchbox = Selector('#search')
	}

	async searchCustomText(t: TestController, categoryName: string) {
		await t
			.click(this.inputSearchbox)
			.typeText(this.inputSearchbox, categoryName)
			.pressKey('Enter')
	}

	async stayOnPageOk(t: { expect: (arg0: Promise<string>) => { (): any; new(): any; eql: { (arg0: string): { (): any; new(): any; click: { (arg0: Selector): any; new(): any } }; new(): any } } }) {
		await t
			.expect(Header.btnBurton.innerText)
			.eql(Header.txtButtonLabel)
			.click(this.btnStayOnThisSite)
	}
}

export default new Home()
