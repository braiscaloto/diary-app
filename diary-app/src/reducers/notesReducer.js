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
		case types.notesLoad:
			return {
				...state,
				notes: [...action.payload],
			};
		default:
			return state;
	}
};
