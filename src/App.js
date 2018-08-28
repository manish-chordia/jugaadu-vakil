import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import VakilsList from './components/VakilsList/VakilsList'
import VakilProfile from './components/VakilProfile'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path='/lawyers' render={() => (
						<VakilsList />
					)}/>
					<Route exact path='/lawyers/:filter' render={({match}) =>(
                    	<VakilProfile filter={match.params.filter}/>
                	)}/>
				</div>
			</Router>
		);
	}
}

export default App;
