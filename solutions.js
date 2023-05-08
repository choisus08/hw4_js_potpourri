//////////// setAlarm ////////////

//Write a function named setAlarm that has two arguments.
// The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
//The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)

const setAlarm = (employed, vacationing) => {
    if (employed === true && vacationing === false) {
        console.log(true)
    }else {
        console.log(false)
    }
}
setAlarm(true, false);
setAlarm(false, false);
setAlarm(false, true);
setAlarm(true, true);


//////////// Count Odd Numbers ////////////

// Write a function named oddNumberCount which receives one argument that should be a number. 
// cThe function should return how many positive odd numbers there are below the number passed into the argument.

const oddNumberCount = (num) => {
    let count = 0;  // variable to start the count
    // create a for loop that will loop through num (any given number) 
    for (let i =1; i<num; i+=2) { // will loop through every other num
        count++  // add each time the loops meets an odd number
        }
        console.log(count);
    }
oddNumberCount(7);

//////////// Disemvoweling Trolls ////////////

const trollsBeGone = (string) => {
    // create a variable that contains vowels in an array
    const vowels = ['a','e','i','o','u','A','E','I','O','U']
    let newString = "";
    
    for (let char of string) {
        if (vowels.indexOf(char) === -1) {
        newString += char
        }
    }
    return newString
   
} 
console.log(trollsBeGone("This website is for losers LOL"))


//////////// Bank Account Summary ////////////

const bankInfo = {
    savings: 500,
    checking: 300,
    moneyMarket: -100,
    creditCard: -200
}

const bankAccountSummary = ({savings, checking, moneyMarket, creditCard}) => {
    console.log(savings + checking + moneyMarket + creditCard);

}
bankAccountSummary(bankInfo)

