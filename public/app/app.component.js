import { Component } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Injectable } from '@angular/core';

import { ExamplesComponent } from './examples/examples';
import { AboutComponent } from './about/about';


@Component({
  selector: 'app',
  templateUrl: '/templates/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  { path: '/', name: 'Examples', component: ExamplesComponent, useAsDefault: true },
  { path: '/about', name: 'About', component: AboutComponent }
])
@Injectable()
export class AppComponent {
  static get parameters() {
    return [[Router]];
  }

  constructor(router) {
    this.router = router;
  }

  isActive(instruction) {
    return this.router.isRouteActive(this.router.generate(instruction));
  }
}
