// const Address = require("../models/AddressModel")
const axios = require('axios')
const addressController = {}

addressController.getAllAddress = async (req, res) => {
    try {
        const response = await axios.get('https://kasirpintar.co.id/allAddress.txt')

        if(response.data.address_kecamatan.length > 0){
            res.status(200).json({
                message: "Fetch success",
                data: response.data.address_kecamatan
            })
        } else {
            res.status(200).json({
                message: "No data",
                data: response.data
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }

}

addressController.getKecamatanByKotaId = async (req, res) => {
    try {
        const response = await axios.get('https://kasirpintar.co.id/allAddress.txt')
        
        if(response.data.address_kecamatan.length > 0){

            const result = response.data.address_kecamatan.filter( item => item.kota_id == req.body.kota_id)
            res.status(200).json({
                message: "Fetch success",
                data: result
            })
        } else {
            res.status(200).json({
                message: "No data",
                data: response.data
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
    
}

addressController.getDataById = async (req, res) => {
    try {
        const response = await axios.get('https://kasirpintar.co.id/allAddress.txt')

        if(req.body.search_in == 'kecamatan'){
            data = response.data.address_kecamatan
        } else if(req.body.search_in == 'provinsi'){
            data = response.data.address_provinsi
        } else if(req.body.search_in == 'kelurahan'){
            data = response.data.address_kelurahan
        } else if(req.body.search_in == 'kota'){
            data = response.data.address_kota
        } else if(req.body.search_in == 'all'){
            data = [...response.data.address_kecamatan,...response.data.address_provinsi,...response.data.address_kelurahan,...response.data.address_kota]
        }
        if(data.length > 0){

            const result = data.filter( item => item.id == req.body.id)
            res.status(200).json({
                message: "Fetch success",
                data: result
            })
        } else {
            res.status(200).json({
                message: "No data",
                data: response.data
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
    
}
module.exports = addressController
