import Axios from "../Apiconfig";
export const GetCompanyListings = async ({ queryKey }) => {
  return await Axios.get(
    `ProductListings/GetCompanyListings?CompanyId=${queryKey[1]}`
  );
};
