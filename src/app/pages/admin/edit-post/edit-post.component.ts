import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories.service';
import { GalleryService } from 'src/app/services/gallery.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  categories;
  id;
  post;
  postEditForm: FormGroup;
  imgErr = false;
  imageToUpload;

  constructor(private categoryService: CategoriesService, 
    private galleryService: GalleryService,
    private route: ActivatedRoute) { 
      this.id = parseInt(this.route.snapshot.params['id']);
    }

  ngOnInit(): void {
    this.getAllCategories();
    this.getOnePost();

    this.postEditForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      desc: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required])
    });
  }

  getAllCategories(){
    this.categoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  getOnePost(){
    this.galleryService.getOne(this.id).subscribe(post => {
      console.log(post);
      this.post = post;
      if(post == null){
        return;
      }
      this.postEditForm = new FormGroup({
        title: new FormControl(this.post.title, [Validators.required]),
        desc: new FormControl(this.post.description, [Validators.required]),
        category: new FormControl(this.post.categories_id, [Validators.required])
      });
    })
  }

  postUpdate(){
    if(this.postEditForm.status === "VALID"){
      let fd = new FormData();
      fd.append("title_update", this.postEditForm.value.title);
      fd.append("description_update", this.postEditForm.value.desc);
      fd.append("cat_update", this.postEditForm.value.category);
      fd.append("id_gallery", this.id);

      if(this.imageToUpload != undefined){
        fd.append("image_update", this.imageToUpload, this.imageToUpload.name);
      }

      this.galleryService.updatePost(this.id, fd).subscribe(data => {
        window.alert("Successful Update");
        this.getOnePost();
      }, error => console.warn(error))
    }
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
