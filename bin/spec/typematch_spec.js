/// <reference path="../typings/jasmine/jasmine.d.ts" />
var tm = require('../src/typematch');
var _ = tm._;
describe('the TypeMatch module', function () {
    it('exists', function () {
        expect(tm.match1).not.toBeNull();
    });
    it('makes a simple assertion', function () {
        var result = tm.match1('it is', ['it is', function () { return 'correct'; }]);
        expect(result).toEqual('correct');
    });
    it('accepts multiple assertions', function () {
        var result = tm.match1(1, [0, function () { return 'nope'; }], [1, function () { return 'yes'; }]);
        expect(result).toEqual('yes');
    });
    it('has wildcarts', function () {
        var result = tm.match1('yolo', ['hi', function () { return 'there'; }], [_, function () { return 'good bye'; }]);
        expect(result).toEqual('good bye');
    });
    it('can take arguments in conditions', function () {
        function fibonacci(n) {
            return tm.match1(n, [0, function () { return 1; }], [_, function (n) { return n * fibonacci(n - 1); }]);
        }
        expect(fibonacci(5)).toEqual(120);
    });
});
describe('module with variadic args', function () {
    it('accepts two arguments', function () {
        var result = tm.match2('foo', 'bar', ['foo', _, function () { return 'yes!'; }]);
        expect(result).toEqual('yes!');
        var result2 = tm.match2(1, 2, [0, 1, function () { return 'wrong'; }], [0, 0, function () { return 'wrong too'; }], [1, 2, function () { return 'correct'; }]);
        expect(result2).toEqual('correct');
    });
    it('implements fizzbuzz', function () {
        function fizzbuzz(n) {
            return tm.match2(n % 3, n % 5, [0, 0, function () { return 'fizzbuzz'; }], [0, _, function () { return 'fizz'; }], [_, 0, function () { return 'buzz'; }], [_, _, function () { return ''; }]);
        }
        expect(fizzbuzz(15)).toEqual('fizzbuzz');
        expect(fizzbuzz(14)).toEqual('');
    });
    it('accepts three arguments', function () {
        var result = tm.match3(1, 2, 3, [_, _, _, function () { return 'such match'; }]);
        expect(result).toEqual('such match');
    });
    it('accepts four arguments', function () {
        var result = tm.match4(1, 2, 3, 4, [1, 2, 3, 5, function () { return 0; }], [_, _, _, 4, function (a, b, c, d) { return a + b + c + d; }]);
        expect(result).toEqual(10);
    });
    it('accepts five arguments', function () {
        var result = tm.match5('a', 'b', 'c', 'd', 'e', [_, _, 'c', _, _, function () { return 'yes'; }]);
        expect(result).toEqual('yes');
    });
    it('accepts six arguments', function () {
        var result = tm.match6('a', 'b', 'c', 'd', 'e', 1, [_, _, 'c', _, _, 1, function () { return 'yes'; }]);
        expect(result).toEqual('yes');
    });
    it('accepts seven arguments', function () {
        var result = tm.match7('a', 'b', 'c', 'd', 'e', 1, 10, [_, _, 'c', _, _, 1, _, function () { return 'yes'; }]);
        expect(result).toEqual('yes');
    });
    it('accepts eight arguments', function () {
        var result = tm.match8('a', 'b', 'c', 'd', 'e', 1, 10, true, [_, _, 'c', _, _, 1, _, true, function () { return 'yes'; }]);
        expect(result).toEqual('yes');
    });
    it('accepts nine arguments', function () {
        var result = tm.match9(1, 2, 3, 4, 5, 6, 7, 8, 9, [1, 2, 3, 4, 5, 6, 7, 8, 9, function (a, b, c, d, e, f, g, h, i) { return a + b + c + d + e + f + g + h + i; }]);
        expect(result).toEqual(45);
    });
    it('accepts ten arguments', function () {
        var result = tm.match10(1, 2, 3, 4, false, 6, 7, 8, 9, 10, [1, 2, 3, 4, true, 6, 7, 8, 9, _, function () { return -1; }], [1, 2, 3, 4, false, 6, _, 8, 9, _, function (a, b, c, d, e, f, g, h, i, j) { return a + b + c + d + f + g + h + i; }]);
        expect(result).toEqual(40);
    });
});
