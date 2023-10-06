import Axios from "../Apiconfig";
export const GetServiceListings = async () => {
  return await Axios.get(`ProductListings/GetServiceListings`);
};
export const GetServiceListingsById = async ({ queryKey }) => {
  if (!queryKey[1]) return null;
  return await Axios.get(
    `ProductListings/GetAllProductListings?userId=${queryKey[1]}`
  );
};
export const GetServiceDetail = async ({ queryKey }) => {
  return await Axios.get(`ProductListings/${queryKey[1]}`);
};
export const GetServiceReviews = async ({ queryKey }) => {
  return await Axios.get(
    `ProductListings/GetAllListingReviews?listingId=${queryKey[1]}`
  );
};
export const GetCustomerReviews = async ({ queryKey }) => {
  return await Axios.get(
    `CustomerDashboard/GetCustomerReviews?userId=${queryKey[1]}`
  );
};
export const AddRecentViwedService = async ({ queryKey }) => {
  if (!queryKey[1] || !queryKey[2]) return null;
  return await Axios.post(
    `CustomerDashboard?userId=${queryKey[1]}&listingId=${queryKey[2]}`
  );
};
export const AddServiceReaction = async ({ userId, serviceId, reaction }) => {
  if (!userId || !serviceId) return null;
  const { data } = await Axios.post(
    `ProductListings/AddProductListReaction?listingId=${serviceId}&userId=${userId}&status=${reaction}`,
    {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    }
  );
  return data;
};
export const AddServiceReview = async (
  userId,
  listId,
  starRating,
  reviewMessage
) => {
  if (!userId || !listId) return null;
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  const { data } = await Axios.post(
    `ProductListings/AddProductListingReview?listingId=${listId}&userId=${userId}&reviewMessage=${reviewMessage}&startRating=${starRating}`,
    {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    }
  );
  return data;
};
export const CustomerDashBoardServices = async ({ queryKey }) => {
  if (!queryKey[1]) return null;
  return await Axios.get(
    `CustomerDashboard/GetCustomerDashboard?userId=${queryKey[1]}`,
    {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    }
  );
};
