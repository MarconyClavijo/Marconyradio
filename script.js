const btn = document.getElementById("btn"), btnFloat = document.getElementById("btnFloat");
const estado = document.getElementById("estado"), app = document.getElementById("app");
const floatBar = document.getElementById("floatBar"), vol = document.getElementById("volumen");
const menuBtn = document.getElementById("menuBtn"), navMenu = document.getElementById("navMenu");
let audio = null, sonando = false;

menuBtn.onclick = () => { navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex"; };

function crearAudio() {
    if (audio) { audio.pause(); audio.src = ""; audio.load(); }
    audio = new Audio();
    audio.src = "https://radiostreaming.pro";
    audio.crossOrigin = "anonymous";
    audio.volume = vol.value;
}

function alternarPlay() {
    if (!sonando) {
        crearAudio();
        estado.textContent = "⏳ Conectando..."; btn.textContent = "⏳"; btnFloat.textContent = "⏳";
        audio.play().then(() => {
            estado.textContent = "🎧 EN VIVO"; btn.textContent = "⏸"; btnFloat.textContent = "⏸"; sonando = true;
        }).catch(() => {
            estado.textContent = "⚠️ Error de señal"; btn.textContent = "▶"; btnFloat.textContent = "▶"; sonando = false;
        });
    } else {
        audio.pause(); audio.src = ""; audio.load();
        estado.textContent = "🔴 TRANSMISIÓN DETENIDA"; btn.textContent = "▶"; btnFloat.textContent = "▶"; sonando = false;
    }
}

btn.onclick = alternarPlay; btnFloat.onclick = alternarPlay;
vol.oninput = () => { if (audio) audio.volume = vol.value; };
window.onscroll = () => { floatBar.style.display = app.getBoundingClientRect().bottom < 0 ? "flex" : "none"; };

setInterval(() => {
    const txt = document.getElementById("sonic_title")?.textContent;
    if (txt && document.getElementById("sonic_title_float")) {
        document.getElementById("sonic_title_float").textContent = txt;
    }
}, 3000);
