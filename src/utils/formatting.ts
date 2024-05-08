/**
 * Utils for rendering on frontend.
 * Formatting = formatting data to display for the end user.
 * Transforming = transforming data to use for logic.
 */

/**
 * Formats a number to a currency.
 * Options available for rounding for forcing display/hiding of decimals.
 * @param number
 * @param options FormatCurrencyOptions
 * @returns string
 */
export function formatCurrency(
    number: number,
    options?: FormatCurrencyOptions,
): string {
    const { round, decimal } = options ?? {};
    const value = round ? Math.round(number) : number;
    const isDecimal = typeof decimal !== "undefined" ? decimal : !!(value % 1);
    const formatter = new Intl.NumberFormat("en-AU", {
        style: "currency",
        currency: "AUD",
        minimumFractionDigits: isDecimal ? 2 : 0,
        maximumFractionDigits: isDecimal ? 2 : 0,
    });
    return formatter.format(value);
}

type FormatCurrencyOptions = { round?: boolean; decimal?: boolean };
