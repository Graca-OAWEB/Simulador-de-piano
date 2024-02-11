// Correção: Use 'audio.src' em vez de 'audio.SRC'
const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");
// Correção: Use 'let' para tornar possível a modificação do objeto 'audio'
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("./SRC/tunes/a.wav");

// Correção: Adicionei um evento 'loadedmetadata' para garantir que o áudio foi carregado antes de tocar
audio.addEventListener("loadedmetadata", () => {
    // Removido 'audio.play()' daqui para evitar tocar imediatamente após a troca da fonte
});

const playTune = (key) => {
    // Correção: Use 'audio.src' em vez de 'audio.SRC'
    audio.src = `./SRC/tunes/${key}.wav`;

    // Correção: Use 'key' em vez de 'DocumentTimeline' e 'clickedkey'
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);

    // Correção: Adicionei 'audio.play()' aqui para tocar o áudio após a troca da fonte
    audio.play();
};

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

// Ativa a utilização pelo teclado
document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHiderKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));

}


volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click", showHiderKeys);