const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/homePage');
const { expect } = require('@playwright/test');
const config = require('../../config');

Given('usuario ingresa a Fravega', async () => {
    homePage = new HomePage(page);

    const environment = process.env.ENV || config.defaultEnvironment;
    const url = config.environments[environment];

    await homePage.navigateTo(url);
    await homePage.verificarModal();
});

Given('usuario realiza una busqueda con la palabra {string}', async (producto) => {
    homePage = new HomePage(page);
    await homePage.buscarProducto(producto);

});

Then('usuario ingresa al carrito', async () => {
    homePage = new HomePage(page); 
    await homePage.navegarAlCarrito();
});
Then('usuario ingresa a pop-up del carrito', async () => {
    homePage = new HomePage(page); 
    await homePage.clickPopUpCarrito();
});
When('usuario elimina el producto desde el pop-up', async () => {
    homePage = new HomePage(page); 
    await homePage.eliminarProductoPopup();
});
Then('usuario verifica que no hay productos en el pop-up del carrito', async () => {
    homePage = new HomePage(page); 
    await homePage.verificarPopUpSinProductos();
});

