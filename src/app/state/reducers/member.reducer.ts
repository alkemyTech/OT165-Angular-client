import { createReducer, on } from '@ngrx/store';
import { MemberState } from 'src/app/shared/models/membersState.interface';
import {
  addMember,
  addedMember,
  deleteMember,
  deletedMember,
  loadedMembers,
  loadMembers,
  editMember,
  editedMember,
  errorMember,
} from '../actions/members.actions';

export const initialState: MemberState = { loading: false, members: [] };

export const membersReducer = createReducer(
  initialState,
  on(loadMembers, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedMembers, (state, { members }) => {
    return { ...state, loading: false, members };
  }),
  on(deleteMember, (state) => {
    return { ...state, loading: true };
  }),
  on(deletedMember, (state, { id }) => {
    const updatedMembers = state.members.filter((member) => member.id !== id);
    return {
      ...state,
      loading: false,
      members: updatedMembers,
    };
  }),
  on(editMember, (state) => {
    return { ...state, loading: true };
  }),
  on(editedMember, (state, { member }) => {
    return {
      ...state,
      loading: false,
      members: [
        ...state.members.map((m) => {
          if (m.id == member.id) {
            return member;
          } else {
            return m;
          }
        }),
      ],
    };
  }),
  on(addMember, (state) => {
    return { ...state, loading: true };
  }),
  on(addedMember, (state, { member }) => {
    const updatedMembers = [...state.members, member];
    return {
      ...state,
      loading: false,
      users: updatedMembers,
    };
  }),

  on(errorMember, (state) => {
    return {
      ...state,
      loading: false
    };
  })
);
