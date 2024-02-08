const express=require('express')
const app=express();
const dotenv=require('dotenv')
const authRoute=require("./routes/auth")
const userRoute=require("./routes/users")
const postRoute=require("./routes/posts")
const categoryRoute=require("./routes/categories")


dotenv.config();
const mongoose=require('mongoose')
const multer=require('multer')
   app.use(express.json()) 
const connect = async () => {
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected To Database")
    }catch(error){
        console.error("Failed To Connect To the database",error);
        process.exit(1);
    }

};
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{cb(null,"images")
},
filename:(req,file,cb)=>{
    cb(null,req.body.name);
}
})
const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded")
})
app.use("/api/categories",categoryRoute);
app.use("/api/posts",postRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("5000",()=>{
    connect();
    console.log("Backend running")
});

