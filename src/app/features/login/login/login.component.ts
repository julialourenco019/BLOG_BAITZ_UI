import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
//import { AuthService } from '../../../services/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ CommonModule,ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  returnUrl: string = '';

  /*constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
   // private authService: AuthService
  ) /*{
    
   // if (this.authService.currentUserValue) {
     // this.router.navigate(['/']);
    }
  }*/

  /*ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

   
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  /*
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.login(this.f['email'].value, this.f['password'].value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate([this.returnUrl]);
        },
        error: error => {
          this.error = error.error?.message || 'Ocorreu um erro durante o login.';
          this.loading = false;
        }
      });
  }*/
}