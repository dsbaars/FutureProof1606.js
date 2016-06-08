import { Component, ElementRef, AfterViewInit } from '@angular/core';

import hljs from 'highlightjs';
import 'highlightjs/styles/default.css!'
import $ from 'jquery';

@Component({
  selector: 'highlight',
  template: '<pre><code><ng-content></ng-content></code></pre>',
})
export class HighlightDirective implements AfterViewInit {
  static get parameters() {
    return [[ElementRef]];
  }

  constructor(input) {
    this.input = input;
  }

  ngAfterViewInit() {
    hljs.highlightBlock(this.input.nativeElement.querySelector('pre'));
  }
}
