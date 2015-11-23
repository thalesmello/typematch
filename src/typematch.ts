export interface Wildcard {}

export const _ : Wildcard = {}

export function match<TValue, TResponse>(value: TValue, ...conditions: [TValue | Wildcard, () => TResponse][]){
	for(let [check, returnFunc] of conditions) {
		console.log({value: value, check: check})
		if(value === check || check === _) {
			return returnFunc();
		}
	}
}