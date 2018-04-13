import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('signinForm') signinForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.signinForm.valid) {
      console.log(this.signinForm.value);
    }
  }
}
