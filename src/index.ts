import "dotenv/config";

import SMTPClient from "./services/SMTPClient";
import EmailListParser from "./modules/EmailListParser";

const email: SMTPClient = new SMTPClient(true);

const emailList: Array<StringCouple> = new EmailListParser().getEmailList();

for (const item of emailList) {
	setTimeout((): void => {
		email.send(item[1],
		           process.env.SUBJECT! || "",
		           process.env.MESSAGE! || `Pong! Oi ${item[0]}, ignore esse email!`);
	}, parseFloat(process.env.DELAY!) || 2000);
}

