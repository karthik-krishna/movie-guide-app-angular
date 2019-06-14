import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingComponent } from './upcoming.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('UpcomingComponent', () => {
  let component: UpcomingComponent;
  let fixture: ComponentFixture<UpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingComponent ],
      imports:[FormsModule,PaginationModule.forRoot(),SharedModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(function() {
    let timerCallback = jasmine.createSpy("fixture");
    jasmine.clock().install();
  });
  
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should display list or grid view based on params', () => {
    let param='list'
    component.listandGridView(param);
    if (param=='list') {
      expect(component.listView).toBeTruthy();
    }else{
      expect(component.listView).toBeFalsy();
    }
  });

  it('should hide contents if showspinner is false', () => {
    component.ngOnInit();
    setTimeout(() => {
      fixture.detectChanges();
      expect(fixture.debugElement.query(By.css('.loader'))).toBeUndefined();
    }, 1510); 
});

});
