import { Injectable, Renderer2 } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

const EVENT_NAME = 'echo';

export class EchoEvent {
  manager!: EventManager;
  supports(eventName: string): boolean {
    return eventName === EVENT_NAME;
  }
  addEventListener(
    element: HTMLElement,
    eventName: string,
    handler: (event: Event) => void
  ): () => void {
    element.addEventListener(EVENT_NAME, (e) => {
      console.log(`⚡: EchoEvent -> e`, e);
    });
    return () => {
      element.removeEventListener(EVENT_NAME, handler);
    };
  }
}
