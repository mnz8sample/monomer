import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn() id: number;

    @Column('varchar', { length: 50, unique: true }) name: string;

    @Column('varchar', { length: 100, unique: true }) password: string;

    @Column('timestamp') create_time: string;

    @Column('tinyint') delete_flag: number;

    @Column('tinyint') status: number;

    @Column('varchar', { length: 50 }) update_by: string;

    @Column('datetime') update_time: string;

    @Column('varchar', { length: 150 }) nick_name: string;

    @Column('varchar', { length: 150 }) avatar: string;

    @Column('varchar', { length: 100 }) email: string;
}
