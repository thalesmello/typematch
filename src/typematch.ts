export class Wildcard {
	private identity;
	constructor() {
		this.identity = {};
	}
	
	equals(other: Wildcard) {
		return this.identity === other.identity;
	}
}

export const _ = new Wildcard();

export interface Func<TArgument, TResponse> {
	(TArgument?): TResponse
}

function checkEquals<TValue>(values: TValue[], checks: (TValue|Wildcard)[]): boolean {
	for(let i = 0; i < values.length; i++) {
		let value = values[i];
		let check = checks[i];
		if(!(check instanceof Wildcard && _.equals(check) || value === check)) {
			return false;
		}
	}
	return true;
}

export type Multi<TValue> = TValue|TValue[]

function toList<TValue>(values: Multi<TValue>): TValue[] {
	if (values instanceof Array) {
		return values;
	}
	else {
		return [<TValue>values]
	}
} 

export type Check<TValue> = TValue|Wildcard

export function match<T1, TResp>(value: T1, ...conditions: [Check<T1>, (TValue?) => TResp][]){
	for(let [check, returnFunc] of conditions) {
		let checks = toList(check);
		if(checkEquals([value], checks)) {
			return returnFunc(value);
		}
	}
}

export function matchAny<TVal, TResp>(values: TVal[], ...conditions: [Check<TVal>[], (...vals: TVal[]) => TResp][]): TResp{
	for(let [checks, returnFunc] of conditions) {
		if(checkEquals(values, checks)) {
			return returnFunc(...values);
		}
	}
}

export type AnyFunc = (...args: any[]) => any
export type MyFunc<TVal, TResp> = (...args: TVal[]) => TResp

function extractChecks<TVal, TResp>(args: (Check<TVal>|MyFunc<TVal, TResp>)[]): [Check<TVal>[], MyFunc<TVal, TResp>]{
	var checks = <Check<TVal>[]> args.slice(0, args.length - 1);
	var func = <MyFunc<TVal, TResp>> args[args.length - 1]; 
	return [checks, func];
}

export function match1<T1, TResp>(v1: T1, ...conditions: [Check<T1>, (v1?: T1) => TResp][]){
	return matchAny([v1], ...conditions.map((checks) => extractChecks(checks)))
};

export function match2<T1, T2, TResp>(v1: T1, v2: T2, ...conditions: [Check<T1>, Check<T2>, (v1?: T1, v2?: T2) => TResp][]){
	return matchAny([v1, v2], ...conditions.map((checks) => extractChecks<T1|T2, TResp>(checks)))
}