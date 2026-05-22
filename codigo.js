// FUNCION ENTRAR AL BUNKER
function entrarBunker() {

    // OBTENER HORAS
    var horas = document.getElementById("horas").value;

    // OBTENER EMOCION
    var emocion = document.getElementById("emocion").value;

    // VALIDACION
    if (horas == "" || emocion == "") {

        alert("Complete todos los campos");
    }

    else {

        // REDIRECCION
        window.location.href = "bunker.html";
    }

}

// FUNCION IR A FRASES
function irFrases() {

    // REDIRECCION
    window.location.href = "frases.html";
}

// ARRAY FRASES
var frases = [

    "Respirar profundo cambia el día",

    "Tu mente merece descansar",

    "Está bien desconectarse un rato",

    "Todo mejora paso a paso",

    "No necesitás resolver todo hoy",

    "Tu tranquilidad es importante",

    "Cinco minutos de calma ayudan mucho",

    "Descansar también es avanzar"
];

// FUNCION MOSTRAR FRASE
function mostrarFrase() {

    // NUMERO ALEATORIO
    var numero =
        Math.floor(Math.random() * frases.length);

    // MOSTRAR FRASE
    document.getElementById("frase").textContent =
        frases[numero];
}