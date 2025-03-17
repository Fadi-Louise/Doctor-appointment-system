const express = require("express");

const router = express.Router();

const {
    getAllAppointments,
    getAppointmentById,
    getAppointmentByDoctorId,
    getAppointmentByPatientId,
    getAppointmentByDate,
    getAppointmentByStatus,
    createAppointment,
    updateAppointment,
    deleteAppointment
} = require("../services/appointment.services");

const { AppointmentValidator } = require("../validators/AppointmentValidator");

// Getters for appointment
router.get("/", getAllAppointments);

router.get("/id/:id", getAppointmentById);

router.get("/doctor/:doctor_id", getAppointmentByDoctorId);

router.get("/patient/:patient_id", getAppointmentByPatientId);

router.get("/status/:status", getAppointmentByStatus);

router.get("/date/:appointment_datetime", getAppointmentByDate);

// Create, update and delete

// Create for doctor
router.post("/drCreate", AppointmentValidator, createAppointment);
router.get("/drCreate/:drID", (req, res) => {
    res.render("drCreateAppointment", { doctor_id: req.params.drID });
});

// Create for admin
router.post("/create", AppointmentValidator, createAppointment);
router.get("/create", (req, res) => {
    res.render("createAppointment");
});


// Update for patient
router.put("/updateForPatient", AppointmentValidator, updateAppointment);
router.get("/updateAppForPatient/:id", (req, res) => {
    res.render("updateAppointmentForPatient", { patient_id: req.params.id });
});

// Update for doctor
router.put("/updateForDoctor", AppointmentValidator, updateAppointment);
router.get("/updateAppForDoctor", (req, res) => {
    res.render("updateAppointmentForDoctor", { doctor_id: req.body.doctor_id});
});

// Update for admin
router.put("/update", AppointmentValidator, updateAppointment);

router.post("/update", AppointmentValidator, updateAppointment);
router.get("/update/:id", (req, res) => {
    res.render("updateAppointment", {id: req.params.id});
});

// Delete for admin
router.delete("/delete/:id", deleteAppointment);
router.get("/delete/:id", deleteAppointment);
module.exports = router;