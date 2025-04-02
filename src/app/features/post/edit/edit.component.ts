import { Component, OnInit } from '@angular/core';
import { postService } from '../services/postService';
import { post } from '../model/post';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  imports: [HttpClientModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
  tokenUser: string = "";
  constructor(

   private postService: postService) { }
  ngOnInit(): void {
    this.createPost();
    this.updatePost();
    this.deletePost();
  }
  createPost() {
    debugger
    var post = {
      Id: 0,
      Title: "",
      Description: "",
      Image: "",
      Date: "",
      ClientId: 0
    };
    debugger

    this.postService.CreatePost(post,this.tokenUser).toPromise().then((res : any) => {
      var ok = res;

    }).catch((erro: any) => {
      debugger
      var erros = erro;
    });



  }

  updatePost() {
    debugger
    var post = {
      Id: 0,
      Title: "",
      Description: "",
      Image: "",
      Date: "",
      ClientId: 0
    };
    debugger

    this.postService.UpdatePost(post,this.tokenUser).toPromise().then((res : any) => {
      var ok = res;

    }).catch((erro: any) => {
      debugger
      var erros = erro;
    });



  }

  deletePost() {
    debugger
  
    this.postService.DeletePost(this.tokenUser).toPromise().then((res : any) => {
      var ok = res;

    }).catch((erro: any) => {
      debugger
      var erros = erro;
    });



  }
}
