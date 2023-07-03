import { Injectable } from '@angular/core';
import TWriter from 't-writer.js';

@Injectable({
  providedIn: 'root'
})
export class WriterService {
  constructor() { }

  writeText(target: HTMLElement, text: string, options: any): void {
    const writer = new TWriter(target, options);
    writer
      .type(text)
      .rest(1000)
      .removeCursor()
      .start();
  }
}
