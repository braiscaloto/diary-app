import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAk73neiTAOUpBTMcaatmvaZxTlc3vbOoc',
	authDomain: 'mydiary-reactapp.firebaseapp.com',
	databaseURL: 'https://mydiary-reactapp.firebaseio.com',
	projectId: 'mydiary-reactapp',
	storageBucket: 'mydiary-reactapp.appspot.com',
	messagingSenderId: '408617810115',
	appId: '1:408617810115:web:6a77ced78d89f5ef84ca76',
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
