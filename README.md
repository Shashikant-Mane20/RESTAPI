# REST API Project

Welcome to the REST API project! This project provides a simple RESTful API built with Node.js, Express, and MongoDB using Mongoose. It serves as a foundation for building more complex applications.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Lightweight and fast REST API.
- CRUD operations for managing resources.
- Middleware support using body-parser.
- Automatic server restarts during development with nodemon.

## Installation

Follow these steps to set up the project locally:

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>

Step 2: Install Dependencies
To install all required dependencies listed in the package.json file, execute:

npm install
This command will install:\

body-parser
express
mongoose
nodemon

Step 3: Run the Application
To start your application using nodemon, run:

npm nodemon app.js
This will execute your app.js file and automatically restart the server when you make changes.

Usage
Once the server is running, you can interact with the API using tools like Postman or cURL.

Example Request

API Endpoints
GET http://localhost:4500/api/v1/products : Retrieve a list of products.

POST http://localhost:4500/api/v1/product/new: Create a new product.

PUT http://localhost:4500/api/v1/products/id : Update a specific resource by ID.

DELETE http://localhost:4500/api/v1/products/id : Delete a specific resource by ID.
