import React from 'react';
import {
	Redirect,
	Route,
	BrowserRouter as Router,
	Switch,
} from 'react-router-dom';
import { DiaryScreen } from '../components/diary/DiaryScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
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
