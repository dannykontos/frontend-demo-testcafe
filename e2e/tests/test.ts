import Urls from '../resources/urls'
import Home from '../page-object/pages/home'
import Snowboards from '../page-object/pages/snowboards'
import ProductDetails from '../page-object/pages/productDetails'
import Header from '../page-object/components/header'
import Cart from '../page-object/pages/cart'

fixture`Tests for Burton.com Cart`.page`${Urls.home}`

const productName = 'snowboard'

test('Add a product to cart', async t => {
	//Home.stayOnPageOk(t)
	Home.searchCustomText(t, productName)
	Snowboards.selectCustomProduct(t, 0)
	ProductDetails.addProductToCart(t)
	//await t.debug().expect(Header.txtCartCount.innerText).eql('1')
})

test('Add second product to cart', async t => {
	//Home.stayOnPageOk(t)
	Home.searchCustomText(t, productName)
	Snowboards.selectCustomProduct(t, 0)
	ProductDetails.addProductToCart(t)
	Header.checkCartValue(t, 1)
	Home.searchCustomText(t, productName)
	Snowboards.selectCustomProduct(t, 2)
	ProductDetails.addProductToCart(t)
	await t.expect(Header.txtCartCount.innerText).eql(String(2))
})

test('Remove second product from cart', async t => {
	//Home.stayOnPageOk(t)
	Home.searchCustomText(t, productName)
	Snowboards.selectCustomProduct(t, 0)
	ProductDetails.addProductToCart(t)
	Header.checkCartValue(t, 1)
	Home.searchCustomText(t, productName)
	Snowboards.selectCustomProduct(t, 2)
	ProductDetails.addProductToCart(t)
	Header.checkCartValue(t, 2)
	Urls.navigateToCart(t)
	Cart.deleteCustomProduct(t, 0)
	await t.expect(Cart.btnArrayDeleteItem.count).eql(1)
})

test('Empty cart', async t => {
	//Home.stayOnPageOk(t)
	Home.searchCustomText(t, productName)
	Snowboards.selectCustomProduct(t, 0)
	ProductDetails.addProductToCart(t)
	Header.checkCartValue(t, 1)
	Home.searchCustomText(t, productName)
	Snowboards.selectCustomProduct(t, 2)
	ProductDetails.addProductToCart(t)
	Header.checkCartValue(t, 2)
	//Urls.navigateToCart(t)
	//Cart.deleteCustomProduct(t, 0)
	//Cart.deleteCustomProduct(t, 0)
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
		.eql(
			1,
			'Custom Error: The user is trying to find a product in an empty cart!'
		)
})
