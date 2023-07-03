import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  @Input() title!: string;
  @Input() show!: boolean;
  @Output() closed = new EventEmitter();

  closePopup() {
    this.closed.emit();
  }
}
