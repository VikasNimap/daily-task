import { Request, Response } from 'express';
import multer from 'multer';
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public')
//     },
//     filename: function (req, file, cb) {
//         let ext = file.mimetype.substr(6);
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix + "." + ext)
//     }
// })
// function checkFileType(file: any, cb: any) {
//     if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|webp)$/)) {
//         return cb('only image files allowed')
//     } else {
//         return cb(new Error('only image files are allowed.'), false)
//     }
// }
// const upload = multer({
//     storage: storage,
//     fileFilter(req, file, cb) {
//         checkFileType(file, cb)
//     },
// }).single('file');

const fileServices = async (req: Request, res: Response) => {
    return new Promise((resolve, reject) => {

        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'public')
            },
            filename: function (req, file, cb) {
                console.log(file.mimetype,'-------------');

                let ext = file.mimetype.substr(6);
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
                cb(null, file.fieldname + '-' + uniqueSuffix  + file.originalname)
            }
        })
        function checkFileType(file: any, cb: any) {
            if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|webp)$/)) {
                 cb('only image files allowed')
            } else {
                return cb(null,true)
            }
        }
        const upload = multer({
            storage: storage,
            fileFilter(req, file, cb) {
                checkFileType(file, cb)
            },
        }).single('file');



        upload(req, res, (err) => {
            if (err) {
                reject({ error: true, message: 'add only image file', err: err })
            }
            if (req.file && req.file.path) {
                let serve = 'http://127.0.0.1:3000';
                let extract = req.file.path.replace('public', "");
                console.log(req.file.path);
                let link = serve + extract;
                if (!link) {
                    reject({ error: new Error('cannot generate link') });
                } else {
                    resolve({ file: link })
                }
            }
        })
    }).catch((err) => {
        return { err }
    })
}

export { fileServices }