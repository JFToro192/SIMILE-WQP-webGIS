const axios = require('axios')
const express = require('express');
const mongodb = require('mongodb');

require('dotenv').config()

const router = express.Router();
 
//Get Layers
router.get('/', (req, res) => {
    let endpoint = `${process.env.SITE_URL}/geoserver/ows?service=wms&version=1.3.0&request=GetCapabilities`
    console.log(endpoint);
    axios.get(endpoint).then(response => {
        res.json(response.data)
    }).catch(error => {
        res.json(error)
    })
})

module.exports = router;