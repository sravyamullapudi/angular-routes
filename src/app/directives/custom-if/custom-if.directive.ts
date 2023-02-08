import { AfterViewInit, Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective implements AfterViewInit{

  @Input() customIf!: boolean;

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<any>
    ) { 
    console.log(view, template);
  }

  ngAfterViewInit() {
    // this.view.createEmbeddedView(this.template);
  }

  ngOnChanges() {
    if(this.customIf) {
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }
}
