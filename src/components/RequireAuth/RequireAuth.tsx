import { setHeader } from '../../utils/token'
import {
    useLocation,
    Navigate
} from "react-router-dom";
import { useAuthContext } from '../../context/AuthProvider'
const RequireAuth = ({ children }: { children: JSX.Element }) => {
    let auth = useAuthContext();
    let location = useLocation();
    if (!auth.getTokenAuth()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    setHeader(localStorage.getItem('token') || '')

    return children;
}
export default RequireAuth