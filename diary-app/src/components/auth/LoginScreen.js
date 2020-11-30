import React from 'react';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {
	return (
		<div>
			<h3 className='auth__title'>Login</h3>
			<form>
				<input
					type='text'
					placeholder='Email'
					name='email'
					autoComplete='off'
					className='auth__input'
				/>
				<input
					type='password'
					placeholder='Password'
					name='password'
					className='auth__input'
					autoComplete='off'
				/>
				<button type='submit' className='btn btn-primary btn-block'>
					Login
				</button>
				<hr />
				<div className='auth__social-networks'>
					<div className='google-btn'>
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