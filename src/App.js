import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

//Components
import HomePage from './components/HomePage'
import VakilsList from './components/VakilsList'
import VakilProfile from './components/VakilProfile'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path={process.env.PUBLIC_URL + '/'} render={() => (
						<HomePage />
					)}/>
					<Route exact path={process.env.PUBLIC_URL + '/lawyers'} render={() => (
						<VakilsList />
					)}/>
					<Route exact path={process.env.PUBLIC_URL + '/lawyers/:filter'} render={({match}) =>(
                    	<VakilProfile filter={match.params.filter}/>
                	)}/>
				</div>
			</Router>
		);
	}
}

export default App;
