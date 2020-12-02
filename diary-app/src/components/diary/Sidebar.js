import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { DiaryEntries } from './DiaryEntries';

export const Sidebar = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(startLogout());
	};
	return (
		<aside className='diary__sidebar'>
			<div className='diary__sidebar-navbar'>
				<h3 className='mt-2'>
					<i className='far fa-moon' />
					<span> Brais</span>
				</h3>
				<button className='btn mt-1-2' onClick={handleLogout}>
					Logout
				</button>
			</div>
			<div className='diary__new-entry'>
				<i className='far fa-calendar-plus fa-5x' />
				<p className='mt-5'>New entry</p>
			</div>
			<DiaryEntries />
		</aside>
	);
};
