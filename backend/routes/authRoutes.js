import express  from "express";
import { login, logout } from "../controllers/authController.js";
import { loginLimiter } from "../middleware/security.js";
import RateLimit from "express-rate-limit";
const router = express.Router();

// Rate limiting to prevent abuse
const limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

router.post("/admin/login",loginLimiter, login);
router.post("/user/logout", logout);
router.post("/admin/email", limiter)

export default router;