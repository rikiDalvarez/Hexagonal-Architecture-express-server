# Hexagonal Architecture with TypeScript, Nodejs, Express and Mongodb

The hexagonal architecture consists of three main layers:

+ Domain Layer: Contains the core business logic and entities. This layer is independent of the infrastructure and application-specific details.
  
+ Application Layer: Implements use cases and orchestrates the interaction between the domain and infrastructure layers.
  
+ Infrastructure Layer: Handles the interaction with external resources, such as databases or APIs.

Domain
business / core
stable code / high-level code
essential complexity
  the reason to build the app (the essence)

Infrastructure
technology / I/O
volatile code / low-level code
accidental complexity
  the supporting technical mechanisms

## How i started the project

The main logic evolves around the Todo entity, therefore i created a basic interface for the Todo entity in the domain layer.
Then the TodoRepository interface has all the methods that we need to interact with the database. The TodoRepository interface is implemented in the infrastructure layer, in the TodoRepository class. This class uses the Mongoose library to interact with MongoDB.



### 📥 Installation


Then, install the project dependencies:

```bash
npm install
```

### 🏁 How To Start

To start the server in development mode, run the following script:
```bash
npm run dev
```
Then, open http://localhost:8000 to access the server.


### 🚀 Production

To run the server in production mode, first build the TypeScript code into JavaScript by running:

```bash
npm run build
```

This will generate the dist directory with the compiled JavaScript files.

Then, start the server by running:

```bash
npm start
```

This will start the server and make it available at http://localhost:8000.


### 🏗️ Scripts
This project comes with several predefined scripts in the package.json file:

```test```: Runs tests using Jest.

```lint```: Runs ESLint to check code quality.

```lint:fix```: Runs ESLint to fix code style issues.

```dev```: Starts the development server with ts-node-dev and allows debugging

```build```: Removes the ./dist folder and compiles the TypeScript code into JavaScript in the ./dist folder.

```start```: Starts the server in production using the compiled files in the dist/ folder.

### 📝 Dependencies

- cors: middleware for handling Cross-Origin Resource Sharing (CORS)

- dotenv: loads environment variables from a .env file

- express: web framework for Node.js

- express-promise-router: promise-based router for Express

- helmet: middleware for adding security headers

- mongodb: driver for MongoDB

- mysql2: MySQL client for Node.js

### 🛠️ Dev Dependencies

- @types/cors: TypeScript definitions for cors

- @types/express: TypeScript definitions for express

- @types/jest: TypeScript definitions for jest

- @types/mysql: TypeScript definitions for mysql

- eslint: linter for TypeScript

- eslint-config-codely: ESLint configuration used by CodelyTV

- mysql: MySQL driver for Node.js

- rimraf: cross-platform tool for removing files and directories

- ts-jest: TypeScript preprocessor for Jest

- ts-node-dev: TypeScript execution and development environment for Node.js

- tsc-watch: TypeScript compiler with file watching

### 🗂️ Folder structure

In this folder structure, the code is organized according to the principles of Hexagonal Architecture. 

```
src/
├── backend
│   ├── middlewares
│   ├── App.ts
│   ├── server.start.ts
│   └── Server.ts
├── shared
│   ├── utils
│   ├── domain
│   └── infrastructure
│       ├── config
│       └── persistence
└── user
    ├── application
    │   ├── services
    │   └── use-cases
    ├── domain
    │   ├── entities
    │   └── repositories
    └── infrastructure
        ├── controllers
        ├── repositories
        ├── routes
        ├── services
        └── UserModule.ts
```



