import {
  ADD_SAVED_SERVICES,
  DELETE_SAVED_SERVICES,
  EDIT_SAVED_SERVICES,
  GET_SAVED_SERVICES,
} from "../Constants";
function CustomerDashboardReducer(SavedService = [], action) {
  switch (action.type) {
    case GET_SAVED_SERVICES:
      return action.payload;
    case ADD_SAVED_SERVICES:
      return [...SavedService, action.payload];
    case DELETE_SAVED_SERVICES:
      return SavedService.filter(
        (service) => service.listingId.toString() !== action.payload.toString()
      );
    case EDIT_SAVED_SERVICES:
      return SavedService.map((service) => {
        if (service.listingId.toString() === action.payload.toString()) {
          return {
            ...service,
            ...action.payload,
          };
        } else {
          return service;
        }
      });
    default:
      return SavedService;
  }
}

export default CustomerDashboardReducer;
