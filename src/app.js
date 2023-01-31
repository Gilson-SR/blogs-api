const express = require('express');

// ...
const loginRouter = require('./router/login.router');
const userRouter = require('./router/user.router');
const categoryRouter = require('./router/category.router');
const postRouter = require('./router/post.router');

const app = express();

app.use(express.json());

// ...
app.use('/', loginRouter);
app.use('/', userRouter);
app.use('/', categoryRouter);
app.use('/', postRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
