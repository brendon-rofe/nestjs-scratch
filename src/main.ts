import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
export class AppController {

  @Get()
  getRootRoute() {
    return { message: "Hello World!" };
  };

};

@Module({
  controllers: [AppController]
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
};

bootstrap();
