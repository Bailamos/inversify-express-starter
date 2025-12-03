import 'dotenv/config';
import container from './ioc.config.js';
import nunjucks from 'nunjucks';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import path from 'path';
const __dirname = import.meta.dirname;

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app,
    noCache: true,
    watch: true
  });

  app.set('view engine', 'njk');
  app.use('/css', express.static(path.join(__dirname, 'public')));
});

const app = server.build();

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
