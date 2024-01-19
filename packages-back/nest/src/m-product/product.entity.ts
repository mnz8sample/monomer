import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('pms_product')
export class ProductEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column('varchar', { length: 64, unique: true }) name: string;
}
