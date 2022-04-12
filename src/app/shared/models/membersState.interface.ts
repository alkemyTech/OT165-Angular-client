import { Member } from './Member';

export interface MemberState {
  loading: boolean;
  members: Array<Member>;
}
