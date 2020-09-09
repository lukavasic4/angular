import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderModule } from './template/header/header.module';
import { FooterComponent } from './template/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { GalleryModule } from './pages/gallery/gallery.module';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { EditUserComponent } from './pages/admin/edit-user/edit-user.component';
import { EditPostComponent } from './pages/admin/edit-post/edit-post.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    HomeComponent,
    EditUserComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HeaderModule,
    GalleryModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
