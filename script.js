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
  '.options__fieldset-button-random-text'
);
const georgianFactButton = document.querySelector(
  '.options__fieldset-button-georgian-fact'
);
const oneginButton = document.querySelector('.options__fieldset-button-onegin');
const optionsCheckboxInputs = document.querySelectorAll(
  '.options__fieldset-checkbox-input'
);
const options = document.querySelector('.options__fieldset');
const transliteration = document.querySelector('.transliteration__form')

const buttonTextAfterSizeUp = document.querySelector(
  '.transliteration__button-text-after-size-up'
);
const buttonTextAfterSizeDown = document.querySelector(
  '.transliteration__button-text-after-size-down'
);
const buttonTextBeforeSizeUp = document.querySelector(
  '.transliteration__button-text-before-size-up'
);
const buttonTextBeforeSizeDown = document.querySelector(
  '.transliteration__button-text-before-size-down'
);



// Функция сброса текста
function resetText() {
  textBefore.value = '';
  textAfter.value = '';
  alphabet.classList.remove('alphabet__characters_color_red');
  textBefore.classList.remove('transliteration__textarea_border_red');
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
  // Чекнутые буквы
  let characters = getCheckedInputs(nodeList);
  let georgianCharacters = Object.keys(characters);
  let russianCharacters = Object.values(characters);

  // Чекнутые опции
  let options = getCheckedInputs(optionsCheckboxInputs);
  let optionsKeys = Object.keys(options);

  // Если не выбраны буквы и не написан текст
  if (georgianCharacters.length == 0 || !textBefore.value) {
    showTooltip(buttonTransliteration);
    text = '';
    alphabet.classList.add('alphabet__characters_color_red');
    textBefore.classList.add('transliteration__textarea_border_red');
  } else {
    alphabet.classList.remove('alphabet__characters_color_red');
    textBefore.classList.remove('transliteration__textarea_border_red');
  }

  // Убираю мягкий и твёрдый знаки
  if (optionsKeys.includes('ь')) {
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

    function randomizeChar(rusChar, geoChars) {
      // Проверка того, что все из ряда похожих выбраны
      function checkIfInclude() {
        let counter = 0;
        geoChars.map((item) => {
          if (georgianCharacters.includes(item)) {
            counter++;
          }
        });
        return counter == geoChars.length ? true : false;
      }

      if (item === rusChar && checkIfInclude()) {
        text = text.replace(regExp, () => {
          return geoChars[Math.floor(Math.random() * geoChars.length)];
        });
      }
    }

    // Рандомайзер для букв 'г'
    randomizeChar('г', ['გ', 'ღ']);

    // Рандомайзер для букв 'т'
    randomizeChar('т', ['თ', 'ტ']);

    // Рандомайзер для букв 'к' всех
    randomizeChar('к', ['კ', 'ქ', 'ყ']);

    // Рандомайзер для букв 'к' 1
    randomizeChar('к', ['კ', 'ქ']);

    // Рандомайзер для букв 'к' 2
    randomizeChar('к', ['კ', 'ყ']);

    // Рандомайзер для букв 'к' 3
    randomizeChar('к', ['ქ', 'ყ']);

    // Рандомайзер для букв 'п'
    randomizeChar('п', ['პ', 'ფ']);

    // Рандомайзер для букв 'ч'
    randomizeChar('ч', ['ჩ', 'ჭ']);

    // Рандомайзер для букв 'ц'
    randomizeChar('ц', ['ც', 'წ']);

    // Рандомайзер для букв 'х'
    randomizeChar('х', ['ხ', 'ჰ']);

    // Транслитерация для остальных букв
    text = text.replace(regExp, georgianCharacters[index]);
  });

  return text;
}

// Используя делегирование выбираю кнопку подсказки в алфавите
alphabet.onclick = function (e) {
  let target = e.target;

  if (!target.dataset.title) {
    return;
  }

  showTooltip(target);
};

// Используя делегирование выбираю кнопку подсказки в опциях
options.onclick = function (e) {
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

// Функция получения рандомного текста с сервера
function getRandomText() {
  return fetch('https://fish-text.ru/get', {}).then((res) => {
    return res.ok ? res.json() : Promise.reject(res.status);
  });
}

// Увеличиваю шрифт
function increaseTextSize(text) {
  let currentTextSize = getComputedStyle(text).fontSize.split('px').join('');
  let currentLineHeight = getComputedStyle(text)
    .lineHeight.split('px')
    .join('');

  if (currentTextSize < 50) {
    text.style.fontSize = `${+currentTextSize + 2}px`;
    text.style.lineHeight = `${+currentLineHeight + 2}px`;
  }
}

// Уменьшаю шрифт
function decreaseTextSize(text) {
  let currentTextSize = getComputedStyle(text).fontSize.split('px').join('');
  let currentLineHeight = getComputedStyle(text)
    .lineHeight.split('px')
    .join('');

  if (currentTextSize > 10) {
    text.style.fontSize = `${+currentTextSize - 2}px`;
    text.style.lineHeight = `${+currentLineHeight - 2}px`;
  }
}

// Слушатели событий
// Выбор всех чек боксов
buttonCheckAll.addEventListener('click', () => {
  checkboxInputs.forEach((item) => (item.checked = true));
});

// Снять выбор со всех чекбоксов
buttonCheckNone.addEventListener('click', () => {
  checkboxInputs.forEach((item) => (item.checked = false));
});

// Сброс текста
buttonReset.addEventListener('click', resetText);

// Транслитерация текста
buttonTransliteration.addEventListener('click', (e) => {
  e.preventDefault();
  const transliteratedText = findAndReplace(textBefore.value, [
    ...checkboxInputs,
  ]);
  textAfter.value = transliteratedText;
});

// Закрытие тултипа по кнопке
toolTipCloseButton.addEventListener('click', () => {
  toolTip.classList.remove('tooltip_opened');
});

// Закрытие тултипа по тёмной области
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

// Слушатель события на кнопку вызова факта о Грузии
georgianFactButton.addEventListener('click', () => {
  textBefore.value =
    georgianFacts[Math.floor(Math.random() * georgianFacts.length)];
});

// Слушатель события на кнопку вызова цитаты из Онегина
oneginButton.addEventListener('click', () => {
  textBefore.value = onegin[Math.floor(Math.random() * onegin.length)];
});

// Кнопка увеличения текста до
buttonTextBeforeSizeUp.addEventListener('click', () => {
  increaseTextSize(textBefore);
});

// Кнопка уменьшения текста до
buttonTextBeforeSizeDown.addEventListener('click', () => {
  decreaseTextSize(textBefore);
});

// Кнопка увеличения текста после
buttonTextAfterSizeUp.addEventListener('click', () => {
  increaseTextSize(textAfter);
});

// Кнопка уменьшения текста после
buttonTextAfterSizeDown.addEventListener('click', () => {
  decreaseTextSize(textAfter);
});

