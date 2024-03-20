import React from "react";

const CustomBtn = (props) => {
  return (
    <div className="mx-[20px] my-[10px] bg-purple-300  h-[40px] w-[100px] flex justify-center items-center ">
      {props.name}
    </div>
  );
};

export default CustomBtn;
