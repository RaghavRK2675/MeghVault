const express = require('express');
const userRouter = require('./routes/user.routes');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.set('view engine', 'ejs');

app.use('/user', userRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
