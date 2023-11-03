import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { SuccessInterceptor } from './global/success.interceptor';
import { FailureFilter } from './global/failure.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalInterceptors(new SuccessInterceptor());
    app.useGlobalFilters(new FailureFilter());

    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
