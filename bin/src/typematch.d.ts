export declare class Wildcard {
    private identity;
    constructor();
    equals(other: Wildcard): boolean;
}
export declare const _: Wildcard;
export interface Func<TArgument, TResponse> {
    (TArgument?: any): TResponse;
}
export declare type Multi<TValue> = TValue | TValue[];
export declare type Check<TValue> = TValue | Wildcard;
export declare function matchAny<TVal, TResp>(values: TVal[], ...conditions: [Check<TVal>[], (...vals: TVal[]) => TResp][]): TResp;
export declare type AnyFunc = (...args: any[]) => any;
export declare type MyFunc<TVal, TResp> = (...args: TVal[]) => TResp;
export declare function match1<T1, TResp>(v1: T1, ...conditions: [Check<T1>, (v1?: T1) => TResp][]): TResp;
export declare function match2<T1, T2, TResp>(v1: T1, v2: T2, ...conditions: [Check<T1>, Check<T2>, (v1?: T1, v2?: T2) => TResp][]): TResp;
export declare function match3<T1, T2, T3, TResp>(v1: T1, v2: T2, v3: T3, ...conditions: [Check<T1>, Check<T2>, Check<T3>, (v1?: T1, v2?: T2, v3?: T3) => TResp][]): TResp;
export declare function match4<T1, T2, T3, T4, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4) => TResp][]): TResp;
export declare function match5<T1, T2, T3, T4, T5, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, Check<T5>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5) => TResp][]): TResp;
export declare function match6<T1, T2, T3, T4, T5, T6, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, Check<T5>, Check<T6>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5, v6?: T6) => TResp][]): TResp;
export declare function match7<T1, T2, T3, T4, T5, T6, T7, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, Check<T5>, Check<T6>, Check<T7>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5, v6?: T6, v7?: T7) => TResp][]): TResp;
export declare function match8<T1, T2, T3, T4, T5, T6, T7, T8, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, Check<T5>, Check<T6>, Check<T7>, Check<T8>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5, v6?: T6, v7?: T7, v8?: T8) => TResp][]): TResp;
export declare function match9<T1, T2, T3, T4, T5, T6, T7, T8, T9, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, Check<T5>, Check<T6>, Check<T7>, Check<T8>, Check<T9>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5, v6?: T6, v7?: T7, v8?: T8, v9?: T9) => TResp][]): TResp;
export declare function match10<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, TResp>(v1: T1, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6, v7: T7, v8: T8, v9: T9, v10: T10, ...conditions: [Check<T1>, Check<T2>, Check<T3>, Check<T4>, Check<T5>, Check<T6>, Check<T7>, Check<T8>, Check<T9>, Check<T10>, (v1?: T1, v2?: T2, v3?: T3, v4?: T4, v5?: T5, v6?: T6, v7?: T7, v8?: T8, v9?: T9, v10?: T10) => TResp][]): TResp;
