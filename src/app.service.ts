import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hello world my hello';
  }

  getSofyan(): string {
    return 'hello sofyan ';
  }
}
