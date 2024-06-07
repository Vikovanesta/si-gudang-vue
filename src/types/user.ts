import { Laboran } from './laboran';
import { Role } from './role'
import { Student } from './student';
import { Teacher } from './teacher';

export interface User {
  id: number;
  email: string;
  phone: string;
  is_verified: boolean;
  role: Role;
  profile: Student | Teacher |Laboran | null;
}
