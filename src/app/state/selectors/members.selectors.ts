import { createSelector } from '@ngrx/store';
import { MemberState } from 'src/app/shared/models/membersState.interface';
import { AppState } from '../app.state';

export const selectMembersFeature = (state: AppState) => state.members;

export const selectMembersList = createSelector(
  selectMembersFeature,
  (state: MemberState) => state.members
);

export const selectLoading = createSelector(
  selectMembersFeature,
  (state: MemberState) => state.loading
);

export const selectMember = (id: number) =>
  createSelector(selectMembersFeature, (state: MemberState) =>
    state.members.find((member) => member.id == id)
  );
