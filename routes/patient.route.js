const express = require('express');

// Getting patient validator
const { PatientValidator } = require('../validators/patientsValidators');

// Getting patient services
const { getAllPatients,
    getPatientById,
    getPatientByName,
    createPatient,
    getPatientByPhoneNumber,
    getPatientByEmail,
    updatePatient,
    deletePatient,
    signupPatient,
    loginPatient } = require('../services/patient.services');


const authMiddleware  = require('../utils/authMiddleware');

const router = express.Router();

// Getters for patients
router.get('/', getAllPatients);
router.get('/id/:id', getPatientById);
router.get('/name/:first_name/:last_name', getPatientByName);
router.get('/phone/:phone_number', getPatientByPhoneNumber);
router.get('/email/:email', getPatientByEmail);


// Create, update, delete patient
router.post('/create', PatientValidator, createPatient);
router.get('/create', (req, res) => {
    res.render('createPatient');
}); // for the view

router.post('/signup', PatientValidator, signupPatient);
router.get('/signup', (req, res) => {
    res.render('signupPatient');
}); // for the view

router.post('/login', loginPatient);
router.get('/login', (req, res) => {
    res.render('loginPatient');
}); // for the view

// router.put('/updateAccount', PatientValidator, updatePatient);
router.post('/updateAccount', PatientValidator, updatePatient); // for the view
router.get('/updatePatient/:id', (req, res) => {
    const id = req.params.id;
    res.render('updatePatient', {id: id});
}); // for the view

router.delete('/deleteAccount/:id', deletePatient);
router.get('/deletePatient/:id', deletePatient); // for the view

// Export router
module.exports = router;