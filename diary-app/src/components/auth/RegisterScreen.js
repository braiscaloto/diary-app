import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { setError, setRemoveError } from '../../actions/ui';
import { startRegisterEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {
	const dispatch = useDispatch();
	const { msgError } = useSelector((state) => state.ui);
	const [formValues, handleInputChange] = useForm({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formValues;

	const handleregister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			dispatch(startRegisterEmailPassword(email, password, name));
		}
	};
	const isFormValid = () => {
		if (name.trim().length < 3) {
			dispatch(setError('Name is required'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Email is not valid'));
			return false;
		} else if (password.length < 5 || password !== password2) {
			dispatch(
				setError(
					'Passwords should be at leat 5 characters and must be equals'
				)
			);

			return false;
		}
		dispatch(setRemoveError());

		return true;
	};

	return (
		<div>
			<h3 className='auth__title'>Register</h3>
			<form
				className='animate__animated animate__fadeIn animate__faster'
				onSubmit={handleregister}
			>
				{msgError && (
					<div className='auth__alert-error'>{msgError}</div>
				)}

				<input
					type='text'
					placeholder='Name'
					name='name'
					autoComplete='off'
					className='auth__input'
					value={name}
					onChange={handleInputChange}
				/>
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
				<input
					type='password'
					placeholder='Confirm password'
					name='password2'
					className='auth__input'
					autoComplete='off'
					value={password2}
					onChange={handleInputChange}
				/>
				<button
					type='submit'
					className='btn-2 btn-primary btn-block mb-5 mt-5'
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
