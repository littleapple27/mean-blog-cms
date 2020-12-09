import { User } from '../../../models/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from './../../../services/user-api.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-user-pw',
  templateUrl: './user-pw.component.html',
  styleUrls: ['./user-pw.component.css']
})
export class UserPwComponent implements OnInit {
  submitted = false;
  editForm: FormGroup;
  userData: User[];

  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateUser();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getUser(id);
    this.editForm = this.fb.group({
      pw: ['', [Validators.required]],
      pwConfirm: ['', [Validators.required]],
    })
  }

  // Getter to access form control
  get myForm() {
    return this.editForm.controls;
  }

  getUser(id) {
    this.userService.getUser(id).subscribe(data => {
      this.editForm.setValue({
        pw: data['pw'],
        pwConfirm: data['pwConfirm'],
      });
    });
  }

  updateUser() {
    this.editForm = this.fb.group({
      pw: ['', [Validators.required]],
      pwConfirm: ['', [Validators.required]],    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.userService.updateUser(id, this.editForm.value)
          .subscribe(res => {
            this.router.navigateByUrl('portal/(mainView:users)');
            alert('Content updated successfully!')
          }, (error) => {
            console.log(error)
          })
      }
    }
  }


}
