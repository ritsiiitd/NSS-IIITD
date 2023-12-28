import express from "express";
import * as dotenv from 'dotenv'
import ExcelJS from 'exceljs';
import User from '../mongodb/models/user.js'; // Import the User model
import Event from '../mongodb/models/event.js'; // Import the Event model

dotenv.config();

const router = express.Router();

router.get('/:eventId', async (req, res) => {
  const eventId = req.params.eventId;

  try {
    // Fetch volunteers for the specific event from the Event model
    const event = await Event.findById( eventId );
    const volunteerIds = event.volunteers;

    // Fetch user data for each volunteer from the User model
    const volunteerData = await Promise.all(volunteerIds.map(async (volunteerId) => {
      const user = await User.findOne({ auth0Id: volunteerId });
      return { name: user.givenName + ' ' + user.familyName, email: user.email };
    }));

    // Create a new Excel workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Volunteers');

    // Add headers
    worksheet.addRow(['Volunteer Name', 'Email']);

    // Add volunteer data to the worksheet
    volunteerData.forEach((volunteer) => {
      worksheet.addRow([volunteer.name, volunteer.email]);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename=${event.name}_volunteer_list.xlsx`);

    // Write the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    // Handle any errors
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;