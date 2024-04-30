
let user_score=0;
let comp_score=0;

const choices = document.querySelectorAll(".choice");
let msg = document.getElementById("meeg")


const genCompChoice = () => {
   const options = ["rock" , "paper" , "scissor"];
    const cm = Math.floor(Math.random() * 3);
    return options[cm];
}



//  const drawGAME = () => {
//     console.log("game was Draw . ");
//     msg.innerText="Game was draw . Play Again";
//  }

function drawGAME(){
   console.log("game was Draw . ");
   msg.innerText="Game was draw . Play Again";
   msg.style.backgroundColor="black";

}


const showWinner = (userWin ,userChoice,compChoice) =>{
   if(userWin){
       console.log("You Win");
       msg.innerText= 'You Win ! you  => .${userChoice}  comp => ${compChoice} ';
       msg.style.backgroundColor="green";
   }
   else{
       console.log("You loose");
       msg.innerText= "You Loose ! "
       msg.style.backgroundColor="red";

   }
};


const playGame = (userChoice) => {
   console.log("user choice = "  , userChoice);

   const compChoice = genCompChoice();
   console.log("comp choice = " , compChoice);


   if(userChoice === compChoice){
       drawGAME();

   }else{
       let userWin = true;
       if(userChoice === "rock"){
           userWin = compChoice === "paper"? false : true;

       }
       else if(userChoice === "paper"){
          userWin =  compChoice === "scissor"? false: true;
       }
       else{
        userWin =    compChoice === "rock"? false: true;
       }
       
      showWinner(userWin , userChoice, compChoice);
   }

};



choices.forEach((choice) => {
   console.log(choice);
    choice.addEventListener("click" , () => {
       const userChoice = choice.getAttribute("id")
      playGame(userChoice);

   });

});