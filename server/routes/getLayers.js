const axios = require('axios')
const express = require('express');
const mongodb = require('mongodb');

require('dotenv').config()

const router = express.Router();
const API_BASE_URL = process.env.SITE_URL+ "/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities"
//Get Layers
router.get('/', (req, res) => {
    // let endpoint = `${process.env.SITE_URL}/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities`
    axios.get(API_BASE_URL).then(response => {
        console.log(axios);
        res.json(response.data)
    }).catch(error => {
        res.json(error)
    })
})

module.exports = router;