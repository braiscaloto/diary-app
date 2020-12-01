import { types } from '../types/types';

export const setError = (err) => ({
	type: types.uiError,
	payload: err,
});

export const setRemoveError = () => ({
	type: types.uiRemoveError,
});
