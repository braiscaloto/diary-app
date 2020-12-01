import React, { useEffect } from 'react';
import {
	Redirect,
	Route,
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom';
import { DiaryScreen } from '../components/diary/DiaryScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
			}
		});
	}, [dispatch]);

	return (
		<Router>
			<div>
				<Switch>
					<Route path='/auth' component={AuthRouter} />
					<Route exact path='/' component={DiaryScreen} />
					<Redirect to='/auth/login' />
				</Switch>
			</div>
		</Router>
	);
};
