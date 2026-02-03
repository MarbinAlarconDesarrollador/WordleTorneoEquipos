const soundWin = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
const soundLoss = new Audio('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3');
const soundTick = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'); // Sonido corto
const soundDing = new Audio('https://assets.mixkit.co/active_storage/sfx/2017/2017-preview.mp3'); // Sonido de selección

// --- 1. DICCIONARIOS EXCLUSIVOS ---
const wordSets = {
    ANIMALES: [
        "PERRO", "GATOS", "TIGRE", "CEBRA", "MOSCA", "PANDA", "PULPO", "GALLO", "CISNE",
        "CERDO", "RATON", "CABRA", "BURRO", "ZORRO", "OVEJA", "LLAMA", "KOALA", "LINCE",
        "ERIZO", "HIENA", "LOROS", "MONOS", "FOCAS", "PAVOS", "BAGRE", "PATOS", "GANSO",
        "BUHOS", "COBRA", "SAPOS", "HURON", "LEMUR", "MORSA", "ORCAS", "PUMAS", "RANAS"
    ],
    PAISES: [
        "CHILE", "CHINA", "JAPON", "RUSIA", "INDIA", "PARIS", "DUBAI", "QATAR", "COREA",
        "KENIA", "TOKIO", "NEPAL", "SIRIA", "SUDAN", "SAMOA", "TONGA", "HAITI", "LIBIA",
        "MALTA", "YEMEN", "GABON", "CONGO", "NAURU"
    ],
    NOMBRES: [
        "PABLO", "MARIA", "JESUS", "LAURA", "PEDRO", "DIEGO", "ELENA", "SOFIA", "LUCAS",
        "MATEO", "ANGEL", "JULIO", "ABRIL", "DARIO", "ESTER", "FELIX", "OSCAR", "RAMON",
        "RUBEN", "PAULA", "DIANA", "CLARA", "CARLA", "MARIO", "TOMAS", "JUANA", "LUCIA",
        "DAVID", "JORGE", "BRUNO", "NADIA", "IRENE", "NOEMI", "KEVIN", "CELIA", "CELIO",
        "PAOLA", "FREDY", "MARTA"
    ],
    COMIDA: [
        "ARROZ", "CARNE", "POLLO", "HUEVO", "LIMON", "MANGO", "FRESA", "PASAS", "CHILE",
        "PASTA", "QUESO", "JAMON", "TORTA", "AREPA", "TACOS", "CALDO", "PERAS", "MORAS",
        "PIZZA", "SUSHI", "PANES", "AVENA", "TRIGO", "PAPAS", "FIDEO", "PIÑAS", "COCOS",
        "KIWIS", "HABAS", "DONAS", "COLES", "APIOS", "MELON", "LECHE", "YOGUR"
    ],
    VERBOS: [
        "ANDAR", "MIRAR", "COMER", "VIVIR", "CORRE", "SALTA", "JUEGA", "VUELA", "VOLAR",
        "ROMPE", "BUSCA", "LLEVA", "CRECE", "SUBIR", "BAJAR", "ENTRA", "SALIR", "CANTA",
        "BAILA", "GRITA", "SOÑAR", "TEMER", "REZAR", "ROGAR", "NADAR", "TOCAR", "REGAR",
        "ESTAR", "HABER", "TENER", "VENIR", "BEBER", "JUGAR", "DECIR", "PONER", "GUIAR",
        "ABRIR", "BOTAR", "VOTAR", "PEDIR", "CREER", "COGER", "TOMAR", "DEJAR", "ECHAR",
        "GANAR", "GIRAR", "HACER", "IDEAR", "JURAR", "LAVAR", "MORIR", "PARAR", "PASAR",
        "PEGAR", "PODER", "ROBAR", "SABER", "TRAER", "MIRAN", "DICEN", "SABEN", "COMEN",
        "AYUDA", "BAILE", "CANTO", "GRITO", "HABLA", "JUEGO", "NACER", "BESAR"

    ],
    GENERAL: [
        "PERRO", "GATOS", "TIGRE", "CEBRA", "MOSCA", "PANDA", "PULPO", "GALLO", "CISNE",
        "CERDO", "RATON", "CABRA", "BURRO", "ZORRO", "OVEJA", "KOALA", "LINCE", "RANAS",
        "ERIZO", "HIENA", "LOROS", "MONOS", "FOCAS", "PAVOS", "BAGRE", "PATOS", "GANSO",
        "BUHOS", "SAPOS", "HURON", "LEMUR", "MORSA", "ORCAS", "PUMAS", "GABON", "CONGO",
        "CHINA", "JAPON", "RUSIA", "INDIA", "PARIS", "DUBAI", "QATAR", "COREA", "NAURU",
        "KENIA", "TOKIO", "NEPAL", "SIRIA", "SUDAN", "SAMOA", "TONGA", "HAITI", "LIBIA",
        "MALTA", "YEMEN", "ARROZ", "CARNE", "POLLO", "HUEVO", "LIMON", "MANGO", "FRESA",
        "PABLO", "MARIA", "JESUS", "LAURA", "PEDRO", "DIEGO", "ELENA", "SOFIA", "LUCAS",
        "MATEO", "ANGEL", "JULIO", "ABRIL", "DARIO", "ESTER", "FELIX", "OSCAR", "RAMON",
        "RUBEN", "PAULA", "DIANA", "CLARA", "CARLA", "MARIO", "TOMAS", "JUANA", "LUCIA",
        "DAVID", "JORGE", "BRUNO", "NADIA", "IRENE", "NOEMI", "KEVIN", "CELIA", "CELIO",
        "PAOLA", "FREDY", "MARTA", "HABAS", "DONAS", "COLES", "APIOS", "MELON", "YOGUR",
        "PASTA", "QUESO", "JAMON", "TORTA", "AREPA", "TACOS", "CALDO", "PERAS", "MORAS",
        "PIZZA", "SUSHI", "PANES", "TRIGO", "PAPAS", "FIDEO", "PIÑAS", "COCOS", "CANTA",
        "KIWIS", "PASAS", "ANDAR", "CORRE", "SALTA", "JUEGA", "VUELA", "ENTRA", "SALIR",
        "BAILA", "GRITA", "SOÑAR", "TEMER", "REZAR", "ROGAR", "NADAR", "TOCAR", "REGAR",
        "ESTAR", "HABER", "TENER", "VENIR", "BEBER", "JUGAR", "DECIR", "PONER", "GUIAR",
        "ABRIR", "BOTAR", "VOTAR", "PEDIR", "CREER", "COGER", "TOMAR", "DEJAR", "ECHAR",
        "GANAR", "GIRAR", "HACER", "IDEAR", "JURAR", "LAVAR", "MORIR", "PARAR", "PASAR",
        "PEGAR", "PODER", "ROBAR", "SABER", "TRAER", "MIRAN", "DICEN", "SABEN", "COMEN",
        "LLEVA", "CRECE", "SUBIR", "BAJAR", "CALVO", "ATRAS", "ATLAS", "BLUSA", "SUDOR",
        "PAÑOS", "ABUSO", "ACTOR", "ALGAS", "ALTAR", "ANCHO", "ANIMO", "ANTES", "NIVEL",
        "ARBOL", "ASILO", "ASTRO", "AUTOS", "AVION", "AYUDA", "BAILE", "BANCO", "BARCO",
        "BARRO", "BATEA", "BINGO", "BOLSO", "BRAZO", "BRISA", "BRUJO", "BUENO", "RUMBO",
        "BURLA", "BUSCA", "CALOR", "CAMPO", "CANAL", "CANTO", "CAPAZ", "CARRO", "HUMOR",
        "CARTA", "CASAS", "CAUSA", "CERRO", "CHICO", "CIELO", "CINCO", "CLASE", "CLAVO",
        "COBRA", "COCHE", "COFRE", "COLOR", "COMER", "CORAL", "CORTE", "COSTO", "CRUEL",
        "CUEVA", "CULPA", "CURSO", "DADOS", "DARDO", "DATOS", "DEBER", "DICHA", "DIETA",
        "DISCO", "DONDE", "DORAR", "EBANO", "ENANO", "ELITE", "ERROR", "FILAS", "PESCA",
        "EXTRA", "FALSO", "FALTA", "FAROL", "FECHA", "FERIA", "FICHA", "FLACO", "FLOTA",
        "FRITO", "FUEGO", "FUERA", "FURIA", "GLOBO", "GOLPE", "GOMAS", "GORRA", "GOTAS",
        "GRADO", "GRANO", "GRITO", "GRUPO", "GUAPA", "GUAPO", "HABLA", "CALMA", "NORMA",
        "HACHA", "ARMAS", "HASTA", "HECHO", "HIELO", "HERIR", "HIJOS", "HOJAS", "HONDA",
        "HORAS", "HORNO", "HOTEL", "HUESO", "IDEAL", "IDEAS", "IGUAL", "ISLAS", "JABON",
        "JARRA", "JAULA", "JEFES", "JUEGO", "JUGOS", "JUNTO", "LABIO", "LADOS", "EXITO",
        "LAGOS", "LANZA", "LARGO", "LECHE", "LENTO", "LETRA", "LIBRE", "LIBRO", "LINDA",
        "LINDO", "LISTA", "LISTO", "LLAVE", "LLENA", "LLENO", "LLORO", "COCOA", "LOGRO",
        "LUCHA", "OTRAS", "LUEGO", "LUGAR", "LUNES", "MADRE", "MAGIA", "MANOS", "MAPAS",
        "OVULO", "MARCA", "MARCO", "MAREA", "MARTE", "MARZO", "MASAS", "MATAR", "MAYOR",
        "MEDIA", "MEDIO", "MEJOR", "MENOR", "MENOS", "MENTE", "MESAS", "METRO", "MIEDO",
        "MINAS", "MIRAR", "MISMO", "MITAD", "MOLER", "MONTE", "MOTOR", "MOVER", "SAZON",
        "MOVIL", "MUELA", "MUERE", "MUJER", "MUNDO", "MUSEO", "NACER", "NARIZ", "FELIZ",
        "NEGRO", "NIETO", "NIEVE", "NIÑOS", "NOBLE", "NOCHE", "NOTAS", "NUEVA", "NUEVO",
        "NUNCA", "OBRAS", "ORDEN", "OREJA", "OSADO", "OTROS", "OVALO", "PADRE", "PAGAR",
        "PALOS", "PANAL", "PANEL", "PAPEL", "PARDO", "PARED", "PARTE", "JOVEN", "GRATO",
        "PASTO", "PATAS", "PATIO", "PAUSA", "PECHO", "PEDAL", "PELEA", "PELOS", "GORDO",
        "PENAS", "PESAR", "PIANO", "PIEZA", "PILAR", "PINTO", "POETA", "POLVO", "BELLO",
        "SANAR", "BESAR", "POSTE", "PRIMO", "PUNTO", "QUIEN", "RADIO", "RAMAS", "CLARO",
        "RAYOS", "RAZON", "REGLA", "RELOJ", "REMAR", "RENTA", "RESTO", "ROBOT", "VOLAR",
        "ROCAS", "ROSAS", "ROMPE", "SABOR", "SACOS", "SALTO", "SALUD", "GAFAS", "FAVOR",
        "SANTO", "SECOS", "SELLO", "SERIE", "SILLA", "SOBRE", "SOCIO", "SOLAR", "SOLOS",
        "SOPLA", "SORDO", "SUAVE", "SUCIO", "SUELO", "SUEÑO", "TABLA", "TARDE", "TAREA",
        "TECHO", "TELON", "TEMOR", "TINTA", "TIPOS", "TONTO", "TORRE", "COBRE", "CIEGO",
        "TRUCO", "UNION", "USARA", "VACIO", "VAGOS", "VALOR", "VASOS", "VECES", "GRIPE",
        "VELAS", "VENTA", "VERDE", "VIAJE", "VIDAS", "VIEJO", "VUELO", "VISTA", "SUEÑA",
        "VIVIR", "ZUMOS", "BELLA", "DANZA", "USADO", "CAMAS", "PLATO", "CABLE", "OIDOS",
        "TAPAS", "VIDEO", "POBRE", "FONDO", "AVISO", "NUBES", "CLIMA", "FORMA", "PASOS",
        "PLANO", "TURNO", "RUIDO", "LUCES", "FRASE", "SONAR", "ZONAR", "DEDOS", "BANDA"
    ]
};
const playableCategories = ["ANIMALES", "PAISES", "NOMBRES", "COMIDA", "VERBOS", "GENERAL"];

function pickRandomCategory() {
    return playableCategories[Math.floor(Math.random() * playableCategories.length)];
}


const victoryMessages = {
    ANIMALES: ["¡Eres un experto del reino animal!", "¡Rugido de victoria!", "¡Asombroso, instinto salvaje!", "¡Dominas la fauna!"],
    PAISES: ["¡Buen viaje, trotamundos!", "¡Conoces bien el mapa!", "¡Victoria internacional!", "¡Pasaporte sellado!"],
    NOMBRES: ["¡Qué buena memoria!", "¡Un nombre inolvidable!", "¡Eres un gran anfitrión!", "¡Persona ganadora!"],
    COMIDA: ["¡Buen provecho!", "¡Qué exquisita victoria!", "¡Tienes buen gusto!", "¡Victoria con sabor!"],
    VERBOS: ["¡Acción y victoria!", "¡Bien conjugado!", "¡Sabes cómo moverte!", "¡Excelente ejecución!"],
    GENERAL: ["¡Punto para el equipo!", "¡Impresionante!", "¡Lo lograste!", "¡Qué gran nivel!"]
};

const defeatMessages = {
    ANIMALES: ["¡Se escapó la presa!", "¡El espécimen huyó!", "¡Te faltó instinto!", "¡Perdiste el rastro!"],
    PAISES: ["¡Te perdiste en el mapa!", "¡Vuelo cancelado!", "¡Escala fallida!", "¡Sin brújula!"],
    NOMBRES: ["¡Se te olvidó quién era!", "¡Desconocido total!", "¡Nombre borrado!", "¡Mala memoria!"],
    COMIDA: ["¡Se te quemó el arroz!", "¡Plato amargo!", "¡Receta fallida!", "¡Mal sabor de boca!"],
    VERBOS: ["¡Te quedaste sin acción!", "¡Mal conjugado!", "¡Falta de movimiento!", "¡Verbo fallido!"],
    GENERAL: ["¡Suerte para la próxima!", "¡Casi lo logras!", "¡Inténtalo de nuevo!", "¡No te rindas!"]
};

// Diccionario MAESTRO para validación (permite cruce de categorías)
const allWords = [...new Set(Object.values(wordSets).flat())];

// --- 2. GESTIÓN DE ESTADO ---
let stats = JSON.parse(localStorage.getItem('wordleElite_Final_V6')) || {
    wins: { A: 0, B: 0 },
    turns: { A: 0, B: 0 },
    hist: { A: [0, 0, 0, 0, 0, 0], B: [0, 0, 0, 0, 0, 0] },
    current: "A",
    goal: 5,
    started: false,
    usedWords: [], // Aquí se guardan TODAS las usadas, sin importar categoría
    category: "GENERAL",
    timeLimit: 120
};

let showingCategory = false;

/* async function showCategoryRoulette() {
    showingCategory = true;
    gameOver = true; // Bloquea teclado
    
    const catDisplay = document.getElementById("categorySelect");
    catDisplay.classList.add("roulette-anim"); // Añade una clase CSS para feedback visual

    // Simulación de ruleta: cambia el texto rápidamente
    for (let i = 0; i < 15; i++) {
        const tempCat = playableCategories[Math.floor(Math.random() * playableCategories.length)];
        catDisplay.value = tempCat;
        await new Promise(resolve => setTimeout(resolve, 100)); // Espera 100ms
    }

    // Elegir la categoría final real
    const finalCategory = pickRandomCategory();
    stats.category = finalCategory;
    catDisplay.value = finalCategory;
    catDisplay.classList.remove("roulette-anim");

    // Generar la palabra de esa categoría
    pickNewWord(); 
    
    showingCategory = false;
    gameOver = false;
    console.log("Categoría seleccionada: " + finalCategory);
} */

async function showCategoryRoulette() {
    showingCategory = true;
    gameOver = true; // Bloquea entrada

    const catDisplay = document.getElementById("categorySelect");
    const msgDisplay = document.getElementById("message");

    // Bloquear visualmente el select para que no intenten cambiarlo mientras gira
    catDisplay.disabled = true; 

    msgDisplay.innerText = "🎲 SORTEANDO CATEGORÍA...";
    catDisplay.classList.add("roulette-anim");

    const totalJumps = 25;

    for (let i = 0; i < totalJumps; i++) {
        // Efecto visual aleatorio
        const tempCat = playableCategories[Math.floor(Math.random() * playableCategories.length)];
        catDisplay.value = tempCat;

        // Sonido
        // Nota: El catch evita errores en consola si el navegador bloquea el autoplay inicial
        soundTick.currentTime = 0; 
        soundTick.volume = 0.5;
        soundTick.play().catch(e => console.log("Audio bloqueado por navegador (falta interacción)"));

        // Delay progresivo (Suspenso)
        let delay = 100 + (i * 12); // Un poco más lento al final
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    // --- SELECCIÓN FINAL ---
    const finalCategory = pickRandomCategory();
    stats.category = finalCategory;
    catDisplay.value = finalCategory;
    
    // Guardamos estado inmediatamente por si recargan
    saveStats(); 

    // Sonido Final
    soundDing.play().catch(e => {});

    // Estilos de Éxito
    catDisplay.classList.remove("roulette-anim");
    catDisplay.style.backgroundColor = "#22c55e"; 
    catDisplay.style.color = "#fff";
    msgDisplay.innerText = `¡CATEGORÍA: ${finalCategory}!`;

    // Pausa dramática antes de permitir jugar
    setTimeout(() => {
        catDisplay.style.backgroundColor = "";
        catDisplay.style.color = "";
        msgDisplay.innerText = ""; // Limpiar mensaje
        
        // Reactivamos controles (pero startTimer los volverá a bloquear al teclear)
        catDisplay.disabled = false; 
        showingCategory = false;
        gameOver = false;
        
        pickNewWord(); // Generar palabra y preparar juego
    }, 3000); // 2 segundos para leer la categoría
}

// Parches de compatibilidad
if (!stats.turns) stats.turns = { A: 0, B: 0 };
if (!stats.category) stats.category = "GENERAL";
if (!stats.timeLimit) stats.timeLimit = 120;

let secret = "", attempt = 0, guess = "", gameOver = false, timerStarted = false;
let timeLeft = stats.timeLimit, timerId = null;

// --- 3. FUNCIONES DE TIEMPO Y CONTROL ---
function startTimer() {
    if (timerStarted || gameOver) return;
    timerStarted = true;

    // BLOQUEAR CONTROLES AL EMPEZAR A JUGAR (teclear)
    document.getElementById("btnNext").disabled = true;
    document.getElementById("settingsBox").classList.add("locked");
    document.getElementById("categorySelect").disabled = true;
    document.getElementById("timeInput").disabled = true;

    document.getElementById("timer").classList.add("active");

    timerId = setInterval(() => {
        if (gameOver) { clearInterval(timerId); return; }
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft <= 10) document.getElementById("timer").style.color = "#ef4444";

        if (timeLeft <= 0) {
            clearInterval(timerId);
            end("TIEMPO AGOTADO: " + secret);
        }
    }, 1000);
}

// Esta función se llama cada vez que cambian el select de Categoría o Tiempo
function updateCategoryParams() {
    // Solo permitimos cambiar si el reloj NO está corriendo
    if (!timerStarted) {
        stats.category = document.getElementById("categorySelect").value;
        stats.timeLimit = parseInt(document.getElementById("timeInput").value) || 120;

        // Actualizamos el tiempo visual
        timeLeft = stats.timeLimit;
        document.getElementById("timer").innerText = timeLeft;

        // Y lo más importante: GENERAMOS NUEVA PALABRA DE LA NUEVA CATEGORÍA
        // Esto borra la palabra anterior (si había una pendiente) y pone una nueva
        // Pero primero quitamos la anterior de "usadas" si no se llegó a jugar
        if (secret && stats.usedWords.includes(secret)) {
            stats.usedWords.pop(); // Sacamos la última porque en realidad no se jugó
        }

        pickNewWord(); // Elegimos una nueva basada en la nueva categoría
        saveStats();
    }
}

function saveGoal() {
    if (!stats.started) {
        stats.goal = parseInt(document.getElementById("goalInput").value) || 5;
        saveStats();
    }
}

function saveNames() {
    localStorage.setItem('nA', document.getElementById("nameA").innerText);
    localStorage.setItem('nB', document.getElementById("nameB").innerText);
    renderUI();
}

function saveStats() {
    localStorage.setItem('wordleElite_Final_V6', JSON.stringify(stats));
    renderUI();
}

function hardReset() {
    if (confirm("⚠️ ¿REINICIAR TORNEO COMPLETO?")) {
        // Reseteamos todo, incluyendo la lista de palabras usadas
        stats = {
            wins: { A: 0, B: 0 },
            turns: { A: 0, B: 0 },
            hist: { A: [0, 0, 0, 0, 0, 0], B: [0, 0, 0, 0, 0, 0] },
            current: "A",
            goal: stats.goal,
            started: false,
            usedWords: [], // <--- LIMPIEZA DE MEMORIA
            category: document.getElementById("categorySelect").value,
            timeLimit: parseInt(document.getElementById("timeInput").value) || 120
        };
        document.getElementById("winnerOverlay").style.display = "none";
        saveStats();
        resetRound();
    }
}

// Función auxiliar para elegir palabra
/* function pickNewWord() {
    let categoryList = wordSets[stats.category] || wordSets["GENERAL"];

    // Filtramos palabras ya usadas en CUALQUIER momento del torneo
    const availableWords = categoryList.filter(word => !stats.usedWords.includes(word));

    if (availableWords.length === 0) {
        // Si se acaban las de la categoría, reciclamos (o podrías mostrar alerta)
        secret = categoryList[Math.floor(Math.random() * categoryList.length)];
    } else {
        secret = availableWords[Math.floor(Math.random() * availableWords.length)];
    }

    // La registramos como usada
    stats.usedWords.push(secret);
    console.log("Nueva palabra (" + stats.category + "): " + secret);
} */

// --- SELECCIÓN DE PALABRA ---
function pickNewWord() {
    // Validación de seguridad: si la categoría no existe, usar GENERAL
    if (!wordSets[stats.category]) stats.category = "GENERAL";

    let categoryList = wordSets[stats.category];
    
    // Filtrar usadas
    const availableWords = categoryList.filter(word => !stats.usedWords.includes(word));

    if (availableWords.length === 0) {
        // Reciclaje si se acaban las palabras
        secret = categoryList[Math.floor(Math.random() * categoryList.length)];
    } else {
        secret = availableWords[Math.floor(Math.random() * availableWords.length)];
    }

    // Registrar usada
    stats.usedWords.push(secret);
    saveStats();
    
    // Debug
    console.log(`Juego listo. Cat: ${stats.category}, Palabra: ${secret}`);
}


/* 
function resetRound() {
    clearInterval(timerId);
    timerStarted = false;
    timeLeft = stats.timeLimit;
    gameOver = false;
    attempt = 0;
    guess = "";

    // Seleccionamos palabra basada en la configuración actual
    pickNewWord();
    saveStats();

    // Reset visual
    document.getElementById("timer").innerText = timeLeft;
    document.getElementById("timer").style.color = "";
    document.getElementById("timer").classList.remove("active");
    document.getElementById("message").innerText = "";
    document.getElementById("grid").innerHTML = "";
    for (let i = 0; i < 30; i++) document.getElementById("grid").innerHTML += `<div class="cell"></div>`;

    // HABILITAR CONTROLES (Para que puedan cambiar categoría antes de jugar)
    document.getElementById("btnNext").disabled = false;
    document.getElementById("categorySelect").disabled = false;
    document.getElementById("timeInput").disabled = false;
    document.getElementById("settingsBox").classList.remove("locked");

    renderKeyboard();
    renderUI();
} */

function resetRound() {
    clearInterval(timerId);
    timerStarted = false;
    timeLeft = stats.timeLimit;
    gameOver = false;
    attempt = 0;
    guess = "";

    // Reset visual de la cuadrícula
    document.getElementById("timer").innerText = timeLeft;
    document.getElementById("timer").style.color = "";
    document.getElementById("message").innerText = "";
    document.getElementById("grid").innerHTML = "";
    for (let i = 0; i < 30; i++) document.getElementById("grid").innerHTML += `<div class="cell"></div>`;

    // HABILITAR CONTROLES (Para que puedan cambiar categoría antes de jugar)
    document.getElementById("btnNext").disabled = false;
    document.getElementById("categorySelect").disabled = false;
    document.getElementById("timeInput").disabled = false;
    document.getElementById("settingsBox").classList.remove("locked");

    renderKeyboard();
    renderUI();

    // Lanzar la ruleta de categoría aleatoria
    showCategoryRoulette();
}

function renderUI() {
    const nA = localStorage.getItem('nA') || "EQUIPO UNO";
    const nB = localStorage.getItem('nB') || "EQUIPO DOS";
    document.getElementById("nameA").innerText = nA;
    document.getElementById("nameB").innerText = nB;
    document.getElementById("turnStatA").innerText = "Partidas: " + stats.turns.A;
    document.getElementById("turnStatB").innerText = "Partidas: " + stats.turns.B;

    // Inputs de Configuración
    const goalInput = document.getElementById("goalInput");
    const catSelect = document.getElementById("categorySelect");
    const timeInput = document.getElementById("timeInput");

    goalInput.value = stats.goal;
    catSelect.value = stats.category;
    timeInput.value = stats.timeLimit;

    // Solo bloqueamos el OBJETIVO del torneo si ya empezó el torneo
    if (stats.started) {
        goalInput.disabled = true;
        document.getElementById("goalBox").classList.add("locked");
    } else {
        goalInput.disabled = false;
        document.getElementById("goalBox").classList.remove("locked");
    }

    // NOTA: Ya no bloqueamos la categoría aquí, se bloquea en startTimer()

    const curC = stats.current === "A" ? "#3b82f6" : "#f43f5e";
    document.getElementById("scoreHeader").innerHTML = `
    <div style="color:${curC}; font-weight:800;">TURNO: ${stats.current === "A" ? nA : nB}</div>
    <div style="font-size: 2.5rem; font-weight: 900;">${stats.wins.A} — ${stats.wins.B}</div>
  `;

    if (stats.turns.A === stats.turns.B) {
        if (stats.wins.A >= stats.goal && stats.wins.A > stats.wins.B) showFinalWinner(nA);
        else if (stats.wins.B >= stats.goal && stats.wins.B > stats.wins.A) showFinalWinner(nB);
    }

    ["A", "B"].forEach(t => {
        const container = document.getElementById("hist" + t); container.innerHTML = "";
        const max = Math.max(...stats.hist[t], 1);
        stats.hist[t].forEach((v, i) => {
            container.innerHTML += `<div style="display:flex; align-items:center; margin: 8px 0;"><small style="width:15px">${i + 1}</small><div style="flex:1; background:#f1f5f9; height:10px; border-radius:10px; margin-left:10px; overflow:hidden;"><div style="height:100%; background:${t === 'A' ? '#3b82f6' : '#f43f5e'}; width:${(v / max) * 100}%;"></div></div></div>`;
        });
    });
}

function showFinalWinner(name) {
    gameOver = true;
    document.getElementById("winnerName").innerText = name.toUpperCase();
    document.getElementById("winnerOverlay").style.display = "flex";
    createConfetti();
}

function renderKeyboard() {
    const keys = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"], ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"]];
    const kb = document.getElementById("keyboard"); kb.innerHTML = "";
    keys.forEach(row => {
        const div = document.createElement("div"); div.className = "keyboard-row";
        row.forEach(k => {
            const b = document.createElement("button"); b.innerText = k; b.className = "key";
            b.id = "k-" + k; b.onclick = () => handleKey(k);
            div.appendChild(b);
        });
        kb.appendChild(div);
    });
}

function handleKey(k) {
    if (gameOver) return;

    // Si es la primera tecla del torneo
    if (!stats.started && k !== "ENTER" && k !== "⌫" && k.length === 1) {
        stats.started = true;
        saveStats();
    }

    // Si es la primera tecla de la RONDA (Inicia Timer y Bloquea Selectores)
    if (!timerStarted && k !== "ENTER" && k !== "⌫") {
        startTimer();
    }

    const cells = document.querySelectorAll(".cell");
    const start = attempt * 5;
    if (k === "ENTER") { if (guess.length === 5) submit(); }
    else if (k === "⌫") { guess = guess.slice(0, -1); }
    else if (guess.length < 5 && k.length === 1) { guess += k; }
    for (let i = 0; i < 5; i++) {
        if (cells[start + i]) cells[start + i].textContent = guess[i] || "";
    }
}

function submit() {
    if (!allWords.includes(guess)) {
        const cells = document.querySelectorAll(".cell");
        const start = attempt * 5;
        document.getElementById("message").innerText = "PALABRA NO VÁLIDA";
        for (let i = 0; i < 5; i++) {
            cells[start + i].classList.add("cell-error");
            setTimeout(() => { cells[start + i].classList.remove("cell-error"); }, 400);
        }
        return;
    }

    const cells = document.querySelectorAll(".cell");
    const start = attempt * 5;
    let tempSec = secret.split("");
    const res = Array(5).fill("absent");

    for (let i = 0; i < 5; i++) { if (guess[i] === secret[i]) { res[i] = "correct"; tempSec[i] = null; } }
    for (let i = 0; i < 5; i++) { if (res[i] !== "correct" && tempSec.includes(guess[i])) { res[i] = "present"; tempSec[tempSec.indexOf(guess[i])] = null; } }

    res.forEach((s, i) => {
        const cell = cells[start + i];
        cell.classList.add(s);
        const letra = guess[i];
        setTimeout(() => { cell.textContent = letra; }, 10);
        const k = document.getElementById("k-" + letra); if (k) k.classList.add(s);
    });

    if (guess === secret) {
        for (let i = 0; i < 5; i++) setTimeout(() => cells[start + i].classList.add("win-bounce"), i * 100);
        createConfetti();
        stats.wins[stats.current]++;
        stats.hist[stats.current][attempt]++;
        soundWin.play(); // <--- AÑADIR ESTA LÍNEA
        //end("¡PUNTO!");
        // --- CAMBIO AQUÍ: Mensaje Personalizado ---
        const msgs = victoryMessages[stats.category] || victoryMessages["GENERAL"];
        const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
        end(randomMsg);
        // ------------------------------------------
    } else if (attempt === 5) {
        end("ERA: " + secret);
    } else {
        attempt++; guess = "";
    }
}

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const c = document.createElement("div");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "vw";
        c.style.backgroundColor = ["#3b82f6", "#f43f5e", "#10b981", "#f59e0b"][Math.floor(Math.random() * 4)];
        c.style.animationDelay = Math.random() * 2 + "s";
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 12000);
    }
}

function end(m) {
    gameOver = true;
    clearInterval(timerId);

    // Si m indica derrota (tiempo agotado o intentos fallidos)
    if (m.includes("ERA:") || m.includes("TIEMPO AGOTADO")) {
        soundLoss.play(); //  (Efecto de perder)
        // 1. Crear el flash rojo visual
        const flash = document.createElement("div");
        flash.className = "defeat-flash";
        document.body.appendChild(flash);

        // Eliminar el elemento después de que termine la animación
        setTimeout(() => flash.remove(), 800);

        // 2. Seleccionar mensaje divertido de derrota
        const msgs = defeatMessages[stats.category] || defeatMessages["GENERAL"];
        const randomDefeat = msgs[Math.floor(Math.random() * msgs.length)];
        document.getElementById("message").innerText = `${randomDefeat} (Era: ${secret})`;

        // 3. (Opcional) Hacer vibrar el timer si se agotó el tiempo
        if (m.includes("TIEMPO AGOTADO")) {
            document.getElementById("timer").style.color = "#ef4444";
        }

    } else {
        // Es una victoria
        document.getElementById("message").innerText = m;
    }

    // Desbloqueo de controles y limpieza visual
    document.getElementById("btnNext").disabled = false;
    document.getElementById("categorySelect").disabled = false;
    document.getElementById("timeInput").disabled = false;
    document.getElementById("settingsBox").classList.remove("locked");
    document.getElementById("timer").classList.remove("active");

    stats.turns[stats.current]++;
    stats.current = stats.current === "A" ? "B" : "A";
    saveStats();

}

document.onkeydown = (e) => {
    let k = e.key.toUpperCase();
    if (k === "BACKSPACE") k = "⌫";
    handleKey(k);
};

resetRound();

// Función para abrir el tutorial
//function openTutorial() {
//    const modal = document.getElementById("tutorialModal");
//    modal.style.display = "flex";
// Opcional: pausar el timer si el juego ya empezó
//    if (timerStarted) {
//        clearInterval(timerId);
//    }
//}

// Actualizamos el botón "?" para que lance el interactivo
function openTutorial() {
    startInteractiveTutorial();
}

// Función para cerrar el tutorial
function closeTutorial() {
    document.getElementById("tutorialModal").style.display = "none";
    localStorage.setItem('tutorialVisto', 'true');

    // Opcional: reanudar el timer si el juego estaba en curso
    if (timerStarted && !gameOver) {
        timerStarted = false; // reset flag para que handleKey lo reinicie
        // O llamar directamente a startTimer() si prefieres que siga solo
    }
}

// Mostrar automáticamente solo la primera vez que entran
document.addEventListener("DOMContentLoaded", () => {
    // Si no ha visto el tutorial interactivo, lo lanzamos
    if (!localStorage.getItem('tutorialInteractivoVisto')) {
        setTimeout(startInteractiveTutorial, 1500);
    }
});

let currentStep = 0;
const steps = [
    {
        element: "goalBox",
        title: "Objetivo del Torneo",
        text: "Aquí defines a cuántas partidas ganadas se termina el torneo. ¡Cuidado, no podrás cambiarlo una vez empiecen!",
        pos: { top: "150px", left: "50%" }
    },
    {
        element: "categorySelect",
        title: "Elige tu Categoría",
        text: "En cada turno puedes cambiar la temática: ANIMALES, VERBOS, COMIDA... ¡Tú eliges!",
        pos: { top: "35%", left: "50%" }
    },
    {
        element: "timeInput",
        title: "El Reloj Corre",
        text: "Define cuántos segundos tiene cada equipo. Si llega a cero, el parpadeo rojo te avisará de la derrota.",
        pos: { top: "45%", left: "50%" }
    },
    {
        element: "grid",
        title: "Adivina la Palabra",
        text: "Verde: Letra correcta. Amarillo: Letra existe pero en otro lugar. Gris: No existe.",
        pos: { top: "60%", left: "50%" }
    }
];

//function startInteractiveTutorial() {
//  currentStep = 0;
//  document.getElementById("tutorialOverlay").style.display = "flex";
//  showStep();
//}

function startInteractiveTutorial() {
    currentStep = 0;
    // Cerramos el de colores por si estuviera abierto
    document.getElementById("tutorialModal").style.display = "none";
    document.getElementById("tutorialOverlay").style.display = "flex";
    showStep();
}

function showStep() {
    // 1. Limpiar resaltado previo
    steps.forEach(s => {
        const el = document.getElementById(s.element);
        if (el) el.classList.remove("highlight-focus");
    });

    const step = steps[currentStep];
    const target = document.getElementById(step.element);
    const card = document.getElementById("stepContent");
    const arrow = document.getElementById("tutorialArrow");

    if (target) {
        target.classList.add("highlight-focus");

        // Scroll automático (Vital para móvil)
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // 2. Lógica de la Flecha
        const rect = target.getBoundingClientRect();
        arrow.style.display = "block";
        arrow.style.left = (rect.left + rect.width / 2 - 12) + "px";

        // Decidir si la flecha va arriba o abajo del elemento
        if (rect.top > 300) {
            arrow.style.top = (rect.top - 30) + "px";
            arrow.style.setProperty('--rot', '180deg'); // Apunta hacia abajo
        } else {
            arrow.style.top = (rect.bottom + 15) + "px";
            arrow.style.setProperty('--rot', '0deg'); // Apunta hacia arriba
        }

        // 3. Posicionar tarjeta SOLO SI ES PC
        if (window.innerWidth > 768) {
            card.style.top = step.pos.top;
            card.style.left = step.pos.left;
            card.style.transform = "translateX(-50%)";
        }
    }

    document.getElementById("stepTitle").innerText = step.title;
    document.getElementById("stepText").innerText = step.text;
    document.getElementById("btnNextStep").innerText = (currentStep === steps.length - 1) ? "¡A JUGAR!" : "Siguiente";
}

//function nextStep() {
//    currentStep++;
//    if (currentStep < steps.length) {
//        showStep();
//    } else {
//        skipTutorial();
//    }
//}

function nextStep() {
    currentStep++;
    if (currentStep < steps.length) {
        showStep();
    } else {
        finishStepTutorial(); // <--- Nueva función para conectar
    }
}

function finishStepTutorial() {
    document.getElementById("tutorialOverlay").style.display = "none";
    document.getElementById("tutorialArrow").style.display = "none";
    // Quitar brillos
    steps.forEach(s => {
        const el = document.getElementById(s.element);
        if (el) el.classList.remove("highlight-focus");
    });
    // ABRIR EL SEGUNDO TUTORIAL (Colores)
    document.getElementById("tutorialModal").style.display = "flex";
    localStorage.setItem('tutorialInteractivoVisto', 'true');
    localStorage.setItem('tutorialVisto', 'true'); // Marcamos ambos como vistos
}

//function skipTutorial() {
//    document.getElementById("tutorialOverlay").style.display = "none";
// Quitar cualquier brillo restante
//    steps.forEach(s => {
//        const el = document.getElementById(s.element);
//        if (el) el.classList.remove("highlight-focus");
//    });
//    localStorage.setItem('tutorialInteractivoVisto', 'true');
//}

function skipTutorial() {
    document.getElementById("tutorialOverlay").style.display = "none";
    document.getElementById("tutorialArrow").style.display = "none";
    steps.forEach(s => {
        const el = document.getElementById(s.element);
        if (el) el.classList.remove("highlight-focus");
    });
    localStorage.setItem('tutorialInteractivoVisto', 'true');
    localStorage.setItem('tutorialVisto', 'true');
}

// --- BLOQUEO DE REINICIO POR TECLADO ---
window.addEventListener('keydown', function (e) {
    // Bloquear F5
    if (e.key === 'F5') {
        e.preventDefault();
        alert("⚠️ El reinicio por F5 está deshabilitado. Usa el botón 'REINICIAR TORNEO'.");
    }

    // Bloquear Ctrl + R o Cmd + R (Mac)
    if ((e.ctrlKey || e.metaKey) && e.key === 'r') {
        e.preventDefault();
        alert("⚠️ El reinicio por Ctrl+R está deshabilitado. Usa el botón 'REINICIAR TORNEO'.");
    }

    // Bloquear Ctrl + Shift + R
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'r') {
        e.preventDefault();
        alert("⚠️ El reinicio forzado está deshabilitado. Usa el botón 'REINICIAR TORNEO'.");
    }
});

window.addEventListener('beforeunload', function (e) {
    // Si el torneo ha empezado y no ha terminado
    if (stats.started && !gameOver) {
        // Cancelar el evento (esto muestra el cuadro de diálogo estándar del navegador)
        e.preventDefault();
        e.returnValue = '';
    }
});


