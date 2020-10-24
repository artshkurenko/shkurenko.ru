import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cn from "classnames";
import Logo from "elements/logo";
import Nav from "components/nav";
import styles from "./header.module.css";

interface Props {
  className?: string;
}

function Header(props: Props) {
  const router = useRouter();

  return (
    <div className={cn(props.className, styles.block)}>
      <a
        href={router.pathname === "/" ? undefined : "/"}
        className={styles.logo}
      >
        <Logo />
      </a>
      <Nav className={styles.nav} />
      <Link href="/cv/">
        <a className={styles.cv}>
          <abbr title="Резюме">CV</abbr>
        </a>
      </Link>
    </div>
  );
}

export default Header;
