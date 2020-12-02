import React, { useEffect, useState } from 'react';
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
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { startLoadNotes } from '../actions/notes';

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true);

	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLogged(true);
				dispatch(startLoadNotes(user.uid));
			} else {
				setIsLogged(false);
			}
			setChecking(false);
		});
	}, [dispatch, setChecking, setIsLogged]);

	if (checking) {
		return (
			<div>
				<i className='fas fa-spinner fa-spin'></i>
			</div>
		);
	}

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						path='/auth'
						isAuthenticated={isLogged}
						component={AuthRouter}
					/>
					<PrivateRoute
						exact
						path='/'
						isAuthenticated={isLogged}
						component={DiaryScreen}
					/>
					<Redirect to='/auth/login' />
				</Switch>
			</div>
		</Router>
	);
};
