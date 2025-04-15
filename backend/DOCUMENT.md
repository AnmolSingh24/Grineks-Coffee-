# Cafe Backend API Documentation

Base URL: `http://localhost:3000/api`

## Authentication

### Register User
```http
POST /auth/register
Content-Type: application/json

{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123"
}
```

**Response (201 Created)**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
        "id": "507f1f77bcf86cd799439011",
        "username": "john_doe",
        "email": "john@example.com",
        "role": "user"
    }
}
```

### Login
```http
POST /auth/login
Content-Type: application/json

{
    "email": "john@example.com",
    "password": "password123"
}
```

**Response (200 OK)**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
        "id": "507f1f77bcf86cd799439011",
        "username": "john_doe",
        "email": "john@example.com",
        "role": "user"
    }
}
```

### Get Current User Profile
```http
GET /auth/me
Authorization: Bearer <token>
```

**Response (200 OK)**
```json
{
    "id": "507f1f77bcf86cd799439011",
    "username": "john_doe",
    "email": "john@example.com",
    "role": "user"
}
```

### Check Admin Status
```http
GET /auth/check-admin
Authorization: Bearer <token>
```

**Response (200 OK)**
```json
{
    "isAdmin": false,
    "role": "user"
}
```

## Menu Management

### Get All Menu Items
```http
GET /menu
```

**Response (200 OK)**
```json
[
    {
        "id": "507f1f77bcf86cd799439011",
        "name": "Cappuccino",
        "description": "Italian coffee drink",
        "price": 4.99,
        "category": "beverages",
        "imageUrl": "https://example.com/cappuccino.jpg",
        "available": true
    }
]
```

### Add Menu Item (Admin Only)
```http
POST /menu
Authorization: Bearer <token>
Content-Type: application/json

{
    "name": "Cappuccino",
    "description": "Italian coffee drink",
    "price": 4.99,
    "category": "beverages",
    "imageUrl": "https://example.com/cappuccino.jpg",
    "available": true
}
```

**Response (201 Created)**
```json
{
    "id": "507f1f77bcf86cd799439011",
    "name": "Cappuccino",
    "description": "Italian coffee drink",
    "price": 4.99,
    "category": "beverages",
    "imageUrl": "https://example.com/cappuccino.jpg",
    "available": true
}
```

### Update Menu Item (Admin Only)
```http
PUT /menu/:id
Authorization: Bearer <token>
Content-Type: application/json

{
    "price": 5.99,
    "available": false
}
```

**Response (200 OK)**
```json
{
    "id": "507f1f77bcf86cd799439011",
    "name": "Cappuccino",
    "description": "Italian coffee drink",
    "price": 5.99,
    "category": "beverages",
    "imageUrl": "https://example.com/cappuccino.jpg",
    "available": false
}
```

### Delete Menu Item (Admin Only)
```http
DELETE /menu/:admin-id
Authorization: Bearer <token>
```

**Response (200 OK)**
```json
{
    "message": "Menu item removed"
}
```

## Orders

### Get User Orders
```http
GET /orders/my-orders
Authorization: Bearer <token>
```

**Response (200 OK)**
```json
[
    {
        "id": "507f1f77bcf86cd799439011",
        "items": [
            {
                "menuItem": {
                    "id": "507f1f77bcf86cd799439012",
                    "name": "Cappuccino",
                    "price": 4.99
                },
                "quantity": 2
            }
        ],
        "status": "pending",
        "totalAmount": 9.98,
        "createdAt": "2024-01-20T12:00:00Z"
    }
]
```

### Create Order
```http
POST /orders
Authorization: Bearer <token>
Content-Type: application/json

{
    "items": [
        {
            "menuItem": "507f1f77bcf86cd799439012",
            "quantity": 2
        }
    ],
    "totalAmount": 9.98
}
```

**Response (201 Created)**
```json
{
    "id": "507f1f77bcf86cd799439011",
    "items": [
        {
            "menuItem": "507f1f77bcf86cd799439012",
            "quantity": 2
        }
    ],
    "status": "pending",
    "totalAmount": 9.98,
    "createdAt": "2024-01-20T12:00:00Z"
}
```

### Update Order Status (Staff/Admin Only)
```http
PATCH /orders/:id/status
Authorization: Bearer <token>
Content-Type: application/json

{
    "status": "completed"
}
```

**Response (200 OK)**
```json
{
    "id": "507f1f77bcf86cd799439011",
    "status": "completed"
}
```

### Get All Orders (Staff/Admin Only)
```http
GET /orders
Authorization: Bearer <token>
```

**Response (200 OK)**
```json
[
    {
        "id": "507f1f77bcf86cd799439011",
        "user": {
            "id": "507f1f77bcf86cd799439013",
            "username": "john_doe",
            "email": "john@example.com"
        },
        "items": [...],
        "status": "pending",
        "totalAmount": 9.98,
        "createdAt": "2024-01-20T12:00:00Z"
    }
]
```

## Reservations

### Get User Reservations
```http
GET /reservations/my-reservations
Authorization: Bearer <token>
```

**Response (200 OK)**
```json
[
    {
        "id": "507f1f77bcf86cd799439011",
        "date": "2024-02-01",
        "time": "19:00",
        "guests": 2,
        "status": "confirmed"
    }
]
```

### Create Reservation
```http
POST /reservations
Authorization: Bearer <token>
Content-Type: application/json

{
    "date": "2024-02-01",
    "time": "19:00",
    "guests": 2
}
```

**Response (201 Created)**
```json
{
    "id": "507f1f77bcf86cd799439011",
    "date": "2024-02-01",
    "time": "19:00",
    "guests": 2,
    "status": "pending"
}
```

### Update Reservation
```http
PUT /reservations/:id
Authorization: Bearer <token>
Content-Type: application/json

{
    "time": "20:00",
    "guests": 3
}
```

**Response (200 OK)**
```json
{
    "id": "507f1f77bcf86cd799439011",
    "date": "2024-02-01",
    "time": "20:00",
    "guests": 3,
    "status": "pending"
}
```

### Cancel Reservation
```http
DELETE /reservations/:id
Authorization: Bearer <token>
```

**Response (200 OK)**
```json
{
    "message": "Reservation cancelled"
}
```

### Get All Reservations (Staff/Admin Only)
```http
GET /reservations
Authorization: Bearer <token>
```

**Response (200 OK)**
```json
[
    {
        "id": "507f1f77bcf86cd799439011",
        "user": {
            "id": "507f1f77bcf86cd799439013",
            "username": "john_doe",
            "email": "john@example.com"
        },
        "date": "2024-02-01",
        "time": "19:00",
        "guests": 2,
        "status": "pending"
    }
]
```

## Error Responses

### Unauthorized (401)
```json
{
    "message": "No token, authorization denied"
}
```

### Forbidden (403)
```json
{
    "message": "User role not authorized to access this route"
}
```

### Not Found (404)
```json
{
    "message": "Resource not found"
}
```

### Validation Error (400)
```json
{
    "errors": [
        {
            "msg": "Email is required",
            "param": "email",
            "location": "body"
        }
    ]
}
```

### Server Error (500)
```json
{
    "message": "Server error"
}
```