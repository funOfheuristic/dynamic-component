import { Injectable } from '@angular/core';
import { DynamicItem } from '../types/dynamic.types';
import { JavaComponent } from '../java/java.component';
import { RustComponent } from '../rust/rust.component';
import { JavaScriptComponent } from '../java-script/java-script.component';

@Injectable({
  providedIn: 'root',
})
export class DcService {
  getDynamicComponents() {
    const components = [
      new DynamicItem(JavaComponent, { name: 'Java' }),
      new DynamicItem(RustComponent, { name: 'Rust', desc: 'This is best...' }),
      new DynamicItem(JavaScriptComponent, { name: 'JavaScript' }),
    ];

    return components;
  }
}
