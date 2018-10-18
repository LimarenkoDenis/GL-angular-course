import { Directive, HostBinding, OnInit, HostListener, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appAcl]'
})
export class AclDirective implements OnInit {
  @Input()
  public appAcl: boolean;

  @HostBinding('style.color')
  public color: string;


  @HostListener('click', ['$event', 'offsetX'])
  public myClick(offsetX: number): any {
    console.log(offsetX);
  }

  constructor(
    private _templteteRef: TemplateRef<any>,
    private _contareinerRef: ViewContainerRef
  ) {
    console.log('acl');
  }

  ngOnInit() {
    console.log(this.appAcl);

    if (this.appAcl) {
      this._contareinerRef.clear();
      return;
    }

    this._contareinerRef.createEmbeddedView(this._templteteRef);

    this.color = 'blue';
  }

}
