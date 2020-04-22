import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CoininfoService } from '../coininfo.service';
import { CoinInfoPage } from './coin-info.page';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('CoinInfoPage', () => {
  let component: CoinInfoPage;
  let fixture: ComponentFixture<CoinInfoPage>;
  let debugEl: DebugElement;
  let htmlEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinInfoPage ],
      imports: [
        HttpClientModule
      ],
    }).compileComponents();
  }));

  beforeEach(inject([CoininfoService],(coininfoService) => {
    const coin: any = {
      'name' : 'Test name',
      'value' : 1,
      'urlToImage': 'Test.jpg'
    }
    coininfoService.currentCoininfo = coin;
    fixture = TestBed.createComponent(CoinInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  afterEach(() =>{
    component = null;
    fixture.destroy();
    debugEl : null;
    htmlEl : null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should contain a name'), () => {
    debugEl = fixture.debugElement.query(By.css('ion-card-title'));
    htmlEl = debugEl.nativeElement;
    expect(htmlEl.textContent).toContain('Test');
  }

});
