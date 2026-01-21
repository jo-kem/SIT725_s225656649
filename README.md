# SIT725_s225656649

## Contents:

- 1.3P: Prac 1 – Basics of Programming and GIT
- 2.2P: Prac 2 – Express Web Servers
-

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

### 3.2P – Getting Graphical

### 4.2P – Databases

Run seed.js first `npm run seed`
