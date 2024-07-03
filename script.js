const dictionary = {
  car: "araba",
  pen: "kalem",
  mouse: "fare",
  water: "su",
  hand: "el",
};

const wordsEN = Object.keys(dictionary);
const wordsTR = Object.values(dictionary);

const displayEN = document.getElementById("wordText");
const displayTR = document.getElementById("answerText");

function showWord() {
  const random = Math.floor(Math.random() * wordsEN.length);

  const randomEN = wordsEN[random];
  const randomTR = wordsTR[random];

  displayEN.innerHTML = randomEN.toUpperCase();

  displayTR.addEventListener("click", function () {
    displayTR.innerHTML = randomTR.toUpperCase();
  });

  console.log(random);
}

const yes = document.getElementById("yes");
const not = document.getElementById("not");

yes.addEventListener("click", function () {
  displayTR.innerHTML = "Show Answer";
  showWord();
});
not.addEventListener("click", function () {
  displayTR.innerHTML = "Show Answer";
  showWord();
});

showWord();
