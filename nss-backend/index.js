import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import staticRoutes from './routes/staticRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import eventPageRoutes from './routes/eventPageRoutes.js';
import volunteerRegisterRoutes from './routes/volunteerRegisterRoutes.js';
import departmentRoutes from './routes/departmentRoutes.js';
import testimoniesRoutes from './routes/testimoniesRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import faqRoutes from './routes/faqRoutes.js';

dotenv.config();


const app = express();
app.use(cors()); //The cors() function comes from the "cors" middleware package, which sets the appropriate HTTP headers to control cross-origin requests.
app.use(express.json({limit:'50mb'})); //configuring Express to parse incoming JSON data with a limit of 50 megabytes. It means that your server can accept and process JSON data in incoming requests with a payload size of up to 50 megabytes.

app.use('/api/v1/static',staticRoutes);
app.use('/api/v1/allEvents',eventRoutes);
app.use('/api/v1/eventPage',eventPageRoutes);
app.use('/api/v1/registerVolunteer',volunteerRegisterRoutes);
app.use('/api/v1/departments',departmentRoutes);
app.use('/api/v1/testimonies',testimoniesRoutes);
app.use('/api/v1/blogs',blogRoutes);
app.use('/api/v1/faqs',faqRoutes);

app.get('/', async(req,res)=>{
    res.send("Nss backend says hello");
})

const startServer = async() => {
    
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=>console.log("NSS server started on port http://localhost:8080"))
    } catch (error) {
        console.log("Database Connection FAILED!",error);
    }

}

startServer();