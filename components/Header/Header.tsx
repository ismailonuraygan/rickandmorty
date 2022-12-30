import React from "react";
import Logo from "../../assets/icons/Logo.svg";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import LeftArrow from "../../assets/icons/leftArrow.svg";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.wrapper}>
        {router.asPath.includes("/character") ? (
          <div className={styles.back}>
            <LeftArrow onClick={() => router.back()} />
          </div>
        ) : (
          ""
        )}
        <div className={styles.logo} >
          <Logo onClick={() => router.replace("/")}/>
        </div>
      </div>
    </>
  );
};

export default Header;
