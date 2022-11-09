/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3307,
      "username": "root",
      "password": "",
      "database": "nestjs_mysql_crud_app",
      "entities": [
          "dist/**/*.entity{.ts,.js}"
      ],
      // "entities": ["src//*.entity.ts", "dist//*entity.ts"],
      "synchronize": true,
      "logging": true,
  }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
