import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { SuccessInterceptor } from './global-setting/success.interceptor';
import { FailureFilter } from './global-setting/failure.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new SuccessInterceptor());
  app.useGlobalFilters(new FailureFilter());

  await app.listen(50001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
