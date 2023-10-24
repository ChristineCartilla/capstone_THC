import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = (token) => {
    let auth = sessionStorage.getItem("accountId")

    return(
        auth? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes