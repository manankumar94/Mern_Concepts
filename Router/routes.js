import express from "express";
import AuthController from "../Controllers/authControllers.js";

const router= express.Router();

router.get("/", AuthController.test);
router.post("/register", AuthController.register);
router.get("/home", AuthController.home);
router.get("/aboutus", AuthController.aboutUs);

export default router;

