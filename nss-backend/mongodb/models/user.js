import mongoose from 'mongoose';

// Define the User schema
const userSchema = new mongoose.Schema({
  auth0Id: { type: String, required: true }, // Unique identifier from Auth0
  givenName: { type: String }, // First name
  familyName: { type: String }, // Last name
  email: { type: String, required: true }, // Email address
  emailVerified: { type: Boolean, required: true }, // Email verification status
  roles: { type: [String], default: [] }, // User roles
  locale: { type: String }, // User's locale
  nickname: { type: String }, // User's nickname
  picture: { type: String }, // Profile picture URL
  updatedAt: { type: Date, required: true }, // Last updated timestamp
  // Add other fields as needed based on the user data
});

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;