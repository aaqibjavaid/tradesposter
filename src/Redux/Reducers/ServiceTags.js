import {
  ADD_SERVICE_TAGS,
  DELETE_SERVICE_TAGS,
  EDIT_SERVICE_TAGS,
  GET_SERVICE_TAGS,
} from "../Constants";
function ServiceTagsReducer(ServiceTagsState = [], action) {
  switch (action.type) {
    case GET_SERVICE_TAGS:
      return action.payload;
    case ADD_SERVICE_TAGS:
      return [...ServiceTagsState, action.payload];
    case DELETE_SERVICE_TAGS:
      return ServiceTagsState.filter(
        (tags) => tags.id !== action.payload.toString()
      );
    case EDIT_SERVICE_TAGS:
      return ServiceTagsState.map((tags) => {
        if (tags.id === action.payload.id) {
          return {
            ...tags,
            ...action.payload,
          };
        } else {
          return tags;
        }
      });
    default:
      return ServiceTagsState;
  }
}

export default ServiceTagsReducer;
