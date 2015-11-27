# TypeMatch
A tiny TypeScript library for pattern matching with focus on type safety.

## Introdution
Pattern matching is very popular in functional programming, and there are several libraries that try to bring it to JavaScript, such as [pun](https://github.com/CRogers/pun).

This library is an attempt to provide similar functionality with emphasis on type safety using TypeScript.

# How to use it

```typescript
import tm = require('typematch');

// Importing wildcard
var _ = tm._;

{
	let result = tm.match1(1,
		[0, () => 'no'],
		[1, () => 'it matches']);
	console.log(result); // it matches
}

{
	let result = tm.match2('two', 'arguments',
		['statically', 'checked', () => '=D'],
		[_, 'arguments', () => 'you can use wildcards'])
	console.log(result); // you can use wildcards
}

{
	let fibonacci = (n: number) => {
		return tm.match1(n,
			[0, () => 1],
			[_, () => n * fibonacci(n - 1)])
	}
	
	console.log(fibonacci(5)); // 120
}

{
	let fizzbuzz = (n: number) => {
		return tm.match2(n % 3, n % 5,
			[0, 0, () => 'fizzbuzz'],
			[0, _, () => 'fizz'],
			[_, 0, () => 'buzz']);
	}
	console.log(fizzbuzz(15)); // fizzbuzz
	console.log(fizzbuzz(14)); // undefined
}

{
	let result = tm.match4('static', 4, 'the', true,
		['dynamic', 4, 'the', false, () => 'javascript'],
		['static', 4, 'the', true, (pass, the, args, over) => pass + ' typescript']);
	console.log(result); // static typescript
}
```

## Type safety using JavaScript

You can use this library with JavaScript and have code completion with Visual Studio Code.

To do so, just include reference to the typings definition on the top of your code.

```
/// <reference path="node_modules/typematch/bin/src/bundle.d.ts" />
```