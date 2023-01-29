import React, { useEffect } from "react";
import Hoc from "../../HOC/Hoc";

const FuncCompa = ({ number }: any) => {
  useEffect(() => {
    console.log(number);
  }, [number]);

  return <div>{number}</div>;
};

const FuncComp = Hoc(FuncCompa);

export default FuncComp;
