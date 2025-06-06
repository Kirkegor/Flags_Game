// Game data
const gameData = {
  flags: {
    beginner: ["🇺🇸 США", "🇬🇧 Велика Британія", "🇫🇷 Франція", "🇩🇪 Німеччина", "🇯🇵 Японія", "🇨🇦 Канада", "🇦🇺 Австралія", "🇮🇹 Італія", "🇪🇸 Іспанія", "🇨🇳 Китай", "🇷🇺 Росія", "🇧🇷 Бразилія", "🇮🇳 Індія", "🇲🇽 Мексика", "🇰🇷 Південна Корея", "🇳🇱 Нідерланди", "🇸🇪 Швеція", "🇨🇭 Швейцарія", "🇳🇴 Норвегія", "🇦🇹 Австрія", "🇩🇰 Данія", "🇫🇮 Фінляндія", "🇵🇱 Польща", "🇹🇷 Туреччина", "🇬🇷 Греція", "🇵🇹 Португалія", "🇮🇪 Ірландія", "🇧🇪 Бельгія", "🇮🇱 Ізраїль", "🇿🇦 ПАР", "🇪🇬 Єгипет", "🇸🇦 Саудівська Аравія", "🇦🇷 Аргентина", "🇹🇭 Таїланд", "🇳🇿 Нова Зеландія", "🇻🇳 В'єтнам", "🇺🇦 Україна", "🇭🇺 Угорщина"],
    intermediate: ["🇧🇩 Бангладеш", "🇵🇰 Пакистан", "🇳🇬 Нігерія", "🇮🇩 Індонезія", "🇮🇷 Іран", "🇮🇶 Ірак", "🇲🇦 Марокко", "🇦🇫 Афганістан", "🇺🇿 Узбекистан", "🇲🇾 Малайзія", "🇰🇿 Казахстан", "🇦🇪 ОАЕ", "🇰🇼 Кувейт", "🇯🇴 Йорданія", "🇱🇧 Ліван", "🇸🇾 Сирія", "🇱🇾 Лівія", "🇸🇩 Судан", "🇪🇹 Ефіопія", "🇰🇪 Кенія"],
    advanced: ["🇦🇩 Андорра", "🇦🇪 ОАЕ", "🇦🇫 Афганістан", "🇦🇬 Антигуа і Барбуда", "🇦🇮 Ангілья", "🇦🇱 Албанія", "🇦🇲 Вірменія", "🇦🇴 Ангола", "🇦🇶 Антарктида", "🇦🇷 Аргентина", "🇦🇸 Американське Самоа", "🇦🇹 Австрія", "🇦🇺 Австралія", "🇦🇼 Аруба", "🇦🇽 Аландські острови", "🇦🇿 Азербайджан", "🇧🇦 Боснія і Герцеговина", "🇧🇧 Барбадос", "🇧🇩 Бангладеш", "🇧🇪 Бельгія", "🇧🇫 Буркіна-Фасо", "🇧🇬 Болгарія", "🇧🇭 Бахрейн", "🇧🇮 Бурунді", "🇧🇯 Бенін", "🇧🇱 Сен-Бартелемі", "🇧🇲 Бермудські острови", "🇧🇳 Бруней", "🇧🇴 Болівія", "🇧🇶 Бонайре", "🇧🇷 Бразилія", "🇧🇸 Багамські острови", "🇧🇹 Бутан", "🇧🇻 Острів Буве", "🇧🇼 Ботсвана", "🇧🇾 Білорусь", "🇧🇿 Беліз", "🇨🇦 Канада", "🇨🇨 Кокосові острови", "🇨🇩 ДР Конго", "🇨🇫 ЦАР", "🇨🇬 Республіка Конго", "🇨🇭 Швейцарія", "🇨🇮 Кот-д'Івуар", "🇨🇰 Острови Кука", "🇨🇱 Чилі", "🇨🇲 Камерун", "🇨🇳 Китай", "🇨🇴 Колумбія", "🇨🇷 Коста-Ріка", "🇨🇺 Куба", "🇨🇻 Кабо-Верде", "🇨🇼 Кюрасао", "🇨🇽 Острів Різдва", "🇨🇾 Кіпр", "🇨🇿 Чехія", "🇩🇪 Німеччина", "🇩🇯 Джібуті", "🇩🇰 Данія", "🇩🇲 Домініка", "🇩🇴 Домініканська Республіка", "🇩🇿 Алжир", "🇪🇨 Еквадор", "🇪🇪 Естонія", "🇪🇬 Єгипет", "🇪🇭 Западна Сахара", "🇪🇷 Еритрея", "🇪🇸 Іспанія", "🇪🇹 Ефіопія", "🇫🇮 Фінляндія", "🇫🇯 Фіджі", "🇫🇰 Фолклендські острови", "🇫🇲 Мікронезія", "🇫🇴 Фарерські острови", "🇫🇷 Франція", "🇬🇦 Габон", "🇬🇧 Велика Британія", "🇬🇩 Гренада", "🇬🇪 Грузія", "🇬🇫 Французька Гвіана", "🇬🇬 Гернсі", "🇬🇭 Гана", "🇬🇮 Гібралтар", "🇬🇱 Гренландія", "🇬🇲 Гамбія", "🇬🇳 Гвінея", "🇬🇵 Гваделупа", "🇬🇶 Екваторіальна Гвінея", "🇬🇷 Греція", "🇬🇸 Південна Георгія", "🇬🇹 Гватемала", "🇬🇺 Гуам", "🇬🇼 Гвінея-Бісау", "🇬🇾 Гаяна", "🇭🇰 Гонконг", "🇭🇲 Острів Херд", "🇭🇳 Гондурас", "🇭🇷 Хорватія", "🇭🇹 Гаїті", "🇭🇺 Угорщина", "🇮🇩 Індонезія", "🇮🇪 Ірландія", "🇮🇱 Ізраїль", "🇮🇲 Острів Мен", "🇮🇳 Індія", "🇮🇴 Британська територія в Індійському океані", "🇮🇶 Ірак", "🇮🇷 Іран", "🇮🇸 Ісландія", "🇮🇹 Італія", "🇯🇪 Джерсі", "🇯🇲 Ямайка", "🇯🇴 Йорданія", "🇯🇵 Японія", "🇰🇪 Кенія", "🇰🇬 Киргизстан", "🇰🇭 Камбоджа", "🇰🇮 Кірібаті", "🇰🇲 Коморські острови", "🇰🇳 Сент-Кітс і Невіс", "🇰🇵 Північна Корея", "🇰🇷 Південна Корея", "🇰🇼 Кувейт", "🇰🇾 Кайманові острови", "🇰🇿 Казахстан", "🇱🇦 Лаос", "🇱🇧 Ліван", "🇱🇨 Сент-Люсія", "🇱🇮 Ліхтенштейн", "🇱🇰 Шрі-Ланка", "🇱🇷 Ліберія", "🇱🇸 Лесото", "🇱🇹 Литва", "🇱🇺 Люксембург", "🇱🇻 Латвія", "🇱🇾 Лівія", "🇲🇦 Марокко", "🇲🇨 Монако", "🇲🇩 Молдова", "🇲🇪 Чорногорія", "🇲🇫 Сен-Мартен", "🇲🇬 Мадагаскар", "🇲🇭 Маршаллові острови", "🇲🇰 Македонія", "🇲🇱 Малі", "🇲🇲 М'янма", "🇲🇳 Монголія", "🇲🇴 Макао", "🇲🇵 Північні Маріанські острови", "🇲🇶 Мартініка", "🇲🇷 Мавританія", "🇲🇸 Монтсеррат", "🇲🇹 Мальта", "🇲🇺 Маврикій", "🇲🇻 Мальдіви", "🇲🇼 Малаві", "🇲🇽 Мексика", "🇲🇾 Малайзія", "🇲🇿 Мозамбік", "🇳🇦 Намібія", "🇳🇨 Нова Каледонія", "🇳🇪 Нігер", "🇳🇫 Острів Норфолк", "🇳🇬 Нігерія", "🇳🇮 Нікарагуа", "🇳🇱 Нідерланди", "🇳🇴 Норвегія", "🇳🇵 Непал", "🇳🇷 Науру", "🇳🇺 Ніуе", "🇳🇿 Нова Зеландія", "🇴🇲 Оман", "🇵🇦 Панама", "🇵🇪 Перу", "🇵🇫 Французька Полінезія", "🇵🇬 Папуа-Нова Гвінея", "🇵🇭 Філіппіни", "🇵🇰 Пакистан", "🇵🇱 Польща", "🇵🇲 Сен-П'єр і Мікелон", "🇵🇳 Піткерн", "🇵🇷 Пуерто-Ріко", "🇵🇸 Палестина", "🇵🇹 Португалія", "🇵🇼 Палау", "🇵🇾 Парагвай", "🇶🇦 Катар", "🇷🇪 Реюньйон", "🇷🇴 Румунія", "🇷🇸 Сербія", "🇷🇺 Росія", "🇷🇼 Руанда", "🇸🇦 Саудівська Аравія", "🇸🇧 Соломонові острови", "🇸🇨 Сейшельські острови", "🇸🇩 Судан", "🇸🇪 Швеція", "🇸🇬 Сінгапур", "🇸🇭 Острів Святої Олени", "🇸🇮 Словенія", "🇸🇯 Шпіцберген і Ян-Маєн", "🇸🇰 Словаччина", "🇸🇱 Сьєрра-Леоне", "🇸🇲 Сан-Марино", "🇸🇳 Сенегал", "🇸🇴 Сомалі", "🇸🇷 Суринам", "🇸🇸 Південний Судан", "🇸🇹 Сан-Томе і Принсіпі", "🇸🇻 Сальвадор", "🇸🇽 Сінт-Мартен", "🇸🇾 Сирія", "🇸🇿 Есватіні", "🇹🇦 Трістан-да-Кунья", "🇹🇨 Острови Теркс і Кайкос", "🇹🇩 Чад", "🇹🇫 Французькі Південні території", "🇹🇬 Того", "🇹🇭 Таїланд", "🇹🇯 Таджикистан", "🇹🇰 Токелау", "🇹🇱 Східний Тимор", "🇹🇲 Туркменістан", "🇹🇳 Туніс", "🇹🇴 Тонга", "🇹🇷 Туреччина", "🇹🇹 Трінідад і Тобаго", "🇹🇻 Тувалу", "🇹🇼 Тайвань", "🇹🇿 Танзанія", "🇺🇦 Україна", "🇺🇬 Уганда", "🇺🇲 Зовнішні малі острови США", "🇺🇸 США", "🇺🇾 Уругвай", "🇺🇿 Узбекистан", "🇻🇦 Ватикан", "🇻🇨 Сент-Вінсент і Гренадіни", "🇻🇪 Венесуела", "🇻🇬 Британські Віргінські острови", "🇻🇮 Американські Віргінські острови", "🇻🇳 В'єтнам", "🇻🇺 Вануату", "🇼🇫 Волліс і Футуна", "🇼🇸 Самоа", "🇽🇰 Косово", "🇾🇪 Ємен", "🇾🇹 Майотта", "🇿🇦 ПАР", "🇿🇲 Замбія", "🇿🇼 Зімбабве"],
    expert: [
      {country: "🇹🇩 Чад", similar: ["🇷🇴 Румунія", "🇫🇷 Франція", "🇧🇪 Бельгія"]},
      {country: "🇮🇩 Індонезія", similar: ["🇲🇨 Монако", "🇵🇱 Польща", "🇱🇺 Люксембург"]},
      {country: "🇳🇿 Нова Зеландія", similar: ["🇦🇺 Австралія", "🇫🇯 Фіджі", "🇹🇻 Тувалу"]},
      {country: "🇸🇳 Сенегал", similar: ["🇲🇱 Малі", "🇬🇼 Гвінея-Бісау", "🇬🇳 Гвінея"]},
      {country: "🇷🇴 Румунія", similar: ["🇹🇩 Чад", "🇫🇷 Франція", "🇧🇪 Бельгія"]},
      {country: "🇲🇨 Монако", similar: ["🇮🇩 Індонезія", "🇵🇱 Польща", "🇱🇺 Люксембург"]}
    ]
  },
  mathLevels: {
    beginner: {
      operations: ["+", "-"],
      maxResult: 100,
      maxOperand1: 10,
      maxOperand2: 90,
      allowNegative: false
    },
    intermediate: {
      operations: ["+", "-"],
      maxResult: 1000,
      maxOperand1: 100,
      maxOperand2: 900,
      allowNegative: false
    },
    advanced: {
      operations: ["+", "-"],
      maxResult: 1000,
      maxOperand1: 1000,
      maxOperand2: 1000,
      allowNegative: true
    },
    expert: {
      operations: ["+", "-", "×", "÷"],
      maxResult: 100,
      maxOperand1: 100,
      maxOperand2: 100,
      allowNegative: false,
      integerOnly: true
    }
  }
};

// Game state
let currentGame = null;
let currentLevel = null;
let currentQuestion = null;
let correctAnswer = null;
let stats = { correct: 0, total: 0 };
let isAnswering = false;

// DOM elements
const screens = {
  main: document.getElementById('mainMenu'),
  difficulty: document.getElementById('difficultyMenu'),
  game: document.getElementById('gameScreen')
};

const elements = {
  questionText: document.getElementById('questionText'),
  mathProblem: document.getElementById('mathProblem'),
  answerGrid: document.getElementById('answerGrid'),
  feedback: document.getElementById('feedback'),
  correctCount: document.getElementById('correctCount'),
  totalCount: document.getElementById('totalCount'),
  expertLevel: document.querySelector('.expert-level')
};

// Utility functions
function showScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function extractFlag(countryString) {
  return countryString.split(' ')[0];
}

function extractCountryName(countryString) {
  return countryString.substring(countryString.indexOf(' ') + 1);
}

// Math problem generation
function generateMathProblem(level) {
  const config = gameData.mathLevels[level];
  const operation = config.operations[random(0, config.operations.length - 1)];
  
  let num1, num2, answer;
  
  if (operation === '÷') {
    // For division, generate answer first to ensure integer result
    answer = random(1, Math.min(config.maxResult, 50));
    num2 = random(2, Math.min(config.maxOperand2, 20));
    num1 = answer * num2;
  } else if (operation === '×') {
    num1 = random(1, Math.min(config.maxOperand1, 20));
    num2 = random(1, Math.min(config.maxOperand2, 20));
    answer = num1 * num2;
  } else {
    // For addition and subtraction
    if (level === 'beginner') {
      num1 = random(1, config.maxOperand1);
      if (operation === '+') {
        num2 = random(1, config.maxResult - num1);
      } else {
        num2 = random(1, Math.min(num1, config.maxOperand2));
      }
    } else if (level === 'intermediate') {
      num1 = random(1, config.maxOperand1);
      if (operation === '+') {
        num2 = random(1, config.maxResult - num1);
      } else {
        num2 = random(1, Math.min(num1, config.maxOperand2));
      }
    } else if (level === 'advanced') {
      num1 = random(1, config.maxOperand1);
      num2 = random(1, config.maxOperand2);
    } else {
      num1 = random(1, config.maxOperand1);
      num2 = random(1, config.maxOperand2);
    }
    
    if (operation === '+') {
      answer = num1 + num2;
    } else {
      answer = num1 - num2;
    }
    
    // Check if negative result is allowed
    if (!config.allowNegative && answer < 0) {
      [num1, num2] = [num2, num1];
      answer = num1 - num2;
    }
  }
  
  return {
    problem: `${num1} ${operation} ${num2} = ?`,
    answer: answer,
    operands: [num1, num2],
    operation: operation
  };
}

function generateWrongAnswers(correctAnswer, operation) {
  const wrongAnswers = new Set();
  
  // Generate plausible wrong answers
  const variations = [
    correctAnswer + random(1, 10),
    correctAnswer - random(1, 10),
    correctAnswer + random(10, 50),
    correctAnswer - random(10, 50),
    Math.abs(correctAnswer) + random(1, 20),
    correctAnswer * 2,
    Math.floor(correctAnswer / 2),
    correctAnswer + random(-20, 20)
  ];
  
  for (const variation of variations) {
    if (variation !== correctAnswer && variation >= 0 && wrongAnswers.size < 3) {
      wrongAnswers.add(variation);
    }
  }
  
  // Fill remaining slots with random numbers
  while (wrongAnswers.size < 3) {
    const randomWrong = random(Math.max(0, correctAnswer - 50), correctAnswer + 50);
    if (randomWrong !== correctAnswer) {
      wrongAnswers.add(randomWrong);
    }
  }
  
  return Array.from(wrongAnswers).slice(0, 3);
}

// Game logic
function resetAnswerButtons() {
  const answerButtons = elements.answerGrid.querySelectorAll('.answer-btn');
  answerButtons.forEach(btn => {
    btn.disabled = false;
    btn.className = 'answer-btn';
  });
}

function startFlagsGame() {
  // Reset UI state
  resetAnswerButtons();
  elements.feedback.classList.add('hidden');
  
  const countries = gameData.flags[currentLevel];
  let questionCountry, options;
  
  if (currentLevel === 'expert') {
    const expertQuestion = countries[random(0, countries.length - 1)];
    questionCountry = expertQuestion.country;
    const similarFlags = expertQuestion.similar;
    options = shuffleArray([questionCountry, ...similarFlags]);
  } else {
    questionCountry = countries[random(0, countries.length - 1)];
    const wrongOptions = shuffleArray(countries.filter(c => c !== questionCountry)).slice(0, 3);
    options = shuffleArray([questionCountry, ...wrongOptions]);
  }
  
  // Display question
  elements.questionText.textContent = `Знайдіть прапор країни: ${extractCountryName(questionCountry)}`;
  elements.mathProblem.classList.add('hidden');
  elements.questionText.classList.remove('hidden');
  
  // Set up answer buttons
  const answerButtons = elements.answerGrid.querySelectorAll('.answer-btn');
  correctAnswer = extractFlag(questionCountry);
  
  answerButtons.forEach((btn, index) => {
    btn.innerHTML = `<span class="flag-emoji">${extractFlag(options[index])}</span>`;
    btn.dataset.answer = extractFlag(options[index]);
  });
}

function startMathGame() {
  // Reset UI state
  resetAnswerButtons();
  elements.feedback.classList.add('hidden');
  
  const problem = generateMathProblem(currentLevel);
  currentQuestion = problem;
  correctAnswer = problem.answer;
  
  // Display problem
  elements.mathProblem.textContent = problem.problem;
  elements.mathProblem.classList.remove('hidden');
  elements.questionText.classList.add('hidden');
  
  // Generate wrong answers
  const wrongAnswers = generateWrongAnswers(correctAnswer, problem.operation);
  const allAnswers = shuffleArray([correctAnswer, ...wrongAnswers]);
  
  // Set up answer buttons
  const answerButtons = elements.answerGrid.querySelectorAll('.answer-btn');
  answerButtons.forEach((btn, index) => {
    btn.textContent = allAnswers[index];
    btn.dataset.answer = allAnswers[index];
  });
}

function nextQuestion() {
  isAnswering = false;
  elements.feedback.classList.add('hidden');
  
  if (currentGame === 'flags') {
    startFlagsGame();
  } else {
    startMathGame();
  }
}

function checkAnswer(selectedAnswer) {
  if (isAnswering) return;
  isAnswering = true;
  
  const isCorrect = selectedAnswer.toString() === correctAnswer.toString();
  const answerButtons = elements.answerGrid.querySelectorAll('.answer-btn');
  
  // Update stats
  stats.total++;
  if (isCorrect) stats.correct++;
  
  elements.correctCount.textContent = stats.correct;
  elements.totalCount.textContent = stats.total;
  
  // Disable all buttons and show correct/incorrect styling immediately
  answerButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.answer === correctAnswer.toString()) {
      btn.classList.add('correct');
    } else if (btn.dataset.answer === selectedAnswer.toString() && !isCorrect) {
      btn.classList.add('incorrect');
    }
  });
  
  // Show feedback message immediately
  elements.feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
  elements.feedback.querySelector('.feedback-content').textContent = 
    isCorrect ? '✅ Правильно!' : `❌ Неправильно! Правильна відповідь: ${correctAnswer}`;
  elements.feedback.classList.remove('hidden');
  
  // Auto advance to next question after 1 second
  setTimeout(nextQuestion, 1000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Game selection
  document.querySelectorAll('.game-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      currentGame = this.dataset.game;
      
      // Show/hide expert level based on game type
      if (currentGame === 'math') {
        elements.expertLevel.classList.add('show');
      } else {
        elements.expertLevel.classList.remove('show');
      }
      
      showScreen('difficulty');
    });
  });
  
  // Level selection
  document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      currentLevel = this.dataset.level;
      
      // Reset stats
      stats = { correct: 0, total: 0 };
      elements.correctCount.textContent = '0';
      elements.totalCount.textContent = '0';
      isAnswering = false;
      
      showScreen('game');
      
      // Start appropriate game
      if (currentGame === 'flags') {
        startFlagsGame();
      } else {
        startMathGame();
      }
    });
  });
  
  // Answer selection using event delegation for better performance
  elements.answerGrid.addEventListener('click', function(e) {
    if (e.target.classList.contains('answer-btn') && !e.target.disabled && !isAnswering) {
      checkAnswer(e.target.dataset.answer);
    }
  });
  
  // Back buttons
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const currentScreen = this.closest('.screen');
      
      if (currentScreen.id === 'difficultyMenu') {
        showScreen('main');
      } else if (currentScreen.id === 'gameScreen') {
        isAnswering = false;
        showScreen('difficulty');
      }
    });
  });
  
  // Initialize
  showScreen('main');
});