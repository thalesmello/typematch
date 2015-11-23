/// <reference path="../typings/jasmine/jasmine.d.ts" />
var typematch_1 = require('../src/typematch');
describe('the TypeMatch module', function () {
    it('exists', function () {
        expect(typematch_1.match).not.toBeNull();
    });
    it('makes a simple assertion', function () {
        var result = typematch_1.match('it is', ['it is', function () { return 'correct'; }]);
        expect(result).toEqual('correct');
    });
    it('accepts multiple assertions', function () {
        var result = typematch_1.match(1, [0, function () { return 'nope'; }], [1, function () { return 'yes'; }]);
        expect(result).toEqual('yes');
    });
    // it('it has wildcarts', () => {
    // 	let result = match('yolo',
    // 		['hi', () => 'there'],
    // 		[_ => () => 'good bye']);
    // 	expect(result).toEqual('good bye');
    // });
    // it('accepts functions with arguments as well', () => {
    // 	function fibonacci(n) {
    // 		return tm.match(n, 
    // 			[0, () => 1],
    // 			[_, (n) => ]);
    // 	}
    // 	let result = tm.match()
    // });
});
