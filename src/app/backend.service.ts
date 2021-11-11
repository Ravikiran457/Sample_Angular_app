import { Injectable, Type } from '@angular/core';

import { Logger } from './logger.service';
import { Hero } from './hero';

const HEROES = [
        new Hero('Total No. of Orders Submitted', '1'),
        new Hero('Residential Customer', '2'),
        new Hero('Customer Order', '123456789'),
        new Hero('Andel Order', '1111'),
        new Hero('Plan Switch', 'Plan Switch'),
        new Hero('Fulfillment', 'Fulfillment')
      ];

@Injectable()
export class BackendService {
  constructor(private logger: Logger) {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Hero) {
      // TODO: get from the database
      return Promise.resolve<Hero[]>(HEROES);
    }
    const err = new Error('Cannot get object of this type');
    this.logger.error(err);
    throw err;
  }
}
