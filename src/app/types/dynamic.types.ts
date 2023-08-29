import { Type } from '@angular/core';

export class DynamicItem {
  constructor(public component: Type<any>, public data: any) {}
}
