const Data = require('../models/Data.js')

const show = async (req, res) => {

    const { name, brand } = req.body;









    const data = await Data.create({
        name,
        brand
    })

    res.status(201).json({
        _id: data._id,
        name: data.name,
        brand: data.brand
    })

}





const show2 = async (req, res) => {

    let data = await Data.find()
    res.send(data)
}


const show3 = async (req, res) => {
    //    let name
    let data = await Data.find({ name: req.body.name })
    res.send(data)
}

const show4 = async (req, res) => {
    //    let name
    let data = await Data.find({ name: req.body.name }).where({ brand: req.body.brand })
    res.send(data)
}



module.exports = { show, show2, show3, show4 } 