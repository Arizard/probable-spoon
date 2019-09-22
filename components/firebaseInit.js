const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
	apiKey: 'AIzaSyC8m3uS-tnuGItqnxNLpSBpa55taZfQavs',
	authDomain: 'probable-spoon.firebaseapp.com',
	databaseURL: 'https://probable-spoon.firebaseio.com',
	projectId: 'probable-spoon',
	storageBucket: '',
	messagingSenderId: '1098178799803',
	appId: '1:1098178799803:web:5e1ad8c2b623f43275219e'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
