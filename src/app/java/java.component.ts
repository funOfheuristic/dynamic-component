import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from '../dynamic-wrapper/dynamic.component';

@Component({
  selector: 'app-java',
  standalone: true,
  imports: [CommonModule],
  template: `<h1>{{ this.data.name }}</h1> `,
})
export class JavaComponent implements DynamicComponent {
  @Input() data: any;
}
