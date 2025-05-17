import { Router } from "express";
import userRouter from "./users.routes.js";

const router = Router();

router.use("/api/users", userRouter);

export default router;