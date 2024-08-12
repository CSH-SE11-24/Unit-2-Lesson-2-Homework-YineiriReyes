// In this homework, you will be building a "hangman" game. 
// Create a new variab-le and put a random word
let Word = "yineiri"
// Create a new variable called attempts and set it to 0
let attempts = 0

// Prompt the user to guess a letter
let letter = prompt("Enter a letter")

// Write an if statement that uses the includes() method to check if the letter is in the word -- Google the syntax!
// Tell the user if their letter is in the word
if (Word.includes(letter)) {
  console.log("yes that letter is in the word")
} else {
  console.log("incorrect,That isn't a correct letter!")
}

// Prompt the user to guess the word 
let wordGuess = prompt("guess the word")

// Increase attempts by 1
attempts++

// Write an if/else statement that checks if the user guess is equal to your word and tells the user
if (Word === wordGuess) {
  console.log("congratulations, thts is the word")
}


// Now we will combine this input a while loop!
// Create a while loop that runs while the user guess is not equal to the word
// In the while loop, copy the prompt and if/else check for a letter
while (wordGuess !== Word) {
  
  attempts++
  letter=prompt("guess the letter")
  if (Word.includes(letter)) {
    console.log("Good Job, That is correct!")
  }
  else {
    console.log("Incorrect, That isn't a correct letter!")
  }
  wordGuess=prompt("guess the word")
  if (Word === wordGuess) {
    console.log("Congratulations, That is the word! It took you " + attempts + "attempts. ")
  }

}

// In the while loop, copy the prompt and if/else check for the word


// In the while loop, copy the attempts increment



// After the while loop, print "It took (attempts) attempts" 

