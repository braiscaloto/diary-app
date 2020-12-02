import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUpload } from '../../actions/notes';

export const NotesAppBar = () => {
	const dispatch = useDispatch();
	const { active } = useSelector((state) => state.notes);

	const handleSave = () => {
		dispatch(startSaveNote(active));
	};
	const handlePictureUpload = () => {
		document.querySelector('#fileSelector').click();
	};
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			dispatch(startUpload(file));
		}
	};
	return (
		<div className='notes__appbar'>
			<span>10 febrero 2010</span>

			<input
				id='fileSelector'
				type='file'
				name='file'
				style={{ display: 'none' }}
				onChange={handleFileChange}
			></input>
			<div>
				<button className='btn' onClick={handlePictureUpload}>
					Picture
				</button>
				<button className='btn' onClick={handleSave}>
					Save
				</button>
			</div>
		</div>
	);
};
