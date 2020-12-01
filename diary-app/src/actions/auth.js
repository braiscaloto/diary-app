import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { useSelector } from 'react-redux';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		dispatch(startLoading());
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
				dispatch(finishLoading());
			})
			.catch(({ message }) => {
				console.log(message);
				dispatch(finishLoading());
			});
	};
};

export const startRegisterEmailPassword = (email, password, name) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async ({ user }) => {
				await user.updateProfile({
					displayName: name,
				});
				console.log(user);
				dispatch(login(user.uid, user.displayName));
			})
			.catch(({ message }) => console.log(message));
	};
};

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

export const startGoogleLogin = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
			});
	};
};
