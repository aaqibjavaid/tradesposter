import { combineReducers } from "redux";
import BusinessCategoryReducer from "./Reducers/BusinessCategories";
import PricingPlanReducer from "./Reducers/PricingPlans";
import ServiceTagsReducer from "./Reducers/ServiceTags";
import TestmonialReducer from "./Reducers/Testmonial";
export default combineReducers({
  PricingPlanReducer,
  TestmonialReducer,
  BusinessCategoryReducer,
  ServiceTagsReducer,
});
