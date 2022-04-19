import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {

  @Output() inputChanges: EventEmitter<string> = new EventEmitter();

  public handlerInput(event: any) {
    this.inputChanges.emit(event.target.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
