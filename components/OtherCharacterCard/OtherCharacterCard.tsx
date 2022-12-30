import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import { Character } from "../../types/types";
import OtherCharacterSkeleton from './OtherCharacterSkeleton'

const OtherCharacterCard = ({ data }: { data: Character }) => {
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
        <OtherCharacterSkeleton />
      ) : (
        <div className={styles.wrapper}>
          <Image src={data.image} width={90} height={90} alt={data.name} />
          <div className={styles.content}>
            <h2>{data.name}</h2>
            <h3>{data.location.name}</h3>
            <h3>
              {data.type.length !== 0 ? `${data.type} - ` : ""} {data.gender}
            </h3>
          </div>
        </div>
      )}
    </>
  );
};

export default OtherCharacterCard;
