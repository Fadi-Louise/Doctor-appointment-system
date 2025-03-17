const express = require("express");

// Getting patient services
const { getAllAddresses,
    getAddressById,
    getAddressByStreet,
    getAddressByCity,
    getAddressByCountry,
    createAddress,
    updateAddress,
    deleteAddress } = require("../services/address.services");

// Getting patient validator
const { AddressValidator } = require("../validators/addressValidator");

const router = express.Router();


// Getters for address
router.get("/", getAllAddresses);

router.get("/id/:id", getAddressById);

router.get("/street/:street_address", getAddressByStreet);

router.get("/city/:city", getAddressByCity);

router.get("/country/:country", getAddressByCountry);


// Create, update and delete
router.post("/", AddressValidator ,createAddress);

router.put("/id/:id", AddressValidator, updateAddress);

router.delete("/id/:id", deleteAddress);

module.exports = router;