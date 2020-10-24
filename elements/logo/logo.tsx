import React from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import styles from "./logo.module.css";

interface Props {
  className?: string;
}

function Logo(props: Props) {
  const router = useRouter();
  const TagName = router.pathname === "/" ? "h1" : "span";

  return (
    <TagName className={cn(props.className, styles.block)}>
      Артём
      <br />
      Шкуренко
    </TagName>
  );
}

export default Logo;
