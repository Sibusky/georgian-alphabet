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

const alphabet = document.querySelector('.alphabet__characters');
const toolTip = document.querySelector('.tooltip');
const toolTipText = document.querySelector('.tooltip__text');
const toolTipCloseButton = document.querySelector('.tooltip__close-btn');

const randomTextButton = document.querySelector(
  '.transliteration__button-random-text'
);
const georgianFactButton = document.querySelector(
  '.transliteration__button-georgian-fact'
);

// Функция сброса текста
function resetText() {
  textBefore.value = '';
  textAfter.value = '';
}

// Получаю объект из чекнутых грузинских букв
function getCheckedInputs(nodeList) {
  let res = {};
  let array = [...nodeList];

  let arrayNames = array
    .filter((item) => item.checked)
    .map((item) => item.name);

  let arrayValues = array
    .filter((item) => item.checked)
    .map((item) => item.value);

  arrayNames.map((item, index) => {
    res[item] = arrayValues[index];
  });
  return res;
}

function findAndReplace(text, nodeList) {
  let characters = getCheckedInputs(nodeList);
  let georgianCharacters = Object.keys(characters);
  let russianCharacters = Object.values(characters);

  // Убираю мягкий и твёрдый знаки
  if (georgianCharacters.length > 30) {
    let regExp = /[^ьъ]/gi;
    text = text.match(regExp) ? text.match(regExp).join('') : text;
  }

  // Если выбраны буквы 'ი' 'ა', то 'я' меняю на 'иа'
  if (georgianCharacters.includes('ი') && georgianCharacters.includes('ა')) {
    let regExp = /я/gi;
    text = text.match(regExp) ? text.replace(regExp, 'иа') : text;
  }

  // Если выбраны буквы 'ი' 'ო', то 'ё' меняю на 'ио'
  if (georgianCharacters.includes('ი') && georgianCharacters.includes('ო')) {
    let regExp = /ё/gi;
    text = text.match(regExp) ? text.replace(regExp, 'ио') : text;
  }

  // Если выбраны буквы 'ი' 'უ', то 'ю' меняю на 'иу'
  if (georgianCharacters.includes('ი') && georgianCharacters.includes('უ')) {
    let regExp = /ю/gi;
    text = text.match(regExp) ? text.replace(regExp, 'иу') : text;
  }

  // Если выбрана буква 'ი', то 'ы' 'й' меняю на 'и'
  if (georgianCharacters.includes('ი')) {
    let regExp1 = /ы/gi;
    let regExp2 = /й/gi;
    text = text.match(regExp1) ? text.replace(regExp1, 'и') : text;
    text = text.match(regExp2) ? text.replace(regExp2, 'и') : text;
  }

  // Если выбрана буква 'ე', то 'э' меняю на 'е'
  if (georgianCharacters.includes('ე')) {
    let regExp = /э/gi;
    text = text.match(regExp) ? text.replace(regExp, 'е') : text;
  }

  // Если выбрана буква 'შ', то 'щ' меняю на 'ш'
  if (georgianCharacters.includes('შ')) {
    let regExp = /щ/gi;
    text = text.match(regExp) ? text.replace(regExp, 'ш') : text;
  }

  // Если выбрана буква 'ფ', то 'ф' меняю на 'п'
  if (georgianCharacters.includes('ფ')) {
    let regExp = /ф/gi;
    text = text.match(regExp) ? text.replace(regExp, 'п') : text;
  }

  // Сначала транслитерирую 'дз'
  if (russianCharacters.includes('дз')) {
    text = text.replace(/дз/gi, 'ძ');
  }

  // Потом транслитерирую 'дж'
  if (russianCharacters.includes('дж')) {
    text = text.replace(/дж/gi, 'ჯ');
  }

  // Транслитерация
  russianCharacters.map((item, index) => {
    let regExp = new RegExp(`${item}`, 'gi');

    // Рандомайзер для букв 'г'
    if (item === 'г') {
      text = text.replace(regExp, () => {
        let similarCharacters = ['გ', 'ღ'];
        return similarCharacters[
          Math.floor(Math.random() * similarCharacters.length)
        ];
      });
    }

    // Рандомайзер для букв 'т'
    if (item === 'т') {
      text = text.replace(regExp, () => {
        let similarCharacters = ['თ', 'ტ'];
        return similarCharacters[
          Math.floor(Math.random() * similarCharacters.length)
        ];
      });
    }

    // Рандомайзер для букв 'к'
    if (item === 'к') {
      text = text.replace(regExp, () => {
        let similarCharacters = ['კ', 'ქ', 'ყ'];
        return similarCharacters[
          Math.floor(Math.random() * similarCharacters.length)
        ];
      });
    }

    // Рандомайзер для букв 'п'
    if (item === 'п') {
      text = text.replace(regExp, () => {
        let similarCharacters = ['პ', 'ფ'];
        return similarCharacters[
          Math.floor(Math.random() * similarCharacters.length)
        ];
      });
    }

    // Рандомайзер для букв 'ч'
    if (item === 'ч') {
      text = text.replace(regExp, () => {
        let similarCharacters = ['ჩ', 'ჭ'];
        return similarCharacters[
          Math.floor(Math.random() * similarCharacters.length)
        ];
      });
    }

    // Рандомайзер для букв 'ц'
    if (item === 'ц') {
      text = text.replace(regExp, () => {
        let similarCharacters = ['ც', 'წ'];
        return similarCharacters[
          Math.floor(Math.random() * similarCharacters.length)
        ];
      });
    }

    // Рандомайзер для букв 'х'
    if (item === 'х') {
      text = text.replace(regExp, () => {
        let similarCharacters = ['ხ', 'ჰ'];
        return similarCharacters[
          Math.floor(Math.random() * similarCharacters.length)
        ];
      });
    }

    // Транслитерация для остальных букв
    text = text.replace(regExp, georgianCharacters[index]);
  });

  return text;
}

// // Функция поиска и замены букв
// function findAndReplace(inputText, characterArr) {
//   let outputText = '';

//   String.prototype.replaceAt = function (indexStart, indexEnd, character) {
//     return (
//       this.substring(0, indexStart) +
//       character +
//       this.substring(indexEnd + character.length)
//     );
//   };

//   characterArr.reverse().forEach((item) => {
//     // развернул массив в обратную сторону, чтобы обработать дз и дж
//     for (let i = 0; i < inputText.length; i++) {
//       if (
//         inputText[i].toLowerCase() === 'д' &&
//         inputText[i + 1].toLowerCase() === 'з' &&
//         inputText[i].toLowerCase() + inputText[i + 1].toLowerCase() ===
//           item.value &&
//         item.checked
//       ) {
//         inputText = inputText.replaceAt(i, i + 1, item.name);
//       } else if (
//         inputText[i].toLowerCase() === 'д' &&
//         inputText[i + 1].toLowerCase() === 'ж' &&
//         inputText[i].toLowerCase() + inputText[i + 1].toLowerCase() ===
//           item.value &&
//         item.checked
//       ) {
//         inputText = inputText.replaceAt(i, i + 1, item.name);
//       } else if (
//         inputText[i].toLowerCase() === 'э' &&
//         item.value === 'е' &&
//         item.checked
//       ) {
//         inputText = inputText.replaceAt(i, i, item.name);
//       } else if (
//         inputText[i].toLowerCase() === 'ё' &&
//         item.value === 'е' &&
//         item.checked
//       ) {
//         inputText = inputText.replaceAt(i, i, item.name);
//       } else if (inputText[i].toLowerCase() === item.value && item.checked) {
//         inputText = inputText.replaceAt(i, i, item.name);
//       }
//     }
//   });
//   outputText = inputText;
//   return outputText;
// }

// // Функция выбора только одной буквы из ряда похожих
// function chooseOnlyOne(array) {
//   array.map((item) => {
//     let arrWithoutItem = array.filter((i) => i !== item);
//     item.addEventListener('click', () => {
//       if (item.checked !== false) {
//         arrWithoutItem.map((i) => (i.checked = false));
//       }
//     });
//   });
// }

// const oneK = chooseOnlyOne([
//   checkboxInputs[9],
//   checkboxInputs[21],
//   checkboxInputs[23],
// ]);
// const oneG = chooseOnlyOne([checkboxInputs[2], checkboxInputs[22]]);
// const oneP = chooseOnlyOne([checkboxInputs[14], checkboxInputs[20]]);
// const oneT = chooseOnlyOne([checkboxInputs[7], checkboxInputs[18]]);
// const oneH = chooseOnlyOne([checkboxInputs[30], checkboxInputs[32]]);
// const oneCh = chooseOnlyOne([checkboxInputs[25], checkboxInputs[29]]);
// const oneTs = chooseOnlyOne([checkboxInputs[26], checkboxInputs[28]]);

// Слушатели событий
buttonCheckAll.addEventListener('click', () => {
  checkboxInputs.forEach((item) => {
    // if (
    //   !(
    //     item === checkboxInputs[18] ||
    //     item === checkboxInputs[20] ||
    //     item === checkboxInputs[21] ||
    //     item === checkboxInputs[22] ||
    //     item === checkboxInputs[23] ||
    //     item === checkboxInputs[28] ||
    //     item === checkboxInputs[29] ||
    //     item === checkboxInputs[32]
    //   )
    // ) {
    item.checked = true;
    // }
  });
});

buttonCheckNone.addEventListener('click', () => {
  checkboxInputs.forEach((item) => (item.checked = false));
});

buttonReset.addEventListener('click', resetText);
buttonTransliteration.addEventListener('click', () => {
  const transliteratedText = findAndReplace(textBefore.value, [
    ...checkboxInputs,
  ]);
  textAfter.value = transliteratedText;
});

// Используя делегирование выбираю кнопку подсказки
alphabet.onclick = function (e) {
  let target = e.target;

  if (!target.dataset.title) {
    return;
  }

  showTooltip(target);
};

// Открываю окно подсказки с текстом, соответствующим кнопке
function showTooltip(button) {
  toolTip.classList.add('tooltip_opened');
  toolTipText.textContent = button.dataset.title;
}

toolTipCloseButton.addEventListener('click', () => {
  toolTip.classList.remove('tooltip_opened');
});

toolTip.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    toolTip.classList.remove('tooltip_opened');
  }
});

// Слушатель событий на кнопку рандомного текста
randomTextButton.addEventListener('click', () => {
  getRandomText()
    .then((res) => {
      textBefore.value = res.text;
    })
    .catch((err) => {
      console.log(err);
      textBefore.value =
        'Упс. При загрузке текста произошла ошибка, повторите позже.';
    });
});

// Функция получения рандомного текста с сервера
function getRandomText() {
  return fetch('https://fish-text.ru/get', {}).then((res) => {
    return res.ok ? res.json() : Promise.reject(res.status);
  });
}

// Слушатель события на кнопку вызова факта о Грузии
georgianFactButton.addEventListener('click', () => {
  textBefore.value =
    georgianFacts[Math.floor(Math.random() * georgianFacts.length)];
});
