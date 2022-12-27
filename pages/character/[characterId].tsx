import { useRouter } from "next/router";
import React from "react";
import Header from "../../components/Header/Header";
import OtherCharacterCard from "../../components/OtherCharacterCard/OtherCharacterCard";
import SingleCard from "../../components/SingleCard/SingleCard";
import styles from "./index.module.scss";

const CharacterId = (props) => {
  const { query } = useRouter();
  const {
    character,
    characterStatus,
    characterSpecies,
    otherCharacters,
    characterLocation,
  } = props;
  console.log(characterLocation);
  console.log(otherCharacters);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SingleCard character={character} />
        <div className={styles.otherCharacters}>
          <h1 style={{ lineHeight: "30px" }}>Other Characters</h1>
          <div className={styles.otherCharactersWrapper}>
            {otherCharacters.map((item, index) => (
              <OtherCharacterCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterId;

export async function getServerSideProps(context) {
  const { characterId } = context.query;
  console.log(characterId);
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );
  const character = await res.json();
  const characterStatus = character.status.toLowerCase();
  const characterSpecies = character.species.toLowerCase();
  const characterLocation = character.location.name
    .replace(/\s+/g, "")
    .toLowerCase();
  const otherCharacters = await (
    await fetch(
      `https://rickandmortyapi.com/api/character/?species=${characterSpecies}&status=${characterStatus}`
    )
  ).json();

  return {
    props: {
      character,
      characterStatus,
      characterSpecies,
      otherCharacters: otherCharacters.results,
      characterLocation,
    },
  };
}
