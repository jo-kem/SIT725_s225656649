# SIT725_s225656649

## Contents:

- 1.3P: Prac 1 – Basics of Programming and GIT
- 2.1P: Software Requirements Specification
- 2.2P: Prac 2 – Express Web Servers
- 3.1P: Design
- 3.2P: Prac 3 – Getting Graphical
- 4.2P: Prac 4 – Databases
- 5.2P: Prac 5 – Using MVC Strategy
- 5.3C: Prac 5 – MVC + Database
- 6.2C: Prac 6 – Testing Your Code
- 7.2P: Prac 7 – Socket Programming

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

This directory contains task 3.2P, an Express web server with a Ducati motorcycles fan page. The application allows users to submit a form with their first name, last name, and email to join a community. The submitted data is stored in memory on the server and can be retrieved via API endpoints. The page features a card-based layout displaying motorcycle information with images.

- css: contains styling for the motorcycle cards and layout.
- js: contains client-side JavaScript for form submission and data fetching.
- public: contains index.html with the webpage content and images directory.
- server.js: handles form submission via POST `/api/formSubmit` and retrieves submissions via GET `/api/listSubmissions`.
- package.json and package-lock.json: package configs.

**Available Endpoints:**

- `POST /api/formSubmit`: Submit form data (firstname, lastname, email)
- `GET /api/listSubmissions`: Retrieve all submitted forms

### 4.2P – Databases

This directory contains task 4.2P. It extends 3.2P by integrating MongoDB to persist community submissions and motorcycle card data. Form submissions and card information are now stored in MongoDB collections instead of in-memory arrays. Includes a seed script to populate the database with initial card data.

- css: contains styling for the motorcycle cards and layout.
- js: contains client-side JavaScript for form submission and data fetching.
- public: contains index.html with the webpage content and images directory.
- server.js: Express server with Mongoose schemas for Cards and Community data, handles form submissions and database queries.
- seed.js: populates the Cards collection with initial motorcycle data.
- package.json and package-lock.json: package configs with MongoDB driver (mongoose) dependency.

**Available Endpoints:**

- `POST /api/formSubmit`: Submit form data to Community collection
- `GET /api/listSubmissions`: Retrieve all community members
- `GET /api/allCards`: Retrieve all motorcycle cards

Run `npm run seed` before starting the server to populate the Cards collection.

### 5.2P – MVC Architecture

This directory contains task 5.2P, implementing the MVC (Model-View-Controller) architecture pattern with a book catalogue. The application separates concerns: controllers handle HTTP requests, services contain business logic, and routes define endpoints. Book data is hardcoded in the service and returned as JSON. The frontend dynamically displays books and their details when clicked.

- controllers: contains bookController.js which calls services and returns JSON responses.
- public: contains index.html and scripts.js (client-side JavaScript that fetches books and handles the UI).
- routes: contains book.js which defines GET endpoints for `/books` and `/books/:id`.
- services: contains bookService.js with functions to retrieve all books or a specific book by ID.
- server.js: the Express server that mounts routes at `/api/books`.
- package.json and package-lock.json: package configs.

**Available Endpoints:**

- `GET /api/books`: Retrieve all books
- `GET /api/books/:id`: Retrieve a specific book by ID

### 5.3C – Database Integration

This directory contains challenge 5.3C, extending the 5.2P MVC architecture by replacing hardcoded book data with MongoDB persistence. Book information is now stored in a MongoDB collection and seeded via a script. The architecture maintains separation of concerns with models defining the database schema, services querying the database, and controllers handling HTTP requests.

- controllers: contains bookController.js and index.js for handling book-related HTTP requests.
- models: contains bookModel.js which defines the Mongoose schema for books.
- public: contains index.html and scripts.js (client-side JavaScript) with styling and assets.
- routes: contains book.js which defines GET endpoints for `/books` and `/books/:id`.
- scripts: contains seed.js to populate the MongoDB books collection with initial data.
- services: contains bookService.js with functions to query the MongoDB database.
- server.js: the Express server with Mongoose connection to MongoDB.
- package.json and package-lock.json: package configs with MongoDB dependencies.

**Available Endpoints:**

- `GET /api/books`: Retrieve all books from MongoDB
- `GET /api/books/:id`: Retrieve a specific book by ID from MongoDB

Run `npm run seed` before starting the server to populate the books collection.

### 6.2C – Testing Your Code

This directory contains prac 6.2C, implementing automated testing for a calculator application using Mocha and Chai. The project includes unit tests for the function `addNumbers` and integration tests for one of the API endpoints `GET /api/calc`. Tests validate correct functionality, edge cases, error handling, and input validation across various scenarios.

- css: contains styling for the calculator interface.
- public: contains index.html for the calculator web interface.
- scripts: contains calculationFunctions.js with the business logic being tested.
- server.js: the Express server providing the calculator API endpoints.
- test/addNumbers.test.js: unit tests for the addNumbers function covering multiple numbers, single numbers, negative numbers, invalid inputs, numeric strings, empty arrays, and large numbers.
- test/calculatorAPI.test.js: integration tests for the `/api/calc` endpoint covering empty inputs, invalid characters, numeric strings, invalid operations, addition, subtraction, multiplication, and division operations.
- package.json: includes Mocha and Chai as dev dependencies with test scripts configured.

**Additional tests to consider:**
This is not a comprehensive suite of all possible tests. At a high level, some more that could be considered are:

- `/api/adds` endpoint
- `multiplyNumbers` function
- `/api/multiplies` endpoint

Some additional unit tests that could be implemented:

- Testing addition with decimal numbers
- Testing addition with no numbers provided
- Testing addition with leading/trailing spaces
- Testing addition with mixed valid and invalid inputs
- Testing addition with zeroes included
- Testing addition with very small (negative) numbers
- Testing addition with duplicate numbers
- Testing addition with scientific notation numbers
- Testing addition with extremely large list of numbers
- Testing addition with special characters in input
- Testing addition with null/undefined values in input

**Test Frameworks:**

- **Mocha**: Test runner with spec reporter for readable test output
- **Chai**: Assertion library using expect syntax for clear test assertions
- **Request**: HTTP client for integration testing API endpoints

Run `npm start` followed by `npm test` to execute the test suite.
