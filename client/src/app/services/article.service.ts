import { Injectable } from '@angular/core';
import { Article } from '../models/Article';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
  
export class ArticleService {

  articles: Article[];

  data: Observable<Array<any>>;

  constructor() {
    this.articles = [
      {
        id: 1,
        pubDate: new Date('10/20/2020'),
        title: 'Blog title 1',
        author: 'Andrea Marie',
        img: 'https://picsum.photos/75/50?random=3',
        content: 'There are many variations of passages of Lorem Ipsum available',
        isActive: true,
        loaded: true,
        isUpcoming: false
      },
      {
        id: 2,
        pubDate: new Date('10/20/2020'),
        title: 'Blog title 2',
        author: 'Rhys Joseph',
        img: 'https://picsum.photos/75/50?random=2',
        content: 'There are many variations of passages of Lorem Ipsum available',
        loaded: true,
        isActive: false,
        isUpcoming: false,
      },
      {
        id: 3,
        pubDate: new Date('11/10/2020'),
        title: 'Blog title 3',
        author: 'Benny Dog',
        img: 'https://picsum.photos/75/50?random=1',
        content: 'There are many variations of passages of Lorem Ipsum available',
        isActive: false,
        loaded: true,
        isUpcoming: true
      },
    ];
  }

  
  getArticle() { }  

  getArticles(): Article[] { 
    console.log('Making use of article service!')
    return this.articles;
  }

  addArticle(article: Article) { 
    this.articles.unshift(article);
  }

}
