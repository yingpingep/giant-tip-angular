import { Injectable } from '@angular/core';

export interface ICosService {
  print(): string;
}

@Injectable({
  providedIn: 'root',
})
export class CosService implements ICosService {
  constructor() {}

  print(): string {
    return '⚡: CosService -> Original service';
  }
}
