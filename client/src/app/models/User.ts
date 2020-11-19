export interface User {
  firstName: string;
  lastName: string;
  email: string;
  pw: string;
  pwConfirm: string;
  isAdmin: boolean;
  hide?: boolean;
  isActive?: boolean;
  icon?: any;
}
