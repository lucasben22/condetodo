
import mongoose, {Schema} from "mongoose";

const userSchema = new Schema ({
    name: {Type: String, required: true, unique: true},
    email: {Type: String, required: true, unique: true},
    department: String,
    role: {Type: String, default: user}
});

export const user = mongoose.model("User", userSchema);










