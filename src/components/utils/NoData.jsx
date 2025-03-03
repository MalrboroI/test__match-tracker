import React from "react";
import noDataImg from "../../img/nodata.png";

const NoData = () => {
  return (
    <div className="root">
      <img src={noDataImg} alt="no data img" />
    </div>
  );
};

export default NoData;