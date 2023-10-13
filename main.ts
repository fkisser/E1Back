import inquirer from "inquirer";
import chalk from "chalk";
import { createNewExpense, getAllExpenses } from "./helpers/mainListOptions";

const main = async () => {
	let run = true;
	while (run) {
		const action = await inquirer.prompt([
			{
				type: "list",
				name: "selectedChoice",
				message: "Elija una opción",
				choices: [
					{
						value: 0,
						name: `${chalk.blue("Ver gastos")}`,
					},
					{
						value: 1,
						name: `${chalk.yellow("Crear gasto")}`,
					},
					{
						value: 99,
						name: `${chalk.red("SALIR")}`,
					},
				],
			},
		]);
		switch (action.selectedChoice) {
			case 0:
				console.log(`Elegiste ${chalk.blue("Ver gastos")}`);
				await getAllExpenses();
				break;
			case 1:
				console.log(`Elegiste ${chalk.yellow("Crear gasto")}`);
				await createNewExpense();
				break;
			case 99:
				console.log(`Elegiste ${chalk.red("SALIR")}`);
				run = false;
				break;
			default:
				run = false;
				break;
		}
	}
};

main();
//appendFile para los gastos
