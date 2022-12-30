import React, { useEffect, useState } from "react";
import { LocationType } from "../../types/types";
import CardSkeleton from "./LocationSkeleton";
import styles from "./index.module.scss";


const Location = ({ data }: {data : LocationType}) => {
  const [isLoading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
      console.log("loading has changed")
    }, 1000)
  },[])
  return (
    <>
    {isLoading ? <CardSkeleton/>: 
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
    }
    </>
  );
};

export default Location;
