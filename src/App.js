import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

//Components
import HomePage from './components/HomePage'
import VakilsList from './components/VakilsList'
import VakilProfile from './components/VakilProfile'
import ContactUs from './components/ContactUs'
import Disclaimer from './components/Disclaimer'
import Topics from './components/Topics'

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
					<Route exact path={process.env.PUBLIC_URL + '/contact'} render={() =>(
                    	<ContactUs />
                	)}/>
					<Route exact path={process.env.PUBLIC_URL + '/disclaimer'} render={() =>(
                    	<Disclaimer />
                	)}/>
					<Route exact path={process.env.PUBLIC_URL + '/browse'} render={() =>(
                    	<Topics />
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
