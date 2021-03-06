import Swal from 'sweetalert2';
import { db } from '../firebase/firebase-config';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const startNewNote = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		const newNote = {
			title: '',
			body: '',
			date: new Date().getTime(),
		};

		const docRef = await db.collection(`${uid}/diary/notes`).add(newNote);

		dispatch(activeNote(docRef.id, newNote));
		dispatch(addNewNote(docRef.id, newNote));
	};
};

export const activeNote = (id, note) => ({
	type: types.notesActive,
	payload: {
		id,
		...note,
	},
});

export const addNewNote = (id, note) => ({
	type: types.notesAddNew,
	payload: {
		id,
		...note,
	},
});
export const startLoadNotes = (uid) => {
	return async (dispatch) => {
		const notes = await loadNotes(uid);
		dispatch(setNotes(notes));
	};
};

export const setNotes = (notes) => ({
	type: types.notesLoad,
	payload: notes,
});

export const startSaveNote = (note) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if (!note.url) {
			delete note.url;
		}
		const noteToFirestore = { ...note };
		delete noteToFirestore.id;
		await db.doc(`${uid}/diary/notes/${note.id}`).update(noteToFirestore);
		dispatch(refreshNote(note.id, noteToFirestore));
		Swal.fire('Saved', note.title, 'success');
	};
};
export const refreshNote = (id, note) => ({
	type: types.notesUpdated,
	payload: {
		id,
		note: {
			id,
			...note,
		},
	},
});

export const startUpload = (file) => {
	return async (dispatch, getState) => {
		const { active: activeNote } = getState().notes;

		Swal.fire({
			title: 'Uploading...',
			text: 'Please wait...',
			allowOutsideClick: false,
			willOpen: () => {
				Swal.showLoading();
			},
		});

		const fileURL = await fileUpload(file);
		activeNote.url = fileURL;
		dispatch(startSaveNote(activeNote));
		Swal.close();
	};
};

export const startDelete = (id) => {
	return async (dispatch, getState) => {
		const uid = getState().auth.uid;
		console.log(`${uid}/diary/notes/${id}`);
		await db.doc(`${uid}/diary/notes/${id}`).delete();

		dispatch(deleteNote(id));
		Swal.fire('Deleted', 'Entry deleted', 'success');
	};
};

export const deleteNote = (id) => ({
	type: types.notesDelete,
	payload: id,
});

export const logoutNote = () => ({
	type: types.notesLogoutClean,
});
