import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DcService } from './service/dc.service';
import { DynamicWrapperComponent } from './dynamic-wrapper/dynamic-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DynamicWrapperComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dynamicComponent';
  dynamicService = inject(DcService);
  components = this.dynamicService.getDynamicComponents();
}
