import fs from "fs";

import { IEmailListParser } from "../interfaces/IEmailListParser";

export default class EmailListParser implements IEmailListParser {
	private emailListFile: string;

	constructor(emailListFile: string = __dirname + "/../../email_list.txt") {
		this.emailListFile = emailListFile;
	}

	private getFileData(): string {
		return fs.readFileSync(this.emailListFile, { encoding: "utf-8" });
	}

	public getEmailList(): Array<[string, string]> {
		const list: Array<string> = this.getFileData().trim().split("\n");

		let temp: Array<[string, string]> = [];

		for (let i: number = 0; i < list.length; i+=2) {
			temp.push([list[i].split("-")[1].trim(), list[i + 1]]);
		}

		return temp;
	}
}
