/* Hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";

/* Styles */
import styles from "./index.module.scss";

/* Components */
import Header from "../../components/Header/Header";
import Filter from "../../components/Filter/Filter";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

/* Third party library */
import ReactPaginate from "react-paginate";

/* Icons */
import Next from "../../assets/icons/next.svg";
import Previous from "../../assets/icons/previous.svg";

/* Types */
import { Character, LocationType } from "../../types/types";
import { GetServerSideProps } from "next";

const Characters = ({ allCharacters }: { allCharacters: Character[] }) => {
  const router = useRouter();

  const [datas, setDatas] = useState(allCharacters);
  const [filtered, setFiltered] = useState(allCharacters);
  const [status, setStatus] = useState("All");

  const { locationId } = router.query;


  /*Pagination*/
  const [pageNumber, setPageNumber] = useState<number>(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(filtered.length / usersPerPage);
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };


  return (
    <div className={styles.mainWrapper}>
      <Header />
      <Filter
        datas={datas}
        setFiltered={setFiltered}
        filtered={filtered}
        status={status}
        setStatus={setStatus}
        allCharacters={allCharacters}
      />
      <div className={styles.wrapper}>
        {filtered
          ?.slice(pagesVisited, pagesVisited + usersPerPage)
          .map((data, index) => (
            <CharacterCard key={index} data={data} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locationId } = context.query;

  const res = await fetch(
    `https://rickandmortyapi.com/api/location/${locationId}`
  );
  const location: LocationType = await res.json();
  const charactersURL = location.residents;

  /* All characters from specific location*/
  const allCharacters: Character[] = await Promise.all(
    charactersURL.map(async (url) => {
      const res = await (await fetch(url)).json();
      return res;
    })
  );
  return {
    props: {
      allCharacters,
    },
  };
};

export default Characters;
