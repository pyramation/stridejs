import * as _7 from "./api/http";
import * as _8 from "./protobuf/any";
import * as _9 from "./protobuf/duration";
import * as _10 from "./protobuf/timestamp";
import * as _11 from "./protobuf/empty";
import * as _12 from "./protobuf/struct";
import * as _13 from "./protobuf/wrappers";
import * as _14 from "./protobuf/field_mask";
export declare namespace google {
    const api: {
        Http: {
            encode(message: _7.Http, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.Http;
            fromPartial(object: {
                rules?: {
                    selector?: string;
                    get?: string;
                    put?: string;
                    post?: string;
                    delete?: string;
                    patch?: string;
                    custom?: {
                        kind?: string;
                        path?: string;
                    };
                    body?: string;
                    responseBody?: string;
                    additionalBindings?: any[];
                }[];
                fullyDecodeReservedExpansion?: boolean;
            }): _7.Http;
        };
        HttpRule: {
            encode(message: _7.HttpRule, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.HttpRule;
            fromPartial(object: {
                selector?: string;
                get?: string;
                put?: string;
                post?: string;
                delete?: string;
                patch?: string;
                custom?: {
                    kind?: string;
                    path?: string;
                };
                body?: string;
                responseBody?: string;
                additionalBindings?: any[];
            }): _7.HttpRule;
        };
        CustomHttpPattern: {
            encode(message: _7.CustomHttpPattern, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.CustomHttpPattern;
            fromPartial(object: {
                kind?: string;
                path?: string;
            }): _7.CustomHttpPattern;
        };
    };
    const protobuf: {
        FieldMask: {
            encode(message: _14.FieldMask, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.FieldMask;
            fromPartial(object: {
                paths?: string[];
            }): _14.FieldMask;
        };
        DoubleValue: {
            encode(message: _13.DoubleValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.DoubleValue;
            fromPartial(object: {
                value?: number;
            }): _13.DoubleValue;
        };
        FloatValue: {
            encode(message: _13.FloatValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.FloatValue;
            fromPartial(object: {
                value?: number;
            }): _13.FloatValue;
        };
        Int64Value: {
            encode(message: _13.Int64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Int64Value;
            fromPartial(object: {
                value?: {
                    high?: number;
                    low?: number;
                    unsigned?: boolean;
                    add?: (addend: string | number | import("long")) => import("long");
                    and?: (other: string | number | import("long")) => import("long");
                    compare?: (other: string | number | import("long")) => number;
                    comp?: (other: string | number | import("long")) => number;
                    divide?: (divisor: string | number | import("long")) => import("long");
                    div?: (divisor: string | number | import("long")) => import("long");
                    equals?: (other: string | number | import("long")) => boolean;
                    eq?: (other: string | number | import("long")) => boolean;
                    getHighBits?: () => number;
                    getHighBitsUnsigned?: () => number;
                    getLowBits?: () => number;
                    getLowBitsUnsigned?: () => number;
                    getNumBitsAbs?: () => number;
                    greaterThan?: (other: string | number | import("long")) => boolean;
                    gt?: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                    gte?: (other: string | number | import("long")) => boolean;
                    ge?: (other: string | number | import("long")) => boolean;
                    isEven?: () => boolean;
                    isNegative?: () => boolean;
                    isOdd?: () => boolean;
                    isPositive?: () => boolean;
                    isZero?: () => boolean;
                    eqz?: () => boolean;
                    lessThan?: (other: string | number | import("long")) => boolean;
                    lt?: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                    lte?: (other: string | number | import("long")) => boolean;
                    le?: (other: string | number | import("long")) => boolean;
                    modulo?: (other: string | number | import("long")) => import("long");
                    mod?: (other: string | number | import("long")) => import("long");
                    rem?: (other: string | number | import("long")) => import("long");
                    multiply?: (multiplier: string | number | import("long")) => import("long");
                    mul?: (multiplier: string | number | import("long")) => import("long");
                    negate?: () => import("long");
                    neg?: () => import("long");
                    not?: () => import("long");
                    countLeadingZeros?: () => number;
                    clz?: () => number;
                    countTrailingZeros?: () => number;
                    ctz?: () => number;
                    notEquals?: (other: string | number | import("long")) => boolean;
                    neq?: (other: string | number | import("long")) => boolean;
                    ne?: (other: string | number | import("long")) => boolean;
                    or?: (other: string | number | import("long")) => import("long");
                    shiftLeft?: (numBits: number | import("long")) => import("long");
                    shl?: (numBits: number | import("long")) => import("long");
                    shiftRight?: (numBits: number | import("long")) => import("long");
                    shr?: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                    shru?: (numBits: number | import("long")) => import("long");
                    shr_u?: (numBits: number | import("long")) => import("long");
                    rotateLeft?: (numBits: number | import("long")) => import("long");
                    rotl?: (numBits: number | import("long")) => import("long");
                    rotateRight?: (numBits: number | import("long")) => import("long");
                    rotr?: (numBits: number | import("long")) => import("long");
                    subtract?: (subtrahend: string | number | import("long")) => import("long");
                    sub?: (subtrahend: string | number | import("long")) => import("long");
                    toInt?: () => number;
                    toNumber?: () => number;
                    toBytes?: (le?: boolean) => number[];
                    toBytesLE?: () => number[];
                    toBytesBE?: () => number[];
                    toSigned?: () => import("long");
                    toString?: (radix?: number) => string;
                    toUnsigned?: () => import("long");
                    xor?: (other: string | number | import("long")) => import("long");
                };
            }): _13.Int64Value;
        };
        UInt64Value: {
            encode(message: _13.UInt64Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.UInt64Value;
            fromPartial(object: {
                value?: {
                    high?: number;
                    low?: number;
                    unsigned?: boolean;
                    add?: (addend: string | number | import("long")) => import("long");
                    and?: (other: string | number | import("long")) => import("long");
                    compare?: (other: string | number | import("long")) => number;
                    comp?: (other: string | number | import("long")) => number;
                    divide?: (divisor: string | number | import("long")) => import("long");
                    div?: (divisor: string | number | import("long")) => import("long");
                    equals?: (other: string | number | import("long")) => boolean;
                    eq?: (other: string | number | import("long")) => boolean;
                    getHighBits?: () => number;
                    getHighBitsUnsigned?: () => number;
                    getLowBits?: () => number;
                    getLowBitsUnsigned?: () => number;
                    getNumBitsAbs?: () => number;
                    greaterThan?: (other: string | number | import("long")) => boolean;
                    gt?: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                    gte?: (other: string | number | import("long")) => boolean;
                    ge?: (other: string | number | import("long")) => boolean;
                    isEven?: () => boolean;
                    isNegative?: () => boolean;
                    isOdd?: () => boolean;
                    isPositive?: () => boolean;
                    isZero?: () => boolean;
                    eqz?: () => boolean;
                    lessThan?: (other: string | number | import("long")) => boolean;
                    lt?: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                    lte?: (other: string | number | import("long")) => boolean;
                    le?: (other: string | number | import("long")) => boolean;
                    modulo?: (other: string | number | import("long")) => import("long");
                    mod?: (other: string | number | import("long")) => import("long");
                    rem?: (other: string | number | import("long")) => import("long");
                    multiply?: (multiplier: string | number | import("long")) => import("long");
                    mul?: (multiplier: string | number | import("long")) => import("long");
                    negate?: () => import("long");
                    neg?: () => import("long");
                    not?: () => import("long");
                    countLeadingZeros?: () => number;
                    clz?: () => number;
                    countTrailingZeros?: () => number;
                    ctz?: () => number;
                    notEquals?: (other: string | number | import("long")) => boolean;
                    neq?: (other: string | number | import("long")) => boolean;
                    ne?: (other: string | number | import("long")) => boolean;
                    or?: (other: string | number | import("long")) => import("long");
                    shiftLeft?: (numBits: number | import("long")) => import("long");
                    shl?: (numBits: number | import("long")) => import("long");
                    shiftRight?: (numBits: number | import("long")) => import("long");
                    shr?: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                    shru?: (numBits: number | import("long")) => import("long");
                    shr_u?: (numBits: number | import("long")) => import("long");
                    rotateLeft?: (numBits: number | import("long")) => import("long");
                    rotl?: (numBits: number | import("long")) => import("long");
                    rotateRight?: (numBits: number | import("long")) => import("long");
                    rotr?: (numBits: number | import("long")) => import("long");
                    subtract?: (subtrahend: string | number | import("long")) => import("long");
                    sub?: (subtrahend: string | number | import("long")) => import("long");
                    toInt?: () => number;
                    toNumber?: () => number;
                    toBytes?: (le?: boolean) => number[];
                    toBytesLE?: () => number[];
                    toBytesBE?: () => number[];
                    toSigned?: () => import("long");
                    toString?: (radix?: number) => string;
                    toUnsigned?: () => import("long");
                    xor?: (other: string | number | import("long")) => import("long");
                };
            }): _13.UInt64Value;
        };
        Int32Value: {
            encode(message: _13.Int32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Int32Value;
            fromPartial(object: {
                value?: number;
            }): _13.Int32Value;
        };
        UInt32Value: {
            encode(message: _13.UInt32Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.UInt32Value;
            fromPartial(object: {
                value?: number;
            }): _13.UInt32Value;
        };
        BoolValue: {
            encode(message: _13.BoolValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.BoolValue;
            fromPartial(object: {
                value?: boolean;
            }): _13.BoolValue;
        };
        StringValue: {
            encode(message: _13.StringValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.StringValue;
            fromPartial(object: {
                value?: string;
            }): _13.StringValue;
        };
        BytesValue: {
            encode(message: _13.BytesValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.BytesValue;
            fromPartial(object: {
                value?: Uint8Array;
            }): _13.BytesValue;
        };
        nullValueFromJSON(object: any): _12.NullValue;
        nullValueToJSON(object: _12.NullValue): string;
        NullValue: typeof _12.NullValue;
        NullValueSDKType: typeof _12.NullValueSDKType;
        Struct_FieldsEntry: {
            encode(message: _12.Struct_FieldsEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Struct_FieldsEntry;
            fromPartial(object: {
                key?: string;
                value?: {
                    nullValue?: _12.NullValue;
                    numberValue?: number;
                    stringValue?: string;
                    boolValue?: boolean;
                    structValue?: {
                        fields?: {
                            [x: string]: any;
                        };
                    };
                    listValue?: {
                        values?: any[];
                    };
                };
            }): _12.Struct_FieldsEntry;
        };
        Struct: {
            encode(message: _12.Struct, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Struct;
            fromPartial(object: {
                fields?: {
                    [x: string]: any;
                };
            }): _12.Struct;
        };
        Value: {
            encode(message: _12.Value, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.Value;
            fromPartial(object: {
                nullValue?: _12.NullValue;
                numberValue?: number;
                stringValue?: string;
                boolValue?: boolean;
                structValue?: {
                    fields?: {
                        [x: string]: any;
                    };
                };
                listValue?: {
                    values?: any[];
                };
            }): _12.Value;
        };
        ListValue: {
            encode(message: _12.ListValue, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.ListValue;
            fromPartial(object: {
                values?: any[];
            }): _12.ListValue;
        };
        Empty: {
            encode(_: _11.Empty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Empty;
            fromPartial(_: {}): _11.Empty;
        };
        Timestamp: {
            encode(message: _10.Timestamp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Timestamp;
            fromPartial(object: {
                seconds?: {
                    high?: number;
                    low?: number;
                    unsigned?: boolean;
                    add?: (addend: string | number | import("long")) => import("long");
                    and?: (other: string | number | import("long")) => import("long");
                    compare?: (other: string | number | import("long")) => number;
                    comp?: (other: string | number | import("long")) => number;
                    divide?: (divisor: string | number | import("long")) => import("long");
                    div?: (divisor: string | number | import("long")) => import("long");
                    equals?: (other: string | number | import("long")) => boolean;
                    eq?: (other: string | number | import("long")) => boolean;
                    getHighBits?: () => number;
                    getHighBitsUnsigned?: () => number;
                    getLowBits?: () => number;
                    getLowBitsUnsigned?: () => number;
                    getNumBitsAbs?: () => number;
                    greaterThan?: (other: string | number | import("long")) => boolean;
                    gt?: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                    gte?: (other: string | number | import("long")) => boolean;
                    ge?: (other: string | number | import("long")) => boolean;
                    isEven?: () => boolean;
                    isNegative?: () => boolean;
                    isOdd?: () => boolean;
                    isPositive?: () => boolean;
                    isZero?: () => boolean;
                    eqz?: () => boolean;
                    lessThan?: (other: string | number | import("long")) => boolean;
                    lt?: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                    lte?: (other: string | number | import("long")) => boolean;
                    le?: (other: string | number | import("long")) => boolean;
                    modulo?: (other: string | number | import("long")) => import("long");
                    mod?: (other: string | number | import("long")) => import("long");
                    rem?: (other: string | number | import("long")) => import("long");
                    multiply?: (multiplier: string | number | import("long")) => import("long");
                    mul?: (multiplier: string | number | import("long")) => import("long");
                    negate?: () => import("long");
                    neg?: () => import("long");
                    not?: () => import("long");
                    countLeadingZeros?: () => number;
                    clz?: () => number;
                    countTrailingZeros?: () => number;
                    ctz?: () => number;
                    notEquals?: (other: string | number | import("long")) => boolean;
                    neq?: (other: string | number | import("long")) => boolean;
                    ne?: (other: string | number | import("long")) => boolean;
                    or?: (other: string | number | import("long")) => import("long");
                    shiftLeft?: (numBits: number | import("long")) => import("long");
                    shl?: (numBits: number | import("long")) => import("long");
                    shiftRight?: (numBits: number | import("long")) => import("long");
                    shr?: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                    shru?: (numBits: number | import("long")) => import("long");
                    shr_u?: (numBits: number | import("long")) => import("long");
                    rotateLeft?: (numBits: number | import("long")) => import("long");
                    rotl?: (numBits: number | import("long")) => import("long");
                    rotateRight?: (numBits: number | import("long")) => import("long");
                    rotr?: (numBits: number | import("long")) => import("long");
                    subtract?: (subtrahend: string | number | import("long")) => import("long");
                    sub?: (subtrahend: string | number | import("long")) => import("long");
                    toInt?: () => number;
                    toNumber?: () => number;
                    toBytes?: (le?: boolean) => number[];
                    toBytesLE?: () => number[];
                    toBytesBE?: () => number[];
                    toSigned?: () => import("long");
                    toString?: (radix?: number) => string;
                    toUnsigned?: () => import("long");
                    xor?: (other: string | number | import("long")) => import("long");
                };
                nanos?: number;
            }): _10.Timestamp;
        };
        Duration: {
            encode(message: _9.Duration, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _9.Duration;
            fromPartial(object: {
                seconds?: {
                    high?: number;
                    low?: number;
                    unsigned?: boolean;
                    add?: (addend: string | number | import("long")) => import("long");
                    and?: (other: string | number | import("long")) => import("long");
                    compare?: (other: string | number | import("long")) => number;
                    comp?: (other: string | number | import("long")) => number;
                    divide?: (divisor: string | number | import("long")) => import("long");
                    div?: (divisor: string | number | import("long")) => import("long");
                    equals?: (other: string | number | import("long")) => boolean;
                    eq?: (other: string | number | import("long")) => boolean;
                    getHighBits?: () => number;
                    getHighBitsUnsigned?: () => number;
                    getLowBits?: () => number;
                    getLowBitsUnsigned?: () => number;
                    getNumBitsAbs?: () => number;
                    greaterThan?: (other: string | number | import("long")) => boolean;
                    gt?: (other: string | number | import("long")) => boolean;
                    greaterThanOrEqual?: (other: string | number | import("long")) => boolean;
                    gte?: (other: string | number | import("long")) => boolean;
                    ge?: (other: string | number | import("long")) => boolean;
                    isEven?: () => boolean;
                    isNegative?: () => boolean;
                    isOdd?: () => boolean;
                    isPositive?: () => boolean;
                    isZero?: () => boolean;
                    eqz?: () => boolean;
                    lessThan?: (other: string | number | import("long")) => boolean;
                    lt?: (other: string | number | import("long")) => boolean;
                    lessThanOrEqual?: (other: string | number | import("long")) => boolean;
                    lte?: (other: string | number | import("long")) => boolean;
                    le?: (other: string | number | import("long")) => boolean;
                    modulo?: (other: string | number | import("long")) => import("long");
                    mod?: (other: string | number | import("long")) => import("long");
                    rem?: (other: string | number | import("long")) => import("long");
                    multiply?: (multiplier: string | number | import("long")) => import("long");
                    mul?: (multiplier: string | number | import("long")) => import("long");
                    negate?: () => import("long");
                    neg?: () => import("long");
                    not?: () => import("long");
                    countLeadingZeros?: () => number;
                    clz?: () => number;
                    countTrailingZeros?: () => number;
                    ctz?: () => number;
                    notEquals?: (other: string | number | import("long")) => boolean;
                    neq?: (other: string | number | import("long")) => boolean;
                    ne?: (other: string | number | import("long")) => boolean;
                    or?: (other: string | number | import("long")) => import("long");
                    shiftLeft?: (numBits: number | import("long")) => import("long");
                    shl?: (numBits: number | import("long")) => import("long");
                    shiftRight?: (numBits: number | import("long")) => import("long");
                    shr?: (numBits: number | import("long")) => import("long");
                    shiftRightUnsigned?: (numBits: number | import("long")) => import("long");
                    shru?: (numBits: number | import("long")) => import("long");
                    shr_u?: (numBits: number | import("long")) => import("long");
                    rotateLeft?: (numBits: number | import("long")) => import("long");
                    rotl?: (numBits: number | import("long")) => import("long");
                    rotateRight?: (numBits: number | import("long")) => import("long");
                    rotr?: (numBits: number | import("long")) => import("long");
                    subtract?: (subtrahend: string | number | import("long")) => import("long");
                    sub?: (subtrahend: string | number | import("long")) => import("long");
                    toInt?: () => number;
                    toNumber?: () => number;
                    toBytes?: (le?: boolean) => number[];
                    toBytesLE?: () => number[];
                    toBytesBE?: () => number[];
                    toSigned?: () => import("long");
                    toString?: (radix?: number) => string;
                    toUnsigned?: () => import("long");
                    xor?: (other: string | number | import("long")) => import("long");
                };
                nanos?: number;
            }): _9.Duration;
        };
        Any: {
            encode(message: _8.Any, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.Any;
            fromPartial(object: {
                typeUrl?: string;
                value?: Uint8Array;
            }): _8.Any;
        };
    };
}
