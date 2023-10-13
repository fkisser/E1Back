import fs from "fs";
import { IExpense } from "../interfaces/interfaces";

export const getWithFS = (file: string): Promise<IExpense[]> => {
	return new Promise((resolve, reject) => {
		fs.readFile(`./${file}.json`, "utf-8", (err, content) => {
			if (err) {
				reject(err);
			} else resolve(JSON.parse(content));
		});
	});
};

export const saveWithFS = (
	file: string,
	content: IExpense[]
): Promise<void> => {
	return new Promise((resolve, reject) => {
		fs.writeFile(`./${file}.json`, JSON.stringify(content), (err) => {
			if (err) {
				reject(err);
			}
			resolve(console.log("Gasto creado con éxito"));
		});
	});
};
