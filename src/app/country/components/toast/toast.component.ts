import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styles: [
  ]
})
export class ToastComponent {
  @Input() hasError: boolean = false;
  @Input() criteria: string = '';
  @Output() onClose: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  handleToast() {
    this.onClose.emit(!this.hasError);
  }

}
