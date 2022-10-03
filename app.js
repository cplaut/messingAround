console.log(3+4);


if (1 !== 1){
    console.log("It's True!");
}

let rating = 'rrr'

if (rating === 3) {
    console.log("You are awesome!");
}

let num = 13

if (num % 2 === 0){
    console.log("EVEN!");
}
else if (num % 2 !== 0){
    console.log("ODD!")
}

else {
    console.log("Both??")
}

let highScore = 2250
let userScore = 2008760

if (userScore >= highScore){
    console.log(`Congrats! Your score of ${userScore} is the new Highscore!`)
}

else [
    console.log(`Your score of ${userScore} did not beat the highscore of ${highScore}`)
]

let password = "me t0000o";
    if(password.length >= 6 && password.indexOf(' ') === -1){
        console.log("Valid Password!") 
    } 
    else{
        console.log("Invalid Password!")
    }

    let age = 35

    if(age <= 6 || age >= 65){
        console.log("You get in for free!")
    }
    else{
        console.log("Caught it up($10!)")
    }

let phone = 11

phone === 14 ? console.log ("Nice!") : console.log("You should upgrade!");

let lotto = [ 45 , 56 , 23 , 5364 ];

let colors = [ 'red', 'blue', 'green' ]

const numbersss = {
    100: 'One Hundred',
    106: 'One Million'
}

function divide (a, b){
    console.log(b / a)
}


function containsGreen (arr){
    for(let color of arr){
        if (color.toLowerCase() === 'green'){
            return true
        }
    }
    return false
}

function isValidPassword(password, username){
    if (password.length < 8){
        return false
    }
    if (password.includes(' ') === true){
        return false
    }
    if (password.includes(username) === true){
        return false
    }
    return true
}

function avg(arr){
    let sum = 0
    // let length = arr.length
    for(let i = 0; i < length; i++){
        sum += arr[i]
    }
    return sum / arr.length
}

function isPangram(sentence) {
    let alphabet = 'qwertyuiopasdfghjklzxcvbnm';
    let letters = sentence.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (letters.indexOf(alphabet[i]) === -1) {
            return false
        }
        
    }
    return true
}  

function isPangram2(sentence) {
    let alphabet = 'qwertyuiopasdfghjklzxcvbnm'
    let letters = sentence.toLowerCase()
    for (let char of alphabet) {
        if (letters.indexOf(char) === -1) {
            return false
        }
    }
    return true
}

function getCard() {
    const nums = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];

    const numPick = Math.floor(Math.random() * nums.length);
    const suitPick = Math.floor(Math.random() * suits.length);

    const cardNum = nums[numPick];
    const cardSuit = suits[suitPick];

    console.log(cardNum, cardSuit);
    return {Number : cardNum, Suit : cardSuit}
}


