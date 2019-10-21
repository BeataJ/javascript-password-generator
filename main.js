// Generator functions - http://www.net-comber/charset.html

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbole() {
  const symbole = '!@#$%^&*(){}[]=<>/,.';
  return symbole[Math.floor(Math.random() * symbole.length)];
}

