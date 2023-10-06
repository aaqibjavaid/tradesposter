import React, { useEffect, useState } from "react";
import { FaStar as Star } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const colors = {
  orange: "#2E00FF",
  grey: "#BDBEBF",
};

const SpecialStars = ({ rating }) => {
  const [currentValue, setCurrentValue] = useState(rating);
  const stars = Array(5).fill(0);
  useEffect(() => {
    setCurrentValue(rating);
  }, [rating]);
  return (
    <div className="flex">
      {stars.map((e, index) => {
        return (
          <Star
          className="h-[40px] w-[40px]"
            key={index}
            size={18}
            color={currentValue > index ? colors.orange : colors.grey}
            style={{ 
              marginRight: 6,
              cursor: "pointer",
            }}
          />
        );
      })}
    </div>
  );
};

export default SpecialStars;
