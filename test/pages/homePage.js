const BasePage = require('./basePage');
const config = require('../../config');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.btnCerrarModal = '//*[@data-test-id="close-modal-button"]';
        this.txtBusqueda = '//input[@name="keyword" and @placeholder= "Buscar productos"]';
        this.btnBuscar = '//form[@action="#"]//button[@type="submit"]';
        this.btnCarrito = '//button[@data-test-id="button-cart"]';
        this.btnIrAlCarrito = '//*[@data-test-id="link-go-to-cart"]';
        this.btnDeleteCart =  'button[data-test-id="delete-cart-product"]';
        this.txtCarritoVacio = '//p[contains(text(), " Tu carrito está vacío ")]';
    }

    async navigateTo(url) {
        
        await this.page.goto(url);
    }
    //completamos la barra de busqueda y hacemos click en la lupa
    async buscarProducto(producto) {
        await this.page.locator(this.txtBusqueda).fill(producto);
        await this.page.locator(this.btnBuscar).click();
    }
    async clickPopUpCarrito(){
        await this.page.locator(this.btnCarrito).click();
        
    }
    async eliminarProductoPopup(){
        const deleteButton = this.page.locator(this.btnDeleteCart);

        await this.page.waitForSelector(this.btnDeleteCart, { state: 'visible' });
        
        await this.page.locator(this.btnDeleteCart).click();
        await this.page.waitForTimeout(1000)
    }
    async verificarModal() {
        await this.page.locator(this.btnCarrito).waitFor({ state: 'visible', timeout: 5000 });
        await this.page.locator(this.btnCerrarModal).click();
    }

    async navegarAlCarrito() {
        await this.page.locator(this.btnCarrito).waitFor({ state: 'visible' });
        await this.page.locator(this.btnCarrito).click();
        await this.page.locator(this.btnIrAlCarrito).waitFor({ state: 'visible' });
        await this.page.locator(this.btnIrAlCarrito).click();
    }
    async verificarPopUpSinProductos(){
        
        await this.page.locator(this.txtCarritoVacio).waitFor({ state: 'visible' });
    }
}

module.exports = HomePage;