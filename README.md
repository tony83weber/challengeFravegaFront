# Proyecto automation front Fravega

## Descripción
Este proyecto implementa la automatización de pruebas para la interfaz de usuario de Frávega como parte del challenge de QA Automation.

Se ha desarrollado utilizando Playwright y Cucumber, siguiendo el modelo Page Object Model (POM) para garantizar que las pruebas sean escalables, mantenibles y fáciles de entender.

Las pruebas permiten validar el comportamiento de la aplicación en distintos escenarios y entornos, asegurando la calidad y estabilidad del frontend.

## Requisitos
- Node.js (v17 o superior)
- Dependencias: Playwright y Cucumber

## Instalación
1. Clonar el repositorio:
    ```bash
   git clone https://github.com/tony83weber/challengeFravegaFront.git
    
2. Navegar a la carpeta CHALLENGE\Frontend\automation
   ```bash
   cd CHALLENGE/Frontend/automation 

3. Instalar dependencias:
    ```bash
   npm install

## Ejecución de pruebas

Ejecuta en ambiente por default:
   
    npm test

Para correr un ambiente en particular
   
    $env:ENV="production"; npm test


## Reportes
Los reportes generados estarán en la carpeta raíz bajo el nombre "cucumber-report.html"

