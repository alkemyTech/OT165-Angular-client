import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { RxwebValidators } from "@rxweb/reactive-form-validators";
import { Member } from "src/app/shared/models/Member";
import { addMember, editMember } from "src/app/state/actions/members.actions";
import { AppState } from "src/app/state/app.state";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { selectMember } from "src/app/state/selectors/members.selectors";

@Component({
  selector: "app-members",
  templateUrl: "./members.component.html",
  styleUrls: ["./members.component.scss"],
})
export class MembersComponent implements OnInit {
  public image!: string;

  reg = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";

  member = <Member>{};

  title: string = "";
  button: string = "";
  id: number = 0;
  file: string = "";

  form = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(4)]],
    description: ["", [Validators.required]],
    image: [
      "",
      [
        Validators.required,
        RxwebValidators.extension({ extensions: ["png", "jpg"] }),
      ],
    ],
    facebookUrl: ["", [Validators.required, Validators.pattern(this.reg)]],
    linkedinUrl: ["", [Validators.required, Validators.pattern(this.reg)]],
  });
  loading$: Observable<boolean> = new Observable();
  members$: Observable<Member | undefined> = new Observable();

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.title = "Editar";
      this.button = "Guardar cambios";
      this.id = id;
      this.getMember(id);
    } else {
      this.title = "Crear";
      this.button = "Crear usuario";
    }
  }

  getMember(id: number) {
    this.members$ = this.store.select(selectMember(id));
    this.members$.subscribe((res: any) => {
      this.member = res;
      this.setForm(this.member);
      if (this.member.image) {
        this.file = this.member.image;
      }
    });
  }

  setForm(member: Member) {
    this.form.setValue({
      name: member.name,
      description: member.description,
      facebookUrl: member.facebookUrl,
      image: member.image,
      linkedinUrl: member.linkedinUrl,
    });
  }

  onUpload(event: any, fileUploader: any) {
    let file = event.files[0];
    let pattern = /image-*/;
    let reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert("invalid format");
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
    fileUploader.clear();
  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.file = reader.result;
    this.form.patchValue({ image: this.file });
  }

  submit() {
    if (this.form.valid) {
      if (this.id != 0) {
        delete this.form.value.image;
        this.store.dispatch(editMember({id :this.id, member: this.form.value }));
      } else {
        this.store.dispatch(addMember({ member: this.form.value }));
      }
    }
  }
}
