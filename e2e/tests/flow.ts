import Urls from '../resources/urls'
import Home from '../page-object/pages/home'
import Snowboards from '../page-object/pages/snowboards'
import ProductDetails from '../page-object/pages/productDetails'
import Header from '../page-object/components/header'
import Cart from '../page-object/pages/cart'

fixture`Tests for Burton Cart`.page`${Urls.home}`

const productName = 'snowboard'

test('Flow to Add and remove products from the cart', async t => {
	//await t
		//.expect(Header.btnBurton.innerText)
		//.eql(Header.txtButtonLabel)
		//.click(Home.btnStayOnThisSite)
	//Verify that first product is added in the cart
	Home.searchCustomText(t, productName)
	await t.click(Snowboards.btnArrayOfProducts.nth(0))
	await t
		.click(ProductDetails.btnAddToCart.nth(1))
		.click(ProductDetails.btnContinueShopingInModal)
		.expect(Header.txtCartCount.innerText)
		.eql('1')
	//Verify that a new product is added in the cart
	Home.searchCustomText(t, productName)
	await t
		.click(Snowboards.btnArrayOfProducts.nth(2))
		.click(ProductDetails.btnAddToCart.nth(1))
		.click(ProductDetails.btnContinueShopingInModal)
		.expect(Header.txtCartCount.innerText)
		.eql('2')
	//Verify that user is able to remove item from cart
	await t
		.navigateTo(Urls.cart)
		.click(Cart.btnArrayDeleteItem.nth(0))
		.expect(Cart.btnArrayDeleteItem.count)
		.eql(1)
	//Verify that user is able to remove last item from cart
	await t
		.navigateTo(Urls.cart)
		.click(Cart.btnArrayDeleteItem.nth(0))
		.expect(Cart.btnArrayDeleteItem.count)
		.eql(0)
})
