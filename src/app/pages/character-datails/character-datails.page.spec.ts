import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterDatailsPage } from './character-datails.page';

describe('CharacterDatailsPage', () => {
  let component: CharacterDatailsPage;
  let fixture: ComponentFixture<CharacterDatailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDatailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
