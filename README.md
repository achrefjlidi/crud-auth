# CRUD Tutorial with Node.js, MongoDB, and Angular

This project is a CRUD (Create, Read, Update, Delete) tutorial application built with Node.js for the backend, MongoDB as the database, and Angular for the frontend. It provides basic functionality to manage tutors, including adding, deleting, and modifying tutor information. Additionally, it includes authentication functionality for backend routes using JWT tokens.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

This CRUD tutorial project aims to demonstrate how to create a full-stack application using Node.js, MongoDB, and Angular. It provides a simple example of implementing CRUD operations for managing tutor information, along with user authentication for backend routes.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete tutor information.
- **Authentication**: Secure backend routes with JWT token-based authentication.
- **MongoDB Database**: Store tutor data in a MongoDB database.

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
  - JWT for authentication

- **Frontend**:
  - Angular

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js and npm
- MongoDB
- Angular CLI

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/achrefjlidi/crud-auth
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repository
   ```

3. Install backend dependencies:

   ```bash
   cd back-end
   npm install
   ```

4. Install frontend dependencies:

   ```bash
   cd ../front-end
   npm install
   ```

## Usage

To run the project, follow these steps:

1. Start the MongoDB server:

   ```bash
   mongod
   ```

2. Start the backend server:

   ```bash
   cd back-end
   node server.js
   ```

3. Start the frontend server:

   ```bash
   cd ../front-end
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200` to view the application.

## API Endpoints

Document the available API endpoints here, including their functionality and required parameters.

## Contributing

Contributions are welcome! Please follow the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or feedback, feel free to contact the project maintainer: [Your Name](mailto:achrefjlidi8@gmail.com).

