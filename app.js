// Дані для ігор
const gameData = {
  flags: {
    beginner: [
      {"name": "США", "flag": "🇺🇸"}, {"name": "Велика Британія", "flag": "🇬🇧"}, {"name": "Франція", "flag": "🇫🇷"}, {"name": "Німеччина", "flag": "🇩🇪"}, {"name": "Японія", "flag": "🇯🇵"}, {"name": "Китай", "flag": "🇨🇳"}, {"name": "Росія", "flag": "🇷🇺"}, {"name": "Канада", "flag": "🇨🇦"}, {"name": "Австралія", "flag": "🇦🇺"}, {"name": "Бразилія", "flag": "🇧🇷"}, {"name": "Індія", "flag": "🇮🇳"}, {"name": "Італія", "flag": "🇮🇹"}, {"name": "Іспанія", "flag": "🇪🇸"}, {"name": "Мексика", "flag": "🇲🇽"}, {"name": "Нідерланди", "flag": "🇳🇱"}, {"name": "Швеція", "flag": "🇸🇪"}, {"name": "Норвегія", "flag": "🇳🇴"}, {"name": "Швейцарія", "flag": "🇨🇭"}, {"name": "Польща", "flag": "🇵🇱"}, {"name": "Україна", "flag": "🇺🇦"}, {"name": "Туреччина", "flag": "🇹🇷"}, {"name": "Південна Корея", "flag": "🇰🇷"}, {"name": "Аргентина", "flag": "🇦🇷"}, {"name": "Єгипет", "flag": "🇪🇬"}, {"name": "Ізраїль", "flag": "🇮🇱"}, {"name": "Саудівська Аравія", "flag": "🇸🇦"}, {"name": "ПАР", "flag": "🇿🇦"}, {"name": "Нігерія", "flag": "🇳🇬"}, {"name": "Таїланд", "flag": "🇹🇭"}, {"name": "Греція", "flag": "🇬🇷"}
    ],
    intermediate: [
      {"name": "Індонезія", "flag": "🇮🇩"}, {"name": "Пакистан", "flag": "🇵🇰"}, {"name": "Бангладеш", "flag": "🇧🇩"}, {"name": "В'єтнам", "flag": "🇻🇳"}, {"name": "Філіппіни", "flag": "🇵🇭"}, {"name": "Іран", "flag": "🇮🇷"}, {"name": "Ірак", "flag": "🇮🇶"}, {"name": "Афганістан", "flag": "🇦🇫"}, {"name": "Малайзія", "flag": "🇲🇾"}, {"name": "Узбекистан", "flag": "🇺🇿"}
    ],
    difficult_pairs: [
      {"target": "🇹🇩", "options": ["🇹🇩", "🇷🇴", "🇲🇩", "🇦🇩"], "answer": "Чад"},
      {"target": "🇲🇨", "options": ["🇲🇨", "🇮🇩", "🇵🇱", "🇲🇹"], "answer": "Монако"},
      {"target": "🇳🇿", "options": ["🇳🇿", "🇦🇺", "🇫🇯", "🇨🇰"], "answer": "Нова Зеландія"}
    ]
  },
  math_problems: {
    beginner: {"operations": ["+", "-"], "range": [0, 100], "small_operand": 10, "no_negative": true},
    intermediate: {"operations": ["+", "-"], "range": [0, 1000], "small_operand": 100, "no_negative": true},
    advanced: {"operations": ["+", "-"], "range": [-500, 1000], "small_operand": 100, "no_negative": false},
    expert: {"operations": ["+", "-", "×", "÷"], "range": [0, 100], "small_operand": 50, "no_negative": false, "integers_only": true}
  }
};

// Додаткові набори прапорів для просунутого рівня
const advancedFlags = [...gameData.flags.beginner, ...gameData.flags.intermediate];

// Стан гри
let gameState = {
  currentScreen: 'main-menu',
  flagsScore: 0,
  mathScore: 0,
  currentGameType: null,
  currentDifficulty: null,
  currentQuestion: null,
  currentAnswer: null,
  options: []
};

// DOM Елементи для навігації екранами
let screens;
let mainMenu;
let flagsDifficulty;
let mathDifficulty;
let flagsGame;
let mathGame;
let answerFeedback;

// Основна функція, яка запускається після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM повністю завантажено');
  
  // Ініціалізація елементів інтерфейсу
  initializeElements();
  
  // Налаштування обробників подій
  setupEventListeners();
  
  // Показуємо початковий екран
  navigateToScreen('main-menu');
  
  console.log('Ініціалізацію завершено');
});

// Ініціалізація всіх елементів DOM
function initializeElements() {
  console.log('Ініціалізація елементів');
  
  screens = {
    'main-menu': document.getElementById('main-menu'),
    'flags-difficulty': document.getElementById('flags-difficulty'),
    'math-difficulty': document.getElementById('math-difficulty'),
    'flags-game': document.getElementById('flags-game'),
    'math-game': document.getElementById('math-game')
  };
  
  mainMenu = document.getElementById('main-menu');
  flagsDifficulty = document.getElementById('flags-difficulty');
  mathDifficulty = document.getElementById('math-difficulty');
  flagsGame = document.getElementById('flags-game');
  mathGame = document.getElementById('math-game');
  answerFeedback = document.getElementById('answer-feedback');
}

// Налаштування обробників подій для всіх кнопок
function setupEventListeners() {
  console.log('Налаштування обробників подій');
  
  // Головне меню - кнопки вибору гри
  const flagsBtn = document.getElementById('flags-btn');
  const mathBtn = document.getElementById('math-btn');
  
  addButtonClickListener(flagsBtn, () => {
    console.log('Клік на кнопку "Прапори"');
    navigateToScreen('flags-difficulty');
  });
  
  addButtonClickListener(mathBtn, () => {
    console.log('Клік на кнопку "Математика"');
    navigateToScreen('math-difficulty');
  });
  
  // Екран складності прапорів - кнопки назад та рівні складності
  const backToMainFromFlags = document.getElementById('back-to-main-from-flags');
  addButtonClickListener(backToMainFromFlags, () => {
    console.log('Повернення до головного меню з вибору складності прапорів');
    navigateToScreen('main-menu');
  });
  
  const flagsBeginner = document.getElementById('flags-beginner');
  const flagsIntermediate = document.getElementById('flags-intermediate');
  const flagsAdvanced = document.getElementById('flags-advanced');
  const flagsExpert = document.getElementById('flags-expert');
  
  addButtonClickListener(flagsBeginner, () => startFlagsGame('beginner'));
  addButtonClickListener(flagsIntermediate, () => startFlagsGame('intermediate'));
  addButtonClickListener(flagsAdvanced, () => startFlagsGame('advanced'));
  addButtonClickListener(flagsExpert, () => startFlagsGame('expert'));
  
  // Екран складності математики - кнопки назад та рівні складності
  const backToMainFromMath = document.getElementById('back-to-main-from-math');
  addButtonClickListener(backToMainFromMath, () => {
    console.log('Повернення до головного меню з вибору складності математики');
    navigateToScreen('main-menu');
  });
  
  const mathBeginner = document.getElementById('math-beginner');
  const mathIntermediate = document.getElementById('math-intermediate');
  const mathAdvanced = document.getElementById('math-advanced');
  const mathExpert = document.getElementById('math-expert');
  
  addButtonClickListener(mathBeginner, () => startMathGame('beginner'));
  addButtonClickListener(mathIntermediate, () => startMathGame('intermediate'));
  addButtonClickListener(mathAdvanced, () => startMathGame('advanced'));
  addButtonClickListener(mathExpert, () => startMathGame('expert'));
  
  // Ігровий екран прапорів - кнопки навігації
  const backToFlagsDifficulty = document.getElementById('back-to-flags-difficulty');
  const flagsToMain = document.getElementById('flags-to-main');
  
  addButtonClickListener(backToFlagsDifficulty, () => {
    console.log('Повернення до вибору складності прапорів');
    navigateToScreen('flags-difficulty');
  });
  
  addButtonClickListener(flagsToMain, () => {
    console.log('Повернення до головного меню з гри прапорів');
    navigateToScreen('main-menu');
  });
  
  // Ігровий екран математики - кнопки навігації
  const backToMathDifficulty = document.getElementById('back-to-math-difficulty');
  const mathToMain = document.getElementById('math-to-main');
  
  addButtonClickListener(backToMathDifficulty, () => {
    console.log('Повернення до вибору складності математики');
    navigateToScreen('math-difficulty');
  });
  
  addButtonClickListener(mathToMain, () => {
    console.log('Повернення до головного меню з гри математики');
    navigateToScreen('main-menu');
  });
}

// Допоміжна функція для додавання обробника кліку з відслідковуванням
function addButtonClickListener(button, callback) {
  if (!button) {
    console.error('Елемент кнопки не знайдено', button);
    return;
  }
  
  button.addEventListener('click', (event) => {
    console.log(`Клік на кнопку ${button.id || 'без id'}`);
    
    // Створюємо візуальний фідбек для кнопки
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Додаємо клас для анімації
    button.classList.add('btn-clicked');
    
    // Викликаємо функцію-колбек після короткої затримки (не більше 300ms)
    setTimeout(() => {
      button.classList.remove('btn-clicked');
      callback();
    }, 150);
  });
}

// Функція для навігації між екранами
function navigateToScreen(screenId) {
  console.log(`Перехід до екрану: ${screenId}`);
  
  // Ховаємо всі екрани
  Object.values(screens).forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Показуємо потрібний екран
  if (screens[screenId]) {
    screens[screenId].classList.add('active');
    gameState.currentScreen = screenId;
    
    // Анімація появи екрану за допомогою requestAnimationFrame
    requestAnimationFrame(() => {
      screens[screenId].style.animation = 'none';
      screens[screenId].offsetHeight; // Форсуємо перемальовування
      screens[screenId].style.animation = 'fadeIn 0.3s ease-in-out';
    });
  } else {
    console.error(`Екран ${screenId} не знайдено`);
  }
}

// Функція для запуску гри з прапорами
function startFlagsGame(difficulty) {
  console.log(`Запуск гри з прапорами, рівень: ${difficulty}`);
  
  gameState.currentGameType = 'flags';
  gameState.currentDifficulty = difficulty;
  gameState.flagsScore = 0;
  
  // Оновлюємо відображення рахунку
  document.getElementById('flags-score').textContent = '0';
  
  // Переходимо до ігрового екрану
  navigateToScreen('flags-game');
  
  // Генеруємо перше запитання
  generateFlagQuestion();
}

// Функція для запуску гри з математикою
function startMathGame(difficulty) {
  console.log(`Запуск гри з математикою, рівень: ${difficulty}`);
  
  gameState.currentGameType = 'math';
  gameState.currentDifficulty = difficulty;
  gameState.mathScore = 0;
  
  // Оновлюємо відображення рахунку
  document.getElementById('math-score').textContent = '0';
  
  // Переходимо до ігрового екрану
  navigateToScreen('math-game');
  
  // Генеруємо перше запитання
  generateMathQuestion();
}

// Функція для генерації запитання з прапором
function generateFlagQuestion() {
  console.log('Генерація запитання з прапором');
  
  let flagsData;
  let correctCountry;
  
  if (gameState.currentDifficulty === 'expert') {
    // Для експертного рівня використовуємо схожі прапори
    const randomIndex = Math.floor(Math.random() * gameData.flags.difficult_pairs.length);
    const questionData = gameData.flags.difficult_pairs[randomIndex];
    
    gameState.currentQuestion = questionData.target;
    gameState.currentAnswer = questionData.answer;
    gameState.options = [];
    
    // Змішуємо варіанти відповідей
    const shuffledOptions = [...questionData.options].sort(() => Math.random() - 0.5);
    
    // Відображаємо прапор
    document.getElementById('flag-display').textContent = questionData.target;
    
    // Створюємо кнопки з варіантами відповідей
    const optionsContainer = document.getElementById('flag-options');
    optionsContainer.innerHTML = '';
    
    // Знаходимо правильну відповідь серед варіантів
    const countryOptions = [
      "Чад", "Румунія", "Молдова", "Андорра", 
      "Монако", "Індонезія", "Польща", "Мальта",
      "Нова Зеландія", "Австралія", "Фіджі", "Острови Кука"
    ];
    
    shuffledOptions.forEach((flag, index) => {
      let countryName;
      if (flag === questionData.target) {
        countryName = questionData.answer;
      } else {
        const optionIndex = questionData.options.indexOf(flag);
        // Використовуємо заздалегідь заготовлені назви країн для схожих прапорів
        countryName = countryOptions[optionIndex];
      }
      
      const button = document.createElement('button');
      button.className = 'btn option-btn';
      button.textContent = countryName;
      
      addButtonClickListener(button, () => {
        checkFlagAnswer(countryName);
      });
      
      optionsContainer.appendChild(button);
      gameState.options.push({flag, name: countryName});
    });
    
  } else {
    // Для інших рівнів використовуємо звичайні набори прапорів
    if (gameState.currentDifficulty === 'beginner') {
      flagsData = [...gameData.flags.beginner];
    } else if (gameState.currentDifficulty === 'intermediate') {
      flagsData = [...gameData.flags.intermediate];
    } else if (gameState.currentDifficulty === 'advanced') {
      flagsData = [...advancedFlags];
    }
    
    // Вибираємо випадкову країну для запитання
    const randomIndex = Math.floor(Math.random() * flagsData.length);
    correctCountry = flagsData[randomIndex];
    
    gameState.currentQuestion = correctCountry.flag;
    gameState.currentAnswer = correctCountry.name;
    
    // Відображаємо прапор
    document.getElementById('flag-display').textContent = correctCountry.flag;
    
    // Створюємо варіанти відповідей (3 неправильних + 1 правильний)
    const wrongOptions = flagsData
      .filter(country => country.name !== correctCountry.name)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    
    const allOptions = [...wrongOptions, correctCountry].sort(() => Math.random() - 0.5);
    gameState.options = allOptions;
    
    // Створюємо кнопки з варіантами відповідей
    const optionsContainer = document.getElementById('flag-options');
    optionsContainer.innerHTML = '';
    
    allOptions.forEach(country => {
      const button = document.createElement('button');
      button.className = 'btn option-btn';
      button.textContent = country.name;
      
      addButtonClickListener(button, () => {
        checkFlagAnswer(country.name);
      });
      
      optionsContainer.appendChild(button);
    });
  }
}

// Функція для генерації математичного запитання
function generateMathQuestion() {
  console.log('Генерація математичного запитання');
  
  const settings = gameData.math_problems[gameState.currentDifficulty];
  
  // Генеруємо операцію
  const operation = settings.operations[Math.floor(Math.random() * settings.operations.length)];
  
  // Генеруємо операнди залежно від складності
  let num1, num2, answer;
  
  do {
    if (operation === '+' || operation === '-') {
      // Для додавання та віднімання
      num1 = Math.floor(Math.random() * (settings.range[1] - settings.range[0])) + settings.range[0];
      num2 = Math.floor(Math.random() * settings.small_operand) + 1;
      
      if (operation === '+') {
        answer = num1 + num2;
      } else {
        // Для віднімання міняємо місцями, якщо може вийти від'ємне число і це не дозволено
        if (settings.no_negative && num1 < num2) {
          [num1, num2] = [num2, num1];
        }
        answer = num1 - num2;
      }
    } else if (operation === '×') {
      // Для множення
      num1 = Math.floor(Math.random() * Math.min(20, settings.small_operand)) + 1;
      num2 = Math.floor(Math.random() * (settings.range[1] / num1)) + 1;
      answer = num1 * num2;
    } else if (operation === '÷') {
      // Для ділення (забезпечуємо цілочисельну відповідь)
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = Math.floor(Math.random() * (settings.range[1] / num2)) + 1;
      num1 = answer * num2;
    }
  } while (
    // Перевіряємо обмеження
    (settings.no_negative && answer < 0) || 
    (answer > settings.range[1]) ||
    (answer < settings.range[0])
  );
  
  // Зберігаємо поточне запитання та відповідь
  gameState.currentQuestion = `${num1} ${operation} ${num2}`;
  gameState.currentAnswer = answer;
  
  // Відображаємо запитання
  document.getElementById('math-question').textContent = `${num1} ${operation} ${num2} = ?`;
  
  // Створюємо варіанти відповідей (3 неправильних + 1 правильний)
  const correctAnswer = answer;
  let wrongAnswers = [];
  
  // Генеруємо неправильні відповіді близькі до правильної
  for (let i = 0; i < 3; i++) {
    let wrongAnswer;
    do {
      // Генеруємо число в межах ±20% від правильної відповіді, але не менше ±1
      const deviation = Math.max(1, Math.abs(Math.floor(correctAnswer * 0.2)));
      const randomOffset = Math.floor(Math.random() * (deviation * 2 + 1)) - deviation;
      wrongAnswer = correctAnswer + randomOffset;
      
      // Забезпечуємо, що неправильна відповідь відрізняється від правильної та інших неправильних
    } while (
      wrongAnswer === correctAnswer || 
      wrongAnswers.includes(wrongAnswer) ||
      wrongAnswer < settings.range[0] ||
      wrongAnswer > settings.range[1]
    );
    
    wrongAnswers.push(wrongAnswer);
  }
  
  // Об'єднуємо всі варіанти та перемішуємо
  const allOptions = [...wrongAnswers, correctAnswer].sort(() => Math.random() - 0.5);
  gameState.options = allOptions;
  
  // Створюємо кнопки з варіантами відповідей
  const optionsContainer = document.getElementById('math-options');
  optionsContainer.innerHTML = '';
  
  allOptions.forEach(option => {
    const button = document.createElement('button');
    button.className = 'btn option-btn';
    button.textContent = option;
    
    addButtonClickListener(button, () => {
      checkMathAnswer(option);
    });
    
    optionsContainer.appendChild(button);
  });
}

// Перевірка відповіді на запитання з прапором
function checkFlagAnswer(selectedCountry) {
  console.log(`Перевірка відповіді на запитання з прапором: ${selectedCountry}`);
  
  const isCorrect = selectedCountry === gameState.currentAnswer;
  
  // Відображаємо зворотній зв'язок
  showFeedback(isCorrect);
  
  // Виділяємо правильну та неправильну відповіді
  const optionButtons = document.querySelectorAll('#flag-options .option-btn');
  
  optionButtons.forEach(button => {
    if (button.textContent === gameState.currentAnswer) {
      button.classList.add('correct');
    } else if (button.textContent === selectedCountry && !isCorrect) {
      button.classList.add('incorrect');
    }
    
    // Вимикаємо кнопки на короткий час
    button.disabled = true;
  });
  
  // Якщо відповідь правильна, збільшуємо рахунок
  if (isCorrect) {
    gameState.flagsScore++;
    document.getElementById('flags-score').textContent = gameState.flagsScore;
  }
  
  // Генеруємо нове запитання через короткий час
  setTimeout(() => {
    optionButtons.forEach(button => {
      button.disabled = false;
      button.classList.remove('correct', 'incorrect');
    });
    
    generateFlagQuestion();
  }, 1500);
}

// Перевірка відповіді на математичне запитання
function checkMathAnswer(selectedAnswer) {
  console.log(`Перевірка відповіді на математичне запитання: ${selectedAnswer}`);
  
  const isCorrect = selectedAnswer === gameState.currentAnswer;
  
  // Відображаємо зворотній зв'язок
  showFeedback(isCorrect);
  
  // Виділяємо правильну та неправильну відповіді
  const optionButtons = document.querySelectorAll('#math-options .option-btn');
  
  optionButtons.forEach(button => {
    const buttonValue = parseInt(button.textContent);
    
    if (buttonValue === gameState.currentAnswer) {
      button.classList.add('correct');
    } else if (buttonValue === selectedAnswer && !isCorrect) {
      button.classList.add('incorrect');
    }
    
    // Вимикаємо кнопки на короткий час
    button.disabled = true;
  });
  
  // Якщо відповідь правильна, збільшуємо рахунок
  if (isCorrect) {
    gameState.mathScore++;
    document.getElementById('math-score').textContent = gameState.mathScore;
  }
  
  // Генеруємо нове запитання через короткий час
  setTimeout(() => {
    optionButtons.forEach(button => {
      button.disabled = false;
      button.classList.remove('correct', 'incorrect');
    });
    
    generateMathQuestion();
  }, 1500);
}

// Функція для відображення зворотного зв'язку
function showFeedback(isCorrect) {
  console.log(`Відображення зворотного зв'язку: ${isCorrect ? 'правильно' : 'неправильно'}`);
  
  // Встановлюємо клас та текст залежно від правильності відповіді
  answerFeedback.className = isCorrect ? 'feedback correct' : 'feedback incorrect';
  document.getElementById('feedback-text').textContent = isCorrect ? 'Правильно! 👍' : 'Неправильно! 👎';
  
  // Показуємо зворотній зв'язок
  answerFeedback.classList.remove('hidden');
  
  // Ховаємо зворотній зв'язок через короткий час
  setTimeout(() => {
    answerFeedback.classList.add('hidden');
  }, 1000);
}