import { types } from '../types/types';

const incitialState = {
	notes: [],
	active: null,
	// active: {
	// 	id: '',
	// 	title: '',
	// 	body: '',
	// 	imageUrl: '',
	// 	date: '',
	// },
};

export const notesReducer = (state = incitialState, action) => {
	switch (action.type) {
		case types.notesActive:
			return {
				...state,
				active: {
					...action.payload,
				},
			};
		case types.notesAddNew:
			return {
				...state,
				notes: [action.payload, ...state.notes],
			};
		case types.notesLoad:
			return {
				...state,
				notes: [...action.payload],
			};
		case types.notesUpdated:
			return {
				...state,
				notes: state.notes.map((note) =>
					note.id === action.payload.id ? action.payload.note : note
				),
			};
		case types.notesDelete:
			return {
				...state,
				active: null,
				notes: state.notes.filter((note) => note.id !== action.payload),
			};
		case types.notesLogoutClean:
			return {
				...state,
				active: null,
				notes: [],
			};

		default:
			return state;
	}
};
