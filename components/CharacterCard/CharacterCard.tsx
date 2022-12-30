import React, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Character } from "../../types/types";
import CharacterSkeleton from "./CharacterSkeleton";

const CharacterCard = ({ data }: { data: Character }) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      console.log("loading has changed");
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <CharacterSkeleton />
      ) : (
        <Link href={`/character/${data.id}`} className={styles.link}>
          <div className={styles.wrapper}>
            <Image
              src={data.image}
              width={300}
              height={300}
              alt={data.name}
              className={styles.imageWrapper}
            />
            <div className={styles.characterName}>
              <h1>{data.name}</h1>
            </div>
            <div className={styles.subHeader}>
              {data.status === "Alive" ? (
                <div className={styles.alive}></div>
              ) : (
                ""
              )}
              {data.status === "Dead" ? (
                <div className={styles.dead}></div>
              ) : (
                ""
              )}
              {data.status === "unknown" ? (
                <div className={styles.unknown}></div>
              ) : (
                ""
              )}
              <div className={styles.types}>
                <h3>
                  {data.status} - {data.species}
                </h3>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CharacterCard;
