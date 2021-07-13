let number, french, english;
let cardIteration = 0;
const jsonUrl = ('./1000_words.json');
const cardBack = document.getElementById('card__item__back');
const sourceLang = document.getElementById('source-language');
const targetLang = document.getElementById('target-language');
const showAnswer = document.getElementById('btn--show');
const nextCard = document.getElementById('btn--next');
const hardChoice = document.getElementById('btn--hard');
const goodChoice = document.getElementById('btn--good');
const easyChoice = document.getElementById('btn--easy');

cardBack.style.display = 'none';

function getData () {
  fetch(jsonUrl)
  .then(response => {
    return response.json();
  }).then(data => {

    // remove cardIteration and use random card
    // let randomWord = Math.floor(Math.random() * 1000);
    // console.log(randomWord);

    number = data[cardIteration].Number;
    french = data[cardIteration].French;
    english = data[cardIteration].English;

    // console.log(data[0].English);
    sourceLang.textContent = french;
    targetLang.textContent = english;
  });
}
getData();

showAnswer.addEventListener('click', () => {
    cardBack.style.display = '';
});

nextCard.addEventListener('click', () => {
  cardBack.style.display = 'none';
  cardIteration++;
  getData();
});