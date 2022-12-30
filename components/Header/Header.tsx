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
          <div className={styles.back} onClick={() => router.back()}>
            <LeftArrow />
          </div>
        ) : (
          ""
        )}
        <div className={styles.logo} onClick={() => router.replace("/")}>
          <Logo />
        </div>
      </div>
    </>
  );
};

export default Header;
