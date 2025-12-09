# Inversify express starter
A Node.js starter template that provides a fully-typed Express setup with dependency injection, database query building, testing utilities, and security middleware preconfigured.

## **Notable features**
- TypeScript - Strongly typed programming language that builds on JavaScript
- Express - Minimal, fast, flexible HTTP server
- Nunjucks - Templating engine for express
- SCSS - Enhanced styling with variables, mixins, and modular architecture  
- Bootstrap - Prebuilt layout system and components for rapid UI development  
- Inversify - Powerful dependency injection container for clean architecture
- Cookie-session - Lightweight session management via cookies
- Csrf-csrf - CSRF protection middleware
- Helmet - Security middleware that sets HTTP headers to help app  
- Kysely - Type-safe SQL query builder
- Jest - Testing framework
- Supertest - HTTP integration testing

Additionally in the root there is a docker compose with Postgres and PGAdmin configured.

## **How to run**
1. Run `docker-compose up` to run Postgres and PGAdmin in container
2. Copy `.env.example` to `.env`
3. To install dependencies execute `npm install`
4. To run app execute `npm run start`
5. Server will be available on `localhost:3000`

## **Migrations & DB types**

Database migrations are handled using **Kysely**.

To create a new migration file, run:
```
npm run kysely:migrate-make
```

To execute migrations, run:
```
npm run kysely:migrate
```

To generate types base on db schema, run:
```
npm run kysley:generate-types
```
