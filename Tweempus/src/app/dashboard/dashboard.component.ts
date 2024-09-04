import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../shared/author/author.service';
import { Twimp } from '../shared/twimp/twimp.model';
import { TwimpService } from '../shared/twimp/twimp.service';
import { Observable,from } from 'rxjs';
import 'rxjs/add/observable/from';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit{

  twimpList: Twimp[] = [];

  constructor(
    private authorService: AuthorService,
    private twimpService: TwimpService,
    private authService: AuthenticationService

  ){}

  ngOnInit(){
    //this.twimpService.getTwimps().subscribe(twimps => this.twimpList = twimps);
    this.twimpService.getTwimps().subscribe(twimps =>{
      from(twimps).subscribe(twimp =>{
        this.authorService.getAuthor(twimp.author.id).subscribe(author =>{
          twimp.author=author;
          this.twimpService.getFavoritesByAuthor(this.authService.token?.idAuthor, twimp.id).subscribe(favorite=>{
            twimp.favorite_1=favorite;
            this.twimpList.push(twimp);
          });
        });
      });
    });
  }

}
