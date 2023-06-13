import mongoose from 'mongoose';
function database() {
    mongoose.connect('mongodb://localhost:27017/practice').then((data) => {
        console.log(`connected to mongodb://localhost:27017`)
    }).catch((err) => {
        console.log(err);
    })
}

export default database
