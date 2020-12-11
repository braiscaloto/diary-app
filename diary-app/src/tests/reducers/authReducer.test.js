const { authReducer } = require('../../reducers/authReducer');
const { types } = require('../../types/types');

describe('Test at authReducer', () => {
	test('should do the login ', () => {
		const initState = {};
		const action = {
			type: types.login,
			payload: {
				uid: 'abc',
				displayName: 'Brais',
			},
		};

		const state = authReducer(initState, action);

		expect(state).toEqual({
			uid: 'abc',
			name: 'Brais',
		});
	});
	test('should do the logout ', () => {
		const initState = {
			uid: 'jhadhjahsd123123',
			name: 'Pepe',
		};
		const action = {
			type: types.logout,
		};

		const state = authReducer(initState, action);

		expect(state).toEqual({});
	});
});
