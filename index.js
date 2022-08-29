const chalk = require('chalk');



const cyan1 = chalk.bold.bgCyan
const red1 = chalk.bold.red;
const red = chalk.bold.bgRed
const yellow = chalk.bold.yellow
const yellow1 = chalk.bold.bgYellow
const blue = chalk.bold.blueBright
const green1 = chalk.bold.bgGreenBright
const green = chalk.bold.green
const cyan = chalk.bold.cyanBright
const magenta = chalk.bold.magentaBright
const magenta1 = chalk.bold.bgMagenta
var score = 0;

var readlineSync = require("readline-sync")

var Name = readlineSync.question(red("WHAT IS YOUR NAME? "))
console.log("")

console.log(green1("NAMASTE!!! " + Name))
console.log("")

console.log(yellow1("WELCOME LET'S START QUIZ ABOUT FOOTBALL"))
console.log("")

function play(question, answer) {
  var newAnswer = readlineSync.question(question + "\n")
  if (newAnswer === answer) {
    console.log(green("WOW YOU ARE RIGHT 🤩🤩🤩" + "\n"))
    score = score + 1
    console.log("")
    console.log(magenta1("YOUR SCORE IS " + score))
  }
  else {
    console.log(red("OH NO YOU WRONG 😔😔😔"))
    score = score + 0
    console.log("")
    console.log("YOUR SCORE IS " + score)
  }
}




var questions = [{
  question: "How many penalties are usually taken in a penalty shoot-out?",
  answer: "5",
},
{
  question: "How many minutes are usually played in a football match?",
  answer: "90",
},
{
  question: " What color cards do the referees carry in a football match",
  answer: "yellow and red",
},
{
  question: "A spot-kick is taken from where",
  answer: "the penalty spot"
},
{
  question: "Who won the 1998 World Cup Final?",
  answer: "argentina"
},
{
  question: "Who scored England’s first goal at Euro 2020?",
  answer: "raheem sterling"
}, {
  question: "Where did Cristiano Ronaldo start his career?",
  answer: "sporting lisbon"
}
]

for (i = 0; i < questions.length; i++) {
  var currentquestion = questions[i]

  play(currentquestion.question, currentquestion.answer)
}
console.log("")
console.log("THIS'S YOUR FINAL SCORE " + score)
console.log("")
console.log("HightScore")
console.log("")
var hightscore = [
  {
    Name: "Prathamesh",
    Score: "4",
  },

  {
    Name: "Gaurav",
    Score: "3",
  }
]

for (i = 0; i < hightscore.length; i++) {
  var Scores = hightscore[i]
  console.log(Scores.Name)
  console.log(Scores.Score)
}


var Hightscore = 3;


if (score > Hightscore) {
  console.log(blue("YAYY!!! CONGRATS YOU HAVE BEATEN THE HIGHEST SCORE "))
  console.log(yellow("please take a screenshot and send it to me \n"))
  console.log(cyan("PLease Give Me Your Feedback and Thank You \n"))
}
else {
  console.log(red("Sorry Raise your IQ and come again"))
}
console.log()
console.log(green("Thank You For playing This Game "))
