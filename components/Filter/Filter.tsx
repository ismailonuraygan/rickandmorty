import React, { FC, useEffect, SetStateAction } from "react";
import { Character, FilterProps } from "../../types/types";
import styles from "./filter.module.scss";

const Filter: FC<FilterProps> = ({
  setFiltered,
  status,
  setStatus,
  setPageNumber,
  allCharacters,
}) => {
  useEffect(() => {
    if (status === "All") {
      setFiltered(allCharacters);
      return;
    }
    const filteredCharacters = allCharacters.filter((character: Character) => {
      return character.status === status;
    });
    setFiltered(filteredCharacters);
    setPageNumber(0)
  }, [status]);

  return (
    <div className={styles.wrapper}>
      <h3>Filter by status:</h3>
      <div className={styles.buttonWrapper}>
        <button className={styles.allButton} onClick={() => setStatus("All")}>
          <div className={styles.allStatus}></div>
          All
        </button>
        <button className={styles.deadButton} onClick={() => setStatus("Dead")}>
          <div className={styles.deadStatus}></div>
          Dead
        </button>
        <button
          className={styles.aliveButton}
          onClick={() => setStatus("Alive")}
        >
          <div className={styles.aliveStatus}></div>
          Alive
        </button>
        <button
          className={styles.unknownButton}
          onClick={() => setStatus("unknown")}
        >
          <div className={styles.unknownStatus}></div>
          Unknown
        </button>
      </div>
    </div>
  );
};

export default Filter;
