import { User } from "../models/users.models.js";

export const getUsers = async (req,res) => {
    try {
        const users = await User.find();
        res.status(201).send(users);
    }
    catch (error) {
        res.status(400).send({status: "error", message: error})
    }
}

export const getUser = async (req,res) => {
    const {id} = req.params;

    try {
        const user = await User.findById(id)
        if(user)
            res.status(201).send({status: "ok", "user": user})
        else
            res.status(404).send({status: "error", message: "user not found"})
    }
    catch(error){
        res.status(400).send({status: "error", message: error.message})
    }
}