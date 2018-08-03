# html-chatbox

How to build an HTML chatbox with Chatkit - [https://pusher.com/tutorials/html-chatbox-chatkit](https://pusher.com/tutorials/html-chatbox-chatkit)

### Getting Started

Clone the project repository by running the command below if you use SSH

```
$ git clone git@github.com:ammezie/html-chatbox.git
```

If you use https, use this instead

```
$ git clone https://github.com/ammezie/html-chatbox.git
```

After cloning,run:

```
$ npm install
```

### Prerequisites

#### Sign up for Chatkit

To get started, [sign up](https://pusher.com/chatkit#sign-up) for Chatkit. Then create a Chatkit instance.

Open `server.js` and replace `INSTANCE_LOCATOR` and `SECRET_KEY` with your instance keys. Also, `INSTANCE_LOCATOR` inside `index.html`.


Finally, start the server:

```
$ node server.js
```

Then the client:

```
$ http-sever
```

> **Note:** I'm using `http-sever` to start the client, you can use your preferred development server. 


and visit [http://localhost:8080/](http://localhost:8080/) to see the application in action.

## Built With

* [Chatkit](https://pusher.com/chatkit) - Developer-driven chat done simply.
* [Express](https://expressjs.com) - Fast, unopinionated, minimalist web framework for Node.js
