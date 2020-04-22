import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from'@angular/router/testing';
import { HomePage } from './home.page';
import { CoinInfoPage } from '../coin-info/coin-info.page';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FavouritesPage } from '../favourites/favourites.page';
import { SearchPage } from '../search/search.page';
import { PortfolioPage } from '../portfolio/portfolio.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let debugEl: DebugElement;
  let htmlEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomePage,
        CoinInfoPage,
        FavouritesPage,
        PortfolioPage,
        SearchPage,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule,
        RouterTestingModule.withRoutes(
          [
            { path: 'coin-info', 
            component: CoinInfoPage},
            { path: 'favourites',
            component: FavouritesPage},
            { path: 'portfolio',
            component: PortfolioPage},
            { path: 'search',
            component: SearchPage},
          ]
        )
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  afterEach(() => {
    component = null;
    fixture.destroy();
    debugEl = null;
    htmlEl = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
