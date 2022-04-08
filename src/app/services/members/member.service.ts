import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';
import { Member } from 'src/app/shared/models/Member';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MemberService extends BaseService<Member> {
  constructor(http: HttpClient) {
    super(http, environment.API_URL_MEMBERS);
  }

  getMembers(): Observable<any> {
    return this.getAll();
  }
}
