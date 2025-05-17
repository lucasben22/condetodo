import { Router } from "express";
import * as usersControllers from "../controllers/users.controllers.js"

const userRouter = Router ();

userRouter.get("/", usersControllers.getUsers);
userRouter.get("/:id", usersControllers.getUser);

export default userRouter;