import express from "express";
import AuthController from "../Controllers/authControllers.js";

const router= express.Router();

router.get("/", AuthController.home);
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.get("/users", AuthController.allUsers);


export default router;

