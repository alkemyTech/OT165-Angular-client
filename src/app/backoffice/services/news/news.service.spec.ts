import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";

import { NewsService } from "./news.service";

describe("NewsService", () => {
  let service: NewsService;
  let httpSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NewsService);
    httpSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    service = new NewsService(httpSpy as any);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("Debe retornar una novedad", (done: DoneFn) => {
    const newId = 2045;
    const aNew: any = {
        id: 2045,
        name: "Prueba en Demo 1",
        slug: null,
        content:
          "<p><strong>Hola,</strong></p><p>Esto es una&nbsp;prueba&nbsp;<i>saa</i></p>",
        image: "http://ongapi.alkemy.org/storage/8ViVpAiI6D.jpeg",
        user_id: null,
        category_id: 1990,
        created_at: "2022-04-15T19:21:47.000000Z",
        updated_at: "2022-04-19T14:24:53.000000Z",
        deleted_at: null,
        group_id: null,
      }

    httpSpy.get.and.returnValue(of(aNew));

    service.getNews(newId).subscribe((res) => {
      expect(res).toEqual(aNew);
      done();
    });
  });
});
