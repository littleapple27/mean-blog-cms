import { Router } from '@angular/router';
import { UserService } from '../../../services/user-api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var jQuery: any;

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  submitted = false;
  title: string = "Authorized Users";
  public userCreateForm: FormGroup;
  showExtended: boolean = false;
  loaded: boolean = false;
  showUserCreateForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private userService: UserService
  )
  { 
    this.mainForm();
  }

  ngOnInit(): void { 
    // (function ($) {
    //   $('input[type="checkbox"]').on('change', function () {
    //     $('input[type="checkbox"]').not(this).prop('checked', false);
    //   });
    // }) (jQuery)
   }


 mainForm() {
    this.userCreateForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      pw: ['', [Validators.required]],
      pwConfirm: ['', [Validators.required]],
      isAdmin: [''],
    })
 }
  

   // Getter to access form control
   get myForm(){
    return this.userCreateForm.controls;
  }


  onSubmit() {
    this.submitted = true;
    //console.log("submit button has been clicked.");
    if (!this.userCreateForm.valid) {
      return false;
    } else {
      this.userService.createUser(this.userCreateForm.value).subscribe(
        (res) => {
          console.log('User successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('portal/(mainView:users)'))
        }, (error) => {
          console.log(error);
      });
    }
  }

}


