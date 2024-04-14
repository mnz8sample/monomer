import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SuccessInterceptor } from './global-setting/success.interceptor';
import { FailureFilter } from './global-setting/failure.filter';
import { findAvailablePort } from './tool';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new SuccessInterceptor());
  app.useGlobalFilters(new FailureFilter());

  const port = await findAvailablePort(50001);
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
