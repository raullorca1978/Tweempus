import { Injectable } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable,catchError, map, throwError } from 'rxjs';
import { Twimp } from './twimp.model';
import { Author } from '../author/author.model';

@Injectable({
  providedIn: 'root'
})
export class TwimpService {
  private url: string='http://localhost:3000/twimps';
  private urlFavorite: string= 'http://localhost:3000/author-favorites';
  private urlTwimps: string='http://localhost:3000/twimps';

  constructor(
    private httpClient: HttpClient
  ) { }

  getTwimps(): Observable<Twimp[]>{
    let twimps: Twimp[]=[];

    return this.httpClient.get(this.url).pipe(
      map((dbTwimpList: any) =>{
        for(let i in dbTwimpList){
          let twimp: Twimp = new Twimp(dbTwimpList[i].id,'localhost:4200/twimp/'+ dbTwimpList[i].id, new Author(dbTwimpList[i].author),
          dbTwimpList[i].content, dbTwimpList[i].timestamp);
          twimps.push(twimp);
        }
        return twimps;
      }),
      catchError(this.handleError)
    );

  }

getFavoritesByAuthor(idAuthor: string, idTwimp: string): Observable<boolean>{
  return this.httpClient.get(this.urlFavorite + '/'+ idAuthor).pipe(
    map((response: any) => {
      let favorites: string[] = response['twimps'];
      if(favorites.indexOf(idTwimp ) == -1){
        return false
      }else
        return true
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

setFavoriteTwimps(idAuthor:string, dbTwimpList: any): Observable<any>{
  let dbFavoriteTwimps: any={
    'id': idAuthor,
    'twimps': dbTwimpList 
  };
  return this.httpClient.put(this.urlTwimps +'/'+ idAuthor, dbFavoriteTwimps).pipe(
    catchError(this.handleError)
  );
}

borrarFavoriteTwimps(idAuthor:string, dbTwimpList: any): Observable<any>{
  let dbFavoriteTwimps: any={
    'id': idAuthor,
    'twimps': dbTwimpList 
  };
  return this.httpClient.delete(this.urlTwimps +'/'+ idAuthor, dbFavoriteTwimps).pipe(
    catchError(this.handleError)
  );
}

setTwimp(twimp: Twimp): Observable<any> {
  let dbTwimp: any = {
    'id': twimp.id,
    'author': twimp.author.id,
    'by': twimp.author.fullName,
    'content': twimp.content,
    'timestamp': twimp.timestamp
  };

  return this.httpClient.post(this.url, dbTwimp).pipe(
    catchError(this.handleError)
  );
}
}
