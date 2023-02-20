import React from "react";
import { Navigate } from "react-router-dom";
import { isPrivateIdentifier } from "typescript";

interface IPrivateRoute {
    children: React.ReactNode;
    dependency: boolean;
    route: string;
}

const PrivateRoute = ({children, dependency, route}:IPrivateRoute) => {
    if (dependency) {
        return <>{children}</>
    } return <Navigate to="route"/>
}

export default PrivateRoute;