# ProMage Backend API

This is the backend API for ProMage, a project management system. It allows users to manage projects, tasks, and project managers. Below are the steps to run the project and an overview of its architecture and design.

## Getting Started

To start the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/promage-backend.git
   cd promage-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DB=mongodb://127.0.0.1:27017/promage
   PORT=8080
   JWT_SECRET_KEY=uy3b8343f4g9guiv24b28iub568
   HOST=0.0.0.0
   ```

4. Start the server:
   ```bash
   npm start
   ```

## Architecture and Design

### Database

The application uses MongoDB as its database. MongoDB was chosen for its flexibility and scalability, allowing easy storage and retrieval of project, task, and manager data.

### API

The API is built using Express.js, a popular web framework for Node.js. It provides endpoints for CRUD operations on projects, tasks, and managers. The API follows RESTful design principles, providing a clean and predictable interface for client applications.

### Authentication

Authentication is not implemented in this project, as it is assumed to be used in a local intranet environment where security is handled by other means. However, JWT (JSON Web Tokens) could be used for authentication if needed in a real-world scenario.

## Running Tests

To run the tests, use the following command:
```bash
npm test
```

## Additional Features

While not required for the coding challenge, additional features could be added to enhance the project, such as:
- Dockerizing the application for easy deployment
- Adding CI/CD pipelines to automate testing and deployment processes
- Writing more comprehensive tests to ensure code quality
- Implementing database migrations for easier database schema changes

## Conclusion

This README provides a basic overview of the ProMage backend API. For more information and detailed instructions, refer to the documentation and codebase in the repository.