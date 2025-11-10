import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ResponseInterceptor } from './core/modules/interceptor/response.interceptor';
import { HttpExceptionFilter } from './core/modules/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global interceptor & filter
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000);
  console.log('🚀 Server running on http://localhost:3000');
}
bootstrap();
