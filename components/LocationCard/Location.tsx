import React from "react";
import styles from "./index.module.scss";


const Location = ({ data }) => {
  const {id, residents} = data;
 /*  console.log(residents); */

  return (
    <>
      <div className={styles.wrapper} key={data.id}>
          <h2 className={styles.cardHeader}>{data.name}</h2>
          <div className={styles.cardContent}>
            <div className={styles.keyValue}>
              <div className={styles.key}>Type</div>
              <div className={styles.value}>: {data.type}</div>
            </div>
            <div className={styles.keyValue}>
              <div className={styles.key}>Dimension</div>
              <div className={styles.value}>: {data.dimension}</div>
            </div>
            <div className={styles.keyValue}>
              <div className={styles.key}>Resident Count</div>
              <div className={styles.value}>: {data.residents.length}</div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Location;
