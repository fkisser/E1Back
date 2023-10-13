import inquirer from "inquirer";
import chalk from "chalk";
import { IExpense } from "../interfaces/interfaces";
import { stringDate } from "../helpers/tools";

export const newExpensePrompt = async (): Promise<IExpense> => {
	let expense = await inquirer.prompt([
		{
			type: "input",
			name: "description",
			message: `${chalk.blue("Descripción")}`,
		},
		{
			type: "number",
			name: "amount",
			message: `${chalk.blue("Monto")}`,
		},
	]);
	expense = { ...expense, timestamp: Date.now() };

	console.log(`
		Su respuesta:
		${chalk.blue("Descripción: ")}${expense.description}
		${chalk.red("Monto: ")}${expense.amount}
		${chalk.yellow("Fecha del gasto: ")} ${stringDate(expense.timestamp)}
	`);
	return expense;
};
