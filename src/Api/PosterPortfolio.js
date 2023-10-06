import Axios from "../Apiconfig";
export const SavePosterPortfolio = async (model) => {
  return await Axios.post(`PosterPortfolio/SavePosterPortfolio`, model, {
    headers: {
      "Content-Type": "application/json",
      withCredentials: true,
    },
  });
};
export const GetPosterPortfolio = async (userId) => {
  return await Axios.get(
    `PosterPortfolio/GetPosterPortfolio?UserId=${userId}`,
    {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    }
  );
};
export const PosterPortfolio = async ({ queryKey }) => {
  return await Axios.get(
    `PosterPortfolio/GetPosterPortfolio?UserId=${queryKey[1]}`,
    {
      headers: {
        "Content-Type": "application/json",
        withCredentials: true,
      },
    }
  );
};
