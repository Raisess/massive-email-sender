export interface ISMTPClient {
	send(to: string, subject: string, content: string, html?: boolean): Promise<void>;
}

export interface IAuth {
	user: string;
	pass: string;
}

