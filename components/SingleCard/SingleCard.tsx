import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { Character } from "../../types/types";
import SingleSkeleton from "./SingleSkeleton";

const SingleCard = ({ character }: { character: Character }) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      console.log("loading has changed");
    }, 10000);
  }, []);
  console.log(character);
  return (
    <>
      {isLoading ? (
        <SingleSkeleton />
      ) : (
        <div className={styles.wrapper}>
          <Image
            src={character.image}
            alt={character.name}
            width={500}
            height={500}
          />
          <div className={styles.characterName}>
            <h1>{character.name}</h1>
          </div>
          <div className={styles.subHeader}>
            <div className={styles.statusWrapper}>
              {character.status === "Alive" ? (
                <div className={styles.alive}></div>
              ) : (
                ""
              )}
              {character.status === "Dead" ? (
                <div className={styles.dead}></div>
              ) : (
                ""
              )}
              {character.status === "unknown" ? (
                <div className={styles.unknown}></div>
              ) : (
                ""
              )}
              <div className={styles.status}>
                <h3>
                  {character.status} - {character.species}
                </h3>
              </div>
            </div>
            <div className={styles.typeWrapper}>
              {character.type.length !== 0 ? `${character.type} - ` : ""}{" "}
              {character.gender}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleCard;
