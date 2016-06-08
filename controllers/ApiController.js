import * as web from 'express-decorators';

@web.controller('/api')
export default class ApiController {
  @web.get('/')
  testAction(req, res) {
    res.send('respond with a test');
  }
}

