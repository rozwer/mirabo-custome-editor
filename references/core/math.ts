namespace Math {
    //% blockIdentity="Math._constant"
    //% block="π"
    export const PI = 3.141592653589793;
    //% blockIdentity="Math._constant"
    //% block="e"
    export const E = 2.718281828459045;
    //% blockIdentity="Math._constant"
    //% block="ln(2)"
    export const LN2 = 0.6931471805599453;
    //% blockIdentity="Math._constant"
    //% block="ln(10)"
    export const LN10 = 2.302585092994046;
    //% blockIdentity="Math._constant"
    //% block="log₂(e)"
    export const LOG2E = 1.4426950408889634;
    //% blockIdentity="Math._constant"
    //% block="log₁₀(e)"
    export const LOG10E = 0.4342944819032518;
    //% blockIdentity="Math._constant"
    //% block="√½"
    export const SQRT1_2 = 0.7071067811865476;
    //% blockIdentity="Math._constant"
    //% block="√2"
    export const SQRT2 = 1.4142135623730951;

    //% shim=TD_ID
    //% block="$MEMBER"
    //% constantShim
    //% weight=0
    //% help=math/constant
    export function _constant(MEMBER: number): number {
        return MEMBER;
    }
}