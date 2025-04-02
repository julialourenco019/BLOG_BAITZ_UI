import { Component, OnInit } from '@angular/core';
import { postService } from '../services/postService';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router , Route} from '@angular/router';
import { FormGroup , FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-post-list',
  imports: [HttpClientModule, ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  tokenUser: string = "";
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public postservice: postService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createToken()
  {
    this.postservice.CreateToken().toPromise().then((res : any)=>{
      //debugger
       this.tokenUser = res;
    })
 // this.listPost();
  
  }

  /*listPost()
  {
    this.postservice.ListPost(this.tokenUser).toPromise().then((post: any)=>{
      debugger
     var listPost = post;
  }).catch((erro: any) =>{
   debugger
    var erros = erro;
  });
  
  }*/

}
