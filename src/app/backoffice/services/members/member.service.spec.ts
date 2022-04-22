import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { MemberService } from 'src/app/services/members/member.service';
import { of } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { Member } from 'src/app/shared/models/Member';
import { debounceTime } from 'rxjs/operators';

fdescribe('MemberService', () => {
    let httpClientSpy: jasmine.SpyObj<HttpClient>;
    let memberService: MemberService;
  
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule, HttpClientModule ],
            providers: [ MemberService, BaseService, HttpClient ]
        })
        .compileComponents();
    
        memberService = TestBed.inject(MemberService);
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
        memberService = new MemberService(httpClientSpy);
    });

    fit('Debe crearse el servicio MemberService', () => {
        expect(memberService).toBeTruthy();
    })
    
    fit('Debe retornar un miembro valido', (done: DoneFn) => {
        const mockMember = {
            name: "Sabrina Luna",
            description: "Abogada",
            image: "data:image/jpeg;base64",
            facebookUrl: "www.facebook.com.ar/sabrina-luna",
            linkedinUrl: "www.linkedin.com.ar/sabrina-luna"
        }
        
        const mockResultMember: Member = {
            "id": 682,
            "name": "Sabrina Luna",
            "description": "<p>Abogada</p>",
            "image": "http://ongapi.alkemy.org/storage/itiVpGFDcs.jpeg",
            "facebookUrl": "www.facebook.com/sabrina-luna",
            "linkedinUrl": "www.linkedin.com/sabrina-luna"
        }
      
        httpClientSpy.post.and.returnValue(of(mockResultMember));
      
        memberService.post(mockMember)
        .subscribe( (response) => {
            console.log("Hola Mundo")
            console.log(response)
            expect(response).toEqual(mockResultMember)
            done()
        });
    });
});