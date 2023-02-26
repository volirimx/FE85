import React, { useState } from "react";
import { Navigate } from "react-router-dom";

interface IPrivateRoute {
  children: React.ReactNode;
  dependency: boolean;
  root: string;
}

const PrivateRoute = ({children, dependency, root }: IPrivateRoute) => {
  if (dependency) {
    return <>{children}</>
  } 
  return <Navigate to={root}/>
}

export default PrivateRoute