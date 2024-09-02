import { Router } from "express";
import { getBusiness, getBusinessById, createBusiness, addProduct } from "../controllers/business.controller.js";

const router = Router();

router.get('/', getBusiness);
router.get('/:uid', getBusinessById);
router.post('/', createBusiness);
router.post('/:uid/product', addProduct);

export default router;