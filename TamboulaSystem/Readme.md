# Tamboula Ticket API documentation
- This repository contains API documentation for Tamboula Ticket

## 1. Overview

- Basic API endpoint = `http://localhost:8000`.
- This is a system where one can generate tickets any size each set of 6 tickets are uniques in itself:

# Ticket Rules
```
● The numbers 1 to 90 are used once only.
● In the first column are the numbers 1 to 9, the second column has numbers
10 to 19, etc, all the way to the 9th column which has numbers 80 to 90 in it.
● Every row must have exactly 5 numbers in it.
● In a specific column, numbers must be arranged in ascending order from top
to bottom.
● All the numbers 1 to 90 are used only once in each set of 6 tickets.
● Each column must have at least 1 number
● Blank Cell fill by zero or “x”
● Each ticket must be unique from another ticket

```



# Packages

```
 "bcrypt": "^5.1.0",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "express-validator": "^7.0.1",
    "jsonwebtoken": "^9.0.0",
    "mongoose": "^7.2.3",
    "nodemon": "^2.0.22"
```

## 2. authorization

- This API uses user login based authrization.
- In order to perform Ticket Routes operations, Token is required.
- Token can be obtained by creating account and logging in to the system.


## 2. User
- Registration
    - URL: `http://localhost:8000/signup`
    - Method: POST
    - Parameters:
    ```
    {
        name: string (required),
        email: string (required),
        password: user_password (6 characters or more) (required),
    }
    ```
    - Responses
        - 201 (Ok): `{ msg: "you have been signup" }`
        - 409 (account already exists): `{"msg": "Email is already registered"}`
        - 400 (missing credentails): `{a array of errors which is missing }`
        - 401 (error in hashing): `{ msg: "error in hashing the password ",err }`
        - 500 (Error): `{ msg: "something went wrong",error}`

- Login
    - URL: `http://localhost:8000/login`
    - Method: POST
    - Parameters:
    ```
    {
        email: string (required),
        password: user_password (6 characters or more) (required)
    }
    ```
    - Responses
        - 201 (Ok): `{ msg: "You have been logged in", token }`
        - 401 (account does not exists): `{"msg":"You have not signup"}`
        - 400 (missing credentails): { errors: errors.array() }`
        - 402 (wrong password): `{ msg: "wrong password" }`
        - 500 (Error): `{ msg: "something went wrong",error}`


- Ticket Generators

    - URL: `http://localhost:8000/Tickets/:size?`
    - Method: GET
    - Parameters: optional size of tickets
    - Response
          - 200 (ok): `{tickets}`
          - 500 (Error): `{ msg: "something went wrong",error}`


- Get All Generated Tickets


    - URL: `http://localhost:8000/AllTIcket?page=_&limit=_`
    - Method: GET
    - Parameters: page,limit(optional)
    - Response
          - 200 (ok): `{Alltickets}`
          - 500 (Error): `{ msg: "something went wrong",error}`

- Get Particluar Tickets



    - URL: `http://localhost:8000/Tickets/:id`
    - Method: GET
    - Parameters: Ticket Id as params(required)
    - Responses:
        - 404 (Not Found): `{ msg: "id is Invalid" }`
        - 200 (Ok): `{tickets}`
        - 500 (Error): `{ msg: "something went wrong",error}`
        - 400 (id validation): { errors: errors.array() }`

- Get All Ticket By A User


    - URL: `http://localhost:8000/user/ticket/:id`
    - Method: GET
    - Parameters:user Id as params(required)
    - Responses
         - 404 (Not Found): `{ msg: "id is Invalid" }`
        - 200 (Ok): `{tickets}`
        - 500 (Error): `{ msg: "something went wrong",error}`
        - 400 (id validation): { errors: errors.array() }`
