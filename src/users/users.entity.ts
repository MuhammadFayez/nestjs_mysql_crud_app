/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';
// import * as  bcrypt from 'bcrypt';
@Entity('users')
export class UsersEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  address: string;

  @Column()
  company: string;

  @Column()
  phone: string;

  @Column()
  city: string;

  @BeforeInsert()
  hashPassword() {
     this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }
  // async hashPassword() {
  //   this.password = await bcrypt.hash(this.password, 10);
  // }
  @Column()
  password: string;
}