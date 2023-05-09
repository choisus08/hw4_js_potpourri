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

/* Trolls are attacking your comment section! Let's neutralize the threat by removing all vowels from their comments. 
That'll make them look real silly. Write a function named trollsBeGone which receives one argument that should be a sentence (a string). 
The function should return a new string with all the vowels removed from the original string. */

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

/* Make an object named bankInfo with your banking info that includes the keys listed below. 
Each key should have a number value that can either be negative or positive (e.g. -500 or 500). 
savings
checking
moneyMarket
creditCard
*/

const bankInfo = {
    savings: 400,
    checking: 200,
    moneyMarket: 100,
    creditCard: -500
}

/* Write a function called bankAccountSummary that accepts your bankInfo object as an argument. 
The function should calculate the total of your bank account and return it. */

// Save your bankAccountSummary total to a variable called bankTotal

const bankAccountSummary = ({savings, checking, moneyMarket, creditCard}) => {
    const bankTotal = savings + checking + moneyMarket + creditCard
    return bankTotal
   
}
console.log(bankAccountSummary(bankInfo))


/* Write another function called inTheRed that accepts your bank account summary total (number) as an argument. 
The function should return true if your total is less than 0, and false otherwise. */


const inTheRed = (num) => {
    if (num<0) {
        return true
    }else {
        return false
    }
}
console.log(inTheRed(bankAccountSummary(bankInfo)))

//////////// MadLibs ////////////

