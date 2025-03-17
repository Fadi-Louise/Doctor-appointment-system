const express = require('express');

// Specialty validator
const { SpecialtyValidator } = require('../validators/specialtyValidators');

// Specialty services
const { getAllSpecialties,
     getSpecialtyById,
     getSpecialtyByName,
     createSpecialty,
     updateSpecialty, 
     deleteSpecialty} = require('../services/specialty.services');

// Specialty router
const router = express.Router();

// Getters for specialties
router.get('/', getAllSpecialties);
router.get('/id/:id', getSpecialtyById);
router.get('/name/:name', getSpecialtyByName);

// Create , update, delete specialty
router.post('/create/', SpecialtyValidator ,createSpecialty);
router.get('/create/', (req, res) => {
    res.render('createSpecialty');
});

router.put('/update', SpecialtyValidator ,updateSpecialty);
router.post('/update', SpecialtyValidator ,updateSpecialty);
router.get('/update/:id', (req, res) => {
    res.render('updateSpecialty', {id: req.params.id});
});
router.delete('/id/:id', deleteSpecialty);
router.get('/deleteSpecialty/:id', deleteSpecialty);
// Create, update, delete specialty
module.exports = router;