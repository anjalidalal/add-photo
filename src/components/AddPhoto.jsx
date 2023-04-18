import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

const AddPhoto = () => {
  const data = useSelector((state) => state.data);
  console.log(data);
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <div className="grid my-7 justify-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data?.map((el) => (
          <div className="w-72 h-96">
            <img src={el.image} className="w-full h-full rounded-3xl" alt="" />
            {/* <p>{el.label}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddPhoto;
