import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Member } from '../../../shared/models/Member';
import { BaseService } from '../../../services/base.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class MemberService extends BaseService<Member> {
  constructor(http: HttpClient) {
    super(http, environment.API_URL_MEMBERS);
  }

  getMembers(): Observable<any> {
    return super.getAll();
  }
}
