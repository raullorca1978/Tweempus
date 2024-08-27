import { Component, OnInit } from '@angular/core';
import { Twimp } from '../twimp.model';
import { Author } from '../../author/author.model';

@Component({
  selector: 'tweempus-twimp-list',
  templateUrl: './twimp-list.component.html',
  styleUrl: './twimp-list.component.css'
})
export class TwimpListComponent implements OnInit {

  text: string= "Mi texto para los twimps"
  //Creamos un array de Twimp llamado twimps
  twimps: Twimp[] = [];

  authors: Author[] = [];
  
  ngOnInit(){
    this.authors.push(new Author('1'));
    this.twimps.push(new Twimp('1', '' , this.authors[0], this.text, '01/01/2000'));
    this.twimps.push(new Twimp('2', '' , this.authors[0], this.text, '01/01/2000'));
    this.twimps.push(new Twimp('3', '' , this.authors[0], this.text, '01/01/2000'));
    this.twimps.push(new Twimp('4', '' , this.authors[0], this.text, '01/01/2000'));
  }

}
