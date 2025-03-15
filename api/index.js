import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from '/Users/naveenjain/Desktop/MERNESTATE/api/routes/user.route.js';
import authRoutes from '/Users/naveenjain/Desktop/MERNESTATE/api/routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{   
    console.log(err);
});

const app = express();
app.use(express.json());    

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{   
    console.log(err);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);


