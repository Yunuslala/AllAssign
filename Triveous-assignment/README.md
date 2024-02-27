# Tooth Tracker API documentation
- This repository contains API documentation for Triveous E-commerce-backend 
- 

## 1. Overview

- Basic API endpoint = `https://cloudy-nightgown.cyclic.app/` `http://localhost:8080`.

- All requests must be secure, i.e. `https`, not `http`.

## 2. Authentication
- This API uses Role based authrization.
- In order to perform user vendor or admin operations, Token is required.
- Token can be obtained by creating account and logging in to the system.
- No saperate login routes for users vendors and admins.
- System Redirects users/admins to respective locations i'e users landing page or admin page according to user role in DB.

## 2. User
- Registration
    - URL: `https://cloudy-nightgown.cyclic.app/User/Signup`
    - Method: POST
    - Parameters:
    ```
    {
        name: string (required),
        phone: 0123456789 (10 characters) (required),
        email: demoo@gmail.com in email format (required),
        password: user_password (6 characters or more) (required),
        role: (admin Vendor or default user)
    }
    ```
    - Response
        - 200 (Ok): `{ msg: "user already exist" }`
        - 201 (ok): `{ msg: "signup has been done" ,postUser}`
        - 400 (missing or Invalid credentails): `{ errors: errors.array() }`
        - 409 (hashing password): `{ error: "Internal server error occurred during the hashing process.
        }`

- Login
    - URL: `https://cloudy-nightgown.cyclic.app/User/login`
    - Method: POST
    - Parameters:
    ```
    {
        email: in email format string (required),
        password: user_password (6 characters or more) (required)
    }
    ```
    - Response
        - 201 (Ok): `{ msg: "You logged in", token }`
        - 404 (account does not exists): `{ msg: "You have not exist go for signup first" }`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`
        - 422 (invalid password): `{ msg: "Invalid password" }`

# Product
 - Post A Product
    - URL: `https://cloudy-nightgown.cyclic.app/Product/post`
    - Method: Post
    - Parameters:
    ```
   {
     title:string (required)
     category:string (required)
     description:string (required)
     price:Number (required)
   }
   - login as Vendor
    ```
 - Response:
        - 201 (Ok): `{ msg: "Product has been added" }`
        - 404 (account does not login or Invalid Token): `{"msg":"You are not authorized"} or {{"msg":"You are not authorized as a vendor"}}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
        - 

- Get All products
    - URL: `https://cloudy-nightgown.cyclic.app/Product/get`
    - Method: GET
    - Parameters: none
    - Response: 
        - 200 (ok): {products}
        - 404 (account does not login or Invalid Token): `{"msg":"You are not authorized"}`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
        

- Get Products By ID
    - URL: `https://cloudy-nightgown.cyclic.app/Product/get/:ProductId`
    - Method: GET
    - Parameters: Product Id as params
    - Response:
        - 404 (Not Found): `{ msg: "product is not available" }`
        - 200 (Ok): `{GetByID}`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`

- Remove Product By Id
    - URL: `https://cloudy-nightgown.cyclic.app/Product/delete/:ProductId`
    - Method: POST
    - Parameters: Product Id as params
    - Response
        - 201 (Ok): `{ msg: "particular Product has been removed", GetByID }`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`


- update Product By ID
    - URL: `https://cloudy-nightgown.cyclic.app/pay`
    - Method: POST
    - Parameters:
    ```
    {
        productId: Id (required),
        updated data
    }
    ```
    - Response
        - 201 (Ok): `{ msg: "particular Product has been updated", GetByID }`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`
## 3. Order 

- Order Placed
  - URL: `https://cloudy-nightgown.cyclic.app/Order/place`
    - Method: POST
    - Parameters:
    ```
    {
        CartId: Id (required),
    }
    ```
    - Response
        - 201 (Ok): `{"msg":"order has been placed"}`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`

- All cartHistory

  - URL: `https://cloudy-nightgown.cyclic.app/Order/AllHistory`
    - Method: POST
    - Parameters:None
    - Response
        - 200 (Ok): `{ All Cart Data }`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`

- Particular User Cart History

  - URL: `https://cloudy-nightgown.cyclic.app/Order/user/history`
    - Method: Get
    - Parameters:None

    - Response
        - 201 (Ok): `{User Order history }`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`
         - 404 (Did not found): `{"msg":"Did not placed any order"}`


# 4Cart
- Add a product In a Cart

  - URL: `https://cloudy-nightgown.cyclic.app/Cart/Post`
    - Method: Post
    - Parameters:
    ```
    productid: Id (required)
    ```

    - Response
        - 201 (Ok): `{ msg: "product has been added in cart",CartProduct }`
        - 204 (Already exist): `{"msg":"product already exist in your cart"}`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`
         - 404 (Did not found): `{"msg":"Did not placed any order"}`


- Remove From Cart

  - URL: `https://cloudy-nightgown.cyclic.app/Cart/remove/:id`
    - Method: post
    - Parameters:
    ```
    cartID :id (required)
    ```

    - Response
        - 204 (Ok): `{ msg: "product has been removed from cart" }`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`


- Update Cart Product 

  - URL: `https://cloudy-nightgown.cyclic.app/Cart/update`
    - Method: patch
    - Parameters:
      ```
       cartID :id (required)
      ```

    - Response
        - 204 (Ok): `{ msg: "product has been updated in cart", UpdateCart }`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`
         - 404 (Did not found): `{"msg":"Did not placed any order"}`


- Get  Cart Product 

  - URL: `https://cloudy-nightgown.cyclic.app/Cart/get`
    - Method: Get
    - Parameters:
      ```
       cartID :id (required)
      ```

    - Response
        - 200 (Ok): `{Cart Products }`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`
         - 404 (Did not found): `{"msg":"Did not placed any order"}`


# 5 Category
 - Add Category Products 

  - URL: `https://cloudy-nightgown.cyclic.app/category/Add`
    - Method: post
    - Parameters:
      ```
       category :string (required)
      ```

    - Response
        - 200 (Ok): `{"msg":"category already exist"}`
        - 201(ok): `{"msg":"Category has been added"}`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`
    


- Get All Category of Products 

  - URL: `https://cloudy-nightgown.cyclic.app/category/get`
    - Method: Get
    - Parameters:None

    - Response
        - 200 (Ok): `{Available Categories}`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`
         - 404 (Did not found): `{"msg":"Did not placed any order"}`


**Note**- You need to login with admin account to perform below operations.
- for Admin gmail:admin@gmail.com
- role:admin

- Users
    - URL: `https://cloudy-nightgown.cyclic.app/admin/user/block`
    - Method: Patch
    - Parameters: {
        id:userid (required) as params
    }
       - Response
        - 200 (Ok): `{"msg":"user has been blocked",blockUSer}`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`
         - 404 (Did not found): `{"msg":"You are not authorized as a admin"}`

- Delete a User
    - URL: `https://cloudy-nightgown.cyclic.app/admin//user/delete/:userId`
    - Method: DELETE
    - Parameters: userId as params
    - Response
        - 204 (Ok): `{"msg":"user has been deleted"}`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`
         - 404 (Did not found): `{"msg":"You are not authorized as a admin"}`

- Delete A Product
    - URL: `https://cloudy-nightgown.cyclic.app/admin/product/delete/:productId`
    - Method: GET
    - Parameters: none
   - Response
        - 204 (Ok): `{"msg":"product has been deleted"}`
        - 401 (Token missing): `{"msg":"token must be needed for generating tickets... go for login or signup"}`
         - 400 (missing or Invalid credentails): `{ errors: errors.array() }`
         - 404 (Did not found): `{"msg":"You are not authorized as a admin"}`


# Demo

  (`https://drive.google.com/file/d/1RhrRwZeRSOjYoh9yFms4y6_AE234ZwNs/view?usp=sharing`)