import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '../dynamic-wrapper/dynamic.component';

@Component({
  selector: 'app-rust',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>{{ this.data.name }}</h1>
    <h2>{{ this.data?.desc }}</h2>`,
})
export class RustComponent implements DynamicComponent {
  @Input() data: any;
}
