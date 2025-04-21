import { NgClass } from '@angular/common';
import { Component, output } from '@angular/core';

type KeyboardKey = {
  label: string;
  value: number | string;
  colSpan?: number;
  rowSpan?: number;
};

@Component({
  selector: 'app-keyboard',
  imports: [],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css',
})
export class KeyboardComponent {
  keyClicked = output<string | number>();

  readonly keys: KeyboardKey[][] = [
    [
      { label: '7', value: 7 },
      { label: '8', value: 8, colSpan: 1 },
      { label: '9', value: 9 },
      { label: '<', value: '<' },
    ],
    [
      { label: '4', value: 4 },
      { label: '5', value: 5 },
      { label: '6', value: 6 },
      { label: '=', value: '=', rowSpan: 3 },
    ],
    [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
    ],
    [
      { label: '0', value: 0, colSpan: 2 },
      { label: ',', value: ',' },
    ],
  ];

  onKeyClick(key: KeyboardKey) {
    this.keyClicked.emit(key.value);
  }
}
