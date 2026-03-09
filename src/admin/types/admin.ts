export type AdminRole = "admin" | "superadmin";

export interface Admin {
  _id: string;
  name: string;
  email: string;
  role: AdminRole;
  token: string;
}