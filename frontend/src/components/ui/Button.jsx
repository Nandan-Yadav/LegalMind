import React, { useState } from "react";

export const Button = ({
  defaultLabel,
  loadingLabel,
  clickEvent = async ()=>{},
  otherClassNames,
}) => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await clickEvent();
    setLoading(false);
  };

  return (
    <button onClick={handleClick} className={`btn ${otherClassNames}`} type="button">
      {isLoading ? loadingLabel : defaultLabel || "Submit"}
    </button>
  );
};
