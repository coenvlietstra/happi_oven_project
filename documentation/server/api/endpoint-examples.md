# API Endpoints Examples


## Get User Profile

### Endpoint: GET /api/user/:userId

Description: Get user profile information.

#### Request:

`````` http
GET /api/user/123 HTTP/1.1
Host: yourdomain.com
Authorization: Bearer your_access_token
``````

#### Response:

`````` http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "user_id": 123,
  "username": "john_doe",
  "email": "john@example.com",
  "phone_number": "123-456-7890",
  "created_at": "2023-08-01T12:00:00Z",
  "last_login": "2023-08-16T15:30:00Z"
}
``````

#### Error Response (User Not Found):

`````` http
HTTP/1.1 404 Not Found
Content-Type: application/json

{
  "error": "User not found",
  "message": "The requested user profile could not be found."
}
``````

#### Error Response (Unauthorized):

`````` http
HTTP/1.1 401 Unauthorized
Content-Type: application/json

{
  "error": "Unauthorized",
  "message": "You must be logged in to access this resource."
}
``````