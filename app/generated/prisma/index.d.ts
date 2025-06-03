
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
 * Model Sertifikat
 * 
 */
export type Sertifikat = $Result.DefaultSelection<Prisma.$SertifikatPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Jadwal
 * 
 */
export type Jadwal = $Result.DefaultSelection<Prisma.$JadwalPayload>

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
   * `prisma.sertifikat`: Exposes CRUD operations for the **Sertifikat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sertifikats
    * const sertifikats = await prisma.sertifikat.findMany()
    * ```
    */
  get sertifikat(): Prisma.SertifikatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jadwal`: Exposes CRUD operations for the **Jadwal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jadwals
    * const jadwals = await prisma.jadwal.findMany()
    * ```
    */
  get jadwal(): Prisma.JadwalDelegate<ExtArgs, ClientOptions>;
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
    Sertifikat: 'Sertifikat',
    Payment: 'Payment',
    Jadwal: 'Jadwal'
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
      modelProps: "account" | "session" | "verificationToken" | "user" | "kursus" | "pendaftaran" | "sertifikat" | "payment" | "jadwal"
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
      Sertifikat: {
        payload: Prisma.$SertifikatPayload<ExtArgs>
        fields: Prisma.SertifikatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SertifikatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SertifikatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>
          }
          findFirst: {
            args: Prisma.SertifikatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SertifikatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>
          }
          findMany: {
            args: Prisma.SertifikatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>[]
          }
          create: {
            args: Prisma.SertifikatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>
          }
          createMany: {
            args: Prisma.SertifikatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SertifikatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>[]
          }
          delete: {
            args: Prisma.SertifikatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>
          }
          update: {
            args: Prisma.SertifikatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>
          }
          deleteMany: {
            args: Prisma.SertifikatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SertifikatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SertifikatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>[]
          }
          upsert: {
            args: Prisma.SertifikatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SertifikatPayload>
          }
          aggregate: {
            args: Prisma.SertifikatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSertifikat>
          }
          groupBy: {
            args: Prisma.SertifikatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SertifikatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SertifikatCountArgs<ExtArgs>
            result: $Utils.Optional<SertifikatCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Jadwal: {
        payload: Prisma.$JadwalPayload<ExtArgs>
        fields: Prisma.JadwalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JadwalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JadwalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findFirst: {
            args: Prisma.JadwalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JadwalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findMany: {
            args: Prisma.JadwalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          create: {
            args: Prisma.JadwalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          createMany: {
            args: Prisma.JadwalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JadwalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          delete: {
            args: Prisma.JadwalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          update: {
            args: Prisma.JadwalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          deleteMany: {
            args: Prisma.JadwalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JadwalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JadwalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          upsert: {
            args: Prisma.JadwalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          aggregate: {
            args: Prisma.JadwalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwal>
          }
          groupBy: {
            args: Prisma.JadwalGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalGroupByOutputType>[]
          }
          count: {
            args: Prisma.JadwalCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalCountAggregateOutputType> | number
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
    sertifikat?: SertifikatOmit
    payment?: PaymentOmit
    jadwal?: JadwalOmit
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
    kursusInstruktur: number
    Account: number
    Session: number
    Pendaftaran: number
    Jadwal: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kursusInstruktur?: boolean | UserCountOutputTypeCountKursusInstrukturArgs
    Account?: boolean | UserCountOutputTypeCountAccountArgs
    Session?: boolean | UserCountOutputTypeCountSessionArgs
    Pendaftaran?: boolean | UserCountOutputTypeCountPendaftaranArgs
    Jadwal?: boolean | UserCountOutputTypeCountJadwalArgs
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
  export type UserCountOutputTypeCountKursusInstrukturArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
  }


  /**
   * Count Type KursusCountOutputType
   */

  export type KursusCountOutputType = {
    Pendaftaran: number
    Jadwal: number
  }

  export type KursusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Pendaftaran?: boolean | KursusCountOutputTypeCountPendaftaranArgs
    Jadwal?: boolean | KursusCountOutputTypeCountJadwalArgs
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
  export type KursusCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
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
    jenisKelamin: string | null
    tempatLahir: string | null
    tanggalLahir: string | null
    mediaSosial: string | null
    noHp: string | null
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
    kursusInstruktur?: boolean | User$kursusInstrukturArgs<ExtArgs>
    Account?: boolean | User$AccountArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    Pendaftaran?: boolean | User$PendaftaranArgs<ExtArgs>
    Jadwal?: boolean | User$JadwalArgs<ExtArgs>
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
    kursusInstruktur?: boolean | User$kursusInstrukturArgs<ExtArgs>
    Account?: boolean | User$AccountArgs<ExtArgs>
    Session?: boolean | User$SessionArgs<ExtArgs>
    Pendaftaran?: boolean | User$PendaftaranArgs<ExtArgs>
    Jadwal?: boolean | User$JadwalArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      kursusInstruktur: Prisma.$KursusPayload<ExtArgs>[]
      Account: Prisma.$AccountPayload<ExtArgs>[]
      Session: Prisma.$SessionPayload<ExtArgs>[]
      Pendaftaran: Prisma.$PendaftaranPayload<ExtArgs>[]
      Jadwal: Prisma.$JadwalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      nik: string | null
      jenisKelamin: string | null
      tempatLahir: string | null
      tanggalLahir: string | null
      mediaSosial: string | null
      noHp: string | null
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
    kursusInstruktur<T extends User$kursusInstrukturArgs<ExtArgs> = {}>(args?: Subset<T, User$kursusInstrukturArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Account<T extends User$AccountArgs<ExtArgs> = {}>(args?: Subset<T, User$AccountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Session<T extends User$SessionArgs<ExtArgs> = {}>(args?: Subset<T, User$SessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Pendaftaran<T extends User$PendaftaranArgs<ExtArgs> = {}>(args?: Subset<T, User$PendaftaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Jadwal<T extends User$JadwalArgs<ExtArgs> = {}>(args?: Subset<T, User$JadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * User.kursusInstruktur
   */
  export type User$kursusInstrukturArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.Jadwal
   */
  export type User$JadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    cursor?: JadwalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
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
    lamaKursus: number | null
    kuota: number | null
  }

  export type KursusSumAggregateOutputType = {
    harga: number | null
    lamaKursus: number | null
    kuota: number | null
  }

  export type KursusMinAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    harga: number | null
    lamaKursus: number | null
    kuota: number | null
    status: string | null
    thumbnail: string | null
    tanggalMulai: Date | null
    tanggalSelesai: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type KursusMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    harga: number | null
    lamaKursus: number | null
    kuota: number | null
    status: string | null
    thumbnail: string | null
    tanggalMulai: Date | null
    tanggalSelesai: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type KursusCountAggregateOutputType = {
    id: number
    nama: number
    deskripsi: number
    harga: number
    lamaKursus: number
    kuota: number
    status: number
    thumbnail: number
    tanggalMulai: number
    tanggalSelesai: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type KursusAvgAggregateInputType = {
    harga?: true
    lamaKursus?: true
    kuota?: true
  }

  export type KursusSumAggregateInputType = {
    harga?: true
    lamaKursus?: true
    kuota?: true
  }

  export type KursusMinAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    harga?: true
    lamaKursus?: true
    kuota?: true
    status?: true
    thumbnail?: true
    tanggalMulai?: true
    tanggalSelesai?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type KursusMaxAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    harga?: true
    lamaKursus?: true
    kuota?: true
    status?: true
    thumbnail?: true
    tanggalMulai?: true
    tanggalSelesai?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type KursusCountAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    harga?: true
    lamaKursus?: true
    kuota?: true
    status?: true
    thumbnail?: true
    tanggalMulai?: true
    tanggalSelesai?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
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
    deskripsi: string | null
    harga: number
    lamaKursus: number | null
    kuota: number | null
    status: string
    thumbnail: string | null
    tanggalMulai: Date | null
    tanggalSelesai: Date | null
    createdAt: Date
    updatedAt: Date
    userId: string | null
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
    deskripsi?: boolean
    harga?: boolean
    lamaKursus?: boolean
    kuota?: boolean
    status?: boolean
    thumbnail?: boolean
    tanggalMulai?: boolean
    tanggalSelesai?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Kursus$userArgs<ExtArgs>
    Pendaftaran?: boolean | Kursus$PendaftaranArgs<ExtArgs>
    Jadwal?: boolean | Kursus$JadwalArgs<ExtArgs>
    _count?: boolean | KursusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kursus"]>

  export type KursusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    harga?: boolean
    lamaKursus?: boolean
    kuota?: boolean
    status?: boolean
    thumbnail?: boolean
    tanggalMulai?: boolean
    tanggalSelesai?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Kursus$userArgs<ExtArgs>
  }, ExtArgs["result"]["kursus"]>

  export type KursusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    harga?: boolean
    lamaKursus?: boolean
    kuota?: boolean
    status?: boolean
    thumbnail?: boolean
    tanggalMulai?: boolean
    tanggalSelesai?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Kursus$userArgs<ExtArgs>
  }, ExtArgs["result"]["kursus"]>

  export type KursusSelectScalar = {
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    harga?: boolean
    lamaKursus?: boolean
    kuota?: boolean
    status?: boolean
    thumbnail?: boolean
    tanggalMulai?: boolean
    tanggalSelesai?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type KursusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "deskripsi" | "harga" | "lamaKursus" | "kuota" | "status" | "thumbnail" | "tanggalMulai" | "tanggalSelesai" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["kursus"]>
  export type KursusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Kursus$userArgs<ExtArgs>
    Pendaftaran?: boolean | Kursus$PendaftaranArgs<ExtArgs>
    Jadwal?: boolean | Kursus$JadwalArgs<ExtArgs>
    _count?: boolean | KursusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KursusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Kursus$userArgs<ExtArgs>
  }
  export type KursusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Kursus$userArgs<ExtArgs>
  }

  export type $KursusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kursus"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      Pendaftaran: Prisma.$PendaftaranPayload<ExtArgs>[]
      Jadwal: Prisma.$JadwalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      deskripsi: string | null
      harga: number
      lamaKursus: number | null
      kuota: number | null
      status: string
      thumbnail: string | null
      tanggalMulai: Date | null
      tanggalSelesai: Date | null
      createdAt: Date
      updatedAt: Date
      userId: string | null
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
    user<T extends Kursus$userArgs<ExtArgs> = {}>(args?: Subset<T, Kursus$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Pendaftaran<T extends Kursus$PendaftaranArgs<ExtArgs> = {}>(args?: Subset<T, Kursus$PendaftaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendaftaranPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Jadwal<T extends Kursus$JadwalArgs<ExtArgs> = {}>(args?: Subset<T, Kursus$JadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly deskripsi: FieldRef<"Kursus", 'String'>
    readonly harga: FieldRef<"Kursus", 'Int'>
    readonly lamaKursus: FieldRef<"Kursus", 'Int'>
    readonly kuota: FieldRef<"Kursus", 'Int'>
    readonly status: FieldRef<"Kursus", 'String'>
    readonly thumbnail: FieldRef<"Kursus", 'String'>
    readonly tanggalMulai: FieldRef<"Kursus", 'DateTime'>
    readonly tanggalSelesai: FieldRef<"Kursus", 'DateTime'>
    readonly createdAt: FieldRef<"Kursus", 'DateTime'>
    readonly updatedAt: FieldRef<"Kursus", 'DateTime'>
    readonly userId: FieldRef<"Kursus", 'String'>
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
   * Kursus.user
   */
  export type Kursus$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
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
   * Kursus.Jadwal
   */
  export type Kursus$JadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    cursor?: JadwalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
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
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PendaftaranMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    kursusId: string | null
    status: string | null
    keterangan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PendaftaranCountAggregateOutputType = {
    id: number
    userId: number
    kursusId: number
    status: number
    keterangan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PendaftaranMinAggregateInputType = {
    id?: true
    userId?: true
    kursusId?: true
    status?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PendaftaranMaxAggregateInputType = {
    id?: true
    userId?: true
    kursusId?: true
    status?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PendaftaranCountAggregateInputType = {
    id?: true
    userId?: true
    kursusId?: true
    status?: true
    keterangan?: true
    createdAt?: true
    updatedAt?: true
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
    keterangan: string | null
    createdAt: Date
    updatedAt: Date
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
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
    Payment?: boolean | Pendaftaran$PaymentArgs<ExtArgs>
    sertifikat?: boolean | Pendaftaran$sertifikatArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaran"]>

  export type PendaftaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kursusId?: boolean
    status?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaran"]>

  export type PendaftaranSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    kursusId?: boolean
    status?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pendaftaran"]>

  export type PendaftaranSelectScalar = {
    id?: boolean
    userId?: boolean
    kursusId?: boolean
    status?: boolean
    keterangan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PendaftaranOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "kursusId" | "status" | "keterangan" | "createdAt" | "updatedAt", ExtArgs["result"]["pendaftaran"]>
  export type PendaftaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
    Payment?: boolean | Pendaftaran$PaymentArgs<ExtArgs>
    sertifikat?: boolean | Pendaftaran$sertifikatArgs<ExtArgs>
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
      Payment: Prisma.$PaymentPayload<ExtArgs> | null
      sertifikat: Prisma.$SertifikatPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      kursusId: string
      status: string
      keterangan: string | null
      createdAt: Date
      updatedAt: Date
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
    Payment<T extends Pendaftaran$PaymentArgs<ExtArgs> = {}>(args?: Subset<T, Pendaftaran$PaymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sertifikat<T extends Pendaftaran$sertifikatArgs<ExtArgs> = {}>(args?: Subset<T, Pendaftaran$sertifikatArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly keterangan: FieldRef<"Pendaftaran", 'String'>
    readonly createdAt: FieldRef<"Pendaftaran", 'DateTime'>
    readonly updatedAt: FieldRef<"Pendaftaran", 'DateTime'>
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
   * Pendaftaran.Payment
   */
  export type Pendaftaran$PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Pendaftaran.sertifikat
   */
  export type Pendaftaran$sertifikatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikatInclude<ExtArgs> | null
    where?: SertifikatWhereInput
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
   * Model Sertifikat
   */

  export type AggregateSertifikat = {
    _count: SertifikatCountAggregateOutputType | null
    _avg: SertifikatAvgAggregateOutputType | null
    _sum: SertifikatSumAggregateOutputType | null
    _min: SertifikatMinAggregateOutputType | null
    _max: SertifikatMaxAggregateOutputType | null
  }

  export type SertifikatAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type SertifikatSumAggregateOutputType = {
    fileSize: number | null
  }

  export type SertifikatMinAggregateOutputType = {
    id: string | null
    pendaftaranId: string | null
    nomor: string | null
    tanggalTerbit: Date | null
    fileUrl: string | null
    fileName: string | null
    fileType: string | null
    fileSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SertifikatMaxAggregateOutputType = {
    id: string | null
    pendaftaranId: string | null
    nomor: string | null
    tanggalTerbit: Date | null
    fileUrl: string | null
    fileName: string | null
    fileType: string | null
    fileSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SertifikatCountAggregateOutputType = {
    id: number
    pendaftaranId: number
    nomor: number
    tanggalTerbit: number
    fileUrl: number
    fileName: number
    fileType: number
    fileSize: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SertifikatAvgAggregateInputType = {
    fileSize?: true
  }

  export type SertifikatSumAggregateInputType = {
    fileSize?: true
  }

  export type SertifikatMinAggregateInputType = {
    id?: true
    pendaftaranId?: true
    nomor?: true
    tanggalTerbit?: true
    fileUrl?: true
    fileName?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SertifikatMaxAggregateInputType = {
    id?: true
    pendaftaranId?: true
    nomor?: true
    tanggalTerbit?: true
    fileUrl?: true
    fileName?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SertifikatCountAggregateInputType = {
    id?: true
    pendaftaranId?: true
    nomor?: true
    tanggalTerbit?: true
    fileUrl?: true
    fileName?: true
    fileType?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SertifikatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sertifikat to aggregate.
     */
    where?: SertifikatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sertifikats to fetch.
     */
    orderBy?: SertifikatOrderByWithRelationInput | SertifikatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SertifikatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sertifikats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sertifikats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sertifikats
    **/
    _count?: true | SertifikatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SertifikatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SertifikatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SertifikatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SertifikatMaxAggregateInputType
  }

  export type GetSertifikatAggregateType<T extends SertifikatAggregateArgs> = {
        [P in keyof T & keyof AggregateSertifikat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSertifikat[P]>
      : GetScalarType<T[P], AggregateSertifikat[P]>
  }




  export type SertifikatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SertifikatWhereInput
    orderBy?: SertifikatOrderByWithAggregationInput | SertifikatOrderByWithAggregationInput[]
    by: SertifikatScalarFieldEnum[] | SertifikatScalarFieldEnum
    having?: SertifikatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SertifikatCountAggregateInputType | true
    _avg?: SertifikatAvgAggregateInputType
    _sum?: SertifikatSumAggregateInputType
    _min?: SertifikatMinAggregateInputType
    _max?: SertifikatMaxAggregateInputType
  }

  export type SertifikatGroupByOutputType = {
    id: string
    pendaftaranId: string
    nomor: string
    tanggalTerbit: Date
    fileUrl: string | null
    fileName: string | null
    fileType: string | null
    fileSize: number | null
    createdAt: Date
    updatedAt: Date
    _count: SertifikatCountAggregateOutputType | null
    _avg: SertifikatAvgAggregateOutputType | null
    _sum: SertifikatSumAggregateOutputType | null
    _min: SertifikatMinAggregateOutputType | null
    _max: SertifikatMaxAggregateOutputType | null
  }

  type GetSertifikatGroupByPayload<T extends SertifikatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SertifikatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SertifikatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SertifikatGroupByOutputType[P]>
            : GetScalarType<T[P], SertifikatGroupByOutputType[P]>
        }
      >
    >


  export type SertifikatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pendaftaranId?: boolean
    nomor?: boolean
    tanggalTerbit?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sertifikat"]>

  export type SertifikatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pendaftaranId?: boolean
    nomor?: boolean
    tanggalTerbit?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sertifikat"]>

  export type SertifikatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pendaftaranId?: boolean
    nomor?: boolean
    tanggalTerbit?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sertifikat"]>

  export type SertifikatSelectScalar = {
    id?: boolean
    pendaftaranId?: boolean
    nomor?: boolean
    tanggalTerbit?: boolean
    fileUrl?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SertifikatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pendaftaranId" | "nomor" | "tanggalTerbit" | "fileUrl" | "fileName" | "fileType" | "fileSize" | "createdAt" | "updatedAt", ExtArgs["result"]["sertifikat"]>
  export type SertifikatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }
  export type SertifikatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }
  export type SertifikatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }

  export type $SertifikatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sertifikat"
    objects: {
      pendaftaran: Prisma.$PendaftaranPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pendaftaranId: string
      nomor: string
      tanggalTerbit: Date
      fileUrl: string | null
      fileName: string | null
      fileType: string | null
      fileSize: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sertifikat"]>
    composites: {}
  }

  type SertifikatGetPayload<S extends boolean | null | undefined | SertifikatDefaultArgs> = $Result.GetResult<Prisma.$SertifikatPayload, S>

  type SertifikatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SertifikatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SertifikatCountAggregateInputType | true
    }

  export interface SertifikatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sertifikat'], meta: { name: 'Sertifikat' } }
    /**
     * Find zero or one Sertifikat that matches the filter.
     * @param {SertifikatFindUniqueArgs} args - Arguments to find a Sertifikat
     * @example
     * // Get one Sertifikat
     * const sertifikat = await prisma.sertifikat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SertifikatFindUniqueArgs>(args: SelectSubset<T, SertifikatFindUniqueArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sertifikat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SertifikatFindUniqueOrThrowArgs} args - Arguments to find a Sertifikat
     * @example
     * // Get one Sertifikat
     * const sertifikat = await prisma.sertifikat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SertifikatFindUniqueOrThrowArgs>(args: SelectSubset<T, SertifikatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sertifikat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatFindFirstArgs} args - Arguments to find a Sertifikat
     * @example
     * // Get one Sertifikat
     * const sertifikat = await prisma.sertifikat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SertifikatFindFirstArgs>(args?: SelectSubset<T, SertifikatFindFirstArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sertifikat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatFindFirstOrThrowArgs} args - Arguments to find a Sertifikat
     * @example
     * // Get one Sertifikat
     * const sertifikat = await prisma.sertifikat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SertifikatFindFirstOrThrowArgs>(args?: SelectSubset<T, SertifikatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sertifikats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sertifikats
     * const sertifikats = await prisma.sertifikat.findMany()
     * 
     * // Get first 10 Sertifikats
     * const sertifikats = await prisma.sertifikat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sertifikatWithIdOnly = await prisma.sertifikat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SertifikatFindManyArgs>(args?: SelectSubset<T, SertifikatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sertifikat.
     * @param {SertifikatCreateArgs} args - Arguments to create a Sertifikat.
     * @example
     * // Create one Sertifikat
     * const Sertifikat = await prisma.sertifikat.create({
     *   data: {
     *     // ... data to create a Sertifikat
     *   }
     * })
     * 
     */
    create<T extends SertifikatCreateArgs>(args: SelectSubset<T, SertifikatCreateArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sertifikats.
     * @param {SertifikatCreateManyArgs} args - Arguments to create many Sertifikats.
     * @example
     * // Create many Sertifikats
     * const sertifikat = await prisma.sertifikat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SertifikatCreateManyArgs>(args?: SelectSubset<T, SertifikatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sertifikats and returns the data saved in the database.
     * @param {SertifikatCreateManyAndReturnArgs} args - Arguments to create many Sertifikats.
     * @example
     * // Create many Sertifikats
     * const sertifikat = await prisma.sertifikat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sertifikats and only return the `id`
     * const sertifikatWithIdOnly = await prisma.sertifikat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SertifikatCreateManyAndReturnArgs>(args?: SelectSubset<T, SertifikatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sertifikat.
     * @param {SertifikatDeleteArgs} args - Arguments to delete one Sertifikat.
     * @example
     * // Delete one Sertifikat
     * const Sertifikat = await prisma.sertifikat.delete({
     *   where: {
     *     // ... filter to delete one Sertifikat
     *   }
     * })
     * 
     */
    delete<T extends SertifikatDeleteArgs>(args: SelectSubset<T, SertifikatDeleteArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sertifikat.
     * @param {SertifikatUpdateArgs} args - Arguments to update one Sertifikat.
     * @example
     * // Update one Sertifikat
     * const sertifikat = await prisma.sertifikat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SertifikatUpdateArgs>(args: SelectSubset<T, SertifikatUpdateArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sertifikats.
     * @param {SertifikatDeleteManyArgs} args - Arguments to filter Sertifikats to delete.
     * @example
     * // Delete a few Sertifikats
     * const { count } = await prisma.sertifikat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SertifikatDeleteManyArgs>(args?: SelectSubset<T, SertifikatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sertifikats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sertifikats
     * const sertifikat = await prisma.sertifikat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SertifikatUpdateManyArgs>(args: SelectSubset<T, SertifikatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sertifikats and returns the data updated in the database.
     * @param {SertifikatUpdateManyAndReturnArgs} args - Arguments to update many Sertifikats.
     * @example
     * // Update many Sertifikats
     * const sertifikat = await prisma.sertifikat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sertifikats and only return the `id`
     * const sertifikatWithIdOnly = await prisma.sertifikat.updateManyAndReturn({
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
    updateManyAndReturn<T extends SertifikatUpdateManyAndReturnArgs>(args: SelectSubset<T, SertifikatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sertifikat.
     * @param {SertifikatUpsertArgs} args - Arguments to update or create a Sertifikat.
     * @example
     * // Update or create a Sertifikat
     * const sertifikat = await prisma.sertifikat.upsert({
     *   create: {
     *     // ... data to create a Sertifikat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sertifikat we want to update
     *   }
     * })
     */
    upsert<T extends SertifikatUpsertArgs>(args: SelectSubset<T, SertifikatUpsertArgs<ExtArgs>>): Prisma__SertifikatClient<$Result.GetResult<Prisma.$SertifikatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sertifikats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatCountArgs} args - Arguments to filter Sertifikats to count.
     * @example
     * // Count the number of Sertifikats
     * const count = await prisma.sertifikat.count({
     *   where: {
     *     // ... the filter for the Sertifikats we want to count
     *   }
     * })
    **/
    count<T extends SertifikatCountArgs>(
      args?: Subset<T, SertifikatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SertifikatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sertifikat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SertifikatAggregateArgs>(args: Subset<T, SertifikatAggregateArgs>): Prisma.PrismaPromise<GetSertifikatAggregateType<T>>

    /**
     * Group by Sertifikat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SertifikatGroupByArgs} args - Group by arguments.
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
      T extends SertifikatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SertifikatGroupByArgs['orderBy'] }
        : { orderBy?: SertifikatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SertifikatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSertifikatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sertifikat model
   */
  readonly fields: SertifikatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sertifikat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SertifikatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Sertifikat model
   */
  interface SertifikatFieldRefs {
    readonly id: FieldRef<"Sertifikat", 'String'>
    readonly pendaftaranId: FieldRef<"Sertifikat", 'String'>
    readonly nomor: FieldRef<"Sertifikat", 'String'>
    readonly tanggalTerbit: FieldRef<"Sertifikat", 'DateTime'>
    readonly fileUrl: FieldRef<"Sertifikat", 'String'>
    readonly fileName: FieldRef<"Sertifikat", 'String'>
    readonly fileType: FieldRef<"Sertifikat", 'String'>
    readonly fileSize: FieldRef<"Sertifikat", 'Int'>
    readonly createdAt: FieldRef<"Sertifikat", 'DateTime'>
    readonly updatedAt: FieldRef<"Sertifikat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sertifikat findUnique
   */
  export type SertifikatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikatInclude<ExtArgs> | null
    /**
     * Filter, which Sertifikat to fetch.
     */
    where: SertifikatWhereUniqueInput
  }

  /**
   * Sertifikat findUniqueOrThrow
   */
  export type SertifikatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikatInclude<ExtArgs> | null
    /**
     * Filter, which Sertifikat to fetch.
     */
    where: SertifikatWhereUniqueInput
  }

  /**
   * Sertifikat findFirst
   */
  export type SertifikatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikatInclude<ExtArgs> | null
    /**
     * Filter, which Sertifikat to fetch.
     */
    where?: SertifikatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sertifikats to fetch.
     */
    orderBy?: SertifikatOrderByWithRelationInput | SertifikatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sertifikats.
     */
    cursor?: SertifikatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sertifikats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sertifikats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sertifikats.
     */
    distinct?: SertifikatScalarFieldEnum | SertifikatScalarFieldEnum[]
  }

  /**
   * Sertifikat findFirstOrThrow
   */
  export type SertifikatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikatInclude<ExtArgs> | null
    /**
     * Filter, which Sertifikat to fetch.
     */
    where?: SertifikatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sertifikats to fetch.
     */
    orderBy?: SertifikatOrderByWithRelationInput | SertifikatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sertifikats.
     */
    cursor?: SertifikatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sertifikats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sertifikats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sertifikats.
     */
    distinct?: SertifikatScalarFieldEnum | SertifikatScalarFieldEnum[]
  }

  /**
   * Sertifikat findMany
   */
  export type SertifikatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikatInclude<ExtArgs> | null
    /**
     * Filter, which Sertifikats to fetch.
     */
    where?: SertifikatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sertifikats to fetch.
     */
    orderBy?: SertifikatOrderByWithRelationInput | SertifikatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sertifikats.
     */
    cursor?: SertifikatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sertifikats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sertifikats.
     */
    skip?: number
    distinct?: SertifikatScalarFieldEnum | SertifikatScalarFieldEnum[]
  }

  /**
   * Sertifikat create
   */
  export type SertifikatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikatInclude<ExtArgs> | null
    /**
     * The data needed to create a Sertifikat.
     */
    data: XOR<SertifikatCreateInput, SertifikatUncheckedCreateInput>
  }

  /**
   * Sertifikat createMany
   */
  export type SertifikatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sertifikats.
     */
    data: SertifikatCreateManyInput | SertifikatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sertifikat createManyAndReturn
   */
  export type SertifikatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * The data used to create many Sertifikats.
     */
    data: SertifikatCreateManyInput | SertifikatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sertifikat update
   */
  export type SertifikatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikatInclude<ExtArgs> | null
    /**
     * The data needed to update a Sertifikat.
     */
    data: XOR<SertifikatUpdateInput, SertifikatUncheckedUpdateInput>
    /**
     * Choose, which Sertifikat to update.
     */
    where: SertifikatWhereUniqueInput
  }

  /**
   * Sertifikat updateMany
   */
  export type SertifikatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sertifikats.
     */
    data: XOR<SertifikatUpdateManyMutationInput, SertifikatUncheckedUpdateManyInput>
    /**
     * Filter which Sertifikats to update
     */
    where?: SertifikatWhereInput
    /**
     * Limit how many Sertifikats to update.
     */
    limit?: number
  }

  /**
   * Sertifikat updateManyAndReturn
   */
  export type SertifikatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * The data used to update Sertifikats.
     */
    data: XOR<SertifikatUpdateManyMutationInput, SertifikatUncheckedUpdateManyInput>
    /**
     * Filter which Sertifikats to update
     */
    where?: SertifikatWhereInput
    /**
     * Limit how many Sertifikats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sertifikat upsert
   */
  export type SertifikatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikatInclude<ExtArgs> | null
    /**
     * The filter to search for the Sertifikat to update in case it exists.
     */
    where: SertifikatWhereUniqueInput
    /**
     * In case the Sertifikat found by the `where` argument doesn't exist, create a new Sertifikat with this data.
     */
    create: XOR<SertifikatCreateInput, SertifikatUncheckedCreateInput>
    /**
     * In case the Sertifikat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SertifikatUpdateInput, SertifikatUncheckedUpdateInput>
  }

  /**
   * Sertifikat delete
   */
  export type SertifikatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikatInclude<ExtArgs> | null
    /**
     * Filter which Sertifikat to delete.
     */
    where: SertifikatWhereUniqueInput
  }

  /**
   * Sertifikat deleteMany
   */
  export type SertifikatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sertifikats to delete
     */
    where?: SertifikatWhereInput
    /**
     * Limit how many Sertifikats to delete.
     */
    limit?: number
  }

  /**
   * Sertifikat without action
   */
  export type SertifikatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sertifikat
     */
    select?: SertifikatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sertifikat
     */
    omit?: SertifikatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SertifikatInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    method: string | null
    amount: number | null
    status: string | null
    waktuBayar: Date | null
    vaNumber: string | null
    bank: string | null
    orderId: string | null
    transactionId: string | null
    paymentType: string | null
    fraudStatus: string | null
    snapToken: string | null
    redirectUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pendaftaranId: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    method: string | null
    amount: number | null
    status: string | null
    waktuBayar: Date | null
    vaNumber: string | null
    bank: string | null
    orderId: string | null
    transactionId: string | null
    paymentType: string | null
    fraudStatus: string | null
    snapToken: string | null
    redirectUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pendaftaranId: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    method: number
    amount: number
    status: number
    waktuBayar: number
    vaNumber: number
    bank: number
    orderId: number
    transactionId: number
    paymentType: number
    fraudStatus: number
    snapToken: number
    redirectUrl: number
    createdAt: number
    updatedAt: number
    pendaftaranId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    method?: true
    amount?: true
    status?: true
    waktuBayar?: true
    vaNumber?: true
    bank?: true
    orderId?: true
    transactionId?: true
    paymentType?: true
    fraudStatus?: true
    snapToken?: true
    redirectUrl?: true
    createdAt?: true
    updatedAt?: true
    pendaftaranId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    method?: true
    amount?: true
    status?: true
    waktuBayar?: true
    vaNumber?: true
    bank?: true
    orderId?: true
    transactionId?: true
    paymentType?: true
    fraudStatus?: true
    snapToken?: true
    redirectUrl?: true
    createdAt?: true
    updatedAt?: true
    pendaftaranId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    method?: true
    amount?: true
    status?: true
    waktuBayar?: true
    vaNumber?: true
    bank?: true
    orderId?: true
    transactionId?: true
    paymentType?: true
    fraudStatus?: true
    snapToken?: true
    redirectUrl?: true
    createdAt?: true
    updatedAt?: true
    pendaftaranId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    method: string | null
    amount: number
    status: string
    waktuBayar: Date | null
    vaNumber: string | null
    bank: string | null
    orderId: string | null
    transactionId: string | null
    paymentType: string | null
    fraudStatus: string | null
    snapToken: string | null
    redirectUrl: string | null
    createdAt: Date
    updatedAt: Date
    pendaftaranId: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    amount?: boolean
    status?: boolean
    waktuBayar?: boolean
    vaNumber?: boolean
    bank?: boolean
    orderId?: boolean
    transactionId?: boolean
    paymentType?: boolean
    fraudStatus?: boolean
    snapToken?: boolean
    redirectUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pendaftaranId?: boolean
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    amount?: boolean
    status?: boolean
    waktuBayar?: boolean
    vaNumber?: boolean
    bank?: boolean
    orderId?: boolean
    transactionId?: boolean
    paymentType?: boolean
    fraudStatus?: boolean
    snapToken?: boolean
    redirectUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pendaftaranId?: boolean
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    method?: boolean
    amount?: boolean
    status?: boolean
    waktuBayar?: boolean
    vaNumber?: boolean
    bank?: boolean
    orderId?: boolean
    transactionId?: boolean
    paymentType?: boolean
    fraudStatus?: boolean
    snapToken?: boolean
    redirectUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pendaftaranId?: boolean
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    method?: boolean
    amount?: boolean
    status?: boolean
    waktuBayar?: boolean
    vaNumber?: boolean
    bank?: boolean
    orderId?: boolean
    transactionId?: boolean
    paymentType?: boolean
    fraudStatus?: boolean
    snapToken?: boolean
    redirectUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pendaftaranId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "method" | "amount" | "status" | "waktuBayar" | "vaNumber" | "bank" | "orderId" | "transactionId" | "paymentType" | "fraudStatus" | "snapToken" | "redirectUrl" | "createdAt" | "updatedAt" | "pendaftaranId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pendaftaran?: boolean | PendaftaranDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      pendaftaran: Prisma.$PendaftaranPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      method: string | null
      amount: number
      status: string
      waktuBayar: Date | null
      vaNumber: string | null
      bank: string | null
      orderId: string | null
      transactionId: string | null
      paymentType: string | null
      fraudStatus: string | null
      snapToken: string | null
      redirectUrl: string | null
      createdAt: Date
      updatedAt: Date
      pendaftaranId: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly waktuBayar: FieldRef<"Payment", 'DateTime'>
    readonly vaNumber: FieldRef<"Payment", 'String'>
    readonly bank: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly paymentType: FieldRef<"Payment", 'String'>
    readonly fraudStatus: FieldRef<"Payment", 'String'>
    readonly snapToken: FieldRef<"Payment", 'String'>
    readonly redirectUrl: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly pendaftaranId: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Jadwal
   */

  export type AggregateJadwal = {
    _count: JadwalCountAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  export type JadwalMinAggregateOutputType = {
    id: string | null
    kursusId: string | null
    instrukturId: string | null
    deskripsi: string | null
    hari: string | null
    jamMulai: string | null
    jamSelesai: string | null
    lokasi: string | null
    ruangan: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JadwalMaxAggregateOutputType = {
    id: string | null
    kursusId: string | null
    instrukturId: string | null
    deskripsi: string | null
    hari: string | null
    jamMulai: string | null
    jamSelesai: string | null
    lokasi: string | null
    ruangan: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JadwalCountAggregateOutputType = {
    id: number
    kursusId: number
    instrukturId: number
    deskripsi: number
    hari: number
    jamMulai: number
    jamSelesai: number
    lokasi: number
    ruangan: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JadwalMinAggregateInputType = {
    id?: true
    kursusId?: true
    instrukturId?: true
    deskripsi?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    lokasi?: true
    ruangan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JadwalMaxAggregateInputType = {
    id?: true
    kursusId?: true
    instrukturId?: true
    deskripsi?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    lokasi?: true
    ruangan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JadwalCountAggregateInputType = {
    id?: true
    kursusId?: true
    instrukturId?: true
    deskripsi?: true
    hari?: true
    jamMulai?: true
    jamSelesai?: true
    lokasi?: true
    ruangan?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JadwalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwal to aggregate.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jadwals
    **/
    _count?: true | JadwalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalMaxAggregateInputType
  }

  export type GetJadwalAggregateType<T extends JadwalAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwal[P]>
      : GetScalarType<T[P], AggregateJadwal[P]>
  }




  export type JadwalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithAggregationInput | JadwalOrderByWithAggregationInput[]
    by: JadwalScalarFieldEnum[] | JadwalScalarFieldEnum
    having?: JadwalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalCountAggregateInputType | true
    _min?: JadwalMinAggregateInputType
    _max?: JadwalMaxAggregateInputType
  }

  export type JadwalGroupByOutputType = {
    id: string
    kursusId: string
    instrukturId: string | null
    deskripsi: string | null
    hari: string
    jamMulai: string
    jamSelesai: string
    lokasi: string | null
    ruangan: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: JadwalCountAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  type GetJadwalGroupByPayload<T extends JadwalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalGroupByOutputType[P]>
        }
      >
    >


  export type JadwalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kursusId?: boolean
    instrukturId?: boolean
    deskripsi?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    lokasi?: boolean
    ruangan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
    instruktur?: boolean | Jadwal$instrukturArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>

  export type JadwalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kursusId?: boolean
    instrukturId?: boolean
    deskripsi?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    lokasi?: boolean
    ruangan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
    instruktur?: boolean | Jadwal$instrukturArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>

  export type JadwalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kursusId?: boolean
    instrukturId?: boolean
    deskripsi?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    lokasi?: boolean
    ruangan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
    instruktur?: boolean | Jadwal$instrukturArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>

  export type JadwalSelectScalar = {
    id?: boolean
    kursusId?: boolean
    instrukturId?: boolean
    deskripsi?: boolean
    hari?: boolean
    jamMulai?: boolean
    jamSelesai?: boolean
    lokasi?: boolean
    ruangan?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JadwalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kursusId" | "instrukturId" | "deskripsi" | "hari" | "jamMulai" | "jamSelesai" | "lokasi" | "ruangan" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["jadwal"]>
  export type JadwalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
    instruktur?: boolean | Jadwal$instrukturArgs<ExtArgs>
  }
  export type JadwalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
    instruktur?: boolean | Jadwal$instrukturArgs<ExtArgs>
  }
  export type JadwalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kursus?: boolean | KursusDefaultArgs<ExtArgs>
    instruktur?: boolean | Jadwal$instrukturArgs<ExtArgs>
  }

  export type $JadwalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jadwal"
    objects: {
      kursus: Prisma.$KursusPayload<ExtArgs>
      instruktur: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kursusId: string
      instrukturId: string | null
      deskripsi: string | null
      hari: string
      jamMulai: string
      jamSelesai: string
      lokasi: string | null
      ruangan: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jadwal"]>
    composites: {}
  }

  type JadwalGetPayload<S extends boolean | null | undefined | JadwalDefaultArgs> = $Result.GetResult<Prisma.$JadwalPayload, S>

  type JadwalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JadwalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JadwalCountAggregateInputType | true
    }

  export interface JadwalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jadwal'], meta: { name: 'Jadwal' } }
    /**
     * Find zero or one Jadwal that matches the filter.
     * @param {JadwalFindUniqueArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalFindUniqueArgs>(args: SelectSubset<T, JadwalFindUniqueArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Jadwal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JadwalFindUniqueOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalFindUniqueOrThrowArgs>(args: SelectSubset<T, JadwalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalFindFirstArgs>(args?: SelectSubset<T, JadwalFindFirstArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Jadwal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalFindFirstOrThrowArgs>(args?: SelectSubset<T, JadwalFindFirstOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jadwals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jadwals
     * const jadwals = await prisma.jadwal.findMany()
     * 
     * // Get first 10 Jadwals
     * const jadwals = await prisma.jadwal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JadwalFindManyArgs>(args?: SelectSubset<T, JadwalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Jadwal.
     * @param {JadwalCreateArgs} args - Arguments to create a Jadwal.
     * @example
     * // Create one Jadwal
     * const Jadwal = await prisma.jadwal.create({
     *   data: {
     *     // ... data to create a Jadwal
     *   }
     * })
     * 
     */
    create<T extends JadwalCreateArgs>(args: SelectSubset<T, JadwalCreateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jadwals.
     * @param {JadwalCreateManyArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JadwalCreateManyArgs>(args?: SelectSubset<T, JadwalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jadwals and returns the data saved in the database.
     * @param {JadwalCreateManyAndReturnArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jadwals and only return the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JadwalCreateManyAndReturnArgs>(args?: SelectSubset<T, JadwalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Jadwal.
     * @param {JadwalDeleteArgs} args - Arguments to delete one Jadwal.
     * @example
     * // Delete one Jadwal
     * const Jadwal = await prisma.jadwal.delete({
     *   where: {
     *     // ... filter to delete one Jadwal
     *   }
     * })
     * 
     */
    delete<T extends JadwalDeleteArgs>(args: SelectSubset<T, JadwalDeleteArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Jadwal.
     * @param {JadwalUpdateArgs} args - Arguments to update one Jadwal.
     * @example
     * // Update one Jadwal
     * const jadwal = await prisma.jadwal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JadwalUpdateArgs>(args: SelectSubset<T, JadwalUpdateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jadwals.
     * @param {JadwalDeleteManyArgs} args - Arguments to filter Jadwals to delete.
     * @example
     * // Delete a few Jadwals
     * const { count } = await prisma.jadwal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JadwalDeleteManyArgs>(args?: SelectSubset<T, JadwalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jadwals
     * const jadwal = await prisma.jadwal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JadwalUpdateManyArgs>(args: SelectSubset<T, JadwalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwals and returns the data updated in the database.
     * @param {JadwalUpdateManyAndReturnArgs} args - Arguments to update many Jadwals.
     * @example
     * // Update many Jadwals
     * const jadwal = await prisma.jadwal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jadwals and only return the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.updateManyAndReturn({
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
    updateManyAndReturn<T extends JadwalUpdateManyAndReturnArgs>(args: SelectSubset<T, JadwalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Jadwal.
     * @param {JadwalUpsertArgs} args - Arguments to update or create a Jadwal.
     * @example
     * // Update or create a Jadwal
     * const jadwal = await prisma.jadwal.upsert({
     *   create: {
     *     // ... data to create a Jadwal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jadwal we want to update
     *   }
     * })
     */
    upsert<T extends JadwalUpsertArgs>(args: SelectSubset<T, JadwalUpsertArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalCountArgs} args - Arguments to filter Jadwals to count.
     * @example
     * // Count the number of Jadwals
     * const count = await prisma.jadwal.count({
     *   where: {
     *     // ... the filter for the Jadwals we want to count
     *   }
     * })
    **/
    count<T extends JadwalCountArgs>(
      args?: Subset<T, JadwalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JadwalAggregateArgs>(args: Subset<T, JadwalAggregateArgs>): Prisma.PrismaPromise<GetJadwalAggregateType<T>>

    /**
     * Group by Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalGroupByArgs} args - Group by arguments.
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
      T extends JadwalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalGroupByArgs['orderBy'] }
        : { orderBy?: JadwalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JadwalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jadwal model
   */
  readonly fields: JadwalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jadwal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JadwalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kursus<T extends KursusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KursusDefaultArgs<ExtArgs>>): Prisma__KursusClient<$Result.GetResult<Prisma.$KursusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    instruktur<T extends Jadwal$instrukturArgs<ExtArgs> = {}>(args?: Subset<T, Jadwal$instrukturArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Jadwal model
   */
  interface JadwalFieldRefs {
    readonly id: FieldRef<"Jadwal", 'String'>
    readonly kursusId: FieldRef<"Jadwal", 'String'>
    readonly instrukturId: FieldRef<"Jadwal", 'String'>
    readonly deskripsi: FieldRef<"Jadwal", 'String'>
    readonly hari: FieldRef<"Jadwal", 'String'>
    readonly jamMulai: FieldRef<"Jadwal", 'String'>
    readonly jamSelesai: FieldRef<"Jadwal", 'String'>
    readonly lokasi: FieldRef<"Jadwal", 'String'>
    readonly ruangan: FieldRef<"Jadwal", 'String'>
    readonly status: FieldRef<"Jadwal", 'String'>
    readonly createdAt: FieldRef<"Jadwal", 'DateTime'>
    readonly updatedAt: FieldRef<"Jadwal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Jadwal findUnique
   */
  export type JadwalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findUniqueOrThrow
   */
  export type JadwalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findFirst
   */
  export type JadwalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findFirstOrThrow
   */
  export type JadwalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findMany
   */
  export type JadwalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwals to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal create
   */
  export type JadwalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The data needed to create a Jadwal.
     */
    data: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
  }

  /**
   * Jadwal createMany
   */
  export type JadwalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jadwals.
     */
    data: JadwalCreateManyInput | JadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jadwal createManyAndReturn
   */
  export type JadwalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * The data used to create many Jadwals.
     */
    data: JadwalCreateManyInput | JadwalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jadwal update
   */
  export type JadwalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The data needed to update a Jadwal.
     */
    data: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
    /**
     * Choose, which Jadwal to update.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal updateMany
   */
  export type JadwalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jadwals.
     */
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyInput>
    /**
     * Filter which Jadwals to update
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to update.
     */
    limit?: number
  }

  /**
   * Jadwal updateManyAndReturn
   */
  export type JadwalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * The data used to update Jadwals.
     */
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyInput>
    /**
     * Filter which Jadwals to update
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jadwal upsert
   */
  export type JadwalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The filter to search for the Jadwal to update in case it exists.
     */
    where: JadwalWhereUniqueInput
    /**
     * In case the Jadwal found by the `where` argument doesn't exist, create a new Jadwal with this data.
     */
    create: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
    /**
     * In case the Jadwal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
  }

  /**
   * Jadwal delete
   */
  export type JadwalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter which Jadwal to delete.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal deleteMany
   */
  export type JadwalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwals to delete
     */
    where?: JadwalWhereInput
    /**
     * Limit how many Jadwals to delete.
     */
    limit?: number
  }

  /**
   * Jadwal.instruktur
   */
  export type Jadwal$instrukturArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Jadwal without action
   */
  export type JadwalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Jadwal
     */
    omit?: JadwalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
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
    deskripsi: 'deskripsi',
    harga: 'harga',
    lamaKursus: 'lamaKursus',
    kuota: 'kuota',
    status: 'status',
    thumbnail: 'thumbnail',
    tanggalMulai: 'tanggalMulai',
    tanggalSelesai: 'tanggalSelesai',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type KursusScalarFieldEnum = (typeof KursusScalarFieldEnum)[keyof typeof KursusScalarFieldEnum]


  export const PendaftaranScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    kursusId: 'kursusId',
    status: 'status',
    keterangan: 'keterangan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PendaftaranScalarFieldEnum = (typeof PendaftaranScalarFieldEnum)[keyof typeof PendaftaranScalarFieldEnum]


  export const SertifikatScalarFieldEnum: {
    id: 'id',
    pendaftaranId: 'pendaftaranId',
    nomor: 'nomor',
    tanggalTerbit: 'tanggalTerbit',
    fileUrl: 'fileUrl',
    fileName: 'fileName',
    fileType: 'fileType',
    fileSize: 'fileSize',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SertifikatScalarFieldEnum = (typeof SertifikatScalarFieldEnum)[keyof typeof SertifikatScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    method: 'method',
    amount: 'amount',
    status: 'status',
    waktuBayar: 'waktuBayar',
    vaNumber: 'vaNumber',
    bank: 'bank',
    orderId: 'orderId',
    transactionId: 'transactionId',
    paymentType: 'paymentType',
    fraudStatus: 'fraudStatus',
    snapToken: 'snapToken',
    redirectUrl: 'redirectUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    pendaftaranId: 'pendaftaranId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const JadwalScalarFieldEnum: {
    id: 'id',
    kursusId: 'kursusId',
    instrukturId: 'instrukturId',
    deskripsi: 'deskripsi',
    hari: 'hari',
    jamMulai: 'jamMulai',
    jamSelesai: 'jamSelesai',
    lokasi: 'lokasi',
    ruangan: 'ruangan',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JadwalScalarFieldEnum = (typeof JadwalScalarFieldEnum)[keyof typeof JadwalScalarFieldEnum]


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
    jenisKelamin?: StringNullableFilter<"User"> | string | null
    tempatLahir?: StringNullableFilter<"User"> | string | null
    tanggalLahir?: StringNullableFilter<"User"> | string | null
    mediaSosial?: StringNullableFilter<"User"> | string | null
    noHp?: StringNullableFilter<"User"> | string | null
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
    kursusInstruktur?: KursusListRelationFilter
    Account?: AccountListRelationFilter
    Session?: SessionListRelationFilter
    Pendaftaran?: PendaftaranListRelationFilter
    Jadwal?: JadwalListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    nik?: SortOrderInput | SortOrder
    jenisKelamin?: SortOrderInput | SortOrder
    tempatLahir?: SortOrderInput | SortOrder
    tanggalLahir?: SortOrderInput | SortOrder
    mediaSosial?: SortOrderInput | SortOrder
    noHp?: SortOrderInput | SortOrder
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
    kursusInstruktur?: KursusOrderByRelationAggregateInput
    Account?: AccountOrderByRelationAggregateInput
    Session?: SessionOrderByRelationAggregateInput
    Pendaftaran?: PendaftaranOrderByRelationAggregateInput
    Jadwal?: JadwalOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nik?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama?: StringFilter<"User"> | string
    jenisKelamin?: StringNullableFilter<"User"> | string | null
    tempatLahir?: StringNullableFilter<"User"> | string | null
    tanggalLahir?: StringNullableFilter<"User"> | string | null
    mediaSosial?: StringNullableFilter<"User"> | string | null
    noHp?: StringNullableFilter<"User"> | string | null
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
    kursusInstruktur?: KursusListRelationFilter
    Account?: AccountListRelationFilter
    Session?: SessionListRelationFilter
    Pendaftaran?: PendaftaranListRelationFilter
    Jadwal?: JadwalListRelationFilter
  }, "id" | "nik" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    nik?: SortOrderInput | SortOrder
    jenisKelamin?: SortOrderInput | SortOrder
    tempatLahir?: SortOrderInput | SortOrder
    tanggalLahir?: SortOrderInput | SortOrder
    mediaSosial?: SortOrderInput | SortOrder
    noHp?: SortOrderInput | SortOrder
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
    jenisKelamin?: StringNullableWithAggregatesFilter<"User"> | string | null
    tempatLahir?: StringNullableWithAggregatesFilter<"User"> | string | null
    tanggalLahir?: StringNullableWithAggregatesFilter<"User"> | string | null
    mediaSosial?: StringNullableWithAggregatesFilter<"User"> | string | null
    noHp?: StringNullableWithAggregatesFilter<"User"> | string | null
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
    deskripsi?: StringNullableFilter<"Kursus"> | string | null
    harga?: IntFilter<"Kursus"> | number
    lamaKursus?: IntNullableFilter<"Kursus"> | number | null
    kuota?: IntNullableFilter<"Kursus"> | number | null
    status?: StringFilter<"Kursus"> | string
    thumbnail?: StringNullableFilter<"Kursus"> | string | null
    tanggalMulai?: DateTimeNullableFilter<"Kursus"> | Date | string | null
    tanggalSelesai?: DateTimeNullableFilter<"Kursus"> | Date | string | null
    createdAt?: DateTimeFilter<"Kursus"> | Date | string
    updatedAt?: DateTimeFilter<"Kursus"> | Date | string
    userId?: StringNullableFilter<"Kursus"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Pendaftaran?: PendaftaranListRelationFilter
    Jadwal?: JadwalListRelationFilter
  }

  export type KursusOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    harga?: SortOrder
    lamaKursus?: SortOrderInput | SortOrder
    kuota?: SortOrderInput | SortOrder
    status?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    tanggalMulai?: SortOrderInput | SortOrder
    tanggalSelesai?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    Pendaftaran?: PendaftaranOrderByRelationAggregateInput
    Jadwal?: JadwalOrderByRelationAggregateInput
  }

  export type KursusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KursusWhereInput | KursusWhereInput[]
    OR?: KursusWhereInput[]
    NOT?: KursusWhereInput | KursusWhereInput[]
    nama?: StringFilter<"Kursus"> | string
    deskripsi?: StringNullableFilter<"Kursus"> | string | null
    harga?: IntFilter<"Kursus"> | number
    lamaKursus?: IntNullableFilter<"Kursus"> | number | null
    kuota?: IntNullableFilter<"Kursus"> | number | null
    status?: StringFilter<"Kursus"> | string
    thumbnail?: StringNullableFilter<"Kursus"> | string | null
    tanggalMulai?: DateTimeNullableFilter<"Kursus"> | Date | string | null
    tanggalSelesai?: DateTimeNullableFilter<"Kursus"> | Date | string | null
    createdAt?: DateTimeFilter<"Kursus"> | Date | string
    updatedAt?: DateTimeFilter<"Kursus"> | Date | string
    userId?: StringNullableFilter<"Kursus"> | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Pendaftaran?: PendaftaranListRelationFilter
    Jadwal?: JadwalListRelationFilter
  }, "id">

  export type KursusOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    harga?: SortOrder
    lamaKursus?: SortOrderInput | SortOrder
    kuota?: SortOrderInput | SortOrder
    status?: SortOrder
    thumbnail?: SortOrderInput | SortOrder
    tanggalMulai?: SortOrderInput | SortOrder
    tanggalSelesai?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
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
    deskripsi?: StringNullableWithAggregatesFilter<"Kursus"> | string | null
    harga?: IntWithAggregatesFilter<"Kursus"> | number
    lamaKursus?: IntNullableWithAggregatesFilter<"Kursus"> | number | null
    kuota?: IntNullableWithAggregatesFilter<"Kursus"> | number | null
    status?: StringWithAggregatesFilter<"Kursus"> | string
    thumbnail?: StringNullableWithAggregatesFilter<"Kursus"> | string | null
    tanggalMulai?: DateTimeNullableWithAggregatesFilter<"Kursus"> | Date | string | null
    tanggalSelesai?: DateTimeNullableWithAggregatesFilter<"Kursus"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Kursus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Kursus"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Kursus"> | string | null
  }

  export type PendaftaranWhereInput = {
    AND?: PendaftaranWhereInput | PendaftaranWhereInput[]
    OR?: PendaftaranWhereInput[]
    NOT?: PendaftaranWhereInput | PendaftaranWhereInput[]
    id?: StringFilter<"Pendaftaran"> | string
    userId?: StringFilter<"Pendaftaran"> | string
    kursusId?: StringFilter<"Pendaftaran"> | string
    status?: StringFilter<"Pendaftaran"> | string
    keterangan?: StringNullableFilter<"Pendaftaran"> | string | null
    createdAt?: DateTimeFilter<"Pendaftaran"> | Date | string
    updatedAt?: DateTimeFilter<"Pendaftaran"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    kursus?: XOR<KursusScalarRelationFilter, KursusWhereInput>
    Payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    sertifikat?: XOR<SertifikatNullableScalarRelationFilter, SertifikatWhereInput> | null
  }

  export type PendaftaranOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    status?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    kursus?: KursusOrderByWithRelationInput
    Payment?: PaymentOrderByWithRelationInput
    sertifikat?: SertifikatOrderByWithRelationInput
  }

  export type PendaftaranWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PendaftaranWhereInput | PendaftaranWhereInput[]
    OR?: PendaftaranWhereInput[]
    NOT?: PendaftaranWhereInput | PendaftaranWhereInput[]
    userId?: StringFilter<"Pendaftaran"> | string
    kursusId?: StringFilter<"Pendaftaran"> | string
    status?: StringFilter<"Pendaftaran"> | string
    keterangan?: StringNullableFilter<"Pendaftaran"> | string | null
    createdAt?: DateTimeFilter<"Pendaftaran"> | Date | string
    updatedAt?: DateTimeFilter<"Pendaftaran"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    kursus?: XOR<KursusScalarRelationFilter, KursusWhereInput>
    Payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    sertifikat?: XOR<SertifikatNullableScalarRelationFilter, SertifikatWhereInput> | null
  }, "id">

  export type PendaftaranOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    status?: SortOrder
    keterangan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    keterangan?: StringNullableWithAggregatesFilter<"Pendaftaran"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Pendaftaran"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pendaftaran"> | Date | string
  }

  export type SertifikatWhereInput = {
    AND?: SertifikatWhereInput | SertifikatWhereInput[]
    OR?: SertifikatWhereInput[]
    NOT?: SertifikatWhereInput | SertifikatWhereInput[]
    id?: StringFilter<"Sertifikat"> | string
    pendaftaranId?: StringFilter<"Sertifikat"> | string
    nomor?: StringFilter<"Sertifikat"> | string
    tanggalTerbit?: DateTimeFilter<"Sertifikat"> | Date | string
    fileUrl?: StringNullableFilter<"Sertifikat"> | string | null
    fileName?: StringNullableFilter<"Sertifikat"> | string | null
    fileType?: StringNullableFilter<"Sertifikat"> | string | null
    fileSize?: IntNullableFilter<"Sertifikat"> | number | null
    createdAt?: DateTimeFilter<"Sertifikat"> | Date | string
    updatedAt?: DateTimeFilter<"Sertifikat"> | Date | string
    pendaftaran?: XOR<PendaftaranScalarRelationFilter, PendaftaranWhereInput>
  }

  export type SertifikatOrderByWithRelationInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    nomor?: SortOrder
    tanggalTerbit?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    fileType?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pendaftaran?: PendaftaranOrderByWithRelationInput
  }

  export type SertifikatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    pendaftaranId?: string
    nomor?: string
    AND?: SertifikatWhereInput | SertifikatWhereInput[]
    OR?: SertifikatWhereInput[]
    NOT?: SertifikatWhereInput | SertifikatWhereInput[]
    tanggalTerbit?: DateTimeFilter<"Sertifikat"> | Date | string
    fileUrl?: StringNullableFilter<"Sertifikat"> | string | null
    fileName?: StringNullableFilter<"Sertifikat"> | string | null
    fileType?: StringNullableFilter<"Sertifikat"> | string | null
    fileSize?: IntNullableFilter<"Sertifikat"> | number | null
    createdAt?: DateTimeFilter<"Sertifikat"> | Date | string
    updatedAt?: DateTimeFilter<"Sertifikat"> | Date | string
    pendaftaran?: XOR<PendaftaranScalarRelationFilter, PendaftaranWhereInput>
  }, "id" | "pendaftaranId" | "nomor">

  export type SertifikatOrderByWithAggregationInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    nomor?: SortOrder
    tanggalTerbit?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    fileName?: SortOrderInput | SortOrder
    fileType?: SortOrderInput | SortOrder
    fileSize?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SertifikatCountOrderByAggregateInput
    _avg?: SertifikatAvgOrderByAggregateInput
    _max?: SertifikatMaxOrderByAggregateInput
    _min?: SertifikatMinOrderByAggregateInput
    _sum?: SertifikatSumOrderByAggregateInput
  }

  export type SertifikatScalarWhereWithAggregatesInput = {
    AND?: SertifikatScalarWhereWithAggregatesInput | SertifikatScalarWhereWithAggregatesInput[]
    OR?: SertifikatScalarWhereWithAggregatesInput[]
    NOT?: SertifikatScalarWhereWithAggregatesInput | SertifikatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sertifikat"> | string
    pendaftaranId?: StringWithAggregatesFilter<"Sertifikat"> | string
    nomor?: StringWithAggregatesFilter<"Sertifikat"> | string
    tanggalTerbit?: DateTimeWithAggregatesFilter<"Sertifikat"> | Date | string
    fileUrl?: StringNullableWithAggregatesFilter<"Sertifikat"> | string | null
    fileName?: StringNullableWithAggregatesFilter<"Sertifikat"> | string | null
    fileType?: StringNullableWithAggregatesFilter<"Sertifikat"> | string | null
    fileSize?: IntNullableWithAggregatesFilter<"Sertifikat"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Sertifikat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sertifikat"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    method?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    waktuBayar?: DateTimeNullableFilter<"Payment"> | Date | string | null
    vaNumber?: StringNullableFilter<"Payment"> | string | null
    bank?: StringNullableFilter<"Payment"> | string | null
    orderId?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringNullableFilter<"Payment"> | string | null
    paymentType?: StringNullableFilter<"Payment"> | string | null
    fraudStatus?: StringNullableFilter<"Payment"> | string | null
    snapToken?: StringNullableFilter<"Payment"> | string | null
    redirectUrl?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    pendaftaranId?: StringFilter<"Payment"> | string
    pendaftaran?: XOR<PendaftaranScalarRelationFilter, PendaftaranWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    method?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    waktuBayar?: SortOrderInput | SortOrder
    vaNumber?: SortOrderInput | SortOrder
    bank?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    paymentType?: SortOrderInput | SortOrder
    fraudStatus?: SortOrderInput | SortOrder
    snapToken?: SortOrderInput | SortOrder
    redirectUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pendaftaranId?: SortOrder
    pendaftaran?: PendaftaranOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    snapToken?: string
    pendaftaranId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    method?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    status?: StringFilter<"Payment"> | string
    waktuBayar?: DateTimeNullableFilter<"Payment"> | Date | string | null
    vaNumber?: StringNullableFilter<"Payment"> | string | null
    bank?: StringNullableFilter<"Payment"> | string | null
    orderId?: StringNullableFilter<"Payment"> | string | null
    transactionId?: StringNullableFilter<"Payment"> | string | null
    paymentType?: StringNullableFilter<"Payment"> | string | null
    fraudStatus?: StringNullableFilter<"Payment"> | string | null
    redirectUrl?: StringNullableFilter<"Payment"> | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    pendaftaran?: XOR<PendaftaranScalarRelationFilter, PendaftaranWhereInput>
  }, "id" | "snapToken" | "pendaftaranId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    method?: SortOrderInput | SortOrder
    amount?: SortOrder
    status?: SortOrder
    waktuBayar?: SortOrderInput | SortOrder
    vaNumber?: SortOrderInput | SortOrder
    bank?: SortOrderInput | SortOrder
    orderId?: SortOrderInput | SortOrder
    transactionId?: SortOrderInput | SortOrder
    paymentType?: SortOrderInput | SortOrder
    fraudStatus?: SortOrderInput | SortOrder
    snapToken?: SortOrderInput | SortOrder
    redirectUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pendaftaranId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    method?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    status?: StringWithAggregatesFilter<"Payment"> | string
    waktuBayar?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    vaNumber?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    bank?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    orderId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    transactionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    paymentType?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    fraudStatus?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    snapToken?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    redirectUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    pendaftaranId?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type JadwalWhereInput = {
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    id?: StringFilter<"Jadwal"> | string
    kursusId?: StringFilter<"Jadwal"> | string
    instrukturId?: StringNullableFilter<"Jadwal"> | string | null
    deskripsi?: StringNullableFilter<"Jadwal"> | string | null
    hari?: StringFilter<"Jadwal"> | string
    jamMulai?: StringFilter<"Jadwal"> | string
    jamSelesai?: StringFilter<"Jadwal"> | string
    lokasi?: StringNullableFilter<"Jadwal"> | string | null
    ruangan?: StringNullableFilter<"Jadwal"> | string | null
    status?: StringFilter<"Jadwal"> | string
    createdAt?: DateTimeFilter<"Jadwal"> | Date | string
    updatedAt?: DateTimeFilter<"Jadwal"> | Date | string
    kursus?: XOR<KursusScalarRelationFilter, KursusWhereInput>
    instruktur?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type JadwalOrderByWithRelationInput = {
    id?: SortOrder
    kursusId?: SortOrder
    instrukturId?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    lokasi?: SortOrderInput | SortOrder
    ruangan?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kursus?: KursusOrderByWithRelationInput
    instruktur?: UserOrderByWithRelationInput
  }

  export type JadwalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    kursusId?: StringFilter<"Jadwal"> | string
    instrukturId?: StringNullableFilter<"Jadwal"> | string | null
    deskripsi?: StringNullableFilter<"Jadwal"> | string | null
    hari?: StringFilter<"Jadwal"> | string
    jamMulai?: StringFilter<"Jadwal"> | string
    jamSelesai?: StringFilter<"Jadwal"> | string
    lokasi?: StringNullableFilter<"Jadwal"> | string | null
    ruangan?: StringNullableFilter<"Jadwal"> | string | null
    status?: StringFilter<"Jadwal"> | string
    createdAt?: DateTimeFilter<"Jadwal"> | Date | string
    updatedAt?: DateTimeFilter<"Jadwal"> | Date | string
    kursus?: XOR<KursusScalarRelationFilter, KursusWhereInput>
    instruktur?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type JadwalOrderByWithAggregationInput = {
    id?: SortOrder
    kursusId?: SortOrder
    instrukturId?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    lokasi?: SortOrderInput | SortOrder
    ruangan?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JadwalCountOrderByAggregateInput
    _max?: JadwalMaxOrderByAggregateInput
    _min?: JadwalMinOrderByAggregateInput
  }

  export type JadwalScalarWhereWithAggregatesInput = {
    AND?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    OR?: JadwalScalarWhereWithAggregatesInput[]
    NOT?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jadwal"> | string
    kursusId?: StringWithAggregatesFilter<"Jadwal"> | string
    instrukturId?: StringNullableWithAggregatesFilter<"Jadwal"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"Jadwal"> | string | null
    hari?: StringWithAggregatesFilter<"Jadwal"> | string
    jamMulai?: StringWithAggregatesFilter<"Jadwal"> | string
    jamSelesai?: StringWithAggregatesFilter<"Jadwal"> | string
    lokasi?: StringNullableWithAggregatesFilter<"Jadwal"> | string | null
    ruangan?: StringNullableWithAggregatesFilter<"Jadwal"> | string | null
    status?: StringWithAggregatesFilter<"Jadwal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Jadwal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Jadwal"> | Date | string
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
    jenisKelamin?: string | null
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp?: string | null
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
    kursusInstruktur?: KursusCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranCreateNestedManyWithoutUserInput
    Jadwal?: JadwalCreateNestedManyWithoutInstrukturInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin?: string | null
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp?: string | null
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
    kursusInstruktur?: KursusUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutUserInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutInstrukturInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    kursusInstruktur?: KursusUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUpdateManyWithoutUserNestedInput
    Jadwal?: JadwalUpdateManyWithoutInstrukturNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    kursusInstruktur?: KursusUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutUserNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutInstrukturNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin?: string | null
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp?: string | null
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
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    deskripsi?: string | null
    harga: number
    lamaKursus?: number | null
    kuota?: number | null
    status?: string
    thumbnail?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutKursusInstrukturInput
    Pendaftaran?: PendaftaranCreateNestedManyWithoutKursusInput
    Jadwal?: JadwalCreateNestedManyWithoutKursusInput
  }

  export type KursusUncheckedCreateInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    harga: number
    lamaKursus?: number | null
    kuota?: number | null
    status?: string
    thumbnail?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutKursusInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutKursusInput
  }

  export type KursusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: IntFieldUpdateOperationsInput | number
    lamaKursus?: NullableIntFieldUpdateOperationsInput | number | null
    kuota?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutKursusInstrukturNestedInput
    Pendaftaran?: PendaftaranUpdateManyWithoutKursusNestedInput
    Jadwal?: JadwalUpdateManyWithoutKursusNestedInput
  }

  export type KursusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: IntFieldUpdateOperationsInput | number
    lamaKursus?: NullableIntFieldUpdateOperationsInput | number | null
    kuota?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutKursusNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutKursusNestedInput
  }

  export type KursusCreateManyInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    harga: number
    lamaKursus?: number | null
    kuota?: number | null
    status?: string
    thumbnail?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type KursusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: IntFieldUpdateOperationsInput | number
    lamaKursus?: NullableIntFieldUpdateOperationsInput | number | null
    kuota?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KursusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: IntFieldUpdateOperationsInput | number
    lamaKursus?: NullableIntFieldUpdateOperationsInput | number | null
    kuota?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PendaftaranCreateInput = {
    id?: string
    status?: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPendaftaranInput
    kursus: KursusCreateNestedOneWithoutPendaftaranInput
    Payment?: PaymentCreateNestedOneWithoutPendaftaranInput
    sertifikat?: SertifikatCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranUncheckedCreateInput = {
    id?: string
    userId: string
    kursusId: string
    status?: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Payment?: PaymentUncheckedCreateNestedOneWithoutPendaftaranInput
    sertifikat?: SertifikatUncheckedCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPendaftaranNestedInput
    kursus?: KursusUpdateOneRequiredWithoutPendaftaranNestedInput
    Payment?: PaymentUpdateOneWithoutPendaftaranNestedInput
    sertifikat?: SertifikatUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUncheckedUpdateOneWithoutPendaftaranNestedInput
    sertifikat?: SertifikatUncheckedUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranCreateManyInput = {
    id?: string
    userId: string
    kursusId: string
    status?: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendaftaranUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftaranUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SertifikatCreateInput = {
    id?: string
    nomor: string
    tanggalTerbit?: Date | string
    fileUrl?: string | null
    fileName?: string | null
    fileType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pendaftaran: PendaftaranCreateNestedOneWithoutSertifikatInput
  }

  export type SertifikatUncheckedCreateInput = {
    id?: string
    pendaftaranId: string
    nomor: string
    tanggalTerbit?: Date | string
    fileUrl?: string | null
    fileName?: string | null
    fileType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SertifikatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    tanggalTerbit?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendaftaran?: PendaftaranUpdateOneRequiredWithoutSertifikatNestedInput
  }

  export type SertifikatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pendaftaranId?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    tanggalTerbit?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SertifikatCreateManyInput = {
    id?: string
    pendaftaranId: string
    nomor: string
    tanggalTerbit?: Date | string
    fileUrl?: string | null
    fileName?: string | null
    fileType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SertifikatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    tanggalTerbit?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SertifikatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pendaftaranId?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    tanggalTerbit?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    method?: string | null
    amount: number
    status?: string
    waktuBayar?: Date | string | null
    vaNumber?: string | null
    bank?: string | null
    orderId?: string | null
    transactionId?: string | null
    paymentType?: string | null
    fraudStatus?: string | null
    snapToken?: string | null
    redirectUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pendaftaran: PendaftaranCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    method?: string | null
    amount: number
    status?: string
    waktuBayar?: Date | string | null
    vaNumber?: string | null
    bank?: string | null
    orderId?: string | null
    transactionId?: string | null
    paymentType?: string | null
    fraudStatus?: string | null
    snapToken?: string | null
    redirectUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pendaftaranId: string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    waktuBayar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    fraudStatus?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendaftaran?: PendaftaranUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    waktuBayar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    fraudStatus?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendaftaranId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    method?: string | null
    amount: number
    status?: string
    waktuBayar?: Date | string | null
    vaNumber?: string | null
    bank?: string | null
    orderId?: string | null
    transactionId?: string | null
    paymentType?: string | null
    fraudStatus?: string | null
    snapToken?: string | null
    redirectUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pendaftaranId: string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    waktuBayar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    fraudStatus?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    waktuBayar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    fraudStatus?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pendaftaranId?: StringFieldUpdateOperationsInput | string
  }

  export type JadwalCreateInput = {
    id?: string
    deskripsi?: string | null
    hari: string
    jamMulai: string
    jamSelesai: string
    lokasi?: string | null
    ruangan?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    kursus: KursusCreateNestedOneWithoutJadwalInput
    instruktur?: UserCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUncheckedCreateInput = {
    id?: string
    kursusId: string
    instrukturId?: string | null
    deskripsi?: string | null
    hari: string
    jamMulai: string
    jamSelesai: string
    lokasi?: string | null
    ruangan?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JadwalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUpdateOneRequiredWithoutJadwalNestedInput
    instruktur?: UserUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    instrukturId?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalCreateManyInput = {
    id?: string
    kursusId: string
    instrukturId?: string | null
    deskripsi?: string | null
    hari: string
    jamMulai: string
    jamSelesai: string
    lokasi?: string | null
    ruangan?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JadwalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    instrukturId?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type JadwalListRelationFilter = {
    every?: JadwalWhereInput
    some?: JadwalWhereInput
    none?: JadwalWhereInput
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

  export type JadwalOrderByRelationAggregateInput = {
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type KursusCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    lamaKursus?: SortOrder
    kuota?: SortOrder
    status?: SortOrder
    thumbnail?: SortOrder
    tanggalMulai?: SortOrder
    tanggalSelesai?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type KursusAvgOrderByAggregateInput = {
    harga?: SortOrder
    lamaKursus?: SortOrder
    kuota?: SortOrder
  }

  export type KursusMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    lamaKursus?: SortOrder
    kuota?: SortOrder
    status?: SortOrder
    thumbnail?: SortOrder
    tanggalMulai?: SortOrder
    tanggalSelesai?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type KursusMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    harga?: SortOrder
    lamaKursus?: SortOrder
    kuota?: SortOrder
    status?: SortOrder
    thumbnail?: SortOrder
    tanggalMulai?: SortOrder
    tanggalSelesai?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type KursusSumOrderByAggregateInput = {
    harga?: SortOrder
    lamaKursus?: SortOrder
    kuota?: SortOrder
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

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type SertifikatNullableScalarRelationFilter = {
    is?: SertifikatWhereInput | null
    isNot?: SertifikatWhereInput | null
  }

  export type PendaftaranCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    status?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendaftaranMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    status?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendaftaranMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    kursusId?: SortOrder
    status?: SortOrder
    keterangan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PendaftaranScalarRelationFilter = {
    is?: PendaftaranWhereInput
    isNot?: PendaftaranWhereInput
  }

  export type SertifikatCountOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    nomor?: SortOrder
    tanggalTerbit?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SertifikatAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type SertifikatMaxOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    nomor?: SortOrder
    tanggalTerbit?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SertifikatMinOrderByAggregateInput = {
    id?: SortOrder
    pendaftaranId?: SortOrder
    nomor?: SortOrder
    tanggalTerbit?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SertifikatSumOrderByAggregateInput = {
    fileSize?: SortOrder
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

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    waktuBayar?: SortOrder
    vaNumber?: SortOrder
    bank?: SortOrder
    orderId?: SortOrder
    transactionId?: SortOrder
    paymentType?: SortOrder
    fraudStatus?: SortOrder
    snapToken?: SortOrder
    redirectUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pendaftaranId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    waktuBayar?: SortOrder
    vaNumber?: SortOrder
    bank?: SortOrder
    orderId?: SortOrder
    transactionId?: SortOrder
    paymentType?: SortOrder
    fraudStatus?: SortOrder
    snapToken?: SortOrder
    redirectUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pendaftaranId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    method?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    waktuBayar?: SortOrder
    vaNumber?: SortOrder
    bank?: SortOrder
    orderId?: SortOrder
    transactionId?: SortOrder
    paymentType?: SortOrder
    fraudStatus?: SortOrder
    snapToken?: SortOrder
    redirectUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pendaftaranId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
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

  export type JadwalCountOrderByAggregateInput = {
    id?: SortOrder
    kursusId?: SortOrder
    instrukturId?: SortOrder
    deskripsi?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    lokasi?: SortOrder
    ruangan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JadwalMaxOrderByAggregateInput = {
    id?: SortOrder
    kursusId?: SortOrder
    instrukturId?: SortOrder
    deskripsi?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    lokasi?: SortOrder
    ruangan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JadwalMinOrderByAggregateInput = {
    id?: SortOrder
    kursusId?: SortOrder
    instrukturId?: SortOrder
    deskripsi?: SortOrder
    hari?: SortOrder
    jamMulai?: SortOrder
    jamSelesai?: SortOrder
    lokasi?: SortOrder
    ruangan?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type JadwalCreateNestedManyWithoutInstrukturInput = {
    create?: XOR<JadwalCreateWithoutInstrukturInput, JadwalUncheckedCreateWithoutInstrukturInput> | JadwalCreateWithoutInstrukturInput[] | JadwalUncheckedCreateWithoutInstrukturInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutInstrukturInput | JadwalCreateOrConnectWithoutInstrukturInput[]
    createMany?: JadwalCreateManyInstrukturInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
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

  export type JadwalUncheckedCreateNestedManyWithoutInstrukturInput = {
    create?: XOR<JadwalCreateWithoutInstrukturInput, JadwalUncheckedCreateWithoutInstrukturInput> | JadwalCreateWithoutInstrukturInput[] | JadwalUncheckedCreateWithoutInstrukturInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutInstrukturInput | JadwalCreateOrConnectWithoutInstrukturInput[]
    createMany?: JadwalCreateManyInstrukturInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
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

  export type JadwalUpdateManyWithoutInstrukturNestedInput = {
    create?: XOR<JadwalCreateWithoutInstrukturInput, JadwalUncheckedCreateWithoutInstrukturInput> | JadwalCreateWithoutInstrukturInput[] | JadwalUncheckedCreateWithoutInstrukturInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutInstrukturInput | JadwalCreateOrConnectWithoutInstrukturInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutInstrukturInput | JadwalUpsertWithWhereUniqueWithoutInstrukturInput[]
    createMany?: JadwalCreateManyInstrukturInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutInstrukturInput | JadwalUpdateWithWhereUniqueWithoutInstrukturInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutInstrukturInput | JadwalUpdateManyWithWhereWithoutInstrukturInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
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

  export type JadwalUncheckedUpdateManyWithoutInstrukturNestedInput = {
    create?: XOR<JadwalCreateWithoutInstrukturInput, JadwalUncheckedCreateWithoutInstrukturInput> | JadwalCreateWithoutInstrukturInput[] | JadwalUncheckedCreateWithoutInstrukturInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutInstrukturInput | JadwalCreateOrConnectWithoutInstrukturInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutInstrukturInput | JadwalUpsertWithWhereUniqueWithoutInstrukturInput[]
    createMany?: JadwalCreateManyInstrukturInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutInstrukturInput | JadwalUpdateWithWhereUniqueWithoutInstrukturInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutInstrukturInput | JadwalUpdateManyWithWhereWithoutInstrukturInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutKursusInstrukturInput = {
    create?: XOR<UserCreateWithoutKursusInstrukturInput, UserUncheckedCreateWithoutKursusInstrukturInput>
    connectOrCreate?: UserCreateOrConnectWithoutKursusInstrukturInput
    connect?: UserWhereUniqueInput
  }

  export type PendaftaranCreateNestedManyWithoutKursusInput = {
    create?: XOR<PendaftaranCreateWithoutKursusInput, PendaftaranUncheckedCreateWithoutKursusInput> | PendaftaranCreateWithoutKursusInput[] | PendaftaranUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: PendaftaranCreateOrConnectWithoutKursusInput | PendaftaranCreateOrConnectWithoutKursusInput[]
    createMany?: PendaftaranCreateManyKursusInputEnvelope
    connect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
  }

  export type JadwalCreateNestedManyWithoutKursusInput = {
    create?: XOR<JadwalCreateWithoutKursusInput, JadwalUncheckedCreateWithoutKursusInput> | JadwalCreateWithoutKursusInput[] | JadwalUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutKursusInput | JadwalCreateOrConnectWithoutKursusInput[]
    createMany?: JadwalCreateManyKursusInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type PendaftaranUncheckedCreateNestedManyWithoutKursusInput = {
    create?: XOR<PendaftaranCreateWithoutKursusInput, PendaftaranUncheckedCreateWithoutKursusInput> | PendaftaranCreateWithoutKursusInput[] | PendaftaranUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: PendaftaranCreateOrConnectWithoutKursusInput | PendaftaranCreateOrConnectWithoutKursusInput[]
    createMany?: PendaftaranCreateManyKursusInputEnvelope
    connect?: PendaftaranWhereUniqueInput | PendaftaranWhereUniqueInput[]
  }

  export type JadwalUncheckedCreateNestedManyWithoutKursusInput = {
    create?: XOR<JadwalCreateWithoutKursusInput, JadwalUncheckedCreateWithoutKursusInput> | JadwalCreateWithoutKursusInput[] | JadwalUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutKursusInput | JadwalCreateOrConnectWithoutKursusInput[]
    createMany?: JadwalCreateManyKursusInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutKursusInstrukturNestedInput = {
    create?: XOR<UserCreateWithoutKursusInstrukturInput, UserUncheckedCreateWithoutKursusInstrukturInput>
    connectOrCreate?: UserCreateOrConnectWithoutKursusInstrukturInput
    upsert?: UserUpsertWithoutKursusInstrukturInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutKursusInstrukturInput, UserUpdateWithoutKursusInstrukturInput>, UserUncheckedUpdateWithoutKursusInstrukturInput>
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

  export type JadwalUpdateManyWithoutKursusNestedInput = {
    create?: XOR<JadwalCreateWithoutKursusInput, JadwalUncheckedCreateWithoutKursusInput> | JadwalCreateWithoutKursusInput[] | JadwalUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutKursusInput | JadwalCreateOrConnectWithoutKursusInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutKursusInput | JadwalUpsertWithWhereUniqueWithoutKursusInput[]
    createMany?: JadwalCreateManyKursusInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutKursusInput | JadwalUpdateWithWhereUniqueWithoutKursusInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutKursusInput | JadwalUpdateManyWithWhereWithoutKursusInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
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

  export type JadwalUncheckedUpdateManyWithoutKursusNestedInput = {
    create?: XOR<JadwalCreateWithoutKursusInput, JadwalUncheckedCreateWithoutKursusInput> | JadwalCreateWithoutKursusInput[] | JadwalUncheckedCreateWithoutKursusInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutKursusInput | JadwalCreateOrConnectWithoutKursusInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutKursusInput | JadwalUpsertWithWhereUniqueWithoutKursusInput[]
    createMany?: JadwalCreateManyKursusInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutKursusInput | JadwalUpdateWithWhereUniqueWithoutKursusInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutKursusInput | JadwalUpdateManyWithWhereWithoutKursusInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
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

  export type PaymentCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<PaymentCreateWithoutPendaftaranInput, PaymentUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutPendaftaranInput
    connect?: PaymentWhereUniqueInput
  }

  export type SertifikatCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<SertifikatCreateWithoutPendaftaranInput, SertifikatUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: SertifikatCreateOrConnectWithoutPendaftaranInput
    connect?: SertifikatWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<PaymentCreateWithoutPendaftaranInput, PaymentUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutPendaftaranInput
    connect?: PaymentWhereUniqueInput
  }

  export type SertifikatUncheckedCreateNestedOneWithoutPendaftaranInput = {
    create?: XOR<SertifikatCreateWithoutPendaftaranInput, SertifikatUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: SertifikatCreateOrConnectWithoutPendaftaranInput
    connect?: SertifikatWhereUniqueInput
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

  export type PaymentUpdateOneWithoutPendaftaranNestedInput = {
    create?: XOR<PaymentCreateWithoutPendaftaranInput, PaymentUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutPendaftaranInput
    upsert?: PaymentUpsertWithoutPendaftaranInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutPendaftaranInput, PaymentUpdateWithoutPendaftaranInput>, PaymentUncheckedUpdateWithoutPendaftaranInput>
  }

  export type SertifikatUpdateOneWithoutPendaftaranNestedInput = {
    create?: XOR<SertifikatCreateWithoutPendaftaranInput, SertifikatUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: SertifikatCreateOrConnectWithoutPendaftaranInput
    upsert?: SertifikatUpsertWithoutPendaftaranInput
    disconnect?: SertifikatWhereInput | boolean
    delete?: SertifikatWhereInput | boolean
    connect?: SertifikatWhereUniqueInput
    update?: XOR<XOR<SertifikatUpdateToOneWithWhereWithoutPendaftaranInput, SertifikatUpdateWithoutPendaftaranInput>, SertifikatUncheckedUpdateWithoutPendaftaranInput>
  }

  export type PaymentUncheckedUpdateOneWithoutPendaftaranNestedInput = {
    create?: XOR<PaymentCreateWithoutPendaftaranInput, PaymentUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutPendaftaranInput
    upsert?: PaymentUpsertWithoutPendaftaranInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutPendaftaranInput, PaymentUpdateWithoutPendaftaranInput>, PaymentUncheckedUpdateWithoutPendaftaranInput>
  }

  export type SertifikatUncheckedUpdateOneWithoutPendaftaranNestedInput = {
    create?: XOR<SertifikatCreateWithoutPendaftaranInput, SertifikatUncheckedCreateWithoutPendaftaranInput>
    connectOrCreate?: SertifikatCreateOrConnectWithoutPendaftaranInput
    upsert?: SertifikatUpsertWithoutPendaftaranInput
    disconnect?: SertifikatWhereInput | boolean
    delete?: SertifikatWhereInput | boolean
    connect?: SertifikatWhereUniqueInput
    update?: XOR<XOR<SertifikatUpdateToOneWithWhereWithoutPendaftaranInput, SertifikatUpdateWithoutPendaftaranInput>, SertifikatUncheckedUpdateWithoutPendaftaranInput>
  }

  export type PendaftaranCreateNestedOneWithoutSertifikatInput = {
    create?: XOR<PendaftaranCreateWithoutSertifikatInput, PendaftaranUncheckedCreateWithoutSertifikatInput>
    connectOrCreate?: PendaftaranCreateOrConnectWithoutSertifikatInput
    connect?: PendaftaranWhereUniqueInput
  }

  export type PendaftaranUpdateOneRequiredWithoutSertifikatNestedInput = {
    create?: XOR<PendaftaranCreateWithoutSertifikatInput, PendaftaranUncheckedCreateWithoutSertifikatInput>
    connectOrCreate?: PendaftaranCreateOrConnectWithoutSertifikatInput
    upsert?: PendaftaranUpsertWithoutSertifikatInput
    connect?: PendaftaranWhereUniqueInput
    update?: XOR<XOR<PendaftaranUpdateToOneWithWhereWithoutSertifikatInput, PendaftaranUpdateWithoutSertifikatInput>, PendaftaranUncheckedUpdateWithoutSertifikatInput>
  }

  export type PendaftaranCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PendaftaranCreateWithoutPaymentInput, PendaftaranUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PendaftaranCreateOrConnectWithoutPaymentInput
    connect?: PendaftaranWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PendaftaranUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<PendaftaranCreateWithoutPaymentInput, PendaftaranUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PendaftaranCreateOrConnectWithoutPaymentInput
    upsert?: PendaftaranUpsertWithoutPaymentInput
    connect?: PendaftaranWhereUniqueInput
    update?: XOR<XOR<PendaftaranUpdateToOneWithWhereWithoutPaymentInput, PendaftaranUpdateWithoutPaymentInput>, PendaftaranUncheckedUpdateWithoutPaymentInput>
  }

  export type KursusCreateNestedOneWithoutJadwalInput = {
    create?: XOR<KursusCreateWithoutJadwalInput, KursusUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: KursusCreateOrConnectWithoutJadwalInput
    connect?: KursusWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutJadwalInput = {
    create?: XOR<UserCreateWithoutJadwalInput, UserUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: UserCreateOrConnectWithoutJadwalInput
    connect?: UserWhereUniqueInput
  }

  export type KursusUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<KursusCreateWithoutJadwalInput, KursusUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: KursusCreateOrConnectWithoutJadwalInput
    upsert?: KursusUpsertWithoutJadwalInput
    connect?: KursusWhereUniqueInput
    update?: XOR<XOR<KursusUpdateToOneWithWhereWithoutJadwalInput, KursusUpdateWithoutJadwalInput>, KursusUncheckedUpdateWithoutJadwalInput>
  }

  export type UserUpdateOneWithoutJadwalNestedInput = {
    create?: XOR<UserCreateWithoutJadwalInput, UserUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: UserCreateOrConnectWithoutJadwalInput
    upsert?: UserUpsertWithoutJadwalInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJadwalInput, UserUpdateWithoutJadwalInput>, UserUncheckedUpdateWithoutJadwalInput>
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

  export type UserCreateWithoutAccountInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin?: string | null
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp?: string | null
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
    kursusInstruktur?: KursusCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranCreateNestedManyWithoutUserInput
    Jadwal?: JadwalCreateNestedManyWithoutInstrukturInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin?: string | null
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp?: string | null
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
    kursusInstruktur?: KursusUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutUserInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutInstrukturInput
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
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    kursusInstruktur?: KursusUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUpdateManyWithoutUserNestedInput
    Jadwal?: JadwalUpdateManyWithoutInstrukturNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    kursusInstruktur?: KursusUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutUserNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutInstrukturNestedInput
  }

  export type UserCreateWithoutSessionInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin?: string | null
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp?: string | null
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
    kursusInstruktur?: KursusCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranCreateNestedManyWithoutUserInput
    Jadwal?: JadwalCreateNestedManyWithoutInstrukturInput
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin?: string | null
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp?: string | null
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
    kursusInstruktur?: KursusUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutUserInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutInstrukturInput
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
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    kursusInstruktur?: KursusUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUpdateManyWithoutUserNestedInput
    Jadwal?: JadwalUpdateManyWithoutInstrukturNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    kursusInstruktur?: KursusUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutUserNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutInstrukturNestedInput
  }

  export type KursusCreateWithoutUserInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    harga: number
    lamaKursus?: number | null
    kuota?: number | null
    status?: string
    thumbnail?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Pendaftaran?: PendaftaranCreateNestedManyWithoutKursusInput
    Jadwal?: JadwalCreateNestedManyWithoutKursusInput
  }

  export type KursusUncheckedCreateWithoutUserInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    harga: number
    lamaKursus?: number | null
    kuota?: number | null
    status?: string
    thumbnail?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutKursusInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutKursusInput
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
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    kursus: KursusCreateNestedOneWithoutPendaftaranInput
    Payment?: PaymentCreateNestedOneWithoutPendaftaranInput
    sertifikat?: SertifikatCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranUncheckedCreateWithoutUserInput = {
    id?: string
    kursusId: string
    status?: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Payment?: PaymentUncheckedCreateNestedOneWithoutPendaftaranInput
    sertifikat?: SertifikatUncheckedCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranCreateOrConnectWithoutUserInput = {
    where: PendaftaranWhereUniqueInput
    create: XOR<PendaftaranCreateWithoutUserInput, PendaftaranUncheckedCreateWithoutUserInput>
  }

  export type PendaftaranCreateManyUserInputEnvelope = {
    data: PendaftaranCreateManyUserInput | PendaftaranCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JadwalCreateWithoutInstrukturInput = {
    id?: string
    deskripsi?: string | null
    hari: string
    jamMulai: string
    jamSelesai: string
    lokasi?: string | null
    ruangan?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    kursus: KursusCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUncheckedCreateWithoutInstrukturInput = {
    id?: string
    kursusId: string
    deskripsi?: string | null
    hari: string
    jamMulai: string
    jamSelesai: string
    lokasi?: string | null
    ruangan?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JadwalCreateOrConnectWithoutInstrukturInput = {
    where: JadwalWhereUniqueInput
    create: XOR<JadwalCreateWithoutInstrukturInput, JadwalUncheckedCreateWithoutInstrukturInput>
  }

  export type JadwalCreateManyInstrukturInputEnvelope = {
    data: JadwalCreateManyInstrukturInput | JadwalCreateManyInstrukturInput[]
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
    deskripsi?: StringNullableFilter<"Kursus"> | string | null
    harga?: IntFilter<"Kursus"> | number
    lamaKursus?: IntNullableFilter<"Kursus"> | number | null
    kuota?: IntNullableFilter<"Kursus"> | number | null
    status?: StringFilter<"Kursus"> | string
    thumbnail?: StringNullableFilter<"Kursus"> | string | null
    tanggalMulai?: DateTimeNullableFilter<"Kursus"> | Date | string | null
    tanggalSelesai?: DateTimeNullableFilter<"Kursus"> | Date | string | null
    createdAt?: DateTimeFilter<"Kursus"> | Date | string
    updatedAt?: DateTimeFilter<"Kursus"> | Date | string
    userId?: StringNullableFilter<"Kursus"> | string | null
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
    keterangan?: StringNullableFilter<"Pendaftaran"> | string | null
    createdAt?: DateTimeFilter<"Pendaftaran"> | Date | string
    updatedAt?: DateTimeFilter<"Pendaftaran"> | Date | string
  }

  export type JadwalUpsertWithWhereUniqueWithoutInstrukturInput = {
    where: JadwalWhereUniqueInput
    update: XOR<JadwalUpdateWithoutInstrukturInput, JadwalUncheckedUpdateWithoutInstrukturInput>
    create: XOR<JadwalCreateWithoutInstrukturInput, JadwalUncheckedCreateWithoutInstrukturInput>
  }

  export type JadwalUpdateWithWhereUniqueWithoutInstrukturInput = {
    where: JadwalWhereUniqueInput
    data: XOR<JadwalUpdateWithoutInstrukturInput, JadwalUncheckedUpdateWithoutInstrukturInput>
  }

  export type JadwalUpdateManyWithWhereWithoutInstrukturInput = {
    where: JadwalScalarWhereInput
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyWithoutInstrukturInput>
  }

  export type JadwalScalarWhereInput = {
    AND?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
    OR?: JadwalScalarWhereInput[]
    NOT?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
    id?: StringFilter<"Jadwal"> | string
    kursusId?: StringFilter<"Jadwal"> | string
    instrukturId?: StringNullableFilter<"Jadwal"> | string | null
    deskripsi?: StringNullableFilter<"Jadwal"> | string | null
    hari?: StringFilter<"Jadwal"> | string
    jamMulai?: StringFilter<"Jadwal"> | string
    jamSelesai?: StringFilter<"Jadwal"> | string
    lokasi?: StringNullableFilter<"Jadwal"> | string | null
    ruangan?: StringNullableFilter<"Jadwal"> | string | null
    status?: StringFilter<"Jadwal"> | string
    createdAt?: DateTimeFilter<"Jadwal"> | Date | string
    updatedAt?: DateTimeFilter<"Jadwal"> | Date | string
  }

  export type UserCreateWithoutKursusInstrukturInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin?: string | null
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp?: string | null
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
    Jadwal?: JadwalCreateNestedManyWithoutInstrukturInput
  }

  export type UserUncheckedCreateWithoutKursusInstrukturInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin?: string | null
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp?: string | null
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
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutInstrukturInput
  }

  export type UserCreateOrConnectWithoutKursusInstrukturInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutKursusInstrukturInput, UserUncheckedCreateWithoutKursusInstrukturInput>
  }

  export type PendaftaranCreateWithoutKursusInput = {
    id?: string
    status?: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPendaftaranInput
    Payment?: PaymentCreateNestedOneWithoutPendaftaranInput
    sertifikat?: SertifikatCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranUncheckedCreateWithoutKursusInput = {
    id?: string
    userId: string
    status?: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Payment?: PaymentUncheckedCreateNestedOneWithoutPendaftaranInput
    sertifikat?: SertifikatUncheckedCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranCreateOrConnectWithoutKursusInput = {
    where: PendaftaranWhereUniqueInput
    create: XOR<PendaftaranCreateWithoutKursusInput, PendaftaranUncheckedCreateWithoutKursusInput>
  }

  export type PendaftaranCreateManyKursusInputEnvelope = {
    data: PendaftaranCreateManyKursusInput | PendaftaranCreateManyKursusInput[]
    skipDuplicates?: boolean
  }

  export type JadwalCreateWithoutKursusInput = {
    id?: string
    deskripsi?: string | null
    hari: string
    jamMulai: string
    jamSelesai: string
    lokasi?: string | null
    ruangan?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    instruktur?: UserCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUncheckedCreateWithoutKursusInput = {
    id?: string
    instrukturId?: string | null
    deskripsi?: string | null
    hari: string
    jamMulai: string
    jamSelesai: string
    lokasi?: string | null
    ruangan?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JadwalCreateOrConnectWithoutKursusInput = {
    where: JadwalWhereUniqueInput
    create: XOR<JadwalCreateWithoutKursusInput, JadwalUncheckedCreateWithoutKursusInput>
  }

  export type JadwalCreateManyKursusInputEnvelope = {
    data: JadwalCreateManyKursusInput | JadwalCreateManyKursusInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutKursusInstrukturInput = {
    update: XOR<UserUpdateWithoutKursusInstrukturInput, UserUncheckedUpdateWithoutKursusInstrukturInput>
    create: XOR<UserCreateWithoutKursusInstrukturInput, UserUncheckedCreateWithoutKursusInstrukturInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutKursusInstrukturInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutKursusInstrukturInput, UserUncheckedUpdateWithoutKursusInstrukturInput>
  }

  export type UserUpdateWithoutKursusInstrukturInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    Jadwal?: JadwalUpdateManyWithoutInstrukturNestedInput
  }

  export type UserUncheckedUpdateWithoutKursusInstrukturInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    Jadwal?: JadwalUncheckedUpdateManyWithoutInstrukturNestedInput
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

  export type JadwalUpsertWithWhereUniqueWithoutKursusInput = {
    where: JadwalWhereUniqueInput
    update: XOR<JadwalUpdateWithoutKursusInput, JadwalUncheckedUpdateWithoutKursusInput>
    create: XOR<JadwalCreateWithoutKursusInput, JadwalUncheckedCreateWithoutKursusInput>
  }

  export type JadwalUpdateWithWhereUniqueWithoutKursusInput = {
    where: JadwalWhereUniqueInput
    data: XOR<JadwalUpdateWithoutKursusInput, JadwalUncheckedUpdateWithoutKursusInput>
  }

  export type JadwalUpdateManyWithWhereWithoutKursusInput = {
    where: JadwalScalarWhereInput
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyWithoutKursusInput>
  }

  export type UserCreateWithoutPendaftaranInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin?: string | null
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp?: string | null
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
    kursusInstruktur?: KursusCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Jadwal?: JadwalCreateNestedManyWithoutInstrukturInput
  }

  export type UserUncheckedCreateWithoutPendaftaranInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin?: string | null
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp?: string | null
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
    kursusInstruktur?: KursusUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutInstrukturInput
  }

  export type UserCreateOrConnectWithoutPendaftaranInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPendaftaranInput, UserUncheckedCreateWithoutPendaftaranInput>
  }

  export type KursusCreateWithoutPendaftaranInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    harga: number
    lamaKursus?: number | null
    kuota?: number | null
    status?: string
    thumbnail?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutKursusInstrukturInput
    Jadwal?: JadwalCreateNestedManyWithoutKursusInput
  }

  export type KursusUncheckedCreateWithoutPendaftaranInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    harga: number
    lamaKursus?: number | null
    kuota?: number | null
    status?: string
    thumbnail?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    Jadwal?: JadwalUncheckedCreateNestedManyWithoutKursusInput
  }

  export type KursusCreateOrConnectWithoutPendaftaranInput = {
    where: KursusWhereUniqueInput
    create: XOR<KursusCreateWithoutPendaftaranInput, KursusUncheckedCreateWithoutPendaftaranInput>
  }

  export type PaymentCreateWithoutPendaftaranInput = {
    id?: string
    method?: string | null
    amount: number
    status?: string
    waktuBayar?: Date | string | null
    vaNumber?: string | null
    bank?: string | null
    orderId?: string | null
    transactionId?: string | null
    paymentType?: string | null
    fraudStatus?: string | null
    snapToken?: string | null
    redirectUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutPendaftaranInput = {
    id?: string
    method?: string | null
    amount: number
    status?: string
    waktuBayar?: Date | string | null
    vaNumber?: string | null
    bank?: string | null
    orderId?: string | null
    transactionId?: string | null
    paymentType?: string | null
    fraudStatus?: string | null
    snapToken?: string | null
    redirectUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutPendaftaranInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutPendaftaranInput, PaymentUncheckedCreateWithoutPendaftaranInput>
  }

  export type SertifikatCreateWithoutPendaftaranInput = {
    id?: string
    nomor: string
    tanggalTerbit?: Date | string
    fileUrl?: string | null
    fileName?: string | null
    fileType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SertifikatUncheckedCreateWithoutPendaftaranInput = {
    id?: string
    nomor: string
    tanggalTerbit?: Date | string
    fileUrl?: string | null
    fileName?: string | null
    fileType?: string | null
    fileSize?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SertifikatCreateOrConnectWithoutPendaftaranInput = {
    where: SertifikatWhereUniqueInput
    create: XOR<SertifikatCreateWithoutPendaftaranInput, SertifikatUncheckedCreateWithoutPendaftaranInput>
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
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    kursusInstruktur?: KursusUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Jadwal?: JadwalUpdateManyWithoutInstrukturNestedInput
  }

  export type UserUncheckedUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    kursusInstruktur?: KursusUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutInstrukturNestedInput
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
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: IntFieldUpdateOperationsInput | number
    lamaKursus?: NullableIntFieldUpdateOperationsInput | number | null
    kuota?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutKursusInstrukturNestedInput
    Jadwal?: JadwalUpdateManyWithoutKursusNestedInput
  }

  export type KursusUncheckedUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: IntFieldUpdateOperationsInput | number
    lamaKursus?: NullableIntFieldUpdateOperationsInput | number | null
    kuota?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    Jadwal?: JadwalUncheckedUpdateManyWithoutKursusNestedInput
  }

  export type PaymentUpsertWithoutPendaftaranInput = {
    update: XOR<PaymentUpdateWithoutPendaftaranInput, PaymentUncheckedUpdateWithoutPendaftaranInput>
    create: XOR<PaymentCreateWithoutPendaftaranInput, PaymentUncheckedCreateWithoutPendaftaranInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutPendaftaranInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutPendaftaranInput, PaymentUncheckedUpdateWithoutPendaftaranInput>
  }

  export type PaymentUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    waktuBayar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    fraudStatus?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    waktuBayar?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vaNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bank?: NullableStringFieldUpdateOperationsInput | string | null
    orderId?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentType?: NullableStringFieldUpdateOperationsInput | string | null
    fraudStatus?: NullableStringFieldUpdateOperationsInput | string | null
    snapToken?: NullableStringFieldUpdateOperationsInput | string | null
    redirectUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SertifikatUpsertWithoutPendaftaranInput = {
    update: XOR<SertifikatUpdateWithoutPendaftaranInput, SertifikatUncheckedUpdateWithoutPendaftaranInput>
    create: XOR<SertifikatCreateWithoutPendaftaranInput, SertifikatUncheckedCreateWithoutPendaftaranInput>
    where?: SertifikatWhereInput
  }

  export type SertifikatUpdateToOneWithWhereWithoutPendaftaranInput = {
    where?: SertifikatWhereInput
    data: XOR<SertifikatUpdateWithoutPendaftaranInput, SertifikatUncheckedUpdateWithoutPendaftaranInput>
  }

  export type SertifikatUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    tanggalTerbit?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SertifikatUncheckedUpdateWithoutPendaftaranInput = {
    id?: StringFieldUpdateOperationsInput | string
    nomor?: StringFieldUpdateOperationsInput | string
    tanggalTerbit?: DateTimeFieldUpdateOperationsInput | Date | string
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    fileSize?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftaranCreateWithoutSertifikatInput = {
    id?: string
    status?: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPendaftaranInput
    kursus: KursusCreateNestedOneWithoutPendaftaranInput
    Payment?: PaymentCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranUncheckedCreateWithoutSertifikatInput = {
    id?: string
    userId: string
    kursusId: string
    status?: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Payment?: PaymentUncheckedCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranCreateOrConnectWithoutSertifikatInput = {
    where: PendaftaranWhereUniqueInput
    create: XOR<PendaftaranCreateWithoutSertifikatInput, PendaftaranUncheckedCreateWithoutSertifikatInput>
  }

  export type PendaftaranUpsertWithoutSertifikatInput = {
    update: XOR<PendaftaranUpdateWithoutSertifikatInput, PendaftaranUncheckedUpdateWithoutSertifikatInput>
    create: XOR<PendaftaranCreateWithoutSertifikatInput, PendaftaranUncheckedCreateWithoutSertifikatInput>
    where?: PendaftaranWhereInput
  }

  export type PendaftaranUpdateToOneWithWhereWithoutSertifikatInput = {
    where?: PendaftaranWhereInput
    data: XOR<PendaftaranUpdateWithoutSertifikatInput, PendaftaranUncheckedUpdateWithoutSertifikatInput>
  }

  export type PendaftaranUpdateWithoutSertifikatInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPendaftaranNestedInput
    kursus?: KursusUpdateOneRequiredWithoutPendaftaranNestedInput
    Payment?: PaymentUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranUncheckedUpdateWithoutSertifikatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUncheckedUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranCreateWithoutPaymentInput = {
    id?: string
    status?: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPendaftaranInput
    kursus: KursusCreateNestedOneWithoutPendaftaranInput
    sertifikat?: SertifikatCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranUncheckedCreateWithoutPaymentInput = {
    id?: string
    userId: string
    kursusId: string
    status?: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sertifikat?: SertifikatUncheckedCreateNestedOneWithoutPendaftaranInput
  }

  export type PendaftaranCreateOrConnectWithoutPaymentInput = {
    where: PendaftaranWhereUniqueInput
    create: XOR<PendaftaranCreateWithoutPaymentInput, PendaftaranUncheckedCreateWithoutPaymentInput>
  }

  export type PendaftaranUpsertWithoutPaymentInput = {
    update: XOR<PendaftaranUpdateWithoutPaymentInput, PendaftaranUncheckedUpdateWithoutPaymentInput>
    create: XOR<PendaftaranCreateWithoutPaymentInput, PendaftaranUncheckedCreateWithoutPaymentInput>
    where?: PendaftaranWhereInput
  }

  export type PendaftaranUpdateToOneWithWhereWithoutPaymentInput = {
    where?: PendaftaranWhereInput
    data: XOR<PendaftaranUpdateWithoutPaymentInput, PendaftaranUncheckedUpdateWithoutPaymentInput>
  }

  export type PendaftaranUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPendaftaranNestedInput
    kursus?: KursusUpdateOneRequiredWithoutPendaftaranNestedInput
    sertifikat?: SertifikatUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sertifikat?: SertifikatUncheckedUpdateOneWithoutPendaftaranNestedInput
  }

  export type KursusCreateWithoutJadwalInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    harga: number
    lamaKursus?: number | null
    kuota?: number | null
    status?: string
    thumbnail?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutKursusInstrukturInput
    Pendaftaran?: PendaftaranCreateNestedManyWithoutKursusInput
  }

  export type KursusUncheckedCreateWithoutJadwalInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    harga: number
    lamaKursus?: number | null
    kuota?: number | null
    status?: string
    thumbnail?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutKursusInput
  }

  export type KursusCreateOrConnectWithoutJadwalInput = {
    where: KursusWhereUniqueInput
    create: XOR<KursusCreateWithoutJadwalInput, KursusUncheckedCreateWithoutJadwalInput>
  }

  export type UserCreateWithoutJadwalInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin?: string | null
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp?: string | null
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
    kursusInstruktur?: KursusCreateNestedManyWithoutUserInput
    Account?: AccountCreateNestedManyWithoutUserInput
    Session?: SessionCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJadwalInput = {
    id?: string
    nama: string
    nik?: string | null
    jenisKelamin?: string | null
    tempatLahir?: string | null
    tanggalLahir?: string | null
    mediaSosial?: string | null
    noHp?: string | null
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
    kursusInstruktur?: KursusUncheckedCreateNestedManyWithoutUserInput
    Account?: AccountUncheckedCreateNestedManyWithoutUserInput
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput
    Pendaftaran?: PendaftaranUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJadwalInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJadwalInput, UserUncheckedCreateWithoutJadwalInput>
  }

  export type KursusUpsertWithoutJadwalInput = {
    update: XOR<KursusUpdateWithoutJadwalInput, KursusUncheckedUpdateWithoutJadwalInput>
    create: XOR<KursusCreateWithoutJadwalInput, KursusUncheckedCreateWithoutJadwalInput>
    where?: KursusWhereInput
  }

  export type KursusUpdateToOneWithWhereWithoutJadwalInput = {
    where?: KursusWhereInput
    data: XOR<KursusUpdateWithoutJadwalInput, KursusUncheckedUpdateWithoutJadwalInput>
  }

  export type KursusUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: IntFieldUpdateOperationsInput | number
    lamaKursus?: NullableIntFieldUpdateOperationsInput | number | null
    kuota?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutKursusInstrukturNestedInput
    Pendaftaran?: PendaftaranUpdateManyWithoutKursusNestedInput
  }

  export type KursusUncheckedUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: IntFieldUpdateOperationsInput | number
    lamaKursus?: NullableIntFieldUpdateOperationsInput | number | null
    kuota?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutKursusNestedInput
  }

  export type UserUpsertWithoutJadwalInput = {
    update: XOR<UserUpdateWithoutJadwalInput, UserUncheckedUpdateWithoutJadwalInput>
    create: XOR<UserCreateWithoutJadwalInput, UserUncheckedCreateWithoutJadwalInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJadwalInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJadwalInput, UserUncheckedUpdateWithoutJadwalInput>
  }

  export type UserUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    kursusInstruktur?: KursusUpdateManyWithoutUserNestedInput
    Account?: AccountUpdateManyWithoutUserNestedInput
    Session?: SessionUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    nik?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKelamin?: NullableStringFieldUpdateOperationsInput | string | null
    tempatLahir?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalLahir?: NullableStringFieldUpdateOperationsInput | string | null
    mediaSosial?: NullableStringFieldUpdateOperationsInput | string | null
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
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
    kursusInstruktur?: KursusUncheckedUpdateManyWithoutUserNestedInput
    Account?: AccountUncheckedUpdateManyWithoutUserNestedInput
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KursusCreateManyUserInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    harga: number
    lamaKursus?: number | null
    kuota?: number | null
    status?: string
    thumbnail?: string | null
    tanggalMulai?: Date | string | null
    tanggalSelesai?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
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
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JadwalCreateManyInstrukturInput = {
    id?: string
    kursusId: string
    deskripsi?: string | null
    hari: string
    jamMulai: string
    jamSelesai: string
    lokasi?: string | null
    ruangan?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type KursusUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: IntFieldUpdateOperationsInput | number
    lamaKursus?: NullableIntFieldUpdateOperationsInput | number | null
    kuota?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pendaftaran?: PendaftaranUpdateManyWithoutKursusNestedInput
    Jadwal?: JadwalUpdateManyWithoutKursusNestedInput
  }

  export type KursusUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: IntFieldUpdateOperationsInput | number
    lamaKursus?: NullableIntFieldUpdateOperationsInput | number | null
    kuota?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pendaftaran?: PendaftaranUncheckedUpdateManyWithoutKursusNestedInput
    Jadwal?: JadwalUncheckedUpdateManyWithoutKursusNestedInput
  }

  export type KursusUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    harga?: IntFieldUpdateOperationsInput | number
    lamaKursus?: NullableIntFieldUpdateOperationsInput | number | null
    kuota?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    tanggalMulai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanggalSelesai?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUpdateOneRequiredWithoutPendaftaranNestedInput
    Payment?: PaymentUpdateOneWithoutPendaftaranNestedInput
    sertifikat?: SertifikatUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUncheckedUpdateOneWithoutPendaftaranNestedInput
    sertifikat?: SertifikatUncheckedUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalUpdateWithoutInstrukturInput = {
    id?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kursus?: KursusUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateWithoutInstrukturInput = {
    id?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalUncheckedUpdateManyWithoutInstrukturInput = {
    id?: StringFieldUpdateOperationsInput | string
    kursusId?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendaftaranCreateManyKursusInput = {
    id?: string
    userId: string
    status?: string
    keterangan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JadwalCreateManyKursusInput = {
    id?: string
    instrukturId?: string | null
    deskripsi?: string | null
    hari: string
    jamMulai: string
    jamSelesai: string
    lokasi?: string | null
    ruangan?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PendaftaranUpdateWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPendaftaranNestedInput
    Payment?: PaymentUpdateOneWithoutPendaftaranNestedInput
    sertifikat?: SertifikatUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranUncheckedUpdateWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Payment?: PaymentUncheckedUpdateOneWithoutPendaftaranNestedInput
    sertifikat?: SertifikatUncheckedUpdateOneWithoutPendaftaranNestedInput
  }

  export type PendaftaranUncheckedUpdateManyWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    keterangan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalUpdateWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instruktur?: UserUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    instrukturId?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalUncheckedUpdateManyWithoutKursusInput = {
    id?: StringFieldUpdateOperationsInput | string
    instrukturId?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    hari?: StringFieldUpdateOperationsInput | string
    jamMulai?: StringFieldUpdateOperationsInput | string
    jamSelesai?: StringFieldUpdateOperationsInput | string
    lokasi?: NullableStringFieldUpdateOperationsInput | string | null
    ruangan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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