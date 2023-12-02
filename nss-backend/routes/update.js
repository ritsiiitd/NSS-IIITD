import Event from '../mongodb/models/event.js';

const updateEvent = async (eventId, userId) => {
    
    try {
        // console.log("updatinh");
      // Find the event by eventId
      const dbevent = await Event.findOne({ eventID: eventId });
        // console.log(dbevent);
      // Check if the event exists
      if (!dbevent) {
        return { success: false, message: 'Event not found' };
      }
  
      // Check if userId is already in the volunteer array
      if (dbevent.volunteers.includes(userId)) {
        return { success: true, message: 'User is already a volunteer for this event' };
      }
  
      // Add the userId to the volunteers array (assuming userId is a string)
      dbevent.volunteers.push(userId);
  
      // Save the updated event
      await dbevent.save();
  
      return { success: true, message: 'Event updated successfully', dbevent };
    
    } catch (error) {
      console.error('Error updating event and adding volunteer:', error);
      return { success: false, message: 'Error updating event and adding volunteer' };
    }
  };

  export default {updateEvent};