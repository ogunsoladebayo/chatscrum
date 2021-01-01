import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChatMessageDto } from '../chatMessageDto';
import { WebsocketService } from '../websocket.service';

@Component({
	selector: 'app-chat',
	templateUrl: './chat.component.html',
	styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
	public username = localStorage.getItem('username');
	constructor(public webSocketService: WebsocketService) {}

	ngOnInit(): void {
		this.webSocketService.openWebSocket();
	}

	ngOnDestroy(): void {
		this.webSocketService.closeWebSocket();
	}

	sendMessage(sendForm: NgForm) {
		const chatMessageDto = new ChatMessageDto(
			'sendMessage',
			sendForm.value['chat_text']
		);
		this.webSocketService.sendMessage(chatMessageDto);
		sendForm.controls.message.reset();
	}
}
