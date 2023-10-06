import Axios from "../Apiconfig";
export const ResendVerificationCode = async (userId) => {
  return await Axios.post(
    `Account/ResendVerificationCode?userId=${userId}`
  );
};