export const grey = {
  50: '#FAFAFA',
  100: '#F5F5F5',
  200: '#EEEEEE',
  300: '#E0E0E0',
  400: '#BDBDBD',
  500: '#9E9E9E',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
} as const;

// Restricts usage to only the defined shade keys (50, 100, 200, ... 900),
// so grey[301] or grey[999] would be a compile-time error instead of
// silently returning undefined.
export type GreyShade = keyof typeof grey;