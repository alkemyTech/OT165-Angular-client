import { Component, HostListener, Inject, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Slide } from "src/app/backoffice/models/slide.interface";
import { AppState } from "src/app/state/app.state";
import { selectSlidesListWithOrder } from "src/app/state/selectors/slides.selectors";
import * as actions from "src/app/state/actions/slides.actions";
import { DialogService } from "src/app/shared/components/dialog/dialog.service";
import { DOCUMENT } from "@angular/common";
import { A11y, Navigation, Pagination, Scrollbar, SwiperOptions } from "swiper";
import SwiperCore from 'swiper';
import { NewsService } from "src/app/backoffice/services/news/news.service";
import { News } from "src/app/backoffice/models/news";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {


  news: News[] = []
  isLoading!: boolean;
  slides$: Observable<Slide[]> = new Observable();
  slides: Slide[] = [];
  public showButton = false;

  public welcome: string =
    "En Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio generando procesos de crecimiento y inserción social.";

  constructor(
    private store: Store<AppState>,
    private dialogService: DialogService,
    private newService: NewsService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.store.dispatch(actions.getSlides());
  }

  ngOnInit(): void {
    this.getNews();
    this.isLoading = true;
    this.getSlides();
  }

  getSlides() {
    this.slides$ = this.store.select(selectSlidesListWithOrder);
    this.slides$.subscribe(
      (response) => {
        this.slides = response;
        this.isLoading = false;
      },
      () => {
        this.dialogService.add({
          type: "error",
          title: "Contenido no encontrado",
          detail: "No se ha encontrado el contenido",
        });
      }
    );
  }

  getNews(){
    this.newService.getAll().subscribe(res =>{
      this.news = res;
      console.log(this.news.length)
    })
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    if (
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) > 500
    ) {
      this.showButton = true;
    } else if (
      this.showButton &&
      (yOffSet ||
        this.document.documentElement.scrollTop ||
        this.document.body.scrollTop) < 500
    ) {
      this.showButton = false;
    }
  }

  onScrollTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
