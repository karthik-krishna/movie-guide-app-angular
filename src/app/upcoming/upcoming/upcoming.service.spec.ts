import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UpcomingService } from './upcoming.service';


describe('UpcomingService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
    }));

    it('should be created', () => {
        const service: UpcomingService = TestBed.get(UpcomingService);
        expect(service).toBeTruthy();
    });

    it('should do something async', (done) => {
        setTimeout(() => {
            expect(true).toBe(true);
            done();
        }, 2000);
    });

    it('should call get now playing movie service', (done) => {
        const service: UpcomingService = TestBed.get(UpcomingService);
        let page=1
        service.getUpcomingMovies(page).subscribe((data: any) => {
            expect(data).toBeDefined();
            done()
        }, (error) => {
            console.log(error);
        });
    });
   


});
