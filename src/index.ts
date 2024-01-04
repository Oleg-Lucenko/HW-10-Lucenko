
type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends (number | boolean | undefined | null) ? T[K] : DeepReadonly<T[K]>
};


type DeepRequireReadonly<T> = {
    readonly [K in keyof T]-?: T[K] extends (number | boolean | undefined | null) ? T[K] : DeepReadonly<T[K]>
};

type Remapper<T> = {
    [K in keyof T]: K extends string ?
      K extends Uppercase<K> ? false : T[K] : T[K];
  }