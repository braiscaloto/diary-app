import React from 'react';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const DiaryScreen = () => {
	return (
		<div className='diary__main-content'>
			<Sidebar />

			<main>
				{/*<NothingSelected />*/}
				<NoteScreen />
			</main>
		</div>
	);
};
