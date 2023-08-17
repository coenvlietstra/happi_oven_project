# Food Ordering Application - API Endpoints
## Description

The API Endpoints document outlines the various routes and functionalities provided by the Food Ordering Application's Node.js server. These endpoints facilitate communication between the mobile app and the server, enabling users to register, browse menus, place orders, leave reviews, and interact with the restaurant's services.

## Endpoints

### User Authentication and Profiles

    Register User
        POST /api/register: Register a new user.

    Login User
        POST /api/login: Log in an existing user.

    Get User Profile
        GET /api/user/:userId: Get user profile information.

### Menu and Dishes

    Get Dishes by Week and Day
        GET /api/menu/:weekNumber/:dayOfWeek: Get dishes available for a specific week and day.

    Get All Dishes
        GET /api/dishes: Get a list of all dishes.

    Get Dish Details
        GET /api/dishes/:dishId: Get details of a specific dish.

### User Favorites

    Add Dish to Favorites
        POST /api/user/favorites: Add a dish to a user's favorites.

    Get User Favorites
        GET /api/user/favorites: Get a user's favorite dishes.

### Cart and Orders

    Add Dish to Cart
        POST /api/cart/add: Add a dish to the user's cart.

    Remove Dish from Cart
        POST /api/cart/remove: Remove a dish from the user's cart.

    Get Cart Contents
        GET /api/cart: Get the contents of the user's cart.

    Place Order
        POST /api/order/place: Place an order based on the contents of the cart.

    Get User Orders
        GET /api/orders: Get a list of a user's past orders.

    Get Order Details
        GET /api/orders/:orderId: Get details of a specific order.

### Reviews

    Post Review
        POST /api/reviews: Post a review and rating.

    Get Dish Reviews
        GET /api/reviews/:dishId: Get reviews and ratings for a specific dish.

### Contact and Support

    Submit Contact Request
        POST /api/contact: Submit a contact request or support inquiry.

    Get Contact Request Details
        GET /api/contact/:requestId: Get details of a specific contact request.

## Conclusion

The API Endpoints document provides a comprehensive overview of the routes and functionalities that make up the Food Ordering Application's backend. These endpoints play a vital role in enabling users to interact with the application, place orders, leave reviews, and engage with the restaurant. By leveraging these endpoints, the application delivers a seamless and user-friendly experience.