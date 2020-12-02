import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDelete } from '../../actions/notes';

import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
	const dispatch = useDispatch();
	const { active: note } = useSelector((state) => state.notes);
	const [formValues, handleInputChange, reset] = useForm(note);

	const { body, title, id } = formValues;
	const activeId = useRef(note.id);

	useEffect(() => {
		if (note.id !== activeId.current) {
			reset(note);
			activeId.current = note.id;
		}
	}, [note, reset]);

	useEffect(() => {
		dispatch(activeNote(formValues.id, { ...formValues }));
	}, [formValues, dispatch]);

	const handleDelete = () => {
		console.log(id);
		dispatch(startDelete(id));
	};

	return (
		<div className='notes__main-content'>
			<NotesAppBar />
			<div className='notes__content'>
				<input
					type='text'
					placeholder='Your awesome title'
					className='notes__title-input'
					autoComplete='off'
					name='title'
					value={title}
					onChange={handleInputChange}
				></input>
				<textarea
					placeholder='What happened today?'
					className='notes__textarea'
					value={body}
					name='body'
					onChange={handleInputChange}
				></textarea>
				{note.url && (
					<div className='notes__image'>
						<img src={note.url} alt='imagen'></img>
					</div>
				)}
			</div>
			<button className='btn-2 btn-danger' onClick={handleDelete}>
				Delete
			</button>
		</div>
	);
};
