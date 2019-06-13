import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ListingService } from './listing-component.service';


describe('ListingService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
    }));

    it('should be created', () => {
        const service: ListingService = TestBed.get(ListingService);
        expect(service).toBeTruthy();
    });

    it('should do something async', (done) => {
        setTimeout(() => {
            expect(true).toBe(true);
            done();
        }, 2000);
    });

    it('should call get now playing movie service', (done) => {
        const service: ListingService = TestBed.get(ListingService);
        let page=1
        service.getNowplayingMovies(page).subscribe((data: any) => {
            expect(data).toBeDefined();
            done()
        }, (error) => {
            console.log(error);
        });
    });

    it('should call get movie based on search service', (done) => {
        const service: ListingService = TestBed.get(ListingService);
        let query='avengers';
        let page=1;
        service.getMovies(query,page).subscribe((data: any) => {
            expect(data).toBeDefined();
            expect(data.page).toBe(1);
            let title=(data.results[0].title).toLowerCase();
            expect(title).toContain('avengers');
            done()
        }, (error) => {
            console.log(error);
        });
    });

   


});
