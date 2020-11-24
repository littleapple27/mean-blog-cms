import { Injectable } from '@angular/core';
// import { User } from '../models/User';
import { Observable, throwError } from 'rxjs/';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  

export class ArticleService {
  extension: string = 'articles';
  baseUri:string = 'http://127.0.0.1:3000/api/' + this.extension;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}
  
  // Create
  createArticle(data): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }


    // Get all users
  getArticles() {
    return this.http.get(`${this.baseUri}`); 
  }
      
  // Get single user
  getArticle(id): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.errorMgmt)
    )
  }

  // Update employee
  updateArticle(id, data): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  // Delete employee
  deleteArticle(id): Observable<any> {
    let url = `${this.baseUri}/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  findByTitle(title) {
    return this.http.get(`${this.baseUri}?title=${title}`);
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

 }








// import { Injectable } from '@angular/core';
// import { Article } from '../models/Article';
// import { Observable } from 'rxjs/';

// @Injectable({
//   providedIn: 'root'
// })
  
// export class ArticleService {

//   articles: Article[];

//   data: Observable<Array<any>>;

//   constructor() {
//     this.articles = [
//       {
//         id: 1,
//         pubDate: new Date('10/20/2020'),
//         title: 'Blog title 1',
//         author: 'Andrea Marie',
//         img: 'https://picsum.photos/75/50?random=3',
//         content: 'There are many variations of passages of Lorem Ipsum available',
//         isActive: true,
//         loaded: true,
//         isUpcoming: false
//       },
//       {
//         id: 2,
//         pubDate: new Date('10/20/2020'),
//         title: 'Blog title 2',
//         author: 'Rhys Joseph',
//         img: 'https://picsum.photos/75/50?random=2',
//         content: 'There are many variations of passages of Lorem Ipsum available',
//         loaded: true,
//         isActive: false,
//         isUpcoming: false,
//       },
//       {
//         id: 3,
//         pubDate: new Date('11/10/2020'),
//         title: 'Blog title 3',
//         author: 'Benny Dog',
//         img: 'https://picsum.photos/75/50?random=1',
//         content: 'There are many variations of passages of Lorem Ipsum available',
//         isActive: false,
//         loaded: true,
//         isUpcoming: true
//       },
//     ];
//   }

  
//   getArticle() { }  

//   getArticles(): Article[] { 
//     console.log('Making use of article service!')
//     return this.articles;
//   }

//   addArticle(article: Article) { 
//     this.articles.unshift(article);
//   }

// }
