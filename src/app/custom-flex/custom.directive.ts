import { Directive, ElementRef } from '@angular/core';
import { ClassDirective } from '@angular/flex-layout';


const selector = `[ngClass.xs.print]`;
const inputs = ['ngClass.xs.print'];

// const selector = `[fxHide.xs.print]`;
// const inputs = ['fxHide.xs.print'];

// @Directive({selector, inputs})
@Directive({selector, inputs})
export class CustomShowHideDirective  extends ClassDirective  {
  protected inputs =  inputs;


}
