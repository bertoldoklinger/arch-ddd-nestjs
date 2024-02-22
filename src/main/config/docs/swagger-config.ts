import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const swaggerConfig = (app: NestExpressApplication): void => {
  const config = new DocumentBuilder()
    .setTitle('Arch DDD Nestjs')
    .setDescription('Arch DDD Nestjs Application')
    .setVersion('0.0.1')
    .addTag('nestjs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
};
