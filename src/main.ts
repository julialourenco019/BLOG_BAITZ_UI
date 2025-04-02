import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './app/features/login/login/login.component';
import { provideHttpClient } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/features/home/home/home.component';
import { RouterModule } from '@angular/router';
import { EditComponent } from './app/features/post/edit/edit.component';
import { AboutComponent } from './app/features/about/about/about.component';
import { ContactComponent } from './app/features/contact/contact.component';
import { JwtInterceptor } from './app/services/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: 'home', component: HomeComponent },
      {path: 'login', component: LoginComponent},
      {path: 'edit', component: EditComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent}
   
    ])
  ]
}).catch(err => console.error(err));

// { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
