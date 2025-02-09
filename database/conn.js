import mongoose from "mongoose";

export default async function connect(){
    await mongoose.connect(`mongodb+srv://user:admin@clusterquiz.8uqiu.mongodb.net/?retryWrites=true&w=majority&appName=clusterQuiz`)
    console.log("Database Connected")
}