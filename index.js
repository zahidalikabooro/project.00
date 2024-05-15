import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Please select one of the operator to select operation.",
        type: "list",
        name: "operators",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.firstNumber - answer.secondNumber) {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.firstNumber * answer.secondNumber) {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.firstNumber / answer.secondNumber) {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select valid numbver");
}
