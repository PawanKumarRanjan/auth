const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/authRouter');
const DashboardRouter = require('./Routes/dashboardRouter')
require('dotenv').config()
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.use(cors({
  origin: 'https://deploy-auth-frontend.vercel.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));
app.use(bodyParser.json());
app.use('/auth', AuthRouter);
app.use('/dashboard', DashboardRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
