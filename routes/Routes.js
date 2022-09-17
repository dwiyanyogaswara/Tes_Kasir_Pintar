const express = require("express")
const path = require('path');

const {getAllAddress, getKecamatanByKotaId, getDataById} = require("../controllers/AddressController")
const authController = require("../controllers/AuthController")
const router = express.Router()
const veriftoken = require('../middlewares/veriftoken')

router.get('/', (req, res)=>{
    res.status(200);
    res.send("Welcome to root URL of Server");
});


router.post('/auth/login', authController.login)

router.get('/get-all-address',veriftoken , getAllAddress)
router.post('/get-kecamatan-by-kota-id',veriftoken , getKecamatanByKotaId)
router.post('/get-data-by-id',veriftoken , getDataById)

module.exports = router