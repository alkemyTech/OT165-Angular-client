import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Subject } from "rxjs";
import { Observable } from "rxjs";
import { debounceTime } from "rxjs/operators";
import {
  Columns,
  TableData,
} from "src/app/backoffice/models/TableData.interface";
import { MemberService } from "src/app/backoffice/services/members/member.service";
import { Member } from "src/app/shared/models/Member";
import {
  deleteMember,
  loadMembers,
} from "src/app/state/actions/members.actions";
import { AppState } from "src/app/state/app.state";
import {
  selectLoading,
  selectMembersList,
} from "src/app/state/selectors/members.selectors";

@Component({
  selector: "app-members-list",
  templateUrl: "./members-list.component.html",
  styleUrls: ["./members-list.component.scss"],
})
export class MembersListComponent implements OnInit {
  members!: Array<Member>;
  tableMembers!: TableData;
  titlesCol: Columns[] = [
    { field: "name", header: "Nombre" },
    { field: "created_at", header: "Creado" },
  ];
  loading$: Observable<boolean> = new Observable();
  members$: Observable<Member[]> = new Observable();

  key: Subject<any> = new Subject<any>();

  constructor(
    private store: Store<AppState>,
    private membersService: MemberService
  ) {}

  ngOnInit(): void {
    this.key
      .pipe(debounceTime(500))
      .subscribe((letters: string) => this.searchMembers(letters));

    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadMembers());
    this.members$ = this.store.select(selectMembersList);
    this.members$.subscribe((res) => {
      this.getMembers(res);
    });
  }

  getMembers(data: Member[]) {
    this.tableMembers = {
      createPath: "/backoffice/members/crear",
      editPath: "/backoffice/members/editar",
      title: "Miembros",
      data,
    };
  }

  deleteMember(id: number) {
    this.store.dispatch(deleteMember({ id }));
  }

  debounce(letters: string) {
    this.key.next(letters);
  }

  searchMembers(key: string) {
    if (key.length <= 2) {
      this.membersService.getAll().subscribe((res) => {
        this.getMembers(res);
      });
    } else {
      this.membersService.getAll(key).subscribe((res) => {
        this.getMembers(res);
      });
    }
  }
}
