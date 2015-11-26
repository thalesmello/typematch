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
	});
	
	it('accepts three arguments', () => {
		let result = tm.match3(1, 2, 3,
			[_, _, _, () => 'such match']);
		expect(result).toEqual('such match');
	})
	
	it('accepts four arguments', () => {
		let result = tm.match4(1, 2, 3, 4,
			[1, 2, 3, 5, () => 0],
			[_, _, _, 4, (a, b, c, d) => a + b + c + d]);
		expect(result).toEqual(10);
	});
	
	it('accepts five arguments', () => {
		let result = tm.match5('a', 'b', 'c', 'd', 'e',
			[_, _, 'c', _, _, () => 'yes']);
		expect(result).toEqual('yes');
	})
	
	it('accepts six arguments', () => {
		let result = tm.match6('a', 'b', 'c', 'd', 'e', 1,
			[_, _, 'c', _, _, 1, () => 'yes']);
		expect(result).toEqual('yes');
	})
	
	it('accepts seven arguments', () => {
		let result = tm.match7('a', 'b', 'c', 'd', 'e', 1, 10,
			[_, _, 'c', _, _, 1, _, () => 'yes']);
		expect(result).toEqual('yes');
	});
	
	it('accepts eight arguments', () => {
		let result = tm.match8('a', 'b', 'c', 'd', 'e', 1, 10, true,
			[_, _, 'c', _, _, 1, _, true, () => 'yes']);
		expect(result).toEqual('yes');
	});
	
	it('accepts nine arguments', () => {
		let result = tm.match9(1, 2, 3, 4, 5, 6, 7, 8, 9,
			[1, 2, 3, 4, 5, 6, 7, 8, 9, (a, b, c, d, e, f, g, h, i) => a + b + c + d + e + f + g + h + i])
		expect(result).toEqual(45);
	})
	
	it('accepts ten arguments', () => {
		let result = tm.match10(1, 2, 3, 4, false, 6, 7, 8, 9, 10,
			[1, 2, 3, 4, true, 6, 7, 8, 9, _, () => -1],
			[1, 2, 3, 4, false, 6, _, 8, 9, _, (a, b, c, d, e, f, g, h, i, j) => a + b + c + d + f + g + h + i])
		expect(result).toEqual(40);
	})
})