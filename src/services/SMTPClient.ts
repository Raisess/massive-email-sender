import * as nodemailer from "nodemailer";

import { ISMTPClient, IAuth } from "../interfaces/ISMTPClient";

export default class SMTPClient implements ISMTPClient {
	private readonly host: string = process.env.SMTP_HOST!;
	private readonly port: number = parseInt(process.env.SMTP_PORT!);
	private readonly auth: IAuth  = {
		user: process.env.EMAIL_ADDRESS!,
		pass: process.env.EMAIL_PASSWORD!
	};

	private transporter: any;
	private debug:       boolean;

	constructor(debug: boolean = false) {
		this.transporter = nodemailer.createTransport({
			host: this.host,
			port: this.port,
			auth: this.auth
		});

		this.debug = debug;
	}

	public async send(to: string, subject: string, content: string, html: boolean = false): Promise<void> {
		const res: any = await this.transporter.sendMail({
			from:    this.auth.user,
			to:      to.toLowerCase(),
			subject: subject,

			[html
			 ? "html"
			 : "text"]: content
		});

		if (this.debug) console.log("Sended a message to:", to, "| using html:", html, "| message id:", res.messageId);
	}
}

