import { Router } from "express";
import * as tasksControllers from "../controllers/tasks.controllers.js"

const taskRouter = Router();

taskRouter.get("/", tasksControllers.getTasks);
taskRouter.get("/:id", tasksControllers.getTask);
taskRouter.post("/", tasksControllers.postTask);

export default taskRouter;