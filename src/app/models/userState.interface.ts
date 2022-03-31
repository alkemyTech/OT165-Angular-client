import { User } from "../backoffice/models/user";

export interface UserState {
  isLoged: boolean;
  user: User;
}
