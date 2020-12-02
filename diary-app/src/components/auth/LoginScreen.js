import React from 'react';
import validator from 'validator';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { setError, startLoading } from '../../actions/ui';

export const LoginScreen = () => {
	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		email: '',
		password: '',
	});

	const { email, password } = formValues;
	const { loading } = useSelector((state) => state.ui);

	const handleLogin = (e) => {
		e.preventDefault();
		if (isValidForm()) {
			dispatch(startLoginEmailPassword(email, password));
		}
	};
	const handleGoogleLogin = () => {
		dispatch(startGoogleLogin());
	};
	const isValidForm = () => {
		if (!validator.isEmail(email)) {
			dispatch(setError('Email is not valid'));
			return false;
		}
		return true;
	};
	return (
		<div>
			<h3 className='auth__title'>Login</h3>
			<form
				className='animate__animated animate__fadeIn animate__faster'
				onSubmit={handleLogin}
			>
				<input
					type='email'
					placeholder='Email'
					name='email'
					autoComplete='off'
					className='auth__input'
					value={email}
					onChange={handleInputChange}
				/>
				<input
					type='password'
					placeholder='Password'
					name='password'
					className='auth__input'
					autoComplete='off'
					value={password}
					onChange={handleInputChange}
				/>
				<button
					type='submit'
					className='btn-2 btn-primary btn-block mt-1'
					disabled={loading}
				>
					Login
				</button>
				<hr />
				<div className='auth__social-networks'>
					<div className='google-btn' onClick={handleGoogleLogin}>
						<div className='google-icon-wrapper'>
							<img
								className='google-icon'
								src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
								alt='google button'
							/>
						</div>
						<p className='btn-text'>
							<b>Sign in with google</b>
						</p>
					</div>
				</div>
				<Link to='/auth/register' className='link'>
					Create new account
				</Link>
			</form>
		</div>
	);
};
