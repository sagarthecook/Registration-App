import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserModel } from './model/user.mode';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule,HttpClientModule],
  providers:[UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  resForm: FormGroup|any; 
  userModel : UserModel;
  isFormSubmitted:boolean=false;
  isSavePopupEnabled:boolean=false;
  genders:any[]=[];
  constructor(private us: UserService){
    this.userModel = new UserModel();
  }
 ngOnInit() { 
  this.genders =[{
    "name":"Male",
    "id":"1"
  },{
    "name":"Female",
    "id":"2"
  },
{
    "name":"Others",
    "id":"3"
  }]
 this.resForm = new FormGroup({
  firstName: new FormControl('', [Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Z ]*")]),
 lastName: new FormControl('', [Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-Z ]*")]),
 email: new FormControl('', [Validators.required, Validators.minLength(4),Validators.email]),
 age: new FormControl(0, [Validators.required, Validators.min(18)]),
 gender: new FormControl('',[Validators.required])
 });
 }

 alertDimiss(){
  this.isSavePopupEnabled=false;
 }
 submitData() {
 this.userModel = this.resForm.value;
 console.log("value"+ this.userModel);
 if(!this.resForm.invalid){
  this.us.saveData(this.userModel).subscribe((data:UserModel)=>{
    this.resForm.value = new UserModel();
    this.resForm.reset(this.resForm.value);
    this.isSavePopupEnabled=true;
    },(error:any)=>{
      console.log(error);
    });
   
 } 
 }
 onCloseClick(){
  this.isSavePopupEnabled=false;
 }
 onOkClick(){
  this.isFormSubmitted=false;
 }

 clearForm(){
  this.userModel = new UserModel();
 }

 onCancelClick(){
  this.resForm.value = new UserModel();
  this.resForm.reset(this.resForm.value)

 }

}
