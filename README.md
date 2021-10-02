# Queue-api
An Api developed to train queue skills.

## About
 In this project I used nodemailer to send email and simulate a long job process and mailtrap as a fake smtp.
 I used Bull to create a Queue and register and Redis as a DB to register those queues.
 
  In this project you going to see:
  - Send Email;
  - Queues;
  - Dashboard to check the queues logs;

## Dependencies
  Node v14.17.6;

  ```
    "dependencies": {
      "@bull-board/api": "^3.6.0",
      "@bull-board/express": "^3.6.0",
      "bull": "^3.29.2",
      "dotenv": "^10.0.0",
      "express": "^4.17.1",
      "nodemailer": "^6.6.5"
    },
    "devDependencies": {
      "nodemon": "^2.0.13",
      "npm-run-all": "^4.1.5"
    }
  ```

## How to run:
  1 - clone repo
  2 - yarn install
  3 - Create an account and a mailer in mailtrap.io
  4 - set this variables in .env:
    ```
    MAIL_HOST=
    MAIL_PORT=
    MAIL_USER=
    MAIL_PASS=
    ```
  5 - pull docker redis image and create an instance
    > docker run --name redis -p 6379:6379 -d -t redis:alpine
  6 - set this variables:
    ```
    REDIS_HOST=
    REDIS_PORT=
    ```
  7 - yarn dev
  
  
 
