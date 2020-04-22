import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { SearchPage } from './search.page';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchPage', () => {
  let component: SearchPage;
  let fixture: ComponentFixture<SearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule,
        RouterTestingModule.withRoutes([
          {path: 'search', component: SearchPage}
        ])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
