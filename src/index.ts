import 'dotenv/config';
import container from './ioc.config.js';
import nunjucks from 'nunjucks';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import { doubleCsrf } from 'csrf-csrf';
import helmet from 'helmet';

const __dirname = import.meta.dirname;

const server = new InversifyExpressServer(container);

const {
  doubleCsrfProtection // This is the default CSRF protection middleware.
} = doubleCsrf({
  getSecret: () => process.env.CSRF_SECRET,
  getSessionIdentifier: (req) => {
    if (!req.session.id) {
      req.session.id = crypto.randomUUID();
    }
    return req.session.id;
  },
  getCsrfTokenFromRequest: (req) => req.body._csrf
});

server.setConfig((app) => {
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(cookieParser());
  app.use(
    cookieSession({
      name: 'session',
      keys: [process.env.COOKIE_SESSION_SECRET],
      maxAge: 24 * 60 * 60 * 1000
    })
  );

  app.use(doubleCsrfProtection);

  nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app,
    noCache: true,
    watch: true
  });

  app.use((req, res, next) => {
    res.locals.req = req;
    next();
  });
  app.use(helmet());

  app.set('view engine', 'njk');
  app.use('/css', express.static(path.join(__dirname, 'public')));
});

const app = server.build();

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
