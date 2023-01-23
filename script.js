const checkboxInputs = document.querySelectorAll(
  '.alphabet__character-checkbox-input'
);
const textBefore = document.querySelector('.transliteration__text-before');
const textAfter = document.querySelector('.transliteration__text-after');
const buttonTransliteration = document.querySelector(
  '.transliteration__button-transliteration'
);
const buttonReset = document.querySelector('.transliteration__button-reset');
const buttonCheckAll = document.querySelector('.alphabet__button-check-all');
const buttonCheckNone = document.querySelector('.alphabet__button-check-none');

// Функция сброса текста
function resetText() {
  textBefore.value = '';
  textAfter.value = '';
}

// Функция поиска и замены букв
function findAndReplace(inputText, characterArr) {
  let outputText = '';

  String.prototype.replaceAt = function (indexStart, indexEnd, character) {
    return (
      this.substring(0, indexStart) +
      character +
      this.substring(indexEnd + character.length)
    );
  };

  characterArr.forEach((item) => {
    for (let i = 0; i < inputText.length; i++) {
      if (
        inputText[i].toLowerCase() === 'д' &&
        inputText[i + 1].toLowerCase() === 'з' &&
        inputText[i].toLowerCase() + inputText[i + 1].toLowerCase() ===
          item.value &&
        item.checked
      ) {
        inputText = inputText.replaceAt(i, i + 1, item.name);
      } else if (
        inputText[i].toLowerCase() === 'д' &&
        inputText[i + 1].toLowerCase() === 'ж' &&
        inputText[i].toLowerCase() + inputText[i + 1].toLowerCase() ===
          item.value &&
        item.checked
      ) {
        inputText = inputText.replaceAt(i, i + 1, item.name);
      } else if (
        inputText[i].toLowerCase() === 'э' &&
        item.value === 'е' &&
        item.checked
      ) {
        inputText = inputText.replaceAt(i, i, item.name);
      } else if (
        inputText[i].toLowerCase() === 'ё' &&
        item.value === 'е' &&
        item.checked
      ) {
        inputText = inputText.replaceAt(i, i, item.name);
      } else if (inputText[i].toLowerCase() === item.value && item.checked) {
        inputText = inputText.replaceAt(i, i, item.name);
      }
    }
  });
  outputText = inputText;
  return outputText;
}

// Функция выбора только одной буквы из ряда похожих
function chooseOnlyOne(array) {
  array.map((item) => {
    let arrWithoutItem = array.filter((i) => i !== item);
    item.addEventListener('click', () => {
      if (item.checked !== false) {
        arrWithoutItem.map((i) => (i.checked = false));
      }
    });
  });
}

const oneK = chooseOnlyOne([
  checkboxInputs[9],
  checkboxInputs[21],
  checkboxInputs[23],
]);
const oneP = chooseOnlyOne([checkboxInputs[14], checkboxInputs[20]]);
const oneT = chooseOnlyOne([checkboxInputs[7], checkboxInputs[18]]);
const oneH = chooseOnlyOne([checkboxInputs[30], checkboxInputs[32]]);
const oneCh = chooseOnlyOne([checkboxInputs[25], checkboxInputs[29]]);
const oneTs = chooseOnlyOne([checkboxInputs[26], checkboxInputs[28]]);

// Слушатели событий
buttonCheckAll.addEventListener('click', () => {
  checkboxInputs.forEach((item) => {
    if (
      !(
        item === checkboxInputs[21] ||
        item === checkboxInputs[23] ||
        item === checkboxInputs[20] ||
        item === checkboxInputs[18] ||
        item === checkboxInputs[32] ||
        item === checkboxInputs[29] ||
        item === checkboxInputs[28]
      )
    ) {
      // console.log(item);
      item.checked = true;
    }
  });
});

buttonCheckNone.addEventListener('click', () => {
  checkboxInputs.forEach((item) => (item.checked = false));
});

buttonReset.addEventListener('click', resetText);
buttonTransliteration.addEventListener('click', () => {
  const transliteratedText = findAndReplace(textBefore.value, checkboxInputs);
  textAfter.value = transliteratedText;
});
