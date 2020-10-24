import React from "react";
import Article from "components/article";
import styles from "./error.module.css";

interface Props {
  children: React.ReactNode;
}

function Error(props: Props) {
  return <Article className={styles.block}>{props.children}</Article>;
}

export default Error;
