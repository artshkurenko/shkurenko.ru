import React from "react";
import cn from "classnames";
import styles from "./footer.module.css";

interface Props {
  className?: string;
}

function Footer(props: Props) {
  return (
    <div className={cn(props.className, styles.block)}>
      <div className={styles.copyright}>
        © Основан в 1996 году <span className={styles.version}>вер. 0.0.1</span>
      </div>
      <div className={styles.email}>
        <a href="mailto:artem@shkurenko.ru">artem@shkurenko.ru</a>
      </div>
    </div>
  );
}

export default Footer;
