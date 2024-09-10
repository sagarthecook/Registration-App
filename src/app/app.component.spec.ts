import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UserModel } from './model/user.mode';

let userService: UserService;
let userDetails : UserModel;
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers:[UserService]
    }).compileComponents();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('form submitted',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.isFormSubmitted = true;
    fixture.detectChanges();
    expect(app.isFormSubmitted).toEqual(true);
  })

  it('User Service check',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const userService = TestBed.get(UserService);
    expect(userService).toBeTruthy();
  })

  it('User Service saveData', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const userService =  fixture.componentRef.injector.get(UserService);
    fixture.detectChanges();
    component.submitData();
    
    userService.saveData(userDetails).subscribe(data=>{
      expect(data).toBeTruthy();
    });
  })

    it('Total Input fields in form',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const formEle = fixture.debugElement.nativeElement.querySelector('#resForm');
    const inputFields = formEle.querySelectorAll('input');
    expect(inputFields.length).toBe(4);
  })
  it('Total Input fields in formFistNameField',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const formFistNameField = fixture.debugElement.nativeElement.querySelector('#resForm').querySelectorAll('input')[0];
    const firstName =component.resForm.get('firstName');
    expect(firstName.value).toBe('');
  })

  it('FistName field',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    let firstName = component.resForm.controls['firstName'];
    expect(firstName.valid).toBeFalse();
    expect(firstName.errors['required']).toBeTruthy();
  })

  it('FistName field value',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    let firstName = component.resForm.controls['firstName'];
    firstName.setValue('test');
    expect(firstName.valid).toBeTruthy();
  })
  it('FistName invalid value',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    let firstName = component.resForm.controls['firstName'];
    firstName.setValue('@@@');
    expect(firstName.valid).toBeFalsy();
  })
  it('email invalid value',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    let firstName = component.resForm.controls['email'];
    firstName.setValue('@@@');
    expect(firstName.valid).toBeFalsy();
  })
  it('lastName field',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    let firstName = component.resForm.controls['lastName'];
    expect(firstName.valid).toBeFalse();
    expect(firstName.errors['required']).toBeTruthy();
  })

  it('email field',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    let firstName = component.resForm.controls['email'];
    expect(firstName.valid).toBeFalse();
    expect(firstName.errors['required']).toBeTruthy();
  })
  // it('Initial Form value',()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const component = fixture.componentInstance;
  //   const resForm = component.resForm;
  //   const initformValue={
  //     firstName:'',
  //     lastName:'',
  //     age:0,
  //     email:'',
  //     gender:''
  //   }
  //   expect(resForm.value).toEqual(initformValue);

  // })

  // it('Sign up title',()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const component = fixture.componentInstance;
  //   expect(fixture.nativeElement.querySelector('<h2>')).toBeTruthy();
  // })
  // it('Sign up - firstName',()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const component = fixture.componentInstance;
  //   expect(fixture.nativeElement.querySelector('<h2>')).toBeTruthy();
  // })

});
