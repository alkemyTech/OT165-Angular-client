import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  Columns,
  TableData,
} from 'src/app/backoffice/models/TableData.interface';
import { Member } from 'src/app/shared/models/Member';
import {
  deleteMember,
  loadMembers,
} from 'src/app/state/actions/members.actions';
import { AppState } from 'src/app/state/app.state';
import {
  selectLoading,
  selectMembersList,
} from 'src/app/state/selectors/members.selectors';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss'],
})
export class MembersListComponent implements OnInit {
  members!: Array<Member>;
  tableMembers!: TableData;
  titlesCol: Columns[] = [
    { field: 'name', header: 'Nombre' },
    { field: 'created_at', header: 'Creado' },
  ];
  loading$: Observable<boolean> = new Observable();
  members$: Observable<Member[]> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadMembers());
    this.members$ = this.store.select(selectMembersList);
    this.getMembers();
  }

  getMembers() {
    this.members$.subscribe((res) => {
      this.tableMembers = {
        createPath: '/backoffice/members/crear',
        editPath: '/backoffice/members/editar',
        title: 'Miembros',
        data: res,
      };
    });
  }

  deleteMember(id: number) {
    this.store.dispatch(deleteMember({ id: id }));
  }
}
