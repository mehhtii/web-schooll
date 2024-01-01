import React from "react";

const ConditionParallex = ({ center, bottom }) => {
  return (
    <div className="col">
      <div className=" mt-5 circle_condition text-center position-relative">
        <h4 className="text-light mt-4">{center}</h4>
        <h5 className="text-center text-light text_condition">{bottom}</h5>
      </div>
    </div>
  );
};

export default ConditionParallex;
