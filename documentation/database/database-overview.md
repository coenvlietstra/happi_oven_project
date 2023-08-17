# Food Ordering Application - Database Schema

## Description 

The database schema outlines the structure for the Food Ordering Application's PostgreSQL database. It includes tables to store user data, menu information, orders, reviews, and contact requests.

## Tables

### Users Table

| Column | Data Type | Description |
| -------- | -------- | -------- |
| user_id | Serial (PK) | Unique identifier for users.
| username | Text | User's chosen username.
| email | Text | User's email address.
| password_hash	| Text | Hashed password for secure authentication.
| phone_number | Text | User's phone number.
| created_at | Timestamp | Timestamp of user registration.
| last_login | Timestamp | Timestamp of user's last login.

### Dishes Table

| Column | Data Type | Description |
| -------- | -------- | -------- |
| dish_id | Serial (PK) | Unique identifier for dishes.
| week_number | Integer | Week number of the menu offering.
| day_of_week | Text | Day of the week for the dish.
| dish_name | Text | Name of the dish.
| description | Text | Description of the dish.
| price | Numeric | Price of the dish.
| image_url | Text | URL to the dish image.

### UserFavorites Table
| Column | Data Type | Description |
| -------- | -------- | -------- |
| user_id | Integer (FK) | Foreign key referencing Users Table.
| dish_id | Integer (FK) | Foreign key referencing Dishes Table.

### Orders Table
| Column | Data Type | Description |
| -------- | -------- | -------- |
| order_id | Serial (PK) | Unique identifier for orders.
| user_id | Integer (FK) | Foreign key referencing Users Table.
| order_date | Timestamp | Timestamp of order placement.
| total_amount | Numeric | Total amount of the order.
| pickup_time | Timestamp | Pickup time for the order.
| status | Text | Order status (e.g., "Pending", "Ready").

### OrderItems Table
| Column | Data Type | Description |
| -------- | -------- | -------- |
| order_item_id | Serial (PK) | Unique identifier for order items.
| order_id | Integer (FK) | Foreign key referencing Orders Table.
| dish_id | Integer (FK) | Foreign key referencing Dishes Table.
| quantity | Integer | Quantity of the dish in the order.

### Reviews Table
| Column | Data Type | Description |
| -------- | -------- | -------- |
| review_id | Serial (PK) | Unique identifier for reviews.
| user_id | Integer (FK) | Foreign key referencing Users Table.
| rating | Integer | Rating given in the review.
| comment | Text | User's comment in the review.
| review_date | Timestamp | Timestamp of review submission.

### ContactRequests Table
| Column | Data Type | Description |
| -------- | -------- | -------- |
| request_id | Serial (PK) | Unique identifier for contact requests.
| user_id | Integer (FK) | Foreign key referencing Users Table.
| request_type | Text | Type of request (e.g., "Inquiry", "Issue").
| message | Text | User's message in the contact request.
| request_date | Timestamp | Timestamp of contact request submission.

### Notes
This schema outlines the structure of each table in the PostgreSQL database for the Food Ordering Application. Modify and expand the schema as needed to match your application's specific requirements and features.

## Conclusion

Designing a well-structured database schema is a foundational step in building the Food Ordering Application. By carefully defining tables, columns, and relationships, the database can efficiently store and manage user interactions, menu offerings, order details, reviews, and support requests.

This schema serves as the backbone for the application's data management, ensuring data integrity, security, and seamless retrieval. The tables and relationships provided in this schema will enable the application to deliver a seamless user experience and effective communication between users, the restaurant, and the system.

As you proceed with the development of the application, the database schema will play a crucial role in maintaining the consistency and organization of data. Adapting and expanding the schema based on real-world usage and evolving requirements will contribute to the long-term success and scalability of the Food Ordering Application.