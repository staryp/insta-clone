import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import firebase from 'firebase';


class App extends Component {

	constructor() {
		super();
		this.state = {
			speed:50
		}
	}

	componentDidMount() {
		const dbRef = firebase.database().ref().child('speed');
		dbRef.on('value', snapshot =>{
			console.log("what..")
			this.setState({
				speed:snapshot.val()
			})
		})
	}
	render() {
		

		return (
			<div className="App">
				<h1>{this.state.speed}</h1>
			</div>
		);
	}
}

export default App;
