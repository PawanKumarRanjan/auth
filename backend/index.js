const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/authRouter');
const DashboardRouter = require('./Routes/dashboardRouter')
require('dotenv').config()
require('./Models/db');
const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin: 'https://deploy-auth-frontend.vercel.app',
    optionsSuccessStatus: 200,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/auth', AuthRouter);
app.use('/dashboard', DashboardRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
