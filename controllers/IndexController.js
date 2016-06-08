import * as web from 'express-decorators';

@web.controller('/')
class IndexController {
  @web.get('/')
  defaultAction(req, res) {
    res.render('index');
  }
}

export default IndexController;
