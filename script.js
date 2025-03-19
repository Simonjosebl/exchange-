const API_KEY = '5f39e6ce3fe03c8feb8e63da'; // Agregamos la API Key aquí.

async function convertCurrency() { //Función para el llamado y solicitudes de la API.
    const fromCurrency = document.getElementById('fromCurrency').value; //mondeda de origen //Elementos de la API que vamos a utilizar. // Obtiene el valor seleccionado en el campo de entrada HTML.
    const toCurrency = document.getElementById('toCurrency').value; // moneda de destino 

    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`; // URL de la API. //Esta URL se utiliza para obtener las tasas de cambio más recientes (latest) para la moneda de origen.

    try { // Try Catch para el manejo de errores en la pag web.
        const response = await fetch(url); //Realiza una solicitud HTTP a la URL de la API.
        const data = await response.json(); //Convierte la respuesta en un objeto JSON para poder acceder a los datos.
                                                        //Verifica si la moneda de destino está disponible.
        if (data.conversion_rates[toCurrency]) {       // si los datos son  correctos traerlos con el metodo GET.
            const rate = data.conversion_rates[toCurrency]; //obtiene la tasa de cambio
            document.getElementById('result').innerText = 
                `1 ${fromCurrency} = ${rate} ${toCurrency}`; // Muestra el resultado en la página.
        } else {
            document.getElementById('result').innerText = "Moneda no disponible."; //si no mostrar como resultado texto de moneda solicitada no disponible.
        }
    } catch (error) { //Si hay un error en la conección con la api y la respuesta HTTP de ella, mostrar como resultado un texto diciendo error al obtener la tasa de cambio.
        document.getElementById('result').innerText = "Error al obtener la tasa de cambio.";
        console.error("Error:", error); // mostrar error en consola
    }
}
