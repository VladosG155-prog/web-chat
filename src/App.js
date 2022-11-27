import React, { useState } from 'react';
import { io } from 'socket.io-client';
import './index.scss';
const socket = io('https://0fb1-93-84-179-145.eu.ngrok.io', {
	withCredentials: true,
	extraHeaders: {
		'my-custom-header': 'abcd',
	},
});

function App() {
	const [message, setMessage] = useState('');
	const [history, setHistory] = useState([]);
	console.log('123');
	const sendMessage = (e) => {
		e.preventDefault();
		console.log(socket);
		if (message) {
			socket.emit('chat message', message);
			setMessage('');
			const date = new Date();
			const messageObj = {
				text: message,
				createdAt: `${date.getHours()}:${date.getMinutes()}`,
			};
			setHistory([...history, messageObj]);
		}
	};
	console.log(history);
	return (
		<div className="app">
			<ul id="messages">
				{history.map((message) => {
					return <li className="message">{message.text}</li>;
				})}
			</ul>
			<form id="form" action="">
				<input
					id="input"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					autoComplete="off"
				/>
				<button onClick={sendMessage}>Send</button>
			</form>
		</div>
	);
}

export default App;
