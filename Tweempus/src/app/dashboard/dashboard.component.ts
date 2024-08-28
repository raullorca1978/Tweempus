import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../shared/author/author.service';
import { Twimp } from '../shared/twimp/twimp.model';
import { TwimpService } from '../shared/twimp/twimp.service';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit{

  twimpList: Twimp[] =[];

  constructor(
    private authorService: AuthorService,
    private twimpService: TwimpService

  ){}

  ngOnInit(){
    this.twimpService.getTwimps().subscribe(twimps => this.twimpList = twimps);
  }

}
