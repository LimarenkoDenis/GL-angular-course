import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @Input()
  public counter;

  @Output()
  public myDecrese: EventEmitter<void> = new EventEmitter();

  @Output()
  public myIncrease: any = new EventEmitter();


  @Output()
  public myICounterEvent: EventEmitter<number> = new EventEmitter();

  public decrease(): void {
    this.myDecrese.emit();
  }

  public increase(): void {
    this.myIncrease.emit();
  }

  myChange() {
    this.myICounterEvent.emit(12);
  }
}
