/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Endpoints for user authentication
 *
 * /User/Register:
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
 *                 type: string
 *                 description: Email should be in email format and unique.
 *               password:
 *                 type: string
 *                 description: Password should be equal to or greater than 6 characters.
 *               name:
 *                 type: string
 *               mobileNumber:
 *                 type: string
 *                 description: Mobile Number should be 10 digits.
 *     responses:
 *       200:
 *         description: User already exists.
 *       201:
 *         description: User has been registered successfully.
 *       402:
 *         description: Error occurred while hashing the password.
 *       400:
 *         description: Validation error for required fields.
 *       409:
 *         description: Internal server error occurred during the hashing process.
 *       500:
 *         description: Something went wrong, error details in the response.
 *
 * /User/Login:
 *   post:
 *     summary: User login
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *                 description: Password should be equal to or greater than 6 characters.
 *     responses:
 *       201:
 *         description: Login successful with JWT token.
 *       422:
 *         description: Incorrect password.
 *       400:
 *         description: Validation error for required fields.
 *       402:
 *         description: User is not registered, please sign up first.
 *       500:
 *         description: Something went wrong, error details in the response.
 */

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Endpoints for managing tasks. Protected routes that can be accessed after authorizing by using the authorize button or by sending an authorization header with the value `Bearer <enter token, you can create a token by logging in>`.
 *
 * /Task/add:
 *   post:
 *     summary: Post a task by sending data from the frontend.
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task has been created successfully.
 *       400:
 *         description: Validation error for required fields or invalid input.
 *       500:
 *         description: Internal Server Error.
 *
 * /Task/get:
 *   get:
 *     summary: Get a list of all tasks.
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of task items.
 *       500:
 *         description: Internal Server Error.
 * 
 * /Task/deleteTask/{taskId}:
 *   delete:
 *     summary: Delete a task by the given taskId. Only the user who created the task can delete it.
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Task has been deleted successfully.
 *       400:
 *         description: Validation error for required fields or invalid input.
 *       401:
 *         description: You are not authorized to delete this task (Only the task creator can delete).
 *       404:
 *         description: Task with the provided taskId does not exist.
 *       500:
 *         description: Internal Server Error.
 * 
 * /Task/update/{taskId}:
 *   patch:
 *     summary: Update an existing task by its taskId. Only the user who created the task can update it.
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The new name of the task (if changed).
 *               content:
 *                 type: string
 *                 description: The new content of the task (if changed).
 *     responses:
 *       200:
 *         description: Task updated successfully.
 *       400:
 *         description: Validation error for required fields or invalid input.
 *       401:
 *         description: You are not authorized to update this task (Only the task creator can update).
 *       404:
 *         description: Task with the provided taskId does not exist.
 *       500:
 *         description: Internal Server Error.
 */
