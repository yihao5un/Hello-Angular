import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  // 从父组件导入的属性
  @Input() product: Product | undefined;
  // 在 notify 属性的值发生变化时引发一个事件 发送给父组件
  @Output() notify = new EventEmitter();
}
