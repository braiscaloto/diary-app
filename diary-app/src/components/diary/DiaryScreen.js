import React from 'react';
import { Sidebar } from './Sidebar';

export const DiaryScreen = () => {
	return (
		<div className='diary__main-content'>
			<Sidebar />

			<main>
				<h1>Main content</h1>
			</main>
		</div>
	);
};
