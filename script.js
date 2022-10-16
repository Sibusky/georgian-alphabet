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
function findAndReplace(inputText, characterObj) {
    let outputText = "";

    String.prototype.replaceAt = function (index, character) {
        return this.substring(0, index) + character + this.substring(index + character.length);
    };

    characterObj.forEach((item) => {
        for (let i = 0; i < inputText.length; i++) {
            if (inputText[i].toLowerCase() === item.value && item.checked) {
                inputText = inputText.replaceAt(i, item.name);
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