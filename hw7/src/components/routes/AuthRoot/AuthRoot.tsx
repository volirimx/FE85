import { Navigate } from "react-router-dom"


interface IAuthRoot {
    children: React.ReactNode
    dependency : boolean
    route: string
}

const AuthRoot = ({children, dependency, route}: IAuthRoot) => {
    if (dependency) {
        return <> {children} </> 
    } else return <Navigate  to={route} />
}


export default AuthRoot