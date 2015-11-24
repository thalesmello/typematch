/// <reference path="../typings/jasmine/jasmine.d.ts" />

import * as tm from '../src/typematch'
const {match1, _} = tm;

describe('the TypeMatch module', () => {
	it('exists', () => {
		expect(match1).not.toBeNull();
	});
	
	it('makes a simple assertion', () => {
		let result = match1('it is',
			['it is', () => 'correct']);
		expect(result).toEqual('correct');
	});
	
	it('accepts multiple assertions', () => {
		let result = match1(1,
			[0, () => 'nope'],
			[1, () => 'yes']);
		expect(result).toEqual('yes');
	});
	
	it('has wildcarts', () => {
		let result = match1('yolo',
			['hi', () => 'there'],
			[_, () => 'good bye']);
		expect(result).toEqual('good bye');
	});
	
	it('can take arguments in conditions', () => {		
		function fibonacci(n : number): number {
			return match1(n, 
				[0, () => 1],
				[_, (n) => n * fibonacci(n - 1)])
		}
		
		expect(fibonacci(5)).toEqual(120)
	});
})

describe('module with variadic args', () => {
	it('accepts two arguments', () => {
		let result = tm.match2('foo', 'bar',
			['foo', _, () => 'yes!']);
		expect(result).toEqual('yes!');
		
		let result2 = tm.match2(1, 2,
			[0, 1, () => 'wrong'],
			[0, 0, () => 'wrong too'],
			[1, 2, () => 'correct']);
		expect(result2).toEqual('correct');
	})
	
	it('implements fizzbuzz', () => {
		function fizzbuzz(n: number) {
			return tm.match2(n % 3, n % 5,
				[0, 0, () => 'fizzbuzz'],
				[0, _, () => 'fizz'],
				[_, 0, () => 'buzz'],
				[_, _, () => '']);
		}
		expect(fizzbuzz(15)).toEqual('fizzbuzz');
		expect(fizzbuzz(14)).toEqual('');
	})
})