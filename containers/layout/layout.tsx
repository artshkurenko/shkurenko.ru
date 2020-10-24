import React from "react";
import "./layout.css";

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  return props.children;
}

export default Layout;
