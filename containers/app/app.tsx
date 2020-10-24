import React from "react";
import Header from "components/header";
import Footer from "components/footer";
import styles from "./app.module.css";

interface Props {
  children: React.ReactNode;
}

function App(props: Props) {
  return (
    <div className={styles.block}>
      <Header className={styles.header} />
      {props.children}
      <Footer className={styles.footer} />
    </div>
  );
}

export default App;
