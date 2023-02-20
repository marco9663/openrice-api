import { Injectable } from '@nestjs/common';
import { parseOpenRiceRestaurantHTML, OpenRiceRestaurant } from 'openrice-data';

@Injectable()
export class AppService {
  async getRestaurant(url: string): Promise<OpenRiceRestaurant> {
    const res = await fetch(url);
    const text = await res.text();
    return parseOpenRiceRestaurantHTML(text);
  }
}
