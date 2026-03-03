import {
  createContext,
  useContext,
  useState,
} from "react";
import type { ReactNode } from "react";
import type { Admin } from "./types/admin";

interface AdminAuthContextType {
  admin: Admin | null;
  login: (data: Admin) => void;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined
);

export const AdminAuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [admin, setAdmin] = useState<Admin | null>(
    JSON.parse(localStorage.getItem("admin") || "null")
  );

  const login = (data: Admin) => {
    localStorage.setItem("admin", JSON.stringify(data));
    setAdmin(data);
  };

  const logout = () => {
    localStorage.removeItem("admin");
    setAdmin(null);
  };

  return (
    <AdminAuthContext.Provider value={{ admin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context)
    throw new Error("useAdminAuth must be used inside AdminAuthProvider");
  return context;
};