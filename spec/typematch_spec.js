'use strict'
const tm = require('../bin/typematch');

describe('the TypeMatch module', () => {
	it('is an object', () => {
		expect(tm).not.toBeNull();
	});
	
	it('makes a simple assertion', () => {
		let result = tm.match('it is',
			['it is', () => 'correct']);
		expect(result).toEqual('correct');
	});
	
	it('accepts multiple assertions', () => {
		let result = tm.match(1,
			[0, () => 'nope'],
			[1, () => 'yes']);
		expect(result).toEqual('yes');
	})
})
