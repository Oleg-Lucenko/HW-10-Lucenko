
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends {[K: string]: any} ? DeepReadonly<T[K]> : T[K];
};


type DeepRequireReadonly<T> = {
    readonly [K in keyof T]-?: T[K] extends {[K: string]: any} ? DeepReadonly<T[K]> : T[K];
};

type UpperCaseKeys<T> = {
    [K in keyof T & string as Uppercase<K>]: T[K];
};

type ObjectToPropertyDescriptor<T> =  {
    [K in keyof T]: {
        value: T[K],
        writable: false, 
        configurable: false
    };
};



