Feature: gestionar productos en el carrito

    Como usuario de Frávega,
    quiero buscar productos, verificar disponibilidad, agregarlos y eliminarlos del carrito,
    para realizar compras de forma sencilla.

    Background:
        Given usuario ingresa a Fravega

    Scenario: Buscar una heladera, elegir la segunda opcion y comprar verificando su stock
        Given usuario realiza una busqueda con la palabra "Heladera Samsung"
        When usuario elige la segunda opción de los resultados
        And usuario verifica que el producto tenga stock y lo compra
        And usuario regresa a Fravega haciendo click en el logo
        And usuario ingresa al carrito
        Then usuario verifica que el producto se encuentre en el carrito

    Scenario: Agregar y eliminar productos del carrito desde pop-up y desde page mi carrito
        Given usuario realiza una busqueda con la palabra "pava"
        When usuario agrega "2" productos al carrito
        And usuario ingresa a Fravega
        And usuario ingresa al carrito
        Then usuario verifica que hay 2 productos en el carrito
        When usuario elimina el primer producto
        Then usuario verifica que hay 1 productos en el carrito
        And usuario ingresa a Fravega
        And usuario ingresa a pop-up del carrito
        When usuario elimina el producto desde el pop-up
        Then usuario verifica que no hay productos en el pop-up del carrito