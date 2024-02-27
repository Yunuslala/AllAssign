# Home Drop Backend Assignment

 - This is a backend application built using AWS Lambda, API Gateway, SendGrid, and the pdfkit library. The application provides APIs for user authentication, sending dynamic PDF files, and retrieving the sending history.

## Features
# 1. User Authentication (/auth):

- Users will authenticate using their email.
A JWT token is generated upon successful authentication.

# 2. Send-Report(/send-report):

- Requires a valid JWT token in the request header.
The PDF content includes the current date, time, and user's email address.


# 3. Retrieve Sending History (/get-history):

- Users can retrieve the history of sent PDF files.
Requires a valid JWT token in the request header.
The response contains the userId and the recipient's email


# Deployment
- Deploy the application using AWS Lambda and API   Gateway using the Serverless Framework.
Configure the gamil secret key in the environment variables for sending emails.

- Ensure that the necessary npm packages (pdfkit, jsonwebtoken, nodemailer,serverless,serverless-http etc.) are installed.


# Technology Stack

- AWS Lambda for serverless computing
- AWS API Gateway for API management
- Nodemailer for sending emails
- pdfkit library for generating PDF files

For any further details or assistance, please refer to the provided code and documentation.