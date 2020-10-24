import React from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./nav.module.css";

interface Props {
  className?: string;
}

function Nav(props: Props) {
  return (
    <div className={cn(props.className, styles.block)}>
      <Link href={"/flow/"}>
        <a>Поток</a>
      </Link>
      <Link href={"/debt/"}>
        <a>Склад</a>
      </Link>
      <Link href={"/"}>
        <a>Дела</a>
      </Link>
    </div>
  );
}

export default Nav;
