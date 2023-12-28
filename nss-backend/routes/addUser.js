// Import necessary modules
import express from "express";
import User from '../mongodb/models/user.js'; // Import the User model from the appropriate location
import * as dotenv from 'dotenv';
import mongoose from "mongoose";

// Load environment variables
dotenv.config({ path: '../../.env' });

// Create a new router
const router = express.Router();

const rolesURL = 'https://nssritick.com/roles'
// Define the route for adding a new user
// Define the route for adding a new user
router.route('/').post(async (req, res) => {
    try {
      const userData = req.body.user;
      const existingUser = await User.findOne({ auth0Id: userData.sub });
  
      if (existingUser) {
        console.log("User already in DB");
        return res.status(200).json({ success: true, data: 'User already exists' });
      }
  
      // Create a new User instance using the User model
      const newUser = new User({
        auth0Id: userData.sub,
        givenName: userData.given_name,
        familyName: userData.family_name,
        email: userData.email,
        emailVerified: userData.email_verified || false,
        roles: userData['https://nssritick.com/roles'],
        locale: userData.locale,
        nickname: userData.nickname,
        picture: userData.picture,
        updatedAt: userData.updated_at ? new Date(userData.updated_at) : new Date()
        // Add other fields as needed based on the user data
      });
  
      // Save the new user to the database
      const savedUser = await newUser.save();
  
      const updatedUsers = await User.find();
      
      res.status(200).json({ success: true, data: updatedUsers });
      console.log('New user saved');
    } catch (error) {
      console.error('Error inserting new user:', error);
      res.status(500).json({ success: false, error: 'Failed to add new user' });
    }
  });

// Export the router
export default router;