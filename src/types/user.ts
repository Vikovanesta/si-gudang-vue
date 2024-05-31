export interface User {
  id: number;
  name: string;
  email: string;
  merchant_logo: string;
  profile: {
    id: number;
    name: string;
    merchant_logo: string;
  };
  level: {
    id: number;
    name: string;
    icon: string;
  };
  status: {
    id: number;
    name: string;
    icon: string;
    color: string;
  };
}
