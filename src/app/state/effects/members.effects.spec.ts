import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { addedMember, addMember } from '../actions/members.actions';
import { MembersEffects } from './members.effects';
import { MemberService } from 'src/app/backoffice/services/members/member.service';
import { TestScheduler } from 'rxjs/testing';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

describe('MembersEffects', () => {    
    const initialState = { loading: false, members: [] };
    const membersService = jasmine.createSpyObj('MemberService', [
        'putById',
        'post',
    ]);
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let serviceMember: MemberService;
    let effects: MembersEffects;
    let actions$ = new Observable<Action>();
    let store: MockStore<any>;
    let testScheduler;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule.forRoot([])],
            providers: [
                MembersEffects,
                provideMockStore({ initialState }),
                provideMockActions(() => actions$),
                { provide: MemberService, useValue: membersService }
            ]
        });
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
        serviceMember = new MemberService(httpClientSpy);
    
        effects = TestBed.inject(MembersEffects);
        store = TestBed.inject(MockStore);
        store.setState({});
    
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });    

    it('Debe existir el servicio "MembersEffects"', () => {
        expect(effects).toBeTruthy();
    });
})