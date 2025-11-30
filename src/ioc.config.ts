import { Container } from 'inversify';
import { HomeController } from './controllers/home.controller.js';

const container = new Container();

container.bind<HomeController>(HomeController).toSelf();

export default container;
