import React from 'react';
import { useSelector } from 'react-redux';
import { DiaryEntry } from './DiaryEntry';

export const DiaryEntries = () => {
	const { notes } = useSelector((state) => state.notes);
	return (
		<div className='diary__entries'>
			{notes.map((note) => {
				return <DiaryEntry key={note.id} {...note} />;
			})}
		</div>
	);
};
