import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./index.module.scss";

const CharacterSkeleton = () => {
  return (
    <div className={styles.characterSkeleton}>
      <Skeleton circle width={300} height={300} />
      <div className={styles.subHead}>
        <Skeleton count={2} />
      </div>
    </div>
  );
};

export default CharacterSkeleton;
