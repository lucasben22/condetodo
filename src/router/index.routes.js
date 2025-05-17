import { Router } from "express";
import userRouter from "./users.routes.js";
import taskRouter from "./tasks.routes.js";

const router = Router();

router.use("/api/users", userRouter);
router.use("/api/tasks", taskRouter);

export default router;