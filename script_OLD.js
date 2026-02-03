 const dictionary = [
  "ABUSO", "ACTOR", "ALBUR", "ALGAS", "ALTAR", "ANCHO", "ANIMO", "ANTES", "ARBOL",
  "ASADO", "ASILO", "ASTRO", "AUTOS", "AVION", "AYUDA", "BAILE", "BANCO", "BARCO",
  "BARRO", "BATEA", "BEBER", "BINGO", "BOLSO", "BRAZO", "BRISA", "BRUJO", "BUENO",
  "BURLA", "BUSCA", "CALOR", "CAMPO", "CANAL", "CANTO", "CAPAZ", "CARRO", "HUMOR",
  "CARNE", "CARTA", "CASAS", "CAUSA", "CERRO", "CHICO", "CIELO", "CINCO", "CLASE",
  "CLAVO", "COBRA", "COCHE", "COFRE", "COLOR", "COMER", "CORAL", "CORTE", "COSTO",
  "CRUEL", "CUEVA", "CULPA", "CURSO", "DADOS", "DARDO", "DATOS", "DEBER", "DICHA",
  "DIETA", "DISCO", "DONDE", "DORAR", "DULCE", "EBANO", "ECHAR", "ENANO", "ELITE",
  "ERROR", "ESTAR", "EXTRA", "FALSO", "FALTA", "FAROL", "FECHA", "FERIA", "FICHA",
  "FLACO", "FLOTA", "FRESA", "FRITO", "FUEGO", "FUERA", "FURIA", "GATOS", "GLOBO",
  "GOLPE", "GOMAS", "GORRA", "GOTAS", "GRADO", "GRANO", "GRITO", "GRUPO", "GUAPA",
  "GUAPO", "GUIAR", "HABLA", "HACER", "HACHA", "ARMAS", "HASTA", "HECHO", "HIELO",
  "HERIR", "HIJOS", "HOJAS", "HONDA", "HORAS", "HORNO", "HOTEL", "HUESO", "HUEVO",
  "IDEAL", "IDEAS", "IGUAL", "ISLAS", "JABON", "JAMON", "JARRA", "JAULA", "JEFES",
  "JUEGO", "JUGAR", "JUGOS", "JUNTO", "LABIO", "LADOS", "LAGOS", "LANZA", "LARGO",
  "LECHE", "LENTO", "LETRA", "LIBRE", "LIBRO", "LIMON", "LINDA", "LINDO", "LISTA",
  "LISTO", "LLAVE", "LLENA", "LLENO", "LLORO", "COCOA", "LOGRO", "LUCHA", "OTRAS",
  "LUEGO", "LUGAR", "LUNES", "MADRE", "MAGIA", "MANGO", "MANOS", "MAPAS", "OVULO",
  "MARCA", "MARCO", "MAREA", "MARTE", "MARZO", "MASAS", "MATAR", "MAYOR", "MEDIA",
  "MEDIO", "MEJOR", "MENOR", "MENOS", "MENTE", "MESAS", "METRO", "MIEDO", "MINAS",
  "MIRAR", "MISMO", "MITAD", "MOLER", "MONTE", "MORIR", "MOSCA", "MOTOR", "MOVER",
  "MOVIL", "MUELA", "MUERE", "MUJER", "MUNDO", "MUSEO", "NACER", "NADAR", "NARIZ",
  "NEGRO", "NIETO", "NIEVE", "NIÑOS", "NOBLE", "NOCHE", "NOTAS", "NUEVA", "NUEVO",
  "NUNCA", "OBRAS", "ORDEN", "OREJA", "OSADO", "OESTE", "OTROS", "OVALO", "OVEJA",
  "PADRE", "PAGAR", "PALOS", "PANAL", "PANDA", "PANEL", "PAÑOS", "PAPEL", "PARAR",
  "PARDO", "PARED", "PARTE", "PASAR", "PASTO", "PATAS", "PATIO", "PAUSA", "ARROZ",
  "PECHO", "PEDAL", "PEDIR", "PELEA", "PELOS", "PENAS", "PERRO", "PESAR", "PIANO",
  "PIEZA", "PILAR", "PINTO", "PODER", "POETA", "POLLO", "POLVO", "SANAR", "BESAR",
  "PONER", "POSTE", "PRIMO", "PUNTO", "QUESO", "QUIEN", "RADIO", "RAMAS", "RAYOS",
  "RAZON", "REGLA", "RELOJ", "REMAR", "RENTA", "RESTO", "ROBAR", "ROBOT", "ROCAS",
  "ROSAS", "ROMPE", "SABER", "SABOR", "SACOS", "SALIR", "SALTO", "SALUD", "SANTO",
  "SECOS", "SELLO", "SELVA", "SERIE", "SILLA", "SOBRE", "SOCIO", "SOLAR", "SOLOS",
  "SOPLA", "SORDO", "SUAVE", "SUCIO", "SUELO", "SUEÑO", "TABLA", "TARDE", "TAREA",
  "TECHO", "TELON", "TEMOR", "TIGRE", "TINTA", "TIPOS", "TOCAR", "TOMAR", "TONTO",
  "TORRE", "TRAER", "TRUCO", "UNION", "USARA", "VACIO", "VAGOS", "VALOR", "VASOS",
  "VECES", "VELAS", "VENIR", "VENTA", "VERDE", "VIAJE", "VIDAS", "VIEJO", "VUELO",
  "VISTA", "VIVIR", "VUELO", "ZORRO", "ZUMOS", "BELLA", "CABRA", "DANZA", "USADO",
  "CEBRA", "RATON", "CERDO", "BURRO", "VACAS", "CISNE", "GALLO", "ABEJA", "PULPO",
  "CAMAS", "PLATO", "CABLE", "TAPAS", "VIDEO", "POBRE", "FONDO", "AVISO", "ABRIR",
  "NUBES", "VALLE", "PLAYA", "COSTA", "CLIMA", "NORTE", "FORMA", "PLANO", "TURNO",
  "RUIDO", "LUCES", "FRASE", "SOÑAR", "ENTRA", "SUBIR", "BAJAR", "BOTAR", "GANAR",
  "DEDOS", "PASOS", "OIDOS", "SUEÑA", "GRIPE", "CIEGO", "COBRE", "FAVOR", "GAFAS",
  "TENER", "VOLAR", "ENTRA", "SUBIR", "BAJAR", "BOTAR", "GANAR", "DECIR", "CREER",
  "CLARO", "GORDO", "BELLO", "JOVEN", "GRATO", "FELIZ", "SAZON", "EXITO", "CALMA",
  "NORMA", "FILAS", "JURAR", "PESCA", "RUMBO", "PEGAR", "NIVEL", "ATRAS", "ATLAS",
  "BLUSA", "SUDOR"
];

let stats = JSON.parse(localStorage.getItem('wordleElite_Final_V2')) || {
  wins: { A: 0, B: 0 }, 
  turns: { A: 0, B: 0 }, 
  hist: { A: [0, 0, 0, 0, 0, 0], B: [0, 0, 0, 0, 0, 0] }, 
  current: "A", 
  goal: 5, 
  started: false
};
if(!stats.turns) stats.turns = { A: 0, B: 0 };

let secret = "", attempt = 0, guess = "", gameOver = false, timerStarted = false;
let timeLeft = 90, timerId = null;

function startTimer() {
  if (timerStarted || gameOver) return;
  timerStarted = true;
  document.getElementById("btnNext").disabled = true;
  document.getElementById("timer").classList.add("active");
  timerId = setInterval(() => {
    if (gameOver) { clearInterval(timerId); return; }
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerId);
      end("TIEMPO AGOTADO: " + secret);
    }
  }, 1000);
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
  localStorage.setItem('wordleElite_Final_V2', JSON.stringify(stats));
  renderUI();
}

function hardReset() {
  if (confirm("⚠️ ¿REINICIAR TORNEO?")) {
    stats = {
      wins: { A: 0, B: 0 },
      turns: { A: 0, B: 0 },
      hist: { A: [0, 0, 0, 0, 0, 0], B: [0, 0, 0, 0, 0, 0] },
      current: "A",
      goal: stats.goal,
      started: false
    };
    document.getElementById("winnerOverlay").style.display = "none";
    saveStats();
    resetRound();
  }
}

function renderUI() {
  const nA = localStorage.getItem('nA') || "EQUIPO AZUL";
  const nB = localStorage.getItem('nB') || "EQUIPO ROJO";
  document.getElementById("nameA").innerText = nA;
  document.getElementById("nameB").innerText = nB;

  document.getElementById("turnStatA").innerText = "Partidas: " + stats.turns.A;
  document.getElementById("turnStatB").innerText = "Partidas: " + stats.turns.B;

  const goalInput = document.getElementById("goalInput");
  const goalBox = document.getElementById("goalBox");
  goalInput.value = stats.goal;

  if (stats.started) {
    goalInput.disabled = true;
    goalBox.classList.add("locked");
  } else {
    goalInput.disabled = false;
    goalBox.classList.remove("locked");
  }

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

function resetRound() {
  clearInterval(timerId); timerStarted = false; timeLeft = 90; gameOver = false; attempt = 0; guess = "";
  secret = dictionary[Math.floor(Math.random() * dictionary.length)];
  document.getElementById("timer").innerText = "90";
  document.getElementById("timer").classList.remove("active");
  document.getElementById("message").innerText = "";
  document.getElementById("grid").innerHTML = "";
  for (let i = 0; i < 30; i++) document.getElementById("grid").innerHTML += `<div class="cell"></div>`;
  document.getElementById("btnNext").disabled = false;
  renderKeyboard(); renderUI();
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
  if (!stats.started && k !== "ENTER" && k !== "⌫" && k.length === 1) {
    stats.started = true;
    saveStats();
  }
  if (!timerStarted && k !== "ENTER" && k !== "⌫") {
    startTimer();
    document.getElementById("btnNext").disabled = true;
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
  if (!dictionary.includes(guess)) {
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
    end("¡PUNTO!");
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
    setTimeout(() => c.remove(), 9000);
  }
}

function end(m) {
  gameOver = true; clearInterval(timerId);
  document.getElementById("message").innerText = m;
  stats.turns[stats.current]++;
  stats.current = stats.current === "A" ? "B" : "A";
  document.getElementById("btnNext").disabled = false;
  saveStats();
}

document.onkeydown = (e) => {
  let k = e.key.toUpperCase();
  if (k === "BACKSPACE") k = "⌫";
  handleKey(k);
};

resetRound();
