import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

registerServiceWorker();
var config = {
	apiKey: "AIzaSyC2KDd7iMC6pVM2DmQe1dLliEB-4DYY4h0",
	authDomain: "instaclone-27cb2.firebaseapp.com",
	databaseURL: "https://instaclone-27cb2.firebaseio.com",
	projectId: "instaclone-27cb2",
	storageBucket: "instaclone-27cb2.appspot.com",
	messagingSenderId: "1016814024091"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));