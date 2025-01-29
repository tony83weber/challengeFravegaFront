const { BeforeAll, AfterAll, setDefaultTimeout, After, Before, AfterStep } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');


// Configuración del timeout general de la ejecución
setDefaultTimeout(30 * 1000);

// Variables globales para el navegador y la página
let browser;
let context;
let page;

Before(async () => {
   browser = await chromium.launch({ //  maximizar browser
        headless: false,
        args: ['--start-maximized']
    });
    context = await browser.newContext({ viewport: null}); // Crear un nuevo contexto de navegador
    page = await context.newPage(); // Crear una nueva página dentro del contexto
    global.page = page;// Hacer que la página sea accesible globalmente
});
//Screenshot después de cada step 
AfterStep(async function (step) {
    const screenshot = await page.screenshot();
    await this.attach(screenshot, 'image/png');
});
//Después de cada escenario cerramos el browser 
After(async function (scenario) {
    await context.close();
    await browser.close();
});
// Cerrar el contexto y el navegador 
AfterAll(async () => {
     await context.close();
    await browser.close();
});
