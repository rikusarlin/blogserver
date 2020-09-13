# Fullstack open 2019 Bloglist application
This is the main exercise app in Helsinki University 2019 [Fullstack Open 2019](https://mluukkai.github.io) course.

The app features a frontend written in React, Redux and Boostrap, to name a few.

Backend is written also in Javascript, featuring mongoose, various middlewares and a MongoDB storage.

The following environment variables need to be set
* SECRET - the secret used to hash the passwords, a string
* MONGODB_URI - the URI of the MongoDB used for storing data

The following environment varaibles may be set in addition
* PORT - the port in which the backend runs (defaults to 8080)
* MONGODB_URI_DEV - the URI of the MongoDB used for storing data when NODE_ENV is "development"
* MONGODB_URI_TEST - the URI of the MongoDB used for storing data when NODE_ENV is "test"

Some unit and integration tests have been made to validate the backed.

This repo just contains just the production build of the frontend. The source is in a [separate repostitory](https://github.com/rikusarlin/fullstack/osa7/bloglist).