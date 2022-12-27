import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import Header from "../../components/Header/Header";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";
import { paginate } from "../../helpers/paginate";

const Characters = (props) => {
  const router = useRouter();
  const { locationId } = router.query;
  const { characters, allCharacters } = props;
  console.log(allCharacters, "a");
  /*Pagination*/
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  console.log(allCharacters);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedPosts = paginate(allCharacters, currentPage, itemsPerPage);
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        {paginatedPosts?.map((data, index) => (
          <CharacterCard key={index} data={data} />
        ))}
      </div>
      <Pagination
        items={allCharacters.length}
        currentPage={currentPage}
        pageSize={itemsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { locationId } = context.query;
  console.log(locationId);
  const res = await fetch(
    `https://rickandmortyapi.com/api/location/${locationId}`
  );
  const location = await res.json();
  const charactersURL = location.residents;
 
  /* All characters from specific location*/
  const allCharacters = await Promise.all(
    charactersURL.map(async (url) => {
      const res = await (await fetch(url)).json();
      return res;
    })
  );

  return {
    props: {
      characters: charactersURL,
      allCharacters,
    },
  };
}

export default Characters;
