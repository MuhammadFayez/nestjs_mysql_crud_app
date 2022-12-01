/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersEntity } from './users.entity';
import { UsersDTO } from './users.dto';
import { Logger } from '@nestjs/common';


@Injectable()
export class UsersService {

  logger: Logger;
    constructor(
        @InjectRepository(UsersEntity) private usersRepository: Repository<UsersEntity>,
      ) {
        this.logger = new Logger();
      }

      async showAll() {
        return await this.usersRepository.find();
      }

      async create(data: UsersDTO) {
        this.logger.log('data ========> ', data);
        const user = this.usersRepository.create(data);
        await this.usersRepository.save(data);
        return user;
      }

      async findByEmail(email: string): Promise<UsersDTO> {
        return await this.usersRepository.findOne({
          where: {
            email: email,
          },
        });
      }

      async read(id: number) {
        return await this.usersRepository.findOne({ where: { id: id } });
      }

      async update(id: number, data: Partial<UsersDTO>) {
        this.logger.log('data ========> ', data);
        this.logger.log('id ========> ',typeof id);
        await this.usersRepository.update({ id }, data);
        return await this.usersRepository.findOne({ 
          where: { 
            id: id 
          } 
        });
      }

      async destroy(id: number) {
        await this.usersRepository.delete({ id });
        return { deleted: true };
      }
}
