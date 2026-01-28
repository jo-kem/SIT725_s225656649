# SIT725_s225656649

## Contents:

- 1.3P: Prac 1 – Basics of Programming and GIT
- 2.1P: Software Requirements Specification
- 2.2P: Prac 2 – Express Web Servers
- 3.1P: Design
- 3.2P: Prac 3 – Getting Graphical
- 4.2P: Prac 4 – Databases
- 5.2P: Prac 5 – MVC Architecture
- 5.3P: Prac 5 – Database Integration

### 1.3P – Basics of Programming and GIT

This directory contains task 1.3P, a simple copy-paste of a webpage that displays random text when a button is pressed.

- css: contains the empty style file.
- js: contains the JS function to change the text when the button is pressed.
- index.html: contains the webpage content.

### 2.1P – SRS

This folder contains the SRS document for task 2.1P in markdown format. Render to PDF using the markdown-pdf VSCode extension.

### 2.2P – Express Web Servers

This directory contains task 2.2P, an express web server with GET APIs that can be used to add two numbers together, as well as other basic mathematical operations.

- css: contains the empty style file.
- public: the index.html file that defines the webpage content
- server.js: the API functions
- package.json and package-lock.json: package configs

The calculator has a GUI interface for the calc API. In addition, all available APIs and their usage are below:

- **`GET /api/calc`**: Perform a calculation between two numbers.
  - Query params: `a` (number), `b` (number), `op` (`add` | `subtract` | `multiply` | `divide`).
  - Example:

```bash
curl "http://localhost:3000/api/calc?a=2&b=3&op=add"
```

```json
{ "result": 5 }
```

- **`GET /adds`**: Sum multiple numbers.
  - Request JSON body: `{"a": [1,2,3]}`
  - Example:

```bash
curl http://localhost:3000/adds?a=1,2,3
```

```json
{ "sum": 6 }
```

- **`GET /multiplies`**: Multiply multiple numbers.
  - Request JSON body: `{"a": [2,3,4]}`
  - Example:

```bash
curl http://localhost:3000/multiplies?a=2,3,4
```

```json
{ "result": 24 }
```

### 3.1P – Design

This folder contains the design document for task 3.1P in markdown format.

### 3.2P – Getting Graphical

This directory contains task 3.2P, an express web server with a graphical interface for displaying book items.

- css: contains the style file.
- js: contains the client-side JavaScript functions.
- public: contains the index.html file with the webpage content.
- server.js: the Express server and API endpoints.
- package.json and package-lock.json: package configs.

### 4.2P – Databases

This directory contains task 4.2P, an express web server with database integration using MongoDB.

- css: contains the style file.
- js: contains the client-side JavaScript functions.
- public: contains the index.html file.
- server.js: the Express server with database connectivity.
- seed.js: database seed script.
- package.json and package-lock.json: package configs.

Run seed.js first: `npm run seed`

### 5.2P – MVC Architecture

This directory contains task 5.2P, implementing the MVC (Model-View-Controller) architecture pattern.

- controllers: contains bookController.js with controller logic.
- public: contains the index.html and static assets (css, js).
- routes: contains book.js with route definitions.
- services: contains bookService.js with business logic.
- server.js: the Express server.
- package.json and package-lock.json: package configs.

### 5.3C – Database Integration

This directory contains task 5.3C, extending the MVC architecture with database integration.

- controllers: contains bookController.js and index.js.
- models: contains bookModel.js for database schema definition.
- public: contains the index.html and static assets (css, js).
- routes: contains book.js with route definitions.
- scripts: contains seed.js for database seeding.
- services: contains bookService.js with business logic.
- server.js: the Express server with MongoDB integration.
- package.json and package-lock.json: package configs.

Run seed.js first: `npm run seed`
