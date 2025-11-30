import { Request, Response } from 'express';

import { controller, httpGet, request, response } from 'inversify-express-utils';
import { BaseController } from './base.controller.js';

@controller('/')
export class HomeController extends BaseController {
  @httpGet('/')
  public async showHome(@request() req: Request, @response() res: Response) {
    return this.render(res, 'home');
  }
}
