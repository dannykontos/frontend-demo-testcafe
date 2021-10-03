class Url {
	baseUrl: string
	home: string
	cart: string

	constructor() {
		this.baseUrl = 'https://www.burton.com'
		this.home = this.baseUrl + '/us/en/home'
		this.cart = this.baseUrl + '/us/en/cart'
	}
}

export default new Url()
