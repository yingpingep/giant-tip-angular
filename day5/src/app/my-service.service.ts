import { InjectionToken, inject } from '@angular/core';
import { MyDepService } from './my-dep.service';

export interface IMyService {
  print(): string;
}

export class MyService implements IMyService {

  constructor(private readonly myDep: MyDepService) {}

  print(): string {
    return this.myDep.hello();
  }
}

export const MY_SERVICE_TOKEN = new InjectionToken<IMyService>('My Service', {
  providedIn: 'root',
  factory: () => new MyService(inject(MyDepService))
});
