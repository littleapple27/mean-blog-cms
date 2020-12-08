import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title: string = 'Registered Users';
  Users: any = [];
  loaded: boolean = false;
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.readUser();
  }

  readUser() {
    this.userService.getUsers().subscribe((data) => {
      this.Users = data;
      this.loaded = true;
    },
      error => {
        console.log(error);
      });
  }

  removeUser(user):void {
    console.log(user);
    console.log(user._id);
    if(window.confirm('Are you sure you want to delete user?')) {
      this.userService.deleteUser(user._id).subscribe((data) => {
        this.readUser();
        console.log(data);
        console.log(this.Users);
      },
        error => {
          console.log(error);
        });   
    }
  }

  showAdminList() {
  
  }

  showLimitedList() {
    console.log('click');
  }

}
