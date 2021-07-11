let number, french, english;
let cardIteration = 0;
const jsonUrl = ('./1000_words.json');
const cardBack = document.getElementById('card__item__back');
const sourceLang = document.getElementById('source-language');
const targetLang = document.getElementById('target-language');
const showAnswer = document.getElementById('btn--show');
const nextCard = document.getElementById('btn__next');
const hardChoice = document.getElementById('btn--hard');
const goodChoice = document.getElementById('btn--good');
const easyChoice = document.getElementById('btn--easy');


function getData () {
  fetch(jsonUrl)
  .then(response => {
    return response.json();
  }).then(data => {

    number = data[cardIteration].Number;
    french = data[cardIteration].French;
    english = data[cardIteration].English;
    console.log(cardIteration);
    
    // console.log(data[0].English);
    sourceLang.textContent = french;
    targetLang.textContent = english;
  });
}
getData();
  
showAnswer.addEventListener('click', () => {
  cardBack.classList.toggle('card__item__back');
});

nextCard.addEventListener('click', () => {
  cardBack.classList.toggle('card__item__back');  
  cardIteration++;
  getData();
});
