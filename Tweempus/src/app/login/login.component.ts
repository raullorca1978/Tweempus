import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from '../shared/author/author.service';

@Component({
  selector: 'tweempus-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

   userForm!: FormGroup;
   userNoExist: boolean = false

  constructor(
    private authService: AuthenticationService,
    private authorService: AuthorService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
      this.userForm= this.fb.group({
        idAuthor:['', Validators.required],
      })
  }

  logIn(form: any){
    if(this.userNoExist){
      this.userNoExist=false;
    }
    this.authorService.getAuthor(form.value.idAuthor).subscribe(
      author => this.authService.login(form.value.idAuthor),
      error => this.userNoExist = true
    );
    
  }
 

}
