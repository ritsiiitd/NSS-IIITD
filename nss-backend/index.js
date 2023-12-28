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
import galleryRoutes from './routes/galleryRoutes.js';
import galleryPageRoutes from './routes/galleryPageRoutes.js';
import blogPageRoutes from './routes/blogPageRoutes.js';
import collabRoutes from './routes/collabRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import addUser from './routes/addUser.js';
import getUsers from './routes/getUsers.js';
// const nodemailer = require('nodemailer');

import deleteEvent from './routes/deleteEvent.js';
import deleteBlogRoutes from './routes/deleteBlogRoutes.js';
import deleteTestimoniesRoutes from './routes/deleteTestimoniesRoutes.js';
import deleteTeamRoutes from './routes/deleteTeamRoutes.js';
import deleteCollaborationRoutes from './routes/deleteCollaborationRoutes.js';
import deleteGalleryRoutes from './routes/deleteGalleryRoutes.js';
import deleteGalleryImageRoutes from './routes/deleteGalleryImageRoutes.js';

import addEventRoute from './routes/addEventRoute.js';
import addBlogRoutes from './routes/addBlogRoutes.js';
import addTestimoniesRoutes from './routes/addTestimoniesRoutes.js';
import addTeamRoutes from './routes/addTeamRoutes.js';
import addCollaborationRoutes from './routes/addCollaborationRoutes.js';
import addGalleryRoutes from './routes/addGalleryRoutes.js';
import addImageRoutes from './routes/addImageRoutes.js';

dotenv.config();


const app = express();
app.use(cors()); //The cors() function comes from the "cors" middleware package, which sets the appropriate HTTP headers to control cross-origin requests.
app.use(express.json({limit:'50mb'})); //configuring Express to parse incoming JSON data with a limit of 50 megabytes. It means that your server can accept and process JSON data in incoming requests with a payload size of up to 50 megabytes.

app.use('/api/v1/static',staticRoutes);
app.use('/api/v1/allEvents',eventRoutes);
app.use('/api/v1/eventPage',eventPageRoutes);
app.use('/api/v1/galleryPage',galleryPageRoutes);
app.use('/api/v1/blogPage',blogPageRoutes);
app.use('/api/v1/registerVolunteer',volunteerRegisterRoutes);
app.use('/api/v1/departments',departmentRoutes);
app.use('/api/v1/testimonies',testimoniesRoutes);
app.use('/api/v1/blogs',blogRoutes);
app.use('/api/v1/faqs',faqRoutes);
app.use('/api/v1/galleries',galleryRoutes);
app.use('/api/v1/collaborationList',collabRoutes);
app.use('/api/v1/nssTeam',teamRoutes);
app.use('/api/v1/addUser',addUser);
app.use('/api/v1/getUsers',getUsers);

app.use('/api/v1/createEvent',addEventRoute);
app.use('/api/v1/createTestimonies',addTestimoniesRoutes);
app.use('/api/v1/createBlog',addBlogRoutes);
app.use('/api/v1/createTeam',addTeamRoutes);
app.use('/api/v1/createCollaboration',addCollaborationRoutes);
app.use('/api/v1/createGallery',addGalleryRoutes);
app.use('/api/v1/addImages',addImageRoutes);

app.use('/api/v1/deleteBlog',deleteBlogRoutes);
app.use('/api/v1/deleteEvent',deleteEvent);
app.use('/api/v1/deleteTeam',deleteTeamRoutes);
app.use('/api/v1/deleteTestimonies',deleteTestimoniesRoutes);
app.use('/api/v1/deleteCollaboration',deleteCollaborationRoutes);
app.use('/api/v1/deleteGallery',deleteGalleryRoutes);
app.use('/api/v1/deleteGalleryImage',deleteGalleryImageRoutes);

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