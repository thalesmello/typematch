/// <reference path="../typings/jasmine/jasmine.d.ts" />

import {match} from '../src/typematch'

describe('the TypeMatch module', () => {
	it('exists', () => {
		expect(match).not.toBeNull();
	});
	
	it('makes a simple assertion', () => {
		let result = match('it is',
			['it is', () => 'correct']);
		expect(result).toEqual('correct');
	});
	
	it('accepts multiple assertions', () => {
		let result = match(1,
			[0, () => 'nope'],
			[1, () => 'yes']);
		expect(result).toEqual('yes');
	});
})