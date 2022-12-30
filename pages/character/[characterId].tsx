/* Hooks */
import { useRouter } from "next/router";
import React from "react";

/* Components */
import Header from "../../components/Header/Header";
import OtherCharacterCard from "../../components/OtherCharacterCard/OtherCharacterCard";
import SingleCard from "../../components/SingleCard/SingleCard";

/* Style */
import styles from "./index.module.scss";

/* Types */
import { Character } from "../../types/types";
import { GetServerSideProps, NextPage } from "next";

const CharacterId = ({
  character,
  otherCharacters,
}: {
  character: Character;
  otherCharacters: Character[];
}) => {
  const { query } = useRouter();



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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { characterId } = context.query;

  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );
  const character: Character = await res.json();
  const characterStatus = character.status.toLowerCase();
  const characterSpecies = character.species.toLowerCase();
  const otherCharacters = await (
    await fetch(
      `https://rickandmortyapi.com/api/character/?species=${characterSpecies}&status=${characterStatus}`
    )
  ).json();

  return {
    props: {
      character,
      otherCharacters: otherCharacters.results,
    }
  };
};
