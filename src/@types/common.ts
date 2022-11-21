export type CssUnit = 'px' | 'em' | 'rem' | 'vw' | '%';
export type CssValue = `${number}${CssUnit}` | number;

type HeadingNumber = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingAs = `h${HeadingNumber}`;
export type ButtonAs = 'button' | 'a';
