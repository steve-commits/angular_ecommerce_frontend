import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,ReactiveFormsModule,FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  form!:FormGroup
  

ngOnInit() {
  this.form=new FormGroup({
     email:new FormControl(''),
     password:new FormControl('')
  })
}

}