import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
  title: { type: String, required: true },
  department: { type: String, required: true },
  requestedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false
  },
  level: {
    type: String,
    enum: ["normal", "relevant", "urgent"]
  },
  status: {
    type: String,
    enum: ["pending", "proccessing", "completed"]
  }
});

export const Task = mongoose.model("Task", taskSchema);

// Model
// -categoria (pendiente, en ejecución, completado, delegado a (user))
