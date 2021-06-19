import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {

	constructor() {
		super()
		this.state = {
			kitties: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
		const {kitties, searchfield} = this.state;
		const filteredKitties = kitties.filter(cat => {
			return cat.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		if(!kitties.length) {
			return <h1>Loading...</h1>
		} else {
			return (
				<div className='tc'>
						<h1 className='title f-subheadline'>Cat Friends</h1>
						<Searchbox searchChange={this.onSearchChange}/>
					<Scroll className='scroll'>
						<ErrorBoundry>
							<CardList kitties={filteredKitties}/>
						</ErrorBoundry>
					</Scroll>
				</div>
			);			
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({kitties: users}));
	}
}

export default App;

