# proximity-chat-backend

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This is the backend code to support a website where users can join chat rooms and only talk with people close to them. It was built to run along with this frontend code: https://github.com/andreszaccaro/proximity-chat-frontend.
	
## Technologies
Project is created with:
* NestJS 7
* Prisma 2
* Apollo Graphql
	
## Setup
To run this project in development, install it locally using npm:

```
$ cd ../proximity-chat-frontend
$ npm install
$ npm run start:dev
```

* Any time you make changes to the prisma schema make sure to run the "prisma generate" command to refresh the Prisma function library for this project.
* Make sure you run the src/generate-typings.ts file any time you make changes to .graphql files to refresh the app schema.
