const express = require("express");
require("dotenv").config();

// Setting up my port
const port = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Setting view engine
app.set('view engine', 'ejs');

// Getting routes
const patients = require('./routes/patient.route');
const specialties = require('./routes/specialty.route');
const doctors = require("./routes/doctor.route");
const addresses = require("./routes/address.route");
const doctor_specialties = require("./routes/doctor_specialties.route");
const appointments = require("./routes/appointment.route");
const reviews = require("./routes/review.route");

// API routes
app.use('/api/patients', patients);
app.use('/api/specialties', specialties);
app.use("/api/doctors", doctors);
app.use("/api/addresses", addresses);
app.use("/api/doctorSpecialties", doctor_specialties);
app.use("/api/appointments", appointments);
app.use("/api/reviews", reviews);

// Rendered views routes
app.get('/home', (req, res) => {
    res.render('homePage');
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/doctor-or-patient', (req, res) => {
    res.render('doctor-or-patient');
});

// Start server
app.listen(port, () => {
    console.log(`My app is listening on port ${port}`);
});