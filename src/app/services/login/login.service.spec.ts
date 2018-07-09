import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { serviceErrorHandler } from '../../shared/serviceErrorHandler';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, serviceErrorHandler],
      imports: [ HttpClientModule ]
    });
  });

  it('should be created', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
