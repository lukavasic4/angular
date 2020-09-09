import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { GalleryService } from 'src/app/services/gallery.service';
import { RoleService } from 'src/app/services/role.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users;
  gallery;
  roles;
  categories;
  addUserDisplay = false;
  addPostDisplay = false;
  userInsertForm: FormGroup;
  postInsertForm: FormGroup;
  selected;
  imgErr = false;
  imageToUpload;

  constructor(private userService: UserService, 
    private galleryService: GalleryService, 
    private roleService: RoleService,
    private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllFromGallery();
    this.getAllRoles();
    this.getAllCategories();
    this.selected = true;

    this.userInsertForm = new FormGroup({
      first_name: new FormControl("", [Validators.required]), //regularni izrazi Validators.pattern(string: pattern)
      last_name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      role: new FormControl("", [Validators.required, Validators.min(1)])
    });

    this.postInsertForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      desc: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required])
    });
  }

  getAllUsers(){
    this.userService.getAll().subscribe(users => {
      this.users = users;
    })
  }

  getAllFromGallery(){
    this.galleryService.getAll().subscribe(gallery => {
      this.gallery = gallery;
    })
  }

  getAllRoles(){
    this.roleService.getAll().subscribe(roles => {
      this.roles = roles;
    })
  }

  getAllCategories(){
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  displayUserForm(){
    this.addUserDisplay = !this.addUserDisplay;
  }

  displayPostForm(){
    this.addPostDisplay = !this.addPostDisplay;
  }

  userInsert(){
    if(this.userInsertForm.status === "VALID"){
      this.userService.insertUser({
        first_name_add: this.userInsertForm.value.first_name,
        last_name_add: this.userInsertForm.value.last_name,
        email: this.userInsertForm.value.email,
        password_add: this.userInsertForm.value.password,
        list: this.userInsertForm.value.role
      }).subscribe(data => {
        window.alert("Successful Inserted User!");
        this.getAllUsers();
      }, error => console.warn(error))
    }
  }

  postInsert(){
    if(this.postInsertForm.status === "VALID" && this.imageToUpload != undefined){
      let fd = new FormData();
      fd.append("add_image_post", this.imageToUpload, this.imageToUpload.name);
      fd.append("title_add", this.postInsertForm.value.title);
      fd.append("description_add", this.postInsertForm.value.desc);
      fd.append("categories_list", this.postInsertForm.value.category);

      this.galleryService.insertPost(fd).subscribe(data => {
        window.alert("Successful Inserted Post!");
        this.getAllFromGallery();
      }, error => console.warn(error))
    }
  }

  deleteUser(id){
    this.userService.deleteUser(id).subscribe(data => {
      window.alert("User Removed!");
      this.getAllUsers();
    }, error => console.log(error))
  }

  deletePost(id){
    this.galleryService.deletePost(id).subscribe(data => {
      window.alert("Successful Delete!");
      this.getAllFromGallery();
    }, error => console.log(error))
  }

  uploadImage(event){
    this.imgErr = false;
    if(event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpeg' || event.target.files[0].type === 'image/jpg'){
      this.imageToUpload = event.target.files[0];
    }
    else{
      this.imgErr = true;
    }
  }
}
