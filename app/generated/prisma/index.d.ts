
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
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Kursus
 * 
 */
export type Kursus = $Result.DefaultSelection<Prisma.$KursusPayload>
/**
 * Model Pendaftaran
 * 
 */
export type Pendaftaran = $Result.DefaultSelection<Prisma.$PendaftaranPayload>
/**
 * Model Pembayaran
 * 
 */
export type Pembayaran = $Result.DefaultSelection<Prisma.$PembayaranPayload>
/**
 * Model HistoriKursus
 * 
 */
export type HistoriKursus = $Result.DefaultSelection<Prisma.$HistoriKursusPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.account.findMany()
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.account.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kursus`: Exposes CRUD operations for the **Kursus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kursuses
    * const kursuses = await prisma.kursus.findMany()
    * ```
    */
  get kursus(): Prisma.KursusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pendaftaran`: Exposes CRUD operations for the **Pendaftaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pendaftarans
    * const pendaftarans = await prisma.pendaftaran.findMany()
    * ```
    */
  get pendaftaran(): Prisma.PendaftaranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pembayaran`: Exposes CRUD operations for the **Pembayaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pembayarans
    * const pembayarans = await prisma.pembayaran.findMany()
    * ```
    */
  get pembayaran(): Prisma.PembayaranDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historiKursus`: Exposes CRUD operations for the **HistoriKursus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoriKursuses
    * const historiKursuses = await prisma.historiKursus.findMany()
    * ```
    */
  get historiKursus(): Prisma.HistoriKursusDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    User: 'User',
    Kursus: 'Kursus',
    Pendaftaran: 'Pendaftaran',
    Pembayaran: 'Pembayaran',
    HistoriKursus: 'HistoriKursus'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "account" | "session" | "verificationToken" | "user" | "kursus" | "pendaftaran" | "pembayaran" | "historiKursus"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Kursus: {
        payload: Prisma.$KursusPayload<ExtArgs>
        fields: Prisma.KursusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KursusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KursusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursusPayload>
          }
          findFirst: {
            args: Prisma.KursusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KursusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursusPayload>
          }
          findMany: {
            args: Prisma.KursusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursusPayload>[]
          }
          create: {
            args: Prisma.KursusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursusPayload>
          }
          createMany: {
            args: Prisma.KursusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KursusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursusPayload>[]
          }
          delete: {
            args: Prisma.KursusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursusPayload>
          }
          update: {
            args: Prisma.KursusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursusPayload>
          }
          deleteMany: {
            args: Prisma.KursusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KursusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KursusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursusPayload>[]
          }
          upsert: {
            args: Prisma.KursusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KursusPayload>
          }
          aggregate: {
            args: Prisma.KursusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKursus>
          }
          groupBy: {
            args: Prisma.KursusGroupByArgs<ExtArgs>
            result: $Utils.Optional<KursusGroupByOutputType>[]
          }
          count: {
            args: Prisma.KursusCountArgs<ExtArgs>
            result: $Utils.Optional<KursusCountAggregateOutputType> | number
          }
        }
      }
      Pendaftaran: {
        payload: Prisma.$PendaftaranPayload<ExtArgs>
        fields: Prisma.PendaftaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendaftaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendaftaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPayload>
          }
          findFirst: {
            args: Prisma.PendaftaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendaftaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPayload>
          }
          findMany: {
            args: Prisma.PendaftaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPayload>[]
          }
          create: {
            args: Prisma.PendaftaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPayload>
          }
          createMany: {
            args: Prisma.PendaftaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendaftaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPayload>[]
          }
          delete: {
            args: Prisma.PendaftaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPayload>
          }
          update: {
            args: Prisma.PendaftaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPayload>
          }
          deleteMany: {
            args: Prisma.PendaftaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendaftaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PendaftaranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPayload>[]
          }
          upsert: {
            args: Prisma.PendaftaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendaftaranPayload>
          }
          aggregate: {
            args: Prisma.PendaftaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePendaftaran>
          }
          groupBy: {
            args: Prisma.PendaftaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendaftaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendaftaranCountArgs<ExtArgs>
            result: $Utils.Optional<PendaftaranCountAggregateOutputType> | number
          }
        }
      }
      Pembayaran: {
        payload: Prisma.$PembayaranPayload<ExtArgs>
        fields: Prisma.PembayaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PembayaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PembayaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          findFirst: {
            args: Prisma.PembayaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PembayaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          findMany: {
            args: Prisma.PembayaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>[]
          }
          create: {
            args: Prisma.PembayaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          createMany: {
            args: Prisma.PembayaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PembayaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>[]
          }
          delete: {
            args: Prisma.PembayaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          update: {
            args: Prisma.PembayaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          deleteMany: {
            args: Prisma.PembayaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PembayaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PembayaranUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>[]
          }
          upsert: {
            args: Prisma.PembayaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PembayaranPayload>
          }
          aggregate: {
            args: Prisma.PembayaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePembayaran>
          }
          groupBy: {
            args: Prisma.PembayaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<PembayaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.PembayaranCountArgs<ExtArgs>
            result: $Utils.Optional<PembayaranCountAggregateOutputType> | number
          }
        }
      }
      HistoriKursus: {
        payload: Prisma.$HistoriKursusPayload<ExtArgs>
        fields: Prisma.HistoriKursusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoriKursusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriKursusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoriKursusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriKursusPayload>
          }
          findFirst: {
            args: Prisma.HistoriKursusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriKursusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoriKursusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriKursusPayload>
          }
          findMany: {
            args: Prisma.HistoriKursusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriKursusPayload>[]
          }
          create: {
            args: Prisma.HistoriKursusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriKursusPayload>
          }
          createMany: {
            args: Prisma.HistoriKursusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoriKursusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriKursusPayload>[]
          }
          delete: {
            args: Prisma.HistoriKursusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriKursusPayload>
          }
          update: {
            args: Prisma.HistoriKursusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriKursusPayload>
          }
          deleteMany: {
            args: Prisma.HistoriKursusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoriKursusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoriKursusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriKursusPayload>[]
          }
          upsert: {
            args: Prisma.HistoriKursusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriKursusPayload>
          }
          aggregate: {
            args: Prisma.HistoriKursusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoriKursus>
          }
          groupBy: {
            args: Prisma.HistoriKursusGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoriKursusGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoriKursusCountArgs<ExtArgs>
            result: $Utils.Optional<HistoriKursusCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    user?: UserOmit
    kursus?: KursusOmit
    pendaftaran?: PendaftaranOmit
    pembayaran?: PembayaranOmit
    historiKursus?: HistoriKursusOmit
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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    kursus: number
    Account: number
    Session: number
    Pendaftaran: number
    HistoriKursus: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kursus?: boolean | UserCountOutputTypeCountKursusArgs
    Account?: boolean | UserCountOutputTypeCountAccountArgs
    Session?: boolean | UserCountOutputTypeCountSessionArgs
    Pendaftaran?: boolean | UserCountOutputTypeCountPendaftaranArgs
    HistoriKursus?: boolean | UserCountOutputTypeCountHistoriKursusArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountKursusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KursusWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPendaftaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendaftaranWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoriKursusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriKursusWhereInput
  }


  /**
   * Count Type KursusCountOutputType
   */

  export type KursusCountOutputType = {
    Pendaftaran: number
    HistoriKursus: number
  }

  export type KursusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pendaftaran?: boolean | KursusCountOutputTypeCountPendaftaranArgs
    HistoriKursus?: boolean | KursusCountOutputTypeCountHistoriKursusArgs
  }

  // Custom InputTypes
  /**
   * KursusCountOutputType without action
   */
  export type KursusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KursusCountOutputType
     */
    select?: KursusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KursusCountOutputType without action
   */
  export type KursusCountOutputTypeCountPendaftaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendaftaranWhereInput
  }

  /**
   * KursusCountOutputType without action
   */
  export type KursusCountOutputTypeCountHistoriKursusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriKursusWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    nama: string | null
    nik: string | null
    jenisKelamin: string | null
    tempatLahir: string | null
    tanggalLahir: string | null
    mediaSosial: string | null
    noHp: string | null
    email: string | null
    agama: string | null
    jurusan: string | null
    tahunAkademik: string | null
    password: string | null
    role: string | null
    keahlian: string | null
    jabatan: string | null
    image: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    nik: string | null
    jenisKelamin: string | null
    tempatLahir: string | null
    tanggalLahir: string | null
    mediaSosial: string | null
    noHp: string | null
    email: string | null
    agama: string | null
    jurusan: string | null
    tahunAkademik: string | null
    password: string | null
    role: string | null
    keahlian: string | null
    jabatan: string | null
    image: string | null
    emailVerified: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    nama: number
    nik: number
    jenisKelamin: number
    tempatLahir: number
    tanggalLahir: number
    mediaSosial: number
    noHp: number
    email: number
    agama: number
    jurusan: number
    tahunAkademik: number
    password: number
    role: number
    keahlian: number
    jabatan: number
    image: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    nama?: true
    nik?: true
    jenisKelamin?: true
    tempatLahir?: true
    tanggalLahir?: true
    mediaSosial?: true
    noHp?: true
    email?: true
    agama?: true
    jurusan?: true
    tahunAkademik?: true
    password?: true
    role?: true
    keahlian?: true
    jabatan?: true
    image?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    nama?: true
    nik?: true
    jenisKelamin?: true
    tempatLahir?: true
    tanggalLahir?: true
    mediaSosial?: true
    noHp?: true
    email?: true
    agama?: true
    jurusan?: true
    tahunAkademik?: true
    password?: true
    role?: true
    keahlian?: true
    jabatan?: true
    image?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    nama?: true
    nik?: true
    jenisKelamin?: true
    tempatLahir?: true
    tanggalLahir?: true
    mediaSosial?: true
    noHp?: true
    email?: true
    agama?: true
    jurusan?: true
    tahunAkademik?: true
    password?: true
    role?: true
    keahlian?: true
    jabatan?: true
    image?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    nama: string
    nik: string | null
    jenisKelamin: string
    tempatLahir: string | null
    tanggalLahir: string | null
    mediaSosial: string | null
    noHp: string
    email: string
    agama: string | null
    jurusan: string | null
    tahunAkademik: string | null
    password: string | null
    role: string
    keahlian: string | null
    jabatan: string | null
    image: string | null
    emailVerified: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nik?: boolean
    jenisKelamin?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    mediaSosial?: boolean
    noHp?: boolean
    email?: boolean
    agama?: boolean
    jurusan?: boolean
    tahunAkademik?: boolean
    password?: boolean
    role?: boolean
    keahlian?: boolean
    jabatan?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kursus?: boolean | User$kursusArgs<ExtArgs>
    Account?: boolean | User$AccountArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    Pendaftaran?: boolean | User$PendaftaranArgs<ExtArgs>
    HistoriKursus?: boolean | User$HistoriKursusArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nik?: boolean
    jenisKelamin?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    mediaSosial?: boolean
    noHp?: boolean
    email?: boolean
    agama?: boolean
    jurusan?: boolean
    tahunAkademik?: boolean
    password?: boolean
    role?: boolean
    keahlian?: boolean
    jabatan?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    nik?: boolean
    jenisKelamin?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    mediaSosial?: boolean
    noHp?: boolean
    email?: boolean
    agama?: boolean
    jurusan?: boolean
    tahunAkademik?: boolean
    password?: boolean
    role?: boolean
    keahlian?: boolean
    jabatan?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    nama?: boolean
    nik?: boolean
    jenisKelamin?: boolean
    tempatLahir?: boolean
    tanggalLahir?: boolean
    mediaSosial?: boolean
    noHp?: boolean
    email?: boolean
    agama?: boolean
    jurusan?: boolean
    tahunAkademik?: boolean
    password?: boolean
    role?: boolean
    keahlian?: boolean
    jabatan?: boolean
    image?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "nik" | "jenisKelamin" | "tempatLahir" | "tanggalLahir" | "mediaSosial" | "noHp" | "email" | "agama" | "jurusan" | "tahunAkademik" | "password" | "role" | "keahlian" | "jabatan" | "image" | "emailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kursus?: boolean | User$kursusArgs<ExtArgs>
    Account?: boolean | User$AccountArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    Pendaftaran?: boolean | User$PendaftaranArgs<ExtArgs>
    HistoriKursus?: boolean | User$HistoriKursusArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      kursus: Prisma.$KursusPayload<ExtArgs>[]
      Account: Prisma.$AccountPayload<ExtArgs>[]
      Session: Prisma.$SessionPayload<ExtArgs>[]
      Pendaftaran: Prisma.$PendaftaranPayload<ExtArgs>[]
      HistoriKursus: Prisma.$HistoriKursusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      nik: string | null
      jenisKelamin: string
      tempatLahir: string | null
      tanggalLahir: string | null
      mediaSosial: string | null
      noHp: string
      email: string
      agama: string | null
      jurusan: string | null
      tahunAkademik: string | null
      password: string | null
      role: string
      keahlian: string | null
      jabatan: string | null
      image: string | null
      emailVerified: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kursus<T extends User$kursusArgs<ExtArgs> = {}>(args?: Subset<T, User$kursusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Account<T extends User$AccountArgs<ExtArgs> = {}>(args?: Subset<T, User$AccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Session<T extends User$SessionArgs<ExtArgs> = {}>(args?: Subset<T, User$SessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Pendaftaran<T extends User$PendaftaranArgs<ExtArgs> = {}>(args?: Subset<T, User$PendaftaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    HistoriKursus<T extends User$HistoriKursusArgs<ExtArgs> = {}>(args?: Subset<T, User$HistoriKursusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriKursusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly nama: FieldRef<"User", 'String'>
    readonly nik: FieldRef<"User", 'String'>
    readonly jenisKelamin: FieldRef<"User", 'String'>
    readonly tempatLahir: FieldRef<"User", 'String'>
    readonly tanggalLahir: FieldRef<"User", 'String'>
    readonly mediaSosial: FieldRef<"User", 'String'>
    readonly noHp: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly agama: FieldRef<"User", 'String'>
    readonly jurusan: FieldRef<"User", 'String'>
    readonly tahunAkademik: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly keahlian: FieldRef<"User", 'String'>
    readonly jabatan: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.kursus
   */
  export type User$kursusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursus
     */
    select?: KursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursus
     */
    omit?: KursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursusInclude<ExtArgs> | null
    where?: KursusWhereInput
    orderBy?: KursusOrderByWithRelationInput | KursusOrderByWithRelationInput[]
    cursor?: KursusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KursusScalarFieldEnum | KursusScalarFieldEnum[]
  }

  /**
   * User.Account
   */
  export type User$AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.Session
   */
  export type User$SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.Pendaftaran
   */
  export type User$PendaftaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranInclude<ExtArgs> | null
    where?: PendaftaranWhereInput
    orderBy?: PendaftaranOrderByWithRelationInput | PendaftaranOrderByWithRelationInput[]
    cursor?: PendaftaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendaftaranScalarFieldEnum | PendaftaranScalarFieldEnum[]
  }

  /**
   * User.HistoriKursus
   */
  export type User$HistoriKursusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusInclude<ExtArgs> | null
    where?: HistoriKursusWhereInput
    orderBy?: HistoriKursusOrderByWithRelationInput | HistoriKursusOrderByWithRelationInput[]
    cursor?: HistoriKursusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoriKursusScalarFieldEnum | HistoriKursusScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Kursus
   */

  export type AggregateKursus = {
    _count: KursusCountAggregateOutputType | null
    _avg: KursusAvgAggregateOutputType | null
    _sum: KursusSumAggregateOutputType | null
    _min: KursusMinAggregateOutputType | null
    _max: KursusMaxAggregateOutputType | null
  }

  export type KursusAvgAggregateOutputType = {
    harga: number | null
  }

  export type KursusSumAggregateOutputType = {
    harga: number | null
  }

  export type KursusMinAggregateOutputType = {
    id: string | null
    nama: string | null
    harga: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    instrukturId: string | null
  }

  export type KursusMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    harga: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    instrukturId: string | null
  }

  export type KursusCountAggregateOutputType = {
    id: number
    nama: number
    harga: number
    createdAt: number
    updatedAt: number
    userId: number
    instrukturId: number
    _all: number
  }


  export type KursusAvgAggregateInputType = {
    harga?: true
  }

  export type KursusSumAggregateInputType = {
    harga?: true
  }

  export type KursusMinAggregateInputType = {
    id?: true
    nama?: true
    harga?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    instrukturId?: true
  }

  export type KursusMaxAggregateInputType = {
    id?: true
    nama?: true
    harga?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    instrukturId?: true
  }

  export type KursusCountAggregateInputType = {
    id?: true
    nama?: true
    harga?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    instrukturId?: true
    _all?: true
  }

  export type KursusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kursus to aggregate.
     */
    where?: KursusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kursuses to fetch.
     */
    orderBy?: KursusOrderByWithRelationInput | KursusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KursusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kursuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kursuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kursuses
    **/
    _count?: true | KursusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KursusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KursusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KursusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KursusMaxAggregateInputType
  }

  export type GetKursusAggregateType<T extends KursusAggregateArgs> = {
        [P in keyof T & keyof AggregateKursus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKursus[P]>
      : GetScalarType<T[P], AggregateKursus[P]>
  }




  export type KursusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KursusWhereInput
    orderBy?: KursusOrderByWithAggregationInput | KursusOrderByWithAggregationInput[]
    by: KursusScalarFieldEnum[] | KursusScalarFieldEnum
    having?: KursusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KursusCountAggregateInputType | true
    _avg?: KursusAvgAggregateInputType
    _sum?: KursusSumAggregateInputType
    _min?: KursusMinAggregateInputType
    _max?: KursusMaxAggregateInputType
  }

  export type KursusGroupByOutputType = {
    id: string
    nama: string
    harga: number
    createdAt: Date
    updatedAt: Date
    userId: string
    instrukturId: string
    _count: KursusCountAggregateOutputType | null
    _avg: KursusAvgAggregateOutputType | null
    _sum: KursusSumAggregateOutputType | null
    _min: KursusMinAggregateOutputType | null
    _max: KursusMaxAggregateOutputType | null
  }

  type GetKursusGroupByPayload<T extends KursusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KursusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KursusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KursusGroupByOutputType[P]>
            : GetScalarType<T[P], KursusGroupByOutputType[P]>
        }
      >
    >


  export type KursusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    harga?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    instrukturId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Pendaftaran?: boolean | Kursus$PendaftaranArgs<ExtArgs>
    HistoriKursus?: boolean | Kursus$HistoriKursusArgs<ExtArgs>
    _count?: boolean | KursusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kursus"]>

  export type KursusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    harga?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    instrukturId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kursus"]>

  export type KursusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    harga?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    instrukturId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kursus"]>

  export type KursusSelectScalar = {
    id?: boolean
    nama?: boolean
    harga?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    instrukturId?: boolean
  }

  export type KursusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "harga" | "createdAt" | "updatedAt" | "userId" | "instrukturId", ExtArgs["result"]["kursus"]>
  export type KursusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Pendaftaran?: boolean | Kursus$PendaftaranArgs<ExtArgs>
    HistoriKursus?: boolean | Kursus$HistoriKursusArgs<ExtArgs>
    _count?: boolean | KursusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KursusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type KursusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $KursusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kursus"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Pendaftaran: Prisma.$PendaftaranPayload<ExtArgs>[]
      HistoriKursus: Prisma.$HistoriKursusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      harga: number
      createdAt: Date
      updatedAt: Date
      userId: string
      instrukturId: string
    }, ExtArgs["result"]["kursus"]>
    composites: {}
  }

  type KursusGetPayload<S extends boolean | null | undefined | KursusDefaultArgs> = $Result.GetResult<Prisma.$KursusPayload, S>

  type KursusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KursusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KursusCountAggregateInputType | true
    }

  export interface KursusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kursus'], meta: { name: 'Kursus' } }
    /**
     * Find zero or one Kursus that matches the filter.
     * @param {KursusFindUniqueArgs} args - Arguments to find a Kursus
     * @example
     * // Get one Kursus
     * const kursus = await prisma.kursus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KursusFindUniqueArgs>(args: SelectSubset<T, KursusFindUniqueArgs<ExtArgs>>): Prisma__KursusClient<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kursus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KursusFindUniqueOrThrowArgs} args - Arguments to find a Kursus
     * @example
     * // Get one Kursus
     * const kursus = await prisma.kursus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KursusFindUniqueOrThrowArgs>(args: SelectSubset<T, KursusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KursusClient<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kursus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursusFindFirstArgs} args - Arguments to find a Kursus
     * @example
     * // Get one Kursus
     * const kursus = await prisma.kursus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KursusFindFirstArgs>(args?: SelectSubset<T, KursusFindFirstArgs<ExtArgs>>): Prisma__KursusClient<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kursus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursusFindFirstOrThrowArgs} args - Arguments to find a Kursus
     * @example
     * // Get one Kursus
     * const kursus = await prisma.kursus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KursusFindFirstOrThrowArgs>(args?: SelectSubset<T, KursusFindFirstOrThrowArgs<ExtArgs>>): Prisma__KursusClient<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kursuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kursuses
     * const kursuses = await prisma.kursus.findMany()
     * 
     * // Get first 10 Kursuses
     * const kursuses = await prisma.kursus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kursusWithIdOnly = await prisma.kursus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KursusFindManyArgs>(args?: SelectSubset<T, KursusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kursus.
     * @param {KursusCreateArgs} args - Arguments to create a Kursus.
     * @example
     * // Create one Kursus
     * const Kursus = await prisma.kursus.create({
     *   data: {
     *     // ... data to create a Kursus
     *   }
     * })
     * 
     */
    create<T extends KursusCreateArgs>(args: SelectSubset<T, KursusCreateArgs<ExtArgs>>): Prisma__KursusClient<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kursuses.
     * @param {KursusCreateManyArgs} args - Arguments to create many Kursuses.
     * @example
     * // Create many Kursuses
     * const kursus = await prisma.kursus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KursusCreateManyArgs>(args?: SelectSubset<T, KursusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kursuses and returns the data saved in the database.
     * @param {KursusCreateManyAndReturnArgs} args - Arguments to create many Kursuses.
     * @example
     * // Create many Kursuses
     * const kursus = await prisma.kursus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kursuses and only return the `id`
     * const kursusWithIdOnly = await prisma.kursus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KursusCreateManyAndReturnArgs>(args?: SelectSubset<T, KursusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kursus.
     * @param {KursusDeleteArgs} args - Arguments to delete one Kursus.
     * @example
     * // Delete one Kursus
     * const Kursus = await prisma.kursus.delete({
     *   where: {
     *     // ... filter to delete one Kursus
     *   }
     * })
     * 
     */
    delete<T extends KursusDeleteArgs>(args: SelectSubset<T, KursusDeleteArgs<ExtArgs>>): Prisma__KursusClient<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kursus.
     * @param {KursusUpdateArgs} args - Arguments to update one Kursus.
     * @example
     * // Update one Kursus
     * const kursus = await prisma.kursus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KursusUpdateArgs>(args: SelectSubset<T, KursusUpdateArgs<ExtArgs>>): Prisma__KursusClient<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kursuses.
     * @param {KursusDeleteManyArgs} args - Arguments to filter Kursuses to delete.
     * @example
     * // Delete a few Kursuses
     * const { count } = await prisma.kursus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KursusDeleteManyArgs>(args?: SelectSubset<T, KursusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kursuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kursuses
     * const kursus = await prisma.kursus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KursusUpdateManyArgs>(args: SelectSubset<T, KursusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kursuses and returns the data updated in the database.
     * @param {KursusUpdateManyAndReturnArgs} args - Arguments to update many Kursuses.
     * @example
     * // Update many Kursuses
     * const kursus = await prisma.kursus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kursuses and only return the `id`
     * const kursusWithIdOnly = await prisma.kursus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KursusUpdateManyAndReturnArgs>(args: SelectSubset<T, KursusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kursus.
     * @param {KursusUpsertArgs} args - Arguments to update or create a Kursus.
     * @example
     * // Update or create a Kursus
     * const kursus = await prisma.kursus.upsert({
     *   create: {
     *     // ... data to create a Kursus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kursus we want to update
     *   }
     * })
     */
    upsert<T extends KursusUpsertArgs>(args: SelectSubset<T, KursusUpsertArgs<ExtArgs>>): Prisma__KursusClient<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kursuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursusCountArgs} args - Arguments to filter Kursuses to count.
     * @example
     * // Count the number of Kursuses
     * const count = await prisma.kursus.count({
     *   where: {
     *     // ... the filter for the Kursuses we want to count
     *   }
     * })
    **/
    count<T extends KursusCountArgs>(
      args?: Subset<T, KursusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KursusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kursus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KursusAggregateArgs>(args: Subset<T, KursusAggregateArgs>): Prisma.PrismaPromise<GetKursusAggregateType<T>>

    /**
     * Group by Kursus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KursusGroupByArgs} args - Group by arguments.
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
      T extends KursusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KursusGroupByArgs['orderBy'] }
        : { orderBy?: KursusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KursusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKursusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kursus model
   */
  readonly fields: KursusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kursus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KursusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Pendaftaran<T extends Kursus$PendaftaranArgs<ExtArgs> = {}>(args?: Subset<T, Kursus$PendaftaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    HistoriKursus<T extends Kursus$HistoriKursusArgs<ExtArgs> = {}>(args?: Subset<T, Kursus$HistoriKursusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriKursusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Kursus model
   */
  interface KursusFieldRefs {
    readonly id: FieldRef<"Kursus", 'String'>
    readonly nama: FieldRef<"Kursus", 'String'>
    readonly harga: FieldRef<"Kursus", 'Int'>
    readonly createdAt: FieldRef<"Kursus", 'DateTime'>
    readonly updatedAt: FieldRef<"Kursus", 'DateTime'>
    readonly userId: FieldRef<"Kursus", 'String'>
    readonly instrukturId: FieldRef<"Kursus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Kursus findUnique
   */
  export type KursusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursus
     */
    select?: KursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursus
     */
    omit?: KursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursusInclude<ExtArgs> | null
    /**
     * Filter, which Kursus to fetch.
     */
    where: KursusWhereUniqueInput
  }

  /**
   * Kursus findUniqueOrThrow
   */
  export type KursusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursus
     */
    select?: KursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursus
     */
    omit?: KursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursusInclude<ExtArgs> | null
    /**
     * Filter, which Kursus to fetch.
     */
    where: KursusWhereUniqueInput
  }

  /**
   * Kursus findFirst
   */
  export type KursusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursus
     */
    select?: KursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursus
     */
    omit?: KursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursusInclude<ExtArgs> | null
    /**
     * Filter, which Kursus to fetch.
     */
    where?: KursusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kursuses to fetch.
     */
    orderBy?: KursusOrderByWithRelationInput | KursusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kursuses.
     */
    cursor?: KursusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kursuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kursuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kursuses.
     */
    distinct?: KursusScalarFieldEnum | KursusScalarFieldEnum[]
  }

  /**
   * Kursus findFirstOrThrow
   */
  export type KursusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursus
     */
    select?: KursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursus
     */
    omit?: KursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursusInclude<ExtArgs> | null
    /**
     * Filter, which Kursus to fetch.
     */
    where?: KursusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kursuses to fetch.
     */
    orderBy?: KursusOrderByWithRelationInput | KursusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kursuses.
     */
    cursor?: KursusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kursuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kursuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kursuses.
     */
    distinct?: KursusScalarFieldEnum | KursusScalarFieldEnum[]
  }

  /**
   * Kursus findMany
   */
  export type KursusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursus
     */
    select?: KursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursus
     */
    omit?: KursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursusInclude<ExtArgs> | null
    /**
     * Filter, which Kursuses to fetch.
     */
    where?: KursusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kursuses to fetch.
     */
    orderBy?: KursusOrderByWithRelationInput | KursusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kursuses.
     */
    cursor?: KursusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kursuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kursuses.
     */
    skip?: number
    distinct?: KursusScalarFieldEnum | KursusScalarFieldEnum[]
  }

  /**
   * Kursus create
   */
  export type KursusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursus
     */
    select?: KursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursus
     */
    omit?: KursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursusInclude<ExtArgs> | null
    /**
     * The data needed to create a Kursus.
     */
    data: XOR<KursusCreateInput, KursusUncheckedCreateInput>
  }

  /**
   * Kursus createMany
   */
  export type KursusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kursuses.
     */
    data: KursusCreateManyInput | KursusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kursus createManyAndReturn
   */
  export type KursusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursus
     */
    select?: KursusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kursus
     */
    omit?: KursusOmit<ExtArgs> | null
    /**
     * The data used to create many Kursuses.
     */
    data: KursusCreateManyInput | KursusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kursus update
   */
  export type KursusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursus
     */
    select?: KursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursus
     */
    omit?: KursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursusInclude<ExtArgs> | null
    /**
     * The data needed to update a Kursus.
     */
    data: XOR<KursusUpdateInput, KursusUncheckedUpdateInput>
    /**
     * Choose, which Kursus to update.
     */
    where: KursusWhereUniqueInput
  }

  /**
   * Kursus updateMany
   */
  export type KursusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kursuses.
     */
    data: XOR<KursusUpdateManyMutationInput, KursusUncheckedUpdateManyInput>
    /**
     * Filter which Kursuses to update
     */
    where?: KursusWhereInput
    /**
     * Limit how many Kursuses to update.
     */
    limit?: number
  }

  /**
   * Kursus updateManyAndReturn
   */
  export type KursusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursus
     */
    select?: KursusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kursus
     */
    omit?: KursusOmit<ExtArgs> | null
    /**
     * The data used to update Kursuses.
     */
    data: XOR<KursusUpdateManyMutationInput, KursusUncheckedUpdateManyInput>
    /**
     * Filter which Kursuses to update
     */
    where?: KursusWhereInput
    /**
     * Limit how many Kursuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Kursus upsert
   */
  export type KursusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursus
     */
    select?: KursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursus
     */
    omit?: KursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursusInclude<ExtArgs> | null
    /**
     * The filter to search for the Kursus to update in case it exists.
     */
    where: KursusWhereUniqueInput
    /**
     * In case the Kursus found by the `where` argument doesn't exist, create a new Kursus with this data.
     */
    create: XOR<KursusCreateInput, KursusUncheckedCreateInput>
    /**
     * In case the Kursus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KursusUpdateInput, KursusUncheckedUpdateInput>
  }

  /**
   * Kursus delete
   */
  export type KursusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursus
     */
    select?: KursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursus
     */
    omit?: KursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursusInclude<ExtArgs> | null
    /**
     * Filter which Kursus to delete.
     */
    where: KursusWhereUniqueInput
  }

  /**
   * Kursus deleteMany
   */
  export type KursusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kursuses to delete
     */
    where?: KursusWhereInput
    /**
     * Limit how many Kursuses to delete.
     */
    limit?: number
  }

  /**
   * Kursus.Pendaftaran
   */
  export type Kursus$PendaftaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranInclude<ExtArgs> | null
    where?: PendaftaranWhereInput
    orderBy?: PendaftaranOrderByWithRelationInput | PendaftaranOrderByWithRelationInput[]
    cursor?: PendaftaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendaftaranScalarFieldEnum | PendaftaranScalarFieldEnum[]
  }

  /**
   * Kursus.HistoriKursus
   */
  export type Kursus$HistoriKursusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusInclude<ExtArgs> | null
    where?: HistoriKursusWhereInput
    orderBy?: HistoriKursusOrderByWithRelationInput | HistoriKursusOrderByWithRelationInput[]
    cursor?: HistoriKursusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoriKursusScalarFieldEnum | HistoriKursusScalarFieldEnum[]
  }

  /**
   * Kursus without action
   */
  export type KursusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kursus
     */
    select?: KursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kursus
     */
    omit?: KursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KursusInclude<ExtArgs> | null
  }


  /**
   * Model Pendaftaran
   */

  export type AggregatePendaftaran = {
    _count: PendaftaranCountAggregateOutputType | null
    _min: PendaftaranMinAggregateOutputType | null
    _max: PendaftaranMaxAggregateOutputType | null
  }

  export type PendaftaranMinAggregateOutputType = {
    id: string | null
    userId: string | null
    kursusId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PendaftaranMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    kursusId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PendaftaranCountAggregateOutputType = {
    id: number
    userId: number
    kursusId: number
    status: number
    createdAt: number
    _all: number
  }


  export type PendaftaranMinAggregateInputType = {
    id?: true
    userId?: true
    kursusId?: true
    status?: true
    createdAt?: true
  }

  export type PendaftaranMaxAggregateInputType = {
    id?: true
    userId?: true
    kursusId?: true
    status?: true
    createdAt?: true
  }

  export type PendaftaranCountAggregateInputType = {
    id?: true
    userId?: true
    kursusId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PendaftaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pendaftaran to aggregate.
     */
    where?: PendaftaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pendaftarans to fetch.
     */
    orderBy?: PendaftaranOrderByWithRelationInput | PendaftaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendaftaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pendaftarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pendaftarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pendaftarans
    **/
    _count?: true | PendaftaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendaftaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendaftaranMaxAggregateInputType
  }

  export type GetPendaftaranAggregateType<T extends PendaftaranAggregateArgs> = {
        [P in keyof T & keyof AggregatePendaftaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePendaftaran[P]>
      : GetScalarType<T[P], AggregatePendaftaran[P]>
  }




  export type PendaftaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendaftaranWhereInput
    orderBy?: PendaftaranOrderByWithAggregationInput | PendaftaranOrderByWithAggregationInput[]
    by: PendaftaranScalarFieldEnum[] | PendaftaranScalarFieldEnum
    having?: PendaftaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendaftaranCountAggregateInputType | true
    _min?: PendaftaranMinAggregateInputType
    _max?: PendaftaranMaxAggregateInputType
  }

  export type PendaftaranGroupByOutputType = {
    id: string
    userId: string
    kursusId: string
    status: string
    createdAt: Date
    _count: PendaftaranCountAggregateOutputType | null
    _min: PendaftaranMinAggregateOutputType | null
    _max: PendaftaranMaxAggregateOutputType | null
  }

  type GetPendaftaranGroupByPayload<T extends PendaftaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendaftaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendaftaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendaftaranGroupByOutputType[P]>
            : GetScalarType<T[P], PendaftaranGroupByOutputType[P]>
        }
      >
    >


  export type PendaftaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kursusId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
    Pembayaran?: boolean | Pendaftaran$PembayaranArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaran"]>

  export type PendaftaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kursusId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaran"]>

  export type PendaftaranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kursusId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaran"]>

  export type PendaftaranSelectScalar = {
    id?: boolean
    userId?: boolean
    kursusId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PendaftaranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "kursusId" | "status" | "createdAt", ExtArgs["result"]["pendaftaran"]>
  export type PendaftaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
    Pembayaran?: boolean | Pendaftaran$PembayaranArgs<ExtArgs>
  }
  export type PendaftaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
  }
  export type PendaftaranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
  }

  export type $PendaftaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pendaftaran"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      kursus: Prisma.$KursusPayload<ExtArgs>
      Pembayaran: Prisma.$PembayaranPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      kursusId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["pendaftaran"]>
    composites: {}
  }

  type PendaftaranGetPayload<S extends boolean | null | undefined | PendaftaranDefaultArgs> = $Result.GetResult<Prisma.$PendaftaranPayload, S>

  type PendaftaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PendaftaranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendaftaranCountAggregateInputType | true
    }

  export interface PendaftaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pendaftaran'], meta: { name: 'Pendaftaran' } }
    /**
     * Find zero or one Pendaftaran that matches the filter.
     * @param {PendaftaranFindUniqueArgs} args - Arguments to find a Pendaftaran
     * @example
     * // Get one Pendaftaran
     * const pendaftaran = await prisma.pendaftaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendaftaranFindUniqueArgs>(args: SelectSubset<T, PendaftaranFindUniqueArgs<ExtArgs>>): Prisma__PendaftaranClient<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pendaftaran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PendaftaranFindUniqueOrThrowArgs} args - Arguments to find a Pendaftaran
     * @example
     * // Get one Pendaftaran
     * const pendaftaran = await prisma.pendaftaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendaftaranFindUniqueOrThrowArgs>(args: SelectSubset<T, PendaftaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendaftaranClient<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pendaftaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranFindFirstArgs} args - Arguments to find a Pendaftaran
     * @example
     * // Get one Pendaftaran
     * const pendaftaran = await prisma.pendaftaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendaftaranFindFirstArgs>(args?: SelectSubset<T, PendaftaranFindFirstArgs<ExtArgs>>): Prisma__PendaftaranClient<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pendaftaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranFindFirstOrThrowArgs} args - Arguments to find a Pendaftaran
     * @example
     * // Get one Pendaftaran
     * const pendaftaran = await prisma.pendaftaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendaftaranFindFirstOrThrowArgs>(args?: SelectSubset<T, PendaftaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendaftaranClient<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pendaftarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pendaftarans
     * const pendaftarans = await prisma.pendaftaran.findMany()
     * 
     * // Get first 10 Pendaftarans
     * const pendaftarans = await prisma.pendaftaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pendaftaranWithIdOnly = await prisma.pendaftaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PendaftaranFindManyArgs>(args?: SelectSubset<T, PendaftaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pendaftaran.
     * @param {PendaftaranCreateArgs} args - Arguments to create a Pendaftaran.
     * @example
     * // Create one Pendaftaran
     * const Pendaftaran = await prisma.pendaftaran.create({
     *   data: {
     *     // ... data to create a Pendaftaran
     *   }
     * })
     * 
     */
    create<T extends PendaftaranCreateArgs>(args: SelectSubset<T, PendaftaranCreateArgs<ExtArgs>>): Prisma__PendaftaranClient<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pendaftarans.
     * @param {PendaftaranCreateManyArgs} args - Arguments to create many Pendaftarans.
     * @example
     * // Create many Pendaftarans
     * const pendaftaran = await prisma.pendaftaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendaftaranCreateManyArgs>(args?: SelectSubset<T, PendaftaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pendaftarans and returns the data saved in the database.
     * @param {PendaftaranCreateManyAndReturnArgs} args - Arguments to create many Pendaftarans.
     * @example
     * // Create many Pendaftarans
     * const pendaftaran = await prisma.pendaftaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pendaftarans and only return the `id`
     * const pendaftaranWithIdOnly = await prisma.pendaftaran.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendaftaranCreateManyAndReturnArgs>(args?: SelectSubset<T, PendaftaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pendaftaran.
     * @param {PendaftaranDeleteArgs} args - Arguments to delete one Pendaftaran.
     * @example
     * // Delete one Pendaftaran
     * const Pendaftaran = await prisma.pendaftaran.delete({
     *   where: {
     *     // ... filter to delete one Pendaftaran
     *   }
     * })
     * 
     */
    delete<T extends PendaftaranDeleteArgs>(args: SelectSubset<T, PendaftaranDeleteArgs<ExtArgs>>): Prisma__PendaftaranClient<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pendaftaran.
     * @param {PendaftaranUpdateArgs} args - Arguments to update one Pendaftaran.
     * @example
     * // Update one Pendaftaran
     * const pendaftaran = await prisma.pendaftaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendaftaranUpdateArgs>(args: SelectSubset<T, PendaftaranUpdateArgs<ExtArgs>>): Prisma__PendaftaranClient<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pendaftarans.
     * @param {PendaftaranDeleteManyArgs} args - Arguments to filter Pendaftarans to delete.
     * @example
     * // Delete a few Pendaftarans
     * const { count } = await prisma.pendaftaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendaftaranDeleteManyArgs>(args?: SelectSubset<T, PendaftaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendaftarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pendaftarans
     * const pendaftaran = await prisma.pendaftaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendaftaranUpdateManyArgs>(args: SelectSubset<T, PendaftaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendaftarans and returns the data updated in the database.
     * @param {PendaftaranUpdateManyAndReturnArgs} args - Arguments to update many Pendaftarans.
     * @example
     * // Update many Pendaftarans
     * const pendaftaran = await prisma.pendaftaran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pendaftarans and only return the `id`
     * const pendaftaranWithIdOnly = await prisma.pendaftaran.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PendaftaranUpdateManyAndReturnArgs>(args: SelectSubset<T, PendaftaranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pendaftaran.
     * @param {PendaftaranUpsertArgs} args - Arguments to update or create a Pendaftaran.
     * @example
     * // Update or create a Pendaftaran
     * const pendaftaran = await prisma.pendaftaran.upsert({
     *   create: {
     *     // ... data to create a Pendaftaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pendaftaran we want to update
     *   }
     * })
     */
    upsert<T extends PendaftaranUpsertArgs>(args: SelectSubset<T, PendaftaranUpsertArgs<ExtArgs>>): Prisma__PendaftaranClient<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pendaftarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranCountArgs} args - Arguments to filter Pendaftarans to count.
     * @example
     * // Count the number of Pendaftarans
     * const count = await prisma.pendaftaran.count({
     *   where: {
     *     // ... the filter for the Pendaftarans we want to count
     *   }
     * })
    **/
    count<T extends PendaftaranCountArgs>(
      args?: Subset<T, PendaftaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendaftaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pendaftaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendaftaranAggregateArgs>(args: Subset<T, PendaftaranAggregateArgs>): Prisma.PrismaPromise<GetPendaftaranAggregateType<T>>

    /**
     * Group by Pendaftaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendaftaranGroupByArgs} args - Group by arguments.
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
      T extends PendaftaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendaftaranGroupByArgs['orderBy'] }
        : { orderBy?: PendaftaranGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PendaftaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendaftaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pendaftaran model
   */
  readonly fields: PendaftaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pendaftaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendaftaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kursus<T extends KursusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KursusDefaultArgs<ExtArgs>>): Prisma__KursusClient<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Pembayaran<T extends Pendaftaran$PembayaranArgs<ExtArgs> = {}>(args?: Subset<T, Pendaftaran$PembayaranArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pendaftaran model
   */
  interface PendaftaranFieldRefs {
    readonly id: FieldRef<"Pendaftaran", 'String'>
    readonly userId: FieldRef<"Pendaftaran", 'String'>
    readonly kursusId: FieldRef<"Pendaftaran", 'String'>
    readonly status: FieldRef<"Pendaftaran", 'String'>
    readonly createdAt: FieldRef<"Pendaftaran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pendaftaran findUnique
   */
  export type PendaftaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranInclude<ExtArgs> | null
    /**
     * Filter, which Pendaftaran to fetch.
     */
    where: PendaftaranWhereUniqueInput
  }

  /**
   * Pendaftaran findUniqueOrThrow
   */
  export type PendaftaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranInclude<ExtArgs> | null
    /**
     * Filter, which Pendaftaran to fetch.
     */
    where: PendaftaranWhereUniqueInput
  }

  /**
   * Pendaftaran findFirst
   */
  export type PendaftaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranInclude<ExtArgs> | null
    /**
     * Filter, which Pendaftaran to fetch.
     */
    where?: PendaftaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pendaftarans to fetch.
     */
    orderBy?: PendaftaranOrderByWithRelationInput | PendaftaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pendaftarans.
     */
    cursor?: PendaftaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pendaftarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pendaftarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pendaftarans.
     */
    distinct?: PendaftaranScalarFieldEnum | PendaftaranScalarFieldEnum[]
  }

  /**
   * Pendaftaran findFirstOrThrow
   */
  export type PendaftaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranInclude<ExtArgs> | null
    /**
     * Filter, which Pendaftaran to fetch.
     */
    where?: PendaftaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pendaftarans to fetch.
     */
    orderBy?: PendaftaranOrderByWithRelationInput | PendaftaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pendaftarans.
     */
    cursor?: PendaftaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pendaftarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pendaftarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pendaftarans.
     */
    distinct?: PendaftaranScalarFieldEnum | PendaftaranScalarFieldEnum[]
  }

  /**
   * Pendaftaran findMany
   */
  export type PendaftaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranInclude<ExtArgs> | null
    /**
     * Filter, which Pendaftarans to fetch.
     */
    where?: PendaftaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pendaftarans to fetch.
     */
    orderBy?: PendaftaranOrderByWithRelationInput | PendaftaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pendaftarans.
     */
    cursor?: PendaftaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pendaftarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pendaftarans.
     */
    skip?: number
    distinct?: PendaftaranScalarFieldEnum | PendaftaranScalarFieldEnum[]
  }

  /**
   * Pendaftaran create
   */
  export type PendaftaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranInclude<ExtArgs> | null
    /**
     * The data needed to create a Pendaftaran.
     */
    data: XOR<PendaftaranCreateInput, PendaftaranUncheckedCreateInput>
  }

  /**
   * Pendaftaran createMany
   */
  export type PendaftaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pendaftarans.
     */
    data: PendaftaranCreateManyInput | PendaftaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pendaftaran createManyAndReturn
   */
  export type PendaftaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * The data used to create many Pendaftarans.
     */
    data: PendaftaranCreateManyInput | PendaftaranCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pendaftaran update
   */
  export type PendaftaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranInclude<ExtArgs> | null
    /**
     * The data needed to update a Pendaftaran.
     */
    data: XOR<PendaftaranUpdateInput, PendaftaranUncheckedUpdateInput>
    /**
     * Choose, which Pendaftaran to update.
     */
    where: PendaftaranWhereUniqueInput
  }

  /**
   * Pendaftaran updateMany
   */
  export type PendaftaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pendaftarans.
     */
    data: XOR<PendaftaranUpdateManyMutationInput, PendaftaranUncheckedUpdateManyInput>
    /**
     * Filter which Pendaftarans to update
     */
    where?: PendaftaranWhereInput
    /**
     * Limit how many Pendaftarans to update.
     */
    limit?: number
  }

  /**
   * Pendaftaran updateManyAndReturn
   */
  export type PendaftaranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * The data used to update Pendaftarans.
     */
    data: XOR<PendaftaranUpdateManyMutationInput, PendaftaranUncheckedUpdateManyInput>
    /**
     * Filter which Pendaftarans to update
     */
    where?: PendaftaranWhereInput
    /**
     * Limit how many Pendaftarans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pendaftaran upsert
   */
  export type PendaftaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranInclude<ExtArgs> | null
    /**
     * The filter to search for the Pendaftaran to update in case it exists.
     */
    where: PendaftaranWhereUniqueInput
    /**
     * In case the Pendaftaran found by the `where` argument doesn't exist, create a new Pendaftaran with this data.
     */
    create: XOR<PendaftaranCreateInput, PendaftaranUncheckedCreateInput>
    /**
     * In case the Pendaftaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendaftaranUpdateInput, PendaftaranUncheckedUpdateInput>
  }

  /**
   * Pendaftaran delete
   */
  export type PendaftaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranInclude<ExtArgs> | null
    /**
     * Filter which Pendaftaran to delete.
     */
    where: PendaftaranWhereUniqueInput
  }

  /**
   * Pendaftaran deleteMany
   */
  export type PendaftaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pendaftarans to delete
     */
    where?: PendaftaranWhereInput
    /**
     * Limit how many Pendaftarans to delete.
     */
    limit?: number
  }

  /**
   * Pendaftaran.Pembayaran
   */
  export type Pendaftaran$PembayaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    where?: PembayaranWhereInput
  }

  /**
   * Pendaftaran without action
   */
  export type PendaftaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pendaftaran
     */
    select?: PendaftaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pendaftaran
     */
    omit?: PendaftaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendaftaranInclude<ExtArgs> | null
  }


  /**
   * Model Pembayaran
   */

  export type AggregatePembayaran = {
    _count: PembayaranCountAggregateOutputType | null
    _avg: PembayaranAvgAggregateOutputType | null
    _sum: PembayaranSumAggregateOutputType | null
    _min: PembayaranMinAggregateOutputType | null
    _max: PembayaranMaxAggregateOutputType | null
  }

  export type PembayaranAvgAggregateOutputType = {
    jumlah: number | null
  }

  export type PembayaranSumAggregateOutputType = {
    jumlah: number | null
  }

  export type PembayaranMinAggregateOutputType = {
    id: string | null
    pendaftaranId: string | null
    metode: string | null
    jumlah: number | null
    buktiBayar: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PembayaranMaxAggregateOutputType = {
    id: string | null
    pendaftaranId: string | null
    metode: string | null
    jumlah: number | null
    buktiBayar: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PembayaranCountAggregateOutputType = {
    id: number
    pendaftaranId: number
    metode: number
    jumlah: number
    buktiBayar: number
    status: number
    createdAt: number
    _all: number
  }


  export type PembayaranAvgAggregateInputType = {
    jumlah?: true
  }

  export type PembayaranSumAggregateInputType = {
    jumlah?: true
  }

  export type PembayaranMinAggregateInputType = {
    id?: true
    pendaftaranId?: true
    metode?: true
    jumlah?: true
    buktiBayar?: true
    status?: true
    createdAt?: true
  }

  export type PembayaranMaxAggregateInputType = {
    id?: true
    pendaftaranId?: true
    metode?: true
    jumlah?: true
    buktiBayar?: true
    status?: true
    createdAt?: true
  }

  export type PembayaranCountAggregateInputType = {
    id?: true
    pendaftaranId?: true
    metode?: true
    jumlah?: true
    buktiBayar?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PembayaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembayaran to aggregate.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pembayarans
    **/
    _count?: true | PembayaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PembayaranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PembayaranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PembayaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PembayaranMaxAggregateInputType
  }

  export type GetPembayaranAggregateType<T extends PembayaranAggregateArgs> = {
        [P in keyof T & keyof AggregatePembayaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePembayaran[P]>
      : GetScalarType<T[P], AggregatePembayaran[P]>
  }




  export type PembayaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PembayaranWhereInput
    orderBy?: PembayaranOrderByWithAggregationInput | PembayaranOrderByWithAggregationInput[]
    by: PembayaranScalarFieldEnum[] | PembayaranScalarFieldEnum
    having?: PembayaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PembayaranCountAggregateInputType | true
    _avg?: PembayaranAvgAggregateInputType
    _sum?: PembayaranSumAggregateInputType
    _min?: PembayaranMinAggregateInputType
    _max?: PembayaranMaxAggregateInputType
  }

  export type PembayaranGroupByOutputType = {
    id: string
    pendaftaranId: string
    metode: string
    jumlah: number
    buktiBayar: string
    status: string
    createdAt: Date
    _count: PembayaranCountAggregateOutputType | null
    _avg: PembayaranAvgAggregateOutputType | null
    _sum: PembayaranSumAggregateOutputType | null
    _min: PembayaranMinAggregateOutputType | null
    _max: PembayaranMaxAggregateOutputType | null
  }

  type GetPembayaranGroupByPayload<T extends PembayaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PembayaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PembayaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PembayaranGroupByOutputType[P]>
            : GetScalarType<T[P], PembayaranGroupByOutputType[P]>
        }
      >
    >


  export type PembayaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pendaftaranId?: boolean
    metode?: boolean
    jumlah?: boolean
    buktiBayar?: boolean
    status?: boolean
    createdAt?: boolean
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembayaran"]>

  export type PembayaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pendaftaranId?: boolean
    metode?: boolean
    jumlah?: boolean
    buktiBayar?: boolean
    status?: boolean
    createdAt?: boolean
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembayaran"]>

  export type PembayaranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pendaftaranId?: boolean
    metode?: boolean
    jumlah?: boolean
    buktiBayar?: boolean
    status?: boolean
    createdAt?: boolean
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pembayaran"]>

  export type PembayaranSelectScalar = {
    id?: boolean
    pendaftaranId?: boolean
    metode?: boolean
    jumlah?: boolean
    buktiBayar?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PembayaranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pendaftaranId" | "metode" | "jumlah" | "buktiBayar" | "status" | "createdAt", ExtArgs["result"]["pembayaran"]>
  export type PembayaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }
  export type PembayaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }
  export type PembayaranIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }

  export type $PembayaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pembayaran"
    objects: {
      pendaftaran: Prisma.$PendaftaranPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pendaftaranId: string
      metode: string
      jumlah: number
      buktiBayar: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["pembayaran"]>
    composites: {}
  }

  type PembayaranGetPayload<S extends boolean | null | undefined | PembayaranDefaultArgs> = $Result.GetResult<Prisma.$PembayaranPayload, S>

  type PembayaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PembayaranFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PembayaranCountAggregateInputType | true
    }

  export interface PembayaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pembayaran'], meta: { name: 'Pembayaran' } }
    /**
     * Find zero or one Pembayaran that matches the filter.
     * @param {PembayaranFindUniqueArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PembayaranFindUniqueArgs>(args: SelectSubset<T, PembayaranFindUniqueArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pembayaran that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PembayaranFindUniqueOrThrowArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PembayaranFindUniqueOrThrowArgs>(args: SelectSubset<T, PembayaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembayaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranFindFirstArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PembayaranFindFirstArgs>(args?: SelectSubset<T, PembayaranFindFirstArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pembayaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranFindFirstOrThrowArgs} args - Arguments to find a Pembayaran
     * @example
     * // Get one Pembayaran
     * const pembayaran = await prisma.pembayaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PembayaranFindFirstOrThrowArgs>(args?: SelectSubset<T, PembayaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pembayarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pembayarans
     * const pembayarans = await prisma.pembayaran.findMany()
     * 
     * // Get first 10 Pembayarans
     * const pembayarans = await prisma.pembayaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pembayaranWithIdOnly = await prisma.pembayaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PembayaranFindManyArgs>(args?: SelectSubset<T, PembayaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pembayaran.
     * @param {PembayaranCreateArgs} args - Arguments to create a Pembayaran.
     * @example
     * // Create one Pembayaran
     * const Pembayaran = await prisma.pembayaran.create({
     *   data: {
     *     // ... data to create a Pembayaran
     *   }
     * })
     * 
     */
    create<T extends PembayaranCreateArgs>(args: SelectSubset<T, PembayaranCreateArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pembayarans.
     * @param {PembayaranCreateManyArgs} args - Arguments to create many Pembayarans.
     * @example
     * // Create many Pembayarans
     * const pembayaran = await prisma.pembayaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PembayaranCreateManyArgs>(args?: SelectSubset<T, PembayaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pembayarans and returns the data saved in the database.
     * @param {PembayaranCreateManyAndReturnArgs} args - Arguments to create many Pembayarans.
     * @example
     * // Create many Pembayarans
     * const pembayaran = await prisma.pembayaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pembayarans and only return the `id`
     * const pembayaranWithIdOnly = await prisma.pembayaran.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PembayaranCreateManyAndReturnArgs>(args?: SelectSubset<T, PembayaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pembayaran.
     * @param {PembayaranDeleteArgs} args - Arguments to delete one Pembayaran.
     * @example
     * // Delete one Pembayaran
     * const Pembayaran = await prisma.pembayaran.delete({
     *   where: {
     *     // ... filter to delete one Pembayaran
     *   }
     * })
     * 
     */
    delete<T extends PembayaranDeleteArgs>(args: SelectSubset<T, PembayaranDeleteArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pembayaran.
     * @param {PembayaranUpdateArgs} args - Arguments to update one Pembayaran.
     * @example
     * // Update one Pembayaran
     * const pembayaran = await prisma.pembayaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PembayaranUpdateArgs>(args: SelectSubset<T, PembayaranUpdateArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pembayarans.
     * @param {PembayaranDeleteManyArgs} args - Arguments to filter Pembayarans to delete.
     * @example
     * // Delete a few Pembayarans
     * const { count } = await prisma.pembayaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PembayaranDeleteManyArgs>(args?: SelectSubset<T, PembayaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembayarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pembayarans
     * const pembayaran = await prisma.pembayaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PembayaranUpdateManyArgs>(args: SelectSubset<T, PembayaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pembayarans and returns the data updated in the database.
     * @param {PembayaranUpdateManyAndReturnArgs} args - Arguments to update many Pembayarans.
     * @example
     * // Update many Pembayarans
     * const pembayaran = await prisma.pembayaran.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pembayarans and only return the `id`
     * const pembayaranWithIdOnly = await prisma.pembayaran.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PembayaranUpdateManyAndReturnArgs>(args: SelectSubset<T, PembayaranUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pembayaran.
     * @param {PembayaranUpsertArgs} args - Arguments to update or create a Pembayaran.
     * @example
     * // Update or create a Pembayaran
     * const pembayaran = await prisma.pembayaran.upsert({
     *   create: {
     *     // ... data to create a Pembayaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pembayaran we want to update
     *   }
     * })
     */
    upsert<T extends PembayaranUpsertArgs>(args: SelectSubset<T, PembayaranUpsertArgs<ExtArgs>>): Prisma__PembayaranClient<$Result.GetResult<Prisma.$PembayaranPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pembayarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranCountArgs} args - Arguments to filter Pembayarans to count.
     * @example
     * // Count the number of Pembayarans
     * const count = await prisma.pembayaran.count({
     *   where: {
     *     // ... the filter for the Pembayarans we want to count
     *   }
     * })
    **/
    count<T extends PembayaranCountArgs>(
      args?: Subset<T, PembayaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PembayaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pembayaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PembayaranAggregateArgs>(args: Subset<T, PembayaranAggregateArgs>): Prisma.PrismaPromise<GetPembayaranAggregateType<T>>

    /**
     * Group by Pembayaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PembayaranGroupByArgs} args - Group by arguments.
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
      T extends PembayaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PembayaranGroupByArgs['orderBy'] }
        : { orderBy?: PembayaranGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PembayaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPembayaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pembayaran model
   */
  readonly fields: PembayaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pembayaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PembayaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pendaftaran<T extends PendaftaranDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PendaftaranDefaultArgs<ExtArgs>>): Prisma__PendaftaranClient<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pembayaran model
   */
  interface PembayaranFieldRefs {
    readonly id: FieldRef<"Pembayaran", 'String'>
    readonly pendaftaranId: FieldRef<"Pembayaran", 'String'>
    readonly metode: FieldRef<"Pembayaran", 'String'>
    readonly jumlah: FieldRef<"Pembayaran", 'Int'>
    readonly buktiBayar: FieldRef<"Pembayaran", 'String'>
    readonly status: FieldRef<"Pembayaran", 'String'>
    readonly createdAt: FieldRef<"Pembayaran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pembayaran findUnique
   */
  export type PembayaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran findUniqueOrThrow
   */
  export type PembayaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran findFirst
   */
  export type PembayaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembayarans.
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembayarans.
     */
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * Pembayaran findFirstOrThrow
   */
  export type PembayaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayaran to fetch.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pembayarans.
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pembayarans.
     */
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * Pembayaran findMany
   */
  export type PembayaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter, which Pembayarans to fetch.
     */
    where?: PembayaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pembayarans to fetch.
     */
    orderBy?: PembayaranOrderByWithRelationInput | PembayaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pembayarans.
     */
    cursor?: PembayaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pembayarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pembayarans.
     */
    skip?: number
    distinct?: PembayaranScalarFieldEnum | PembayaranScalarFieldEnum[]
  }

  /**
   * Pembayaran create
   */
  export type PembayaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * The data needed to create a Pembayaran.
     */
    data: XOR<PembayaranCreateInput, PembayaranUncheckedCreateInput>
  }

  /**
   * Pembayaran createMany
   */
  export type PembayaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pembayarans.
     */
    data: PembayaranCreateManyInput | PembayaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pembayaran createManyAndReturn
   */
  export type PembayaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * The data used to create many Pembayarans.
     */
    data: PembayaranCreateManyInput | PembayaranCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pembayaran update
   */
  export type PembayaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * The data needed to update a Pembayaran.
     */
    data: XOR<PembayaranUpdateInput, PembayaranUncheckedUpdateInput>
    /**
     * Choose, which Pembayaran to update.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran updateMany
   */
  export type PembayaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pembayarans.
     */
    data: XOR<PembayaranUpdateManyMutationInput, PembayaranUncheckedUpdateManyInput>
    /**
     * Filter which Pembayarans to update
     */
    where?: PembayaranWhereInput
    /**
     * Limit how many Pembayarans to update.
     */
    limit?: number
  }

  /**
   * Pembayaran updateManyAndReturn
   */
  export type PembayaranUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * The data used to update Pembayarans.
     */
    data: XOR<PembayaranUpdateManyMutationInput, PembayaranUncheckedUpdateManyInput>
    /**
     * Filter which Pembayarans to update
     */
    where?: PembayaranWhereInput
    /**
     * Limit how many Pembayarans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pembayaran upsert
   */
  export type PembayaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * The filter to search for the Pembayaran to update in case it exists.
     */
    where: PembayaranWhereUniqueInput
    /**
     * In case the Pembayaran found by the `where` argument doesn't exist, create a new Pembayaran with this data.
     */
    create: XOR<PembayaranCreateInput, PembayaranUncheckedCreateInput>
    /**
     * In case the Pembayaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PembayaranUpdateInput, PembayaranUncheckedUpdateInput>
  }

  /**
   * Pembayaran delete
   */
  export type PembayaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
    /**
     * Filter which Pembayaran to delete.
     */
    where: PembayaranWhereUniqueInput
  }

  /**
   * Pembayaran deleteMany
   */
  export type PembayaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pembayarans to delete
     */
    where?: PembayaranWhereInput
    /**
     * Limit how many Pembayarans to delete.
     */
    limit?: number
  }

  /**
   * Pembayaran without action
   */
  export type PembayaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pembayaran
     */
    select?: PembayaranSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pembayaran
     */
    omit?: PembayaranOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PembayaranInclude<ExtArgs> | null
  }


  /**
   * Model HistoriKursus
   */

  export type AggregateHistoriKursus = {
    _count: HistoriKursusCountAggregateOutputType | null
    _min: HistoriKursusMinAggregateOutputType | null
    _max: HistoriKursusMaxAggregateOutputType | null
  }

  export type HistoriKursusMinAggregateOutputType = {
    id: string | null
    userId: string | null
    kursusId: string | null
    tanggalSelesai: string | null
    sertifikat: string | null
    keterangan: string | null
  }

  export type HistoriKursusMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    kursusId: string | null
    tanggalSelesai: string | null
    sertifikat: string | null
    keterangan: string | null
  }

  export type HistoriKursusCountAggregateOutputType = {
    id: number
    userId: number
    kursusId: number
    tanggalSelesai: number
    sertifikat: number
    keterangan: number
    _all: number
  }


  export type HistoriKursusMinAggregateInputType = {
    id?: true
    userId?: true
    kursusId?: true
    tanggalSelesai?: true
    sertifikat?: true
    keterangan?: true
  }

  export type HistoriKursusMaxAggregateInputType = {
    id?: true
    userId?: true
    kursusId?: true
    tanggalSelesai?: true
    sertifikat?: true
    keterangan?: true
  }

  export type HistoriKursusCountAggregateInputType = {
    id?: true
    userId?: true
    kursusId?: true
    tanggalSelesai?: true
    sertifikat?: true
    keterangan?: true
    _all?: true
  }

  export type HistoriKursusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriKursus to aggregate.
     */
    where?: HistoriKursusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriKursuses to fetch.
     */
    orderBy?: HistoriKursusOrderByWithRelationInput | HistoriKursusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoriKursusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriKursuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriKursuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoriKursuses
    **/
    _count?: true | HistoriKursusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoriKursusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoriKursusMaxAggregateInputType
  }

  export type GetHistoriKursusAggregateType<T extends HistoriKursusAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoriKursus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoriKursus[P]>
      : GetScalarType<T[P], AggregateHistoriKursus[P]>
  }




  export type HistoriKursusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriKursusWhereInput
    orderBy?: HistoriKursusOrderByWithAggregationInput | HistoriKursusOrderByWithAggregationInput[]
    by: HistoriKursusScalarFieldEnum[] | HistoriKursusScalarFieldEnum
    having?: HistoriKursusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoriKursusCountAggregateInputType | true
    _min?: HistoriKursusMinAggregateInputType
    _max?: HistoriKursusMaxAggregateInputType
  }

  export type HistoriKursusGroupByOutputType = {
    id: string
    userId: string
    kursusId: string
    tanggalSelesai: string
    sertifikat: string | null
    keterangan: string | null
    _count: HistoriKursusCountAggregateOutputType | null
    _min: HistoriKursusMinAggregateOutputType | null
    _max: HistoriKursusMaxAggregateOutputType | null
  }

  type GetHistoriKursusGroupByPayload<T extends HistoriKursusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoriKursusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoriKursusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoriKursusGroupByOutputType[P]>
            : GetScalarType<T[P], HistoriKursusGroupByOutputType[P]>
        }
      >
    >


  export type HistoriKursusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kursusId?: boolean
    tanggalSelesai?: boolean
    sertifikat?: boolean
    keterangan?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiKursus"]>

  export type HistoriKursusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kursusId?: boolean
    tanggalSelesai?: boolean
    sertifikat?: boolean
    keterangan?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiKursus"]>

  export type HistoriKursusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kursusId?: boolean
    tanggalSelesai?: boolean
    sertifikat?: boolean
    keterangan?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiKursus"]>

  export type HistoriKursusSelectScalar = {
    id?: boolean
    userId?: boolean
    kursusId?: boolean
    tanggalSelesai?: boolean
    sertifikat?: boolean
    keterangan?: boolean
  }

  export type HistoriKursusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "kursusId" | "tanggalSelesai" | "sertifikat" | "keterangan", ExtArgs["result"]["historiKursus"]>
  export type HistoriKursusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
  }
  export type HistoriKursusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
  }
  export type HistoriKursusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
  }

  export type $HistoriKursusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoriKursus"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      kursus: Prisma.$KursusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      kursusId: string
      tanggalSelesai: string
      sertifikat: string | null
      keterangan: string | null
    }, ExtArgs["result"]["historiKursus"]>
    composites: {}
  }

  type HistoriKursusGetPayload<S extends boolean | null | undefined | HistoriKursusDefaultArgs> = $Result.GetResult<Prisma.$HistoriKursusPayload, S>

  type HistoriKursusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoriKursusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoriKursusCountAggregateInputType | true
    }

  export interface HistoriKursusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoriKursus'], meta: { name: 'HistoriKursus' } }
    /**
     * Find zero or one HistoriKursus that matches the filter.
     * @param {HistoriKursusFindUniqueArgs} args - Arguments to find a HistoriKursus
     * @example
     * // Get one HistoriKursus
     * const historiKursus = await prisma.historiKursus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoriKursusFindUniqueArgs>(args: SelectSubset<T, HistoriKursusFindUniqueArgs<ExtArgs>>): Prisma__HistoriKursusClient<$Result.GetResult<Prisma.$HistoriKursusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoriKursus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoriKursusFindUniqueOrThrowArgs} args - Arguments to find a HistoriKursus
     * @example
     * // Get one HistoriKursus
     * const historiKursus = await prisma.historiKursus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoriKursusFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoriKursusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoriKursusClient<$Result.GetResult<Prisma.$HistoriKursusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoriKursus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriKursusFindFirstArgs} args - Arguments to find a HistoriKursus
     * @example
     * // Get one HistoriKursus
     * const historiKursus = await prisma.historiKursus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoriKursusFindFirstArgs>(args?: SelectSubset<T, HistoriKursusFindFirstArgs<ExtArgs>>): Prisma__HistoriKursusClient<$Result.GetResult<Prisma.$HistoriKursusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoriKursus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriKursusFindFirstOrThrowArgs} args - Arguments to find a HistoriKursus
     * @example
     * // Get one HistoriKursus
     * const historiKursus = await prisma.historiKursus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoriKursusFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoriKursusFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoriKursusClient<$Result.GetResult<Prisma.$HistoriKursusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoriKursuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriKursusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoriKursuses
     * const historiKursuses = await prisma.historiKursus.findMany()
     * 
     * // Get first 10 HistoriKursuses
     * const historiKursuses = await prisma.historiKursus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historiKursusWithIdOnly = await prisma.historiKursus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoriKursusFindManyArgs>(args?: SelectSubset<T, HistoriKursusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriKursusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoriKursus.
     * @param {HistoriKursusCreateArgs} args - Arguments to create a HistoriKursus.
     * @example
     * // Create one HistoriKursus
     * const HistoriKursus = await prisma.historiKursus.create({
     *   data: {
     *     // ... data to create a HistoriKursus
     *   }
     * })
     * 
     */
    create<T extends HistoriKursusCreateArgs>(args: SelectSubset<T, HistoriKursusCreateArgs<ExtArgs>>): Prisma__HistoriKursusClient<$Result.GetResult<Prisma.$HistoriKursusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoriKursuses.
     * @param {HistoriKursusCreateManyArgs} args - Arguments to create many HistoriKursuses.
     * @example
     * // Create many HistoriKursuses
     * const historiKursus = await prisma.historiKursus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoriKursusCreateManyArgs>(args?: SelectSubset<T, HistoriKursusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoriKursuses and returns the data saved in the database.
     * @param {HistoriKursusCreateManyAndReturnArgs} args - Arguments to create many HistoriKursuses.
     * @example
     * // Create many HistoriKursuses
     * const historiKursus = await prisma.historiKursus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoriKursuses and only return the `id`
     * const historiKursusWithIdOnly = await prisma.historiKursus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoriKursusCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoriKursusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriKursusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoriKursus.
     * @param {HistoriKursusDeleteArgs} args - Arguments to delete one HistoriKursus.
     * @example
     * // Delete one HistoriKursus
     * const HistoriKursus = await prisma.historiKursus.delete({
     *   where: {
     *     // ... filter to delete one HistoriKursus
     *   }
     * })
     * 
     */
    delete<T extends HistoriKursusDeleteArgs>(args: SelectSubset<T, HistoriKursusDeleteArgs<ExtArgs>>): Prisma__HistoriKursusClient<$Result.GetResult<Prisma.$HistoriKursusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoriKursus.
     * @param {HistoriKursusUpdateArgs} args - Arguments to update one HistoriKursus.
     * @example
     * // Update one HistoriKursus
     * const historiKursus = await prisma.historiKursus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoriKursusUpdateArgs>(args: SelectSubset<T, HistoriKursusUpdateArgs<ExtArgs>>): Prisma__HistoriKursusClient<$Result.GetResult<Prisma.$HistoriKursusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoriKursuses.
     * @param {HistoriKursusDeleteManyArgs} args - Arguments to filter HistoriKursuses to delete.
     * @example
     * // Delete a few HistoriKursuses
     * const { count } = await prisma.historiKursus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoriKursusDeleteManyArgs>(args?: SelectSubset<T, HistoriKursusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoriKursuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriKursusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoriKursuses
     * const historiKursus = await prisma.historiKursus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoriKursusUpdateManyArgs>(args: SelectSubset<T, HistoriKursusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoriKursuses and returns the data updated in the database.
     * @param {HistoriKursusUpdateManyAndReturnArgs} args - Arguments to update many HistoriKursuses.
     * @example
     * // Update many HistoriKursuses
     * const historiKursus = await prisma.historiKursus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoriKursuses and only return the `id`
     * const historiKursusWithIdOnly = await prisma.historiKursus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HistoriKursusUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoriKursusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriKursusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoriKursus.
     * @param {HistoriKursusUpsertArgs} args - Arguments to update or create a HistoriKursus.
     * @example
     * // Update or create a HistoriKursus
     * const historiKursus = await prisma.historiKursus.upsert({
     *   create: {
     *     // ... data to create a HistoriKursus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoriKursus we want to update
     *   }
     * })
     */
    upsert<T extends HistoriKursusUpsertArgs>(args: SelectSubset<T, HistoriKursusUpsertArgs<ExtArgs>>): Prisma__HistoriKursusClient<$Result.GetResult<Prisma.$HistoriKursusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoriKursuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriKursusCountArgs} args - Arguments to filter HistoriKursuses to count.
     * @example
     * // Count the number of HistoriKursuses
     * const count = await prisma.historiKursus.count({
     *   where: {
     *     // ... the filter for the HistoriKursuses we want to count
     *   }
     * })
    **/
    count<T extends HistoriKursusCountArgs>(
      args?: Subset<T, HistoriKursusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoriKursusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoriKursus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriKursusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoriKursusAggregateArgs>(args: Subset<T, HistoriKursusAggregateArgs>): Prisma.PrismaPromise<GetHistoriKursusAggregateType<T>>

    /**
     * Group by HistoriKursus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriKursusGroupByArgs} args - Group by arguments.
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
      T extends HistoriKursusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoriKursusGroupByArgs['orderBy'] }
        : { orderBy?: HistoriKursusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoriKursusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoriKursusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoriKursus model
   */
  readonly fields: HistoriKursusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoriKursus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoriKursusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    kursus<T extends KursusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KursusDefaultArgs<ExtArgs>>): Prisma__KursusClient<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistoriKursus model
   */
  interface HistoriKursusFieldRefs {
    readonly id: FieldRef<"HistoriKursus", 'String'>
    readonly userId: FieldRef<"HistoriKursus", 'String'>
    readonly kursusId: FieldRef<"HistoriKursus", 'String'>
    readonly tanggalSelesai: FieldRef<"HistoriKursus", 'String'>
    readonly sertifikat: FieldRef<"HistoriKursus", 'String'>
    readonly keterangan: FieldRef<"HistoriKursus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistoriKursus findUnique
   */
  export type HistoriKursusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusInclude<ExtArgs> | null
    /**
     * Filter, which HistoriKursus to fetch.
     */
    where: HistoriKursusWhereUniqueInput
  }

  /**
   * HistoriKursus findUniqueOrThrow
   */
  export type HistoriKursusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusInclude<ExtArgs> | null
    /**
     * Filter, which HistoriKursus to fetch.
     */
    where: HistoriKursusWhereUniqueInput
  }

  /**
   * HistoriKursus findFirst
   */
  export type HistoriKursusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusInclude<ExtArgs> | null
    /**
     * Filter, which HistoriKursus to fetch.
     */
    where?: HistoriKursusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriKursuses to fetch.
     */
    orderBy?: HistoriKursusOrderByWithRelationInput | HistoriKursusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriKursuses.
     */
    cursor?: HistoriKursusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriKursuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriKursuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriKursuses.
     */
    distinct?: HistoriKursusScalarFieldEnum | HistoriKursusScalarFieldEnum[]
  }

  /**
   * HistoriKursus findFirstOrThrow
   */
  export type HistoriKursusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusInclude<ExtArgs> | null
    /**
     * Filter, which HistoriKursus to fetch.
     */
    where?: HistoriKursusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriKursuses to fetch.
     */
    orderBy?: HistoriKursusOrderByWithRelationInput | HistoriKursusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriKursuses.
     */
    cursor?: HistoriKursusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriKursuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriKursuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriKursuses.
     */
    distinct?: HistoriKursusScalarFieldEnum | HistoriKursusScalarFieldEnum[]
  }

  /**
   * HistoriKursus findMany
   */
  export type HistoriKursusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusInclude<ExtArgs> | null
    /**
     * Filter, which HistoriKursuses to fetch.
     */
    where?: HistoriKursusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriKursuses to fetch.
     */
    orderBy?: HistoriKursusOrderByWithRelationInput | HistoriKursusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoriKursuses.
     */
    cursor?: HistoriKursusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriKursuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriKursuses.
     */
    skip?: number
    distinct?: HistoriKursusScalarFieldEnum | HistoriKursusScalarFieldEnum[]
  }

  /**
   * HistoriKursus create
   */
  export type HistoriKursusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoriKursus.
     */
    data: XOR<HistoriKursusCreateInput, HistoriKursusUncheckedCreateInput>
  }

  /**
   * HistoriKursus createMany
   */
  export type HistoriKursusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoriKursuses.
     */
    data: HistoriKursusCreateManyInput | HistoriKursusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoriKursus createManyAndReturn
   */
  export type HistoriKursusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * The data used to create many HistoriKursuses.
     */
    data: HistoriKursusCreateManyInput | HistoriKursusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoriKursus update
   */
  export type HistoriKursusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoriKursus.
     */
    data: XOR<HistoriKursusUpdateInput, HistoriKursusUncheckedUpdateInput>
    /**
     * Choose, which HistoriKursus to update.
     */
    where: HistoriKursusWhereUniqueInput
  }

  /**
   * HistoriKursus updateMany
   */
  export type HistoriKursusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoriKursuses.
     */
    data: XOR<HistoriKursusUpdateManyMutationInput, HistoriKursusUncheckedUpdateManyInput>
    /**
     * Filter which HistoriKursuses to update
     */
    where?: HistoriKursusWhereInput
    /**
     * Limit how many HistoriKursuses to update.
     */
    limit?: number
  }

  /**
   * HistoriKursus updateManyAndReturn
   */
  export type HistoriKursusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * The data used to update HistoriKursuses.
     */
    data: XOR<HistoriKursusUpdateManyMutationInput, HistoriKursusUncheckedUpdateManyInput>
    /**
     * Filter which HistoriKursuses to update
     */
    where?: HistoriKursusWhereInput
    /**
     * Limit how many HistoriKursuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoriKursus upsert
   */
  export type HistoriKursusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoriKursus to update in case it exists.
     */
    where: HistoriKursusWhereUniqueInput
    /**
     * In case the HistoriKursus found by the `where` argument doesn't exist, create a new HistoriKursus with this data.
     */
    create: XOR<HistoriKursusCreateInput, HistoriKursusUncheckedCreateInput>
    /**
     * In case the HistoriKursus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoriKursusUpdateInput, HistoriKursusUncheckedUpdateInput>
  }

  /**
   * HistoriKursus delete
   */
  export type HistoriKursusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusInclude<ExtArgs> | null
    /**
     * Filter which HistoriKursus to delete.
     */
    where: HistoriKursusWhereUniqueInput
  }

  /**
   * HistoriKursus deleteMany
   */
  export type HistoriKursusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriKursuses to delete
     */
    where?: HistoriKursusWhereInput
    /**
     * Limit how many HistoriKursuses to delete.
     */
    limit?: number
  }

  /**
   * HistoriKursus without action
   */
  export type HistoriKursusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriKursus
     */
    select?: HistoriKursusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriKursus
     */
    omit?: HistoriKursusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriKursusInclude<ExtArgs> | null
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


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    nik: 'nik',
    jenisKelamin: 'jenisKelamin',
    tempatLahir: 'tempatLahir',
    tanggalLahir: 'tanggalLahir',
    mediaSosial: 'mediaSosial',
    noHp: 'noHp',
    email: 'email',
    agama: 'agama',
    jurusan: 'jurusan',
    tahunAkademik: 'tahunAkademik',
    password: 'password',
    role: 'role',
    keahlian: 'keahlian',
    jabatan: 'jabatan',
    image: 'image',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KursusScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    harga: 'harga',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    instrukturId: 'instrukturId'
  };

  export type KursusScalarFieldEnum = (typeof KursusScalarFieldEnum)[keyof typeof KursusScalarFieldEnum]


  export const PendaftaranScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    kursusId: 'kursusId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PendaftaranScalarFieldEnum = (typeof PendaftaranScalarFieldEnum)[keyof typeof PendaftaranScalarFieldEnum]


  export const PembayaranScalarFieldEnum: {
    id: 'id',
    pendaftaranId: 'pendaftaranId',
    metode: 'metode',
    jumlah: 'jumlah',
    buktiBayar: 'buktiBayar',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PembayaranScalarFieldEnum = (typeof PembayaranScalarFieldEnum)[keyof typeof PembayaranScalarFieldEnum]


  export const HistoriKursusScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    kursusId: 'kursusId',
    tanggalSelesai: 'tanggalSelesai',
    sertifikat: 'sertifikat',
    keterangan: 'keterangan'
  };

  export type HistoriKursusScalarFieldEnum = (typeof HistoriKursusScalarFieldEnum)[keyof typeof HistoriKursusScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    nama?: StringFilter<"User"> | string
    nik?: StringNullableFilter<"User"> | string | null
    jenisKelamin?: StringFilter<"User"> | string
    tempatLahir?: StringNullableFilter<"User"> | string | null
    tanggalLahir?: StringNullableFilter<"User"> | string | null
    mediaSosial?: StringNullableFilter<"User"> | string | null
    noHp?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    agama?: StringNullableFilter<"User"> | string | null
    jurusan?: StringNullableFilter<"User"> | string | null
    tahunAkademik?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    keahlian?: StringNullableFilter<"User"> | string | null
    jabatan?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    kursus?: KursusListRelationFilter
    Account?: AccountListRelationFilter
    Session?: SessionListRelationFilter
    Pendaftaran?: PendaftaranListRelationFilter
    HistoriKursus?: HistoriKursusListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    nik?: SortOrderInput | SortOrder
    jenisKelamin?: SortOrder
    tempatLahir?: SortOrderInput | SortOrder
    tanggalLahir?: SortOrderInput | SortOrder
    mediaSosial?: SortOrderInput | SortOrder
    noHp?: SortOrder
    email?: SortOrder
    agama?: SortOrderInput | SortOrder
    jurusan?: SortOrderInput | SortOrder
    tahunAkademik?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    keahlian?: SortOrderInput | SortOrder
    jabatan?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kursus?: KursusOrderByRelationAggregateInput
    Account?: AccountOrderByRelationAggregateInput
    Session?: SessionOrderByRelationAggregateInput
    Pendaftaran?: PendaftaranOrderByRelationAggregateInput
    HistoriKursus?: HistoriKursusOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nik?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    jenisKelamin?: StringFilter<"User"> | string
    tempatLahir?: StringNullableFilter<"User"> | string | null
    tanggalLahir?: StringNullableFilter<"User"> | string | null
    mediaSosial?: StringNullableFilter<"User"> | string | null
    noHp?: StringFilter<"User"> | string
    agama?: StringNullableFilter<"User"> | string | null
    jurusan?: StringNullableFilter<"User"> | string | null
    tahunAkademik?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    keahlian?: StringNullableFilter<"User"> | string | null
    jabatan?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    kursus?: KursusListRelationFilter
    Account?: AccountListRelationFilter
    Session?: SessionListRelationFilter
    Pendaftaran?: PendaftaranListRelationFilter
    HistoriKursus?: HistoriKursusListRelationFilter
  }, "id" | "nik" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    nik?: SortOrderInput | SortOrder
    jenisKelamin?: SortOrder
    tempatLahir?: SortOrderInput | SortOrder
    tanggalLahir?: SortOrderInput | SortOrder
    mediaSosial?: SortOrderInput | SortOrder
    noHp?: SortOrder
    email?: SortOrder
    agama?: SortOrderInput | SortOrder
    jurusan?: SortOrderInput | SortOrder
    tahunAkademik?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    keahlian?: SortOrderInput | SortOrder
    jabatan?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    nama?: StringWithAggregatesFilter<"User"> | string
    nik?: StringNullableWithAggregatesFilter<"User"> | string | null
    jenisKelamin?: StringWithAggregatesFilter<"User"> | string
    tempatLahir?: StringNullableWithAggregatesFilter<"User"> | string | null
    tanggalLahir?: StringNullableWithAggregatesFilter<"User"> | string | null
    mediaSosial?: StringNullableWithAggregatesFilter<"User"> | string | null
    noHp?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    agama?: StringNullableWithAggregatesFilter<"User"> | string | null
    jurusan?: StringNullableWithAggregatesFilter<"User"> | string | null
    tahunAkademik?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    keahlian?: StringNullableWithAggregatesFilter<"User"> | string | null
    jabatan?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type KursusWhereInput = {
    AND?: KursusWhereInput | KursusWhereInput[]
    OR?: KursusWhereInput[]
    NOT?: KursusWhereInput | KursusWhereInput[]
    id?: StringFilter<"Kursus"> | string
    nama?: StringFilter<"Kursus"> | string
    harga?: IntFilter<"Kursus"> | number
    createdAt?: DateTimeFilter<"Kursus"> | Date | string
    updatedAt?: DateTimeFilter<"Kursus"> | Date | string
    userId?: StringFilter<"Kursus"> | string
    instrukturId?: StringFilter<"Kursus"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Pendaftaran?: PendaftaranListRelationFilter
    HistoriKursus?: HistoriKursusListRelationFilter
  }

  export type KursusOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    instrukturId?: SortOrder
    user?: UserOrderByWithRelationInput
    Pendaftaran?: PendaftaranOrderByRelationAggregateInput
    HistoriKursus?: HistoriKursusOrderByRelationAggregateInput
  }

  export type KursusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KursusWhereInput | KursusWhereInput[]
    OR?: KursusWhereInput[]
    NOT?: KursusWhereInput | KursusWhereInput[]
    nama?: StringFilter<"Kursus"> | string
    harga?: IntFilter<"Kursus"> | number
    createdAt?: DateTimeFilter<"Kursus"> | Date | string
    updatedAt?: DateTimeFilter<"Kursus"> | Date | string
    userId?: StringFilter<"Kursus"> | string
    instrukturId?: StringFilter<"Kursus"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Pendaftaran?: PendaftaranListRelationFilter
    HistoriKursus?: HistoriKursusListRelationFilter
  }, "id">

  export type KursusOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    instrukturId?: SortOrder
    _count?: KursusCountOrderByAggregateInput
    _avg?: KursusAvgOrderByAggregateInput
    _max?: KursusMaxOrderByAggregateInput
    _min?: KursusMinOrderByAggregateInput
    _sum?: KursusSumOrderByAggregateInput
  }

  export type KursusScalarWhereWithAggregatesInput = {
    AND?: KursusScalarWhereWithAggregatesInput | KursusScalarWhereWithAggregatesInput[]
    OR?: KursusScalarWhereWithAggregatesInput[]
    NOT?: KursusScalarWhereWithAggregatesInput | KursusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Kursus"> | string
    nama?: StringWithAggregatesFilter<"Kursus"> | string
    harga?: IntWithAggregatesFilter<"Kursus"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Kursus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kursus"> | Date | string
    userId?: StringWithAggregatesFilter<"Kursus"> | string
    instrukturId?: StringWithAggregatesFilter<"Kursus"> | string
  }

  export type PendaftaranWhereInput = {
    AND?: PendaftaranWhereInput | PendaftaranWhereInput[]
    OR?: PendaftaranWhereInput[]
    NOT?: PendaftaranWhereInput | PendaftaranWhereInput[]
    id?: StringFilter<"Pendaftaran"> | string
    userId?: StringFilter<"Pendaftaran"> | string
    kursusId?: StringFilter<"Pendaftaran"> | string
    status?: StringFilter<"Pendaftaran"> | string
    createdAt?: DateTimeFilter<"Pendaftaran"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    kursus?: XOR<KursusScalarRelationFilter, KursusWhereInput>
    Pembayaran?: XOR<PembayaranNullableScalarRelationFilter, PembayaranWhereInput> | null
  }

  export type PendaftaranOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    kursus?: KursusOrderByWithRelationInput
    Pembayaran?: PembayaranOrderByWithRelationInput
  }

  export type PendaftaranWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PendaftaranWhereInput | PendaftaranWhereInput[]
    OR?: PendaftaranWhereInput[]
    NOT?: PendaftaranWhereInput | PendaftaranWhereInput[]
    userId?: StringFilter<"Pendaftaran"> | string
    kursusId?: StringFilter<"Pendaftaran"> | string
    status?: StringFilter<"Pendaftaran"> | string
    createdAt?: DateTimeFilter<"Pendaftaran"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    kursus?: XOR<KursusScalarRelationFilter, KursusWhereInput>
    Pembayaran?: XOR<PembayaranNullableScalarRelationFilter, PembayaranWhereInput> | null
  }, "id">

  export type PendaftaranOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PendaftaranCountOrderByAggregateInput
    _max?: PendaftaranMaxOrderByAggregateInput
    _min?: PendaftaranMinOrderByAggregateInput
  }

  export type PendaftaranScalarWhereWithAggregatesInput = {
    AND?: PendaftaranScalarWhereWithAggregatesInput | PendaftaranScalarWhereWithAggregatesInput[]
    OR?: PendaftaranScalarWhereWithAggregatesInput[]
    NOT?: PendaftaranScalarWhereWithAggregatesInput | PendaftaranScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pendaftaran"> | string
    userId?: StringWithAggregatesFilter<"Pendaftaran"> | string
    kursusId?: StringWithAggregatesFilter<"Pendaftaran"> | string
    status?: StringWithAggregatesFilter<"Pendaftaran"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pendaftaran"> | Date | string
  }

  export type PembayaranWhereInput = {
    AND?: PembayaranWhereInput | PembayaranWhereInput[]
    OR?: PembayaranWhereInput[]
    NOT?: PembayaranWhereInput | PembayaranWhereInput[]
    id?: StringFilter<"Pembayaran"> | string
    pendaftaranId?: StringFilter<"Pembayaran"> | string
    metode?: StringFilter<"Pembayaran"> | string
    jumlah?: IntFilter<"Pembayaran"> | number
    buktiBayar?: StringFilter<"Pembayaran"> | string
    status?: StringFilter<"Pembayaran"> | string
    createdAt?: DateTimeFilter<"Pembayaran"> | Date | string
    pendaftaran?: XOR<PendaftaranScalarRelationFilter, PendaftaranWhereInput>
  }

  export type PembayaranOrderByWithRelationInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    metode?: SortOrder
    jumlah?: SortOrder
    buktiBayar?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    pendaftaran?: PendaftaranOrderByWithRelationInput
  }

  export type PembayaranWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pendaftaranId?: string
    AND?: PembayaranWhereInput | PembayaranWhereInput[]
    OR?: PembayaranWhereInput[]
    NOT?: PembayaranWhereInput | PembayaranWhereInput[]
    metode?: StringFilter<"Pembayaran"> | string
    jumlah?: IntFilter<"Pembayaran"> | number
    buktiBayar?: StringFilter<"Pembayaran"> | string
    status?: StringFilter<"Pembayaran"> | string
    createdAt?: DateTimeFilter<"Pembayaran"> | Date | string
    pendaftaran?: XOR<PendaftaranScalarRelationFilter, PendaftaranWhereInput>
  }, "id" | "pendaftaranId">

  export type PembayaranOrderByWithAggregationInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    metode?: SortOrder
    jumlah?: SortOrder
    buktiBayar?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PembayaranCountOrderByAggregateInput
    _avg?: PembayaranAvgOrderByAggregateInput
    _max?: PembayaranMaxOrderByAggregateInput
    _min?: PembayaranMinOrderByAggregateInput
    _sum?: PembayaranSumOrderByAggregateInput
  }

  export type PembayaranScalarWhereWithAggregatesInput = {
    AND?: PembayaranScalarWhereWithAggregatesInput | PembayaranScalarWhereWithAggregatesInput[]
    OR?: PembayaranScalarWhereWithAggregatesInput[]
    NOT?: PembayaranScalarWhereWithAggregatesInput | PembayaranScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pembayaran"> | string
    pendaftaranId?: StringWithAggregatesFilter<"Pembayaran"> | string
    metode?: StringWithAggregatesFilter<"Pembayaran"> | string
    jumlah?: IntWithAggregatesFilter<"Pembayaran"> | number
    buktiBayar?: StringWithAggregatesFilter<"Pembayaran"> | string
    status?: StringWithAggregatesFilter<"Pembayaran"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pembayaran"> | Date | string
  }

  export type HistoriKursusWhereInput = {
    AND?: HistoriKursusWhereInput | HistoriKursusWhereInput[]
    OR?: HistoriKursusWhereInput[]
    NOT?: HistoriKursusWhereInput | HistoriKursusWhereInput[]
    id?: StringFilter<"HistoriKursus"> | string
    userId?: StringFilter<"HistoriKursus"> | string
    kursusId?: StringFilter<"HistoriKursus"> | string
    tanggalSelesai?: StringFilter<"HistoriKursus"> | string
    sertifikat?: StringNullableFilter<"HistoriKursus"> | string | null
    keterangan?: StringNullableFilter<"HistoriKursus"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    kursus?: XOR<KursusScalarRelationFilter, KursusWhereInput>
  }

  export type HistoriKursusOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    tanggalSelesai?: SortOrder
    sertifikat?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    kursus?: KursusOrderByWithRelationInput
  }

  export type HistoriKursusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoriKursusWhereInput | HistoriKursusWhereInput[]
    OR?: HistoriKursusWhereInput[]
    NOT?: HistoriKursusWhereInput | HistoriKursusWhereInput[]
    userId?: StringFilter<"HistoriKursus"> | string
    kursusId?: StringFilter<"HistoriKursus"> | string
    tanggalSelesai?: StringFilter<"HistoriKursus"> | string
    sertifikat?: StringNullableFilter<"HistoriKursus"> | string | null
    keterangan?: StringNullableFilter<"HistoriKursus"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    kursus?: XOR<KursusScalarRelationFilter, KursusWhereInput>
  }, "id">

  export type HistoriKursusOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    tanggalSelesai?: SortOrder
    sertifikat?: SortOrderInput | SortOrder
    keterangan?: SortOrderInput | SortOrder
    _count?: HistoriKursusCountOrderByAggregateInput
    _max?: HistoriKursusMaxOrderByAggregateInput
    _min?: HistoriKursusMinOrderByAggregateInput
  }

  export type HistoriKursusScalarWhereWithAggregatesInput = {
    AND?: HistoriKursusScalarWhereWithAggregatesInput | HistoriKursusScalarWhereWithAggregatesInput[]
    OR?: HistoriKursusScalarWhereWithAggregatesInput[]
    NOT?: HistoriKursusScalarWhereWithAggregatesInput | HistoriKursusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoriKursus"> | string
    userId?: StringWithAggregatesFilter<"HistoriKursus"> | string
    kursusId?: StringWithAggregatesFilter<"HistoriKursus"> | string
    tanggalSelesai?: StringWithAggregatesFilter<"HistoriKursus"> | string
    sertifikat?: StringNullableWithAggregatesFilter<"HistoriKursus"> | string | null
    keterangan?: StringNullableWithAggregatesFilter<"HistoriKursus"> | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin: string
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp: string
    email: string
    agama?: string | null
    jurusan?: string | null
    tahunAkademik?: string | null
    password?: string | null
    role?: string
    keahlian?: string | null
    jabatan?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kursus?: KursusCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranCreateNestedManyWithoutUserInput
    HistoriKursus?: HistoriKursusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin: string
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp: string
    email: string
    agama?: string | null
    jurusan?: string | null
    tahunAkademik?: string | null
    password?: string | null
    role?: string
    keahlian?: string | null
    jabatan?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kursus?: KursusUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutUserInput
    HistoriKursus?: HistoriKursusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUpdateManyWithoutUserNestedInput
    HistoriKursus?: HistoriKursusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutUserNestedInput
    HistoriKursus?: HistoriKursusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin: string
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp: string
    email: string
    agama?: string | null
    jurusan?: string | null
    tahunAkademik?: string | null
    password?: string | null
    role?: string
    keahlian?: string | null
    jabatan?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KursusCreateInput = {
    id?: string
    nama: string
    harga: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instrukturId: string
    user: UserCreateNestedOneWithoutKursusInput
    Pendaftaran?: PendaftaranCreateNestedManyWithoutKursusInput
    HistoriKursus?: HistoriKursusCreateNestedManyWithoutKursusInput
  }

  export type KursusUncheckedCreateInput = {
    id?: string
    nama: string
    harga: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    instrukturId: string
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutKursusInput
    HistoriKursus?: HistoriKursusUncheckedCreateNestedManyWithoutKursusInput
  }

  export type KursusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrukturId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutKursusNestedInput
    Pendaftaran?: PendaftaranUpdateManyWithoutKursusNestedInput
    HistoriKursus?: HistoriKursusUpdateManyWithoutKursusNestedInput
  }

  export type KursusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    instrukturId?: StringFieldUpdateOperationsInput | string
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutKursusNestedInput
    HistoriKursus?: HistoriKursusUncheckedUpdateManyWithoutKursusNestedInput
  }

  export type KursusCreateManyInput = {
    id?: string
    nama: string
    harga: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    instrukturId: string
  }

  export type KursusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrukturId?: StringFieldUpdateOperationsInput | string
  }

  export type KursusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    instrukturId?: StringFieldUpdateOperationsInput | string
  }

  export type PendaftaranCreateInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPendaftaranInput
    kursus: KursusCreateNestedOneWithoutPendaftaranInput
    Pembayaran?: PembayaranCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranUncheckedCreateInput = {
    id?: string
    userId: string
    kursusId: string
    status?: string
    createdAt?: Date | string
    Pembayaran?: PembayaranUncheckedCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPendaftaranNestedInput
    kursus?: KursusUpdateOneRequiredWithoutPendaftaranNestedInput
    Pembayaran?: PembayaranUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pembayaran?: PembayaranUncheckedUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranCreateManyInput = {
    id?: string
    userId: string
    kursusId: string
    status?: string
    createdAt?: Date | string
  }

  export type PendaftaranUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftaranUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembayaranCreateInput = {
    id?: string
    metode: string
    jumlah: number
    buktiBayar: string
    status?: string
    createdAt?: Date | string
    pendaftaran: PendaftaranCreateNestedOneWithoutPembayaranInput
  }

  export type PembayaranUncheckedCreateInput = {
    id?: string
    pendaftaranId: string
    metode: string
    jumlah: number
    buktiBayar: string
    status?: string
    createdAt?: Date | string
  }

  export type PembayaranUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    buktiBayar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendaftaran?: PendaftaranUpdateOneRequiredWithoutPembayaranNestedInput
  }

  export type PembayaranUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pendaftaranId?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    buktiBayar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembayaranCreateManyInput = {
    id?: string
    pendaftaranId: string
    metode: string
    jumlah: number
    buktiBayar: string
    status?: string
    createdAt?: Date | string
  }

  export type PembayaranUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    buktiBayar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembayaranUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pendaftaranId?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    buktiBayar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriKursusCreateInput = {
    id?: string
    tanggalSelesai: string
    sertifikat?: string | null
    keterangan?: string | null
    user: UserCreateNestedOneWithoutHistoriKursusInput
    kursus: KursusCreateNestedOneWithoutHistoriKursusInput
  }

  export type HistoriKursusUncheckedCreateInput = {
    id?: string
    userId: string
    kursusId: string
    tanggalSelesai: string
    sertifikat?: string | null
    keterangan?: string | null
  }

  export type HistoriKursusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalSelesai?: StringFieldUpdateOperationsInput | string
    sertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutHistoriKursusNestedInput
    kursus?: KursusUpdateOneRequiredWithoutHistoriKursusNestedInput
  }

  export type HistoriKursusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    tanggalSelesai?: StringFieldUpdateOperationsInput | string
    sertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriKursusCreateManyInput = {
    id?: string
    userId: string
    kursusId: string
    tanggalSelesai: string
    sertifikat?: string | null
    keterangan?: string | null
  }

  export type HistoriKursusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalSelesai?: StringFieldUpdateOperationsInput | string
    sertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriKursusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    tanggalSelesai?: StringFieldUpdateOperationsInput | string
    sertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type KursusListRelationFilter = {
    every?: KursusWhereInput
    some?: KursusWhereInput
    none?: KursusWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PendaftaranListRelationFilter = {
    every?: PendaftaranWhereInput
    some?: PendaftaranWhereInput
    none?: PendaftaranWhereInput
  }

  export type HistoriKursusListRelationFilter = {
    every?: HistoriKursusWhereInput
    some?: HistoriKursusWhereInput
    none?: HistoriKursusWhereInput
  }

  export type KursusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PendaftaranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoriKursusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nik?: SortOrder
    jenisKelamin?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    mediaSosial?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    agama?: SortOrder
    jurusan?: SortOrder
    tahunAkademik?: SortOrder
    password?: SortOrder
    role?: SortOrder
    keahlian?: SortOrder
    jabatan?: SortOrder
    image?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nik?: SortOrder
    jenisKelamin?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    mediaSosial?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    agama?: SortOrder
    jurusan?: SortOrder
    tahunAkademik?: SortOrder
    password?: SortOrder
    role?: SortOrder
    keahlian?: SortOrder
    jabatan?: SortOrder
    image?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    nik?: SortOrder
    jenisKelamin?: SortOrder
    tempatLahir?: SortOrder
    tanggalLahir?: SortOrder
    mediaSosial?: SortOrder
    noHp?: SortOrder
    email?: SortOrder
    agama?: SortOrder
    jurusan?: SortOrder
    tahunAkademik?: SortOrder
    password?: SortOrder
    role?: SortOrder
    keahlian?: SortOrder
    jabatan?: SortOrder
    image?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type KursusCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    instrukturId?: SortOrder
  }

  export type KursusAvgOrderByAggregateInput = {
    harga?: SortOrder
  }

  export type KursusMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    instrukturId?: SortOrder
  }

  export type KursusMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    instrukturId?: SortOrder
  }

  export type KursusSumOrderByAggregateInput = {
    harga?: SortOrder
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

  export type KursusScalarRelationFilter = {
    is?: KursusWhereInput
    isNot?: KursusWhereInput
  }

  export type PembayaranNullableScalarRelationFilter = {
    is?: PembayaranWhereInput | null
    isNot?: PembayaranWhereInput | null
  }

  export type PendaftaranCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PendaftaranMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PendaftaranMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PendaftaranScalarRelationFilter = {
    is?: PendaftaranWhereInput
    isNot?: PendaftaranWhereInput
  }

  export type PembayaranCountOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    metode?: SortOrder
    jumlah?: SortOrder
    buktiBayar?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PembayaranAvgOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type PembayaranMaxOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    metode?: SortOrder
    jumlah?: SortOrder
    buktiBayar?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PembayaranMinOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    metode?: SortOrder
    jumlah?: SortOrder
    buktiBayar?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PembayaranSumOrderByAggregateInput = {
    jumlah?: SortOrder
  }

  export type HistoriKursusCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    tanggalSelesai?: SortOrder
    sertifikat?: SortOrder
    keterangan?: SortOrder
  }

  export type HistoriKursusMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    tanggalSelesai?: SortOrder
    sertifikat?: SortOrder
    keterangan?: SortOrder
  }

  export type HistoriKursusMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    tanggalSelesai?: SortOrder
    sertifikat?: SortOrder
    keterangan?: SortOrder
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput
    upsert?: UserUpsertWithoutSessionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput>
  }

  export type KursusCreateNestedManyWithoutUserInput = {
    create?: XOR<KursusCreateWithoutUserInput, KursusUncheckedCreateWithoutUserInput> | KursusCreateWithoutUserInput[] | KursusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KursusCreateOrConnectWithoutUserInput | KursusCreateOrConnectWithoutUserInput[]
    createMany?: KursusCreateManyUserInputEnvelope
    connect?: KursusWhereUniqueInput | KursusWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PendaftaranCreateNestedManyWithoutUserInput = {
    create?: XOR<PendaftaranCreateWithoutUserInput, PendaftaranUncheckedCreateWithoutUserInput> | PendaftaranCreateWithoutUserInput[] | PendaftaranUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PendaftaranCreateOrConnectWithoutUserInput | PendaftaranCreateOrConnectWithoutUserInput[]
    createMany?: PendaftaranCreateManyUserInputEnvelope
    connect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
  }

  export type HistoriKursusCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoriKursusCreateWithoutUserInput, HistoriKursusUncheckedCreateWithoutUserInput> | HistoriKursusCreateWithoutUserInput[] | HistoriKursusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoriKursusCreateOrConnectWithoutUserInput | HistoriKursusCreateOrConnectWithoutUserInput[]
    createMany?: HistoriKursusCreateManyUserInputEnvelope
    connect?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
  }

  export type KursusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<KursusCreateWithoutUserInput, KursusUncheckedCreateWithoutUserInput> | KursusCreateWithoutUserInput[] | KursusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KursusCreateOrConnectWithoutUserInput | KursusCreateOrConnectWithoutUserInput[]
    createMany?: KursusCreateManyUserInputEnvelope
    connect?: KursusWhereUniqueInput | KursusWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PendaftaranUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PendaftaranCreateWithoutUserInput, PendaftaranUncheckedCreateWithoutUserInput> | PendaftaranCreateWithoutUserInput[] | PendaftaranUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PendaftaranCreateOrConnectWithoutUserInput | PendaftaranCreateOrConnectWithoutUserInput[]
    createMany?: PendaftaranCreateManyUserInputEnvelope
    connect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
  }

  export type HistoriKursusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HistoriKursusCreateWithoutUserInput, HistoriKursusUncheckedCreateWithoutUserInput> | HistoriKursusCreateWithoutUserInput[] | HistoriKursusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoriKursusCreateOrConnectWithoutUserInput | HistoriKursusCreateOrConnectWithoutUserInput[]
    createMany?: HistoriKursusCreateManyUserInputEnvelope
    connect?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type KursusUpdateManyWithoutUserNestedInput = {
    create?: XOR<KursusCreateWithoutUserInput, KursusUncheckedCreateWithoutUserInput> | KursusCreateWithoutUserInput[] | KursusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KursusCreateOrConnectWithoutUserInput | KursusCreateOrConnectWithoutUserInput[]
    upsert?: KursusUpsertWithWhereUniqueWithoutUserInput | KursusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KursusCreateManyUserInputEnvelope
    set?: KursusWhereUniqueInput | KursusWhereUniqueInput[]
    disconnect?: KursusWhereUniqueInput | KursusWhereUniqueInput[]
    delete?: KursusWhereUniqueInput | KursusWhereUniqueInput[]
    connect?: KursusWhereUniqueInput | KursusWhereUniqueInput[]
    update?: KursusUpdateWithWhereUniqueWithoutUserInput | KursusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KursusUpdateManyWithWhereWithoutUserInput | KursusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KursusScalarWhereInput | KursusScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PendaftaranUpdateManyWithoutUserNestedInput = {
    create?: XOR<PendaftaranCreateWithoutUserInput, PendaftaranUncheckedCreateWithoutUserInput> | PendaftaranCreateWithoutUserInput[] | PendaftaranUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PendaftaranCreateOrConnectWithoutUserInput | PendaftaranCreateOrConnectWithoutUserInput[]
    upsert?: PendaftaranUpsertWithWhereUniqueWithoutUserInput | PendaftaranUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PendaftaranCreateManyUserInputEnvelope
    set?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    disconnect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    delete?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    connect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    update?: PendaftaranUpdateWithWhereUniqueWithoutUserInput | PendaftaranUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PendaftaranUpdateManyWithWhereWithoutUserInput | PendaftaranUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PendaftaranScalarWhereInput | PendaftaranScalarWhereInput[]
  }

  export type HistoriKursusUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoriKursusCreateWithoutUserInput, HistoriKursusUncheckedCreateWithoutUserInput> | HistoriKursusCreateWithoutUserInput[] | HistoriKursusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoriKursusCreateOrConnectWithoutUserInput | HistoriKursusCreateOrConnectWithoutUserInput[]
    upsert?: HistoriKursusUpsertWithWhereUniqueWithoutUserInput | HistoriKursusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoriKursusCreateManyUserInputEnvelope
    set?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    disconnect?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    delete?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    connect?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    update?: HistoriKursusUpdateWithWhereUniqueWithoutUserInput | HistoriKursusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoriKursusUpdateManyWithWhereWithoutUserInput | HistoriKursusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoriKursusScalarWhereInput | HistoriKursusScalarWhereInput[]
  }

  export type KursusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<KursusCreateWithoutUserInput, KursusUncheckedCreateWithoutUserInput> | KursusCreateWithoutUserInput[] | KursusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: KursusCreateOrConnectWithoutUserInput | KursusCreateOrConnectWithoutUserInput[]
    upsert?: KursusUpsertWithWhereUniqueWithoutUserInput | KursusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: KursusCreateManyUserInputEnvelope
    set?: KursusWhereUniqueInput | KursusWhereUniqueInput[]
    disconnect?: KursusWhereUniqueInput | KursusWhereUniqueInput[]
    delete?: KursusWhereUniqueInput | KursusWhereUniqueInput[]
    connect?: KursusWhereUniqueInput | KursusWhereUniqueInput[]
    update?: KursusUpdateWithWhereUniqueWithoutUserInput | KursusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: KursusUpdateManyWithWhereWithoutUserInput | KursusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: KursusScalarWhereInput | KursusScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PendaftaranUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PendaftaranCreateWithoutUserInput, PendaftaranUncheckedCreateWithoutUserInput> | PendaftaranCreateWithoutUserInput[] | PendaftaranUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PendaftaranCreateOrConnectWithoutUserInput | PendaftaranCreateOrConnectWithoutUserInput[]
    upsert?: PendaftaranUpsertWithWhereUniqueWithoutUserInput | PendaftaranUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PendaftaranCreateManyUserInputEnvelope
    set?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    disconnect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    delete?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    connect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    update?: PendaftaranUpdateWithWhereUniqueWithoutUserInput | PendaftaranUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PendaftaranUpdateManyWithWhereWithoutUserInput | PendaftaranUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PendaftaranScalarWhereInput | PendaftaranScalarWhereInput[]
  }

  export type HistoriKursusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HistoriKursusCreateWithoutUserInput, HistoriKursusUncheckedCreateWithoutUserInput> | HistoriKursusCreateWithoutUserInput[] | HistoriKursusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HistoriKursusCreateOrConnectWithoutUserInput | HistoriKursusCreateOrConnectWithoutUserInput[]
    upsert?: HistoriKursusUpsertWithWhereUniqueWithoutUserInput | HistoriKursusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HistoriKursusCreateManyUserInputEnvelope
    set?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    disconnect?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    delete?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    connect?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    update?: HistoriKursusUpdateWithWhereUniqueWithoutUserInput | HistoriKursusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HistoriKursusUpdateManyWithWhereWithoutUserInput | HistoriKursusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HistoriKursusScalarWhereInput | HistoriKursusScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutKursusInput = {
    create?: XOR<UserCreateWithoutKursusInput, UserUncheckedCreateWithoutKursusInput>
    connectOrCreate?: UserCreateOrConnectWithoutKursusInput
    connect?: UserWhereUniqueInput
  }

  export type PendaftaranCreateNestedManyWithoutKursusInput = {
    create?: XOR<PendaftaranCreateWithoutKursusInput, PendaftaranUncheckedCreateWithoutKursusInput> | PendaftaranCreateWithoutKursusInput[] | PendaftaranUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: PendaftaranCreateOrConnectWithoutKursusInput | PendaftaranCreateOrConnectWithoutKursusInput[]
    createMany?: PendaftaranCreateManyKursusInputEnvelope
    connect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
  }

  export type HistoriKursusCreateNestedManyWithoutKursusInput = {
    create?: XOR<HistoriKursusCreateWithoutKursusInput, HistoriKursusUncheckedCreateWithoutKursusInput> | HistoriKursusCreateWithoutKursusInput[] | HistoriKursusUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: HistoriKursusCreateOrConnectWithoutKursusInput | HistoriKursusCreateOrConnectWithoutKursusInput[]
    createMany?: HistoriKursusCreateManyKursusInputEnvelope
    connect?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
  }

  export type PendaftaranUncheckedCreateNestedManyWithoutKursusInput = {
    create?: XOR<PendaftaranCreateWithoutKursusInput, PendaftaranUncheckedCreateWithoutKursusInput> | PendaftaranCreateWithoutKursusInput[] | PendaftaranUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: PendaftaranCreateOrConnectWithoutKursusInput | PendaftaranCreateOrConnectWithoutKursusInput[]
    createMany?: PendaftaranCreateManyKursusInputEnvelope
    connect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
  }

  export type HistoriKursusUncheckedCreateNestedManyWithoutKursusInput = {
    create?: XOR<HistoriKursusCreateWithoutKursusInput, HistoriKursusUncheckedCreateWithoutKursusInput> | HistoriKursusCreateWithoutKursusInput[] | HistoriKursusUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: HistoriKursusCreateOrConnectWithoutKursusInput | HistoriKursusCreateOrConnectWithoutKursusInput[]
    createMany?: HistoriKursusCreateManyKursusInputEnvelope
    connect?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutKursusNestedInput = {
    create?: XOR<UserCreateWithoutKursusInput, UserUncheckedCreateWithoutKursusInput>
    connectOrCreate?: UserCreateOrConnectWithoutKursusInput
    upsert?: UserUpsertWithoutKursusInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKursusInput, UserUpdateWithoutKursusInput>, UserUncheckedUpdateWithoutKursusInput>
  }

  export type PendaftaranUpdateManyWithoutKursusNestedInput = {
    create?: XOR<PendaftaranCreateWithoutKursusInput, PendaftaranUncheckedCreateWithoutKursusInput> | PendaftaranCreateWithoutKursusInput[] | PendaftaranUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: PendaftaranCreateOrConnectWithoutKursusInput | PendaftaranCreateOrConnectWithoutKursusInput[]
    upsert?: PendaftaranUpsertWithWhereUniqueWithoutKursusInput | PendaftaranUpsertWithWhereUniqueWithoutKursusInput[]
    createMany?: PendaftaranCreateManyKursusInputEnvelope
    set?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    disconnect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    delete?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    connect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    update?: PendaftaranUpdateWithWhereUniqueWithoutKursusInput | PendaftaranUpdateWithWhereUniqueWithoutKursusInput[]
    updateMany?: PendaftaranUpdateManyWithWhereWithoutKursusInput | PendaftaranUpdateManyWithWhereWithoutKursusInput[]
    deleteMany?: PendaftaranScalarWhereInput | PendaftaranScalarWhereInput[]
  }

  export type HistoriKursusUpdateManyWithoutKursusNestedInput = {
    create?: XOR<HistoriKursusCreateWithoutKursusInput, HistoriKursusUncheckedCreateWithoutKursusInput> | HistoriKursusCreateWithoutKursusInput[] | HistoriKursusUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: HistoriKursusCreateOrConnectWithoutKursusInput | HistoriKursusCreateOrConnectWithoutKursusInput[]
    upsert?: HistoriKursusUpsertWithWhereUniqueWithoutKursusInput | HistoriKursusUpsertWithWhereUniqueWithoutKursusInput[]
    createMany?: HistoriKursusCreateManyKursusInputEnvelope
    set?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    disconnect?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    delete?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    connect?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    update?: HistoriKursusUpdateWithWhereUniqueWithoutKursusInput | HistoriKursusUpdateWithWhereUniqueWithoutKursusInput[]
    updateMany?: HistoriKursusUpdateManyWithWhereWithoutKursusInput | HistoriKursusUpdateManyWithWhereWithoutKursusInput[]
    deleteMany?: HistoriKursusScalarWhereInput | HistoriKursusScalarWhereInput[]
  }

  export type PendaftaranUncheckedUpdateManyWithoutKursusNestedInput = {
    create?: XOR<PendaftaranCreateWithoutKursusInput, PendaftaranUncheckedCreateWithoutKursusInput> | PendaftaranCreateWithoutKursusInput[] | PendaftaranUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: PendaftaranCreateOrConnectWithoutKursusInput | PendaftaranCreateOrConnectWithoutKursusInput[]
    upsert?: PendaftaranUpsertWithWhereUniqueWithoutKursusInput | PendaftaranUpsertWithWhereUniqueWithoutKursusInput[]
    createMany?: PendaftaranCreateManyKursusInputEnvelope
    set?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    disconnect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    delete?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    connect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
    update?: PendaftaranUpdateWithWhereUniqueWithoutKursusInput | PendaftaranUpdateWithWhereUniqueWithoutKursusInput[]
    updateMany?: PendaftaranUpdateManyWithWhereWithoutKursusInput | PendaftaranUpdateManyWithWhereWithoutKursusInput[]
    deleteMany?: PendaftaranScalarWhereInput | PendaftaranScalarWhereInput[]
  }

  export type HistoriKursusUncheckedUpdateManyWithoutKursusNestedInput = {
    create?: XOR<HistoriKursusCreateWithoutKursusInput, HistoriKursusUncheckedCreateWithoutKursusInput> | HistoriKursusCreateWithoutKursusInput[] | HistoriKursusUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: HistoriKursusCreateOrConnectWithoutKursusInput | HistoriKursusCreateOrConnectWithoutKursusInput[]
    upsert?: HistoriKursusUpsertWithWhereUniqueWithoutKursusInput | HistoriKursusUpsertWithWhereUniqueWithoutKursusInput[]
    createMany?: HistoriKursusCreateManyKursusInputEnvelope
    set?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    disconnect?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    delete?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    connect?: HistoriKursusWhereUniqueInput | HistoriKursusWhereUniqueInput[]
    update?: HistoriKursusUpdateWithWhereUniqueWithoutKursusInput | HistoriKursusUpdateWithWhereUniqueWithoutKursusInput[]
    updateMany?: HistoriKursusUpdateManyWithWhereWithoutKursusInput | HistoriKursusUpdateManyWithWhereWithoutKursusInput[]
    deleteMany?: HistoriKursusScalarWhereInput | HistoriKursusScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<UserCreateWithoutPendaftaranInput, UserUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: UserCreateOrConnectWithoutPendaftaranInput
    connect?: UserWhereUniqueInput
  }

  export type KursusCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<KursusCreateWithoutPendaftaranInput, KursusUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: KursusCreateOrConnectWithoutPendaftaranInput
    connect?: KursusWhereUniqueInput
  }

  export type PembayaranCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<PembayaranCreateWithoutPendaftaranInput, PembayaranUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: PembayaranCreateOrConnectWithoutPendaftaranInput
    connect?: PembayaranWhereUniqueInput
  }

  export type PembayaranUncheckedCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<PembayaranCreateWithoutPendaftaranInput, PembayaranUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: PembayaranCreateOrConnectWithoutPendaftaranInput
    connect?: PembayaranWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPendaftaranNestedInput = {
    create?: XOR<UserCreateWithoutPendaftaranInput, UserUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: UserCreateOrConnectWithoutPendaftaranInput
    upsert?: UserUpsertWithoutPendaftaranInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPendaftaranInput, UserUpdateWithoutPendaftaranInput>, UserUncheckedUpdateWithoutPendaftaranInput>
  }

  export type KursusUpdateOneRequiredWithoutPendaftaranNestedInput = {
    create?: XOR<KursusCreateWithoutPendaftaranInput, KursusUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: KursusCreateOrConnectWithoutPendaftaranInput
    upsert?: KursusUpsertWithoutPendaftaranInput
    connect?: KursusWhereUniqueInput
    update?: XOR<XOR<KursusUpdateToOneWithWhereWithoutPendaftaranInput, KursusUpdateWithoutPendaftaranInput>, KursusUncheckedUpdateWithoutPendaftaranInput>
  }

  export type PembayaranUpdateOneWithoutPendaftaranNestedInput = {
    create?: XOR<PembayaranCreateWithoutPendaftaranInput, PembayaranUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: PembayaranCreateOrConnectWithoutPendaftaranInput
    upsert?: PembayaranUpsertWithoutPendaftaranInput
    disconnect?: PembayaranWhereInput | boolean
    delete?: PembayaranWhereInput | boolean
    connect?: PembayaranWhereUniqueInput
    update?: XOR<XOR<PembayaranUpdateToOneWithWhereWithoutPendaftaranInput, PembayaranUpdateWithoutPendaftaranInput>, PembayaranUncheckedUpdateWithoutPendaftaranInput>
  }

  export type PembayaranUncheckedUpdateOneWithoutPendaftaranNestedInput = {
    create?: XOR<PembayaranCreateWithoutPendaftaranInput, PembayaranUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: PembayaranCreateOrConnectWithoutPendaftaranInput
    upsert?: PembayaranUpsertWithoutPendaftaranInput
    disconnect?: PembayaranWhereInput | boolean
    delete?: PembayaranWhereInput | boolean
    connect?: PembayaranWhereUniqueInput
    update?: XOR<XOR<PembayaranUpdateToOneWithWhereWithoutPendaftaranInput, PembayaranUpdateWithoutPendaftaranInput>, PembayaranUncheckedUpdateWithoutPendaftaranInput>
  }

  export type PendaftaranCreateNestedOneWithoutPembayaranInput = {
    create?: XOR<PendaftaranCreateWithoutPembayaranInput, PendaftaranUncheckedCreateWithoutPembayaranInput>
    connectOrCreate?: PendaftaranCreateOrConnectWithoutPembayaranInput
    connect?: PendaftaranWhereUniqueInput
  }

  export type PendaftaranUpdateOneRequiredWithoutPembayaranNestedInput = {
    create?: XOR<PendaftaranCreateWithoutPembayaranInput, PendaftaranUncheckedCreateWithoutPembayaranInput>
    connectOrCreate?: PendaftaranCreateOrConnectWithoutPembayaranInput
    upsert?: PendaftaranUpsertWithoutPembayaranInput
    connect?: PendaftaranWhereUniqueInput
    update?: XOR<XOR<PendaftaranUpdateToOneWithWhereWithoutPembayaranInput, PendaftaranUpdateWithoutPembayaranInput>, PendaftaranUncheckedUpdateWithoutPembayaranInput>
  }

  export type UserCreateNestedOneWithoutHistoriKursusInput = {
    create?: XOR<UserCreateWithoutHistoriKursusInput, UserUncheckedCreateWithoutHistoriKursusInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoriKursusInput
    connect?: UserWhereUniqueInput
  }

  export type KursusCreateNestedOneWithoutHistoriKursusInput = {
    create?: XOR<KursusCreateWithoutHistoriKursusInput, KursusUncheckedCreateWithoutHistoriKursusInput>
    connectOrCreate?: KursusCreateOrConnectWithoutHistoriKursusInput
    connect?: KursusWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHistoriKursusNestedInput = {
    create?: XOR<UserCreateWithoutHistoriKursusInput, UserUncheckedCreateWithoutHistoriKursusInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoriKursusInput
    upsert?: UserUpsertWithoutHistoriKursusInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoriKursusInput, UserUpdateWithoutHistoriKursusInput>, UserUncheckedUpdateWithoutHistoriKursusInput>
  }

  export type KursusUpdateOneRequiredWithoutHistoriKursusNestedInput = {
    create?: XOR<KursusCreateWithoutHistoriKursusInput, KursusUncheckedCreateWithoutHistoriKursusInput>
    connectOrCreate?: KursusCreateOrConnectWithoutHistoriKursusInput
    upsert?: KursusUpsertWithoutHistoriKursusInput
    connect?: KursusWhereUniqueInput
    update?: XOR<XOR<KursusUpdateToOneWithWhereWithoutHistoriKursusInput, KursusUpdateWithoutHistoriKursusInput>, KursusUncheckedUpdateWithoutHistoriKursusInput>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UserCreateWithoutAccountInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin: string
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp: string
    email: string
    agama?: string | null
    jurusan?: string | null
    tahunAkademik?: string | null
    password?: string | null
    role?: string
    keahlian?: string | null
    jabatan?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kursus?: KursusCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranCreateNestedManyWithoutUserInput
    HistoriKursus?: HistoriKursusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin: string
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp: string
    email: string
    agama?: string | null
    jurusan?: string | null
    tahunAkademik?: string | null
    password?: string | null
    role?: string
    keahlian?: string | null
    jabatan?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kursus?: KursusUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutUserInput
    HistoriKursus?: HistoriKursusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUpdateManyWithoutUserNestedInput
    HistoriKursus?: HistoriKursusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutUserNestedInput
    HistoriKursus?: HistoriKursusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin: string
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp: string
    email: string
    agama?: string | null
    jurusan?: string | null
    tahunAkademik?: string | null
    password?: string | null
    role?: string
    keahlian?: string | null
    jabatan?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kursus?: KursusCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranCreateNestedManyWithoutUserInput
    HistoriKursus?: HistoriKursusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin: string
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp: string
    email: string
    agama?: string | null
    jurusan?: string | null
    tahunAkademik?: string | null
    password?: string | null
    role?: string
    keahlian?: string | null
    jabatan?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kursus?: KursusUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutUserInput
    HistoriKursus?: HistoriKursusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUpdateManyWithoutUserNestedInput
    HistoriKursus?: HistoriKursusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutUserNestedInput
    HistoriKursus?: HistoriKursusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KursusCreateWithoutUserInput = {
    id?: string
    nama: string
    harga: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instrukturId: string
    Pendaftaran?: PendaftaranCreateNestedManyWithoutKursusInput
    HistoriKursus?: HistoriKursusCreateNestedManyWithoutKursusInput
  }

  export type KursusUncheckedCreateWithoutUserInput = {
    id?: string
    nama: string
    harga: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instrukturId: string
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutKursusInput
    HistoriKursus?: HistoriKursusUncheckedCreateNestedManyWithoutKursusInput
  }

  export type KursusCreateOrConnectWithoutUserInput = {
    where: KursusWhereUniqueInput
    create: XOR<KursusCreateWithoutUserInput, KursusUncheckedCreateWithoutUserInput>
  }

  export type KursusCreateManyUserInputEnvelope = {
    data: KursusCreateManyUserInput | KursusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PendaftaranCreateWithoutUserInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    kursus: KursusCreateNestedOneWithoutPendaftaranInput
    Pembayaran?: PembayaranCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranUncheckedCreateWithoutUserInput = {
    id?: string
    kursusId: string
    status?: string
    createdAt?: Date | string
    Pembayaran?: PembayaranUncheckedCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranCreateOrConnectWithoutUserInput = {
    where: PendaftaranWhereUniqueInput
    create: XOR<PendaftaranCreateWithoutUserInput, PendaftaranUncheckedCreateWithoutUserInput>
  }

  export type PendaftaranCreateManyUserInputEnvelope = {
    data: PendaftaranCreateManyUserInput | PendaftaranCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HistoriKursusCreateWithoutUserInput = {
    id?: string
    tanggalSelesai: string
    sertifikat?: string | null
    keterangan?: string | null
    kursus: KursusCreateNestedOneWithoutHistoriKursusInput
  }

  export type HistoriKursusUncheckedCreateWithoutUserInput = {
    id?: string
    kursusId: string
    tanggalSelesai: string
    sertifikat?: string | null
    keterangan?: string | null
  }

  export type HistoriKursusCreateOrConnectWithoutUserInput = {
    where: HistoriKursusWhereUniqueInput
    create: XOR<HistoriKursusCreateWithoutUserInput, HistoriKursusUncheckedCreateWithoutUserInput>
  }

  export type HistoriKursusCreateManyUserInputEnvelope = {
    data: HistoriKursusCreateManyUserInput | HistoriKursusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type KursusUpsertWithWhereUniqueWithoutUserInput = {
    where: KursusWhereUniqueInput
    update: XOR<KursusUpdateWithoutUserInput, KursusUncheckedUpdateWithoutUserInput>
    create: XOR<KursusCreateWithoutUserInput, KursusUncheckedCreateWithoutUserInput>
  }

  export type KursusUpdateWithWhereUniqueWithoutUserInput = {
    where: KursusWhereUniqueInput
    data: XOR<KursusUpdateWithoutUserInput, KursusUncheckedUpdateWithoutUserInput>
  }

  export type KursusUpdateManyWithWhereWithoutUserInput = {
    where: KursusScalarWhereInput
    data: XOR<KursusUpdateManyMutationInput, KursusUncheckedUpdateManyWithoutUserInput>
  }

  export type KursusScalarWhereInput = {
    AND?: KursusScalarWhereInput | KursusScalarWhereInput[]
    OR?: KursusScalarWhereInput[]
    NOT?: KursusScalarWhereInput | KursusScalarWhereInput[]
    id?: StringFilter<"Kursus"> | string
    nama?: StringFilter<"Kursus"> | string
    harga?: IntFilter<"Kursus"> | number
    createdAt?: DateTimeFilter<"Kursus"> | Date | string
    updatedAt?: DateTimeFilter<"Kursus"> | Date | string
    userId?: StringFilter<"Kursus"> | string
    instrukturId?: StringFilter<"Kursus"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PendaftaranUpsertWithWhereUniqueWithoutUserInput = {
    where: PendaftaranWhereUniqueInput
    update: XOR<PendaftaranUpdateWithoutUserInput, PendaftaranUncheckedUpdateWithoutUserInput>
    create: XOR<PendaftaranCreateWithoutUserInput, PendaftaranUncheckedCreateWithoutUserInput>
  }

  export type PendaftaranUpdateWithWhereUniqueWithoutUserInput = {
    where: PendaftaranWhereUniqueInput
    data: XOR<PendaftaranUpdateWithoutUserInput, PendaftaranUncheckedUpdateWithoutUserInput>
  }

  export type PendaftaranUpdateManyWithWhereWithoutUserInput = {
    where: PendaftaranScalarWhereInput
    data: XOR<PendaftaranUpdateManyMutationInput, PendaftaranUncheckedUpdateManyWithoutUserInput>
  }

  export type PendaftaranScalarWhereInput = {
    AND?: PendaftaranScalarWhereInput | PendaftaranScalarWhereInput[]
    OR?: PendaftaranScalarWhereInput[]
    NOT?: PendaftaranScalarWhereInput | PendaftaranScalarWhereInput[]
    id?: StringFilter<"Pendaftaran"> | string
    userId?: StringFilter<"Pendaftaran"> | string
    kursusId?: StringFilter<"Pendaftaran"> | string
    status?: StringFilter<"Pendaftaran"> | string
    createdAt?: DateTimeFilter<"Pendaftaran"> | Date | string
  }

  export type HistoriKursusUpsertWithWhereUniqueWithoutUserInput = {
    where: HistoriKursusWhereUniqueInput
    update: XOR<HistoriKursusUpdateWithoutUserInput, HistoriKursusUncheckedUpdateWithoutUserInput>
    create: XOR<HistoriKursusCreateWithoutUserInput, HistoriKursusUncheckedCreateWithoutUserInput>
  }

  export type HistoriKursusUpdateWithWhereUniqueWithoutUserInput = {
    where: HistoriKursusWhereUniqueInput
    data: XOR<HistoriKursusUpdateWithoutUserInput, HistoriKursusUncheckedUpdateWithoutUserInput>
  }

  export type HistoriKursusUpdateManyWithWhereWithoutUserInput = {
    where: HistoriKursusScalarWhereInput
    data: XOR<HistoriKursusUpdateManyMutationInput, HistoriKursusUncheckedUpdateManyWithoutUserInput>
  }

  export type HistoriKursusScalarWhereInput = {
    AND?: HistoriKursusScalarWhereInput | HistoriKursusScalarWhereInput[]
    OR?: HistoriKursusScalarWhereInput[]
    NOT?: HistoriKursusScalarWhereInput | HistoriKursusScalarWhereInput[]
    id?: StringFilter<"HistoriKursus"> | string
    userId?: StringFilter<"HistoriKursus"> | string
    kursusId?: StringFilter<"HistoriKursus"> | string
    tanggalSelesai?: StringFilter<"HistoriKursus"> | string
    sertifikat?: StringNullableFilter<"HistoriKursus"> | string | null
    keterangan?: StringNullableFilter<"HistoriKursus"> | string | null
  }

  export type UserCreateWithoutKursusInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin: string
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp: string
    email: string
    agama?: string | null
    jurusan?: string | null
    tahunAkademik?: string | null
    password?: string | null
    role?: string
    keahlian?: string | null
    jabatan?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranCreateNestedManyWithoutUserInput
    HistoriKursus?: HistoriKursusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutKursusInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin: string
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp: string
    email: string
    agama?: string | null
    jurusan?: string | null
    tahunAkademik?: string | null
    password?: string | null
    role?: string
    keahlian?: string | null
    jabatan?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutUserInput
    HistoriKursus?: HistoriKursusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutKursusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKursusInput, UserUncheckedCreateWithoutKursusInput>
  }

  export type PendaftaranCreateWithoutKursusInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPendaftaranInput
    Pembayaran?: PembayaranCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranUncheckedCreateWithoutKursusInput = {
    id?: string
    userId: string
    status?: string
    createdAt?: Date | string
    Pembayaran?: PembayaranUncheckedCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranCreateOrConnectWithoutKursusInput = {
    where: PendaftaranWhereUniqueInput
    create: XOR<PendaftaranCreateWithoutKursusInput, PendaftaranUncheckedCreateWithoutKursusInput>
  }

  export type PendaftaranCreateManyKursusInputEnvelope = {
    data: PendaftaranCreateManyKursusInput | PendaftaranCreateManyKursusInput[]
    skipDuplicates?: boolean
  }

  export type HistoriKursusCreateWithoutKursusInput = {
    id?: string
    tanggalSelesai: string
    sertifikat?: string | null
    keterangan?: string | null
    user: UserCreateNestedOneWithoutHistoriKursusInput
  }

  export type HistoriKursusUncheckedCreateWithoutKursusInput = {
    id?: string
    userId: string
    tanggalSelesai: string
    sertifikat?: string | null
    keterangan?: string | null
  }

  export type HistoriKursusCreateOrConnectWithoutKursusInput = {
    where: HistoriKursusWhereUniqueInput
    create: XOR<HistoriKursusCreateWithoutKursusInput, HistoriKursusUncheckedCreateWithoutKursusInput>
  }

  export type HistoriKursusCreateManyKursusInputEnvelope = {
    data: HistoriKursusCreateManyKursusInput | HistoriKursusCreateManyKursusInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutKursusInput = {
    update: XOR<UserUpdateWithoutKursusInput, UserUncheckedUpdateWithoutKursusInput>
    create: XOR<UserCreateWithoutKursusInput, UserUncheckedCreateWithoutKursusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKursusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKursusInput, UserUncheckedUpdateWithoutKursusInput>
  }

  export type UserUpdateWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUpdateManyWithoutUserNestedInput
    HistoriKursus?: HistoriKursusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutUserNestedInput
    HistoriKursus?: HistoriKursusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PendaftaranUpsertWithWhereUniqueWithoutKursusInput = {
    where: PendaftaranWhereUniqueInput
    update: XOR<PendaftaranUpdateWithoutKursusInput, PendaftaranUncheckedUpdateWithoutKursusInput>
    create: XOR<PendaftaranCreateWithoutKursusInput, PendaftaranUncheckedCreateWithoutKursusInput>
  }

  export type PendaftaranUpdateWithWhereUniqueWithoutKursusInput = {
    where: PendaftaranWhereUniqueInput
    data: XOR<PendaftaranUpdateWithoutKursusInput, PendaftaranUncheckedUpdateWithoutKursusInput>
  }

  export type PendaftaranUpdateManyWithWhereWithoutKursusInput = {
    where: PendaftaranScalarWhereInput
    data: XOR<PendaftaranUpdateManyMutationInput, PendaftaranUncheckedUpdateManyWithoutKursusInput>
  }

  export type HistoriKursusUpsertWithWhereUniqueWithoutKursusInput = {
    where: HistoriKursusWhereUniqueInput
    update: XOR<HistoriKursusUpdateWithoutKursusInput, HistoriKursusUncheckedUpdateWithoutKursusInput>
    create: XOR<HistoriKursusCreateWithoutKursusInput, HistoriKursusUncheckedCreateWithoutKursusInput>
  }

  export type HistoriKursusUpdateWithWhereUniqueWithoutKursusInput = {
    where: HistoriKursusWhereUniqueInput
    data: XOR<HistoriKursusUpdateWithoutKursusInput, HistoriKursusUncheckedUpdateWithoutKursusInput>
  }

  export type HistoriKursusUpdateManyWithWhereWithoutKursusInput = {
    where: HistoriKursusScalarWhereInput
    data: XOR<HistoriKursusUpdateManyMutationInput, HistoriKursusUncheckedUpdateManyWithoutKursusInput>
  }

  export type UserCreateWithoutPendaftaranInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin: string
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp: string
    email: string
    agama?: string | null
    jurusan?: string | null
    tahunAkademik?: string | null
    password?: string | null
    role?: string
    keahlian?: string | null
    jabatan?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kursus?: KursusCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    HistoriKursus?: HistoriKursusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPendaftaranInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin: string
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp: string
    email: string
    agama?: string | null
    jurusan?: string | null
    tahunAkademik?: string | null
    password?: string | null
    role?: string
    keahlian?: string | null
    jabatan?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kursus?: KursusUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    HistoriKursus?: HistoriKursusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPendaftaranInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPendaftaranInput, UserUncheckedCreateWithoutPendaftaranInput>
  }

  export type KursusCreateWithoutPendaftaranInput = {
    id?: string
    nama: string
    harga: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instrukturId: string
    user: UserCreateNestedOneWithoutKursusInput
    HistoriKursus?: HistoriKursusCreateNestedManyWithoutKursusInput
  }

  export type KursusUncheckedCreateWithoutPendaftaranInput = {
    id?: string
    nama: string
    harga: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    instrukturId: string
    HistoriKursus?: HistoriKursusUncheckedCreateNestedManyWithoutKursusInput
  }

  export type KursusCreateOrConnectWithoutPendaftaranInput = {
    where: KursusWhereUniqueInput
    create: XOR<KursusCreateWithoutPendaftaranInput, KursusUncheckedCreateWithoutPendaftaranInput>
  }

  export type PembayaranCreateWithoutPendaftaranInput = {
    id?: string
    metode: string
    jumlah: number
    buktiBayar: string
    status?: string
    createdAt?: Date | string
  }

  export type PembayaranUncheckedCreateWithoutPendaftaranInput = {
    id?: string
    metode: string
    jumlah: number
    buktiBayar: string
    status?: string
    createdAt?: Date | string
  }

  export type PembayaranCreateOrConnectWithoutPendaftaranInput = {
    where: PembayaranWhereUniqueInput
    create: XOR<PembayaranCreateWithoutPendaftaranInput, PembayaranUncheckedCreateWithoutPendaftaranInput>
  }

  export type UserUpsertWithoutPendaftaranInput = {
    update: XOR<UserUpdateWithoutPendaftaranInput, UserUncheckedUpdateWithoutPendaftaranInput>
    create: XOR<UserCreateWithoutPendaftaranInput, UserUncheckedCreateWithoutPendaftaranInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPendaftaranInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPendaftaranInput, UserUncheckedUpdateWithoutPendaftaranInput>
  }

  export type UserUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    HistoriKursus?: HistoriKursusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    HistoriKursus?: HistoriKursusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KursusUpsertWithoutPendaftaranInput = {
    update: XOR<KursusUpdateWithoutPendaftaranInput, KursusUncheckedUpdateWithoutPendaftaranInput>
    create: XOR<KursusCreateWithoutPendaftaranInput, KursusUncheckedCreateWithoutPendaftaranInput>
    where?: KursusWhereInput
  }

  export type KursusUpdateToOneWithWhereWithoutPendaftaranInput = {
    where?: KursusWhereInput
    data: XOR<KursusUpdateWithoutPendaftaranInput, KursusUncheckedUpdateWithoutPendaftaranInput>
  }

  export type KursusUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrukturId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutKursusNestedInput
    HistoriKursus?: HistoriKursusUpdateManyWithoutKursusNestedInput
  }

  export type KursusUncheckedUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    instrukturId?: StringFieldUpdateOperationsInput | string
    HistoriKursus?: HistoriKursusUncheckedUpdateManyWithoutKursusNestedInput
  }

  export type PembayaranUpsertWithoutPendaftaranInput = {
    update: XOR<PembayaranUpdateWithoutPendaftaranInput, PembayaranUncheckedUpdateWithoutPendaftaranInput>
    create: XOR<PembayaranCreateWithoutPendaftaranInput, PembayaranUncheckedCreateWithoutPendaftaranInput>
    where?: PembayaranWhereInput
  }

  export type PembayaranUpdateToOneWithWhereWithoutPendaftaranInput = {
    where?: PembayaranWhereInput
    data: XOR<PembayaranUpdateWithoutPendaftaranInput, PembayaranUncheckedUpdateWithoutPendaftaranInput>
  }

  export type PembayaranUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    buktiBayar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PembayaranUncheckedUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    metode?: StringFieldUpdateOperationsInput | string
    jumlah?: IntFieldUpdateOperationsInput | number
    buktiBayar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftaranCreateWithoutPembayaranInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPendaftaranInput
    kursus: KursusCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranUncheckedCreateWithoutPembayaranInput = {
    id?: string
    userId: string
    kursusId: string
    status?: string
    createdAt?: Date | string
  }

  export type PendaftaranCreateOrConnectWithoutPembayaranInput = {
    where: PendaftaranWhereUniqueInput
    create: XOR<PendaftaranCreateWithoutPembayaranInput, PendaftaranUncheckedCreateWithoutPembayaranInput>
  }

  export type PendaftaranUpsertWithoutPembayaranInput = {
    update: XOR<PendaftaranUpdateWithoutPembayaranInput, PendaftaranUncheckedUpdateWithoutPembayaranInput>
    create: XOR<PendaftaranCreateWithoutPembayaranInput, PendaftaranUncheckedCreateWithoutPembayaranInput>
    where?: PendaftaranWhereInput
  }

  export type PendaftaranUpdateToOneWithWhereWithoutPembayaranInput = {
    where?: PendaftaranWhereInput
    data: XOR<PendaftaranUpdateWithoutPembayaranInput, PendaftaranUncheckedUpdateWithoutPembayaranInput>
  }

  export type PendaftaranUpdateWithoutPembayaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPendaftaranNestedInput
    kursus?: KursusUpdateOneRequiredWithoutPendaftaranNestedInput
  }

  export type PendaftaranUncheckedUpdateWithoutPembayaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutHistoriKursusInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin: string
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp: string
    email: string
    agama?: string | null
    jurusan?: string | null
    tahunAkademik?: string | null
    password?: string | null
    role?: string
    keahlian?: string | null
    jabatan?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kursus?: KursusCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoriKursusInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin: string
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp: string
    email: string
    agama?: string | null
    jurusan?: string | null
    tahunAkademik?: string | null
    password?: string | null
    role?: string
    keahlian?: string | null
    jabatan?: string | null
    image?: string | null
    emailVerified?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kursus?: KursusUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoriKursusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoriKursusInput, UserUncheckedCreateWithoutHistoriKursusInput>
  }

  export type KursusCreateWithoutHistoriKursusInput = {
    id?: string
    nama: string
    harga: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instrukturId: string
    user: UserCreateNestedOneWithoutKursusInput
    Pendaftaran?: PendaftaranCreateNestedManyWithoutKursusInput
  }

  export type KursusUncheckedCreateWithoutHistoriKursusInput = {
    id?: string
    nama: string
    harga: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    instrukturId: string
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutKursusInput
  }

  export type KursusCreateOrConnectWithoutHistoriKursusInput = {
    where: KursusWhereUniqueInput
    create: XOR<KursusCreateWithoutHistoriKursusInput, KursusUncheckedCreateWithoutHistoriKursusInput>
  }

  export type UserUpsertWithoutHistoriKursusInput = {
    update: XOR<UserUpdateWithoutHistoriKursusInput, UserUncheckedUpdateWithoutHistoriKursusInput>
    create: XOR<UserCreateWithoutHistoriKursusInput, UserUncheckedCreateWithoutHistoriKursusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoriKursusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoriKursusInput, UserUncheckedUpdateWithoutHistoriKursusInput>
  }

  export type UserUpdateWithoutHistoriKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoriKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: StringFieldUpdateOperationsInput | string
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    agama?: NullableStringFieldUpdateOperationsInput | string | null
    jurusan?: NullableStringFieldUpdateOperationsInput | string | null
    tahunAkademik?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    keahlian?: NullableStringFieldUpdateOperationsInput | string | null
    jabatan?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KursusUpsertWithoutHistoriKursusInput = {
    update: XOR<KursusUpdateWithoutHistoriKursusInput, KursusUncheckedUpdateWithoutHistoriKursusInput>
    create: XOR<KursusCreateWithoutHistoriKursusInput, KursusUncheckedCreateWithoutHistoriKursusInput>
    where?: KursusWhereInput
  }

  export type KursusUpdateToOneWithWhereWithoutHistoriKursusInput = {
    where?: KursusWhereInput
    data: XOR<KursusUpdateWithoutHistoriKursusInput, KursusUncheckedUpdateWithoutHistoriKursusInput>
  }

  export type KursusUpdateWithoutHistoriKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrukturId?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutKursusNestedInput
    Pendaftaran?: PendaftaranUpdateManyWithoutKursusNestedInput
  }

  export type KursusUncheckedUpdateWithoutHistoriKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    instrukturId?: StringFieldUpdateOperationsInput | string
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutKursusNestedInput
  }

  export type KursusCreateManyUserInput = {
    id?: string
    nama: string
    harga: number
    createdAt?: Date | string
    updatedAt?: Date | string
    instrukturId: string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PendaftaranCreateManyUserInput = {
    id?: string
    kursusId: string
    status?: string
    createdAt?: Date | string
  }

  export type HistoriKursusCreateManyUserInput = {
    id?: string
    kursusId: string
    tanggalSelesai: string
    sertifikat?: string | null
    keterangan?: string | null
  }

  export type KursusUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrukturId?: StringFieldUpdateOperationsInput | string
    Pendaftaran?: PendaftaranUpdateManyWithoutKursusNestedInput
    HistoriKursus?: HistoriKursusUpdateManyWithoutKursusNestedInput
  }

  export type KursusUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrukturId?: StringFieldUpdateOperationsInput | string
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutKursusNestedInput
    HistoriKursus?: HistoriKursusUncheckedUpdateManyWithoutKursusNestedInput
  }

  export type KursusUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instrukturId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftaranUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUpdateOneRequiredWithoutPendaftaranNestedInput
    Pembayaran?: PembayaranUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pembayaran?: PembayaranUncheckedUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriKursusUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalSelesai?: StringFieldUpdateOperationsInput | string
    sertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    kursus?: KursusUpdateOneRequiredWithoutHistoriKursusNestedInput
  }

  export type HistoriKursusUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    tanggalSelesai?: StringFieldUpdateOperationsInput | string
    sertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriKursusUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    tanggalSelesai?: StringFieldUpdateOperationsInput | string
    sertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PendaftaranCreateManyKursusInput = {
    id?: string
    userId: string
    status?: string
    createdAt?: Date | string
  }

  export type HistoriKursusCreateManyKursusInput = {
    id?: string
    userId: string
    tanggalSelesai: string
    sertifikat?: string | null
    keterangan?: string | null
  }

  export type PendaftaranUpdateWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPendaftaranNestedInput
    Pembayaran?: PembayaranUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranUncheckedUpdateWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pembayaran?: PembayaranUncheckedUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranUncheckedUpdateManyWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriKursusUpdateWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanggalSelesai?: StringFieldUpdateOperationsInput | string
    sertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutHistoriKursusNestedInput
  }

  export type HistoriKursusUncheckedUpdateWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tanggalSelesai?: StringFieldUpdateOperationsInput | string
    sertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriKursusUncheckedUpdateManyWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tanggalSelesai?: StringFieldUpdateOperationsInput | string
    sertifikat?: NullableStringFieldUpdateOperationsInput | string | null
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
  }



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