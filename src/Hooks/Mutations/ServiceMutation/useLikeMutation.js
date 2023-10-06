import { useMutation, useQueryClient } from "react-query";
import { AddServiceReaction } from "../../../Api/Services";

export const useServiceLikeMutation = () => {
  const queryClient = useQueryClient();
  // useMutation is used to Instantly add or update our Lists
  return useMutation(AddServiceReaction, {
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData(
        ["CustomerDashBoardServices", variables.userId],
        (data) => {
          //When User Dislike the post it will run that code and remove from the list also remove red heart from recent Lists if it is found.
          if (!variables.reaction) {
            if (data?.data?.key?.likedListings?.$values) {
              data.data.key.likedListings.$values =
                data.data.key.likedListings.$values.filter(
                  (service) => service.listingId !== variables.serviceId
                );
            }
            if (data?.data?.key?.recentlyViwedListings?.$values) {
              data.data.key.recentlyViwedListings.$values =
                data.data.key.recentlyViwedListings.$values.map((service) => {
                  if (service.listingId === variables.serviceId) {
                    service.listReaction = variables.reaction;
                  }
                  return { ...service };
                });
            }
            return data;
          } else {
            //When user Like the post from recent lists it will display in Saved Ads as well
            if (data?.data?.key?.recentlyViwedListings?.$values) {
              let recentLikeList = data.data.key.recentlyViwedListings.$values
                .filter((service) => service.listingId === variables.serviceId)
                .map((e) => {
                  e.listReaction = variables.reaction;
                  return { ...e };
                });

              data.data.key.likedListings.$values = [
                ...data.data.key.likedListings.$values,
                ...recentLikeList,
              ];
              return data;
            }
          }
        }
      );
    },
  });
};
