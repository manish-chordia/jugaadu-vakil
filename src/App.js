import React, { Component } from 'react';
import './App.css';
import VakilsList from './components/VakilsList'

class App extends Component {
	render() {
		return (
			<div className="App">
				<VakilsList />
			</div>
		);
	}
}

export default App;
