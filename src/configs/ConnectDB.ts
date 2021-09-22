import mongoose from 'mongoose'
require('dotenv').config();

async function ConnectDB(): Promise<void> {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING || '');
        console.log("Connect DB Successfully !!!")
    } catch (error) {
        console.log(error);
    }
}

export default ConnectDB;