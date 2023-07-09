import React, { useState } from "react";
import { blogs } from "../constants";
import { Pagination } from "react-pagination-bar";
import "react-pagination-bar/dist/index.css";

const AlbumList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;

  return (
    <div className="max-w-7xl h-full flex items-center flex-wrap justify-center gap-5 sm:mx-auto mx-3">
      {blogs
        .slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit)
        .map((blog, idx) => (
          <a
            onClick={() => window.open(blog.source)}
            key={idx}
            className="shadow-xl shadow-cyan-700 h-[400px] w-[400px] p-3 flex flex-col justify-center items-center text-white hover:shadow-none duration-300 cursor-pointer"
          >
            <img
              src={blog.image}
              alt="blog"
              className="w-[350px] h-[300] object-cover"
            />
            <p className="my-6 font-bold">{blog.title}</p>
            <p>{blog.desc}</p>
          </a>
        ))}
      <div className="w-full flex justify-center mt-10">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={blogs.length}
          pageNeighbours={2}
        />
      </div>
    </div>
  );
};

export default AlbumList;
