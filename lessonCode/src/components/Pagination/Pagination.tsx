import React from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  pagesArray,
  handlePageButtonClick,
}: {
  pagesArray: number[];
  handlePageButtonClick: (page: number) => void;
}) => {
  return (
    <div className={styles.container}>
      {pagesArray.map((page) => (
        <div
          style={{
            width: "40px",
            height: "40px",
            background: "red",
            color: "white",
          }}
          key={page}
          onClick={() => handlePageButtonClick(page)}
        >
          {page}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
