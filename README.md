# React Product Management App

## Overview
This is a React-based web application that allows users to manage a list of products. The application provides the following features:

- View a list of all products (Homepage).
- View detailed information about a single product (Product Page).
- Create a new product (Create Product Page).
- Edit an existing product (Edit Product Page).
- Delete a product (Product Page).

The app interacts with the [Fake Store API](https://fakestoreapi.com/) for product data management.

---

## Features

1. **Homepage**:
   - Displays a list of all products.
   - Provides a link to the Create Product page.

2. **Product Page**:
   - Shows detailed information about a selected product.
   - Includes options to edit or delete the product.

3. **Create Product Page**:
   - Allows users to create a new product by providing details such as title, price, description, category, and image URL.

4. **Edit Product Page**:
   - Enables users to update an existing product's details.

5. **Delete Functionality**:
   - Users can delete a product from the Product Page, with a confirmation prompt.

---

## Libraries and Tools Used

1. **React**:
   - Core library for building the UI.
   - Utilized React Router for managing navigation.

2. **React Router DOM**:
   - Enables routing between different pages.

3. **CSS**:
   - Custom styles for the components.
   - Separate CSS files for modular styling.

4. **Fake Store API**:
   - Provides endpoints for managing product data.
   - API used for CRUD operations:
     - Fetching all products.
     - Fetching a single product by ID.
     - Creating a new product.
     - Editing an existing product.
     - Deleting a product.

---

## API Endpoints

- **GET** `/products`: Fetch all products.
- **GET** `/products/:id`: Fetch details of a single product by ID.
- **POST** `/products`: Create a new product.
- **PUT** `/products/:id`: Update an existing product.
- **DELETE** `/products/:id`: Delete a product by ID.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/edyshekeev/web-final-project.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000