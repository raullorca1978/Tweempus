import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../shared/author/author.service';

@Component({
  selector: 'tweempus-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit{
  constructor(
    private authorService: AuthorService

  ){}

  ngOnInit(){
    this.authorService.getAuthor(`1`).subscribe(author => console.log(author))
  }

}
