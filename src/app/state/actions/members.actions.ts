import { createAction, props } from '@ngrx/store';
import { Member } from 'src/app/shared/models/Member';

export const loadMembers = createAction('[Members List] Load members');

export const loadedMembers = createAction(
  '[Members List] Loaded members',
  props<{ members: Member[] }>()
);

export const deleteMember = createAction(
  '[Members List] Delete members',
  props<{ id: number }>()
);

export const deletedMember = createAction(
  '[Members List] Delete members success',
  props<{ id: number }>()
);

export const editMember = createAction(
  '[Members List] Edit members',
  props<{ member: Member }>()
);

export const editedMember = createAction(
  '[Members List] Edit members success',
  props<{ member: Member }>()
);

export const addMember = createAction(
  '[Members List] Add members',
  props<{ member: Member }>()
);

export const addedMember = createAction(
  '[Members List] Add members success',
  props<{ member: Member }>()
);
