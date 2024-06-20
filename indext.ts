#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
{message: "Enter your first number :", type: "number", name: "firstNum" },

{message: "Enter your second number :", type: "number", name: "secondNum" },
{  
  message:"Select one Operator to perfrom operation action :",

    type: "list",
    name: "Operator",
    
   choices: ["Addition","Subtraction","Multiplication","Division"  ]

 },
    ])
    if (answer.Operator === "Addition") {
      console.log(answer.firstNum + answer.secondNum );

    }
    else if (answer.Operator === "Subtraction") {
console.log(answer.firstNum - answer.secondNum);

    }

    else if (answer.Operator === "Multiplication"){

      console.log(answer.firstNum * answer.secondNum);

    }

    else if (answer.Operator === "Division"){
      console.log(answer.firstNum / answer.secondNum);
    }

    else{
      console.log('please select valid operator');
    }