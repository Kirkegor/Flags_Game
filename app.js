// Дані гри
const gameData = {
  beginner: {
    name: "Початковий",
    countries: ["США", "Велика Британія", "Франція", "Німеччина", "Японія", "Канада", "Австралія", "Італія", "Іспанія", "Бразилія", "Китай", "Росія", "Індія", "Мексика", "Аргентина", "Південна Корея", "Нідерланди", "Швеція", "Норвегія", "Швейцарія", "Бельгія", "Австрія", "Польща", "Туреччина", "Греція", "Португалія", "Чехія", "Ірландія", "Данія", "Фінляндія", "Нова Зеландія", "ПАР", "Єгипет", "Ізраїль", "Саудівська Аравія", "Таїланд", "Сінгапур", "Україна"],
    flags: ["🇺🇸", "🇬🇧", "🇫🇷", "🇩🇪", "🇯🇵", "🇨🇦", "🇦🇺", "🇮🇹", "🇪🇸", "🇧🇷", "🇨🇳", "🇷🇺", "🇮🇳", "🇲🇽", "🇦🇷", "🇰🇷", "🇳🇱", "🇸🇪", "🇳🇴", "🇨🇭", "🇧🇪", "🇦🇹", "🇵🇱", "🇹🇷", "🇬🇷", "🇵🇹", "🇨🇿", "🇮🇪", "🇩🇰", "🇫🇮", "🇳🇿", "🇿🇦", "🇪🇬", "🇮🇱", "🇸🇦", "🇹🇭", "🇸🇬", "🇺🇦"]
  },
  intermediate: {
    name: "Середній",
    countries: ["США", "Велика Британія", "Франція", "Німеччина", "Японія", "Канада", "Австралія", "Італія", "Іспанія", "Бразилія", "Китай", "Росія", "Індія", "Мексика", "Аргентина", "Південна Корея", "Нідерланди", "Швеція", "Норвегія", "Швейцарія", "Бельгія", "Австрія", "Польща", "Туреччина", "Греція", "Португалія", "Чехія", "Ірландія", "Данія", "Фінляндія", "Нова Зеландія", "ПАР", "Єгипет", "Ізраїль", "Саудівська Аравія", "Таїланд", "Сінгапур", "Україна", "Індонезія", "Пакистан", "Нігерія", "Бангладеш", "В'єтнам", "Філіппіни", "Ефіопія", "Іран", "Ірак", "Афганістан", "Узбекистан", "Малайзія", "Непал", "Шрі-Ланка", "М'янма", "Камбоджа", "Лаос", "Йорданія", "Ліван", "ОАЕ", "Кувейт", "Катар", "Бахрейн", "Оман", "Ємен", "Марокко", "Алжир", "Туніс", "Лівія", "Судан", "Кенія", "Танзанія", "Уганда", "Гана", "Сенегал", "Малі", "Буркіна-Фасо", "Нігер", "Чад", "Камерун", "ДР Конго", "Ангола", "Замбія", "Зімбабве", "Ботсвана", "Намібія", "Мозамбік", "Мадагаскар", "Маврикій", "Румунія", "Болгарія", "Сербія", "Хорватія", "Словенія", "Словаччина", "Угорщина", "Литва", "Латвія", "Естонія", "Білорусь", "Молдова", "Грузія", "Вірменія", "Азербайджан", "Казахстан", "Киргизстан", "Таджикистан", "Туркменістан"],
    flags: ["🇺🇸", "🇬🇧", "🇫🇷", "🇩🇪", "🇯🇵", "🇨🇦", "🇦🇺", "🇮🇹", "🇪🇸", "🇧🇷", "🇨🇳", "🇷🇺", "🇮🇳", "🇲🇽", "🇦🇷", "🇰🇷", "🇳🇱", "🇸🇪", "🇳🇴", "🇨🇭", "🇧🇪", "🇦🇹", "🇵🇱", "🇹🇷", "🇬🇷", "🇵🇹", "🇨🇿", "🇮🇪", "🇩🇰", "🇫🇮", "🇳🇿", "🇿🇦", "🇪🇬", "🇮🇱", "🇸🇦", "🇹🇭", "🇸🇬", "🇺🇦", "🇮🇩", "🇵🇰", "🇳🇬", "🇧🇩", "🇻🇳", "🇵🇭", "🇪🇹", "🇮🇷", "🇮🇶", "🇦🇫", "🇺🇿", "🇲🇾", "🇳🇵", "🇱🇰", "🇲🇲", "🇰🇭", "🇱🇦", "🇯🇴", "🇱🇧", "🇦🇪", "🇰🇼", "🇶🇦", "🇧🇭", "🇴🇲", "🇾🇪", "🇲🇦", "🇩🇿", "🇹🇳", "🇱🇾", "🇸🇩", "🇰🇪", "🇹🇿", "🇺🇬", "🇬🇭", "🇸🇳", "🇲🇱", "🇧🇫", "🇳🇪", "🇹🇩", "🇨🇲", "🇨🇩", "🇦🇴", "🇿🇲", "🇿🇼", "🇧🇼", "🇳🇦", "🇲🇿", "🇲🇬", "🇲🇺", "🇷🇴", "🇧🇬", "🇷🇸", "🇭🇷", "🇸🇮", "🇸🇰", "🇭🇺", "🇱🇹", "🇱🇻", "🇪🇪", "🇧🇾", "🇲🇩", "🇬🇪", "🇦🇲", "🇦🇿", "🇰🇿", "🇰🇬", "🇹🇯", "🇹🇲"]
  },
  advanced: {
    name: "Просунутий",
    countries: ["Афганістан", "Албанія", "Алжир", "Андорра", "Ангола", "Антигуа і Барбуда", "Аргентина", "Вірменія", "Австралія", "Австрія", "Азербайджан", "Багамські острови", "Бахрейн", "Бангладеш", "Барбадос", "Білорусь", "Бельгія", "Беліз", "Бенін", "Бутан", "Болівія", "Боснія і Герцеговина", "Ботсвана", "Бразилія", "Бруней", "Болгарія", "Буркіна-Фасо", "Бурунді", "Кабо-Верде", "Камбоджа", "Камерун", "Канада", "ЦАР", "Чад", "Чілі", "Китай", "Колумбія", "Коморські острови", "ДР Конго", "Республіка Конго", "Коста-Ріка", "Хорватія", "Куба", "Кіпр", "Чехія", "Данія", "Джібуті", "Домініка", "Домініканська Республіка", "Еквадор", "Єгипет", "Ель Сальвадор", "Екваторіальна Гвінея", "Еритрея", "Естонія", "Есватіні", "Ефіопія", "Фіджі", "Фінляндія", "Франція", "Габон", "Гамбія", "Грузія", "Німеччина", "Гана", "Греція", "Гренада", "Гватемала", "Гвінея", "Гвінея-Бісау", "Гаяна", "Гаїті", "Гондурас", "Угорщина", "Ісландія", "Індія", "Індонезія", "Іран", "Ірак", "Ірландія", "Ізраїль", "Італія", "Кот-д'Івуар", "Ямайка", "Японія", "Йорданія", "Казахстан", "Кенія", "Кірибаті", "КНДР", "Південна Корея", "Кувейт", "Киргизстан", "Лаос", "Латвія", "Ліван", "Лесото", "Ліберія", "Лівія", "Ліхтенштейн", "Литва", "Люксембург", "Мадагаскар", "Малаві", "Малайзія", "Мальдіви", "Малі", "Мальта", "Маршаллові острови", "Мавританія", "Маврикій", "Мексика", "Мікронезія", "Молдова", "Монако", "Монголія", "Чорногорія", "Марокко", "Мозамбік", "М'янма", "Намібія", "Науру", "Непал", "Нідерланди", "Нова Зеландія", "Нікарагуа", "Нігер", "Нігерія", "Північна Македонія", "Норвегія", "Оман", "Пакистан", "Палау", "Панама", "Папуа-Нова Гвінея", "Парагвай", "Перу", "Філіппіни", "Польща", "Португалія", "Катар", "Румунія", "Росія", "Руанда", "Сент-Кітс і Невіс", "Сент-Люсія", "Сент-Вінсент і Гренадини", "Самоа", "Сан-Марино", "Сан-Томе і Принсіпі", "Саудівська Аравія", "Сенегал", "Сербія", "Сейшельські острови", "Сьєрра-Леоне", "Сінгапур", "Словаччина", "Словенія", "Соломонові острови", "Сомалі", "ПАР", "Південний Судан", "Іспанія", "Шрі-Ланка", "Судан", "Суринам", "Швеція", "Швейцарія", "Сирія", "Таджикистан", "Танзанія", "Таїланд", "Тімор-Лешті", "Того", "Тонга", "Тринідад і Тобаго", "Туніс", "Туреччина", "Туркменістан", "Тувалу", "Уганда", "Україна", "ОАЕ", "Велика Британія", "США", "Уругвай", "Узбекистан", "Вануату", "Ватикан", "Венесуела", "В'єтнам", "Ємен", "Замбія", "Зімбабве"],
    flags: ["🇦🇫", "🇦🇱", "🇩🇿", "🇦🇩", "🇦🇴", "🇦🇬", "🇦🇷", "🇦🇲", "🇦🇺", "🇦🇹", "🇦🇿", "🇧🇸", "🇧🇭", "🇧🇩", "🇧🇧", "🇧🇾", "🇧🇪", "🇧🇿", "🇧🇯", "🇧🇹", "🇧🇴", "🇧🇦", "🇧🇼", "🇧🇷", "🇧🇳", "🇧🇬", "🇧🇫", "🇧🇮", "🇨🇻", "🇰🇭", "🇨🇲", "🇨🇦", "🇨🇫", "🇹🇩", "🇨🇱", "🇨🇳", "🇨🇴", "🇰🇲", "🇨🇩", "🇨🇬", "🇨🇷", "🇭🇷", "🇨🇺", "🇨🇾", "🇨🇿", "🇩🇰", "🇩🇯", "🇩🇲", "🇩🇴", "🇪🇨", "🇪🇬", "🇸🇻", "🇬🇶", "🇪🇷", "🇪🇪", "🇸🇿", "🇪🇹", "🇫🇯", "🇫🇮", "🇫🇷", "🇬🇦", "🇬🇲", "🇬🇪", "🇩🇪", "🇬🇭", "🇬🇷", "🇬🇩", "🇬🇹", "🇬🇳", "🇬🇼", "🇬🇾", "🇭🇹", "🇭🇳", "🇭🇺", "🇮🇸", "🇮🇳", "🇮🇩", "🇮🇷", "🇮🇶", "🇮🇪", "🇮🇱", "🇮🇹", "🇨🇮", "🇯🇲", "🇯🇵", "🇯🇴", "🇰🇿", "🇰🇪", "🇰🇮", "🇰🇵", "🇰🇷", "🇰🇼", "🇰🇬", "🇱🇦", "🇱🇻", "🇱🇧", "🇱🇸", "🇱🇷", "🇱🇾", "🇱🇮", "🇱🇹", "🇱🇺", "🇲🇬", "🇲🇼", "🇲🇾", "🇲🇻", "🇲🇱", "🇲🇹", "🇲🇭", "🇲🇷", "🇲🇺", "🇲🇽", "🇫🇲", "🇲🇩", "🇲🇨", "🇲🇳", "🇲🇪", "🇲🇦", "🇲🇿", "🇲🇲", "🇳🇦", "🇳🇷", "🇳🇵", "🇳🇱", "🇳🇿", "🇳🇮", "🇳🇪", "🇳🇬", "🇲🇰", "🇳🇴", "🇴🇲", "🇵🇰", "🇵🇼", "🇵🇦", "🇵🇬", "🇵🇾", "🇵🇪", "🇵🇭", "🇵🇱", "🇵🇹", "🇶🇦", "🇷🇴", "🇷🇺", "🇷🇼", "🇰🇳", "🇱🇨", "🇻🇨", "🇼🇸", "🇸🇲", "🇸🇹", "🇸🇦", "🇸🇳", "🇷🇸", "🇸🇨", "🇸🇱", "🇸🇬", "🇸🇰", "🇸🇮", "🇸🇧", "🇸🇴", "🇿🇦", "🇸🇸", "🇪🇸", "🇱🇰", "🇸🇩", "🇸🇷", "🇸🇪", "🇨🇭", "🇸🇾", "🇹🇯", "🇹🇿", "🇹🇭", "🇹🇱", "🇹🇬", "🇹🇴", "🇹🇹", "🇹🇳", "🇹🇷", "🇹🇲", "🇹🇻", "🇺🇬", "🇺🇦", "🇦🇪", "🇬🇧", "🇺🇸", "🇺🇾", "🇺🇿", "🇻🇺", "🇻🇦", "🇻🇪", "🇻🇳", "🇾🇪", "🇿🇲", "🇿🇼"]
  },
  expert: {
    name: "Найскладніший",
    groups: [
      {
        countries: ["Чад", "Румунія", "Андорра", "Молдова"],
        flags: ["🇹🇩", "🇷🇴", "🇦🇩", "🇲🇩"]
      },
      {
        countries: ["Індонезія", "Монако", "Польща", "Сінгапур"],
        flags: ["🇮🇩", "🇲🇨", "🇵🇱", "🇸🇬"]
      },
      {
        countries: ["Австралія", "Нова Зеландія", "Фіджі", "Тувалу"],
        flags: ["🇦🇺", "🇳🇿", "🇫🇯", "🇹🇻"]
      },
      {
        countries: ["Люксембург", "Нідерланди", "Хорватія", "Парагвай"],
        flags: ["🇱🇺", "🇳🇱", "🇭🇷", "🇵🇾"]
      },
      {
        countries: ["Ірландія", "Кот-д'Івуар", "Індія", "Нігер"],
        flags: ["🇮🇪", "🇨🇮", "🇮🇳", "🇳🇪"]
      },
      {
        countries: ["Сенегал", "Малі", "Гвінея", "Камерун"],
        flags: ["🇸🇳", "🇲🇱", "🇬🇳", "🇨🇲"]
      },
      {
        countries: ["Росія", "Словаччина", "Словенія", "Сербія"],
        flags: ["🇷🇺", "🇸🇰", "🇸🇮", "🇷🇸"]
      },
      {
        countries: ["Бангладеш", "Японія", "Палау", "Лаос"],
        flags: ["🇧🇩", "🇯🇵", "🇵🇼", "🇱🇦"]
      },
      {
        countries: ["Гондурас", "Ель Сальвадор", "Нікарагуа", "Гватемала"],
        flags: ["🇭🇳", "🇸🇻", "🇳🇮", "🇬🇹"]
      },
      {
        countries: ["Норвегія", "Ісландія", "Данія", "Фінляндія"],
        flags: ["🇳🇴", "🇮🇸", "🇩🇰", "🇫🇮"]
      }
    ]
  }
};

// Стан гри
let currentLevel = null;
let currentQuestion = 0;
let correctAnswers = 0;
let totalQuestions = 10;
let currentCorrectAnswer = null;
let gameQuestions = [];
let isAnswerSelected = false;

// DOM елементи
const screens = {
  menu: document.getElementById('main-menu'),
  game: document.getElementById('game-screen'),
  results: document.getElementById('results-screen')
};

const elements = {
  levelButtons: document.querySelectorAll('.level-btn'),
  backToMenuBtn: document.getElementById('back-to-menu'),
  backToMenuResultsBtn: document.getElementById('back-to-menu-results'),
  playAgainBtn: document.getElementById('play-again'),
  countryQuestion: document.getElementById('country-question'),
  questionCounter: document.getElementById('question-counter'),
  score: document.getElementById('score'),
  flagButtons: document.querySelectorAll('.flag-btn'),
  feedback: document.getElementById('feedback'),
  finalScoreText: document.getElementById('final-score-text'),
  scorePercentage: document.getElementById('score-percentage')
};

// Ініціалізація
function init() {
  // Додаємо обробники подій
  elements.levelButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const level = e.currentTarget.getAttribute('data-level');
      startGame(level);
    });
  });

  elements.backToMenuBtn.addEventListener('click', showMainMenu);
  elements.backToMenuResultsBtn.addEventListener('click', showMainMenu);
  elements.playAgainBtn.addEventListener('click', () => startGame(currentLevel));

  elements.flagButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (!isAnswerSelected) {
        selectAnswer(index);
      }
    });
  });
}

// Функції переключення екранів
function showScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
}

function showMainMenu() {
  showScreen('menu');
  resetGame();
}

function showGameScreen() {
  showScreen('game');
}

function showResultsScreen() {
  showScreen('results');
  displayResults();
}

// Функції гри
function startGame(level) {
  currentLevel = level;
  currentQuestion = 0;
  correctAnswers = 0;
  generateQuestions();
  showGameScreen();
  showNextQuestion();
}

function resetGame() {
  currentLevel = null;
  currentQuestion = 0;
  correctAnswers = 0;
  gameQuestions = [];
  isAnswerSelected = false;
  elements.feedback.classList.add('hidden');
  
  // Скидаємо стилі кнопок
  elements.flagButtons.forEach(btn => {
    btn.className = 'flag-btn';
  });
}

function generateQuestions() {
  gameQuestions = [];
  const levelData = gameData[currentLevel];
  
  if (currentLevel === 'expert') {
    // Для найскладнішого рівня генеруємо питання з груп схожих прапорів
    for (let i = 0; i < totalQuestions; i++) {
      const randomGroup = levelData.groups[Math.floor(Math.random() * levelData.groups.length)];
      const correctIndex = Math.floor(Math.random() * randomGroup.countries.length);
      
      gameQuestions.push({
        country: randomGroup.countries[correctIndex],
        correctFlag: randomGroup.flags[correctIndex],
        options: [...randomGroup.flags],
        correctIndex: correctIndex
      });
    }
  } else {
    // Для інших рівнів генеруємо звичайні питання
    for (let i = 0; i < totalQuestions; i++) {
      const correctIndex = Math.floor(Math.random() * levelData.countries.length);
      const correctCountry = levelData.countries[correctIndex];
      const correctFlag = levelData.flags[correctIndex];
      
      // Генеруємо 3 неправильні варіанти
      const wrongFlags = [];
      while (wrongFlags.length < 3) {
        const randomIndex = Math.floor(Math.random() * levelData.flags.length);
        const flag = levelData.flags[randomIndex];
        if (flag !== correctFlag && !wrongFlags.includes(flag)) {
          wrongFlags.push(flag);
        }
      }
      
      // Створюємо массив варіантів і перемішуємо їх
      const options = [correctFlag, ...wrongFlags];
      const shuffledOptions = shuffleArray(options);
      const newCorrectIndex = shuffledOptions.indexOf(correctFlag);
      
      gameQuestions.push({
        country: correctCountry,
        correctFlag: correctFlag,
        options: shuffledOptions,
        correctIndex: newCorrectIndex
      });
    }
  }
}

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function showNextQuestion() {
  if (currentQuestion >= totalQuestions) {
    showResultsScreen();
    return;
  }
  
  isAnswerSelected = false;
  const question = gameQuestions[currentQuestion];
  currentCorrectAnswer = question.correctIndex;
  
  // Оновлюємо UI
  elements.countryQuestion.textContent = question.country;
  elements.questionCounter.textContent = `Питання ${currentQuestion + 1} з ${totalQuestions}`;
  elements.score.textContent = `Правильно: ${correctAnswers}`;
  
  // Оновлюємо прапори та скидаємо стилі
  elements.flagButtons.forEach((btn, index) => {
    const flagEmoji = btn.querySelector('.flag-emoji');
    flagEmoji.textContent = question.options[index];
    btn.className = 'flag-btn'; // Скидаємо всі класи
  });
  
  // Ховаємо фідбек
  elements.feedback.classList.add('hidden');
}

function selectAnswer(selectedIndex) {
  if (isAnswerSelected) return;
  
  isAnswerSelected = true;
  
  // Відключаємо всі кнопки
  elements.flagButtons.forEach(btn => btn.classList.add('disabled'));
  
  const isCorrect = selectedIndex === currentCorrectAnswer;
  
  // Додаємо візуальний фідбек
  elements.flagButtons[selectedIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
  
  if (!isCorrect) {
    // Показуємо правильну відповідь
    elements.flagButtons[currentCorrectAnswer].classList.add('correct');
  }
  
  // Показуємо фідбек
  showFeedback(isCorrect);
  
  if (isCorrect) {
    correctAnswers++;
  }
  
  // Переходимо до наступного питання через 2.5 секунди
  setTimeout(() => {
    currentQuestion++;
    showNextQuestion();
  }, 2500);
}

function showFeedback(isCorrect) {
  const feedback = elements.feedback;
  const feedbackIcon = feedback.querySelector('.feedback-icon');
  const feedbackText = feedback.querySelector('.feedback-text');
  
  if (isCorrect) {
    feedbackIcon.textContent = '✅';
    feedbackText.textContent = 'Правильно!';
    feedback.classList.remove('error');
  } else {
    feedbackIcon.textContent = '❌';
    feedbackText.textContent = 'Неправильно!';
    feedback.classList.add('error');
  }
  
  feedback.classList.remove('hidden');
}

function displayResults() {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  elements.finalScoreText.textContent = 
    `Ви правильно відповіли на ${correctAnswers} з ${totalQuestions} питань`;
  elements.scorePercentage.textContent = `${percentage}%`;
  
  // Додаємо повідомлення залежно від результату
  let encouragementMessage = '';
  if (percentage >= 90) {
    encouragementMessage = 'Відмінно! 🌟';
  } else if (percentage >= 70) {
    encouragementMessage = 'Добре! 👏';
  } else if (percentage >= 50) {
    encouragementMessage = 'Непогано! 👍';
  } else {
    encouragementMessage = 'Спробуйте ще раз! 💪';
  }
  
  const resultsHeader = document.querySelector('.results-header h2');
  resultsHeader.textContent = encouragementMessage;
}

// Запускаємо додаток
document.addEventListener('DOMContentLoaded', init);