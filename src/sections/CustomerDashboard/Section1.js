import React from "react";
import DefaultImage from "../../assets/img/1.png";
import AdsCard from "../../components/common/AdsCard/AdsCard";
const Section1 = ({ addType, Services }) => {
  return (
    <div className="mb-12">
      <div className="max-w-screen-xl  mx-auto px-3 my-5">
        <div className="flex items-center py-5">
          <div className="text-center w-full mb-10">
            <h3 className="sm:text-lg md:text-4xl uppercase font-helvitica">
              {addType}
            </h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row -mx-3 flex-wrap">
        {Services?.map((e, index) => {
          const ListImage = JSON.parse(e?.pictures);
          return (
            <AdsCard
              key={e?.listingId ?? e.id}
              serviceName={e?.listingTitle}
              serviceDescription={e?.description}
              category={e?.category ?? e?.listingCategory?.businessCategoryName}
              type={e?.listType}
              Images={ListImage.length > 0 ? ListImage : [DefaultImage]}
              rating={e?.listRating}
              companyName={
                e?.companyName ?? e?.userProfile?.company?.companyName
              }
              companyLogo={
                e?.companyLogo ?? e?.userProfile?.company?.companyLogo
              }
              serviceId={e?.listingId ?? e.id}
              companyId={e?.companyId ?? e?.userProfile?.company?.id}
              reaction={e?.listReaction}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section1;
