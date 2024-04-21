import express from 'express';
import * as ProductController from '../controller/product.controller.js'
const router = express.Router();
router.post("/save",ProductController.saveProduct);
router.get("/fetch",ProductController.fetchProduct);
router.patch("/update",ProductController.updateProduct);
router.delete("/delete",ProductController.deleteProduct);
export default router;