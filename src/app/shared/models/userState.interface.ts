import { User } from "../../backoffice/models/user";

export interface UserState {
  success: boolean;
  user: User;
}
