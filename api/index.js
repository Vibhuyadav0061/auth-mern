import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongodb is connected successfully");
}).catch((err)=>{
    console.log(err);
})
const app =  express();
app.use(express.json());
const PORT = process.env.PORT || 3000 ;
app.listen(PORT,()=>{
    console.log(`server listen at port ${PORT}`);
    
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// app.use((err, req , res , next)=>{
// const statusCode = err.statusCode || 500;
// const message = err.merrage || "Internal server Error";
// return res.status(statusCode).json({
//     success : "false",
//     message,
//     statusCode,
// })

// })