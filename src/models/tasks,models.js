import mongoose, {Schema} from "mongoose";

const taskSchema = new Schema ({

    title: {Type: String, required: true},
    department: {Type: String, required: true},
    requestedBy: {
        Type: Schema.Types.ObjectId,
        ref: "User"
        },
    level: {Type: String, 
            enum: ["normal", "relevant", "urgent"]
            },
    status: {Type: String,
            enum: ["pending", "proccessing", "completed"]
            }
})

export const task = mongoose.model("Task", taskSchema);


// Model
// -categoria (pendiente, en ejecución, completado, delegado a (user))
