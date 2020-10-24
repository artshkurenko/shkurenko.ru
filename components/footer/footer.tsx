import React from "react";
import cn from "classnames";
import styles from "./footer.module.css";

interface Props {
  className?: string;
}

function Footer(props: Props) {
  return (
    <div className={cn(props.className, styles.block)}>
      Основан в 1996 году <span className={styles.version}>вер. 0.0.1</span>
    </div>
  );
}

export default Footer;
