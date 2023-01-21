import React from "react";

const Hoc = (Component: any) => (props: any) => {
  const num = props.number * props.number;

  return <Component {...props} />;
};

export default Hoc;
