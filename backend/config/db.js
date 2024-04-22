import mongoose, { connect } from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://Priya2607:Priya4478@cluster0.styu90i.mongodb.net/food-del').then(()=>console.log('DB Connected'))
}