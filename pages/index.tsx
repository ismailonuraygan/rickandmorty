import type { NextPage } from "next";
import Link from "next/link";
import Header from "../components/Header/Header";
import Location from "../components/LocationCard/Location";
import styles from "../styles/Home.module.scss";
import React, { useState } from "react";
import { getLocations } from "./api";
import Pagination from "../components/Pagination/Pagination";
import { paginate } from "../helpers/paginate";

const Home = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  console.log(data);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedPosts = paginate(data, currentPage, itemsPerPage);
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <div className={styles.cards}>
        {paginatedPosts.map((item) => (
          <Link
            className={styles.link}
            key={item.id}
            href={`/characters/${item.id}`}
            as={`/characters/${item.id}`}
          >
            <Location data={item} />
          </Link>
        ))}
      </div>
      <Pagination
        items={data.length}
        currentPage={currentPage}
        pageSize={itemsPerPage}
        onPageChange={onPageChange}

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
