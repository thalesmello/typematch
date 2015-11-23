export function match<TValue, TResponse>(value: TValue, ...conditions: [TValue, () => TResponse][]){
	for(let [check, returnFunc] of conditions) {
		if(value === check) {
			return returnFunc();
		}
	}
}