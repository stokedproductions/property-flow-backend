import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<div style="flex; justify: center; align-items: center" >
      <h1 style="background: #212121; color: 
        white; padding: 20px; max-width: fit-content">
        Hello World!
      </h1>
    </div>`;
  }
}
