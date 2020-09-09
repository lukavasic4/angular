import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { RoleService } from 'src/app/services/role.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  roles;
  id;
  user;
  userEditForm: FormGroup;

  constructor(private userService: UserService, 
    private roleService: RoleService, 
    private route: ActivatedRoute, 
    private router: Router) { 

    this.id = parseInt(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.getAllRoles();
    this.getOneUser();

    this.userEditForm = new FormGroup({
      first_name: new FormControl("", [Validators.required]), //regularni izrazi Validators.pattern(string: pattern)
      last_name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      role: new FormControl("" , [Validators.required, Validators.min(1)])
    });
  }

  getAllRoles(){
    this.roleService.getAll().subscribe(roles => {
      this.roles = roles;
    })
  }

  getOneUser(){
    this.userService.getOne(this.id).subscribe(user => {
      this.user = user;
      if(this.user == null){
        return;
      }
      console.log(this.user);
      this.userEditForm = new FormGroup({
        first_name: new FormControl(this.user.first_name, [Validators.required]), //regularni izrazi Validators.pattern(string: pattern)
        last_name: new FormControl(this.user.last_name, [Validators.required]),
        email: new FormControl(this.user.email, [Validators.required, Validators.email]),
        password: new FormControl("", [Validators.required]),
        role: new FormControl(this.user.uloga == "Admin" ? 1 : 2 , [Validators.required, Validators.min(1)])
      });
    })
  }

  userUpdate(){
    if(this.userEditForm.status === "VALID"){
      this.userService.updateUser(this.id, {
        id_update: this.id,
        first_name_update: this.userEditForm.value.first_name,
        last_name_update: this.userEditForm.value.last_name,
        email_update: this.userEditForm.value.email,
        password_update: this.userEditForm.value.password,
        list_update: this.userEditForm.value.role
      }).subscribe(data => {
        alert("Successful update");
        this.getOneUser();
      }, error => console.warn(error))
    }
  }
}
