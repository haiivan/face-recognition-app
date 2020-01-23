import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div className="white f3">
      <p>{`${name}, Your currenk entry count ...`}</p>
      <p className="f1">{entries}</p>
    </div>
  );
};

export default Rank;
