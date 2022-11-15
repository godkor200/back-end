import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: process.env.MYSQL_ROOT_PASSWORD,
      database: 'dothis',
      entities: [UsersModule], // 사용할 entity의 클래스명을 넣어둔다.
      synchronize: false, // false로 해두는 게 안전하다.
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
