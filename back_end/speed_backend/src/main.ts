import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Load environment variables before creating the app
import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,           // Allow all origins (or configure specifically)
    credentials: true       // Allow cookies and auth headers if needed
  });

  const port = process.env.PORT || 8082;
  await app.listen(port);
  console.log(`Server running on http://localhost:${port}`);
}
bootstrap();