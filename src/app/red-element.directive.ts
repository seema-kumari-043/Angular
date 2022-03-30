import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedElement]'
})
export class RedElementDirective {

  constructor(e1:ElementRef) {
    e1.nativeElement.style.color="red";
   }

}
