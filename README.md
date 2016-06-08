FutureProof1606.js
==================

The goal of this project is to be a boilerplate project for node.js
applications in a time (June 2016) where it is hard to make decisions because of
the uncertainty of some projects.

For me the following creates uncertainty:

- I like Angular 1, but i'm not yet convinced about using Angular 2 with typescript
- I want to be ready for Bootstrap 4, and willing to ease the "transition" by already using SASS here
- Want to be flexible using passport.js, but the default way of routing in express.js (and not separating application logic from route config) really bothers me.

Features
--------

- express.js as server, with browser-sync (live-reload)
- gulp configuration in ECMAscript 7
- express.js configuration in ECMAscript 7
  - controllers with routing annotation
- Angular 2 using ECMAscript 7
- jspm and npm for dependency management
- Bootstrap 4 alpha

Examples
--------

### Using express.js with decorators
````javascript
import * as web from 'express-decorators';

@web.controller('/api')
export default class ApiController {
  @web.get('/')
  testAction(req, res) {
    res.send('respond with a test');
  }
}
````

### Using Angular 2 with ES6/7 and decorators
````javascript
import { Component } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Inject, Injectable } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard';
import { AboutComponent } from './about/about';
import { HighlightDirective } from './highlight.directive';


@Component({
  selector: 'app',
  templateUrl: '/templates/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  { path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
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
````

Pre-install tasks
-----------------

- Make sure you use a recent version (v6) of node.js with this project (protip: use nvm)
- Install jspm `npm install -g jspm`

Requirements
------------
- node.js v6

Why did you...
---------------

- Use SASS instead of LESS?<br>
Because Bootstrap 4's source will be in SASS, and there are quite some improvements over BS 3 (less div-div-div-div nesting)

- Use EJS instead of handlebars?<br>
So there will be less problems with Angular wrappers

- Use gulp instead of grunt?<br>
I just like gulp better
