const button = document.querySelector('#sub');
const res = document.querySelector('#result');
const input = document.querySelector('#input');

const resetBtn = document.querySelector('#reset').addEventListener('click',function(e){
  window.location.reload();
  e.preventDefault();
});

button.addEventListener('click', x);

let min = 1,
    max = 10,
    trys = 4;
    const rand = Math.floor(Math.random() * (max - min +1)) + min;
    console.log(rand);   

function x (e){

  let guess = parseInt(input.value);
  console.log('in:' + guess)
  trys -= 1;

  if(guess === rand){
    res.textContent = 'Good job, you guessed a right number.';
    res.style.color = 'green';
    button.disabled = true;
  }else{
    res.textContent = 'Sorry you guessed wrong you have, ' + trys + " guesses left.";
    res.style.color = 'red';
  }
  
  if(trys === 0){
    button.disabled = true;
    res.textContent = 'You spended your guesses right number was ' + rand + ', try again?';
    res.style.color = 'red';
  }
  button.className += 'play-again';
  
  e.preventDefault();
}
