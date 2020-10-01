import { Injector } from '@angular/core';
import {
  ComponentFactoryResolver,
  Directive,
  OnChanges,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { inject } from '@angular/core/testing';
import { Style, StyleData } from './style';

@Directive({
  selector: '[anchor]',
})
export class AnchorDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cmpFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  loadComponent(componentClass: Type<Style>, data: StyleData): void {
    this.viewContainerRef.clear();
    const cmpFactory = this.cmpFactoryResolver.resolveComponentFactory<Style>(componentClass);
    const cmp = this.viewContainerRef.createComponent<Style>(cmpFactory, 0, this.injector);
    Object.entries(data).forEach(([key, value]) => {
      cmp.instance[key] = value;
    });
  }
}
