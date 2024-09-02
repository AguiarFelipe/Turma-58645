import { Router } from "express";
import { getUsers, getUsersById, saveUser } from "../controllers/users.controller.js";

const router = Router();

router.get('/', getUsers);
router.get('/:uid', getUsersById);
router.post('/', saveUser);

export default router;