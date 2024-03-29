declare const NML11th_DLSign_globje: {
    [key: string]: any;
};
declare class JSBI extends Array {
    private sign;
    private constructor();
    static BigInt(arg: number | string | boolean | object): JSBI;
    toDebugString(): string;
    toString(radix?: number): string;
    valueOf(): void;
    static toNumber(x: JSBI): number; /**///
    static unaryMinus(x: JSBI): JSBI;
    static bitwiseNot(x: JSBI): JSBI;
    static exponentiate(x: JSBI, y: JSBI): JSBI; /**/
    static multiply(x: JSBI, y: JSBI): JSBI;
    static divide(x: JSBI, y: JSBI): JSBI;
    static remainder(x: JSBI, y: JSBI): JSBI;
    static add(x: JSBI, y: JSBI): JSBI;
    static subtract(x: JSBI, y: JSBI): JSBI;
    static leftShift(x: JSBI, y: JSBI): JSBI;
    static signedRightShift(x: JSBI, y: JSBI): JSBI;
    static unsignedRightShift(): void; /**///
    static lessThan(x: JSBI, y: JSBI): boolean;
    static lessThanOrEqual(x: JSBI, y: JSBI): boolean; /**/
    static greaterThan(x: JSBI, y: JSBI): boolean; /**///
    static greaterThanOrEqual(x: JSBI, y: JSBI): boolean; /**/
    static equal(x: JSBI, y: JSBI): boolean;
    static notEqual(x: JSBI, y: JSBI): boolean;
    static bitwiseAnd(x: JSBI, y: JSBI): JSBI;
    static bitwiseXor(x: JSBI, y: JSBI): JSBI;
    static bitwiseOr(x: JSBI, y: JSBI): JSBI; /**///
    static asIntN(n: number, x: JSBI): JSBI;
    static asUintN(n: number, x: JSBI): JSBI;
    static ADD(x: any, y: any): string | number | JSBI;
    static LT(x: any, y: any): boolean;
    static LE(x: any, y: any): boolean;
    static GT(x: any, y: any): boolean;
    static GE(x: any, y: any): boolean;
    static EQ(x: any, y: any): boolean;
    static NE(x: any, y: any): boolean;
    static DataViewGetBigInt64(dataview: DataView, byteOffset: number, littleEndian?: boolean): JSBI;
    static DataViewGetBigUint64(dataview: DataView, byteOffset: number, littleEndian?: boolean): JSBI;
    static DataViewSetBigInt64(dataview: DataView, byteOffset: number, value: JSBI, littleEndian?: boolean): void;
    static DataViewSetBigUint64(dataview: DataView, byteOffset: number, value: JSBI, littleEndian?: boolean): void;
    static __zero(): JSBI;
    static __oneDigit(value: number, sign: boolean): JSBI;
    __copy(): JSBI;
    __trim(): this;
    __initializeDigits(): void;
    static __decideRounding(x: JSBI, mantissaBitsUnset: number, digitIndex: number, currentDigit: number): 1 | 0 | -1;
    static __fromDouble(value: number): JSBI;
    static __isWhitespace(c: number): boolean;
    static __fromString(string: string, radix?: number): JSBI | null;
    static __fillFromParts(result: JSBI, parts: number[], partsBits: number[]): void;
    static __toStringBasePowerOfTwo(x: JSBI, radix: number): string;
    static __toStringGeneric(x: JSBI, radix: number, isRecursiveCall: boolean): string;
    static __unequalSign(leftNegative: boolean): number;
    static __absoluteGreater(bothNegative: boolean): number;
    static __absoluteLess(bothNegative: boolean): number;
    static __compareToBigInt(x: JSBI, y: JSBI): number;
    static __compareToNumber(x: JSBI, y: number): number;
    static __compareToDouble(x: JSBI, y: number): number;
    static __equalToNumber(x: JSBI, y: number): boolean;
    static __comparisonResultToBool(result: number, op: 0 | 1 | 2 | 3): boolean;
    static __compare(x: any, y: any, op: 0 | 1 | 2 | 3): boolean;
    __clzmsd(): number;
    static __absoluteAdd(x: JSBI, y: JSBI, resultSign: boolean): JSBI;
    static __absoluteSub(x: JSBI, y: JSBI, resultSign: boolean): JSBI;
    static __absoluteAddOne(x: JSBI, sign: boolean, result?: JSBI | null): JSBI;
    static __absoluteSubOne(x: JSBI, resultLength?: number): JSBI;
    static __absoluteAnd(x: JSBI, y: JSBI, result?: JSBI | null): JSBI;
    static __absoluteAndNot(x: JSBI, y: JSBI, result?: JSBI | null): JSBI;
    static __absoluteOr(x: JSBI, y: JSBI, result?: JSBI | null): JSBI;
    static __absoluteXor(x: JSBI, y: JSBI, result?: JSBI | null): JSBI;
    static __absoluteCompare(x: JSBI, y: JSBI): number;
    static __multiplyAccumulate(multiplicand: JSBI, multiplier: number, accumulator: JSBI, accumulatorIndex: number): void;
    static __internalMultiplyAdd(source: JSBI, factor: number, summand: number, n: number, result: JSBI): void;
    __inplaceMultiplyAdd(multiplier: number, summand: number, length: number): void;
    static __absoluteDivSmall(x: JSBI, divisor: number, quotient?: JSBI | null): JSBI;
    static __absoluteModSmall(x: JSBI, divisor: number): number;
    static __absoluteDivLarge(dividend: JSBI, divisor: JSBI, wantQuotient: false, wantRemainder: false): undefined;
    static __absoluteDivLarge(dividend: JSBI, divisor: JSBI, wantQuotient: true, wantRemainder: true): {
        quotient: JSBI;
        remainder: JSBI;
    };
    static __absoluteDivLarge(dividend: JSBI, divisor: JSBI, wantQuotient: boolean, wantRemainder: boolean): JSBI;
    static __clz15(value: number): number;
    __inplaceAdd(summand: JSBI, startIndex: number, halfDigits: number): number;
    __inplaceSub(subtrahend: JSBI, startIndex: number, halfDigits: number): number;
    __inplaceRightShift(shift: number): void;
    static __specialLeftShift(x: JSBI, shift: number, addDigit: 0 | 1): JSBI;
    static __leftShiftByAbsolute(x: JSBI, y: JSBI): JSBI;
    static __rightShiftByAbsolute(x: JSBI, y: JSBI): JSBI;
    static __rightShiftByMaximum(sign: boolean): JSBI;
    static __toShiftAmount(x: JSBI): number;
    static __toPrimitive(obj: any, hint?: string): any;
    static __toNumeric(value: unknown): number | JSBI;
    static __isBigInt(value: unknown): value is JSBI;
    static __truncateToNBits(n: number, x: JSBI): JSBI;
    static __truncateAndSubFromPowerOfTwo(n: number, x: JSBI, resultSign: boolean): JSBI;
    __digit(i: number): number;
    __unsignedDigit(i: number): number;
    __setDigit(i: number, digit: number): void;
    __setDigitGrow(i: number, digit: number): void;
    __halfDigitLength(): number;
    __halfDigit(i: number): number;
    __setHalfDigit(i: number, value: number): void;
    static __digitPow(base: number, exponent: number): number;
    static __kMaxLength: number;
    static __kMaxLengthBits: number;
    static __kMaxBitsPerChar: number[];
    static __kBitsPerCharTableShift: number;
    static __kBitsPerCharTableMultiplier: number;
    static __kConversionChars: string[];
    static __kBitConversionBuffer: ArrayBuffer;
    static __kBitConversionDouble: Float64Array;
    static __kBitConversionInts: Int32Array;
    static __clz30: (x: number) => number;
    static __imul: (x: number, y: number) => number;
    static __isOneDigitInt(x: number): boolean; /**/
}
//type bignat = JSBI; // This would be my choice of name for the ADT but, hell, it's your app :-)
declare const BigNat4str: (s: string) => JSBI;
declare const BigNat4num: (n: number | boolean) => JSBI;
type signer_vrfy_t_ = (y: string, e: string, s: string) => string;
type hasher_afn_t_ = (_: string) => Promise<string>;
interface draysigner_t_ {
    __: string;
    globje: object;
    'JSBI': typeof JSBI;
    key_r: (str: string) => string;
    key_u: (r: string) => string;
    sign_k: (str: string) => string;
    sign_gk: (k: string) => string;
    sign: (r: string
     ) => (k: string, e: string) => string;
    vrfy: (y: string, e: string, s: string) => string;
    verify: (verifier: signer_vrfy_t_, hasher: hasher_afn_t_
       ) => (pubkey: string
       ) => (message: string, evidence: string, signature: string) => Promise<boolean>;
}
interface draysigner_t__ {
    __: string;
    globje: object;
    'JSBI': typeof JSBI;
    key_r?: (str: string) => string;
    key_u?: (r: string) => string;
    sign_k?: (str: string) => string;
    sign_gk?: (k: string) => string;
    sign?: (r: string
      ) => (k: string, e: string) => string;
    vrfy?: (y: string, e: string, s: string) => string;
    verify?: (verifier: signer_vrfy_t_, hasher: hasher_afn_t_
        ) => (pubkey: string
        ) => (message: string, evidence: string, signature: string) => Promise<boolean>;
}
declare const NML11th_DLSign_: draysigner_t__[];

