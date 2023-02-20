import { Controller, Get, Header, Query } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  ping() {
    return 'pong';
  }

  @Get('restaurant')
  @Header('Cache-Control', 'max-age=86400')
  async getRestaurant(@Query('url') url: string) {
    return await this.appService.getRestaurant(url);
  }
}
