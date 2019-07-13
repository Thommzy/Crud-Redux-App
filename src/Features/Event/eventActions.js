import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./eventsConstants";

// Initialize and action creator for createEvent
export const createEvent = event => {
  return {
    type: CREATE_EVENT,
    payload: {
      event //what this means is Payload.event
    }
  };
};

// End of action Creator for createEvent

// Initialize and action creator for updateEvent
export const updateEvent = event => {
  return {
    type: UPDATE_EVENT,
    payload: {
      event //what this means is Payload.event
    }
  };
};

// End of action Creator for updateEvent

export const deleteEvent = eventId => {
  return {
    type: DELETE_EVENT,
    payload: {
        eventId //what this means is Payload.event
    }
  };
};
