import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CoininfoService } from './coininfo.service';
import { stringify } from 'querystring';
import { analyzeAndValidateNgModules } from '@angular/compiler';

describe('CoininfoService', () => {
  beforeEach(() => 
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    }));

  it('should be created', () => {
    const service: CoininfoService = TestBed.get(CoininfoService);
    expect(service).toBeTruthy();
  });

  it('should get an object of historical prices', async(() => {
    const service: CoininfoService = TestBed.get(CoininfoService);
    service.getHistoday("BTC", 6, "EUR").subscribe((data) => {
      const result = data;
      console.log(result);
      expect(Array.isArray(result)).toBeTruthy;
      expect(typeof result).toEqual('object');
    });
  }));
});
