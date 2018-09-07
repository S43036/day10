
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('registerForm')
  registerForm: NgForm;

  @ViewChild('nameInput')
  nameInput: NgModel;

  defValue = true;

  constructor(private route: Router,private noteSvc: NoteService) { }

  ngOnInit() { }

  processRegister(myform: NgForm) {
   // console.log('myform: ', myform.value);
    console.log('Processing Registration: ', this.registerForm.value);
    //for (let i in this.registerForm.value) {
     // console.log('i = ', i, ', v = ', this.registerForm.value[i]);
   // }
    // this.registerForm.resetForm();
   
   // Below doesn't seem to work
   // this.noteSvc
   //   .addNote(myform.value)
   //   .subscribe((result)=>{
   //     console.log(result);
    //  });
    this.route.navigate(['/confirm'])
  }

}