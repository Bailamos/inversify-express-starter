import 'reflect-metadata';
import nunjucks from 'nunjucks';
import path from 'path';

import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';
import { HomeController } from '../controllers/home.controller.js';

const container = new Container();
container.bind<HomeController>(HomeController).toSelf();

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  app.use((req, _, next) => {
    req.csrfToken = () => 'Test CSRF token';

    next();
  });

  app.use((req, res, next) => {
    res.locals.req = req;

    next();
  });

  nunjucks.configure([path.join(__dirname, '../views')], {
    autoescape: true,
    express: app,
    noCache: true
  });
  app.set('view engine', 'njk');
});

const createTestServer = () => server.build();

export default createTestServer;
