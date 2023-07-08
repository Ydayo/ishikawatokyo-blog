import React, { useState } from "react";
import { blogs } from "../constants";
import { Pagination } from "react-pagination-bar";
import "react-pagination-bar/dist/index.css";
import { getBlogs } from "../libs/microcms";

// const response = await getBlogs({ fields: ["id", "title"] });
const AlbumList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 6;

  return (
    <div className="max-w-7xl h-full flex items-center flex-wrap justify-center gap-5 sm:mx-auto mx-3">
      {blogs
        .slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit)
        .map((blog, idx) => (
          <div key={idx} className="bg-rose h-[400px] w-[400px]">
            <img
              src={blog.image}
              alt="blog"
              width={350}
              height={300}
              // currentblogs={currentBlogs}
            />
            <p>{blog.title}</p>
            <p>{blog.desc}</p>
          </div>
        ))}
      <div className="w-full flex justify-center">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={blogs.length}
          pageNeighbours={2}
        />
      </div>
      {/* {response.contents.map((blog) => (
        <div>
          {blog.image}
          <a href={blog.id} className="text-white">
            {blog.title}
          </a>
        </div>
      ))} */}
    </div>
  );
};

// export const getStaticProps = async () => {
//   const data = await client.get({
//     endpoint: blogs,
//   });

//   return {
//     props: {
//       data,
//     },
//   };
// };
export default AlbumList;
