import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductEntity } from './product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  list(): Promise<ProductEntity[]> {
    return this.productService.list();
  }
}
