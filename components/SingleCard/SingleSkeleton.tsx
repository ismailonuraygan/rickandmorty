import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./index.module.scss";

const SingleSkeleton = () => {
  return (
    <div className={styles.singleSkeleton}>
      <Skeleton circle className={styles.skeletonImg} />
      <div className={styles.subHead}>
        <Skeleton count={2} className={styles.skeletonRow}/>
      </div>
    </div>
  );
};

export default SingleSkeleton;
