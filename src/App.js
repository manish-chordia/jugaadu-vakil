import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import VakilsList from './components/VakilsList/VakilsList'
import VakilProfile from './components/VakilProfile/VakilProfile'

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path={process.env.PUBLIC_URL + '/'} render={() => (
						<h1>HomePage</h1>
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