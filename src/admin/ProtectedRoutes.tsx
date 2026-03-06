import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface Props {
  children: React.ReactNode;
  // We rename the prop to 'allowedRoles' and accept either a string or an array
  allowedRoles?: string | string[]; 
}

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/" replace />;

  try {
    const decoded: any = jwtDecode(token);
    const role = decoded.role;

    if (allowedRoles) {
      // Normalize allowedRoles to an array so we can always use .includes()
      const rolesArray = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
      
      if (!rolesArray.includes(role)) {
        return <Navigate to="/" replace />;
      }
    }

    return <>{children}</>;
  } catch (error) {
    localStorage.removeItem("token");
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;
