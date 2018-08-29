import React from "react";

const Success = () => {
  setTimeout(() => { window.history.back(); }, 500);

  return (
    <div>
      <p>
        sent :)
      </p>
    </div>
  );
};

export default Success;
