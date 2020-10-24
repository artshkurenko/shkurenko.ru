import React from "react";
import cn from "classnames";
import styles from "./article.module.css";

interface Props {
  className?: string;
  children: React.ReactNode;
}

function Article(props: Props) {
  return (
    <article className={cn(props.className, styles.block)}>
      {props.children}
    </article>
  );
}

export default Article;
