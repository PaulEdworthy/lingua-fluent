
// let number, french, english;

fetch('./json_test.json')
  .then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    
    // number = data.number;
    // french = data.rench;
    // english = data.english; 
    console.log(data[0]);
    
  });

  

const sourceLang = document.getElementById('source-language');
const targetLang = document.getElementById('target-language');

// sourceLang.textContent = french;