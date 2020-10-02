import { Injector } from '@angular/core';
import {
  ComponentFactoryResolver,
  Directive,
  OnChanges,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { inject } from '@angular/core/testing';
import { StyleComponent, StyleData } from './style';

@Directive({
  selector: '[anchor]',
})
export class AnchorDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private cmpFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  loadComponent(componentClass: Type<StyleComponent>, data: StyleData): void {
    this.viewContainerRef.clear();
    console.log(`⚡: AnchorDirective -> loadComponent -> componentClass`, componentClass);
    const cmpFactory = this.cmpFactoryResolver.resolveComponentFactory<StyleComponent>(componentClass);
    console.log(`⚡: AnchorDirective -> loadComponent -> cmpFactory`, cmpFactory);
    const cmp = this.viewContainerRef.createComponent<StyleComponent>(cmpFactory, 0, this.injector);
    Object.entries(data).forEach(([key, value]) => {
      cmp.instance[key] = value;
    });
  }
}
