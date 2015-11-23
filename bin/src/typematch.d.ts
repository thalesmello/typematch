export declare function match<TValue, TResponse>(value: TValue, ...conditions: [TValue, () => TResponse][]): TResponse;
