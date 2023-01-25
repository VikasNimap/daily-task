const models = require('../../models/maiCategorySchema');
// const mainCategoryServices = require('../services/mainCategoryServices');

exports.createMainCategories = async(req,res)=>{
    const data = req.body;
    const mainCategory  =  mainCategoryServices.createMainCategory(data);
    const response = await models.create(mainCategory);
    res.send({result:response});
}