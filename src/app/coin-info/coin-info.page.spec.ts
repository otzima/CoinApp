import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoinInfoPage } from './coin-info.page';

describe('CoinInfoPage', () => {
  let component: CoinInfoPage;
  let fixture: ComponentFixture<CoinInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoinInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
