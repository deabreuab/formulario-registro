import { Router } from "express";
import { register, getUsers} from "../controller/authController";

const router = Router();

router.post("/register", register);
router.get("/users", getUsers);

export default router;