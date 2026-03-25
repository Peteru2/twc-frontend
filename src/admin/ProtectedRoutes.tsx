import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useApi from "./hooks/useApi";
import apiClient from "./api/apiClients";

interface Props {
  children: React.ReactNode;
  allowedRoles?: string | string[];
}

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const { request } = useApi();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        
        const res = await request(() => apiClient.get("/admin/me"));

        if (allowedRoles) {
          const rolesArray = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
          if (!rolesArray.includes(res.role)) {
            setAuthorized(false);
            return;
          }
        }

        setAuthorized(true); 
      } catch (err) {
        setAuthorized(false);
      }
    };

    checkAuth();
  }, []);

  if (authorized === null) return <div>Loading...</div>; 
  if (!authorized) return <Navigate to="/" replace />; 

  return <>{children}</>;
};

export default ProtectedRoute;