import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./index.module.scss";

const OtherCharacterSkeleton = () => {
  return (
    <div className={styles.skeletonWrapper}>
      <Skeleton circle width={80} height={80} />
      <div className={styles.subHead}>
        <Skeleton count={3} />
      </div>
    </div>
  );
};

export default OtherCharacterSkeleton;
