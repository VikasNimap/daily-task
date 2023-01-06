
let page=req.query.page

let book=await BookModel.find().skip(3*(page-1)).limit(3)

let =await BookModel.find().skip(3*(page-1)).sort({sales:-1}).skip(3*(page-1))
.limit(3).select({bookName:1,authorName:1,_id:0})

let =await BookModel.find({sales:{$ne:137}})
let =await BookModel.find({sales:{$gt:137}})
let =await BookModel.find({sales:{$lt:137}})
let =await BookModel.find({sales:{$lte:137}})
let =await BookModel.find({sales:{$gte:137}})
