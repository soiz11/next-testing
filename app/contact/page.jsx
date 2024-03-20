"use client";

import SkeletonBasic from "@/components/SkeletonBasic";
import CustomBtn from "@/components/customBtn";
import React, { useState } from "react";

const CommonPage = () => {
  const [name, setName] = useState("");
  console.log(name);

  return (
    <>
      <div>
        <form>
          <input
            className="bg-red-200 text-blue-500"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
          />
          <CustomBtn name="Push" />
        </form>
      </div>
    </>
  );
};

export default CommonPage;
