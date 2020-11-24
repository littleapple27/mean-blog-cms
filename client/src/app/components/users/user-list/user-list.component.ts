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
  
  constructor(private userService: UserService) { 
    this.readUser();
  }

  ngOnInit(): void {
  }

  readUser() {
    this.userService.getUsers().subscribe((data) => {
      this.Users = data;
    })    
  }

  removeUser(user, index) {
    if(window.confirm('Are you sure you want to delete user?')) {
        this.userService.deleteUser(user._id).subscribe((data) => {
          this.Users.splice(index, 1);
        }
      )    
    }
  }


}
