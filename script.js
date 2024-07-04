const displayEN = document.getElementById("wordText");
const displayTR = document.getElementById("answerText");

const newEN = document.getElementById("key");
const newTR = document.getElementById("value");
const addWord = document.getElementById("newWords");

const yesButton = document.getElementById("yes");
const notButton = document.getElementById("not");

// Storage

addWord.addEventListener("click", newWord);

function newWord() {
  key = newEN.value.trim();
  value = newTR.value.trim();

  localStorage.setItem(key, value);

  newEN.value = "";
  newTR.value = "";
}

// Display

function randomWord() {
  const random = Math.floor(Math.random() * localStorage.length);
  const randomKey = localStorage.key(random);
  const word = localStorage.getItem(randomKey);

  displayEN.innerHTML = randomKey.toUpperCase();

  displayTR.addEventListener("click", function () {
    displayTR.innerHTML = word.toUpperCase();
  });

  displayTR.innerHTML = "Show Answer";
}

// Change Word

yesButton.addEventListener("click", randomWord);
notButton.addEventListener("click", randomWord);

randomWord();
