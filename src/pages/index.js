import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Body from "@/components/body/Body";

const WebLayout = () => {
  return (
    <div className="w-full h-[2000px] ">
      <Navbar />
      <Body />
    </div>
  );
};

export default WebLayout;
