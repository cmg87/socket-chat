import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class App extends Component {
	state = {
		endpoint: process.env.PORT || 'http://localhost:3001',
		msg: []
	};

	render() {
		const socket = socketIOClient(this.state.endpoint);

		socket.on('message', m => this.setState({ msg: [...this.state.msg, m] }));

		return (
			<div className='App'>
				{this.state.msg.map(m => (
					<p>m</p>
				))}
			</div>
		);
	}
}

export default App;
