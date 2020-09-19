import { InjectionToken } from '@angular/core';

export interface IMyService {
  hello(): void;
}

export class MyService implements IMyService {
  hello(): void {
    console.log('Hello, world.');
  }
}

export const MY_SERVICE_TOKEN = new InjectionToken<IMyService>('IMyService token');
