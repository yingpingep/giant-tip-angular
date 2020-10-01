import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyDepService {
  constructor() {}
  hello(): string {
    return '⚡: MyDepService -> hello -> "Hello, World"';
  }
}
