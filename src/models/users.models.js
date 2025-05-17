
import mongoose, {Schema} from "mongoose";

const userSchema = new Schema ({
    name: {type: String, required: true, unique: true}, //type sin mayúsc
    email: {type: String, required: true, unique: true},
    department: String,
    role: {type: String, default: "user"} //va con comillas
});

export const User = mongoose.model("User", userSchema);










