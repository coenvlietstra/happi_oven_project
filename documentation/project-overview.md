# Food Ordering Application - Project Overview
## Description

The Food Ordering Application is a single-restaurant platform designed to allow users to conveniently order dinners for pickup from "The Happi Oven." Customers can browse the weekly menu offerings, select dishes, place orders, and provide feedback through reviews. The application aims to provide a seamless user experience for browsing, ordering, and interacting with the restaurant.

## Features
### User Authentication and Profiles

- Register and log in users.
- Users can update their profiles and manage preferences.
- Password hashing for secure storage.

### Menu and Dishes

- Display weekly menu offerings based on the week number and day of the week.
- Users can view dish details, including name, description, price, and image.

### User Favorites

- Users can mark dishes as favorites for quick access.
- Retrieve a list of a user's favorite dishes.

### Cart and Orders

- Users can add and remove dishes to/from their cart.
- Placing orders based on cart contents.
- Users receive notifications about order status.
- View past order history and order details.

### Reviews and Ratings

- Users can leave general reviews and ratings.
- Reviews are associated with users, not specific dishes.
- Display average ratings for the restaurant's overall experience.

### Contact and Support

- Users can submit contact requests or support inquiries.
- Retrieve details of specific contact requests.

## API Endpoints (Node.js Server)

For the complete list of API endpoints, refer to the [API Endpoints Markdown document](./server/api/endpoints.md).

## Database

The database design includes tables for users, dishes, user favorites, orders, order items, reviews, and contact requests. Refer to the [Database Schema Markdown document](./database/database%20-%20overview.md) for detailed schema information.

## Node.js Server

The Node.js server serves as the backend infrastructure for the Food Ordering Application. It handles API requests, authentication, and database interactions. For a detailed overview of the server setup, API endpoints, and development process, refer to the [Server Markdown document](./server/server%20-%20overview.md).

## Technologies Used

- Flutter for the mobile application.
- Node.js for the server-side application.
- PostgreSQL for the relational database.
- API endpoints to facilitate communication between the app and the server.

## Development Steps

1. Design and implement the PostgreSQL database schema to store user data, menu information, orders, and reviews.
2. Create a Node.js server to handle API requests, implement business logic, and communicate with the database.
3. Design and develop the Flutter mobile application for users to browse and order dishes.
4. Develop API endpoints to handle user authentication, menu retrieval, order placement, and more.
5. Test the application thoroughly to ensure functionality, usability, and security.
6. Deploy the server and database to a hosting environment.
7. Deploy the mobile app to app stores (Google Play Store, Apple App Store).

## Conclusion

The Food Ordering Application aims to provide an efficient and user-friendly platform for customers to order dinner pickups from "The Happi Oven." By leveraging Flutter, Node.js, and PostgreSQL, the application offers a seamless experience for browsing menus, placing orders, and interacting with the restaurant.