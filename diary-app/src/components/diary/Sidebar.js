import React from 'react';
import { Link } from 'react-router-dom';
import { DiaryEntries } from './DiaryEntries';

export const Sidebar = () => {
	return (
		<aside className='diary__sidebar'>
			<div className='diary__sidebar-navbar'>
				<h3 className='mt-5'>
					<i className='far fa-moon' />
					<span> Brais</span>
				</h3>
				<button className='btn mt-3'>Logout</button>
			</div>
			<div className='diary__new-entry'>
				<i className='far fa-calendar-plus fa-5x' />
				<p className='mt-5'>New entry</p>
			</div>
			<DiaryEntries />
		</aside>
	);
};
