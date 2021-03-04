import "dotenv/config";

import SMTPClient from "./services/SMTPClient";
import EmailListParser from "./modules/EmailListParser";

const email: SMTPClient = new SMTPClient(true);

const emailList: Array<[string, string]> = new EmailListParser().getEmailList();

for (const item of emailList) {
	setTimeout((): void => {
		email.send(item[1], "", `Pong! Oi ${item[0]}, ignore esse email!`);
	}, parseInt(process.env.DELAY!) || 2000);
}

