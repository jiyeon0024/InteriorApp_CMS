import React, { useState } from "react";
import useFetch from "../api/useFetch";
import BlogCard from "../components/blogCard";
import Button from "../components/Button";

function blog() {
  const { data } = useFetch("http://localhost:1337/api/interiors?populate=*");

  console.log(data);
  console.log(data[0]);
  return (
    <div className=" px-28 mt-10 flex flex-col gap-10  justify-center w-full m-auto  ">
      <div className="flex justify-between ">
        <div className="flex gap-5 justify-center  flex-wrap ">
          {data.map((i, index) => {
            return <Button key={i + index}>{i.attributes.category}</Button>;
          })}
        </div>
      </div>

      {data.map((i, index) => {
        return (
          <div>
            <BlogCard key={i + index} i={i} />
          </div>
        );
      })}
      {/* {data.map((i, index) => {
        console.log(i.attributes.img.data[0].attributes.url);
        return (
          <div key={i + index}>
            <div>{i.attributes.title}</div>
            <div>{i.attributes.subtitle}</div>
            <img
              src={`http://localhost:1337${i.attributes.img.data[0].attributes.url}`}
              alt=""
            />
          </div>
        );
      })} */}
    </div>
  );
}

export default blog;
