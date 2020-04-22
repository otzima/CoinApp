import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CryptolistService } from './cryptolist.service';
import { ExpectedConditions } from 'protractor';

describe('CryptolistService', () => {
  beforeEach(() => 
  TestBed.configureTestingModule({
    imports: [ 
      HttpClientModule
    ],
  }));

  it('should be created', () => {
    const service: CryptolistService = TestBed.get(CryptolistService);
    expect(service).toBeTruthy();
  });

  it('should get a list of all coins', async(() => {
    const service: CryptolistService = TestBed.get(CryptolistService);
    service.getAllCoins().subscribe((data) => {
      const result = data;
      console.log(result);
      expect(Array.isArray(result)).toBeTruthy;
      expect(typeof result).toEqual('object');
    });
  }));

  it('should get a list with selected amount of coins (amt=10)', async(() => {
    const service: CryptolistService = TestBed.get(CryptolistService);
    service.prefGetCoins(10, "EUR").subscribe((data) => {
      const result = data;
      console.log(result);
      expect(Array.isArray(result)).toBeTruthy;
      expect(typeof result).toEqual('object');
    });
  }));
});
