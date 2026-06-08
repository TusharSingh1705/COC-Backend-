import mongoose, {model, Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber:{
        type: Schema.type.ObjectId,
        ref: "User"
    },
    channel:{
        type: Schema.type.ObjectId,
        ref: "User"
    }
},
{timeStamps:true});

export const Subscription = mongoose.model("Subscription",subscriptionSchema);