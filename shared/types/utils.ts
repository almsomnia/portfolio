type Prev = [never, 0, 1, 2, 3, 4, 5] // max 5 levels
export type DotNestedKeys<T, D extends number = 5> = [D] extends [never]
   ? never
   : T extends object
     ? {
          [K in keyof T & (string | number)]: T[K] extends Array<any>
             ? `${K}` // stop at arrays — or go deeper if you want
             : T[K] extends object
               ? `${K}` | `${K}.${DotNestedKeys<T[K], Prev[D]>}`
               : `${K}`
       }[keyof T & (string | number)]
     : ""