const express = require('express')
const router = express.Router()

const {show, show2 ,show3, show4}=require('../Controllers/data.js')

router.post('/', show )
router.get('/', show2)
router.get('/name', show3)
router.get('/nameb', show4)

module.exports = router