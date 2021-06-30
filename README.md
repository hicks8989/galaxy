# galaxy

## Overview
Enables universal law enforcement to document and catch suspicious beings across the galaxy. Unlike ordinary paper and pencil, the process of documenting potential criminals is streamlined by an intuitive design, and an automated database system. To add to that, all entries are automatically run through an algorithm that puts suspicious beings at the top of the list.

## Getting Started
Insructions on how to get the Galaxy application setup on your local machine.

### Prerequisites
Galaxy makes use of the MERN JavaScript stack. In order to get this applicatio running on your machine, you will need:

* [NodeJS](https://nodejs.org/en/download/) installed on your local machine.
* [MongoDB](https://docs.mongodb.com/manual/tutorial) installed on your local machine.

### Installing
To run a local instance of the project, you must first install project files and dependencies. To get started doing this, use the `git clone` command to clone the repository to your local machine:

```
> git clone https://github.com/hicks8989/galaxy
```

Next, change to the project root directory:

```
> cd galaxy
```

## Running
To run the app, you will want to run the client and server in parallel (functionality is being added to have the server host the client build scripts)

### Client
The client uses React to compile files on the client side. To run, follow the steps below:

1. From the root directory, change to the client.

```
> cd client
```

2. Run the `npm install` command to install all neccessary packages.

```
npm install
```

3. Run the `npm start` command to run the React scripts.

```
npm start
```

### Server
The server uses Express.JS to create an http server. To run, follow the steps below:

1. From the root directory, change to the server.

```
> cd server
```

2. Run the `npm install` command to install all neccessary packages.

```
> npm install
```

3. Run the `node app.js` command to run the server.

```
> node app.js
```

### Built With
* [React](https://reactjs.org/) - React is a free and open-source front-end JavaScript library for building user interfaces or UI components.
* [Express](https://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Mongoose](https://mongoosejs.com/) - MongoDB is a source-available cross-platform document-oriented database program.
