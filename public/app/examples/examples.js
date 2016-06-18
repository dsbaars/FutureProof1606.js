import { Component, OnInit } from '@angular/core';
import { Router }           from '@angular/router-deprecated';
import { HighlightDirective } from '../highlight.directive';

@Component({
  templateUrl: 'app/examples/examples.html',
  directives: [HighlightDirective]
})
export class ExamplesComponent implements OnInit {

}
