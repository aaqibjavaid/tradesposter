import Axios from "../Apiconfig";
export const GetBusinessCategories = async () => {
  return await Axios.get(`Account/GetBusinessCategory`);
};
export const GetServiceTags = async () => {
  return await Axios.get(`Account/GetServiceTags`);
};
