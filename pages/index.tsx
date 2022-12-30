/* Hooks */
import Link from "next/link";
import React, {  useState } from "react";

/* Components */
import Header from "../components/Header/Header";
import Location from "../components/LocationCard/Location";

/* API */
import { getLocations } from "./api";

/* Style */
import styles from "../styles/Home.module.scss";

/*Third party libraries */
import ReactPaginate from "react-paginate";

/* Icons */
import Previous from "../assets/icons/previous.svg";
import Next from "../assets/icons/next.svg";

/* Types */
import type { NextPage } from "next";
import { LocationType } from "../types/types";

const Home = ({ data }: { data: LocationType[] }) => {
  (data);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const usersPerPage = 3;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(data.length / usersPerPage);
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };
  (data);

  return (
    <div className={styles.mainWrapper}>
      <Header />
      <div className={styles.cards}>
        {data.slice(pagesVisited, pagesVisited + usersPerPage).map((item) => (
          <div key={item.id} style={{ height: "130px" }}>
            <Link
              className={styles.link}
              key={item.id}
              href={`/characters/${item.id}`}
              as={`/characters/${item.id}`}
            >
              <Location data={item} />
            </Link>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={<Previous />}
        nextLabel={<Next />}
        breakLabel={"..."}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles.paginationBttns}
        previousLinkClassName={styles.previousBttn}
        nextLinkClassName={styles.nextBttn}
        disabledClassName={styles.paginationDisabled}
        activeClassName={styles.paginationActive}
      />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await getLocations();
  return {
    props: {
      data: data.results,
    },
  };
};
