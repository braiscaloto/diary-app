const { types } = require('../../types/types');

//comprobamos que la aplicación tenga todos los types que debe tener
describe('Tests with our types', () => {
	test('should have all of this types', () => {
		expect(types).toEqual({
			login: '[Auth] Login',
			logout: '[Auth] Logout',

			uiError: '[UI] Set Error',
			uiRemoveError: '[UI] Remove Error',
			uiStartLoading: '[UI] Start loading',
			uiFinishLoading: '[UI] Finish loading',

			notesAddNew: '[Notes] New note',
			notesActive: '[Notes] Set active note',
			notesLoad: '[Notes] Load notes',
			notesUpdated: '[Notes] Updated notes',
			notesFileUrl: '[Notes] Updated image url',
			notesDelete: '[Notes] Delete note',
			notesLogoutClean: '[Notes] Logout clean notes',
		});
	});
});
