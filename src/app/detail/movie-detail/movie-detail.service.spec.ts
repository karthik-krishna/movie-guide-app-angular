import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Detailservice } from './movie-detail.service';


describe('Detailservice', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
    }));

    it('should be created', () => {
        const service: Detailservice = TestBed.get(Detailservice);
        expect(service).toBeTruthy();
    });

    it('should do something async', (done) => {
        setTimeout(() => {
            expect(true).toBe(true);
            done();
        }, 2000);
    });

    it('should call get movie detail service', (done) => {
        const service: Detailservice = TestBed.get(Detailservice);
        let id = 320288;
        service.getMovieDetails(id).subscribe((data: any) => {
            expect(data).toBeDefined();
            expect(data.id).toBe(320288);
            done()
        }, (error) => {
            console.log(error);
        });
    });

    it('should call get similar movie service', (done) => {
        const service: Detailservice = TestBed.get(Detailservice);
        let id = 320288;
        service.getSimilarMovies(id).subscribe((data: any) => {
            expect(data).toBeDefined();
            done()
        }, (error) => {
            console.log(error);
        });
    });

    it('should call get movie credits service', (done) => {
        const service: Detailservice = TestBed.get(Detailservice);
        let id = 320288;
        service.getMovieCredits(id).subscribe((data: any) => {
            expect(data).toBeDefined();
            expect(data.id).toBe(320288);
            done()
        }, (error) => {
            console.log(error);
        });
    });


});
