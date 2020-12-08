import { Router } from '@angular/router';
import { UserService } from '../../../services/user-api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../class/custom-validators'

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
      pw: [null,[
        // 1. Password Field is Required
        Validators.required,
        // // 2. check whether the entered password has a number
        // CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        // // 3. check whether the entered spassword has upper case letter
        // CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        // // 4. check whether the entered password has a lower-case letter
        // CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        // // 5. check whether the entered password has a special character
        // CustomValidators.patternValidator(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/, { hasSpecialCharacters: true }),
        // 6. Has a minimum length of 8 characters
        Validators.minLength(6)]
      ],
      pwConfirm: [null, [Validators.required]],
      isAdmin: [''],
    },
    {
      // check whether our password and confirm password match
      validator: CustomValidators.passwordMatchValidator
   });
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


