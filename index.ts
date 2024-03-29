#! /usr/bin/env node
import inquirer from "inquirer"

const answer =await inquirer.prompt
([
    {message:"enter first number",type:"number",name:"firstnumber"},
    {message:"enter second number",type:"number",name:"secondnumber"},
    {message:"select one of the operators to perform operations",
    type:"list",
    name:"operator",
    choices: ["addition","subtraction","multiplication","division"],}
])
console.log(answer);
//conditional statement
if(answer.operator ==="addition")
{console.log(answer.firstnumber + answer.secondnumber)}
else if (answer.operator ==="subtraction")
{console.log(answer.firstnumber - answer.secondnumber)}
else if (answer.operator ==="multiplication")
{console.log(answer.firstnumber * answer.secondnumber)}
else if (answer.operator ==="division")
{console.log (answer.firstnumber/answer.secondnumber)}
else{console.log("please select the valid operator")}
