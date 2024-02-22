import { Module } from '@nestjs/common';
import { ConfigModule as Config } from '@nestjs/config';

@Module({
  imports: [
    Config.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
})
export class ConfigModule {}
