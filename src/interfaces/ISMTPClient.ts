export interface ISMTPClient {
	send(to: string, subject: string, content: string): Promise<void>;
}

export interface IAuth {
	user: string;
	pass: string;
}

