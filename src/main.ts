import { Controller, Get, Module } from "@nestjs/common";

@Controller()
export class AppController {

  @Get()
  getRootRoute() {
    return "Hello World!";
  };

};
