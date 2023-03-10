import { useAuthContext } from '../../context/AuthProvider';
import { setHeader } from '../../utils/token'
import {
    useLocation,
    Navigate
} from "react-router-dom";
const RequireAuth = ({ children, role }: { children: JSX.Element, role?: String[] }) => {
    let auth = useAuthContext();
    let location = useLocation();
    if (!auth.getTokenAuth()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (role && !role.includes(auth.getRole())) {
        return <Navigate to="/" state={{ from: location }} replace />;

    }
    setHeader(localStorage.getItem('token') || '')

    return children;
}
export default RequireAuth