const mainCategoryControllers = require('../api/controllers');

const saveImage = async(data)=>{
    let fileName = null;
    let image_id = null;
    if(data["image"]){
        if(data["type"]=="file"){
            return data
        }
        else{
            const binaryData = data["image"].split(",")[1];
            if(binaryData){
                const buffer = Buffer.from(binaryData,"base64");
                const imageType = 
            }
        }
    }
}

const createMainCategory = async(data)=>{
    const saveImage = mainCategoryServices.saveImage(data);
}