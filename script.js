const score_limit=5
var userScore=0, computerScore=0, i=0, j=0

const validChoices=["ROCK", "PAPER", "SCISSORS"]

document.getElementById('rock').addEventListener('click', ()=>{
    handleClick(0)
})

document.getElementById('paper').addEventListener('click', ()=>{
    handleClick(1)
})

document.getElementById('scissors').addEventListener('click',()=>{
    handleClick(2)
})

/*
    userChoice- 
        0-"Rock",
        1-"Paper",
        2-"Scissors"
*/

function handleClick(choice) {

    if(computerScore==score_limit && userScore<computerScore){
        console.log("Computer WON!")
        alert("Computer Won")
        userScore=0
        computerScore=0
        document.getElementById("user-score").innerHTML="0"
        document.getElementById("computer-score").innerHTML="0"
    }
    if(userScore==score_limit && computerScore<userScore){
        console.log("You WON!")
        alert("User Won")
        userScore=0
        computerScore=0
        document.getElementById("user-score").innerHTML="0"
        document.getElementById("computer-score").innerHTML="0"
    }

    var userChoice=validChoices[choice]
    const x=parseInt(Math.random()*3)+0
    var computerChoice=validChoices[x]
    var result=handleWin(userChoice, computerChoice)

    document.getElementById("heading1").style.display="inline"
    document.getElementById("heading2").style.display="inline"

    document.getElementById("user-choice").innerHTML=userChoice
    document.getElementById("computer-choice").innerHTML=computerChoice

    if(result=="Y"){
        userScore++
        document.getElementById("user-score").innerHTML=userScore
    }

    if(result=="C"){
        computerScore++
        document.getElementById("computer-score").innerHTML=computerScore
    }
}

/*
    "Y"- User Won
    "C"- Computer won
*/

function handleWin(userChoice, computerChoice){

    if(userChoice=="ROCK" && computerChoice=="SCISSORS")
        return "Y"
    if(userChoice=="SCISSORS" && computerChoice=="ROCK")
        return "C"

    if(userChoice=="PAPER" && computerChoice=="SCISSORS")
        return "C"
    if(userChoice=="SCISSORS" && computerChoice=="PAPER")
        return "Y"

    if(userChoice=="PAPER" && computerChoice=="ROCK")
        return "Y"
    if(userChoice=="ROCK" && computerChoice=="PAPER")
        return "C"
    return ""
}