import { newExpensePrompt } from "./expensesPrompts";
import { getWithFS, saveWithFS } from "./fsMethods";
import chalk from "chalk";
import { stringDate } from "./tools";

export const getAllExpenses = async () => {
	const allExpenses = await getWithFS("expenses");
	allExpenses.forEach((expense) => {
		console.log(
			`${chalk.yellow(stringDate(expense.timestamp))} | ${chalk.blue(
				expense.description
			)}: $${expense.amount}`
		);
	});
};

export const createNewExpense = async () => {
	const newExpenseData = await newExpensePrompt();
	const allExpenses = await getWithFS("expenses");
	allExpenses.push(newExpenseData);
	await saveWithFS("expenses", allExpenses);
};
