const checkboxInputs = document.querySelectorAll('.alphabet__character-checkbox-input');
const textBefore = document.querySelector('.transliteration__text-before');
const textAfter = document.querySelector('.transliteration__text-after');
const buttonTransliteration = document.querySelector('.transliteration__button-transliteration');
const buttonReset = document.querySelector('.transliteration__button-reset');
const buttonCheckAll = document.querySelector('.alphabet__button-check-all');
const buttonCheckNone = document.querySelector('.alphabet__button-check-none');

// Функция сброса текста
function resetText() {
    textBefore.value = "";
    textAfter.value = "";
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
            } else if (inputText[i].toLowerCase() === "э" && item.value === "е" && item.checked) {
                inputText = inputText.replaceAt(i, i, item.name);
            } else if (inputText[i].toLowerCase() === "ё" && item.value === "е" && item.checked) {
                inputText = inputText.replaceAt(i, i, item.name);
            } else if (inputText[i].toLowerCase() === item.value && item.checked) {
                inputText = inputText.replaceAt(i, i, item.name);
            };
        };
    });
    outputText = inputText;
    return outputText;
};

// Слушатели событий
buttonCheckAll.addEventListener('click', () => {
    checkboxInputs.forEach(item => item.checked = true)
});

buttonCheckNone.addEventListener('click', () => {
    checkboxInputs.forEach(item => item.checked = false)
})

buttonReset.addEventListener('click', resetText);
buttonTransliteration.addEventListener('click', () => {
    const transliteratedText = findAndReplace(textBefore.value, checkboxInputs);
    textAfter.value = transliteratedText;
});