const db = require('../models/index');
const products = db.products;

exports.createProductList = async(data)=>{
    const response = await products.create(data);
    return ({result:response})
}

exports.getProductList = async()=>{
    const response = await products.findAll({
        include:{
            model:db.users,
            through:'user_products'
        }
    });
    return ({result:response})
}

exports.updateProductList = async(userId,data)=>{
    const response = await products.update(data,{where:{id:userId}});
    return ({result:response})
}

exports.deleteProductList = async(userId)=>{
    const response = await products.destroy({where:{id:userId}});
    return ({result:response})
}