#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "Operation",
            message: "pleaswe select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        }
    ]);
    if (operationAns.Operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount to with draw",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficiant Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} With draw Sucessfully`);
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.Operation === "check balance") {
        console.log(`Your Account Balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
