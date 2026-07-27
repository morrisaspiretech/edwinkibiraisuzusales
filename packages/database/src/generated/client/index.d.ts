
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model VehicleImage
 * 
 */
export type VehicleImage = $Result.DefaultSelection<Prisma.$VehicleImagePayload>
/**
 * Model CRSPModel
 * 
 */
export type CRSPModel = $Result.DefaultSelection<Prisma.$CRSPModelPayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model SourcingRequest
 * 
 */
export type SourcingRequest = $Result.DefaultSelection<Prisma.$SourcingRequestPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vehicles
 * const vehicles = await prisma.vehicle.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Vehicles
   * const vehicles = await prisma.vehicle.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs>;

  /**
   * `prisma.vehicleImage`: Exposes CRUD operations for the **VehicleImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleImages
    * const vehicleImages = await prisma.vehicleImage.findMany()
    * ```
    */
  get vehicleImage(): Prisma.VehicleImageDelegate<ExtArgs>;

  /**
   * `prisma.cRSPModel`: Exposes CRUD operations for the **CRSPModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CRSPModels
    * const cRSPModels = await prisma.cRSPModel.findMany()
    * ```
    */
  get cRSPModel(): Prisma.CRSPModelDelegate<ExtArgs>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs>;

  /**
   * `prisma.sourcingRequest`: Exposes CRUD operations for the **SourcingRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourcingRequests
    * const sourcingRequests = await prisma.sourcingRequest.findMany()
    * ```
    */
  get sourcingRequest(): Prisma.SourcingRequestDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Vehicle: 'Vehicle',
    VehicleImage: 'VehicleImage',
    CRSPModel: 'CRSPModel',
    Lead: 'Lead',
    SourcingRequest: 'SourcingRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "vehicle" | "vehicleImage" | "cRSPModel" | "lead" | "sourcingRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      VehicleImage: {
        payload: Prisma.$VehicleImagePayload<ExtArgs>
        fields: Prisma.VehicleImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleImagePayload>
          }
          findFirst: {
            args: Prisma.VehicleImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleImagePayload>
          }
          findMany: {
            args: Prisma.VehicleImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleImagePayload>[]
          }
          create: {
            args: Prisma.VehicleImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleImagePayload>
          }
          createMany: {
            args: Prisma.VehicleImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleImagePayload>[]
          }
          delete: {
            args: Prisma.VehicleImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleImagePayload>
          }
          update: {
            args: Prisma.VehicleImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleImagePayload>
          }
          deleteMany: {
            args: Prisma.VehicleImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleImagePayload>
          }
          aggregate: {
            args: Prisma.VehicleImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleImage>
          }
          groupBy: {
            args: Prisma.VehicleImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleImageCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleImageCountAggregateOutputType> | number
          }
        }
      }
      CRSPModel: {
        payload: Prisma.$CRSPModelPayload<ExtArgs>
        fields: Prisma.CRSPModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CRSPModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRSPModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CRSPModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRSPModelPayload>
          }
          findFirst: {
            args: Prisma.CRSPModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRSPModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CRSPModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRSPModelPayload>
          }
          findMany: {
            args: Prisma.CRSPModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRSPModelPayload>[]
          }
          create: {
            args: Prisma.CRSPModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRSPModelPayload>
          }
          createMany: {
            args: Prisma.CRSPModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CRSPModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRSPModelPayload>[]
          }
          delete: {
            args: Prisma.CRSPModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRSPModelPayload>
          }
          update: {
            args: Prisma.CRSPModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRSPModelPayload>
          }
          deleteMany: {
            args: Prisma.CRSPModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CRSPModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CRSPModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CRSPModelPayload>
          }
          aggregate: {
            args: Prisma.CRSPModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCRSPModel>
          }
          groupBy: {
            args: Prisma.CRSPModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<CRSPModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.CRSPModelCountArgs<ExtArgs>
            result: $Utils.Optional<CRSPModelCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      SourcingRequest: {
        payload: Prisma.$SourcingRequestPayload<ExtArgs>
        fields: Prisma.SourcingRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourcingRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourcingRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingRequestPayload>
          }
          findFirst: {
            args: Prisma.SourcingRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourcingRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingRequestPayload>
          }
          findMany: {
            args: Prisma.SourcingRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingRequestPayload>[]
          }
          create: {
            args: Prisma.SourcingRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingRequestPayload>
          }
          createMany: {
            args: Prisma.SourcingRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourcingRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingRequestPayload>[]
          }
          delete: {
            args: Prisma.SourcingRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingRequestPayload>
          }
          update: {
            args: Prisma.SourcingRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingRequestPayload>
          }
          deleteMany: {
            args: Prisma.SourcingRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourcingRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SourcingRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcingRequestPayload>
          }
          aggregate: {
            args: Prisma.SourcingRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourcingRequest>
          }
          groupBy: {
            args: Prisma.SourcingRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourcingRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourcingRequestCountArgs<ExtArgs>
            result: $Utils.Optional<SourcingRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    images: number
    leads: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | VehicleCountOutputTypeCountImagesArgs
    leads?: boolean | VehicleCountOutputTypeCountLeadsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleImageWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountLeadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    year: number | null
    price: number | null
    engineCC: number | null
    mileage: number | null
  }

  export type VehicleSumAggregateOutputType = {
    year: number | null
    price: number | null
    engineCC: number | null
    mileage: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    make: string | null
    model: string | null
    year: number | null
    price: number | null
    fuelType: string | null
    engineCC: number | null
    transmission: string | null
    bodyType: string | null
    mileage: number | null
    color: string | null
    driveType: string | null
    vin: string | null
    description: string | null
    category: string | null
    status: string | null
    condition: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    make: string | null
    model: string | null
    year: number | null
    price: number | null
    fuelType: string | null
    engineCC: number | null
    transmission: string | null
    bodyType: string | null
    mileage: number | null
    color: string | null
    driveType: string | null
    vin: string | null
    description: string | null
    category: string | null
    status: string | null
    condition: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    make: number
    model: number
    year: number
    price: number
    fuelType: number
    engineCC: number
    transmission: number
    bodyType: number
    mileage: number
    color: number
    driveType: number
    vin: number
    description: number
    features: number
    category: number
    status: number
    condition: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    year?: true
    price?: true
    engineCC?: true
    mileage?: true
  }

  export type VehicleSumAggregateInputType = {
    year?: true
    price?: true
    engineCC?: true
    mileage?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    price?: true
    fuelType?: true
    engineCC?: true
    transmission?: true
    bodyType?: true
    mileage?: true
    color?: true
    driveType?: true
    vin?: true
    description?: true
    category?: true
    status?: true
    condition?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    price?: true
    fuelType?: true
    engineCC?: true
    transmission?: true
    bodyType?: true
    mileage?: true
    color?: true
    driveType?: true
    vin?: true
    description?: true
    category?: true
    status?: true
    condition?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    make?: true
    model?: true
    year?: true
    price?: true
    fuelType?: true
    engineCC?: true
    transmission?: true
    bodyType?: true
    mileage?: true
    color?: true
    driveType?: true
    vin?: true
    description?: true
    features?: true
    category?: true
    status?: true
    condition?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    make: string
    model: string
    year: number
    price: number
    fuelType: string
    engineCC: number
    transmission: string
    bodyType: string
    mileage: number
    color: string | null
    driveType: string | null
    vin: string | null
    description: string | null
    features: string[]
    category: string
    status: string
    condition: string
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    fuelType?: boolean
    engineCC?: boolean
    transmission?: boolean
    bodyType?: boolean
    mileage?: boolean
    color?: boolean
    driveType?: boolean
    vin?: boolean
    description?: boolean
    features?: boolean
    category?: boolean
    status?: boolean
    condition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    images?: boolean | Vehicle$imagesArgs<ExtArgs>
    leads?: boolean | Vehicle$leadsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    fuelType?: boolean
    engineCC?: boolean
    transmission?: boolean
    bodyType?: boolean
    mileage?: boolean
    color?: boolean
    driveType?: boolean
    vin?: boolean
    description?: boolean
    features?: boolean
    category?: boolean
    status?: boolean
    condition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    make?: boolean
    model?: boolean
    year?: boolean
    price?: boolean
    fuelType?: boolean
    engineCC?: boolean
    transmission?: boolean
    bodyType?: boolean
    mileage?: boolean
    color?: boolean
    driveType?: boolean
    vin?: boolean
    description?: boolean
    features?: boolean
    category?: boolean
    status?: boolean
    condition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Vehicle$imagesArgs<ExtArgs>
    leads?: boolean | Vehicle$leadsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      images: Prisma.$VehicleImagePayload<ExtArgs>[]
      leads: Prisma.$LeadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      make: string
      model: string
      year: number
      price: number
      fuelType: string
      engineCC: number
      transmission: string
      bodyType: string
      mileage: number
      color: string | null
      driveType: string | null
      vin: string | null
      description: string | null
      features: string[]
      category: string
      status: string
      condition: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Vehicle$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleImagePayload<ExtArgs>, T, "findMany"> | Null>
    leads<T extends Vehicle$leadsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$leadsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */ 
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly make: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly year: FieldRef<"Vehicle", 'Int'>
    readonly price: FieldRef<"Vehicle", 'Float'>
    readonly fuelType: FieldRef<"Vehicle", 'String'>
    readonly engineCC: FieldRef<"Vehicle", 'Int'>
    readonly transmission: FieldRef<"Vehicle", 'String'>
    readonly bodyType: FieldRef<"Vehicle", 'String'>
    readonly mileage: FieldRef<"Vehicle", 'Int'>
    readonly color: FieldRef<"Vehicle", 'String'>
    readonly driveType: FieldRef<"Vehicle", 'String'>
    readonly vin: FieldRef<"Vehicle", 'String'>
    readonly description: FieldRef<"Vehicle", 'String'>
    readonly features: FieldRef<"Vehicle", 'String[]'>
    readonly category: FieldRef<"Vehicle", 'String'>
    readonly status: FieldRef<"Vehicle", 'String'>
    readonly condition: FieldRef<"Vehicle", 'String'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
  }

  /**
   * Vehicle.images
   */
  export type Vehicle$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleImage
     */
    select?: VehicleImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleImageInclude<ExtArgs> | null
    where?: VehicleImageWhereInput
    orderBy?: VehicleImageOrderByWithRelationInput | VehicleImageOrderByWithRelationInput[]
    cursor?: VehicleImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleImageScalarFieldEnum | VehicleImageScalarFieldEnum[]
  }

  /**
   * Vehicle.leads
   */
  export type Vehicle$leadsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    cursor?: LeadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model VehicleImage
   */

  export type AggregateVehicleImage = {
    _count: VehicleImageCountAggregateOutputType | null
    _avg: VehicleImageAvgAggregateOutputType | null
    _sum: VehicleImageSumAggregateOutputType | null
    _min: VehicleImageMinAggregateOutputType | null
    _max: VehicleImageMaxAggregateOutputType | null
  }

  export type VehicleImageAvgAggregateOutputType = {
    position: number | null
  }

  export type VehicleImageSumAggregateOutputType = {
    position: number | null
  }

  export type VehicleImageMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    url: string | null
    isPrimary: boolean | null
    position: number | null
  }

  export type VehicleImageMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    url: string | null
    isPrimary: boolean | null
    position: number | null
  }

  export type VehicleImageCountAggregateOutputType = {
    id: number
    vehicleId: number
    url: number
    isPrimary: number
    position: number
    _all: number
  }


  export type VehicleImageAvgAggregateInputType = {
    position?: true
  }

  export type VehicleImageSumAggregateInputType = {
    position?: true
  }

  export type VehicleImageMinAggregateInputType = {
    id?: true
    vehicleId?: true
    url?: true
    isPrimary?: true
    position?: true
  }

  export type VehicleImageMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    url?: true
    isPrimary?: true
    position?: true
  }

  export type VehicleImageCountAggregateInputType = {
    id?: true
    vehicleId?: true
    url?: true
    isPrimary?: true
    position?: true
    _all?: true
  }

  export type VehicleImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleImage to aggregate.
     */
    where?: VehicleImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleImages to fetch.
     */
    orderBy?: VehicleImageOrderByWithRelationInput | VehicleImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleImages
    **/
    _count?: true | VehicleImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleImageMaxAggregateInputType
  }

  export type GetVehicleImageAggregateType<T extends VehicleImageAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleImage[P]>
      : GetScalarType<T[P], AggregateVehicleImage[P]>
  }




  export type VehicleImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleImageWhereInput
    orderBy?: VehicleImageOrderByWithAggregationInput | VehicleImageOrderByWithAggregationInput[]
    by: VehicleImageScalarFieldEnum[] | VehicleImageScalarFieldEnum
    having?: VehicleImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleImageCountAggregateInputType | true
    _avg?: VehicleImageAvgAggregateInputType
    _sum?: VehicleImageSumAggregateInputType
    _min?: VehicleImageMinAggregateInputType
    _max?: VehicleImageMaxAggregateInputType
  }

  export type VehicleImageGroupByOutputType = {
    id: string
    vehicleId: string
    url: string
    isPrimary: boolean
    position: number
    _count: VehicleImageCountAggregateOutputType | null
    _avg: VehicleImageAvgAggregateOutputType | null
    _sum: VehicleImageSumAggregateOutputType | null
    _min: VehicleImageMinAggregateOutputType | null
    _max: VehicleImageMaxAggregateOutputType | null
  }

  type GetVehicleImageGroupByPayload<T extends VehicleImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleImageGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleImageGroupByOutputType[P]>
        }
      >
    >


  export type VehicleImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    url?: boolean
    isPrimary?: boolean
    position?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleImage"]>

  export type VehicleImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    url?: boolean
    isPrimary?: boolean
    position?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleImage"]>

  export type VehicleImageSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    url?: boolean
    isPrimary?: boolean
    position?: boolean
  }

  export type VehicleImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type VehicleImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $VehicleImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleImage"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      url: string
      isPrimary: boolean
      position: number
    }, ExtArgs["result"]["vehicleImage"]>
    composites: {}
  }

  type VehicleImageGetPayload<S extends boolean | null | undefined | VehicleImageDefaultArgs> = $Result.GetResult<Prisma.$VehicleImagePayload, S>

  type VehicleImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VehicleImageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VehicleImageCountAggregateInputType | true
    }

  export interface VehicleImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleImage'], meta: { name: 'VehicleImage' } }
    /**
     * Find zero or one VehicleImage that matches the filter.
     * @param {VehicleImageFindUniqueArgs} args - Arguments to find a VehicleImage
     * @example
     * // Get one VehicleImage
     * const vehicleImage = await prisma.vehicleImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleImageFindUniqueArgs>(args: SelectSubset<T, VehicleImageFindUniqueArgs<ExtArgs>>): Prisma__VehicleImageClient<$Result.GetResult<Prisma.$VehicleImagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VehicleImage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VehicleImageFindUniqueOrThrowArgs} args - Arguments to find a VehicleImage
     * @example
     * // Get one VehicleImage
     * const vehicleImage = await prisma.vehicleImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleImageFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleImageClient<$Result.GetResult<Prisma.$VehicleImagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VehicleImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleImageFindFirstArgs} args - Arguments to find a VehicleImage
     * @example
     * // Get one VehicleImage
     * const vehicleImage = await prisma.vehicleImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleImageFindFirstArgs>(args?: SelectSubset<T, VehicleImageFindFirstArgs<ExtArgs>>): Prisma__VehicleImageClient<$Result.GetResult<Prisma.$VehicleImagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VehicleImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleImageFindFirstOrThrowArgs} args - Arguments to find a VehicleImage
     * @example
     * // Get one VehicleImage
     * const vehicleImage = await prisma.vehicleImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleImageFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleImageClient<$Result.GetResult<Prisma.$VehicleImagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VehicleImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleImages
     * const vehicleImages = await prisma.vehicleImage.findMany()
     * 
     * // Get first 10 VehicleImages
     * const vehicleImages = await prisma.vehicleImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleImageWithIdOnly = await prisma.vehicleImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleImageFindManyArgs>(args?: SelectSubset<T, VehicleImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleImagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VehicleImage.
     * @param {VehicleImageCreateArgs} args - Arguments to create a VehicleImage.
     * @example
     * // Create one VehicleImage
     * const VehicleImage = await prisma.vehicleImage.create({
     *   data: {
     *     // ... data to create a VehicleImage
     *   }
     * })
     * 
     */
    create<T extends VehicleImageCreateArgs>(args: SelectSubset<T, VehicleImageCreateArgs<ExtArgs>>): Prisma__VehicleImageClient<$Result.GetResult<Prisma.$VehicleImagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VehicleImages.
     * @param {VehicleImageCreateManyArgs} args - Arguments to create many VehicleImages.
     * @example
     * // Create many VehicleImages
     * const vehicleImage = await prisma.vehicleImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleImageCreateManyArgs>(args?: SelectSubset<T, VehicleImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleImages and returns the data saved in the database.
     * @param {VehicleImageCreateManyAndReturnArgs} args - Arguments to create many VehicleImages.
     * @example
     * // Create many VehicleImages
     * const vehicleImage = await prisma.vehicleImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleImages and only return the `id`
     * const vehicleImageWithIdOnly = await prisma.vehicleImage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleImageCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleImagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VehicleImage.
     * @param {VehicleImageDeleteArgs} args - Arguments to delete one VehicleImage.
     * @example
     * // Delete one VehicleImage
     * const VehicleImage = await prisma.vehicleImage.delete({
     *   where: {
     *     // ... filter to delete one VehicleImage
     *   }
     * })
     * 
     */
    delete<T extends VehicleImageDeleteArgs>(args: SelectSubset<T, VehicleImageDeleteArgs<ExtArgs>>): Prisma__VehicleImageClient<$Result.GetResult<Prisma.$VehicleImagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VehicleImage.
     * @param {VehicleImageUpdateArgs} args - Arguments to update one VehicleImage.
     * @example
     * // Update one VehicleImage
     * const vehicleImage = await prisma.vehicleImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleImageUpdateArgs>(args: SelectSubset<T, VehicleImageUpdateArgs<ExtArgs>>): Prisma__VehicleImageClient<$Result.GetResult<Prisma.$VehicleImagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VehicleImages.
     * @param {VehicleImageDeleteManyArgs} args - Arguments to filter VehicleImages to delete.
     * @example
     * // Delete a few VehicleImages
     * const { count } = await prisma.vehicleImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleImageDeleteManyArgs>(args?: SelectSubset<T, VehicleImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleImages
     * const vehicleImage = await prisma.vehicleImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleImageUpdateManyArgs>(args: SelectSubset<T, VehicleImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VehicleImage.
     * @param {VehicleImageUpsertArgs} args - Arguments to update or create a VehicleImage.
     * @example
     * // Update or create a VehicleImage
     * const vehicleImage = await prisma.vehicleImage.upsert({
     *   create: {
     *     // ... data to create a VehicleImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleImage we want to update
     *   }
     * })
     */
    upsert<T extends VehicleImageUpsertArgs>(args: SelectSubset<T, VehicleImageUpsertArgs<ExtArgs>>): Prisma__VehicleImageClient<$Result.GetResult<Prisma.$VehicleImagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VehicleImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleImageCountArgs} args - Arguments to filter VehicleImages to count.
     * @example
     * // Count the number of VehicleImages
     * const count = await prisma.vehicleImage.count({
     *   where: {
     *     // ... the filter for the VehicleImages we want to count
     *   }
     * })
    **/
    count<T extends VehicleImageCountArgs>(
      args?: Subset<T, VehicleImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleImageAggregateArgs>(args: Subset<T, VehicleImageAggregateArgs>): Prisma.PrismaPromise<GetVehicleImageAggregateType<T>>

    /**
     * Group by VehicleImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleImageGroupByArgs['orderBy'] }
        : { orderBy?: VehicleImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleImage model
   */
  readonly fields: VehicleImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VehicleImage model
   */ 
  interface VehicleImageFieldRefs {
    readonly id: FieldRef<"VehicleImage", 'String'>
    readonly vehicleId: FieldRef<"VehicleImage", 'String'>
    readonly url: FieldRef<"VehicleImage", 'String'>
    readonly isPrimary: FieldRef<"VehicleImage", 'Boolean'>
    readonly position: FieldRef<"VehicleImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * VehicleImage findUnique
   */
  export type VehicleImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleImage
     */
    select?: VehicleImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleImageInclude<ExtArgs> | null
    /**
     * Filter, which VehicleImage to fetch.
     */
    where: VehicleImageWhereUniqueInput
  }

  /**
   * VehicleImage findUniqueOrThrow
   */
  export type VehicleImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleImage
     */
    select?: VehicleImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleImageInclude<ExtArgs> | null
    /**
     * Filter, which VehicleImage to fetch.
     */
    where: VehicleImageWhereUniqueInput
  }

  /**
   * VehicleImage findFirst
   */
  export type VehicleImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleImage
     */
    select?: VehicleImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleImageInclude<ExtArgs> | null
    /**
     * Filter, which VehicleImage to fetch.
     */
    where?: VehicleImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleImages to fetch.
     */
    orderBy?: VehicleImageOrderByWithRelationInput | VehicleImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleImages.
     */
    cursor?: VehicleImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleImages.
     */
    distinct?: VehicleImageScalarFieldEnum | VehicleImageScalarFieldEnum[]
  }

  /**
   * VehicleImage findFirstOrThrow
   */
  export type VehicleImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleImage
     */
    select?: VehicleImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleImageInclude<ExtArgs> | null
    /**
     * Filter, which VehicleImage to fetch.
     */
    where?: VehicleImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleImages to fetch.
     */
    orderBy?: VehicleImageOrderByWithRelationInput | VehicleImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleImages.
     */
    cursor?: VehicleImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleImages.
     */
    distinct?: VehicleImageScalarFieldEnum | VehicleImageScalarFieldEnum[]
  }

  /**
   * VehicleImage findMany
   */
  export type VehicleImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleImage
     */
    select?: VehicleImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleImageInclude<ExtArgs> | null
    /**
     * Filter, which VehicleImages to fetch.
     */
    where?: VehicleImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleImages to fetch.
     */
    orderBy?: VehicleImageOrderByWithRelationInput | VehicleImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleImages.
     */
    cursor?: VehicleImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleImages.
     */
    skip?: number
    distinct?: VehicleImageScalarFieldEnum | VehicleImageScalarFieldEnum[]
  }

  /**
   * VehicleImage create
   */
  export type VehicleImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleImage
     */
    select?: VehicleImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleImageInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleImage.
     */
    data: XOR<VehicleImageCreateInput, VehicleImageUncheckedCreateInput>
  }

  /**
   * VehicleImage createMany
   */
  export type VehicleImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleImages.
     */
    data: VehicleImageCreateManyInput | VehicleImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleImage createManyAndReturn
   */
  export type VehicleImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleImage
     */
    select?: VehicleImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VehicleImages.
     */
    data: VehicleImageCreateManyInput | VehicleImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VehicleImage update
   */
  export type VehicleImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleImage
     */
    select?: VehicleImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleImageInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleImage.
     */
    data: XOR<VehicleImageUpdateInput, VehicleImageUncheckedUpdateInput>
    /**
     * Choose, which VehicleImage to update.
     */
    where: VehicleImageWhereUniqueInput
  }

  /**
   * VehicleImage updateMany
   */
  export type VehicleImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleImages.
     */
    data: XOR<VehicleImageUpdateManyMutationInput, VehicleImageUncheckedUpdateManyInput>
    /**
     * Filter which VehicleImages to update
     */
    where?: VehicleImageWhereInput
  }

  /**
   * VehicleImage upsert
   */
  export type VehicleImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleImage
     */
    select?: VehicleImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleImageInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleImage to update in case it exists.
     */
    where: VehicleImageWhereUniqueInput
    /**
     * In case the VehicleImage found by the `where` argument doesn't exist, create a new VehicleImage with this data.
     */
    create: XOR<VehicleImageCreateInput, VehicleImageUncheckedCreateInput>
    /**
     * In case the VehicleImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleImageUpdateInput, VehicleImageUncheckedUpdateInput>
  }

  /**
   * VehicleImage delete
   */
  export type VehicleImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleImage
     */
    select?: VehicleImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleImageInclude<ExtArgs> | null
    /**
     * Filter which VehicleImage to delete.
     */
    where: VehicleImageWhereUniqueInput
  }

  /**
   * VehicleImage deleteMany
   */
  export type VehicleImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleImages to delete
     */
    where?: VehicleImageWhereInput
  }

  /**
   * VehicleImage without action
   */
  export type VehicleImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleImage
     */
    select?: VehicleImageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleImageInclude<ExtArgs> | null
  }


  /**
   * Model CRSPModel
   */

  export type AggregateCRSPModel = {
    _count: CRSPModelCountAggregateOutputType | null
    _avg: CRSPModelAvgAggregateOutputType | null
    _sum: CRSPModelSumAggregateOutputType | null
    _min: CRSPModelMinAggregateOutputType | null
    _max: CRSPModelMaxAggregateOutputType | null
  }

  export type CRSPModelAvgAggregateOutputType = {
    engineCC: number | null
    referencePrice: number | null
    yearStart: number | null
    yearEnd: number | null
  }

  export type CRSPModelSumAggregateOutputType = {
    engineCC: number | null
    referencePrice: number | null
    yearStart: number | null
    yearEnd: number | null
  }

  export type CRSPModelMinAggregateOutputType = {
    id: string | null
    make: string | null
    model: string | null
    bodyType: string | null
    fuelType: string | null
    engineCC: number | null
    referencePrice: number | null
    yearStart: number | null
    yearEnd: number | null
  }

  export type CRSPModelMaxAggregateOutputType = {
    id: string | null
    make: string | null
    model: string | null
    bodyType: string | null
    fuelType: string | null
    engineCC: number | null
    referencePrice: number | null
    yearStart: number | null
    yearEnd: number | null
  }

  export type CRSPModelCountAggregateOutputType = {
    id: number
    make: number
    model: number
    bodyType: number
    fuelType: number
    engineCC: number
    referencePrice: number
    yearStart: number
    yearEnd: number
    _all: number
  }


  export type CRSPModelAvgAggregateInputType = {
    engineCC?: true
    referencePrice?: true
    yearStart?: true
    yearEnd?: true
  }

  export type CRSPModelSumAggregateInputType = {
    engineCC?: true
    referencePrice?: true
    yearStart?: true
    yearEnd?: true
  }

  export type CRSPModelMinAggregateInputType = {
    id?: true
    make?: true
    model?: true
    bodyType?: true
    fuelType?: true
    engineCC?: true
    referencePrice?: true
    yearStart?: true
    yearEnd?: true
  }

  export type CRSPModelMaxAggregateInputType = {
    id?: true
    make?: true
    model?: true
    bodyType?: true
    fuelType?: true
    engineCC?: true
    referencePrice?: true
    yearStart?: true
    yearEnd?: true
  }

  export type CRSPModelCountAggregateInputType = {
    id?: true
    make?: true
    model?: true
    bodyType?: true
    fuelType?: true
    engineCC?: true
    referencePrice?: true
    yearStart?: true
    yearEnd?: true
    _all?: true
  }

  export type CRSPModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CRSPModel to aggregate.
     */
    where?: CRSPModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CRSPModels to fetch.
     */
    orderBy?: CRSPModelOrderByWithRelationInput | CRSPModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CRSPModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CRSPModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CRSPModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CRSPModels
    **/
    _count?: true | CRSPModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CRSPModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CRSPModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CRSPModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CRSPModelMaxAggregateInputType
  }

  export type GetCRSPModelAggregateType<T extends CRSPModelAggregateArgs> = {
        [P in keyof T & keyof AggregateCRSPModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCRSPModel[P]>
      : GetScalarType<T[P], AggregateCRSPModel[P]>
  }




  export type CRSPModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CRSPModelWhereInput
    orderBy?: CRSPModelOrderByWithAggregationInput | CRSPModelOrderByWithAggregationInput[]
    by: CRSPModelScalarFieldEnum[] | CRSPModelScalarFieldEnum
    having?: CRSPModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CRSPModelCountAggregateInputType | true
    _avg?: CRSPModelAvgAggregateInputType
    _sum?: CRSPModelSumAggregateInputType
    _min?: CRSPModelMinAggregateInputType
    _max?: CRSPModelMaxAggregateInputType
  }

  export type CRSPModelGroupByOutputType = {
    id: string
    make: string
    model: string
    bodyType: string | null
    fuelType: string | null
    engineCC: number | null
    referencePrice: number | null
    yearStart: number | null
    yearEnd: number | null
    _count: CRSPModelCountAggregateOutputType | null
    _avg: CRSPModelAvgAggregateOutputType | null
    _sum: CRSPModelSumAggregateOutputType | null
    _min: CRSPModelMinAggregateOutputType | null
    _max: CRSPModelMaxAggregateOutputType | null
  }

  type GetCRSPModelGroupByPayload<T extends CRSPModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CRSPModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CRSPModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CRSPModelGroupByOutputType[P]>
            : GetScalarType<T[P], CRSPModelGroupByOutputType[P]>
        }
      >
    >


  export type CRSPModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    bodyType?: boolean
    fuelType?: boolean
    engineCC?: boolean
    referencePrice?: boolean
    yearStart?: boolean
    yearEnd?: boolean
  }, ExtArgs["result"]["cRSPModel"]>

  export type CRSPModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    make?: boolean
    model?: boolean
    bodyType?: boolean
    fuelType?: boolean
    engineCC?: boolean
    referencePrice?: boolean
    yearStart?: boolean
    yearEnd?: boolean
  }, ExtArgs["result"]["cRSPModel"]>

  export type CRSPModelSelectScalar = {
    id?: boolean
    make?: boolean
    model?: boolean
    bodyType?: boolean
    fuelType?: boolean
    engineCC?: boolean
    referencePrice?: boolean
    yearStart?: boolean
    yearEnd?: boolean
  }


  export type $CRSPModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CRSPModel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      make: string
      model: string
      bodyType: string | null
      fuelType: string | null
      engineCC: number | null
      referencePrice: number | null
      yearStart: number | null
      yearEnd: number | null
    }, ExtArgs["result"]["cRSPModel"]>
    composites: {}
  }

  type CRSPModelGetPayload<S extends boolean | null | undefined | CRSPModelDefaultArgs> = $Result.GetResult<Prisma.$CRSPModelPayload, S>

  type CRSPModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CRSPModelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CRSPModelCountAggregateInputType | true
    }

  export interface CRSPModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CRSPModel'], meta: { name: 'CRSPModel' } }
    /**
     * Find zero or one CRSPModel that matches the filter.
     * @param {CRSPModelFindUniqueArgs} args - Arguments to find a CRSPModel
     * @example
     * // Get one CRSPModel
     * const cRSPModel = await prisma.cRSPModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CRSPModelFindUniqueArgs>(args: SelectSubset<T, CRSPModelFindUniqueArgs<ExtArgs>>): Prisma__CRSPModelClient<$Result.GetResult<Prisma.$CRSPModelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CRSPModel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CRSPModelFindUniqueOrThrowArgs} args - Arguments to find a CRSPModel
     * @example
     * // Get one CRSPModel
     * const cRSPModel = await prisma.cRSPModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CRSPModelFindUniqueOrThrowArgs>(args: SelectSubset<T, CRSPModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CRSPModelClient<$Result.GetResult<Prisma.$CRSPModelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CRSPModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRSPModelFindFirstArgs} args - Arguments to find a CRSPModel
     * @example
     * // Get one CRSPModel
     * const cRSPModel = await prisma.cRSPModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CRSPModelFindFirstArgs>(args?: SelectSubset<T, CRSPModelFindFirstArgs<ExtArgs>>): Prisma__CRSPModelClient<$Result.GetResult<Prisma.$CRSPModelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CRSPModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRSPModelFindFirstOrThrowArgs} args - Arguments to find a CRSPModel
     * @example
     * // Get one CRSPModel
     * const cRSPModel = await prisma.cRSPModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CRSPModelFindFirstOrThrowArgs>(args?: SelectSubset<T, CRSPModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__CRSPModelClient<$Result.GetResult<Prisma.$CRSPModelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CRSPModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRSPModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CRSPModels
     * const cRSPModels = await prisma.cRSPModel.findMany()
     * 
     * // Get first 10 CRSPModels
     * const cRSPModels = await prisma.cRSPModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cRSPModelWithIdOnly = await prisma.cRSPModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CRSPModelFindManyArgs>(args?: SelectSubset<T, CRSPModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CRSPModelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CRSPModel.
     * @param {CRSPModelCreateArgs} args - Arguments to create a CRSPModel.
     * @example
     * // Create one CRSPModel
     * const CRSPModel = await prisma.cRSPModel.create({
     *   data: {
     *     // ... data to create a CRSPModel
     *   }
     * })
     * 
     */
    create<T extends CRSPModelCreateArgs>(args: SelectSubset<T, CRSPModelCreateArgs<ExtArgs>>): Prisma__CRSPModelClient<$Result.GetResult<Prisma.$CRSPModelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CRSPModels.
     * @param {CRSPModelCreateManyArgs} args - Arguments to create many CRSPModels.
     * @example
     * // Create many CRSPModels
     * const cRSPModel = await prisma.cRSPModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CRSPModelCreateManyArgs>(args?: SelectSubset<T, CRSPModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CRSPModels and returns the data saved in the database.
     * @param {CRSPModelCreateManyAndReturnArgs} args - Arguments to create many CRSPModels.
     * @example
     * // Create many CRSPModels
     * const cRSPModel = await prisma.cRSPModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CRSPModels and only return the `id`
     * const cRSPModelWithIdOnly = await prisma.cRSPModel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CRSPModelCreateManyAndReturnArgs>(args?: SelectSubset<T, CRSPModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CRSPModelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CRSPModel.
     * @param {CRSPModelDeleteArgs} args - Arguments to delete one CRSPModel.
     * @example
     * // Delete one CRSPModel
     * const CRSPModel = await prisma.cRSPModel.delete({
     *   where: {
     *     // ... filter to delete one CRSPModel
     *   }
     * })
     * 
     */
    delete<T extends CRSPModelDeleteArgs>(args: SelectSubset<T, CRSPModelDeleteArgs<ExtArgs>>): Prisma__CRSPModelClient<$Result.GetResult<Prisma.$CRSPModelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CRSPModel.
     * @param {CRSPModelUpdateArgs} args - Arguments to update one CRSPModel.
     * @example
     * // Update one CRSPModel
     * const cRSPModel = await prisma.cRSPModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CRSPModelUpdateArgs>(args: SelectSubset<T, CRSPModelUpdateArgs<ExtArgs>>): Prisma__CRSPModelClient<$Result.GetResult<Prisma.$CRSPModelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CRSPModels.
     * @param {CRSPModelDeleteManyArgs} args - Arguments to filter CRSPModels to delete.
     * @example
     * // Delete a few CRSPModels
     * const { count } = await prisma.cRSPModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CRSPModelDeleteManyArgs>(args?: SelectSubset<T, CRSPModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CRSPModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRSPModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CRSPModels
     * const cRSPModel = await prisma.cRSPModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CRSPModelUpdateManyArgs>(args: SelectSubset<T, CRSPModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CRSPModel.
     * @param {CRSPModelUpsertArgs} args - Arguments to update or create a CRSPModel.
     * @example
     * // Update or create a CRSPModel
     * const cRSPModel = await prisma.cRSPModel.upsert({
     *   create: {
     *     // ... data to create a CRSPModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CRSPModel we want to update
     *   }
     * })
     */
    upsert<T extends CRSPModelUpsertArgs>(args: SelectSubset<T, CRSPModelUpsertArgs<ExtArgs>>): Prisma__CRSPModelClient<$Result.GetResult<Prisma.$CRSPModelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CRSPModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRSPModelCountArgs} args - Arguments to filter CRSPModels to count.
     * @example
     * // Count the number of CRSPModels
     * const count = await prisma.cRSPModel.count({
     *   where: {
     *     // ... the filter for the CRSPModels we want to count
     *   }
     * })
    **/
    count<T extends CRSPModelCountArgs>(
      args?: Subset<T, CRSPModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CRSPModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CRSPModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRSPModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CRSPModelAggregateArgs>(args: Subset<T, CRSPModelAggregateArgs>): Prisma.PrismaPromise<GetCRSPModelAggregateType<T>>

    /**
     * Group by CRSPModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CRSPModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CRSPModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CRSPModelGroupByArgs['orderBy'] }
        : { orderBy?: CRSPModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CRSPModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCRSPModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CRSPModel model
   */
  readonly fields: CRSPModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CRSPModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CRSPModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CRSPModel model
   */ 
  interface CRSPModelFieldRefs {
    readonly id: FieldRef<"CRSPModel", 'String'>
    readonly make: FieldRef<"CRSPModel", 'String'>
    readonly model: FieldRef<"CRSPModel", 'String'>
    readonly bodyType: FieldRef<"CRSPModel", 'String'>
    readonly fuelType: FieldRef<"CRSPModel", 'String'>
    readonly engineCC: FieldRef<"CRSPModel", 'Int'>
    readonly referencePrice: FieldRef<"CRSPModel", 'Float'>
    readonly yearStart: FieldRef<"CRSPModel", 'Int'>
    readonly yearEnd: FieldRef<"CRSPModel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CRSPModel findUnique
   */
  export type CRSPModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRSPModel
     */
    select?: CRSPModelSelect<ExtArgs> | null
    /**
     * Filter, which CRSPModel to fetch.
     */
    where: CRSPModelWhereUniqueInput
  }

  /**
   * CRSPModel findUniqueOrThrow
   */
  export type CRSPModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRSPModel
     */
    select?: CRSPModelSelect<ExtArgs> | null
    /**
     * Filter, which CRSPModel to fetch.
     */
    where: CRSPModelWhereUniqueInput
  }

  /**
   * CRSPModel findFirst
   */
  export type CRSPModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRSPModel
     */
    select?: CRSPModelSelect<ExtArgs> | null
    /**
     * Filter, which CRSPModel to fetch.
     */
    where?: CRSPModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CRSPModels to fetch.
     */
    orderBy?: CRSPModelOrderByWithRelationInput | CRSPModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CRSPModels.
     */
    cursor?: CRSPModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CRSPModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CRSPModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CRSPModels.
     */
    distinct?: CRSPModelScalarFieldEnum | CRSPModelScalarFieldEnum[]
  }

  /**
   * CRSPModel findFirstOrThrow
   */
  export type CRSPModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRSPModel
     */
    select?: CRSPModelSelect<ExtArgs> | null
    /**
     * Filter, which CRSPModel to fetch.
     */
    where?: CRSPModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CRSPModels to fetch.
     */
    orderBy?: CRSPModelOrderByWithRelationInput | CRSPModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CRSPModels.
     */
    cursor?: CRSPModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CRSPModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CRSPModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CRSPModels.
     */
    distinct?: CRSPModelScalarFieldEnum | CRSPModelScalarFieldEnum[]
  }

  /**
   * CRSPModel findMany
   */
  export type CRSPModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRSPModel
     */
    select?: CRSPModelSelect<ExtArgs> | null
    /**
     * Filter, which CRSPModels to fetch.
     */
    where?: CRSPModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CRSPModels to fetch.
     */
    orderBy?: CRSPModelOrderByWithRelationInput | CRSPModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CRSPModels.
     */
    cursor?: CRSPModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CRSPModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CRSPModels.
     */
    skip?: number
    distinct?: CRSPModelScalarFieldEnum | CRSPModelScalarFieldEnum[]
  }

  /**
   * CRSPModel create
   */
  export type CRSPModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRSPModel
     */
    select?: CRSPModelSelect<ExtArgs> | null
    /**
     * The data needed to create a CRSPModel.
     */
    data: XOR<CRSPModelCreateInput, CRSPModelUncheckedCreateInput>
  }

  /**
   * CRSPModel createMany
   */
  export type CRSPModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CRSPModels.
     */
    data: CRSPModelCreateManyInput | CRSPModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CRSPModel createManyAndReturn
   */
  export type CRSPModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRSPModel
     */
    select?: CRSPModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CRSPModels.
     */
    data: CRSPModelCreateManyInput | CRSPModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CRSPModel update
   */
  export type CRSPModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRSPModel
     */
    select?: CRSPModelSelect<ExtArgs> | null
    /**
     * The data needed to update a CRSPModel.
     */
    data: XOR<CRSPModelUpdateInput, CRSPModelUncheckedUpdateInput>
    /**
     * Choose, which CRSPModel to update.
     */
    where: CRSPModelWhereUniqueInput
  }

  /**
   * CRSPModel updateMany
   */
  export type CRSPModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CRSPModels.
     */
    data: XOR<CRSPModelUpdateManyMutationInput, CRSPModelUncheckedUpdateManyInput>
    /**
     * Filter which CRSPModels to update
     */
    where?: CRSPModelWhereInput
  }

  /**
   * CRSPModel upsert
   */
  export type CRSPModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRSPModel
     */
    select?: CRSPModelSelect<ExtArgs> | null
    /**
     * The filter to search for the CRSPModel to update in case it exists.
     */
    where: CRSPModelWhereUniqueInput
    /**
     * In case the CRSPModel found by the `where` argument doesn't exist, create a new CRSPModel with this data.
     */
    create: XOR<CRSPModelCreateInput, CRSPModelUncheckedCreateInput>
    /**
     * In case the CRSPModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CRSPModelUpdateInput, CRSPModelUncheckedUpdateInput>
  }

  /**
   * CRSPModel delete
   */
  export type CRSPModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRSPModel
     */
    select?: CRSPModelSelect<ExtArgs> | null
    /**
     * Filter which CRSPModel to delete.
     */
    where: CRSPModelWhereUniqueInput
  }

  /**
   * CRSPModel deleteMany
   */
  export type CRSPModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CRSPModels to delete
     */
    where?: CRSPModelWhereInput
  }

  /**
   * CRSPModel without action
   */
  export type CRSPModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CRSPModel
     */
    select?: CRSPModelSelect<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    vehicleId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    message: string | null
    vehicleId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    message: number
    vehicleId: number
    status: number
    createdAt: number
    _all: number
  }


  export type LeadMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    vehicleId?: true
    status?: true
    createdAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    vehicleId?: true
    status?: true
    createdAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    message?: true
    vehicleId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    message: string | null
    vehicleId: string | null
    status: string
    createdAt: Date
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    vehicleId?: boolean
    status?: boolean
    createdAt?: boolean
    vehicle?: boolean | Lead$vehicleArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    vehicleId?: boolean
    status?: boolean
    createdAt?: boolean
    vehicle?: boolean | Lead$vehicleArgs<ExtArgs>
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    message?: boolean
    vehicleId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type LeadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | Lead$vehicleArgs<ExtArgs>
  }
  export type LeadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | Lead$vehicleArgs<ExtArgs>
  }

  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      message: string | null
      vehicleId: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends Lead$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, Lead$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lead model
   */ 
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly name: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly phone: FieldRef<"Lead", 'String'>
    readonly message: FieldRef<"Lead", 'String'>
    readonly vehicleId: FieldRef<"Lead", 'String'>
    readonly status: FieldRef<"Lead", 'String'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
  }

  /**
   * Lead.vehicle
   */
  export type Lead$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadInclude<ExtArgs> | null
  }


  /**
   * Model SourcingRequest
   */

  export type AggregateSourcingRequest = {
    _count: SourcingRequestCountAggregateOutputType | null
    _avg: SourcingRequestAvgAggregateOutputType | null
    _sum: SourcingRequestSumAggregateOutputType | null
    _min: SourcingRequestMinAggregateOutputType | null
    _max: SourcingRequestMaxAggregateOutputType | null
  }

  export type SourcingRequestAvgAggregateOutputType = {
    yearMin: number | null
    budgetMax: number | null
  }

  export type SourcingRequestSumAggregateOutputType = {
    yearMin: number | null
    budgetMax: number | null
  }

  export type SourcingRequestMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    category: string | null
    make: string | null
    model: string | null
    fuelType: string | null
    yearMin: number | null
    budgetMax: number | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type SourcingRequestMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    category: string | null
    make: string | null
    model: string | null
    fuelType: string | null
    yearMin: number | null
    budgetMax: number | null
    message: string | null
    status: string | null
    createdAt: Date | null
  }

  export type SourcingRequestCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    category: number
    make: number
    model: number
    fuelType: number
    yearMin: number
    budgetMax: number
    message: number
    status: number
    createdAt: number
    _all: number
  }


  export type SourcingRequestAvgAggregateInputType = {
    yearMin?: true
    budgetMax?: true
  }

  export type SourcingRequestSumAggregateInputType = {
    yearMin?: true
    budgetMax?: true
  }

  export type SourcingRequestMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    category?: true
    make?: true
    model?: true
    fuelType?: true
    yearMin?: true
    budgetMax?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type SourcingRequestMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    category?: true
    make?: true
    model?: true
    fuelType?: true
    yearMin?: true
    budgetMax?: true
    message?: true
    status?: true
    createdAt?: true
  }

  export type SourcingRequestCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    category?: true
    make?: true
    model?: true
    fuelType?: true
    yearMin?: true
    budgetMax?: true
    message?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type SourcingRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourcingRequest to aggregate.
     */
    where?: SourcingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourcingRequests to fetch.
     */
    orderBy?: SourcingRequestOrderByWithRelationInput | SourcingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourcingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourcingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourcingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourcingRequests
    **/
    _count?: true | SourcingRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SourcingRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SourcingRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourcingRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourcingRequestMaxAggregateInputType
  }

  export type GetSourcingRequestAggregateType<T extends SourcingRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateSourcingRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourcingRequest[P]>
      : GetScalarType<T[P], AggregateSourcingRequest[P]>
  }




  export type SourcingRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourcingRequestWhereInput
    orderBy?: SourcingRequestOrderByWithAggregationInput | SourcingRequestOrderByWithAggregationInput[]
    by: SourcingRequestScalarFieldEnum[] | SourcingRequestScalarFieldEnum
    having?: SourcingRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourcingRequestCountAggregateInputType | true
    _avg?: SourcingRequestAvgAggregateInputType
    _sum?: SourcingRequestSumAggregateInputType
    _min?: SourcingRequestMinAggregateInputType
    _max?: SourcingRequestMaxAggregateInputType
  }

  export type SourcingRequestGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    category: string
    make: string
    model: string
    fuelType: string | null
    yearMin: number | null
    budgetMax: number | null
    message: string | null
    status: string
    createdAt: Date
    _count: SourcingRequestCountAggregateOutputType | null
    _avg: SourcingRequestAvgAggregateOutputType | null
    _sum: SourcingRequestSumAggregateOutputType | null
    _min: SourcingRequestMinAggregateOutputType | null
    _max: SourcingRequestMaxAggregateOutputType | null
  }

  type GetSourcingRequestGroupByPayload<T extends SourcingRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourcingRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourcingRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourcingRequestGroupByOutputType[P]>
            : GetScalarType<T[P], SourcingRequestGroupByOutputType[P]>
        }
      >
    >


  export type SourcingRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    category?: boolean
    make?: boolean
    model?: boolean
    fuelType?: boolean
    yearMin?: boolean
    budgetMax?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sourcingRequest"]>

  export type SourcingRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    category?: boolean
    make?: boolean
    model?: boolean
    fuelType?: boolean
    yearMin?: boolean
    budgetMax?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["sourcingRequest"]>

  export type SourcingRequestSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    category?: boolean
    make?: boolean
    model?: boolean
    fuelType?: boolean
    yearMin?: boolean
    budgetMax?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
  }


  export type $SourcingRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourcingRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      category: string
      make: string
      model: string
      fuelType: string | null
      yearMin: number | null
      budgetMax: number | null
      message: string | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["sourcingRequest"]>
    composites: {}
  }

  type SourcingRequestGetPayload<S extends boolean | null | undefined | SourcingRequestDefaultArgs> = $Result.GetResult<Prisma.$SourcingRequestPayload, S>

  type SourcingRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SourcingRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SourcingRequestCountAggregateInputType | true
    }

  export interface SourcingRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourcingRequest'], meta: { name: 'SourcingRequest' } }
    /**
     * Find zero or one SourcingRequest that matches the filter.
     * @param {SourcingRequestFindUniqueArgs} args - Arguments to find a SourcingRequest
     * @example
     * // Get one SourcingRequest
     * const sourcingRequest = await prisma.sourcingRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourcingRequestFindUniqueArgs>(args: SelectSubset<T, SourcingRequestFindUniqueArgs<ExtArgs>>): Prisma__SourcingRequestClient<$Result.GetResult<Prisma.$SourcingRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SourcingRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SourcingRequestFindUniqueOrThrowArgs} args - Arguments to find a SourcingRequest
     * @example
     * // Get one SourcingRequest
     * const sourcingRequest = await prisma.sourcingRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourcingRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, SourcingRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourcingRequestClient<$Result.GetResult<Prisma.$SourcingRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SourcingRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingRequestFindFirstArgs} args - Arguments to find a SourcingRequest
     * @example
     * // Get one SourcingRequest
     * const sourcingRequest = await prisma.sourcingRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourcingRequestFindFirstArgs>(args?: SelectSubset<T, SourcingRequestFindFirstArgs<ExtArgs>>): Prisma__SourcingRequestClient<$Result.GetResult<Prisma.$SourcingRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SourcingRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingRequestFindFirstOrThrowArgs} args - Arguments to find a SourcingRequest
     * @example
     * // Get one SourcingRequest
     * const sourcingRequest = await prisma.sourcingRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourcingRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, SourcingRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourcingRequestClient<$Result.GetResult<Prisma.$SourcingRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SourcingRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourcingRequests
     * const sourcingRequests = await prisma.sourcingRequest.findMany()
     * 
     * // Get first 10 SourcingRequests
     * const sourcingRequests = await prisma.sourcingRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourcingRequestWithIdOnly = await prisma.sourcingRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourcingRequestFindManyArgs>(args?: SelectSubset<T, SourcingRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcingRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SourcingRequest.
     * @param {SourcingRequestCreateArgs} args - Arguments to create a SourcingRequest.
     * @example
     * // Create one SourcingRequest
     * const SourcingRequest = await prisma.sourcingRequest.create({
     *   data: {
     *     // ... data to create a SourcingRequest
     *   }
     * })
     * 
     */
    create<T extends SourcingRequestCreateArgs>(args: SelectSubset<T, SourcingRequestCreateArgs<ExtArgs>>): Prisma__SourcingRequestClient<$Result.GetResult<Prisma.$SourcingRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SourcingRequests.
     * @param {SourcingRequestCreateManyArgs} args - Arguments to create many SourcingRequests.
     * @example
     * // Create many SourcingRequests
     * const sourcingRequest = await prisma.sourcingRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourcingRequestCreateManyArgs>(args?: SelectSubset<T, SourcingRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourcingRequests and returns the data saved in the database.
     * @param {SourcingRequestCreateManyAndReturnArgs} args - Arguments to create many SourcingRequests.
     * @example
     * // Create many SourcingRequests
     * const sourcingRequest = await prisma.sourcingRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SourcingRequests and only return the `id`
     * const sourcingRequestWithIdOnly = await prisma.sourcingRequest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourcingRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, SourcingRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcingRequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SourcingRequest.
     * @param {SourcingRequestDeleteArgs} args - Arguments to delete one SourcingRequest.
     * @example
     * // Delete one SourcingRequest
     * const SourcingRequest = await prisma.sourcingRequest.delete({
     *   where: {
     *     // ... filter to delete one SourcingRequest
     *   }
     * })
     * 
     */
    delete<T extends SourcingRequestDeleteArgs>(args: SelectSubset<T, SourcingRequestDeleteArgs<ExtArgs>>): Prisma__SourcingRequestClient<$Result.GetResult<Prisma.$SourcingRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SourcingRequest.
     * @param {SourcingRequestUpdateArgs} args - Arguments to update one SourcingRequest.
     * @example
     * // Update one SourcingRequest
     * const sourcingRequest = await prisma.sourcingRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourcingRequestUpdateArgs>(args: SelectSubset<T, SourcingRequestUpdateArgs<ExtArgs>>): Prisma__SourcingRequestClient<$Result.GetResult<Prisma.$SourcingRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SourcingRequests.
     * @param {SourcingRequestDeleteManyArgs} args - Arguments to filter SourcingRequests to delete.
     * @example
     * // Delete a few SourcingRequests
     * const { count } = await prisma.sourcingRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourcingRequestDeleteManyArgs>(args?: SelectSubset<T, SourcingRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourcingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourcingRequests
     * const sourcingRequest = await prisma.sourcingRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourcingRequestUpdateManyArgs>(args: SelectSubset<T, SourcingRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SourcingRequest.
     * @param {SourcingRequestUpsertArgs} args - Arguments to update or create a SourcingRequest.
     * @example
     * // Update or create a SourcingRequest
     * const sourcingRequest = await prisma.sourcingRequest.upsert({
     *   create: {
     *     // ... data to create a SourcingRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourcingRequest we want to update
     *   }
     * })
     */
    upsert<T extends SourcingRequestUpsertArgs>(args: SelectSubset<T, SourcingRequestUpsertArgs<ExtArgs>>): Prisma__SourcingRequestClient<$Result.GetResult<Prisma.$SourcingRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SourcingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingRequestCountArgs} args - Arguments to filter SourcingRequests to count.
     * @example
     * // Count the number of SourcingRequests
     * const count = await prisma.sourcingRequest.count({
     *   where: {
     *     // ... the filter for the SourcingRequests we want to count
     *   }
     * })
    **/
    count<T extends SourcingRequestCountArgs>(
      args?: Subset<T, SourcingRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourcingRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourcingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourcingRequestAggregateArgs>(args: Subset<T, SourcingRequestAggregateArgs>): Prisma.PrismaPromise<GetSourcingRequestAggregateType<T>>

    /**
     * Group by SourcingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourcingRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SourcingRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourcingRequestGroupByArgs['orderBy'] }
        : { orderBy?: SourcingRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SourcingRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourcingRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourcingRequest model
   */
  readonly fields: SourcingRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourcingRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourcingRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SourcingRequest model
   */ 
  interface SourcingRequestFieldRefs {
    readonly id: FieldRef<"SourcingRequest", 'String'>
    readonly name: FieldRef<"SourcingRequest", 'String'>
    readonly email: FieldRef<"SourcingRequest", 'String'>
    readonly phone: FieldRef<"SourcingRequest", 'String'>
    readonly category: FieldRef<"SourcingRequest", 'String'>
    readonly make: FieldRef<"SourcingRequest", 'String'>
    readonly model: FieldRef<"SourcingRequest", 'String'>
    readonly fuelType: FieldRef<"SourcingRequest", 'String'>
    readonly yearMin: FieldRef<"SourcingRequest", 'Int'>
    readonly budgetMax: FieldRef<"SourcingRequest", 'Float'>
    readonly message: FieldRef<"SourcingRequest", 'String'>
    readonly status: FieldRef<"SourcingRequest", 'String'>
    readonly createdAt: FieldRef<"SourcingRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SourcingRequest findUnique
   */
  export type SourcingRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingRequest
     */
    select?: SourcingRequestSelect<ExtArgs> | null
    /**
     * Filter, which SourcingRequest to fetch.
     */
    where: SourcingRequestWhereUniqueInput
  }

  /**
   * SourcingRequest findUniqueOrThrow
   */
  export type SourcingRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingRequest
     */
    select?: SourcingRequestSelect<ExtArgs> | null
    /**
     * Filter, which SourcingRequest to fetch.
     */
    where: SourcingRequestWhereUniqueInput
  }

  /**
   * SourcingRequest findFirst
   */
  export type SourcingRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingRequest
     */
    select?: SourcingRequestSelect<ExtArgs> | null
    /**
     * Filter, which SourcingRequest to fetch.
     */
    where?: SourcingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourcingRequests to fetch.
     */
    orderBy?: SourcingRequestOrderByWithRelationInput | SourcingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourcingRequests.
     */
    cursor?: SourcingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourcingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourcingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourcingRequests.
     */
    distinct?: SourcingRequestScalarFieldEnum | SourcingRequestScalarFieldEnum[]
  }

  /**
   * SourcingRequest findFirstOrThrow
   */
  export type SourcingRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingRequest
     */
    select?: SourcingRequestSelect<ExtArgs> | null
    /**
     * Filter, which SourcingRequest to fetch.
     */
    where?: SourcingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourcingRequests to fetch.
     */
    orderBy?: SourcingRequestOrderByWithRelationInput | SourcingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourcingRequests.
     */
    cursor?: SourcingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourcingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourcingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourcingRequests.
     */
    distinct?: SourcingRequestScalarFieldEnum | SourcingRequestScalarFieldEnum[]
  }

  /**
   * SourcingRequest findMany
   */
  export type SourcingRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingRequest
     */
    select?: SourcingRequestSelect<ExtArgs> | null
    /**
     * Filter, which SourcingRequests to fetch.
     */
    where?: SourcingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourcingRequests to fetch.
     */
    orderBy?: SourcingRequestOrderByWithRelationInput | SourcingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourcingRequests.
     */
    cursor?: SourcingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourcingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourcingRequests.
     */
    skip?: number
    distinct?: SourcingRequestScalarFieldEnum | SourcingRequestScalarFieldEnum[]
  }

  /**
   * SourcingRequest create
   */
  export type SourcingRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingRequest
     */
    select?: SourcingRequestSelect<ExtArgs> | null
    /**
     * The data needed to create a SourcingRequest.
     */
    data: XOR<SourcingRequestCreateInput, SourcingRequestUncheckedCreateInput>
  }

  /**
   * SourcingRequest createMany
   */
  export type SourcingRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourcingRequests.
     */
    data: SourcingRequestCreateManyInput | SourcingRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourcingRequest createManyAndReturn
   */
  export type SourcingRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingRequest
     */
    select?: SourcingRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SourcingRequests.
     */
    data: SourcingRequestCreateManyInput | SourcingRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourcingRequest update
   */
  export type SourcingRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingRequest
     */
    select?: SourcingRequestSelect<ExtArgs> | null
    /**
     * The data needed to update a SourcingRequest.
     */
    data: XOR<SourcingRequestUpdateInput, SourcingRequestUncheckedUpdateInput>
    /**
     * Choose, which SourcingRequest to update.
     */
    where: SourcingRequestWhereUniqueInput
  }

  /**
   * SourcingRequest updateMany
   */
  export type SourcingRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourcingRequests.
     */
    data: XOR<SourcingRequestUpdateManyMutationInput, SourcingRequestUncheckedUpdateManyInput>
    /**
     * Filter which SourcingRequests to update
     */
    where?: SourcingRequestWhereInput
  }

  /**
   * SourcingRequest upsert
   */
  export type SourcingRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingRequest
     */
    select?: SourcingRequestSelect<ExtArgs> | null
    /**
     * The filter to search for the SourcingRequest to update in case it exists.
     */
    where: SourcingRequestWhereUniqueInput
    /**
     * In case the SourcingRequest found by the `where` argument doesn't exist, create a new SourcingRequest with this data.
     */
    create: XOR<SourcingRequestCreateInput, SourcingRequestUncheckedCreateInput>
    /**
     * In case the SourcingRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourcingRequestUpdateInput, SourcingRequestUncheckedUpdateInput>
  }

  /**
   * SourcingRequest delete
   */
  export type SourcingRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingRequest
     */
    select?: SourcingRequestSelect<ExtArgs> | null
    /**
     * Filter which SourcingRequest to delete.
     */
    where: SourcingRequestWhereUniqueInput
  }

  /**
   * SourcingRequest deleteMany
   */
  export type SourcingRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourcingRequests to delete
     */
    where?: SourcingRequestWhereInput
  }

  /**
   * SourcingRequest without action
   */
  export type SourcingRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourcingRequest
     */
    select?: SourcingRequestSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    make: 'make',
    model: 'model',
    year: 'year',
    price: 'price',
    fuelType: 'fuelType',
    engineCC: 'engineCC',
    transmission: 'transmission',
    bodyType: 'bodyType',
    mileage: 'mileage',
    color: 'color',
    driveType: 'driveType',
    vin: 'vin',
    description: 'description',
    features: 'features',
    category: 'category',
    status: 'status',
    condition: 'condition',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const VehicleImageScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    url: 'url',
    isPrimary: 'isPrimary',
    position: 'position'
  };

  export type VehicleImageScalarFieldEnum = (typeof VehicleImageScalarFieldEnum)[keyof typeof VehicleImageScalarFieldEnum]


  export const CRSPModelScalarFieldEnum: {
    id: 'id',
    make: 'make',
    model: 'model',
    bodyType: 'bodyType',
    fuelType: 'fuelType',
    engineCC: 'engineCC',
    referencePrice: 'referencePrice',
    yearStart: 'yearStart',
    yearEnd: 'yearEnd'
  };

  export type CRSPModelScalarFieldEnum = (typeof CRSPModelScalarFieldEnum)[keyof typeof CRSPModelScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message',
    vehicleId: 'vehicleId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const SourcingRequestScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    category: 'category',
    make: 'make',
    model: 'model',
    fuelType: 'fuelType',
    yearMin: 'yearMin',
    budgetMax: 'budgetMax',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type SourcingRequestScalarFieldEnum = (typeof SourcingRequestScalarFieldEnum)[keyof typeof SourcingRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    make?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    price?: FloatFilter<"Vehicle"> | number
    fuelType?: StringFilter<"Vehicle"> | string
    engineCC?: IntFilter<"Vehicle"> | number
    transmission?: StringFilter<"Vehicle"> | string
    bodyType?: StringFilter<"Vehicle"> | string
    mileage?: IntFilter<"Vehicle"> | number
    color?: StringNullableFilter<"Vehicle"> | string | null
    driveType?: StringNullableFilter<"Vehicle"> | string | null
    vin?: StringNullableFilter<"Vehicle"> | string | null
    description?: StringNullableFilter<"Vehicle"> | string | null
    features?: StringNullableListFilter<"Vehicle">
    category?: StringFilter<"Vehicle"> | string
    status?: StringFilter<"Vehicle"> | string
    condition?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    images?: VehicleImageListRelationFilter
    leads?: LeadListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    fuelType?: SortOrder
    engineCC?: SortOrder
    transmission?: SortOrder
    bodyType?: SortOrder
    mileage?: SortOrder
    color?: SortOrderInput | SortOrder
    driveType?: SortOrderInput | SortOrder
    vin?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrder
    category?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    images?: VehicleImageOrderByRelationAggregateInput
    leads?: LeadOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vin?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    make?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    year?: IntFilter<"Vehicle"> | number
    price?: FloatFilter<"Vehicle"> | number
    fuelType?: StringFilter<"Vehicle"> | string
    engineCC?: IntFilter<"Vehicle"> | number
    transmission?: StringFilter<"Vehicle"> | string
    bodyType?: StringFilter<"Vehicle"> | string
    mileage?: IntFilter<"Vehicle"> | number
    color?: StringNullableFilter<"Vehicle"> | string | null
    driveType?: StringNullableFilter<"Vehicle"> | string | null
    description?: StringNullableFilter<"Vehicle"> | string | null
    features?: StringNullableListFilter<"Vehicle">
    category?: StringFilter<"Vehicle"> | string
    status?: StringFilter<"Vehicle"> | string
    condition?: StringFilter<"Vehicle"> | string
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    images?: VehicleImageListRelationFilter
    leads?: LeadListRelationFilter
  }, "id" | "vin">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    fuelType?: SortOrder
    engineCC?: SortOrder
    transmission?: SortOrder
    bodyType?: SortOrder
    mileage?: SortOrder
    color?: SortOrderInput | SortOrder
    driveType?: SortOrderInput | SortOrder
    vin?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    features?: SortOrder
    category?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    make?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    year?: IntWithAggregatesFilter<"Vehicle"> | number
    price?: FloatWithAggregatesFilter<"Vehicle"> | number
    fuelType?: StringWithAggregatesFilter<"Vehicle"> | string
    engineCC?: IntWithAggregatesFilter<"Vehicle"> | number
    transmission?: StringWithAggregatesFilter<"Vehicle"> | string
    bodyType?: StringWithAggregatesFilter<"Vehicle"> | string
    mileage?: IntWithAggregatesFilter<"Vehicle"> | number
    color?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    driveType?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    vin?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    description?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    features?: StringNullableListFilter<"Vehicle">
    category?: StringWithAggregatesFilter<"Vehicle"> | string
    status?: StringWithAggregatesFilter<"Vehicle"> | string
    condition?: StringWithAggregatesFilter<"Vehicle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type VehicleImageWhereInput = {
    AND?: VehicleImageWhereInput | VehicleImageWhereInput[]
    OR?: VehicleImageWhereInput[]
    NOT?: VehicleImageWhereInput | VehicleImageWhereInput[]
    id?: StringFilter<"VehicleImage"> | string
    vehicleId?: StringFilter<"VehicleImage"> | string
    url?: StringFilter<"VehicleImage"> | string
    isPrimary?: BoolFilter<"VehicleImage"> | boolean
    position?: IntFilter<"VehicleImage"> | number
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
  }

  export type VehicleImageOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    position?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type VehicleImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VehicleImageWhereInput | VehicleImageWhereInput[]
    OR?: VehicleImageWhereInput[]
    NOT?: VehicleImageWhereInput | VehicleImageWhereInput[]
    vehicleId?: StringFilter<"VehicleImage"> | string
    url?: StringFilter<"VehicleImage"> | string
    isPrimary?: BoolFilter<"VehicleImage"> | boolean
    position?: IntFilter<"VehicleImage"> | number
    vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
  }, "id">

  export type VehicleImageOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    position?: SortOrder
    _count?: VehicleImageCountOrderByAggregateInput
    _avg?: VehicleImageAvgOrderByAggregateInput
    _max?: VehicleImageMaxOrderByAggregateInput
    _min?: VehicleImageMinOrderByAggregateInput
    _sum?: VehicleImageSumOrderByAggregateInput
  }

  export type VehicleImageScalarWhereWithAggregatesInput = {
    AND?: VehicleImageScalarWhereWithAggregatesInput | VehicleImageScalarWhereWithAggregatesInput[]
    OR?: VehicleImageScalarWhereWithAggregatesInput[]
    NOT?: VehicleImageScalarWhereWithAggregatesInput | VehicleImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VehicleImage"> | string
    vehicleId?: StringWithAggregatesFilter<"VehicleImage"> | string
    url?: StringWithAggregatesFilter<"VehicleImage"> | string
    isPrimary?: BoolWithAggregatesFilter<"VehicleImage"> | boolean
    position?: IntWithAggregatesFilter<"VehicleImage"> | number
  }

  export type CRSPModelWhereInput = {
    AND?: CRSPModelWhereInput | CRSPModelWhereInput[]
    OR?: CRSPModelWhereInput[]
    NOT?: CRSPModelWhereInput | CRSPModelWhereInput[]
    id?: StringFilter<"CRSPModel"> | string
    make?: StringFilter<"CRSPModel"> | string
    model?: StringFilter<"CRSPModel"> | string
    bodyType?: StringNullableFilter<"CRSPModel"> | string | null
    fuelType?: StringNullableFilter<"CRSPModel"> | string | null
    engineCC?: IntNullableFilter<"CRSPModel"> | number | null
    referencePrice?: FloatNullableFilter<"CRSPModel"> | number | null
    yearStart?: IntNullableFilter<"CRSPModel"> | number | null
    yearEnd?: IntNullableFilter<"CRSPModel"> | number | null
  }

  export type CRSPModelOrderByWithRelationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    bodyType?: SortOrderInput | SortOrder
    fuelType?: SortOrderInput | SortOrder
    engineCC?: SortOrderInput | SortOrder
    referencePrice?: SortOrderInput | SortOrder
    yearStart?: SortOrderInput | SortOrder
    yearEnd?: SortOrderInput | SortOrder
  }

  export type CRSPModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    make_model?: CRSPModelMakeModelCompoundUniqueInput
    AND?: CRSPModelWhereInput | CRSPModelWhereInput[]
    OR?: CRSPModelWhereInput[]
    NOT?: CRSPModelWhereInput | CRSPModelWhereInput[]
    make?: StringFilter<"CRSPModel"> | string
    model?: StringFilter<"CRSPModel"> | string
    bodyType?: StringNullableFilter<"CRSPModel"> | string | null
    fuelType?: StringNullableFilter<"CRSPModel"> | string | null
    engineCC?: IntNullableFilter<"CRSPModel"> | number | null
    referencePrice?: FloatNullableFilter<"CRSPModel"> | number | null
    yearStart?: IntNullableFilter<"CRSPModel"> | number | null
    yearEnd?: IntNullableFilter<"CRSPModel"> | number | null
  }, "id" | "make_model">

  export type CRSPModelOrderByWithAggregationInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    bodyType?: SortOrderInput | SortOrder
    fuelType?: SortOrderInput | SortOrder
    engineCC?: SortOrderInput | SortOrder
    referencePrice?: SortOrderInput | SortOrder
    yearStart?: SortOrderInput | SortOrder
    yearEnd?: SortOrderInput | SortOrder
    _count?: CRSPModelCountOrderByAggregateInput
    _avg?: CRSPModelAvgOrderByAggregateInput
    _max?: CRSPModelMaxOrderByAggregateInput
    _min?: CRSPModelMinOrderByAggregateInput
    _sum?: CRSPModelSumOrderByAggregateInput
  }

  export type CRSPModelScalarWhereWithAggregatesInput = {
    AND?: CRSPModelScalarWhereWithAggregatesInput | CRSPModelScalarWhereWithAggregatesInput[]
    OR?: CRSPModelScalarWhereWithAggregatesInput[]
    NOT?: CRSPModelScalarWhereWithAggregatesInput | CRSPModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CRSPModel"> | string
    make?: StringWithAggregatesFilter<"CRSPModel"> | string
    model?: StringWithAggregatesFilter<"CRSPModel"> | string
    bodyType?: StringNullableWithAggregatesFilter<"CRSPModel"> | string | null
    fuelType?: StringNullableWithAggregatesFilter<"CRSPModel"> | string | null
    engineCC?: IntNullableWithAggregatesFilter<"CRSPModel"> | number | null
    referencePrice?: FloatNullableWithAggregatesFilter<"CRSPModel"> | number | null
    yearStart?: IntNullableWithAggregatesFilter<"CRSPModel"> | number | null
    yearEnd?: IntNullableWithAggregatesFilter<"CRSPModel"> | number | null
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    name?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    phone?: StringFilter<"Lead"> | string
    message?: StringNullableFilter<"Lead"> | string | null
    vehicleId?: StringNullableFilter<"Lead"> | string | null
    status?: StringFilter<"Lead"> | string
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    vehicle?: XOR<VehicleNullableRelationFilter, VehicleWhereInput> | null
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrderInput | SortOrder
    vehicleId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    name?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    phone?: StringFilter<"Lead"> | string
    message?: StringNullableFilter<"Lead"> | string | null
    vehicleId?: StringNullableFilter<"Lead"> | string | null
    status?: StringFilter<"Lead"> | string
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    vehicle?: XOR<VehicleNullableRelationFilter, VehicleWhereInput> | null
  }, "id">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrderInput | SortOrder
    vehicleId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    name?: StringWithAggregatesFilter<"Lead"> | string
    email?: StringWithAggregatesFilter<"Lead"> | string
    phone?: StringWithAggregatesFilter<"Lead"> | string
    message?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    vehicleId?: StringNullableWithAggregatesFilter<"Lead"> | string | null
    status?: StringWithAggregatesFilter<"Lead"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type SourcingRequestWhereInput = {
    AND?: SourcingRequestWhereInput | SourcingRequestWhereInput[]
    OR?: SourcingRequestWhereInput[]
    NOT?: SourcingRequestWhereInput | SourcingRequestWhereInput[]
    id?: StringFilter<"SourcingRequest"> | string
    name?: StringFilter<"SourcingRequest"> | string
    email?: StringFilter<"SourcingRequest"> | string
    phone?: StringFilter<"SourcingRequest"> | string
    category?: StringFilter<"SourcingRequest"> | string
    make?: StringFilter<"SourcingRequest"> | string
    model?: StringFilter<"SourcingRequest"> | string
    fuelType?: StringNullableFilter<"SourcingRequest"> | string | null
    yearMin?: IntNullableFilter<"SourcingRequest"> | number | null
    budgetMax?: FloatNullableFilter<"SourcingRequest"> | number | null
    message?: StringNullableFilter<"SourcingRequest"> | string | null
    status?: StringFilter<"SourcingRequest"> | string
    createdAt?: DateTimeFilter<"SourcingRequest"> | Date | string
  }

  export type SourcingRequestOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    category?: SortOrder
    make?: SortOrder
    model?: SortOrder
    fuelType?: SortOrderInput | SortOrder
    yearMin?: SortOrderInput | SortOrder
    budgetMax?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SourcingRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SourcingRequestWhereInput | SourcingRequestWhereInput[]
    OR?: SourcingRequestWhereInput[]
    NOT?: SourcingRequestWhereInput | SourcingRequestWhereInput[]
    name?: StringFilter<"SourcingRequest"> | string
    email?: StringFilter<"SourcingRequest"> | string
    phone?: StringFilter<"SourcingRequest"> | string
    category?: StringFilter<"SourcingRequest"> | string
    make?: StringFilter<"SourcingRequest"> | string
    model?: StringFilter<"SourcingRequest"> | string
    fuelType?: StringNullableFilter<"SourcingRequest"> | string | null
    yearMin?: IntNullableFilter<"SourcingRequest"> | number | null
    budgetMax?: FloatNullableFilter<"SourcingRequest"> | number | null
    message?: StringNullableFilter<"SourcingRequest"> | string | null
    status?: StringFilter<"SourcingRequest"> | string
    createdAt?: DateTimeFilter<"SourcingRequest"> | Date | string
  }, "id">

  export type SourcingRequestOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    category?: SortOrder
    make?: SortOrder
    model?: SortOrder
    fuelType?: SortOrderInput | SortOrder
    yearMin?: SortOrderInput | SortOrder
    budgetMax?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: SourcingRequestCountOrderByAggregateInput
    _avg?: SourcingRequestAvgOrderByAggregateInput
    _max?: SourcingRequestMaxOrderByAggregateInput
    _min?: SourcingRequestMinOrderByAggregateInput
    _sum?: SourcingRequestSumOrderByAggregateInput
  }

  export type SourcingRequestScalarWhereWithAggregatesInput = {
    AND?: SourcingRequestScalarWhereWithAggregatesInput | SourcingRequestScalarWhereWithAggregatesInput[]
    OR?: SourcingRequestScalarWhereWithAggregatesInput[]
    NOT?: SourcingRequestScalarWhereWithAggregatesInput | SourcingRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SourcingRequest"> | string
    name?: StringWithAggregatesFilter<"SourcingRequest"> | string
    email?: StringWithAggregatesFilter<"SourcingRequest"> | string
    phone?: StringWithAggregatesFilter<"SourcingRequest"> | string
    category?: StringWithAggregatesFilter<"SourcingRequest"> | string
    make?: StringWithAggregatesFilter<"SourcingRequest"> | string
    model?: StringWithAggregatesFilter<"SourcingRequest"> | string
    fuelType?: StringNullableWithAggregatesFilter<"SourcingRequest"> | string | null
    yearMin?: IntNullableWithAggregatesFilter<"SourcingRequest"> | number | null
    budgetMax?: FloatNullableWithAggregatesFilter<"SourcingRequest"> | number | null
    message?: StringNullableWithAggregatesFilter<"SourcingRequest"> | string | null
    status?: StringWithAggregatesFilter<"SourcingRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SourcingRequest"> | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    make: string
    model: string
    year: number
    price: number
    fuelType: string
    engineCC: number
    transmission: string
    bodyType: string
    mileage: number
    color?: string | null
    driveType?: string | null
    vin?: string | null
    description?: string | null
    features?: VehicleCreatefeaturesInput | string[]
    category?: string
    status?: string
    condition?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VehicleImageCreateNestedManyWithoutVehicleInput
    leads?: LeadCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    make: string
    model: string
    year: number
    price: number
    fuelType: string
    engineCC: number
    transmission: string
    bodyType: string
    mileage: number
    color?: string | null
    driveType?: string | null
    vin?: string | null
    description?: string | null
    features?: VehicleCreatefeaturesInput | string[]
    category?: string
    status?: string
    condition?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VehicleImageUncheckedCreateNestedManyWithoutVehicleInput
    leads?: LeadUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    engineCC?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    driveType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: VehicleUpdatefeaturesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VehicleImageUpdateManyWithoutVehicleNestedInput
    leads?: LeadUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    engineCC?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    driveType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: VehicleUpdatefeaturesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VehicleImageUncheckedUpdateManyWithoutVehicleNestedInput
    leads?: LeadUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    make: string
    model: string
    year: number
    price: number
    fuelType: string
    engineCC: number
    transmission: string
    bodyType: string
    mileage: number
    color?: string | null
    driveType?: string | null
    vin?: string | null
    description?: string | null
    features?: VehicleCreatefeaturesInput | string[]
    category?: string
    status?: string
    condition?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    engineCC?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    driveType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: VehicleUpdatefeaturesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    engineCC?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    driveType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: VehicleUpdatefeaturesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleImageCreateInput = {
    id?: string
    url: string
    isPrimary?: boolean
    position?: number
    vehicle: VehicleCreateNestedOneWithoutImagesInput
  }

  export type VehicleImageUncheckedCreateInput = {
    id?: string
    vehicleId: string
    url: string
    isPrimary?: boolean
    position?: number
  }

  export type VehicleImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
    vehicle?: VehicleUpdateOneRequiredWithoutImagesNestedInput
  }

  export type VehicleImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleImageCreateManyInput = {
    id?: string
    vehicleId: string
    url: string
    isPrimary?: boolean
    position?: number
  }

  export type VehicleImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
  }

  export type CRSPModelCreateInput = {
    id?: string
    make: string
    model: string
    bodyType?: string | null
    fuelType?: string | null
    engineCC?: number | null
    referencePrice?: number | null
    yearStart?: number | null
    yearEnd?: number | null
  }

  export type CRSPModelUncheckedCreateInput = {
    id?: string
    make: string
    model: string
    bodyType?: string | null
    fuelType?: string | null
    engineCC?: number | null
    referencePrice?: number | null
    yearStart?: number | null
    yearEnd?: number | null
  }

  export type CRSPModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    bodyType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    engineCC?: NullableIntFieldUpdateOperationsInput | number | null
    referencePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    yearStart?: NullableIntFieldUpdateOperationsInput | number | null
    yearEnd?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CRSPModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    bodyType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    engineCC?: NullableIntFieldUpdateOperationsInput | number | null
    referencePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    yearStart?: NullableIntFieldUpdateOperationsInput | number | null
    yearEnd?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CRSPModelCreateManyInput = {
    id?: string
    make: string
    model: string
    bodyType?: string | null
    fuelType?: string | null
    engineCC?: number | null
    referencePrice?: number | null
    yearStart?: number | null
    yearEnd?: number | null
  }

  export type CRSPModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    bodyType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    engineCC?: NullableIntFieldUpdateOperationsInput | number | null
    referencePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    yearStart?: NullableIntFieldUpdateOperationsInput | number | null
    yearEnd?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CRSPModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    bodyType?: NullableStringFieldUpdateOperationsInput | string | null
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    engineCC?: NullableIntFieldUpdateOperationsInput | number | null
    referencePrice?: NullableFloatFieldUpdateOperationsInput | number | null
    yearStart?: NullableIntFieldUpdateOperationsInput | number | null
    yearEnd?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeadCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    message?: string | null
    status?: string
    createdAt?: Date | string
    vehicle?: VehicleCreateNestedOneWithoutLeadsInput
  }

  export type LeadUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    message?: string | null
    vehicleId?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneWithoutLeadsNestedInput
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    message?: string | null
    vehicleId?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourcingRequestCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    category?: string
    make: string
    model: string
    fuelType?: string | null
    yearMin?: number | null
    budgetMax?: number | null
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type SourcingRequestUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    category?: string
    make: string
    model: string
    fuelType?: string | null
    yearMin?: number | null
    budgetMax?: number | null
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type SourcingRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    yearMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourcingRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    yearMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourcingRequestCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    category?: string
    make: string
    model: string
    fuelType?: string | null
    yearMin?: number | null
    budgetMax?: number | null
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type SourcingRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    yearMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SourcingRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    fuelType?: NullableStringFieldUpdateOperationsInput | string | null
    yearMin?: NullableIntFieldUpdateOperationsInput | number | null
    budgetMax?: NullableFloatFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VehicleImageListRelationFilter = {
    every?: VehicleImageWhereInput
    some?: VehicleImageWhereInput
    none?: VehicleImageWhereInput
  }

  export type LeadListRelationFilter = {
    every?: LeadWhereInput
    some?: LeadWhereInput
    none?: LeadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehicleImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    fuelType?: SortOrder
    engineCC?: SortOrder
    transmission?: SortOrder
    bodyType?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    driveType?: SortOrder
    vin?: SortOrder
    description?: SortOrder
    features?: SortOrder
    category?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    year?: SortOrder
    price?: SortOrder
    engineCC?: SortOrder
    mileage?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    fuelType?: SortOrder
    engineCC?: SortOrder
    transmission?: SortOrder
    bodyType?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    driveType?: SortOrder
    vin?: SortOrder
    description?: SortOrder
    category?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    year?: SortOrder
    price?: SortOrder
    fuelType?: SortOrder
    engineCC?: SortOrder
    transmission?: SortOrder
    bodyType?: SortOrder
    mileage?: SortOrder
    color?: SortOrder
    driveType?: SortOrder
    vin?: SortOrder
    description?: SortOrder
    category?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    year?: SortOrder
    price?: SortOrder
    engineCC?: SortOrder
    mileage?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VehicleRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type VehicleImageCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    position?: SortOrder
  }

  export type VehicleImageAvgOrderByAggregateInput = {
    position?: SortOrder
  }

  export type VehicleImageMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    position?: SortOrder
  }

  export type VehicleImageMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    position?: SortOrder
  }

  export type VehicleImageSumOrderByAggregateInput = {
    position?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CRSPModelMakeModelCompoundUniqueInput = {
    make: string
    model: string
  }

  export type CRSPModelCountOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    bodyType?: SortOrder
    fuelType?: SortOrder
    engineCC?: SortOrder
    referencePrice?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
  }

  export type CRSPModelAvgOrderByAggregateInput = {
    engineCC?: SortOrder
    referencePrice?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
  }

  export type CRSPModelMaxOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    bodyType?: SortOrder
    fuelType?: SortOrder
    engineCC?: SortOrder
    referencePrice?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
  }

  export type CRSPModelMinOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
    model?: SortOrder
    bodyType?: SortOrder
    fuelType?: SortOrder
    engineCC?: SortOrder
    referencePrice?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
  }

  export type CRSPModelSumOrderByAggregateInput = {
    engineCC?: SortOrder
    referencePrice?: SortOrder
    yearStart?: SortOrder
    yearEnd?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type VehicleNullableRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    vehicleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    vehicleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    message?: SortOrder
    vehicleId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SourcingRequestCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    category?: SortOrder
    make?: SortOrder
    model?: SortOrder
    fuelType?: SortOrder
    yearMin?: SortOrder
    budgetMax?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SourcingRequestAvgOrderByAggregateInput = {
    yearMin?: SortOrder
    budgetMax?: SortOrder
  }

  export type SourcingRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    category?: SortOrder
    make?: SortOrder
    model?: SortOrder
    fuelType?: SortOrder
    yearMin?: SortOrder
    budgetMax?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SourcingRequestMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    category?: SortOrder
    make?: SortOrder
    model?: SortOrder
    fuelType?: SortOrder
    yearMin?: SortOrder
    budgetMax?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SourcingRequestSumOrderByAggregateInput = {
    yearMin?: SortOrder
    budgetMax?: SortOrder
  }

  export type VehicleCreatefeaturesInput = {
    set: string[]
  }

  export type VehicleImageCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleImageCreateWithoutVehicleInput, VehicleImageUncheckedCreateWithoutVehicleInput> | VehicleImageCreateWithoutVehicleInput[] | VehicleImageUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleImageCreateOrConnectWithoutVehicleInput | VehicleImageCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleImageCreateManyVehicleInputEnvelope
    connect?: VehicleImageWhereUniqueInput | VehicleImageWhereUniqueInput[]
  }

  export type LeadCreateNestedManyWithoutVehicleInput = {
    create?: XOR<LeadCreateWithoutVehicleInput, LeadUncheckedCreateWithoutVehicleInput> | LeadCreateWithoutVehicleInput[] | LeadUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutVehicleInput | LeadCreateOrConnectWithoutVehicleInput[]
    createMany?: LeadCreateManyVehicleInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type VehicleImageUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<VehicleImageCreateWithoutVehicleInput, VehicleImageUncheckedCreateWithoutVehicleInput> | VehicleImageCreateWithoutVehicleInput[] | VehicleImageUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleImageCreateOrConnectWithoutVehicleInput | VehicleImageCreateOrConnectWithoutVehicleInput[]
    createMany?: VehicleImageCreateManyVehicleInputEnvelope
    connect?: VehicleImageWhereUniqueInput | VehicleImageWhereUniqueInput[]
  }

  export type LeadUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<LeadCreateWithoutVehicleInput, LeadUncheckedCreateWithoutVehicleInput> | LeadCreateWithoutVehicleInput[] | LeadUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutVehicleInput | LeadCreateOrConnectWithoutVehicleInput[]
    createMany?: LeadCreateManyVehicleInputEnvelope
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VehicleUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehicleImageUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleImageCreateWithoutVehicleInput, VehicleImageUncheckedCreateWithoutVehicleInput> | VehicleImageCreateWithoutVehicleInput[] | VehicleImageUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleImageCreateOrConnectWithoutVehicleInput | VehicleImageCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleImageUpsertWithWhereUniqueWithoutVehicleInput | VehicleImageUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleImageCreateManyVehicleInputEnvelope
    set?: VehicleImageWhereUniqueInput | VehicleImageWhereUniqueInput[]
    disconnect?: VehicleImageWhereUniqueInput | VehicleImageWhereUniqueInput[]
    delete?: VehicleImageWhereUniqueInput | VehicleImageWhereUniqueInput[]
    connect?: VehicleImageWhereUniqueInput | VehicleImageWhereUniqueInput[]
    update?: VehicleImageUpdateWithWhereUniqueWithoutVehicleInput | VehicleImageUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleImageUpdateManyWithWhereWithoutVehicleInput | VehicleImageUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleImageScalarWhereInput | VehicleImageScalarWhereInput[]
  }

  export type LeadUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<LeadCreateWithoutVehicleInput, LeadUncheckedCreateWithoutVehicleInput> | LeadCreateWithoutVehicleInput[] | LeadUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutVehicleInput | LeadCreateOrConnectWithoutVehicleInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutVehicleInput | LeadUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: LeadCreateManyVehicleInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutVehicleInput | LeadUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutVehicleInput | LeadUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type VehicleImageUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<VehicleImageCreateWithoutVehicleInput, VehicleImageUncheckedCreateWithoutVehicleInput> | VehicleImageCreateWithoutVehicleInput[] | VehicleImageUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: VehicleImageCreateOrConnectWithoutVehicleInput | VehicleImageCreateOrConnectWithoutVehicleInput[]
    upsert?: VehicleImageUpsertWithWhereUniqueWithoutVehicleInput | VehicleImageUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: VehicleImageCreateManyVehicleInputEnvelope
    set?: VehicleImageWhereUniqueInput | VehicleImageWhereUniqueInput[]
    disconnect?: VehicleImageWhereUniqueInput | VehicleImageWhereUniqueInput[]
    delete?: VehicleImageWhereUniqueInput | VehicleImageWhereUniqueInput[]
    connect?: VehicleImageWhereUniqueInput | VehicleImageWhereUniqueInput[]
    update?: VehicleImageUpdateWithWhereUniqueWithoutVehicleInput | VehicleImageUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: VehicleImageUpdateManyWithWhereWithoutVehicleInput | VehicleImageUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: VehicleImageScalarWhereInput | VehicleImageScalarWhereInput[]
  }

  export type LeadUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<LeadCreateWithoutVehicleInput, LeadUncheckedCreateWithoutVehicleInput> | LeadCreateWithoutVehicleInput[] | LeadUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: LeadCreateOrConnectWithoutVehicleInput | LeadCreateOrConnectWithoutVehicleInput[]
    upsert?: LeadUpsertWithWhereUniqueWithoutVehicleInput | LeadUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: LeadCreateManyVehicleInputEnvelope
    set?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    disconnect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    delete?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    connect?: LeadWhereUniqueInput | LeadWhereUniqueInput[]
    update?: LeadUpdateWithWhereUniqueWithoutVehicleInput | LeadUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: LeadUpdateManyWithWhereWithoutVehicleInput | LeadUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: LeadScalarWhereInput | LeadScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutImagesInput = {
    create?: XOR<VehicleCreateWithoutImagesInput, VehicleUncheckedCreateWithoutImagesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutImagesInput
    connect?: VehicleWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VehicleUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<VehicleCreateWithoutImagesInput, VehicleUncheckedCreateWithoutImagesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutImagesInput
    upsert?: VehicleUpsertWithoutImagesInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutImagesInput, VehicleUpdateWithoutImagesInput>, VehicleUncheckedUpdateWithoutImagesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehicleCreateNestedOneWithoutLeadsInput = {
    create?: XOR<VehicleCreateWithoutLeadsInput, VehicleUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutLeadsInput
    connect?: VehicleWhereUniqueInput
  }

  export type VehicleUpdateOneWithoutLeadsNestedInput = {
    create?: XOR<VehicleCreateWithoutLeadsInput, VehicleUncheckedCreateWithoutLeadsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutLeadsInput
    upsert?: VehicleUpsertWithoutLeadsInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutLeadsInput, VehicleUpdateWithoutLeadsInput>, VehicleUncheckedUpdateWithoutLeadsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type VehicleImageCreateWithoutVehicleInput = {
    id?: string
    url: string
    isPrimary?: boolean
    position?: number
  }

  export type VehicleImageUncheckedCreateWithoutVehicleInput = {
    id?: string
    url: string
    isPrimary?: boolean
    position?: number
  }

  export type VehicleImageCreateOrConnectWithoutVehicleInput = {
    where: VehicleImageWhereUniqueInput
    create: XOR<VehicleImageCreateWithoutVehicleInput, VehicleImageUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleImageCreateManyVehicleInputEnvelope = {
    data: VehicleImageCreateManyVehicleInput | VehicleImageCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type LeadCreateWithoutVehicleInput = {
    id?: string
    name: string
    email: string
    phone: string
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type LeadUncheckedCreateWithoutVehicleInput = {
    id?: string
    name: string
    email: string
    phone: string
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type LeadCreateOrConnectWithoutVehicleInput = {
    where: LeadWhereUniqueInput
    create: XOR<LeadCreateWithoutVehicleInput, LeadUncheckedCreateWithoutVehicleInput>
  }

  export type LeadCreateManyVehicleInputEnvelope = {
    data: LeadCreateManyVehicleInput | LeadCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type VehicleImageUpsertWithWhereUniqueWithoutVehicleInput = {
    where: VehicleImageWhereUniqueInput
    update: XOR<VehicleImageUpdateWithoutVehicleInput, VehicleImageUncheckedUpdateWithoutVehicleInput>
    create: XOR<VehicleImageCreateWithoutVehicleInput, VehicleImageUncheckedCreateWithoutVehicleInput>
  }

  export type VehicleImageUpdateWithWhereUniqueWithoutVehicleInput = {
    where: VehicleImageWhereUniqueInput
    data: XOR<VehicleImageUpdateWithoutVehicleInput, VehicleImageUncheckedUpdateWithoutVehicleInput>
  }

  export type VehicleImageUpdateManyWithWhereWithoutVehicleInput = {
    where: VehicleImageScalarWhereInput
    data: XOR<VehicleImageUpdateManyMutationInput, VehicleImageUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleImageScalarWhereInput = {
    AND?: VehicleImageScalarWhereInput | VehicleImageScalarWhereInput[]
    OR?: VehicleImageScalarWhereInput[]
    NOT?: VehicleImageScalarWhereInput | VehicleImageScalarWhereInput[]
    id?: StringFilter<"VehicleImage"> | string
    vehicleId?: StringFilter<"VehicleImage"> | string
    url?: StringFilter<"VehicleImage"> | string
    isPrimary?: BoolFilter<"VehicleImage"> | boolean
    position?: IntFilter<"VehicleImage"> | number
  }

  export type LeadUpsertWithWhereUniqueWithoutVehicleInput = {
    where: LeadWhereUniqueInput
    update: XOR<LeadUpdateWithoutVehicleInput, LeadUncheckedUpdateWithoutVehicleInput>
    create: XOR<LeadCreateWithoutVehicleInput, LeadUncheckedCreateWithoutVehicleInput>
  }

  export type LeadUpdateWithWhereUniqueWithoutVehicleInput = {
    where: LeadWhereUniqueInput
    data: XOR<LeadUpdateWithoutVehicleInput, LeadUncheckedUpdateWithoutVehicleInput>
  }

  export type LeadUpdateManyWithWhereWithoutVehicleInput = {
    where: LeadScalarWhereInput
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyWithoutVehicleInput>
  }

  export type LeadScalarWhereInput = {
    AND?: LeadScalarWhereInput | LeadScalarWhereInput[]
    OR?: LeadScalarWhereInput[]
    NOT?: LeadScalarWhereInput | LeadScalarWhereInput[]
    id?: StringFilter<"Lead"> | string
    name?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    phone?: StringFilter<"Lead"> | string
    message?: StringNullableFilter<"Lead"> | string | null
    vehicleId?: StringNullableFilter<"Lead"> | string | null
    status?: StringFilter<"Lead"> | string
    createdAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type VehicleCreateWithoutImagesInput = {
    id?: string
    make: string
    model: string
    year: number
    price: number
    fuelType: string
    engineCC: number
    transmission: string
    bodyType: string
    mileage: number
    color?: string | null
    driveType?: string | null
    vin?: string | null
    description?: string | null
    features?: VehicleCreatefeaturesInput | string[]
    category?: string
    status?: string
    condition?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutImagesInput = {
    id?: string
    make: string
    model: string
    year: number
    price: number
    fuelType: string
    engineCC: number
    transmission: string
    bodyType: string
    mileage: number
    color?: string | null
    driveType?: string | null
    vin?: string | null
    description?: string | null
    features?: VehicleCreatefeaturesInput | string[]
    category?: string
    status?: string
    condition?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    leads?: LeadUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutImagesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutImagesInput, VehicleUncheckedCreateWithoutImagesInput>
  }

  export type VehicleUpsertWithoutImagesInput = {
    update: XOR<VehicleUpdateWithoutImagesInput, VehicleUncheckedUpdateWithoutImagesInput>
    create: XOR<VehicleCreateWithoutImagesInput, VehicleUncheckedCreateWithoutImagesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutImagesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutImagesInput, VehicleUncheckedUpdateWithoutImagesInput>
  }

  export type VehicleUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    engineCC?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    driveType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: VehicleUpdatefeaturesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    engineCC?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    driveType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: VehicleUpdatefeaturesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leads?: LeadUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateWithoutLeadsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: number
    fuelType: string
    engineCC: number
    transmission: string
    bodyType: string
    mileage: number
    color?: string | null
    driveType?: string | null
    vin?: string | null
    description?: string | null
    features?: VehicleCreatefeaturesInput | string[]
    category?: string
    status?: string
    condition?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VehicleImageCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutLeadsInput = {
    id?: string
    make: string
    model: string
    year: number
    price: number
    fuelType: string
    engineCC: number
    transmission: string
    bodyType: string
    mileage: number
    color?: string | null
    driveType?: string | null
    vin?: string | null
    description?: string | null
    features?: VehicleCreatefeaturesInput | string[]
    category?: string
    status?: string
    condition?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: VehicleImageUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutLeadsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutLeadsInput, VehicleUncheckedCreateWithoutLeadsInput>
  }

  export type VehicleUpsertWithoutLeadsInput = {
    update: XOR<VehicleUpdateWithoutLeadsInput, VehicleUncheckedUpdateWithoutLeadsInput>
    create: XOR<VehicleCreateWithoutLeadsInput, VehicleUncheckedCreateWithoutLeadsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutLeadsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutLeadsInput, VehicleUncheckedUpdateWithoutLeadsInput>
  }

  export type VehicleUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    engineCC?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    driveType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: VehicleUpdatefeaturesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VehicleImageUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string
    make?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    fuelType?: StringFieldUpdateOperationsInput | string
    engineCC?: IntFieldUpdateOperationsInput | number
    transmission?: StringFieldUpdateOperationsInput | string
    bodyType?: StringFieldUpdateOperationsInput | string
    mileage?: IntFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    driveType?: NullableStringFieldUpdateOperationsInput | string | null
    vin?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    features?: VehicleUpdatefeaturesInput | string[]
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: VehicleImageUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleImageCreateManyVehicleInput = {
    id?: string
    url: string
    isPrimary?: boolean
    position?: number
  }

  export type LeadCreateManyVehicleInput = {
    id?: string
    name: string
    email: string
    phone: string
    message?: string | null
    status?: string
    createdAt?: Date | string
  }

  export type VehicleImageUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleImageUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleImageUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    position?: IntFieldUpdateOperationsInput | number
  }

  export type LeadUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use VehicleCountOutputTypeDefaultArgs instead
     */
    export type VehicleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleDefaultArgs instead
     */
    export type VehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehicleImageDefaultArgs instead
     */
    export type VehicleImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehicleImageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CRSPModelDefaultArgs instead
     */
    export type CRSPModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CRSPModelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LeadDefaultArgs instead
     */
    export type LeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LeadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SourcingRequestDefaultArgs instead
     */
    export type SourcingRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SourcingRequestDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}