import { Role } from './role'

export interface User {
  id: number;
  email: string;
  phone: string;
  is_verified: boolean;
  role: Role;
}
