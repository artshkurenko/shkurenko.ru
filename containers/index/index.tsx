import React from "react";
import Head from "next/head";
import styles from "./index.module.css";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Index = (props: Props) => {
  return (
    <div className={styles.block}>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      {props.children}
    </div>
  );
};

export default Index;
