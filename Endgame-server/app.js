const express = require('express');
const cors = require('cors');
const http = require('http');

const userRoutes = require('./routes/userRoutes');
const carRoute = require('./routes/carRoutes');
const reviewsAndRatingsRoute = require('./routes/reviewAndRatingRoutes');
const bookingRoute = require('./routes/userBookingRoutes');
const payment = require('./routes/payment');
const feedbacksRoute = require('./routes/feedbackRoute');
const driverRoute = require('./routes/driverRoute');
const otp = require('./routes/otpRoutes');
const totalInfo = require('./routes/totalRoutes');
const agency = require('./routes/agencyRoutes')
const { setupTTLIndex } = require('./controllers/otpControllers');

const app = express();
const server = http.createServer(app);

app.use(cors({
    origin: [
        'http://localhost:5173',
    ],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
setupTTLIndex();

app.use('/usersRoute', userRoutes);
app.use('/carsRoute', carRoute);
app.use('/reviewsRoute', reviewsAndRatingsRoute);
app.use('/agencyRoute', agency); 
app.use('/bookings', bookingRoute);
app.use('/payment', payment);
app.use('/feedbackRoute', feedbacksRoute);
app.use('/driverRoute', driverRoute);
app.use('/otpRoutes', otp);
app.use('/totalInfo', totalInfo);

module.exports = { app, server };