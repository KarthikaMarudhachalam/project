let randomNumber=Math.floor(Math.random()*10)+1;
const guessInput=document.getElementById('guessInput');
const guessButton=document.getElementById('guessButton');
const result=document.getElementById('result');
const resetButton=document.getElementById('resetButton');

guessButton.addEventListener('click',()=>{
    const userInput=Number(guessInput.value);
    console.log('User :',userInput);
    console.log('Random guess:',randomNumber);

    if(userInput===randomNumber){
        result.textContent='Congragulations!You win';
    resetButton.style.display='inline-block';
    }else if(userInput>randomNumber){
        result.textContent='OH OH You guessed high number!Try Again!!';
    }else{
        result.textContent='OH OH You guessed low number!Try Again!!';
    }
});

resetButton.addEventListener('click',()=>{
    randomNumber=Math.floor(Math.random() *10)+1;
    guessInput.value='';
    result.textContent='';

    resetButton.style.display=' ';
});
