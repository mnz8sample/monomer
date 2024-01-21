import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ProductService } from '../services/product.service';

interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

@Component({
  // selector: 'product-table',
  templateUrl: './product.module.html',
  imports: [NzTableModule, CommonModule],
  standalone: true,
})
export class ProductComponent {
  private productService = inject(ProductService);

  listOfData: any[] = [];

  constructor() {
    this.productService.getProducts().subscribe((res: any) => {
      const { data } = res;
      this.listOfData = [...data];
    });
  }
}
