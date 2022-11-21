export const LOGO_URL = 'https://www.jobylon.com/hubfs/raw_assets/public/jobylon-theme/dist/assets/site-logo.svg';

export const MAX_WIDTH = '75rem';
export const GUTTER = '0.5rem';

export enum BREAKPOINTS {
  MOBILE = 'MOBILE',
  TABLET = 'TABLET',
  DESKTOP = 'DESKTOP',
}

export const BREAKPOINTS_VALUES: Record<keyof typeof BREAKPOINTS, number> = {
  [BREAKPOINTS.MOBILE]: 0,
  [BREAKPOINTS.TABLET]: 768,
  [BREAKPOINTS.DESKTOP]: 992,
};

export const MEDIA_QUERIES: Partial<Record<keyof typeof BREAKPOINTS, string>> = {
  [BREAKPOINTS.MOBILE]: `(max-width: ${BREAKPOINTS_VALUES.TABLET - 1}px)`,
  [BREAKPOINTS.TABLET]: `(min-width: ${BREAKPOINTS_VALUES.TABLET}px)`,
  [BREAKPOINTS.DESKTOP]: `(min-width: ${BREAKPOINTS_VALUES.DESKTOP}px)`,
};
