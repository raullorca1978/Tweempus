import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable,catchError, map, throwError } from 'rxjs';
import { Author } from './author.model';


@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url: string= 'http://localhost:3000/authors';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAuthor(id: string):Observable<any>{
    let author: Author = new Author(id);
    //let author: Author = null; //asi es en el curso
    return this.httpClient.get<Author>(this.url + '/'+ id).pipe(
      map(dbAuthor =>{
        author= new Author(dbAuthor.id);
        author.fullName = dbAuthor.fullName;
        author.image = dbAuthor.image;
        author.url ='http://localhost:4200/author/' + dbAuthor; 
        return author
      }),
      catchError(this.handleError)
    );

  }

  handleError(error: any){
    let erroMsg = (error.message) ? error.message:
    error.status? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(erroMsg);
    return  throwError(()=> erroMsg)
  }
}
