import Axios from "../Apiconfig";

export const GetUserBusinessCategories = async ({ queryKey }) => {
  return await Axios.get(
    `ProductListings/GetUserBusinessCategories?userId=${queryKey[1]}`
  );
};
export const GetListingTypes = async () => {
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  return await Axios.get(`ProductListings/GetListingTypes`, {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  });
};
export const AddProductListing = async (productListing) => {
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  return await Axios.post(`ProductListings`, productListing, {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  });
};
export const GetRelatedListing = async (listId) => {
  if (!listId) return null;
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  return await Axios.get(`ProductListings/${parseInt(listId)}`, {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  });
};
export const GetProductListings = async (profileId) => {
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  return await Axios.get(`ProductListings?id=${profileId}`, {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  });
};
export const EditProductListing = async (productListing, id) => {
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  return await Axios.put(`ProductListings/${id}`, productListing, {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
      // Authorization: `Bearer ${token}`,
    },
  });
};
export const DeleteRelatedListing = async (listId) => {
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  return await Axios.delete(`ProductListings/${parseInt(listId)}`, {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  });
};
export const updateListingStatus = async (listId, status) => {
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  return await Axios.get(
    `ProductListings/UpdateListingState?id=${listId}&state=${status}`,
    null,
    {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    }
  );
};
export const GetPopularListingOfRelatedListing = async ({ queryKey }) => {
  if (!queryKey[1]) return null;
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  return await Axios.get(
    `ProductListings/GetPopularServicesOfService?listingId=${parseInt(
      queryKey[1]
    )}&userId=${queryKey[2]}`,
    {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    }
  );
};
export const GetRelatedListingOfSelectedListing = async ({ queryKey }) => {
  if (!queryKey[1]) return null;
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  return await Axios.get(
    `ProductListings/GetRelatedServicesOfService?listingId=${parseInt(
      queryKey[1]
    )}&userId=${queryKey[2]}`,
    {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    }
  );
};

export const GetPosterService = async ({ queryKey }) => {
  // console.log("userPosterServiceHook",queryKey[1])
  if (!queryKey[1]) return null;
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  return await Axios.get(
    `ProductListings/GetAllProductListings?userId=${queryKey[1]}`,
    {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    }
  );
};

