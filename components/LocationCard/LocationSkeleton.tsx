import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styles from "./index.module.scss";

const CardSkeleton = () => {
  return (
    <div className={styles.cardSkeleton}>
        <Skeleton count={4} />
    </div>
  )
}

export default CardSkeleton