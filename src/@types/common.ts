export type FontSize = 'xxsmall' | 'xsmall' | 'small' | 'default' | 'large';
export type CssUnit = 'px' | 'em' | 'rem' | 'vw' | '%';
export type CssValue = `${number}${CssUnit}` | number;
export type Level = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingAs = `h${Level}`;
export type ButtonAs = 'button' | 'a';
export type Component = {
  backgroundColor?: string;
  color?: string;
};

