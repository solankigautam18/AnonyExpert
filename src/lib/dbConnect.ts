 import mongoose from "mongoose";

 type ConnectionObject = {
    isConnected?: number
 }

 const connection: ConnectionObject = {}

//  const {username, password} = process.env
//  export const connectionStr = "mongodb+srv://"+username+":"+password+"@test-pro-db.pi6b6s7.mongodb.net/test1?retryWrites=true&w=majority&appName=test-pro-db"

 async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log("Already connected to the database");
        return;
    }
    
    // else
    try{
        const db = await mongoose.connect(process.env. MONGODB_URI || '');

        connection.isConnected = db.connections[0].readyState;

        console.log("DB Connected Successfully")
    } catch (error){
        console.log("Database connection failed", error);
        process.exit(1)
    }
 }

 export default dbConnect;