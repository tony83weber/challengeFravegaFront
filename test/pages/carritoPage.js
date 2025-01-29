const BasePage = require('./basePage');

class CarritoPage extends BasePage {
    //selectores para su rapido ubicacion y administracion
    constructor(page) {
        super(page);
        this.btnLogoFravega = '//a[@href="/"]//img[contains(@alt, "Fravega")]';
        this.lblProducto = '//*[@id="__next"]/div/div[1]/main/div[1]/div[1]/div/div/div[1]/div[2]/div[1]';
        this.btnEliminarPrimerItem = '//div[contains(@class, "sc-b6a50d62-0")][1]//*[text()="Eliminar"]';
        this.btnConfirmarEliminar = '//button[text()="Eliminar"]'
        this.btnCancelar = '//button[text()="Cancelar"]'
        this.itemsCarrito = '//div[contains(@class, "sc-b6a50d62-0")]';
        this.lblMiCarrito = '//h1[text()="Mi carrito"]';
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async volverPresionandoLogo(){
        await this.page.locator(this.btnLogoFravega).click();
    }
    //Verificamos el nombre del producto en el carrito y lo retorno para compararlo
    async verificarItemEnCarrito() {
        const nombreProducto = await this.page.locator(this.lblProducto).innerText()
        return nombreProducto
    }
   // se cuenta cuantos items existen y se devuelve la cantidad
    async contarItemsEnCarrito() {
        await this.page.locator(this.lblMiCarrito).waitFor({ state: 'visible' });
        await this.page.locator(this.btnEliminarPrimerItem).waitFor({ state: 'visible' });
        const cantidad = await this.page.locator(this.itemsCarrito).count();
        return cantidad;
    }

    async eliminarPrimerItem() {
        //Elimina el primer item de la lista 
        await this.page.locator(this.btnEliminarPrimerItem).waitFor({ state: 'visible' });
        await this.page.locator(this.btnEliminarPrimerItem).click();
        await this.page.locator(this.btnConfirmarEliminar).click();
        //Se espera que el botón "cancelar" 
        await this.page.locator(this.btnCancelar).waitFor({ state: 'detached', timeout: 10000 });
    }
}

module.exports = CarritoPage;