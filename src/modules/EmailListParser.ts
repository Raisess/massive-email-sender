import fs from "fs";

import { IEmailListParser } from "../interfaces/IEmailListParser";

export default class EmailListParser implements IEmailListParser {
	private emailListFile: string;
	private debug:         boolean;

	constructor(emailListFile: string = __dirname + "/../../email_list.txt", debug: boolean = false) {
		this.emailListFile = emailListFile;
		this.debug         = debug;
	}

	private getFileData(): string {
		return fs.readFileSync(this.emailListFile, { encoding: "utf-8" });
	}

	public getEmailList(): Array<StringCouple> {
		const list: Array<string> = this.getFileData().trim().split("\n");

		let temp: Array<StringCouple> = [];

		for (let i: number = 0; i < list.length; i+=2) {
			temp.push([list[i].trim(), list[i + 1].trim()]);
		}

		if (this.debug) console.log(temp);

		return temp;
	}
}

