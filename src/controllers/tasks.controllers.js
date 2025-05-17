import { Task } from "../models/tasks,models.js";

export const getTasks = async (req,res) => { 
    try {
        const tasks = await Task.find().populate("requestedBy", "name department");
        res.status(201).send({status: "ok", message: tasks})
    }
    catch(error) {
        res.status(400).send({status: "error", message: error.message})
    }
}

export const getTask = async (req,res) => {
    const {id} = req.params;
    try {
        const task = await Task.findById(id);
        if(task)
            res.status(200).send({status: "ok", message: task})
         else
            res.status(404).send({status: "error", message: "task not found"})
    }
    catch(error) {
        res.status(400).send({status: "error", message: error.message})
    }
}

export const postTask = async (req,res) => {
    const {title, department, requestedBy, level, status} = req.body;
    
    if (!title || !department || !level || !status)
        return res.status(400).send({status:"error", message: "Missing required fields"})
    
    try {
        const newTask = await Task.create({
        title,
        department,
        requestedBy: requestedBy || null, // fuerza a null si no hay valor
        level,
        status
    });
        res.status(200).send({status:"ok", message: "Task created", newTask})
    }
    catch(error) {
         res.status(400).send({status: "error", message: error.message})
    }
}

export const putTask = async (req,res) => {



}


export const deleteTask = async (req,res) => {




}