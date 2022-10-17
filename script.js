const checkboxInputs = document.querySelectorAll('.alphabet__character-checkbox-input');
const text = document.querySelector('.transliteration__text');
const textDone = document.querySelector('.transliteration__transliterated-text');
const buttonTransliteration = document.querySelector('.transliteration__button-transliteration');
const buttonReset = document.querySelector('.transliteration__button-reset');

// Функция сброса текста
function resetText() {
    text.value = "";
    textDone.value = "";
};

// Функция поиска и замены букв
function findAndReplace(inputText, characterArr) {
    let outputText = "";

    String.prototype.replaceAt = function (indexStart, indexEnd, character) {
        return this.substring(0, indexStart) + character + this.substring(indexEnd + character.length);
    };

    characterArr.forEach((item) => {
        for (let i = 0; i < inputText.length; i++) {
            if (inputText[i].toLowerCase() === "д" && inputText[i + 1].toLowerCase() === "з" && inputText[i].toLowerCase() + inputText[i + 1].toLowerCase() === item.value && item.checked) {
                inputText = inputText.replaceAt(i, i + 1, item.name);
            } else if (inputText[i].toLowerCase() === "д" && inputText[i + 1].toLowerCase() === "ж" && inputText[i].toLowerCase() + inputText[i + 1].toLowerCase() === item.value && item.checked) {
                inputText = inputText.replaceAt(i, i + 1, item.name);
            } else if (inputText[i].toLowerCase() === item.value && item.checked) {
                inputText = inputText.replaceAt(i, i, item.name);
            };
        };
    });
    outputText = inputText;
    return outputText;
};

buttonReset.addEventListener('click', resetText);
buttonTransliteration.addEventListener('click', () => {
    const transliteratedText = findAndReplace(text.value, checkboxInputs);
    textDone.value = transliteratedText;
});