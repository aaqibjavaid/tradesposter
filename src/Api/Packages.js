import Axios from "../Apiconfig";
export const GetPackges = async () => {
  return await Axios.get(`Packages/GetPackages`, null, {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  });
};
export const UpgradePackge = async (userId, subscriptionId) => {
  document.cookie = `StdBrowserId=2de1df70-94ec-4be5-835a-caef6b72e066`;
  return await Axios.get(
    `Packages/UpgradePackage?userId=${userId}&subscriptionId=${subscriptionId}`,
    null,
    {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    }
  );
};
