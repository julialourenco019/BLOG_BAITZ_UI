import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './features/home/home/home.component';
import { LoginComponent } from './features/login/login/login.component';
import { EditComponent } from './features/post/edit/edit.component';
import { PostListComponent } from './features/post/post-list/post-list.component';
import { AboutComponent } from './features/about/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
//import { AuthGuard } from './services/auth.guard';
export const routes: Routes = [
{
    path: 'home',
    component: HomeComponent, //canActivate: [AuthGuard] 
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'list',
    component: PostListComponent
},
{
    path: 'edit',
    component: EditComponent
},
{
    path:'about',
    component: AboutComponent
},
{
    path: 'contact',
    component: ContactComponent
},


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  

