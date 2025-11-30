import { Response } from 'express';

export abstract class BaseController {
  public render(res: Response, template: string, options = {}): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      res.render(template, options, (err, compiled) => {
        if (!err) resolve(compiled);

        reject(err);
      });
    });
  }
}
