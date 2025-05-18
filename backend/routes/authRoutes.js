import express  from "express";
import { login, logout } from "../controllers/authController.js";
import { loginLimiter } from "../middleware/security.js";
const router = express.Router();

router.post("/admin/login",loginLimiter, login);
router.post("/user/logout", logout);

export default router;