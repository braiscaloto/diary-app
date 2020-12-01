import { types } from '../types/types';

export const setError = (err) => ({
	type: types.uiError,
	payload: err,
});

export const setRemoveError = () => ({
	type: types.uiRemoveError,
});

export const startLoading = () => ({
	type: types.uiStartLoading,
});

export const finishLoading = () => ({
	type: types.uiFinishLoading,
});
