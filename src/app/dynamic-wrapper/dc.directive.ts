import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dcWrapper]',
  standalone: true,
})
export class DcDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
