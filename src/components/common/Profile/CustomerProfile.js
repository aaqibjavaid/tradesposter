import React from 'react'
import SecondaryHeading from '../Typography/SecondaryHeading'
import Paragraph from '../Typography/Paragraph'
import RatingStars from '../RatingStars/RatingStars'
import Profile from "../../../assets/img/User.png";
import { useState } from 'react';

const CustomerProfile = () => {
    const [image, setImage] = useState(Profile);
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
        }
      };
  return (
    <>
         <div>
                <div className="flex justify-start group relative w-[150px]">
                  <div className="div1 hidden group-hover:block absolute z-10 top-1/2 -mt-5 left-1/3">
                    <div className="flex">
                      <div className="bg-brightblue rounded-full flex items-center justify-center w-10 h-10">
                        <div>
                          <input
                            type="file"
                            id="imageslist"
                            onChange={onImageChange}
                            accept="image/*"
                            className="cursor-pointer hidden"
                            multiple
                          />
                          <label
                            role="button"
                            htmlFor="imageslist"
                            className="flex justify-center bg-transparent"
                          >
                            <div>
                              <div className="flex justify-center">
                                <i className="fi fi-tr-pen-circle text-[25px] text-white"></i>
                              </div>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="div2">
                    <div className="w-[150px] h-[150px] relative">
                      <img
                        className="object-center rounded-full w-[150px] h-[150px] cursor-pointer"
                        src={image}
                        // src={require("../../assets/img/User.png")}

                        // src={
                        //   !companyLogo || companyLogo === "null"
                        //     ? require("../../../assets/img/hero-vector.svg").default
                        //     : companyLogo
                        // }
                        alt={"no-image"}
                        // onError={(e) => {
                        //     e.target.src = require("../../assets/img/default-image.jpg");
                        //   }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <div>
                    <SecondaryHeading variant={"ExtraLargeParagrapHeading"}>
                    Jozeph J
                    </SecondaryHeading>
                  </div>
                  <div className="mt-3">
                    <Paragraph variant={"Smaller"}>
                      Duffy, Australian Capital Territory, 2611
                    </Paragraph>
                  </div>
                  <div className="mt-1">
                    <Paragraph variant={"ExtraSmaller"}>
                      Established on Dec, 2007
                    </Paragraph>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center">
                      <RatingStars
                        // rating={getReactionInfo?.listRating ?? listRating}
                      />
                      <span className="text-[14px] font-montserrat">
                        4.8 <span>(10)</span>
                      </span>
                    </div>
                  </div>
                
                </div>
              </div>
    </>
  )
}

export default CustomerProfile