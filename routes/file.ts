import { Router } from "express";
// import { Router } from "express-serve-static-core";
import { file } from '../controller/fileController';
const route = Router();
route.post('/', file);

export { route }