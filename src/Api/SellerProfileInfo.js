import Axios from "../Apiconfig";

export const GetUserProfile = async ({ queryKey }) => {
  if (!queryKey[1]) return null;
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  return await Axios.post(`account/GetUserProfile?userId=${queryKey[1]}`, {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  });
};
export const Profile = async (profile) => {
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  return await Axios.post(`account/UpdateUserProfile`, profile, {
    headers: {
      "Content-Type": "multipart/form-data",
      withCredentials: true,
    },
  });
};
