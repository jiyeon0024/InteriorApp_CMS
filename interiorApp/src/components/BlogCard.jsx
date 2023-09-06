import React from "react";
import DetailButton from "./DetailButton";
function BlogCard({ i }) {
  return (
    <div className="w-[60%] flex flex-col  justify-center m-auto  mb-10  ">
      <div className="flex justify-between items-center">
        <h1 className="text-yellow-950 font-extrabold text-2xl">
          {i.attributes.title}
        </h1>
        <p className="text-gray-700 text-xs">{`${new Date(i.attributes.date++)
          .toString()
          .substr(0, 25)}`}</p>
      </div>

      <div className="object-contain   ">
        <img
          className="w-full h-full "
          src={`http://localhost:1337${i.attributes.img.data[0].attributes.url}`}
          alt=""
        />
      </div>

      <h3 className="text-yellow-950 bg-stone-200 text-center p-2 rounded text-sm font-semibold">
        {i.attributes.subtitle}
      </h3>
      <p className="text-gray-600 font-medium mb-3">{i.attributes.content}</p>
      <DetailButton>Read More</DetailButton>
    </div>
  );
}

export default BlogCard;
