import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[FormsModule,ReactiveFormsModule,PaginationModule.forRoot(),SharedModule,HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('pagination should work based on search or without search query', () => {
    let event={
      page:2
    }
    component.pageChanged(event);
    if (component.nowplaying) {
      expect(component.page).toBe(event.page)
    }else{
      expect(component.pageSearch).toBe(event.page)

    }
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


});
