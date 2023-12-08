import mongoose from "mongoose";
import Blog from '../models/blog.js' ;
// import Event from '' ;

import * as dotenv from 'dotenv';
const path = '../../.env'
dotenv.config({path});
async function insertBlogMember() {
  try {
    // Connect to MongoDB (make sure you've already set up the connection)
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    // Create a new event instance
    // const newEvent = new Blog({
    //     author:'Ritick Chaudhary',
    //     title:'Blood Donation and Its Significance:',
    //     photo:'https://media.istockphoto.com/id/1445531404/photo/world-blood-donation-donor-day-and-save-life.jpg?s=612x612&w=0&k=20&c=BWWNmtNDQgd4kYClYJAEf9sH3W5gxeC46zUz0c9vfpg=',
    //     content:'Introduction:Briefly introduce the concept of blood donation.Highlight the critical role of donated blood in saving lives.Importance of Blood Donation:Explain how blood donation contributes to medical treatments and emergencies.Discuss the constant need for blood, especially during disasters and surgeries.Health Benefits for Donors: Outline the positive health impacts of blood donation for the donors.Emphasize the regulated blood supplys role in preventing shortages.The Donation Process:Walk through the blood donation process, from registration to post-donation care.Address common concerns or misconceptions regarding blood donation.Encouraging Participation:Share stories of individuals whose lives were saved through blood transfusions.Call to action: Encourage readers to become blood donors and make a difference.',
    // });
    const newEvent = new Blog({
        author:'Vatsal Lakhmani',
        title:'Health as an Important Factor for All:',
        photo:'https://cdn.pixabay.com/photo/2017/08/06/00/27/yoga-2587066_640.jpg',
        content:'Introduction:Stress the universal nature of health as a fundamental aspect of human life.Highlight the connection between health and overall well-being.Preventive Healthcare:Emphasize the significance of preventive measures for maintaining good health.Discuss the role of vaccinations, regular check-ups, and a healthy lifestyle.Addressing Health Disparities:Explore the existing health disparities and their impact on vulnerable communities.Discuss the importance of accessible healthcare services for all.Mental Health Awareness:Shed light on the importance of mental health.Address the stigma around mental health issues and advocate for understanding and support.Promoting a Healthy Lifestyle:Provide practical tips for maintaining a healthy lifestyle.Discuss the benefits of regular exercise, balanced nutrition, and stress management.Conclusion:Summarize the importance of health for individuals and society.Encourage readers to prioritize their health and contribute to creating a healthier community.Feel free to expand on these outlines and tailor them to suit your writing style and audience.',
    });
    // const newEvent = new Blog({
    //     author:'Katyayani Singh',
    //     title:'Education Among the Poor:',
    //     photo:'https://img.freepik.com/premium-photo/learning-environment-school-pupils-actively-raising-their-hands-seek-teacher-attention_210545-2574.jpg',
    //     content:'Introduction: Present the importance of education in individual and societal development.Highlight the existing disparities in education opportunities.Challenges Faced by the Poor:Discuss the barriers preventing the poor from accessing quality education.Explore issues like lack of resources, discrimination, and limited opportunities.Impact of Education:Showcase the transformative power of education in breaking the cycle of poverty.Discuss success stories of individuals who overcame poverty through education.Initiatives and Solutions:Feature ongoing initiatives or organizations working to improve education for the poor.Discuss potential solutions, such as scholarship programs and community-based education projects.How Readers Can Help:Suggest ways in which readers can contribute, such as supporting educational charities.Encourage advocacy for policies that promote equal educational opportunities.',
    // });
    // const newEvent = new Blog({
    //     name:'Nayan Dwivedi',
    //     designation:'Creatives Coordinator',
    //     pic:'https://bootdey.com/img/Content/avatar/avatar1.png',
    //     github:'#',
    //     linkedin:'https://www.linkedin.com/in/nayan-dwivedi-3213aa216/',
    // });

    // Save the new event to the database
    const savedEvent = await newEvent.save();

    console.log('New event saved:', savedEvent);
  } catch (error) {
    console.error('Error inserting new event:', error);
  } finally {
    // Close the MongoDB connection
    await mongoose.disconnect();
  }
}

// Call the function to insert a new event
insertBlogMember();
