import { User } from "../../backoffice/models/user";

export interface UserState {
  success: boolean;
  user: User;
}

export interface UsersState {
  loading: boolean,
  users: Array<User>
}