import { Injectable } from '@angular/core';

export interface ICosService {
  print(): void;
}

@Injectable({
  providedIn: 'root',
})
export class CosService implements ICosService {
  constructor() {}

  print(): void {
    console.log(`⚡: CosService -> Original service`);
  }
}
