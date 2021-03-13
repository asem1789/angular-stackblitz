import { BREAKPOINT } from '@angular/flex-layout';

export const breakPoints = [
  {
    alias: 'xs.print',
    suffix: 'XsPrint',
    mediaQuery: 'screen  and (max-width: 400px)',
    overlapping: false,
    priority: 1001 // Needed if overriding the default print breakpoint
  
  },
];

export const CustomBreakPointsProvider = {
  provide: BREAKPOINT,
  useValue: breakPoints,
  multi: true,
};