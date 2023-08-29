import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicItem } from '../types/dynamic.types';
import { DcDirective } from './dc.directive';
import { DynamicComponent } from './dynamic.component';

@Component({
  selector: 'app-dynamic-wrapper',
  standalone: true,
  imports: [CommonModule, DcDirective],
  templateUrl: './dynamic-wrapper.component.html',
  styleUrls: ['./dynamic-wrapper.component.css'],
})
export class DynamicWrapperComponent {
  @Input() dynamicComponents: DynamicItem[] = [];
  @ViewChild(DcDirective) dcWrapper!: DcDirective;

  loadComponent(item: DynamicItem) {
    const viewContainerRef = this.dcWrapper.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<DynamicComponent>(
      item.component
    );
    componentRef.instance.data = item.data;
  }
}
