import React from 'react';
import { DiaryEntry } from './DiaryEntry';

export const DiaryEntries = () => {
	const entries = [1, 2, 3, 4, 5, 6];
	return (
		<div className='diary__entries'>
			{entries.map((entry) => {
				return <DiaryEntry key={entry} />;
			})}
		</div>
	);
};
