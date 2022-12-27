import React from "react";
import styles from "./index.module.scss";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);
  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  /* console.log(pages, "a", items); */

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.pagination}>
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? styles.pageItemActive : styles.pageItem
              }
              onClick={() => onPageChange(page)}
            >
              <a className={styles.pageLink}>{page}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
