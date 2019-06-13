import { TestBed } from '@angular/core/testing';
import { ApiServiceService } from './baseUrl';


describe('ApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiServiceService = TestBed.get(ApiServiceService);
    expect(service).toBeTruthy();
  });

  it('should return base url', () => {
    const service: ApiServiceService = TestBed.get(ApiServiceService);
    expect(service.baseURL()).toBe('https://api.themoviedb.org/3');
  });

  it('should return image base url', () => {
    const service: ApiServiceService = TestBed.get(ApiServiceService);
    expect(service.baseImageURL()).toBe('https://image.tmdb.org/t/p');
  });

});
