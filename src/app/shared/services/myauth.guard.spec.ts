import { TestBed, async, inject } from '@angular/core/testing';

import { MyauthGuard } from './myauth.guard';

describe('MyauthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyauthGuard]
    });
  });

  it('should ...', inject([MyauthGuard], (guard: MyauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
