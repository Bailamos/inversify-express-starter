import { Response } from 'express';

export abstract class BaseController {
  public render(res: Response, template: string, options = {}): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      res.render(template, options, (err, compiled) => {
        res.locals = res.req;
        if (!err) resolve(compiled);

        reject(err);
      });
    });
  }
}
