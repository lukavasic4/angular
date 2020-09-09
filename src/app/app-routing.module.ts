import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AuthGuard } from './auth.guard';
import { IfauthorizedGuard } from './ifauthorized.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { EditUserComponent } from './pages/admin/edit-user/edit-user.component';
import { EditPostComponent } from './pages/admin/edit-post/edit-post.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [IfauthorizedGuard]
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [IfauthorizedGuard]
  },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edit_user/:id",
    component: EditUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edit_post/:id",
    component: EditPostComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
