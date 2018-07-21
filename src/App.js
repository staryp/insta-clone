import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

	constructor() {
		super();
		this.state = {
			speed:50,
			email:"",
			password:""
		}
	}

	componentDidMount() {
		const dbRef = firebase.database().ref().child('speed');
		dbRef.on('value', snapshot =>{
			this.setState({	
				speed:snapshot.val()
			})
		})
	}
	render() {
		return (
			<div className="App">
				<h1 className="input-group-prepend">{this.state.speed}</h1>
				<div className="input-group">
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon1">id</span>
						<input type="text" className="form-control" placeholder="id" aria-label="Username" aria-describedby="basic-addon1"/>
					</div>
					<div className="input-group-prepend">
						<span className="input-group-text" id="basic-addon2">password</span>
						<input type="text" className="form-control" placeholder="password" aria-label="Username" aria-describedby="basic-addon1"/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
