# Hexagonal Architecture with TypeScript, Nodejs, Express and Mongodb



## How i started the project

The main logic evolves around the Todo entity, therefore i created a basic interface for the Todo entity in the domain layer.
Then the TodoRepository interface has all the methods that we need to interact with the database. The TodoRepository interface is implemented in the infrastructure layer, in the TodoRepository class. This class uses the Mongoose library to interact with MongoDB.


### 📥 Installation

clone this repository

```bash
git clone https://github.com/rikiDalvarez/Dice-game.git
```

go into the repo and install the project dependencies:

```bash
cd express-server-hexagonal-architecture
npm install
```

build the project, it will create a dist folder

```bash
npm run build
```

To start the server  navigate to the dist/config folder and create a config.env file with the following content:

```env
NODE_ENV=env
DATABASE="yourDatabaseName"
MONGO_URI="yourMongoUri
PORT=5000
```

### 🏁 How To Start

To start the server run the following script:

```bash
npm run start
```

To test the app you have to set Up a basic authorization on your request.
Here is an example with thunderClient

![authorization](<./utilsDocs/authorization.jpg>)


### 🏗️ Scripts
This project comes with several predefined scripts in the package.json file:

```test```: Runs tests using Jest.

```lint```: Runs ESLint to check code quality.

```lint:fix```: Runs ESLint to fix code style issues.

```dev```: Starts the development server with ts-node-dev and allows debugging

```build```: Removes the ./dist folder and compiles the TypeScript code into JavaScript in the ./dist folder.

```start```: Starts the server in production using the compiled files in the dist/ folder.


### Notes
The hexagonal architecture consists of three main layers:

+ Domain Layer: Contains the core business logic and entities. This layer is independent of the infrastructure and application-specific details.
  
+ Application Layer: Implements use cases and orchestrates the interaction between the domain and infrastructure layers.
  
+ Infrastructure Layer: Handles the interaction with external resources, such as databases or APIs.
  
+ Repository Pattern:
The Repository Pattern is a design pattern used to encapsulate the logic required to interact with data storage (e.g., databases, files) and provide a clean and consistent API for the rest of the application to access the data. It acts as a mediator between the domain/business logic and the data source, hiding the complexities of data access and manipulation from the core application.

Characterics of the Repository Pattern:

1. Abstraction: The repository abstracts the data access layer, allowing the application to work with domain entities and objects without having to worry about the underlying data storage details.
2. Single Point of Entry: The repository acts as a single entry point for accessing and managing data, ensuring consistency in how data is retrieved and stored.

+ Interface (Programming):
In programming, an Interface is a construct that defines a contract or set of methods that a class must implement. It acts as a blueprint for classes, specifying what methods and properties the implementing classes should have without dictating how they should be implemented. Interfaces are particularly useful for achieving abstraction, polymorphism, and loose coupling in object-oriented programming.

Key characteristics of interfaces:

1. Contract: An interface defines a contract that any class implementing it must adhere to. It sets the expectations for the behavior of the implementing class.


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

