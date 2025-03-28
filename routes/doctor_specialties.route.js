const express = require("express");

const router = express.Router();

// Getting patient services
const {getAllDoctor_Specialties,
    getDoctor_SpecialtyById,
    getDoctor_SpecialtyBySpecialtyId,
    getDoctor_SpecialtyByDoctorId,
    createDoctor_Specialty,
    updateDoctor_Specialty,
    deleteDoctor_Specialty} = require("../services/doctor_specialties.services");


const {doctor_specialtyValidator} = require("../validators/doctor_specialtyValidator");

// Getters routers
router.get("/", getAllDoctor_Specialties);

router.get("/id/:id", getDoctor_SpecialtyById);

router.get("/doctor/:doctor_id", getDoctor_SpecialtyByDoctorId);

router.get("/specialty/:specialty_id", getDoctor_SpecialtyBySpecialtyId);

// Create, update and delete 
router.post("/", doctor_specialtyValidator ,createDoctor_Specialty);

router.put("/id/:id", doctor_specialtyValidator, updateDoctor_Specialty);

router.delete("/id/:id", deleteDoctor_Specialty);

module.exports = router;