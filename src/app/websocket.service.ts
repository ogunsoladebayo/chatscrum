import { Injectable } from '@angular/core';
import { ChatMessageDto } from './chatMessageDto';

@Injectable({
	providedIn: 'root',
})
export class WebsocketService {
	webSocket: WebSocket;
	messageData: any[] = [];

	constructor() {}

	public openWebSocket() {
		this.webSocket = new WebSocket(
			'wss://9oaktw3efg.execute-api.us-east-2.amazonaws.com/chat/'
		);

		this.webSocket.onopen = (event) => {
			console.log('Opened: ', event);
			this.webSocket.send(JSON.stringify({ action: 'getMessages' }));
		};

		this.webSocket.onmessage = async (event) => {
			// TODO: Change this part to use the normal one
			let data = await JSON.parse(event.data);
			if (data['messages'] !== undefined) {
				data['messages'].forEach((message: object) => {
					this.messageData.push(
						message['body'] ? message['body'] : message
					);
				});
			}
		};

		this.webSocket.onclose = (event) => {
			console.log('Closed: ', event);
		};
	}

	public sendMessage(chatMessageDto: ChatMessageDto) {
		this.webSocket.send(JSON.stringify(chatMessageDto));
	}

	public closeWebSocket() {
		this.webSocket.close();
	}
}
