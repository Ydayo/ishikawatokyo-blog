import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [itemsOffset, setItemsOffset] = useState(0);

  const itemsPerPage = 6; //数字は任意に変えられる

  const endOffset = itemsOffset + itemsPerPage;

  const currentAlbums = albums.slice(itemsOffset, endOffset);
  const pageCount = Math.ceil(albums.length / itemsPerPage);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % albums.length;
    setItemsOffset(newOffset);
  };

  useEffect(() => {
    // 非同期処理 / fetch関数
    const getAlbums = async () => {
      await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then((res) => res.json())
        .then((albums) => setAlbums(albums));
    };
    getAlbums();
  }, []);
  return (
    <div className="max-w-7xl h-full flex items-center flex-wrap justify-center gap-5 mx-auto">
      {currentAlbums.map((album) => (
        <div key={album.id}>
          <img
            src={album.url}
            alt="album"
            width={400}
            currentAlbums={currentAlbums}
          />
        </div>
      ))}
      <ReactPaginate
        className="text-white w-full flex justify-center"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        nextLabel="next >"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default AlbumList;
