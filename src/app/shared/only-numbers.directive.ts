/** A hero's name can't match the given regular expression */
import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function onlyNumberValidator(pointlessExpression: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const inputRegExp = new RegExp('\\D');
    const forbidden = inputRegExp.test(control.value);
    return forbidden ? {'notDigits': {value: control.value}} : null;
  };
}


@Directive({
  selector: '[appOnlyNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input('appOnlyNumber') inputString: string;

  validate(control: AbstractControl): {[key: string]: any} {
    return onlyNumberValidator(new RegExp(this.inputString))(control);
  }
}
