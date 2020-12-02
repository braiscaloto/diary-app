import React from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';

export const DiaryEntry = ({ id, date, title, body, url }) => {
	const notesDate = moment(date);

	const dispatch = useDispatch();
	const handleEntry = () => {
		dispatch(activeNote(id, { date, title, body, url }));
	};

	return (
		<div className='diary__entry pointer' onClick={handleEntry}>
			{url && (
				<div
					className='diary__entry-picture'
					style={{
						backgroundSize: 'cover',
						backgroundImage: `url(${url})`,
					}}
				></div>
			)}
			<div className='diary__entry-body'>
				<p className='diary__entry-title'>{title}</p>
				<p className='diary__entry-content'>{body}</p>
			</div>
			<div className='diary__entry-date-box'>
				<span>{notesDate.format('dddd')}</span>
				<h4>{notesDate.format('Do')}</h4>
			</div>
		</div>
	);
};
