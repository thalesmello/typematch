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

export function match3<T1, T2, T3, TResp>(v1: T1, v2: T2, v3: T3, ...conditions: [Check<T1>, Check<T2>, Check<T3>, (v1?: T1, v2?: T2, v3?: T3) => TResp][]){
	return matchAny([v1, v2, v3], ...conditions.map((checks) => extractChecks<T1|T2|T3, TResp>(checks)))
}

export function match4<T1, T2, T3, T4, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4) => TResp][]){
	return matchAny([v1, v2, v3, v4], ...conditions.map((checks) => extractChecks<T1|T2|T3|T4, TResp>(checks)))
}

export function match5<T1, T2, T3, T4, T5, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, Check<T5>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5) => TResp][]){
	return matchAny([v1, v2, v3, v4, v5], ...conditions.map((checks) => extractChecks<T1|T2|T3|T4|T5, TResp>(checks)))
}

export function match6<T1, T2, T3, T4, T5, T6, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, Check<T5>, Check<T6>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5, v6?: T6) => TResp][]){
	return matchAny([v1, v2, v3, v4, v5, v6], ...conditions.map((checks) => extractChecks<T1|T2|T3|T4|T5|T6, TResp>(checks)))
}

export function match7<T1, T2, T3, T4, T5, T6, T7, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, Check<T5>, Check<T6>, Check<T7>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5, v6?: T6, v7?: T7) => TResp][]){
	return matchAny([v1, v2, v3, v4, v5, v6, v7], ...conditions.map((checks) => extractChecks<T1|T2|T3|T4|T5|T6|T7, TResp>(checks)))
}

export function match8<T1, T2, T3, T4, T5, T6, T7, T8, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, Check<T5>, Check<T6>, Check<T7>, Check<T8>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5, v6?: T6, v7?: T7, v8?: T8) => TResp][]){
	return matchAny([v1, v2, v3, v4, v5, v6, v7, v8], ...conditions.map((checks) => extractChecks<T1|T2|T3|T4|T5|T6|T7|T8, TResp>(checks)))
}

export function match9<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, Check<T5>, Check<T6>, Check<T7>, Check<T8>, Check<T9>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5, v6?: T6, v7?: T7, v8?: T8, v9?: T9) => TResp][]){
	return matchAny([v1, v2, v3, v4, v5, v6, v7, v8, v9], ...conditions.map((checks) => extractChecks<T1|T2|T3|T4|T5|T6|T7|T8|T9, TResp>(checks)))
}

export function match10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9, v10: T10, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, Check<T5>, Check<T6>, Check<T7>, Check<T8>, Check<T9>, Check<T10>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5, v6?: T6, v7?: T7, v8?: T8, v9?: T9, v10?: T10) => TResp][]){
	return matchAny([v1, v2, v3, v4, v5, v6, v7, v8, v9, v10], ...conditions.map((checks) => extractChecks<T1|T2|T3|T4|T5|T6|T7|T8|T9|T10, TResp>(checks)))
}

