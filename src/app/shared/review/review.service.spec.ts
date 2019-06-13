import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReviewService } from './review.service';


describe('ReviewService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
    }));

    it('should be created', () => {
        const service: ReviewService = TestBed.get(ReviewService);
        expect(service).toBeTruthy();
    });

    it('should do something async', (done) => {
        setTimeout(() => {
            expect(true).toBe(true);
            done();
        }, 2000);
    });

    it('should call get now playing movie service', (done) => {
        const service: ReviewService = TestBed.get(ReviewService);
        let id = 320288;
        let page=1
        service.getMovieReview(id,page).subscribe((data: any) => {
            expect(data).toBeDefined();
            expect(data.id).toBe(320288);
            done()
        }, (error) => {
            console.log(error);
        });
    });
   


});
