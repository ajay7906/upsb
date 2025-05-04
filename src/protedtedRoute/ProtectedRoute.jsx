import { useAuth } from "../context/AuthContext"

export const ProtectedRoute = ({children}) => {
    const {authToken} = useAuth();
    if(!authToken){
        return <Navigate to="/login" />
    }
    return children;
};