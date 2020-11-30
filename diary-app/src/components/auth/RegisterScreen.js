import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
	return (
		<div>
			<h3 className='auth__title'>Register</h3>
			<form>
				<input
					type='text'
					placeholder='Name'
					name='name'
					autoComplete='off'
					className='auth__input'
				/>
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
				<input
					type='password'
					placeholder='Confirm password'
					name='password2'
					className='auth__input'
					autoComplete='off'
				/>
				<button
					type='submit'
					className='btn btn-primary btn-block mb-5 mt-5'
				>
					Register
				</button>

				<Link to='/auth/login' className='link'>
					Already have an account?
				</Link>
			</form>
		</div>
	);
};
