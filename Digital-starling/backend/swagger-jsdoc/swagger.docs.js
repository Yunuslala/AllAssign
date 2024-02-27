/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints for user authentication
 *
 * /User/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: String
 *               password:
 *                 type: String
 *               fullname:
 *                 type: String
 *               contact:
 *                 type: String
 *     responses:
 *       200:
 *         description: user already exist
 *       201:
 *         description: User has been signUp,Register-user
 *       402:
 *         description: error in hashing the password
 *       500:
 *         description: something went wrong,error array
 *
 * /User/login:
 *   post:
 *     summary: User login
 *     tags: [Validation]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: String
 *               password:
 *                 type: String
 *     responses:
 *       201:
 *         description: Login successful with JWT token
 *       401:
 *         description: wrong password
 *       402:
 *         description: Go for Signup You are not registered
 *       500:
 *         description: something went wrong,error array
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Endpoints for managing the Products. Protected Routes that can be accessed After authorizing by using the authorize button or by sending a authorization header with value `Bearer <enter token, you can create token by logging in>`.
 *
 * /product/Add:
 *   post:
 *     summary: post a list of products by fetching mock api data
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *         schema:
 *           type: String
 *           properties: 
 *             id:
 *              type: Number
 *             title:
 *               type: String
 *             price:
 *               type: Number
 *             description: 
 *                type: String
 *             category: 
 *                 type: String
 *             image: 
 *                 type: String
 *             rating:
 *                 type: object
 *                 properties:
 *                    rate:
 *                     type: number
 *                     description: The rating of the product.
 *                    count:
 *                     type: number
 *                     description: The count of ratings for the product.
 *     responses:
 *       200:
 *         description: List of products
 *       500:
 *         description: Internal Server Error
 *
 * /product/get:
*   get:
 *     summary: Get the List of products
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of Product items
 *       500:
 *         description: Internal Server Error
 * 
 * /product/get/{id}:
 *   get:
 *     summary: Get details of a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: params
 *         name: productId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to retrieve
 *     responses:
 *       200:
 *         description: Product details
 *       500:
 *         description: Internal Server Error
 * /product/search:
 *   get:
 *     summary: Get details of a list of product by searching query
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: search
 *     responses:
 *       200:
 *         description: Product details filterated by search data
 *       500:
 *         description: Internal Server Error
 * 
 */
/**
 * @swagger
 * tags:
 *   name: Order
 *   description: Endpoints for managing the user's Orders. Protected Routes that can be accessed After authorizing by using the authorize button or by sending a authorization header with value `Bearer <enter token, you can create token by logging in>`.
 * 
 *
 * /Order/Add:
 *   post:
 *     summary: Create an order for shipping
 *     tags: [Order]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ProductDetails: 
 *                  type: Object
 *                  properties:
 *                    productId: 
 *                      type: String
 *                    quantity:
 *                      type: Number
 *               address1:
 *                 type: string
 *                 description: The first line of the address.
 *               address2:
 *                 type: string
 *                 description: The second line of the address (optional).
 *               city:
 *                 type: string
 *                 description: The city.
 *               country:
 *                 type: string
 *                 description: The country.
 *               firstName:
 *                 type: string
 *                 description: The first name of the recipient.
 *               lastName:
 *                 type: string
 *                 description: The last name of the recipient.
 *               state1:
 *                 type: string
 *                 description: The state or province (optional).
 *               zip:
 *                 type: string
 *                 description: The ZIP or postal code.
 *               cardName:
 *                 type: string
 *                 description: The name on the credit card.
 *               cardNumber:
 *                 type: string
 *                 description: The credit card number.
 *               cvv:
 *                 type: string
 *                 description: The CVV (Card Verification Value) code.
 *               expDate:
 *                 type: string
 *                 description: The expiration date of the credit card (e.g., "MM/YY").
 *     responses:
 *       200:
 *         description: Successfully created the order.
 *       400:
 *         description: Bad request, invalid input data.
 *       500:
 *         description: Internal server error.
 */

