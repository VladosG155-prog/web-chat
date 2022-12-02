import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './index.scss';
const socket = io('https://tender-teeth-type-93-84-185-90.loca.lt');
function App() {
	const [message, setMessage] = useState('');
	const [history, setHistory] = useState([]);

	useEffect(() => {
		socket.on('messageResponse', (data) => setHistory([...history, data]));
	}, [history]);

	const sendMessage = (e) => {
		console.log(socket);
		if (message === 'негр') {
			window.open('https://anime-jutsu.online/4922-devichij-limonad.html');
		} else if (message === 'дота') {
			window.open('steam://rungameid/570');
		}
		e.preventDefault();
		if (message) {
			socket.emit('message', message);
			setMessage('');
		}
	};
	return (
		<div className="app">
			<ul id="messages">
				{history.map((message) => {
					return <li className="message">{message}</li>;
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
